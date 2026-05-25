"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "COMMUNITY", href: "/community" },
  { label: "TOMBOI", href: "/tomboi" },
  { label: "CONTEST", href: "/contest" },
  { label: "MEDIA", href: "/media" },
  { label: "EVENTS", href: "/events" },
  { label: "ABOUT", href: "/about" },
];

function Logo() {
  return (
    <Link href="/" className="flex flex-col leading-none">
      <span
        className="text-2xl font-extrabold tracking-tight"
        style={{
          background: "linear-gradient(90deg, #ff00ff, #cc44ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        TOM
      </span>
      <span
        className="text-xs font-bold tracking-[0.25em] uppercase"
        style={{
          background: "linear-gradient(90deg, #00ffff, #4488ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        THAILAND
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrolled
          ? "bg-[#050d1a]/95 backdrop-blur-md"
          : "bg-[#050d1a]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wider transition-colors pb-1 ${
                    isActive
                      ? "text-cyan-400 border-b-2 border-cyan-400"
                      : "text-white/80 hover:text-cyan-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="/join"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2 border border-cyan-400 rounded-full text-sm font-bold text-cyan-400 hover:bg-cyan-400/10 hover:shadow-neon-cyan transition-all duration-300 uppercase tracking-wider"
            >
              JOIN
            </Link>
            <button
              className="md:hidden p-2 text-white/70"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#050d1a]/98 backdrop-blur-md">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-white/80 hover:text-cyan-400 font-semibold transition-colors text-sm tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join"
              className="block mt-4 px-6 py-3 border border-cyan-400 rounded-full text-sm font-bold text-cyan-400 text-center uppercase tracking-wider"
            >
              JOIN
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
