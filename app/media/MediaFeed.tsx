"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import GradientText from "../components/GradientText";

const categories = [
  { label: "All",                 filter: null },
  { label: "Interview Creator",   filter: "INTERVIEW" },
  { label: "Style Guide",         filter: "STYLE GUIDE" },
  { label: "Hair & Fashion",      filter: "HAIR & FASHION" },
  { label: "Relationship",        filter: "RELATIONSHIP" },
  { label: "Community Story",     filter: "COMMUNITY STORY" },
  { label: "Event Recap",         filter: "EVENT RECAP" },
  { label: "Music & Nightlife",   filter: "MUSIC & NIGHTLIFE" },
  { label: "Opinion",             filter: "OPINION" },
  { label: "Culture",             filter: "CULTURE" },
];

const articles = [
  {
    id: 1,
    category: "INTERVIEW",
    categoryColor: "#00ffff",
    title: "Jin: How I Found My Tom Identity Through Fashion",
    excerpt: "A candid conversation with one of Thailand's most followed Tom creators — from hiding in baggy tees to owning a full aesthetic.",
    img: "/img/feed/1.png",
    author: "TOM Editorial",
    date: "May 20, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    category: "STYLE GUIDE",
    categoryColor: "#ccff00",
    title: "10 Tom Outfits That Work Every Season in 2026",
    excerpt: "From minimal streetwear to smart-casual office looks — the definitive style guide for Toms who want to look sharp year-round.",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    author: "Style Team",
    date: "May 18, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 3,
    category: "HAIR & FASHION",
    categoryColor: "#ff00ff",
    title: "Top 7 Tom Haircuts Recommended by Professional Stylists",
    excerpt: "From undercut to two-block — expert stylists share which cuts are trending for Toms in 2026 and why they work.",
    img: "/img/feed/images3.jpeg",
    author: "Style Team",
    date: "May 15, 2026",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 4,
    category: "RELATIONSHIP",
    categoryColor: "#cc44ff",
    title: "Long Distance Tom-Dee: Real Stories from the Community",
    excerpt: "How do Tom-Dee couples make long distance work? We asked 10 couples to share their honest experiences.",
    img: "/img/feed/images4.jpeg",
    author: "Community Team",
    date: "May 12, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 5,
    category: "COMMUNITY STORY",
    categoryColor: "#cc44ff",
    title: "Coming Out at 22: A Story That Needed to Be Told",
    excerpt: "One member shares the most important conversation of their life — and what the TOM Community meant when everything felt uncertain.",
    img: "/img/feed/images2.jpeg",
    author: "Guest Writer",
    date: "May 10, 2026",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 6,
    category: "EVENT RECAP",
    categoryColor: "#ff00ff",
    title: "TOM Meetup Bangkok — Everything That Happened",
    excerpt: "The first official TOM Thailand community meetup brought together 300+ members. Here's a full recap of the night.",
    img: "/img/feed/tom7.jpeg",
    author: "Events Team",
    date: "May 8, 2026",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 7,
    category: "MUSIC & NIGHTLIFE",
    categoryColor: "#ccff00",
    title: "The Rainy Night Playlist Every Tom Has Listened To",
    excerpt: "30 songs for 3am — from indie Thai to R&B — curated by Karn and the TOM Music Community.",
    img: "/img/feed/tom2.jpeg",
    author: "Karn",
    date: "May 5, 2026",
    readTime: "2 min read",
    featured: false,
  },
  {
    id: 8,
    category: "OPINION",
    categoryColor: "#00ffff",
    title: "Why Tom Culture in Thailand Still Lacks a Real Safe Space",
    excerpt: "An honest analysis of where the Tom community stands today — and what needs to change for the next generation.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    author: "Guest Writer",
    date: "May 3, 2026",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 9,
    category: "CULTURE",
    categoryColor: "#ff00ff",
    title: "Tom Culture in Thai Media: Representation in 2026",
    excerpt: "How has Thai film, music, and social media shifted the way Tom identity is portrayed — and what still needs work?",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    author: "TOM Editorial",
    date: "May 1, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 10,
    category: "INTERVIEW",
    categoryColor: "#00ffff",
    title: "Ryo on Street Style, Bangkok, and Being Unapologetically Tom",
    excerpt: "We sat down with Ryo to talk creative process, street photography, and why authenticity beats trends every time.",
    img: "/img/feed/images.jpeg",
    author: "TOM Media",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 11,
    category: "STYLE GUIDE",
    categoryColor: "#ccff00",
    title: "How to Build a Tom Wardrobe From Scratch Under 3,000 THB",
    excerpt: "A practical, budget-friendly guide to building a Tom wardrobe that looks intentional, not accidental.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    author: "Style Team",
    date: "Apr 25, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 12,
    category: "CULTURE",
    categoryColor: "#ff00ff",
    title: "Tom Pride Bangkok 2025: The Night That Changed Everything",
    excerpt: "More than a parade — this year's Pride was a statement. Our editors were there for every moment.",
    img: "/img/feed/tom3.jpeg",
    author: "TOM Editorial",
    date: "Apr 22, 2026",
    readTime: "4 min read",
    featured: false,
  },
];

