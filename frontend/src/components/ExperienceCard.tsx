import React from 'react';
import { motion } from 'framer-motion';

export interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
}

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_40px_1fr] gap-4 md:gap-6 w-full mb-8 md:mb-24 items-center my-5 sm:!m-0 group relative">

      {/* Timeline Dot */}
      <div className={`
          z-20 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 
          bg-brand-bg border border-brand-light/30 group-hover:border-brand-accent rounded-none rotate-45 transition-colors duration-500 shrink-0
          col-start-1 md:col-start-2 row-start-1 justify-self-center
      `}>
        <div className="w-1.5 h-1.5 bg-brand-light/50 group-hover:bg-brand-accent transition-colors duration-500" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`
          border border-brand-light/20 bg-brand-bg/50 backdrop-blur-sm p-6 relative hover:border-brand-accent/60 transition-colors duration-500
          col-start-2 row-start-1 md:w-full
          ${isEven
            ? 'md:col-start-1 md:text-right md:justify-self-end'
            : 'md:col-start-3 md:text-left md:justify-self-start'}
        `}
      >
        {/* Subtle line decorations */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
          <span className="text-[10px] tracking-[0.2em] uppercase text-brand-accent/80 font-bold whitespace-nowrap">
            {item.date}
          </span>
          <div className="h-[1px] bg-brand-light/20 grow" />
        </div>

        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 ${isEven ? 'md:flex-row-reverse' : ''}`}>
          <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
            <h3 className="text-lg md:text-xl font-light tracking-widest uppercase text-brand-light mb-1">{item.title}</h3>
            <h4 className="text-[10px] uppercase tracking-[0.15em] text-brand-light/60 mb-2">{item.company}</h4>
            <p className="text-[11px] text-brand-light/70 leading-relaxed font-light">
              {item.description}
            </p>
          </div>

          <div className={`flex flex-wrap sm:flex-col gap-2 shrink-0 ${isEven ? 'justify-start md:items-start' : 'justify-start md:items-end'}`}>
            {item.skills.map((skill: string, i: number) => (
              <span key={i} className="text-[8px] uppercase tracking-[0.2em] border border-brand-light/20 px-2 py-1 text-brand-light/60 bg-brand-light/5 hover:bg-brand-accent/10 hover:text-brand-accent transition-colors cursor-default whitespace-nowrap">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;