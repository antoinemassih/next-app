import Hero from "@/components/Hero";
import Specs from "@/components/Specs";
import Header from "@/components/Header";
import Features from "@/components/Features";
import River from "@/components/River";
import Carousel from "@/components/Carousel";
import Gallery from "@/components/Gallery";
import BuyCta from "@/components/BuyCta";
import FeatureGrid from "@/components/FeatureGrid";
import Compare from "@/components/Compare";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <River />
      <Carousel />
      <Gallery />
      <Specs />
      <BuyCta />
      <FeatureGrid />
      <Compare />
      <Footer />
    </div>
  );
}
