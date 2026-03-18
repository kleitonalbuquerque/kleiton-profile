import { mkdtemp, readdir, rm, cp } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const [repoUrl, branch] = process.argv.slice(2);

if (!repoUrl || !branch) {
  console.error('Usage: node scripts/publish-dist.mjs <repo-url> <branch>');
  process.exit(1);
}

const distDir = path.resolve('dist');
const tempDir = await mkdtemp(path.join(os.tmpdir(), 'portfolio-publish-'));

const run = (args, cwd = process.cwd()) => {
  const result = spawnSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  if (result.error) {
    console.error(result.error);
    process.exit(1);
  }

  if (result.stdout) {
    process.stdout.write(result.stdout);
  }

  if (result.stderr) {
    process.stderr.write(result.stderr);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};

const runQuiet = (args, cwd = process.cwd()) => {
  const result = spawnSync('git', args, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  if (result.error) {
    throw result.error;
  }

  return {
    status: result.status ?? 1,
    stdout: result.stdout?.trim() ?? '',
    stderr: result.stderr?.trim() ?? '',
  };
};

const branchExists = runQuiet(['ls-remote', '--heads', repoUrl, branch]).status === 0;
if (branchExists) {
  run(['clone', '--depth', '1', '--branch', branch, repoUrl, tempDir]);
} else {
  run(['clone', repoUrl, tempDir]);
  run(['checkout', '--orphan', branch], tempDir);
}

for (const entry of await readdir(tempDir, { withFileTypes: true })) {
  if (entry.name === '.git') {
    continue;
  }

  await rm(path.join(tempDir, entry.name), { recursive: true, force: true });
}

await cp(distDir, tempDir, { recursive: true });

run(['add', '-A'], tempDir);

const diff = runQuiet(['diff', '--cached', '--quiet'], tempDir);

if (diff.status === 0) {
  console.log(`No changes to publish to ${repoUrl}#${branch}`);
  process.exit(0);
}

run(['commit', '-m', `Deploy ${branch}`], tempDir);
run(['push', 'origin', branch, '--force'], tempDir);
