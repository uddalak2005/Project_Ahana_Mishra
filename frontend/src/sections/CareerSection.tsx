import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { accentArtworks } from '../data/artworks';
import ExperienceCard, { type ExperienceItem } from '../components/ExperienceCard';
import { client } from '../sanityClient';

const CareerSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [experienceData, setExperienceData] = useState<ExperienceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const data = await client.fetch('*[_type == "experience"] | order(yearStart desc)');
        const mappedData = data.map((item: any) => ({
          title: item.title,
          company: item.organization,
          date: `${item.yearStart} - ${item.yearEnd || 'Present'}`,
          description: item.description,
          skills: item.type ? [item.type.charAt(0).toUpperCase() + item.type.slice(1)] : []
        }));
        setExperienceData(mappedData);
      } catch (error) {
        console.error('Error fetching experience data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-light font-sans relative py-24 md:py-32 px-4 overflow-hidden border-t border-brand-light/30 selection:bg-brand-accent selection:text-brand-dark" id="experience">

      {/* Background Decorative Lines */}
      <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-[1px] bg-brand-light/10 z-0"></div>
      <div className="hidden md:block absolute left-3/4 top-0 bottom-0 w-[1px] bg-brand-light/10 z-0"></div>

      {/* Floating Artwork Accent */}
      <div className="hidden xl:block absolute right-10 top-1/3 w-64 opacity-60 hover:opacity-100 transition-opacity duration-500 z-0 mix-blend-luminosity hover:mix-blend-normal group cursor-pointer">
        <div className="relative w-full overflow-hidden border border-brand-light/20" style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%)' }}>
          <img
            src={accentArtworks.careerAccent}
            alt="Career Accent"
            loading="lazy"
            decoding="async"
            className="w-full h-80 object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-brand-bg/40 mix-blend-multiply" />
        </div>
        <div className="flex items-center gap-2 mt-3 justify-end pr-2">
          <span className="text-[8px] tracking-[0.2em] uppercase opacity-50 text-right">Bhairava — <br /> Acrylic on Canvas</span>
          <div className="w-4 h-[1px] bg-brand-light/30" />
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 md:px-10 relative z-10">

        {/* Section header */}
        <header className="flex justify-between items-start text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-16 md:mb-20 relative z-10">
          <div className="flex gap-12 md:gap-32">
            <span className="opacity-60">A.M.</span>
            <span className="opacity-60">KOLKATA, INDIA</span>
          </div>
          <span className="opacity-40 hidden md:block">/ CAREER PATH</span>
        </header>

        {/* Title block */}
        <div className="relative z-10 mb-16 md:mb-20">
          <div className="flex items-end gap-6 mb-6 flex-wrap">
            <h2
              className="text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[0.8] font-serif tracking-[-0.02em] font-normal uppercase"
              style={{ fontFamily: 'Times New Roman, Times, serif' }}
            >
              EXPERIENCE
            </h2>
            <span className="text-sm md:text-base font-medium tracking-widest mb-3 md:mb-5 opacity-60">キャリア</span>
          </div>
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase opacity-50 max-w-sm">
            My journey through internships, projects, and professional roles that shaped my technical and psychological expertise.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64 relative">
            <div className="absolute inset-0 border border-brand-light/10 animate-[spin_3s_linear_infinite] w-16 h-16 mx-auto rotate-45" />
            <div className="absolute inset-0 border border-brand-accent/40 animate-[spin_2s_linear_infinite_reverse] w-10 h-10 mx-auto mt-3 rotate-45" />
            <span className="text-[9px] uppercase tracking-widest text-brand-accent animate-pulse mt-24">Loading</span>
          </div>
        ) : (
          <div ref={containerRef} className="relative w-full mx-auto max-w-4xl">

            {/* Vertical Progress Line */}
            <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 w-[1px] h-full bg-brand-light/10 overflow-hidden">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-brand-accent"
              />
            </div>

            <div className="space-y-4 pt-10">
              {experienceData.map((item, index) => (
                <ExperienceCard
                  key={index}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-24 md:mt-32 relative z-10">
          <div className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer group">
            <div className="w-[1px] h-20 bg-gradient-to-b from-brand-light/50 to-transparent group-hover:from-brand-accent transition-colors" />
            <div className="w-8 h-8 rotate-45 border border-brand-light/30 flex items-center justify-center mt-4 group-hover:border-brand-accent transition-colors bg-brand-bg">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-light group-hover:text-brand-accent transition-colors -rotate-45">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;