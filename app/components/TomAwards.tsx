"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TARGET = new Date("2026-12-31T00:00:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

const ctaBoxes = [
  {
    title: "JOIN COMMUNITY",
    desc: "Join us in our platform and be part of Thailand's TOM community.",
    href: "/join",
    borderColor: "#00ffff",
    btnStyle: {
      background: "#0a1628",
      color: "#fff",
      border: "2px solid #00ffff",
      boxShadow: "0 0 10px #00ffff80, inset 0 0 8px #00ffff20",
    },
    btnLabel: "JOIN COMMUNITY",
  },
  {
    title: "APPLY AS CREATOR",
    desc: "Become a creator, grow your brand and lead our community.",
    href: "/tomboi",
    borderColor: "#ff00ff",
    btnStyle: {
      background: "#0a1628",
      color: "#fff",
      border: "2px solid #ff00ff",
      boxShadow: "0 0 10px #ff00ff80, inset 0 0 8px #ff00ff20",
    },
    btnLabel: "APPLY AS CREATOR",
  },
  {
    title: "PARTNER WITH US",
    desc: "We are available to partner with brands across all sectors.",
    href: "/join#partner",
    borderColor: "#ccff00",
    btnStyle: {
      background: "#ccff00",
      color: "#111",
      border: "2px solid #ccff00",
      boxShadow: "0 0 12px #ccff0080",
    },
    btnLabel: "PARTNER WITH US",
  },
];

function CrownIcon() {
  return (
    <svg viewBox="0 0 200 180" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id="cg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="50%" stopColor="#cc44ff" />
          <stop offset="100%" stopColor="#ff00ff" />
        </linearGradient>
        <linearGradient id="cg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00ffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#cc44ff" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="cg3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#cc44ff" stopOpacity="0.15" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Crown base band */}
      <path d="M30 130 L170 130 L160 155 L40 155 Z" fill="url(#cg3)" stroke="url(#cg1)" strokeWidth="1.5" />

      {/* Crown main body */}
      <path d="M30 130 L40 70 L75 105 L100 30 L125 105 L160 70 L170 130 Z"
        fill="url(#cg2)" stroke="url(#cg1)" strokeWidth="2" filter="url(#glow)" />

      {/* Inner facets */}
      <path d="M30 130 L40 70 L75 105 Z" fill="#00ffff20" stroke="#00ffff" strokeWidth="1" opacity="0.7" />
      <path d="M170 130 L160 70 L125 105 Z" fill="#ff00ff20" stroke="#ff00ff" strokeWidth="1" opacity="0.7" />
      <path d="M75 105 L100 30 L125 105 L100 130 Z" fill="#cc44ff30" stroke="#cc44ff" strokeWidth="1" opacity="0.8" />
      <path d="M30 130 L75 105 L100 130 Z" fill="#00ffff15" stroke="#00ffff80" strokeWidth="0.5" />
      <path d="M170 130 L125 105 L100 130 Z" fill="#ff00ff15" stroke="#ff00ff80" strokeWidth="0.5" />

      {/* Top gem - center spike */}
      <polygon points="100,18 106,35 100,30 94,35" fill="url(#cg1)" filter="url(#glow)" />
      <polygon points="100,18 106,35 100,28 94,35" fill="#ffffff40" />

      {/* Left gem */}
      <polygon points="40,58 47,72 40,68 33,72" fill="#00ffff" filter="url(#glow)" opacity="0.9" />
      {/* Right gem */}
      <polygon points="160,58 167,72 160,68 153,72" fill="#ff00ff" filter="url(#glow)" opacity="0.9" />

      {/* Base gems */}
      <circle cx="60" cy="148" r="5" fill="#00ffff" filter="url(#glow)" opacity="0.8" />
      <circle cx="100" cy="148" r="6" fill="#cc44ff" filter="url(#glow)" opacity="0.9" />
      <circle cx="140" cy="148" r="5" fill="#ff00ff" filter="url(#glow)" opacity="0.8" />

      {/* Sparkles */}
      <g opacity="0.7">
        <line x1="20" y1="50" x2="20" y2="62" stroke="#00ffff" strokeWidth="1.5" />
        <line x1="14" y1="56" x2="26" y2="56" stroke="#00ffff" strokeWidth="1.5" />
        <line x1="178" y1="80" x2="178" y2="90" stroke="#ff00ff" strokeWidth="1.5" />
        <line x1="173" y1="85" x2="183" y2="85" stroke="#ff00ff" strokeWidth="1.5" />
        <line x1="90" y1="8" x2="90" y2="16" stroke="#ffffff" strokeWidth="1" />
        <line x1="86" y1="12" x2="94" y2="12" stroke="#ffffff" strokeWidth="1" />
      </g>
    </svg>
  );
}

