
import React from 'react';
import { SKILLS } from '../constants';

const SkillsCarousel: React.FC = () => {
  // Duplicate skills to ensure seamless infinite scroll
  const doubleSkills = [...SKILLS, ...SKILLS];

  return (
    <div className="w-full bg-white py-12 border-y border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 text-center">Tech Stack & Ecosystem</h2>
      </div>
      <div className="flex">
        <div className="animate-scroll">
          {doubleSkills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center mx-8 group"
            >
              <div className="w-16 h-16 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="mt-2 text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;
