import { useState, useEffect } from 'react';
import { accentArtworks } from '../data/artworks';
import AcademicCard, { type AcademicItem } from '../components/AcademicCard';
import { client, urlFor } from '../sanityClient';

// ─── Import the fierce Bhairava/Kali for the background watermark ───────────
import aw10 from '../assets/artworks/CamScanner 08-05-2026 14.51_10.jpg';

// ─── Artwork Panel — replaces old SymbolBox ──────────────────────────────────
const ArtworkPanel = () => (
    <div className="relative w-full max-w-[240px] md:max-w-[280px] group overflow-hidden">
        {/* Outer decorative border */}
        <div className="absolute -inset-[6px] border border-white/20 pointer-events-none z-10" />

        {/* Main image */}
        <img
            src={accentArtworks.academicPanel}
            alt="Mahishasuramardini"
            loading="lazy"
            decoding="async"
            className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Bottom label overlay */}
        <div className="absolute inset-x-0 bottom-0 py-4 px-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <p className="text-[9px] tracking-[0.25em] uppercase text-white/50 mb-0.5">Acrylic on Canvas</p>
            <p
                className="text-white/90 text-base font-serif leading-tight"
                style={{ fontFamily: 'Times New Roman, Times, serif' }}
            >
                Mahishasuramardini
            </p>
        </div>

        {/* Rotated "SHOW IT RIGHT" banner — kept from original design */}
        <div className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-bold py-1 px-4 transform rotate-3 text-[10px] tracking-widest whitespace-nowrap shadow-lg">
            SHOW IT RIGHT
        </div>
    </div>
);

// ─── Main Section ─────────────────────────────────────────────────────────────
const AcademicsSection = () => {
    const [academicData, setAcademicData] = useState<AcademicItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAcademics = async () => {
            try {
                const data = await client.fetch('*[_type == "education"] | order(yearEnd desc)');
                const mappedData = data.map((item: any) => ({
                    _id: item._id,
                    degree: item.degree,
                    field: item.field,
                    institution: item.institution,
                    yearStart: item.yearStart,
                    yearEnd: item.yearEnd,
                    artworkSrc: item.artwork ? urlFor(item.artwork).url() : undefined,
                    artworkTitle: item.degree,
                }));
                setAcademicData(mappedData);
            } catch (error) {
                console.error('Error fetching academics:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchAcademics();
    }, []);

    return (
        <div
            className="min-h-screen bg-[#050505] text-white relative py-20 px-6 md:px-12 lg:px-28 overflow-hidden"
            id="academics"
        >
            {/* ── Background watermark artwork (Bhairava — ghosted) ── */}
            <div
                className="absolute inset-0 z-0 pointer-events-none select-none"
                aria-hidden="true"
            >
                <img
                    src={aw10}
                    alt=""
                    className="absolute right-0 top-0 h-full w-auto object-cover object-right opacity-[0.04] mix-blend-luminosity"
                />
                {/* Gradient fade so watermark doesn't bleed into left text */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
            </div>

            {/* ── Thin top accent line ── */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

            {/* ── HEADER ROW ── */}
            <div className="w-full max-w-7xl mx-auto mb-16 md:mb-20 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-8">

                    {/* Big text */}
                    <div className="flex-1">
                        {/* Section label */}
                        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-5">
                            / Academic Journey
                        </p>
                        <h2
                            className="text-[14vw] lg:text-[7vw] xl:text-[7.5rem] font-black leading-[0.88] uppercase tracking-tighter m-0"
                            style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif' }}
                        >
                            M<span className="text-transparent" style={{
                                WebkitTextStroke: '2px rgba(245,230,211,0.4)',
                            }}>*</span>Y
                            <br />
                            <span className="text-white/90">ACADEMICS</span>
                        </h2>
                    </div>

                    {/* Artwork panel (right side) — replaces SVG SymbolBox */}
                    <div className="hidden lg:flex flex-col items-end gap-4 relative pt-4">
                        <ArtworkPanel />

                        {/* Circular badge — keeping the original's spirit */}
                        <div
                            className="absolute -bottom-8 -left-8 z-20 w-20 h-20 rounded-full flex items-center justify-center shadow-xl ring-1 ring-white/10"
                            style={{
                                background: 'conic-gradient(from 180deg, #facc15, #f97316, #ec4899, #facc15)',
                            }}
                        >
                            <div className="w-16 h-16 rounded-full bg-[#050505] flex items-center justify-center">
                                <span className="text-white font-black text-[9px] text-center leading-tight tracking-wider uppercase">
                                    ACAD<br />EMIC
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── ACADEMIC ENTRIES ── */}
            <div className="w-full max-w-5xl mx-auto relative z-10">
                {loading ? (
                    <div className="flex justify-center items-center h-40 border-t border-white/20 pt-8">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-pink-500" />
                    </div>
                ) : (
                    <div>
                        {academicData.map((item, index) => (
                            <AcademicCard key={item._id || index} item={item} index={index} />
                        ))}
                    </div>
                )}
            </div>



            {/* ── Bottom decoration — thin scroll hint ── */}
            <div className="relative z-10 mt-24 flex justify-center opacity-30">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-[1px] h-10 bg-white animate-pulse" />
                    <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
                </div>
            </div>
        </div>
    );
};

export default AcademicsSection;