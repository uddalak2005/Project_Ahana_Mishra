interface AchievementPaperCardProps {
    title: string;
    date: string;
    description: string;
    tag: string;
    image?: string;
}

const AchievementPaperCard: React.FC<AchievementPaperCardProps> = ({ title, date, description, tag, image }) => {
    const defaultImage = "https://images.unsplash.com/photo-1761839271800-f44070ff0eb9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="group min-w-[320px] max-w-[300px] sm:min-w-[500px] sm:max-w-[500px] 
            bg-brand-bg/50 backdrop-blur-sm border border-brand-light/20 overflow-hidden transition-all duration-500 
            hover:border-brand-accent/60 cursor-pointer">

            {/* Image Container */}
            <div className="w-full aspect-4/3 overflow-hidden bg-brand-bg border-b border-brand-light/20">
                <img
                    src={image || defaultImage}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col gap-4">

                {/* Meta Row */}
                <div className="flex justify-between items-center text-[10px] md:text-xs tracking-[0.2em] uppercase text-brand-light/60">
                    <span>{title.split(' ')[0]}</span> {/* Using first word of title as brand-like element */}
                    <span>{tag} | {date}</span>
                </div>

                {/* Main Title/Description Area matching reference */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg sm:text-xl font-light tracking-widest uppercase text-brand-light leading-tight group-hover:text-brand-accent transition-colors">
                        {title}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-brand-light/70 font-light leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AchievementPaperCard;
