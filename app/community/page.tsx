import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import CommunityFeed from "./CommunityFeed";
import StatsBar from "./StatsBar";

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#050d1a] pt-24 pb-20 overflow-hidden">
          <Image
            src="/img/hero/hero-commu.png"
            alt="Community Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#050d1a] via-[#050d1a]/70 to-[#050d1a]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-circuit opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
            <div className="text-left max-w-lg">
              <p className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-4">The Community</p>
              <h1
                className="text-5xl md:text-7xl font-black text-white mb-6"
                style={{ fontFamily: "var(--font-orbitron), sans-serif", lineHeight: 1.05 }}
              >
                Be Yourself.<br />
                <span style={{ background: "linear-gradient(90deg,#00ffff,#4499ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  In a Safe Space.
                </span>
              </h1>
              <p className="text-lg text-white/60 mb-10">
                พื้นที่กลางสำหรับทอม ดี้ และทุกคนที่สนใจ Tom Lifestyle — เป็นมิตร ไม่ toxic ปลอดภัย และมีชีวิตชีวา
              </p>
              <Link
                href="/join"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-bold text-gray-900 bg-primary hover:bg-[#b3e600] shadow-neon-primary transition-all duration-300 uppercase tracking-wide"
              >
                JOIN THE COMMUNITY
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <StatsBar />

        {/* Community Feed — filterable, client component */}
        <CommunityFeed />

        {/* Join CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2
              className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Ready to Join?
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              Join the Community for free — meet people who truly understand you and be part of the Tom Lifestyle movement in Thailand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-gray-900 bg-primary hover:bg-[#b3e600] shadow-neon-primary transition-all duration-300 uppercase"
              >
                Join Community
              </Link>
              <Link
                href="/tomboi"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-neon-pink rounded-full text-base font-bold text-gray-900 hover:bg-neon-pink/10 transition-all duration-300 uppercase"
              >
                Apply as Creator
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
