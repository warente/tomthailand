import Link from "next/link";
import Image from "next/image";
import { Users, User, MapPin } from "lucide-react";

const stats = [
  {
    icon: <Users size={40} strokeWidth={1.5} />,
    color: "text-cyan-400",
    glowColor: "#00ffff",
    labelColor: "#00ffff",
    value: "10K+",
    label: "COMMUNITY",
  },
  {
    icon: <User size={40} strokeWidth={1.5} />,
    color: "text-pink-400",
    glowColor: "#ff69b4",
    labelColor: "#ff69b4",
    value: "120+",
    label: "CREATORS",
  },
  {
    icon: <MapPin size={40} strokeWidth={1.5} />,
    color: "text-cyan-400",
    glowColor: "#00ffff",
    labelColor: "#00ffff",
    value: "08",
    label: "CITIES",
  },
];

export default function Hero() {
  return (
    <header className="relative min-h-[680px] md:min-h-0 md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/image.png"
        alt="TOM Thailand — K-pop tom in neon city"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a] via-[#050d1a]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-transparent" />

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 bg-circuit opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-start md:items-center">
        <div className="max-w-xl pt-28 pb-12 md:py-12">
          <h1 className="font-extrabold tracking-tight text-white" style={{ fontFamily: "var(--font-orbitron), sans-serif", lineHeight: 1.05, fontSize: "clamp(2rem, 9vw, 4.5rem)" }}>
            The Home of<br />
            <span
              style={{
                background: "linear-gradient(90deg, #00ffff, #4499ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Thailand&apos;s TOM
            </span>
            <br />
            Community.
          </h1>

          <p className="mt-6 text-base text-white/70 max-w-md">
            ศูนย์กลาง Community ของทอม ดี้ และ Tom Lifestyle ในประเทศไทย ที่รวม Creator, Events และการประกวดไว้ในที่เดียว
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-bold text-gray-900 bg-primary hover:bg-[#b3e600] shadow-neon-primary transition-all duration-300 uppercase tracking-wide"
            >
              JOIN THE COMMUNITY
            </Link>
            <Link
              href="/tomboi"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-neon-pink rounded-full text-base font-bold text-white hover:bg-neon-pink/10 hover:shadow-neon-pink transition-all duration-300 uppercase tracking-wide"
            >
              APPLY AS CREATOR
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-6 md:gap-10">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2 md:gap-4">
                <span
                  className={`${s.color} hidden sm:block`}
                  style={{ filter: `drop-shadow(0 0 4px ${s.glowColor}) drop-shadow(0 0 10px ${s.glowColor}) drop-shadow(0 0 20px ${s.glowColor}80)` }}
                >{s.icon}</span>
                <div>
                  <p className="text-3xl md:text-5xl font-black text-white leading-none" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>{s.value}</p>
                  <p className="text-xs font-bold tracking-widest mt-1" style={{ fontFamily: "var(--font-orbitron), sans-serif", color: s.labelColor }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
