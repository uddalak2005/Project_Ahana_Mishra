import React from 'react';

export interface GalleryItem {
    _id: string;
    image: string;
    category?: string;
    caption?: string;
    year?: string;
}

export interface GalleryContentProps {
    items?: GalleryItem[];
}

const GalleryContent: React.FC<GalleryContentProps> = ({ items }) => {
    const displayItems = items || [];

    return (
        <div className="w-full relative z-10 flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {displayItems.map((item, idx) => (
                <div key={item._id || idx} className="snap-center shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] group relative overflow-hidden cursor-pointer">
                    <img
                        className="w-full h-[50vh] md:h-[65vh] object-cover rounded-none border border-brand-light/20 transition-all duration-700 ease-out group-hover:border-brand-accent group-hover:scale-[1.02]"
                        src={item.image}
                        alt={item.caption || `Gallery item ${idx + 1}`}
                        loading="lazy"
                    />
                    

                </div>
            ))}
        </div>
    );
};

export default GalleryContent;
