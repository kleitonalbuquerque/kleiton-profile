import React from 'react';
import { EXPERIENCES } from '../constants';
import { useTranslation } from 'react-i18next';


const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="bg-gray-50 py-32 px-4 scroll-mt-20 border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">{t('professional_experience')}</h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div 
              key={exp.company + exp.period} 
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{t(`exp_${idx}_role`, exp.role)}</h3>
                  <p className="text-blue-600 font-bold text-lg">{t(`exp_${idx}_company`, exp.company)}</p>
                </div>
                <span className="text-xs font-black text-gray-500 uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-full border border-gray-100 self-start md:self-center">
                  {t(`exp_${idx}_period`, exp.period)}
                </span>
              </div>
              <ul className="space-y-4">
                {exp.description.map((item, i) => (
                  <li key={item.slice(0, 32)} className="flex items-start gap-4 text-gray-600 leading-relaxed">
                    <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                    {t(`exp_${idx}_desc_${i}`, item)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
