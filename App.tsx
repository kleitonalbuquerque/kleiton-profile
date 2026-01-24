
import React, { useState } from 'react';
import './i18n';
import { useTranslation } from 'react-i18next';

import NeuralBackground from './components/NeuralBackground';
import SkillsCarousel from './components/SkillsCarousel';
import AIAssistant from './components/AIAssistant';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';
import Header from './components/Header';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'pt');

  const handleLangChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <div className="relative min-h-screen scroll-smooth">
      {/* Header */}
      <Header onLangChange={handleLangChange} currentLang={lang} />

      {/* Hero Section - White Background */}
      <section id="about" className="relative pt-32 pb-20 px-4 min-h-[90vh] flex items-center justify-center overflow-hidden scroll-mt-20 bg-white">
        <NeuralBackground />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <div className="inline-block bg-blue-50 text-blue-600 font-bold tracking-widest text-[10px] uppercase px-4 py-1.5 rounded-full border border-blue-100 shadow-sm">
              {t('hero_stack')}
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t('hero_title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              {t('hero_description')}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="https://www.linkedin.com/in/kleiton-albuquerque/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:shadow-2xl transition-all active:scale-95 shadow-xl shadow-slate-100"
              >
                {t('linkedin')}
              </a>
              <a 
                href="mailto:kleiton2102@gmail.com"
                className="flex items-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95"
              >
                {t('talk_to_me')}
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

      {/* Experience Section */}
      <ExperienceSection />

      {/* Education Section */}
      <EducationSection />

      {/* Footer */}
      <Footer />

      {/* AI Floating Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;
