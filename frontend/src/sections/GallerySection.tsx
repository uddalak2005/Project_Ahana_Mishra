import { useState, useEffect } from 'react';
import GalleryContent, { type GalleryItem } from "../components/GalleryContent";
import { client, urlFor } from '../sanityClient';

const GallerySection = () => {
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const data = await client.fetch('*[_type == "gallery"] | order(_updatedAt desc)');
                const mappedData = data.map((item: any) => ({
                    _id: item._id,
                    image: item.image ? urlFor(item.image).url() : '',
                    category: item.category,
                    caption: item.caption,
                    year: item.year
                })).filter((item: GalleryItem) => item.image !== '');
                setGalleryItems(mappedData);
            } catch (error) {
                console.error('Error fetching gallery:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchGallery();
    }, []);

    return (
        <section
            id="gallery"
            className="bg-brand-bg text-brand-light font-sans px-6 py-16 md:px-10 md:py-24 relative overflow-hidden"
        >
            {/* Subtle decorative noise overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }}
            />

            {/* Section header */}
            <header className="flex justify-between items-start text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-16 md:mb-20 relative z-10">
                <div className="flex gap-12 md:gap-32">
                    <span className="opacity-60">A.M.</span>
                    <span className="opacity-60">KOLKATA, INDIA</span>
                </div>
                <span className="opacity-40 hidden md:block">/ VISUAL JOURNEY</span>
            </header>

            {/* Title block */}
            <div className="relative z-10 mb-16 md:mb-20">
                <div className="flex items-end gap-6 mb-6">
                    <h2
                        className="text-[3.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[0.8] font-serif tracking-[-0.02em] font-normal"
                        style={{ fontFamily: 'Times New Roman, Times, serif' }}
                    >
                        GALLERY
                    </h2>
                    <span className="text-sm md:text-base font-medium tracking-widest mb-3 md:mb-5 opacity-60">ギャラリー</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <p className="text-xs md:text-sm font-semibold tracking-widest uppercase opacity-50 max-w-sm">
                        A glimpse into the moments that define my journey — from academic milestones and research presentations to hackathon wins and professional internships.
                    </p>
                    <div className="flex items-center gap-3 opacity-40">
                        <span className="text-[9px] tracking-[0.2em] uppercase">Scroll to explore</span>
                        <div className="flex items-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* Gallery Grid */}
            <div className="relative z-10 w-full">
                {loading ? (
                    <div className="flex justify-center items-center h-[50vh] md:h-[65vh] relative">
                        <div className="absolute inset-0 border border-brand-light/10 animate-[spin_3s_linear_infinite] w-16 h-16 mx-auto rotate-45" />
                        <div className="absolute inset-0 border border-brand-accent/40 animate-[spin_2s_linear_infinite_reverse] w-10 h-10 mx-auto mt-3 rotate-45" />
                        <span className="text-[9px] uppercase tracking-widest text-brand-accent animate-pulse mt-24">Loading</span>
                    </div>
                ) : (
                    <GalleryContent items={galleryItems} />
                )}
            </div>
        </section>
    )
}

export default GallerySection