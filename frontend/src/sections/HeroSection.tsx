import { useState, useEffect } from 'react';
import { client, urlFor } from '../sanityClient';
import HeroImg from "../assets/heroImg.png"
import HeroImgSub from "../assets/HeroImgSub.jpeg";
import { accentArtworks } from '../data/artworks';

const HeroSection = () => {
    const [heroData, setHeroData] = useState<any>(null);

    useEffect(() => {
        client.fetch('*[_type == "heroImage"][0]').then((data) => {
            setHeroData(data);
        }).catch(console.error);
    }, []);

    const leftImageUrl = heroData?.heroImageLeft ? urlFor(heroData.heroImageLeft).url() : HeroImg;
    const rightImageUrl = heroData?.heroImageRight ? urlFor(heroData.heroImageRight).url() : HeroImgSub;
    const altText = heroData?.altText || "Ahana Mishra Portrait";

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-brand-bg text-brand-light font-sans flex flex-col selection:bg-brand-accent selection:text-brand-dark overflow-hidden">
            {/* Mobile Layout */}
            <div className="md:hidden relative w-full h-[100dvh] overflow-hidden flex flex-col text-white">
                {/* Background Image */}
                <img src={leftImageUrl} className="absolute inset-0 w-full h-full object-cover object-center" alt={altText} />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-brand-bg/90"></div>

                {/* Top Header */}
                <div className="relative z-10 flex justify-between p-6 mt-2">
                    <div className="text-[9px] uppercase tracking-[0.15em] leading-relaxed opacity-90">
                        <span className="text-brand-accent font-bold">@AHANA MISHRA</span><br />
                        COUNSELING & RESEARCH<br />
                        PORTFOLIO '26
                    </div>
                    <div className="w-8 h-8 bg-brand-light text-brand-dark font-bold rounded flex items-center justify-center text-sm">
                        A
                    </div>
                </div>

                {/* Arrow Decoration */}
                <div className="relative z-10 mt-auto px-6 mb-2 flex justify-end">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-80"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 px-6 pb-10 flex flex-col">
                    <p className="text-[12px] max-w-[85%] leading-relaxed opacity-90 mb-1">
                        Aspiring psychologist skilled in counseling, teaching, and mental health research.
                    </p>
                    <h1 className="text-[4rem] font-black uppercase tracking-tighter text-brand-accent leading-[0.85] mb-8">
                        AHANA<br />MISHRA
                    </h1>

                    <div className="grid grid-cols-2 gap-3 w-full">
                        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md py-3 px-4 text-[9px] tracking-widest uppercase hover:bg-brand-accent hover:text-brand-dark transition-all">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            About
                        </a>
                        <a href="#academics" onClick={(e) => handleScroll(e, 'academics')} className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md py-3 px-4 text-[9px] tracking-widest uppercase hover:bg-brand-accent hover:text-brand-dark transition-all">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
                            Academic
                        </a>
                        <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md py-3 px-4 text-[9px] tracking-widest uppercase hover:bg-brand-accent hover:text-brand-dark transition-all">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                            Career
                        </a>
                        <a href="#achievements" onClick={(e) => handleScroll(e, 'achievements')} className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md py-3 px-4 text-[9px] tracking-[0.1em] uppercase hover:bg-brand-accent hover:text-brand-dark transition-all">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                            Achievements
                        </a>
                        <a href="#gallery" onClick={(e) => handleScroll(e, 'gallery')} className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md py-3 px-4 text-[9px] tracking-widest uppercase hover:bg-brand-accent hover:text-brand-dark transition-all">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                            Gallery
                        </a>
                        <a href="#artworks" onClick={(e) => handleScroll(e, 'artworks')} className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md py-3 px-4 text-[9px] tracking-[0.1em] uppercase hover:bg-brand-accent hover:text-brand-dark transition-all">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 2 3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-6z" /></svg>
                            Artworks
                        </a>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-[30%_45%_25%] md:grid-rows-[100px_1fr_220px] min-h-screen">

                {/* Row 1 */}
                {/* Header Left */}
                <div className="border-b md:border-r border-brand-light/30 flex items-center justify-between md:justify-start px-6 md:px-10 py-6 md:py-0 relative order-1">
                    <div className="absolute right-0 top-1/2 w-4 h-[1px] bg-brand-light/30 transform translate-x-1/2 z-20 hidden"></div>
                    <div className="hidden md:block absolute left-1/4 bottom-0 w-[1px] h-4 bg-brand-light/30 transform translate-y-1/2 z-20"></div>

                    <div className="text-2xl md:text-3xl font-semibold tracking-widest uppercase">Ahana</div>

                    {/* Mobile Contact Button */}
                    <a href="#footer" onClick={(e) => handleScroll(e, 'footer')} className="md:hidden uppercase text-[10px] tracking-[0.2em] border-b border-brand-light/50 pb-1 hover:text-brand-accent hover:border-brand-accent transition-all flex items-center gap-2">
                        Get In Touch <span>↗</span>
                    </a>
                </div>

                {/* Header Center */}
                <div className="hidden md:flex border-b border-r border-brand-light/30 items-center px-10 order-2">
                    <div className="flex gap-4 md:gap-6 text-[12px] tracking-wide font-medium">
                        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-brand-accent transition-colors">About</a>
                        <a href="#academics" onClick={(e) => handleScroll(e, 'academics')} className="hover:text-brand-accent transition-colors">Academic</a>
                        <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-brand-accent transition-colors">Career</a>
                        <a href="#achievements" onClick={(e) => handleScroll(e, 'achievements')} className="hover:text-brand-accent transition-colors">Achievements</a>
                        <a href="#gallery" onClick={(e) => handleScroll(e, 'gallery')} className="hover:text-brand-accent transition-colors">Gallery</a>
                        <a href="#artworks" onClick={(e) => handleScroll(e, 'artworks')} className="hover:text-brand-accent transition-colors">Artwork Gallery</a>
                    </div>
                </div>

                {/* Header Right */}
                <div className="hidden md:flex border-b border-brand-light/30 items-center justify-end px-10 order-3">
                    <a href="#footer" onClick={(e) => handleScroll(e, 'footer')} className="uppercase text-[11px] tracking-[0.2em] border-b border-brand-light/50 pb-1 hover:text-brand-accent hover:border-brand-accent transition-all flex items-center gap-2">
                        Get In Touch <span>↗</span>
                    </a>
                </div>

                {/* Center Main Content - Ordered 2 on mobile to show big text first */}
                <div className="border-b md:border-b-0 md:border-r border-brand-light/30 flex flex-col items-center pt-16 md:pt-24 px-6 md:px-10 relative order-2 md:order-5">
                    <div className="relative flex justify-center w-full">
                        <h1 className="text-[4rem] sm:text-[6.5rem] xl:text-[8.5rem] leading-[0.85] font-black uppercase tracking-tighter text-center">
                            Ahana
                            <br />
                            Mishra
                        </h1>

                        <div className="absolute top-[-20px] right-0 md:top-0 md:right-8 transform translate-x-1/4 -translate-y-1/4">
                            <div className="relative w-24 h-24 md:w-36 md:h-36 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-brand-light/40 animate-[spin_20s_linear_infinite]"></div>
                                <div className="absolute inset-1 rounded-full border-[1px] border-brand-light/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                                <span className="text-brand-accent font-bold text-[10px] md:text-sm tracking-widest transform -rotate-12 uppercase">Psychologist</span>
                            </div>
                        </div>
                    </div>

                    <p className="mt-10 md:mt-14 text-xs md:text-sm max-w-[320px] leading-relaxed opacity-80 border-l-[1px] border-brand-light/40 pl-4 self-center mr-auto ml-4 md:ml-[20%]">
                        Aspiring psychologist skilled in counseling, teaching, and mental health research, with a passion for literature and art.
                    </p>

                    <div className="flex-1 flex items-center justify-center relative w-full mt-8 pb-10 md:pb-0">
                        <div className="hidden md:block absolute left-10 top-0 opacity-40">
                            <div className="w-16 h-[1px] bg-brand-light transform -rotate-45 mb-4"></div>
                            <div className="w-16 h-[1px] bg-brand-light transform -rotate-45 mb-4 translate-x-4"></div>
                            <div className="w-16 h-[1px] bg-brand-light transform -rotate-45 translate-x-8"></div>
                        </div>

                        <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center cursor-pointer group mb-4 md:mb-10">
                            <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-brand-light/60 animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute inset-0 rounded-full border-[1px] border-brand-light/20 scale-105 animate-[spin_15s_linear_infinite_reverse]"></div>
                            <div className="absolute inset-3 bg-brand-accent rounded-full flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 shadow-xl group-hover:shadow-brand-accent/20 overflow-hidden">
                                <div className="absolute inset-[-5px] border-[3px] border-dashed border-brand-bg/15 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-dark rounded-full flex items-center justify-center text-brand-accent mb-1 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform relative z-10">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                                </div>
                                <span className="text-brand-dark font-bold text-[9px] md:text-[11px] tracking-[0.15em] uppercase relative z-10 text-center">View<br />Work</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                {/* Main Left - Ordered 3 on mobile */}
                <div className="hidden md:flex border-b md:border-b-0 md:border-r border-brand-light/30 flex-col px-6 md:px-10 pt-16 md:pt-10 pb-16 md:pb-6 relative order-3 md:order-4">
                    <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-[1px] bg-brand-light/30 z-0"></div>

                    <div className="relative w-full max-w-[240px] md:max-w-[300px] aspect-[3/4] mx-auto mt-4 z-10">
                        <div className="w-full h-full rounded-[150px] overflow-hidden border border-brand-light/20">
                            <img src={leftImageUrl} alt={altText} className="w-full h-full object-cover" />
                        </div>
                        <div className="hidden md:block absolute -bottom-8 right-8 transform rotate-[-15deg]">
                            <div className="text-5xl md:text-7xl font-light opacity-90" style={{ fontFamily: 'cursive' }}>Ahana</div>
                            <div className="text-[8px] md:text-[10px] tracking-widest mt-1 opacity-70 ml-8 uppercase">BSc Psychology</div>
                        </div>
                    </div>
                </div>

                {/* Main Right - Ordered 4 on mobile */}
                <div className="border-b md:border-b-0 flex flex-col px-6 md:px-8 pt-16 md:pt-20 pb-16 md:pb-6 relative order-4 md:order-6">
                    <div className="hidden md:block absolute left-10 top-0 bottom-0 w-[1px] bg-brand-light/30 z-0"></div>

                    <div className="relative w-full max-w-[220px] md:max-w-[260px] aspect-[3/4] mx-auto mt-auto z-10">
                        <div className="w-full h-full rounded-t-full rounded-b-3xl overflow-hidden border border-brand-light/20">
                            <img src={rightImageUrl} alt={altText} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Row 3 */}
                {/* Bottom Left - Ordered 6 on mobile */}
                <div className="border-b md:border-b-0 md:border-t md:border-r border-brand-light/30 px-6 md:px-10 py-10 flex flex-col gap-6 relative overflow-hidden order-6 md:order-7">
                    <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-[1px] bg-brand-light/30 z-0"></div>

                    <div className="hidden md:block absolute right-8 top-8 opacity-30">
                        <div className="w-14 h-[1px] bg-brand-light transform -rotate-45 mb-4"></div>
                        <div className="w-14 h-[1px] bg-brand-light transform -rotate-45 mb-4 translate-x-4"></div>
                        <div className="w-14 h-[1px] bg-brand-light transform -rotate-45 translate-x-8"></div>
                    </div>

                    <div className="relative z-10 flex flex-col gap-4 md:pl-10 items-center md:items-start">
                        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="uppercase text-[11px] tracking-[0.2em] flex items-center gap-2 hover:text-brand-accent w-fit group">
                            <span className="border-b border-brand-light/30 group-hover:border-brand-accent pb-1 transition-all">About</span> <span>↗</span>
                        </a>
                        <a href="#academics" onClick={(e) => handleScroll(e, 'academics')} className="uppercase text-[11px] tracking-[0.2em] flex items-center gap-2 hover:text-brand-accent w-fit group">
                            <span className="border-b border-brand-light/30 group-hover:border-brand-accent pb-1 transition-all">Academic</span> <span>↗</span>
                        </a>
                        <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="uppercase text-[11px] tracking-[0.2em] flex items-center gap-2 hover:text-brand-accent w-fit group">
                            <span className="border-b border-brand-light/30 group-hover:border-brand-accent pb-1 transition-all">Career</span> <span>↗</span>
                        </a>
                        <a href="#achievements" onClick={(e) => handleScroll(e, 'achievements')} className="uppercase text-[11px] tracking-[0.2em] flex items-center gap-2 hover:text-brand-accent w-fit group">
                            <span className="border-b border-brand-light/30 group-hover:border-brand-accent pb-1 transition-all">Achievements</span> <span>↗</span>
                        </a>
                        <a href="#gallery" onClick={(e) => handleScroll(e, 'gallery')} className="uppercase text-[11px] tracking-[0.2em] flex items-center gap-2 hover:text-brand-accent w-fit group">
                            <span className="border-b border-brand-light/30 group-hover:border-brand-accent pb-1 transition-all">Gallery</span> <span>↗</span>
                        </a>
                        <a href="#artworks" onClick={(e) => handleScroll(e, 'artworks')} className="uppercase text-[11px] tracking-[0.2em] flex items-center gap-2 hover:text-brand-accent w-fit group">
                            <span className="border-b border-brand-light/30 group-hover:border-brand-accent pb-1 transition-all">Artwork Gallery</span> <span>↗</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Center - Ordered 5 on mobile */}
                <div className="border-b md:border-b-0 md:border-t md:border-r border-brand-light/30 relative order-5 md:order-8">
                    <div className="w-full md:w-[260px] h-full md:border-r border-brand-light/30 p-8 flex flex-col relative z-10 mx-auto">
                        <h3 className="text-[1.2rem] font-bold uppercase leading-snug tracking-wider text-brand-light text-center md:text-left">Core<br />Areas Of<br />Expertise</h3>
                        <div className="mt-8 md:mt-auto -mx-8 -mb-8 flex flex-col">
                            <div className="flex justify-end items-center pr-6 mb-2 relative">
                                <div className="absolute left-8 right-16 h-[1px] bg-brand-light/30"></div>
                                <span className="text-[11px] opacity-70 tracking-widest uppercase">Skills</span>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="border-t border-r border-b border-brand-light/30 p-4 flex flex-col justify-end items-end h-20">
                                    <span className="font-bold text-xl leading-none mb-1">01</span>
                                    <span className="text-[8px] opacity-60 uppercase tracking-widest">Psychology</span>
                                </div>
                                <div className="border-t border-b border-brand-light/30 p-4 flex flex-col justify-end items-end h-20">
                                    <span className="font-bold text-xl leading-none mb-1">02</span>
                                    <span className="text-[8px] opacity-60 uppercase tracking-widest">Arts</span>
                                </div>
                                <div className="col-span-2 p-4 flex flex-col justify-end items-end h-16">
                                    <span className="font-bold text-xl leading-none mb-1">03</span>
                                    <span className="text-[8px] opacity-60 uppercase tracking-widest">Research</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block absolute right-16 top-10 opacity-30">
                        <div className="w-14 h-[1px] bg-brand-light transform -rotate-45 mb-4"></div>
                        <div className="w-14 h-[1px] bg-brand-light transform -rotate-45 mb-4 translate-x-4"></div>
                        <div className="w-14 h-[1px] bg-brand-light transform -rotate-45 translate-x-8"></div>
                    </div>
                </div>

                {/* Bottom Right - Ordered 7 on mobile */}
                <div className="md:border-t border-brand-light/30 px-6 md:px-10 py-10 flex flex-col justify-between relative order-7 md:order-9 overflow-hidden">
                    <div className="hidden md:block absolute left-10 top-0 bottom-0 w-[1px] bg-brand-light/30 z-0" />

                    {/* Artwork accent tile */}
                    <div className="relative z-10 mb-6 group cursor-pointer">
                        <div className="relative w-full overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)' }}>
                            <img
                                src={accentArtworks.heroAccent}
                                alt="Ganesha — original painting"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-32 md:h-36 object-cover object-top opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                            {/* Subtle overlay so the dark bg bleeds through */}
                            <div className="absolute inset-0 bg-brand-bg/30 mix-blend-multiply" />
                        </div>
                        {/* Label */}
                        <div className="flex items-center gap-2 mt-2">
                            <div className="w-4 h-[1px] bg-brand-light/30" />
                            <span className="text-[8px] tracking-[0.2em] uppercase opacity-40">Ganesha — Acrylic on Canvas</span>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="relative z-10 text-center md:text-left mx-auto md:mx-0">
                        <p className="italic text-[13px] opacity-90 leading-relaxed uppercase tracking-widest max-w-[240px]">
                            "Committed to blending theoretical psychology with hands-on mental health support."
                        </p>
                        <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
                            <span className="text-[11px] opacity-60 uppercase tracking-widest">Ahana Mishra</span>
                            <div className="h-[1px] w-16 bg-brand-light/40" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;