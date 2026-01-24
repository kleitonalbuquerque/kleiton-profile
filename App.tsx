
import React from 'react';

import NeuralBackground from './components/NeuralBackground';
import SkillsCarousel from './components/SkillsCarousel';
import AIAssistant from './components/AIAssistant';
import { EXPERIENCES, EDUCATION } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent tracking-tight">
                Kleiton Albuquerque
              </span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-500">
              <a href="#about" className="hover:text-blue-600 transition-colors">Sobre</a>
              <a href="#experience" className="hover:text-blue-600 transition-colors">Experiência</a>
              <a href="#education" className="hover:text-blue-600 transition-colors">Educação</a>
              <a href="mailto:kleiton2102@gmail.com" className="bg-slate-900 text-white px-5 py-2 rounded-xl hover:bg-blue-600 transition-all text-xs shadow-lg shadow-slate-200">
                Contato
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - White Background */}
      <section id="about" className="relative pt-32 pb-20 px-4 min-h-[90vh] flex items-center justify-center overflow-hidden scroll-mt-20 bg-white">
        <NeuralBackground />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <div className="inline-block bg-blue-50 text-blue-600 font-bold tracking-widest text-[10px] uppercase px-4 py-1.5 rounded-full border border-blue-100 shadow-sm">
              Java • Python • React • AI Applications
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Software <span className="text-blue-600">Engineer</span> & AI Specialist
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Especialista em arquiteturas corporativas robustas utilizando <span className="text-slate-900 font-semibold underline decoration-blue-500/30">Java (Spring Boot)</span> e automação inteligente com <span className="text-slate-900 font-semibold underline decoration-blue-500/30">Python</span>. Desenvolvedor Full Stack focado em soluções escaláveis e experiências de usuário refinadas.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="https://www.linkedin.com/in/kleiton-albuquerque/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:shadow-2xl transition-all active:scale-95 shadow-xl shadow-slate-100"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:kleiton2102@gmail.com"
                className="flex items-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95"
              >
                Falar comigo
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white bg-slate-100">
                <img 
                  src="/assets/images/kleiton_foto.jpg" 
                  alt="Kleiton Albuquerque" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://ui-avatars.com/api/?name=Kleiton+Albuquerque&size=512&background=0f172a&color=fff";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Carousel */}
      <SkillsCarousel />

      {/* Experience Section - Gray Background */}
      <section id="experience" className="bg-gray-50 py-32 px-4 scroll-mt-20 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Experiência Profissional</h2>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <div 
                key={idx} 
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-blue-600 font-bold text-lg">{exp.company}</p>
                  </div>
                  <span className="text-xs font-black text-gray-500 uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-full border border-gray-100 self-start md:self-center">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-600 leading-relaxed">
                      <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section - White Background */}
      <section id="education" className="bg-white py-32 px-4 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Educação & Certificações</h2>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="p-10 bg-gray-50 rounded-3xl border border-gray-100 flex items-start gap-6 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7"/></svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">{edu.degree}</h3>
                  <p className="text-gray-500 font-semibold">{edu.institution}</p>
                  <p className="text-blue-600 text-xs font-black uppercase tracking-tighter">{edu.period}</p>
                </div>
              </div>
            ))}
            <div className="p-10 bg-slate-900 text-white rounded-3xl flex items-start gap-6 shadow-xl shadow-slate-200">
              <div className="p-4 bg-slate-800 rounded-2xl">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Certified Scrum Master</h3>
                <p className="text-slate-400 font-medium">Scrum Alliance</p>
                <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-500/20">
                  Status: Ativa
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Slate Background */}
      <footer className="bg-slate-950 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Kleiton Albuquerque</h2>
            <p className="text-slate-400 text-sm max-w-sm">Software Engineer | Java • Python • React • AI Applications</p>
          </div>
          <div className="flex gap-10 font-bold text-sm">
            <a href="https://www.linkedin.com/in/kleiton-albuquerque/" target="_blank" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:kleiton2102@gmail.com" className="text-slate-400 hover:text-white transition-colors">Email</a>
          </div>
          <div className="space-y-2 text-right">
            <p className="text-slate-500 text-[10px] uppercase font-black tracking-[0.3em]">
              © {new Date().getFullYear()} RIO DE JANEIRO, BRASIL
            </p>
          </div>
        </div>
      </footer>

      {/* AI Floating Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;
