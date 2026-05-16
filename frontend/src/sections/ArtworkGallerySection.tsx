import React, { useState, useEffect, useCallback } from 'react';
import { galleryArtworks } from '../data/artworks';

const artworks = galleryArtworks;

const ArtworkGallerySection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex(prev => prev === null ? null : (prev - 1 + artworks.length) % artworks.length);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex(prev => prev === null ? null : (prev + 1) % artworks.length);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, goPrev, goNext]);

  const currentArtwork = lightboxIndex !== null ? artworks[lightboxIndex] : null;

  return (
    <>
      {/* ─── GALLERY SECTION ─── */}
      <section
        id="artworks"
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
          <span className="opacity-40 hidden md:block">/ ARTISTIC EXPRESSIONS</span>
        </header>

        {/* Title block */}
        <div className="relative z-10 mb-16 md:mb-20">
          <div className="flex items-end gap-6 mb-6">
            <h2
              className="text-[3.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[0.8] font-serif tracking-[-0.02em] font-normal"
              style={{ fontFamily: 'Times New Roman, Times, serif' }}
            >
              ART
            </h2>
            <span className="text-sm md:text-base font-medium tracking-widest mb-3 md:mb-5 opacity-60">芸術</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-xs md:text-sm font-semibold tracking-widest uppercase opacity-50 max-w-sm">
              A curated selection of original paintings — bridging mythology, emotion, and form.
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

        {/* ─── SCROLLABLE GRID ─── */}
        <div className="relative z-10 w-full overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="grid grid-flow-col grid-rows-1 md:grid-rows-2 gap-4 md:gap-6 w-max snap-x snap-mandatory">
            {artworks.map((art, i) => (
              <div
                key={i}
                className="snap-center group relative overflow-hidden cursor-pointer w-[85vw] md:w-[45vw] lg:w-[35vw] xl:w-[28vw] h-[60vh] md:h-[40vh] xl:h-[45vh]"
                onClick={() => openLightbox(i)}
              >
                {/* Image */}
                <img
                  src={art.src}
                  alt={art.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-bg/70 flex flex-col justify-end p-5 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="text-[9px] font-semibold tracking-[0.25em] uppercase opacity-60 mb-1">
                      {art.medium}
                    </p>
                    <h3 className="text-lg md:text-xl font-serif font-normal tracking-tight" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                      {art.title}
                    </h3>
                  </div>
                </div>

                {/* Index label — top-right corner */}
                <span className="absolute top-4 right-4 text-[9px] font-semibold tracking-widest uppercase opacity-30 group-hover:opacity-0 transition-opacity duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom rule */}
        <div className="relative z-10 mt-16 md:mt-20 flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-brand-light opacity-10" />
          <span className="text-[9px] tracking-[0.25em] uppercase opacity-30 whitespace-nowrap">
            {artworks.length} ORIGINAL WORKS
          </span>
          <div className="flex-1 h-[1px] bg-brand-light opacity-10" />
        </div>
      </section>

      {/* ─── LIGHTBOX ─── */}
      {lightboxIndex !== null && currentArtwork && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 17, 28, 0.96)' }}
          onClick={closeLightbox}
        >
          {/* Content — stop propagation so clicking image doesn't close */}
          <div
            className="relative flex flex-col items-center max-w-[90vw] max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={currentArtwork.src}
              alt={currentArtwork.title}
              className="max-w-full max-h-[78vh] object-contain shadow-2xl"
              style={{ border: '1px solid rgba(232,220,203,0.08)' }}
            />

            {/* Caption */}
            <div className="mt-4 flex flex-col items-center gap-1">
              <h3
                className="text-brand-light text-lg md:text-xl font-serif font-normal tracking-tight"
                style={{ fontFamily: 'Times New Roman, Times, serif' }}
              >
                {currentArtwork.title}
              </h3>
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-50 text-brand-light">
                {currentArtwork.medium}
              </p>
            </div>

            {/* Counter */}
            <p className="mt-2 text-[9px] tracking-widest uppercase opacity-30 text-brand-light">
              {lightboxIndex + 1} / {artworks.length}
            </p>
          </div>

          {/* Prev arrow */}
          <button
            onClick={e => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-brand-light opacity-50 hover:opacity-100 transition-opacity duration-200 text-3xl md:text-4xl select-none"
            aria-label="Previous artwork"
          >
            ←
          </button>

          {/* Next arrow */}
          <button
            onClick={e => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-brand-light opacity-50 hover:opacity-100 transition-opacity duration-200 text-3xl md:text-4xl select-none"
            aria-label="Next artwork"
          >
            →
          </button>

          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-brand-light opacity-50 hover:opacity-100 transition-opacity duration-200 text-xl select-none tracking-widest"
            aria-label="Close lightbox"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default ArtworkGallerySection;
