// ─── Shared artwork registry ────────────────────────────────────────────────
// Import here once; consume everywhere else via this data object.

import aw22 from '../assets/artworks/CamScanner 08-05-2026 14.51_22.jpg';  // Durga / Mahishasuramardini
import aw21 from '../assets/artworks/CamScanner 08-05-2026 14.51_21.jpg';  // Nataraja (jade green)
import aw19 from '../assets/artworks/CamScanner 08-05-2026 14.51_19.jpg';  // Meera & Govind (amber)
import aw24 from '../assets/artworks/CamScanner 08-05-2026 14.51_24.jpg';  // Radha Krishna (jewelled)
import aw3  from '../assets/artworks/CamScanner 08-05-2026 14.51_3.jpg';   // Ganesha (blue majestic)
import aw16 from '../assets/artworks/CamScanner 08-05-2026 14.51_16.jpg';  // Shiva Parvati (monochrome)
import aw10 from '../assets/artworks/CamScanner 08-05-2026 14.51_10.jpg';  // Bhairava / Kali (fierce)

export interface ArtworkEntry {
  src: string;
  title: string;
  medium: string;
}

/** Full gallery — used by ArtworkGallerySection */
export const galleryArtworks: ArtworkEntry[] = [
  { src: aw22, title: 'Mahishasuramardini', medium: 'Acrylic on Canvas' },
  { src: aw21, title: 'Nataraja',           medium: 'Acrylic on Canvas' },
  { src: aw19, title: 'Meera & Govind',     medium: 'Acrylic on Canvas' },
  { src: aw24, title: 'Radha Krishna',      medium: 'Acrylic on Canvas' },
  { src: aw3,  title: 'Ganesha',            medium: 'Acrylic on Canvas' },
  { src: aw16, title: 'Shiva Parvati',      medium: 'Acrylic on Canvas' },
];

/** Single accent artworks used as props in individual sections */
export const accentArtworks = {
  /** Academic section — replaces SymbolBox panel */
  academicPanel:  aw22,   // Durga — commanding, bold against dark bg
  /** Academic entries — rotating thumbnail per row */
  academicEntry0: aw21,   // Nataraja — education as dance
  academicEntry1: aw19,   // Meera & Govind — devotion / higher secondary
  academicEntry2: aw24,   // Radha Krishna — early schooling
  /** About section — floating art card */
  aboutAccent:    aw16,   // Shiva Parvati — serene, monochrome
  /** Hero section — bottom-right accent tile */
  heroAccent:     aw3,    // Ganesha — auspicious start
  /** Career section — floating art card */
  careerAccent:   aw10,   // Bhairava / Kali (fierce)
};
