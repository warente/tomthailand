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
        const scrollY = window.scrollY;
        const heroH = section.offsetHeight;

        // Only while hero is visible
        if (scrollY > heroH * 1.5) return;

        // Parallax: image drifts up at 45% of scroll speed
        const translateY = scrollY * 0.45;

        // Scale: zoomed in at rest (1.18), pulls back as user scrolls
        const scale = 1.18 - (scrollY / heroH) * 0.18;

        imgWrap.style.transform = `translateY(${translateY}px) scale(${Math.max(1, scale)})`;
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
        style={{ transform: "translateY(0px) scale(1.18)" }}
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