export default function MediaFeed() {
  const [active, setActive] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const isDragging = useRef(false);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const updateFades = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 8);
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => { updateFades(); }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    setDragging(true);
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    startScrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = startScrollLeft.current - (x - startX.current) * 1.2;
    updateFades();
  };
  const stopDrag = () => { isDragging.current = false; setDragging(false); };

  const featured = articles.find((a) => a.featured)!;
  const filtered = active
    ? articles.filter((a) => a.category === active)
    : articles.filter((a) => !a.featured);

  return (
    <>
      {/* Featured Article */}
      <section className="pt-12 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.10)" }}>
            {/* Background image */}
            <div className="relative w-full h-72 md:h-96">
              <Image
                src={featured.img}
                alt={featured.title}
                fill
                className="object-cover object-top"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(5,13,26,0.92) 50%, rgba(5,13,26,0.3))" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,13,26,0.8), transparent 60%)" }} />
            </div>
            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 max-w-2xl">
              <span
                className="text-xs font-black tracking-widest uppercase mb-3 inline-block"
                style={{ color: featured.categoryColor }}
              >
                ★ FEATURED · {featured.category}
              </span>
              <h2
                className="text-2xl md:text-4xl font-black text-white leading-tight mb-3"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                {featured.title}
              </h2>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-5 line-clamp-2">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-white/40 mb-5">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <Link
                href="#"
                className="inline-flex items-center justify-center self-start px-6 py-2.5 rounded-full text-sm font-bold text-gray-900 bg-primary hover:bg-[#b3e600] shadow-neon-primary transition-all duration-300 uppercase tracking-widest"
              >
                Read Article →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter pills */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {showLeft && (
              <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
            )}
            {showRight && (
              <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none flex items-center justify-end pr-1"
                style={{ background: "linear-gradient(to left, #ffffff 60%, transparent)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-40">
                  <path d="M6 4l4 4-4 4" stroke="#52525b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
            <div
              ref={scrollRef}
              onScroll={updateFades}
              onWheel={(e) => { if (e.deltaY !== 0) { e.preventDefault(); scrollRef.current!.scrollLeft += e.deltaY; updateFades(); } }}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={stopDrag}
              onMouseLeave={stopDrag}
              className="flex gap-2 overflow-x-auto py-2 px-1"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
                cursor: dragging ? "grabbing" : "grab",
                userSelect: "none",
              } as React.CSSProperties}
            >
              {categories.map((cat) => {
                const isActive = active === cat.filter;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActive(cat.filter)}
                    className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer"
                    style={isActive
                      ? { background: "linear-gradient(90deg, #ff00ff, #cc44ff, #9900ff)", color: "#fff", boxShadow: "0 0 8px #cc44ff60, 0 0 16px #ff00ff25", border: "none" }
                      : { background: "#f4f4f5", color: "#52525b", border: "1px solid #e4e4e7" }
                    }
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <article
                key={a.id}
                className="rounded-2xl overflow-hidden bg-white hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
              >
                {/* Image */}
                <div className="relative w-full h-52">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className="text-[10px] font-black px-2.5 py-1 rounded-full"
                      style={{ background: `${a.categoryColor}ee`, color: "#050d1a" }}
                    >
                      {a.category}
                    </span>
                  </div>
                  {/* Read time */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="text-[10px] font-bold text-white/80 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      {a.readTime}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <GradientText
                    as="h3"
                    gradient="pink-purple"
                    className="text-base font-black mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                  >
                    {a.title}
                  </GradientText>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">{a.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-xs text-gray-400">
                    <span className="font-semibold">{a.author}</span>
                    <span>{a.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-4xl mb-4">📭</p>
              <p className="text-sm font-bold">No articles in this category yet</p>
            </div>
          )}

          {/* Load more */}
          <div className="text-center mt-14">
            <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-200 rounded-full text-sm font-bold text-gray-500 hover:border-cyan-400 hover:text-cyan-500 transition-all duration-300 uppercase tracking-wider">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
