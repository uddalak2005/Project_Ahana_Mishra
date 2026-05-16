import { useState, useEffect } from 'react';
import AchievementPaperCard from "../components/AchievementPaperCard";
import { client, urlFor } from '../sanityClient';

interface AchievementItem {
    _id: string;
    title: string;
    category: string;
    year: string;
    description: string;
    image: string | null;
}

const AchievementsSection = () => {
    const [achievementsData, setAchievementsData] = useState<AchievementItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const data = await client.fetch('*[_type == "achievements"] | order(year desc)');
                const mappedData = data.map((item: any) => ({
                    _id: item._id,
                    title: item.title,
                    category: item.category || 'Other',
                    year: item.year,
                    description: item.description,
                    image: item.image ? urlFor(item.image).url() : null
                }));
                setAchievementsData(mappedData);
            } catch (error) {
                console.error('Error fetching achievements:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchAchievements();
    }, []);

    return (
        <section id="achievements" className="w-full py-16 bg-brand-bg sm:p-5 p-4 min-h-screen">

            <div className="w-full mx-auto px-4 md:px-10">
                {/* Section header */}
                <header className="flex justify-between items-start text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-16 md:mb-20 relative z-10 pt-10">
                    <div className="flex gap-12 md:gap-32">
                        <span className="opacity-60">A.M.</span>
                        <span className="opacity-60">KOLKATA, INDIA</span>
                    </div>
                    <span className="opacity-40 hidden md:block">/ MILESTONES</span>
                </header>

                {/* Title block */}
                <div className="relative z-10 mb-16 md:mb-20">
                    <div className="flex items-end gap-6 mb-6 flex-wrap">
                        <h2
                            className="text-[3.5rem] sm:text-[5rem] md:text-[7.5rem] lg:text-[9rem] leading-[0.8] font-serif tracking-[-0.02em] font-normal uppercase"
                            style={{ fontFamily: 'Times New Roman, Times, serif' }}
                        >
                            MILESTONES
                        </h2>
                        <span className="text-sm md:text-base font-medium tracking-widest mb-3 md:mb-5 opacity-60">実績</span>
                    </div>
                    <p className="text-xs md:text-sm font-semibold tracking-widest uppercase opacity-50 max-w-sm">
                        Key milestones and achievements that reflect my learning, growth, and impact along the way.
                    </p>
                </div>
            </div>


            {/* Horizontal Scroll */}

            <div className="overflow-x-auto scrollbar-hide sm:px-10 py-10">
                {loading ? (
                    <div className="flex justify-center items-center h-64 relative">
                        <div className="absolute inset-0 border border-brand-light/10 animate-[spin_3s_linear_infinite] w-16 h-16 mx-auto rotate-45" />
                        <div className="absolute inset-0 border border-brand-accent/40 animate-[spin_2s_linear_infinite_reverse] w-10 h-10 mx-auto mt-3 rotate-45" />
                        <span className="text-[9px] uppercase tracking-widest text-brand-accent animate-pulse mt-24">Loading</span>
                    </div>
                ) : (
                    <div className="flex gap-6 w-max">
                        {achievementsData.map((achievement) => (
                            <AchievementPaperCard
                                key={achievement._id}
                                tag={achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                                date={achievement.year}
                                title={achievement.title}
                                description={achievement.description}
                                image={achievement.image ? achievement.image : 'https://images.unsplash.com/photo-1761839271800-f44070ff0eb9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="w-full flex gap-2 justify-center items-center mt-5 cursor-pointer group">
                <p className="text-brand-light/80 group-hover:text-brand-accent transition-colors uppercase tracking-widest text-sm">Check out More</p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-light/80 group-hover:text-brand-accent transition-colors">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </div>

        </section>
    )
}

export default AchievementsSection