"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ThumbsUp, Sparkles, Smile, TrendingUp, Trophy, GraduationCap, Heart, Gem } from "lucide-react";
import GradientText from "../components/GradientText";

const TARGET = new Date("2026-12-31T00:00:00");
function pad(n: number) { return String(n).padStart(2, "0"); }
function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

const awards = [
  { title: "Popular Vote",        Icon: ThumbsUp,      color: "#00ffff", desc: "Voted by the Community across the entire country.",   img: "/img/POPULAR%20VOTE.png" },
  { title: "Best Style",          Icon: Sparkles,      color: "#ff00ff", desc: "The most outstanding and iconic dressing style.",      img: "/img/BEST%20STYLE.png" },
  { title: "Best Personality",    Icon: Smile,         color: "#ccff00", desc: "Unforgettable personality and undeniable aura.",        img: "/img/BEST%20PERSONALITY.png" },
  { title: "Rising Star",         Icon: TrendingUp,    color: "#cc44ff", desc: "The hottest newcomer everyone is watching.",           img: "/img/RISING%20STAR.png" },
  { title: "Creator of The Year", Icon: Trophy,        color: "#ff00ff", desc: "The Content Creator who delivered the best work.",    img: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&q=80" },
  { title: "Campus Icon",         Icon: GraduationCap, color: "#00ffff", desc: "The Tom who defines the icon of their campus.",        img: "/img/CAMPUS%20ICON.png" },
  { title: "Community Choice",    Icon: Heart,         color: "#cc44ff", desc: "A heartfelt award chosen directly by the Community.", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80" },
  { title: "Brand Ambassador",    Icon: Gem,           color: "#ccff00", desc: "The best face for a brand partnership.",              img: "/img/BRAND%20AMBASSADOR.png" },
];

const units = [
  { label: "DAYS", accent: "cyan" },
  { label: "HOURS", accent: "cyan" },
  { label: "MINUTES", accent: "pink" },
  { label: "SECONDS", accent: "pink" },
];

export default function ContestPage() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const values = [pad(time.days), pad(time.hours), pad(time.minutes), pad(time.seconds)];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#050d1a] min-h-[520px] flex items-center overflow-hidden">
          <Image
            src="/img/hero/hero-award.png"
            alt="Thailand Tom Awards"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/65 to-[#050d1a]/30" />
          <div className="absolute inset-0 bg-circuit opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center w-full">
            <p className="text-sm font-bold text-pink-400 tracking-widest uppercase mb-4">Thailand Tom Awards 2026</p>
            <h1
              className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-4"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              THAILAND<br />
              <span style={{ background: "linear-gradient(90deg,#00ffff,#cc44ff,#ff00ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                TOM AWARDS
              </span>
            </h1>
            <p className="text-xl text-white/50 mb-12">เวทีระดับประเทศสำหรับทอมที่มีเสน่ห์ บุคลิกดี มีสไตล์</p>

            {/* Countdown */}
            <div className="flex items-center justify-center gap-3 md:gap-5 mb-10">
              {units.map((u, i) => (
                <div key={u.label} className="flex items-center gap-3 md:gap-5">
                  <div
                    className="flex flex-col items-center justify-center"
                    style={{
                      width: "clamp(52px, 7vw, 82px)",
                      height: "clamp(50px, 7vw, 78px)",
                      borderRadius: 12,
                      background: u.accent === "cyan" ? "#061020" : "#100618",
                      border: `2px solid ${u.accent === "cyan" ? "#00ffff" : "#ff00ff"}`,
                      boxShadow: u.accent === "cyan"
                        ? "0 0 12px #00ffff60, inset 0 0 10px #00ffff20"
                        : "0 0 12px #ff00ff60, inset 0 0 10px #ff00ff20",
                      gap: 1,
                    }}
                  >
                    <span
                      className="font-black font-mono"
                      style={{
                        fontSize: "clamp(0.95rem, 2.8vw, 1.8rem)",
                        color: u.accent === "cyan" ? "#67e8f9" : "#f472b6",
                        lineHeight: 1,
                      }}
                    >
                      {values[i]}
                    </span>
                    <span className="text-white font-bold uppercase tracking-widest" style={{ fontSize: "clamp(0.35rem, 0.7vw, 0.55rem)" }}>
                      {u.label}
                    </span>
                  </div>
                  {i < units.length - 1 && (
                    <span className="text-white/30 font-bold select-none" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>:</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-gray-900 bg-primary hover:bg-[#b3e600] shadow-neon-primary transition-all duration-300 uppercase"
              >
                Join Waitlist
              </Link>
              <Link
                href="/join#partner"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-neon-pink rounded-full text-base font-bold text-white hover:bg-neon-pink/10 transition-all duration-300 uppercase"
              >
                Become a Sponsor
              </Link>
            </div>
          </div>
        </section>

        {/* Award Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-bold text-pink-500 tracking-widest uppercase mb-3">Award Categories</p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                Award Categories
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((a) => (
                <div
                  key={a.title}
                  className="rounded-2xl overflow-hidden bg-white hover:-translate-y-1 transition-transform duration-200"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                >
                  {/* Image */}
                  <div className="relative w-full h-52">
                    <Image
                      src={a.img}
                      alt={a.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Medal badge */}
                    <div className="absolute top-3 left-3 w-12 h-12">
                      <Image
                        src="/img/medal.png"
                        alt="medal"
                        width={48}
                        height={48}
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="p-5">
                    <GradientText
                      as="h3"
                      gradient="pink-purple"
                      className="text-base font-black mb-2 uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                    >
                      {a.title}
                    </GradientText>
                    <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-bold text-pink-500 tracking-widest uppercase mb-3">Process</p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                How It Works
              </h2>
            </div>

            <div className="relative">
              {/* Connector line (desktop) — runs between center of col-1 and col-3 circles */}
              <div className="hidden md:block absolute h-px bg-gray-200"
                style={{ top: "32px", left: "calc(100% / 6)", right: "calc(100% / 6)" }} />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {[
                  { step: "01", title: "Sign Up",        desc: "Join the Waitlist to receive registration info before anyone else.",  color: "#00ffff" },
                  { step: "02", title: "Community Vote", desc: "Everyone votes for their favorite Tom across Thailand.",               color: "#ff00ff" },
                  { step: "03", title: "Final Night",    desc: "Winners announced live at a national Award Night.",                    color: "#ccff00" },
                ].map((s) => (
                  <div key={s.step} className="flex flex-col items-center text-center">
                    {/* Step number */}
                    <div
                      className="relative w-16 h-16 rounded-full flex items-center justify-center mb-6 text-xl font-black z-10 bg-white"
                      style={{
                        border: `2px solid ${s.color}`,
                        outline: `1.5px solid ${s.color}`,
                        outlineOffset: "3px",
                        boxShadow: `0 0 12px ${s.color}, 0 0 30px ${s.color}70, 0 0 60px ${s.color}30`,
                        color: "#111111",
                        fontFamily: "var(--font-orbitron), sans-serif",
                      }}
                    >
                      {s.step}
                    </div>
                    {/* Card */}
                    <div
                      className="rounded-2xl p-6 w-full bg-white min-h-[140px] flex flex-col justify-center"
                      style={{
                        border: `2px solid ${s.color}`,
                        outline: `1.5px solid ${s.color}`,
                        outlineOffset: "3px",
                        boxShadow: `0 0 12px ${s.color}, 0 0 30px ${s.color}70, 0 0 60px ${s.color}30`,
                      }}
                    >
                      <h3
                        className="text-base font-black mb-2 text-gray-900"
                        style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2
              className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Don&apos;t Want to Miss Out?
            </h2>
            <p className="text-gray-500 text-lg mb-10">ลง Waitlist ตอนนี้ รับข่าวสารการประกวดก่อนใคร</p>
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base font-bold text-gray-900 bg-primary hover:bg-[#b3e600] shadow-neon-primary transition-all duration-300 uppercase tracking-widest"
            >
              Join Contest Waitlist
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
