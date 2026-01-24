
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
            <div className="inline-block bg-blue-50 text-blue-600 font-bold tracking-widest text-[10px] uppercase px-4 py-1.5 rounded-full border border-blue-100 shadow-sm whitespace-nowrap overflow-x-auto">
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
                href="https://wa.me/5521970086562?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20seu%20portf%C3%B3lio!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold transition-all active:scale-95 hover:bg-[#e9f9ee] group"
              >
                <svg width="30" height="30" fill="none" viewBox="0 0 32 32" className="transition-all" style={{ minWidth: 30, minHeight: 30 }}>
                  <circle cx="16" cy="16" r="16" fill="#128C7E"/>
                  <path fill="#fff" d="M24.47 21.07c-.34.95-1.67 1.75-2.3 1.87-.59.12-1.32.17-2.13-.13-.49-.18-1.12-.36-1.93-.71-3.39-1.47-5.6-5.09-5.77-5.33-.16-.24-1.38-1.84-1.38-3.51 0-1.67.87-2.5 1.18-2.85.31-.35.68-.44.9-.44.22 0 .45.01.65.01.21 0 .49-.08.77.59.29.67.98 2.3 1.06 2.47.08.17.13.37.03.6-.1.23-.15.37-.3.57-.15.2-.31.44-.44.59-.15.17-.3.35-.13.68.17.33.76 1.25 1.62 2.03 1.12.99 2.06 1.3 2.39 1.45.33.15.52.13.71-.08.19-.21.81-.94 1.03-1.26.22-.32.43-.27.72-.16.29.11 1.84.87 2.16 1.03.32.16.53.24.61.37.08.13.08.76-.26 1.71z"/>
                </svg>
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
