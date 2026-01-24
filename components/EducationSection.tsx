import React from 'react';
import { EDUCATION } from '../constants';
import { useTranslation } from 'react-i18next';


const EducationSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="education" className="bg-white py-32 px-4 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">{t('education_certifications')}</h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, idx) => (
            <div key={edu.degree + edu.institution} className="p-10 bg-gray-50 rounded-3xl border border-gray-100 flex items-start gap-6 hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7"/></svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 leading-tight">{t(`edu_${idx}_degree`, edu.degree)}</h3>
                <p className="text-gray-500 font-semibold">{t(`edu_${idx}_institution`, edu.institution)}</p>
                <p className="text-blue-600 text-xs font-black uppercase tracking-tighter">{t(`edu_${idx}_period`, edu.period)}</p>
              </div>
            </div>
          ))}
          <div className="p-10 bg-slate-900 text-white rounded-3xl flex items-start gap-6 shadow-xl shadow-slate-200">
            <div className="p-4 bg-slate-800 rounded-2xl">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{t('scrum_master_title', 'Certified Scrum Master')}</h3>
              <p className="text-slate-400 font-medium">{t('scrum_master_org', 'Scrum Alliance')}</p>
              <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-500/20">
                {t('scrum_master_status', 'Status: Ativa')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
