"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface HeroCinematicProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
}

export default function HeroCinematic({ src, alt, children, className = "" }: HeroCinematicProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imgWrap = imgRef.current;
    if (!section || !imgWrap) return;

    let rafId: number;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const viewH = window.innerHeight;

        // Only animate while hero is visible
        if (rect.bottom < 0 || rect.top > viewH) return;

        // progress: 0 = top of hero in view, 1 = hero scrolled out
        const progress = Math.max(0, -rect.top / (rect.height + viewH));

        // Parallax: image moves up slower than scroll (cinematic depth)
        const translateY = progress * 120;

        // Subtle scale: start 1.08, shrink to 1.0 as we scroll past
        const scale = 1.08 - progress * 0.08;

        imgWrap.style.transform = `translateY(${translateY}px) scale(${scale})`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative bg-[#050d1a] min-h-[520px] flex items-center overflow-hidden ${className}`}
    >
      {/* Parallax image wrapper */}
      <div
        ref={imgRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translateY(0px) scale(1.08)" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 pointer-events-none" />

      {children}
    </section>
  );
}
