import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface AcademicItem {
    _id?: string;
    degree: string;
    field: string;
    institution: string;
    yearStart: string;
    yearEnd: string;
    artworkSrc?: string;
    artworkTitle: string;
}

interface AcademicCardProps {
    item: AcademicItem;
    index: number;
}

const AcademicCard: React.FC<AcademicCardProps> = ({ item, index }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
            viewport={{ once: true, margin: '-50px' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex flex-row gap-6 md:gap-10 items-stretch border-t border-white/20 pt-6 pb-8 group relative cursor-default"
        >
            {/* ── Artwork thumbnail (replaces the circle dot) ── */}
            <div className="flex-shrink-0 relative">
                {item.artworkSrc && (
                    <div
                        className="w-[70px] md:w-[90px] overflow-hidden mb-3"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
                        }}
                    >
                        <img
                            src={item.artworkSrc}
                            alt={item.artworkTitle}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-[90px] md:h-[115px] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                    </div>
                )}

                {/* Year labels below thumbnail */}
                <div className="flex flex-col">
                    <span
                        className="text-xs md:text-sm text-white/40 mt-0.5 font-mono"
                    >
                        {item.yearStart}
                    </span>
                    <span
                        className="text-lg md:text-xl font-black tracking-tight leading-none transition-colors duration-300"
                        style={{ color: hovered ? '#f5e6d3' : 'rgba(255,255,255,0.9)' }}>
                        — {item.yearEnd}
                    </span>
                </div>
            </div>

            {/* ── Text content ── */}
            <div className="flex flex-col justify-center flex-1">
                <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-2">
                    {item.field}
                </p>
                <h3
                    className="text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-[1] tracking-tight mb-3 transition-colors duration-300"
                    style={{
                        color: hovered ? '#f5e6d3' : 'rgba(255,255,255,0.92)',
                        fontFamily: '"Helvetica Neue", Arial, sans-serif',
                    }}
                >
                    {item.degree}
                </h3>
                <p className="text-xs md:text-sm font-medium text-white/50 uppercase tracking-widest font-mono">
                    {item.institution}
                </p>
            </div>

            {/* ── Hover line accent ── */}
            <div
                className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 transition-all duration-500 ease-out"
                style={{ width: hovered ? '100%' : '0%' }}
            />
        </motion.div>
    );
};

export default AcademicCard;
