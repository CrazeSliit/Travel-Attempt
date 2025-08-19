import DestinationsSection from "./components/Home/destinationsSection";
import GallerySection from "./components/Home/gallerySection";
import HeroSection from "./components/Home/heroSection";
import ContactSection from "./components/Home/contactSection";
import AboutUsSection from "./components/Home/aboutUsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <DestinationsSection />
      <GallerySection />
      <AboutUsSection/>
      <ContactSection/>
    </div>
  );
}
