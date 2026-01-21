import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;