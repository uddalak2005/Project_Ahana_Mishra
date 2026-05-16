import performace1 from "../assets/performance-1.jpeg";
import { accentArtworks } from '../data/artworks';
import { useState, useEffect } from 'react';
import { client, urlFor } from '../sanityClient';

const AboutSection = () => {
    const [aboutData, setAboutData] = useState<any>(null);

    useEffect(() => {
        client.fetch('*[_type == "aboutImage"][0]').then((data) => {
            setAboutData(data);
        }).catch(console.error);
    }, []);

    const aboutImageUrl = aboutData?.aboutImage ? urlFor(aboutData.aboutImage).url() : performace1;
    const altText = aboutData?.altText || "Ahana Mishra Portrait";

    return (
        <section id="about" className="bg-brand-light text-brand-dark font-sans min-h-screen px-6 py-8 md:px-10 md:py-10 flex flex-col relative overflow-hidden">
            {/* Top Navigation Bar */}
            <header className="flex justify-between items-start text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-12 md:mb-16">
                <div className="flex gap-12 md:gap-32">
                    <span>A.M.</span>
                    <span>KOLKATA, INDIA</span>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 flex-1">
                {/* Left Column - Text Content */}
                <div className="flex-1 flex flex-col relative z-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-medium leading-[1.2] uppercase tracking-tight mb-16 md:mb-24 max-w-[95%]">
                        AHANA MISHRA BLENDS EMPATHETIC CARE WITH MODERN RESEARCH TO OFFER A SOPHISTICATED PERSPECTIVE ON MENTAL HEALTH.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-12 flex-1 max-w-[95%]">
                        {/* Sub-column 1 */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-sm md:text-base font-bold tracking-widest uppercase mb-4">/ COMPASSIONATE CARE</h3>
                                <p className="text-base md:text-lg lg:text-xl leading-[1.7] opacity-80">
                                    Ahana's journey is deeply rooted in the belief that mental health is foundational to human flourishing. Her approach seamlessly blends classical therapeutic techniques with a modern understanding of psychological resilience.
                                </p>
                            </div>
                        </div>

                        {/* Sub-column 2 */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-sm md:text-base font-bold tracking-widest uppercase mb-4">/ INNOVATIVE VISION</h3>
                                <p className="text-base md:text-lg lg:text-xl leading-[1.7] opacity-80">
                                    What sets Ahana apart is her ability to integrate empirical research with clinical practice. She fosters environments that are healing, empowering, and deeply transformative for her clients.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Large Text */}
                    <div className="mt-auto flex items-end gap-6 pt-8 pb-2">
                        <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] leading-[0.75] font-serif tracking-[-0.02em] font-normal" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                            ABOUT
                        </h1>
                        <span className="text-sm md:text-base font-medium tracking-widest mb-2 md:mb-4">およそ</span>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="w-full lg:w-[40%] xl:w-[45%] relative flex justify-end">
                    <div className="relative w-full h-[50vh] lg:h-auto min-h-[500px]">
                        <img
                            src={aboutImageUrl}
                            alt={altText}
                            className="w-full h-full object-cover object-center"
                        />

                        {/* ── Floating artwork accent card ── */}
                        <div
                            className="absolute -bottom-6 -left-6 md:-left-10 z-20 w-28 md:w-36 group cursor-pointer"
                            style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.35))' }}
                        >
                            {/* Thin outer frame */}
                            <div className="absolute -inset-[4px] border border-brand-dark/20 pointer-events-none" />
                            <img
                                src={accentArtworks.aboutAccent}
                                alt="Shiva Parvati — original painting"
                                loading="lazy"
                                decoding="async"
                                className="w-full aspect-square object-cover object-top transition-transform duration-700 ease-out group-hover:-rotate-3 group-hover:scale-105"
                            />
                            {/* Caption ribbon */}
                            <div className="bg-brand-dark px-3 py-2">
                                <p className="text-[8px] tracking-[0.2em] uppercase text-brand-light/50 leading-none">Original Work</p>
                                <p
                                    className="text-brand-light/90 text-[11px] leading-snug mt-0.5"
                                    style={{ fontFamily: 'Times New Roman, Times, serif' }}
                                >Shiva Parvati</p>
                            </div>
                        </div>
                    </div>

                    {/* Vertical text on the right */}
                    <div className="hidden lg:flex absolute right-0 top-0 bottom-0 items-center -mr-8 xl:-mr-12">
                        <p className="text-[9px] tracking-[0.2em] uppercase whitespace-nowrap opacity-60 rotate-180 origin-center" style={{ writingMode: 'vertical-rl' }}>
                            PSYCHOLOGIST WHO SEAMLESSLY BLENDS THE RICH TRADITIONS OF EMPATHETIC CARE WITH MODERN RESEARCH
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
