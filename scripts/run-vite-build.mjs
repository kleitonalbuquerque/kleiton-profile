import { spawnSync } from 'node:child_process';

const basePath = process.argv[2];

if (!basePath) {
  console.error('Missing base path. Usage: node scripts/run-vite-build.mjs <base>');
  process.exit(1);
}

const result = spawnSync(
  process.execPath,
  ['./node_modules/vite/bin/vite.js', 'build'],
  {
    stdio: 'inherit',
    env: {
      ...process.env,
      APP_BASE_PATH: basePath,
    },
  }
);

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status ?? 0);
