import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import NeonBorder from "../components/NeonBorder";
import { ShieldCheck, Sparkles, MapPin, Network, Heart, BanIcon, Lock, FileCheck, ShoppingBagIcon, Flag } from "lucide-react";
import GradientText from "../components/GradientText";

const whyItems = [
  {
    Icon: ShieldCheck,
    title: "Safe & Inclusive",
    desc: "A space where everyone can be themselves without judgment — friendly, welcoming, and completely toxic-free.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    color: "#00ffff",
  },
  {
    Icon: Sparkles,
    title: "Curated for Quality",
    desc: "A platform that values quality over quantity — every Creator, Content, and Event is carefully selected.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    color: "#ff00ff",
  },
  {
    Icon: MapPin,
    title: "Made for Thailand",
    desc: "Built by Thais, for the Tom Community in Thailand — we truly understand the culture and context.",
    img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=600&q=80",
    color: "#ccff00",
  },
  {
    Icon: Network,
    title: "Growing Ecosystem",
    desc: "Connecting Community, Creator Platform, Contests, and Events all in one place.",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    color: "#cc44ff",
  },
];

const guidelines = [
  { Icon: Heart,           color: "#ff00ff", title: "Respect Each Other",   desc: "Everyone here has value — Tom, Dee, or any identity. Bullying and hate speech are not tolerated." },
  { Icon: BanIcon,         color: "#00ffff", title: "No Toxic, No Drama",   desc: "Keep the space positive — handle conflict through conversation, not attacks." },
  { Icon: Lock,            color: "#cc44ff", title: "Protect Privacy",      desc: "Do not expose others' personal information, including outing someone without their consent." },
  { Icon: FileCheck,       color: "#ccff00", title: "Appropriate Content",  desc: "Share anything related to Tom Lifestyle, but content that is explicit or violent is not allowed." },
  { Icon: ShoppingBagIcon, color: "#ff00ff", title: "No Selling",           desc: "This is not a marketplace — posting ads or selling products without permission is prohibited." },
  { Icon: Flag,            color: "#00ffff", title: "Report Issues",        desc: "If you encounter inappropriate behavior, report it to the team immediately." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#050d1a] pt-24 pb-20 overflow-hidden">
          {/* Background image */}
          <Image
            src="/img/hero/hero-about.png"
            alt="About TOM Thailand"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a] via-[#050d1a]/75 to-[#050d1a]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-circuit opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <p className="text-sm font-bold text-pink-400 tracking-widest uppercase mb-4">About TOM Thailand</p>
            <h1
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Building the Space<br />
              <span style={{ background: "linear-gradient(90deg,#ff00ff,#cc44ff,#00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                That&apos;s Truly Ours.
              </span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl">
              TOM Thailand คือศูนย์กลาง Tom & Dee Lifestyle Community ของประเทศไทย ที่เชื่อม Creator, Events และการประกวดระดับประเทศไว้ในที่เดียว
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* Vision */}
              <NeonBorder variant="rainbow" className="overflow-hidden bg-white flex flex-col" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                {/* Image */}
                <div className="relative w-full h-52">
                  <Image src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&q=80" alt="Our Vision" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full backdrop-blur-sm" style={{ background: "linear-gradient(135deg,#ff00ff,#cc44ff,#00ffff)" }}>
                    <span className="text-xs font-black text-white tracking-widest uppercase" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>Our Vision</span>
                  </div>
                </div>
                {/* Text */}
                <div className="p-6 bg-white flex-1">
                  <GradientText as="h3" gradient="pink-purple" className="text-lg font-black mb-2" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                    A Modern & Trusted Space
                  </GradientText>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Building a modern, credible, and beautiful hub that represents the Tom Community in Thailand — where everyone can be themselves with pride.
                  </p>
                </div>
              </NeonBorder>

              {/* Mission */}
              <NeonBorder variant="rainbow" className="overflow-hidden bg-white flex flex-col" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                {/* Image */}
                <div className="relative w-full h-52">
                  <Image src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80" alt="Our Mission" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full backdrop-blur-sm" style={{ background: "linear-gradient(135deg,#ff00ff,#cc44ff,#00ffff)" }}>
                    <span className="text-xs font-black text-white tracking-widest uppercase" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>Our Mission</span>
                  </div>
                </div>
                {/* Text */}
                <div className="p-6 bg-white flex-1">
                  <GradientText as="h3" gradient="pink-purple" className="text-lg font-black mb-2" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                    Connecting People in Every Dimension
                  </GradientText>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Bringing together Community members, Creators, Brand Partners, and Event Organizers to build a powerful new ecosystem for Tom Culture in Thailand.
                  </p>
                </div>
              </NeonBorder>

            </div>
          </div>
        </section>

        {/* Why TOM Thailand */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-bold text-cyan-500 tracking-widest uppercase mb-3">Why Us</p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                Why TOM Thailand?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl overflow-hidden bg-white"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                >
                  {/* Image */}
                  <div className="relative w-full h-52 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Icon badge */}
                    <div
                      className="absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
                      style={{ background: "linear-gradient(135deg,#ff00ff,#cc44ff,#00ffff)" }}
                    >
                      <item.Icon size={20} color="#ffffff" strokeWidth={2.5} />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="p-6">
                    <GradientText
                      as="h3"
                      gradient="pink-purple"
                      className="text-lg font-bold mb-2"
                      style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                    >
                      {item.title}
                    </GradientText>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section id="guidelines" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-bold text-cyan-500 tracking-widest uppercase mb-3">Community Guidelines</p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                Community Rules
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-8">
              {guidelines.map((g, i) => (
                <div key={g.title} className="relative pt-8 flex flex-col">
                  {/* Numbered circle — floats above card */}
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="w-16 h-16 rounded-full bg-white flex items-center justify-center font-black text-xl"
                      style={{
                        fontFamily: "var(--font-orbitron), sans-serif",
                        color: "#111111",
                        border: `2px solid ${g.color}`,
                        boxShadow: `0 0 14px ${g.color}90, 0 0 30px ${g.color}40`,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-2xl pt-12 pb-7 px-6 text-center bg-white flex-1 transition-transform duration-200 hover:-translate-y-1"
                    style={{
                      border: `2px solid ${g.color}`,
                      outline: `1.5px solid ${g.color}`,
                      outlineOffset: "3px",
                      boxShadow: `0 0 16px ${g.color}50, 0 0 40px ${g.color}20`,
                    }}
                  >
                    <h3
                      className="text-base font-black text-gray-900 mb-2"
                      style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                    >
                      {g.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner With Us */}

        <section id="partner" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-bold text-cyan-500 tracking-widest uppercase mb-4">Partner With Us</p>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Become a Partner<br />with TOM Thailand
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
              Open to Brands, Fashion Labels, Salons, Sponsors, and Event Partners looking to reach the Tom & Dee Community across Thailand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join#partner"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-gray-900 bg-primary hover:bg-[#b3e600] shadow-neon-primary transition-all duration-300 uppercase"
              >
                Partner With Us
              </Link>
              <a
                href="mailto:partner@tomthailand.com"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-400 rounded-full text-base font-bold text-gray-600 hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 uppercase"
              >
                partner@tomthailand.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
