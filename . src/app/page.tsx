import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import MenuPreview from "@/components/MenuPreview";
import SignatureExperience from "@/components/SignatureExperience";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import OpeningHours from "@/components/OpeningHours";
import Contact from "@/components/Contact";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandIntro />
      <MenuPreview />
      <SignatureExperience />
      <Gallery />
      <OpeningHours />
      <Location />
      <Contact />
      <Reviews />
      <FinalCTA />
      <Footer />
    </main>
  );
}
