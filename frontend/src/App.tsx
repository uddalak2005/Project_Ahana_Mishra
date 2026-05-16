import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import CareerSection from './sections/CareerSection';
import AcademicSection from './sections/AcademicSection';
import ArtworkGallerySection from './sections/ArtworkGallerySection';
import AchievementsSection from './sections/AchievmentsSection';
import GallerySection from './sections/GallerySection.tsx';
import FooterSection from './sections/FooterSection';

const App = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AcademicSection />
      <CareerSection />
      <AchievementsSection />
      <GallerySection />
      <ArtworkGallerySection />
      <FooterSection />
    </>
  );
};

export default App;