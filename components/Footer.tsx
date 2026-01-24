import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-950 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">Kleiton Albuquerque</h2>
          <p className="text-slate-400 text-sm max-w-sm">{t('footer_subtitle')}</p>
        </div>
        <div className="flex gap-10 font-bold text-sm">
          <a href="https://www.linkedin.com/in/kleiton-albuquerque/" target="_blank" className="text-slate-400 hover:text-white transition-colors" rel="noopener noreferrer">{t('linkedin')}</a>
          <a href="mailto:kleiton2102@gmail.com" className="text-slate-400 hover:text-white transition-colors">{t('email')}</a>
        </div>
        <div className="space-y-2 text-right">
          <p className="text-slate-500 text-[10px] uppercase font-black tracking-[0.3em]">
            © {new Date().getFullYear()} {t('footer_location')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