export default function TomAwards() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: pad(time.days), label: "DAYS", accent: "cyan" },
    { value: pad(time.hours), label: "HOURS", accent: "cyan" },
    { value: pad(time.minutes), label: "MINUTES", accent: "pink" },
    { value: pad(time.seconds), label: "SECONDS", accent: "pink" },
  ];

  return (
    <section className="pt-5 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Awards Ticket */}
        <div className="relative w-full" style={{ borderRadius: "20px", overflow: "hidden" }}>
          {/* Background ticket image — full width, auto height, never cropped */}
          <Image
            src="/crown.png"
            alt="TOM Awards Ticket"
            width={2056}
            height={512}
            className="w-full h-auto block"
          />

          {/* Countdown — lower half of right section, using height-% positioning so it never overlaps the title */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              bottom: "16%",
              left: "40%",
              right: "11%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Timer — number + label inside each box */}
            <div className="flex items-center" style={{ gap: "clamp(2px, 0.9vw, 14px)" }}>
              {units.map((u, i) => (
                <div key={u.label} className="flex items-center" style={{ gap: "clamp(2px, 0.9vw, 14px)" }}>
                  <div
                    className="flex flex-col items-center justify-center"
                    style={{
                      width: "clamp(28px, 6.2vw, 78px)",
                      height: "clamp(28px, 5.5vw, 70px)",
                      borderRadius: "clamp(4px, 0.8vw, 12px)",
                      background: u.accent === "cyan" ? "#061020" : "#100618",
                      border: `2px solid ${u.accent === "cyan" ? "#00ffff" : "#ff00ff"}`,
                      boxShadow: u.accent === "cyan"
                        ? "0 0 8px #00ffff50, inset 0 0 8px #00ffff18"
                        : "0 0 8px #ff00ff50, inset 0 0 8px #ff00ff18",
                      gap: "clamp(1px, 0.4vw, 5px)",
                    }}
                  >
                    <span
                      className="font-bold font-mono"
                      style={{
                        fontSize: "clamp(0.55rem, 2.8vw, 2.2rem)",
                        color: u.accent === "cyan" ? "#67e8f9" : "#f472b6",
                        lineHeight: 1,
                      }}
                    >
                      {u.value}
                    </span>
                    <span
                      className="font-bold text-white uppercase tracking-widest text-center"
                      style={{ fontSize: "clamp(0.2rem, 0.65vw, 0.55rem)", lineHeight: 1 }}
                    >
                      {u.label}
                    </span>
                  </div>
                  {/* Colon separator */}
                  {i < units.length - 1 && (
                    <span
                      className="font-bold text-white/40 select-none"
                      style={{ fontSize: "clamp(0.6rem, 2.2vw, 1.8rem)" }}
                    >
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ctaBoxes.map((box) => (
            <div
              key={box.title}
              className="rounded-2xl p-8 text-center flex flex-col justify-between items-center bg-white transition-all duration-300"
              style={{
                border: `2px solid ${box.borderColor}`,
                outline: `1.5px solid ${box.borderColor}`,
                outlineOffset: "3px",
                boxShadow: `0 0 12px ${box.borderColor}, 0 0 30px ${box.borderColor}70, 0 0 60px ${box.borderColor}30`,
              }}
            >
              <div>
                <h4 className="text-lg font-black text-gray-900 mb-3 tracking-wide">{box.title}</h4>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">{box.desc}</p>
              </div>
              <Link
                href={box.href}
                className="px-6 py-2.5 text-sm font-black rounded-full transition-all uppercase tracking-widest"
                style={box.btnStyle}
              >
                {box.btnLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
