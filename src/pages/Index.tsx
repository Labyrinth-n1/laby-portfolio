import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import ProjectSection from '@/components/ProjectSection';
import ProjetSample from '@/components/ProjetSample';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <ProjectSection />

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;