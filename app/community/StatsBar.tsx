"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 10,  suffix: "K+", label: "สมาชิก",    color: "#00ffff", pad: false },
  { end: 120, suffix: "+",  label: "Creators",   color: "#ff00ff", pad: false },
  { end: 12,  suffix: "",   label: "หมวดหมู่",   color: "#ccff00", pad: false },
  { end: 8,   suffix: "",   label: "เมือง",      color: "#cc44ff", pad: true  },
];

function useCountUp(end: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
    };

    requestAnimationFrame(step);
  }, [end, duration, trigger]);

  return count;
}

function StatItem({
  end, suffix, label, color, pad,
}: {
  end: number; suffix: string; label: string; color: string; pad: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(end, 1600, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const display = pad ? String(count).padStart(2, "0") : String(count);

  return (
    <div ref={ref} className="text-center">
      <p
        className="text-3xl font-black"
        style={{ color, fontFamily: "var(--font-orbitron), sans-serif" }}
      >
        {display}{suffix}
      </p>
      <p className="text-xs text-white/50 font-bold tracking-widest uppercase mt-1">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-[#0a1628] border-y border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-12 md:gap-24 flex-wrap">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
