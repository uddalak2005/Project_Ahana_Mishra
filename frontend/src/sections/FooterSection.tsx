import { useState, useEffect } from 'react';
import { client } from '../sanityClient';
import { accentArtworks } from '../data/artworks';

interface SocialLink {
    platform: string;
    url: string;
}

interface ContactInfo {
    email: string;
    socialLinks: SocialLink[];
}

const FooterSection = () => {
    const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);

    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                const data = await client.fetch('*[_type == "contactInfo"][0]');
                if (data) setContactInfo(data);
            } catch (error) {
                console.error('Error fetching contact info:', error);
            }
        };
        fetchContactInfo();
    }, []);

    const email = contactInfo?.email || "hello@ahanamishra.com";
    const socialLinks = contactInfo?.socialLinks || [
        { platform: 'LinkedIn', url: '#' },
        { platform: 'Instagram', url: '#' },
        { platform: 'ResearchGate', url: '#' }
    ];

    const socialLinkClass = "bg-brand-light text-brand-bg px-8 py-3 hover:-translate-y-1 transition-transform duration-300 font-serif tracking-wide text-sm md:text-base shadow-md min-w-[200px] text-center";

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer id="footer" className="w-full flex flex-col font-sans">
            {/* Top Light Section */}
            <div className="w-full bg-brand-light text-brand-bg py-10 md:py-16 px-6 md:px-12 flex flex-col md:flex-row items-start md:items-end justify-between border-t border-brand-bg overflow-hidden relative">
                <h2 
                    className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] leading-[0.8] font-serif tracking-[-0.02em] font-normal z-10"
                    style={{ fontFamily: 'Times New Roman, Times, serif' }}
                >
                    Let's Connect
                </h2>
                <a href={`mailto:${email}`} className="group flex items-center gap-2 mt-8 md:mt-0 text-xl md:text-2xl font-medium border-b border-brand-bg pb-1 hover:opacity-70 transition-opacity z-10 relative">
                    <span>→</span>
                    <span>Contact</span>
                </a>
            </div>

            {/* Bottom Dark Section */}
            <div className="w-full bg-brand-bg text-brand-light px-6 md:px-12 py-12 md:py-16 relative overflow-hidden flex flex-col justify-between">
                
                {/* Floating Images */}
                <div className="absolute top-12 left-4 md:left-20 w-24 md:w-32 -rotate-[15deg] opacity-70 hover:scale-105 hover:opacity-100 hover:rotate-0 transition-all duration-500 z-0">
                    <img src={accentArtworks.aboutAccent} alt="Floating Art" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 border-4 border-brand-light/10 bg-brand-light/5 p-1" />
                </div>
                
                <div className="absolute top-1/4 right-4 md:right-24 w-32 md:w-48 rotate-[8deg] opacity-70 hover:scale-105 hover:opacity-100 hover:rotate-0 transition-all duration-500 z-0 hidden sm:block">
                    <img src={accentArtworks.careerAccent} alt="Floating Art" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 border-4 border-brand-light/10 bg-brand-light/5 p-1" />
                </div>

                <div className="absolute bottom-32 left-10 md:left-32 w-40 md:w-56 -rotate-[6deg] opacity-70 hover:scale-105 hover:opacity-100 hover:rotate-0 transition-all duration-500 z-0 hidden lg:block">
                    <img src={accentArtworks.academicPanel} alt="Floating Art" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 border-4 border-brand-light/10 bg-brand-light/5 p-1" />
                </div>

                {/* Top Text Content */}
                <div className="relative z-10 w-full flex-1 flex flex-col justify-center items-center text-center pt-8 pb-8 md:pt-12 md:pb-12 z-20">
                    <p className="text-lg md:text-3xl max-w-2xl font-light opacity-90 leading-relaxed bg-brand-bg/60 backdrop-blur-sm px-4 py-2 rounded-xl">
                        I keep things simple, creative and nonsense-free.<br/>
                        Drop me a line at <a href={`mailto:${email}`} className="underline decoration-1 underline-offset-4 hover:text-brand-accent transition-colors">{email}</a>
                    </p>
                </div>

                {/* Middle Content */}
                <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center md:items-end mt-12 mb-16 md:mt-20 md:mb-24 z-20">
                    <h3 
                        className="text-[4rem] md:text-[6rem] lg:text-[7rem] font-serif italic mb-6 md:mb-0 leading-none bg-brand-bg/60 backdrop-blur-sm px-2 rounded-xl"
                        style={{ fontFamily: 'Times New Roman, Times, serif' }}
                    >
                        Ahana.
                    </h3>
                    <p className="text-[10px] md:text-xs font-semibold tracking-widest uppercase opacity-60 max-w-[280px] text-center md:text-left leading-relaxed">
                        Based in Kolkata, India, I work on psychology, mental health, and creative projects.
                    </p>
                </div>

                {/* Bottom Footer Details */}
                <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12 lg:gap-0 z-20">
                    
                    {/* Copyright */}
                    <div className="text-[10px] tracking-widest opacity-60 uppercase flex flex-col gap-2 text-center lg:text-left order-3 lg:order-1">
                        <span>Site designed and built for Ahana Mishra.</span>
                        <span>Copyright © {new Date().getFullYear()} Ahana Mishra. All rights reserved.</span>
                    </div>

                    {/* Site Map */}
                    <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-2">
                        <span className="text-[10px] tracking-[0.3em] opacity-40">[ THIS SITE ]</span>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-xs font-semibold tracking-widest uppercase">
                            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-brand-accent transition-colors">ABOUT</a>
                            <a href="#academic" onClick={(e) => handleScroll(e, 'academic')} className="hover:text-brand-accent transition-colors">ACADEMICS</a>
                            <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-brand-accent transition-colors">EXPERIENCE</a>
                            <a href="#gallery" onClick={(e) => handleScroll(e, 'gallery')} className="hover:text-brand-accent transition-colors">GALLERY</a>
                        </div>
                    </div>

                    {/* Social Buttons */}
                    <div className="w-full sm:w-auto flex flex-col items-center lg:items-end gap-4 order-1 lg:order-3 mt-10 lg:mt-0">
                        {socialLinks.map((link) => (
                            <a 
                                key={link.platform} 
                                href={link.url} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className={socialLinkClass}
                            >
                                {link.platform}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default FooterSection;
