import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { User, Users, Trophy, BadgeCheck, Camera, TrendingUp } from "lucide-react";
import GradientText from "../components/GradientText";

const creators = [
  { name: "Jin",   tag: "STYLE : BANGKOK",      glowColor: "#00ffff", nameColor: "#00ffff", followers: "48.2K", src: "/img/feed/1.png"        },
  { name: "Ryo",   tag: "STREET : BANGKOK",      glowColor: "#ff00ff", nameColor: "#ff00ff", followers: "31.5K", src: "/img/feed/images.jpeg"  },
  { name: "Nana",  tag: "HAIR : CHIANG MAI",     glowColor: "#ccff00", nameColor: "#ccff00", followers: "22.8K", src: "/img/feed/images3.jpeg" },
  { name: "Pim",   tag: "LIFESTYLE : BANGKOK",   glowColor: "#cc44ff", nameColor: "#cc44ff", followers: "19.1K", src: "/img/feed/images4.jpeg" },
  { name: "Karn",  tag: "MUSIC : BANGKOK",       glowColor: "#ff00ff", nameColor: "#ff00ff", followers: "15.6K", src: "/img/feed/tom2.jpeg"    },
  { name: "Fah",   tag: "FASHION : CHIANG MAI",  glowColor: "#00ffff", nameColor: "#00ffff", followers: "12.3K", src: "/img/feed/tom3.jpeg"    },
  { name: "Beam",  tag: "TRAVEL : BANGKOK",      glowColor: "#ccff00", nameColor: "#ccff00", followers: "10.8K", src: "/img/feed/tom6.jpeg"    },
  { name: "Wan",   tag: "EDITORIAL : BANGKOK",   glowColor: "#cc44ff", nameColor: "#cc44ff", followers: "8.9K",  src: "/img/feed/tom7.jpeg"    },
];

const benefits = [
  { Icon: User,        title: "Personal Profile",  desc: "A beautiful Creator Profile showcasing your work, style, and content.",               img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80" },
  { Icon: Users,       title: "Built-in Fan Base", desc: "Connect with a 10K+ Community that loves and follows Tom Creators.",                  img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80" },
  { Icon: Trophy,      title: "Contest Access",    desc: "Eligibility to join Thailand Tom Awards and exclusive events.",                        img: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=600&q=80" },
  { Icon: BadgeCheck,  title: "Brand Partnership", desc: "Opportunities to collaborate with fashion brands, salons, and sponsors.",             img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" },
  { Icon: Camera,      title: "Content Support",   desc: "Our editorial team helps you create content that looks great and stays on-brand.",    img: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&q=80" },
  { Icon: TrendingUp,  title: "Creator Income",    desc: "Earn income from the platform when monetization launches.",                           img: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80" },
];

export default function TomboiPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#050d1a] min-h-[560px] overflow-hidden flex items-center">
          <Image
            src="/img/hero/hero-tombi.png"
            alt="Tomboi Creator Platform"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a] via-[#050d1a]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-circuit opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <div className="max-w-lg text-left">
              <p className="text-sm font-bold text-pink-400 tracking-widest uppercase mb-4">Tomboi Creator Platform</p>
              <h1
                className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                Thailand&apos;s Most<br />
                <span style={{ background: "linear-gradient(90deg,#ff00ff,#cc44ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Charismatic
                </span>
                <br />Creators.
              </h1>
              <p className="text-lg text-white/60 mb-10 max-w-lg">
                A premium Creator platform for Thai Toms with personality, style, and a story worth following.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/join" className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-bold text-gray-900 bg-primary hover:bg-[#b3e600] shadow-neon-primary transition-all duration-300 uppercase tracking-wide">
                  Apply as Creator
                </Link>
                <Link href="#creators" className="inline-flex items-center justify-center px-8 py-3 border-2 border-neon-pink rounded-full text-base font-bold text-white hover:bg-neon-pink/10 transition-all duration-300 uppercase tracking-wide">
                  See Creators
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Creator Grid */}
        <section id="creators" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-bold text-pink-500 tracking-widest uppercase mb-3">Our Creators</p>
              <h2
                className="text-3xl md:text-5xl font-extrabold text-gray-900"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                Meet the Tomboi Family
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {creators.map((c, i) => (
                <div key={i} className="group block">
                  <div
                    className="relative rounded-xl overflow-hidden bg-white transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                    style={{
                      border: `2px solid ${c.glowColor}`,
                      outline: `1.5px solid ${c.glowColor}`,
                      outlineOffset: "3px",
                      boxShadow: `0 0 12px ${c.glowColor}, 0 0 30px ${c.glowColor}70, 0 0 60px ${c.glowColor}30`,
                    }}
                  >
                    <div className="relative w-full overflow-hidden" style={{ paddingBottom: "133%" }}>
                      <Image
                        src={c.src}
                        alt={c.name}
                        fill
                        className="object-cover object-top grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-500 ease-out"
                      />
                    </div>
                  </div>
                  <div className="mt-3 px-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                      {c.tag}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <h3
                        className="text-2xl font-black"
                        style={{ color: c.nameColor, fontFamily: "var(--font-orbitron), sans-serif", WebkitTextStroke: `0.8px ${c.nameColor}` }}
                      >
                        {c.name}
                      </h3>
                      <span className="text-xs text-gray-400 font-bold">{c.followers}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-bold text-cyan-500 tracking-widest uppercase mb-3">Creator Benefits</p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                Why Become a Tomboi Creator?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl overflow-hidden bg-white hover:-translate-y-1 transition-transform duration-200"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                >
                  {/* Image */}
                  <div className="relative w-full h-52">
                    <Image
                      src={b.img}
                      alt={b.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Icon badge */}
                    <div
                      className="absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
                      style={{ background: "linear-gradient(135deg,#ff00ff,#cc44ff,#00ffff)" }}
                    >
                      <b.Icon size={20} color="#ffffff" strokeWidth={2.5} />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="p-6">
                    <GradientText
                      as="h3"
                      gradient="pink-purple"
                      className="text-lg font-black mb-2"
                      style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                    >
                      {b.title}
                    </GradientText>
                    <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apply CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2
              className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Ready to Be a<br />
              <span style={{ background: "linear-gradient(90deg,#ff00ff,#cc44ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Tomboi Creator?
              </span>
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              Now accepting first-generation Creators — stylish, charismatic, or full of potential ready to grow with us.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base font-bold text-white uppercase tracking-widest transition-all duration-300"
              style={{
                background: "linear-gradient(90deg, #ff00ff, #cc44ff, #9900ff)",
                boxShadow: "0 0 30px #cc44ff90, 0 0 60px #ff00ff40",
              }}
            >
              Apply as Creator
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
