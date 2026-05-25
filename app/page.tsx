import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewsTicker from "./components/NewsTicker";
import FeaturedCreators from "./components/FeaturedCreators";
import CommunitySection from "./components/CommunitySection";
import TomAwards from "./components/TomAwards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NewsTicker />
        <FeaturedCreators />
        <CommunitySection />
        <TomAwards />
      </main>
      <Footer />
    </>
  );
}
