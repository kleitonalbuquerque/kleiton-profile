import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
// Bandeiras SVG inline para melhor performance
const flags = {
  en: (
    <span className="block w-7 h-7 rounded-full border border-gray-200 shadow overflow-hidden flex items-center justify-center bg-white">
      <ReactCountryFlag countryCode="US" svg style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
    </span>
  ),
  pt: (
    <span className="block w-7 h-7 rounded-full border border-gray-200 shadow overflow-hidden flex items-center justify-center bg-white">
      <ReactCountryFlag countryCode="BR" svg style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
    </span>
  ),
  es: (
    <span className="block w-7 h-7 rounded-full border border-gray-200 shadow overflow-hidden flex items-center justify-center bg-white">
      <ReactCountryFlag countryCode="ES" svg style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
    </span>
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
