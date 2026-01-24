import React from 'react';
import { useTranslation } from 'react-i18next';
// Bandeiras SVG inline para melhor performance
const flags = {
  en: (
    <img src="/assets/images/flag_us.png" alt="English" className="w-7 h-7 rounded-full border border-gray-200 shadow object-cover" />
  ),
  pt: (
    <img src="/assets/images/flag_br.png" alt="Português" className="w-7 h-7 rounded-full border border-gray-200 shadow object-cover" />
  ),
  es: (
    <img src="/assets/images/flag_es.png" alt="Español" className="w-7 h-7 rounded-full border border-gray-200 shadow object-cover" />
  )
};

const LANGS = [
  { code: 'pt', label: 'Português', flag: flags.pt },
  { code: 'en', label: 'English', flag: flags.en },
  { code: 'es', label: 'Español', flag: flags.es },
];

const whatsappUrl =
  'https://wa.me/5521970086562?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20seu%20portf%C3%B3lio!';

const Header: React.FC<{ onLangChange?: (lang: string) => void; currentLang?: string }> = ({ onLangChange, currentLang = 'pt' }) => {
  const { t } = useTranslation();
  return (
    <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent tracking-tight">
              Kleiton Albuquerque
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-500 items-center">
            <a href="#about" className="hover:text-blue-600 transition-colors scroll-smooth">{t('about')}</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors scroll-smooth">{t('experience')}</a>
            <a href="#education" className="hover:text-blue-600 transition-colors scroll-smooth">{t('education')}</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-all text-xs shadow-lg shadow-slate-200 flex items-center justify-center">
              <svg width="22" height="22" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#25D366"/><path fill="#fff" d="M24.47 21.07c-.34.95-1.67 1.75-2.3 1.87-.59.12-1.32.17-2.13-.13-.49-.18-1.12-.36-1.93-.71-3.39-1.47-5.6-5.09-5.77-5.33-.16-.24-1.38-1.84-1.38-3.51 0-1.67.87-2.5 1.18-2.85.31-.35.68-.44.9-.44.22 0 .45.01.65.01.21 0 .49-.08.77.59.29.67.98 2.3 1.06 2.47.08.17.13.37.03.6-.1.23-.15.37-.3.57-.15.2-.31.44-.44.59-.15.17-.3.35-.13.68.17.33.76 1.25 1.62 2.03 1.12.99 2.06 1.3 2.39 1.45.33.15.52.13.71-.08.19-.21.81-.94 1.03-1.26.22-.32.43-.27.72-.16.29.11 1.84.87 2.16 1.03.32.16.53.24.61.37.08.13.08.76-.26 1.71z"/></svg>
            </a>
            <div className="flex gap-2 ml-4">
              {LANGS.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => onLangChange && onLangChange(lang.code)}
                  className={`rounded-full p-1 border-2 ${currentLang === lang.code ? 'border-blue-600' : 'border-transparent'} hover:border-blue-400 transition-all`}
                  aria-label={lang.label}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
