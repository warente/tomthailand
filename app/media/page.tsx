import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MediaFeed from "./MediaFeed";
import Image from "next/image";

export default function MediaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#050d1a] pt-24 pb-16 overflow-hidden">
          <Image
            src="/img/hero/hero-media.png"
            alt="TOM Media"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/60 to-[#050d1a]/20" />
          <div className="absolute inset-0 bg-circuit opacity-10" />
          <div className="relative w-full px-8 sm:px-12 lg:px-20 py-4 flex justify-start">
            <div className="max-w-lg text-left">
              <p className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-4">TOM Media</p>
              <h1
                className="text-4xl md:text-6xl font-black text-white mb-5"
                style={{ fontFamily: "var(--font-orbitron), sans-serif", lineHeight: 1.05 }}
              >
                Stories Worth<br />
                <span style={{ background: "linear-gradient(90deg,#ff00ff,#cc44ff,#00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Reading.
                </span>
              </h1>
              <p className="text-white/50 text-lg">
                Interviews, style guides, culture, and community stories — all made for Tom & Dee Lifestyle.
              </p>
            </div>
          </div>
        </section>

        {/* Feed (client: filter + articles) */}
        <MediaFeed />

        {/* Join CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Want to Contribute?
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              Write for TOM Media — share your story, style guide, or opinion with the community.
            </p>
            <a
              href="mailto:media@tomthailand.com"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base font-bold text-gray-900 bg-primary hover:bg-[#b3e600] shadow-neon-primary transition-all duration-300 uppercase tracking-widest"
            >
              Submit Your Story →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
