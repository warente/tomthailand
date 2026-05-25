"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserRound } from "lucide-react";

const categories = [
  { label: "All",                filter: null },
  { label: "Lifestyle",          filter: "LIFESTYLE" },
  { label: "Fashion",            filter: "FASHION" },
  { label: "Love & Relationship",filter: "LOVE" },
  { label: "Hair & Style",       filter: "HAIR" },
  { label: "Music",              filter: "MUSIC" },
  { label: "Travel",             filter: "TRAVEL" },
  { label: "Coming Out",         filter: "COMING OUT" },
  { label: "Events",             filter: "EVENTS" },
  { label: "Campus",             filter: "CAMPUS" },
];

const feedPosts = [
  {
    id: 1,
    tag: "LIFESTYLE",
    tagColor: "#00ffff",
    img: "/img/feed/1.png",
    author: "Jin",
    avatar: "#00ffff",
    time: "2h ago",
    caption: "How to find your own Tom style — it all starts with knowing yourself. Take your time and keep exploring! 🌟",
    hashtags: "#TomStyle #Lifestyle #BYourself",
    likes: 284,
    comments: 42,
  },
  {
    id: 2,
    tag: "FASHION",
    tagColor: "#ff00ff",
    img: "/img/feed/images.jpeg",
    author: "Ryo",
    avatar: "#ff00ff",
    time: "5h ago",
    caption: "Tom streetwear that works for every occasion — from casual to party-ready, all within a budget 🔥",
    hashtags: "#TomFashion #Streetwear #OOTD",
    likes: 193,
    comments: 28,
  },
  {
    id: 3,
    tag: "COMING OUT",
    tagColor: "#cc44ff",
    img: "/img/feed/images2.jpeg",
    author: "Meen",
    avatar: "#cc44ff",
    time: "1d ago",
    caption: "The day I came out to my family — sharing my real story to encourage anyone going through the same thing 💜",
    hashtags: "#ComingOut #Pride #TomThailand",
    likes: 512,
    comments: 97,
  },
  {
    id: 4,
    tag: "HAIR",
    tagColor: "#00ffff",
    img: "/img/feed/images3.jpeg",
    author: "Nana",
    avatar: "#00ffff",
    time: "3h ago",
    caption: "5 timeless Tom haircuts that never go out of style — works for both short and longer hair ✂️",
    hashtags: "#TomHair #HairStyle #TomLook",
    likes: 341,
    comments: 63,
  },
  {
    id: 5,
    tag: "LOVE",
    tagColor: "#cc44ff",
    img: "/img/feed/images4.jpeg",
    author: "Pim",
    avatar: "#cc44ff",
    time: "8h ago",
    caption: "How did Tom-Dee couples survive long distance? Sharing real experiences from the community 💌",
    hashtags: "#LoveStory #TomDee #Relationship",
    likes: 467,
    comments: 88,
  },
  {
    id: 6,
    tag: "MUSIC",
    tagColor: "#ccff00",
    img: "/img/feed/tom2.jpeg",
    author: "Karn",
    avatar: "#ccff00",
    time: "6h ago",
    caption: "A rainy night playlist for the single ones 🎧 — 30 songs every Tom has definitely listened to",
    hashtags: "#TomPlaylist #Music #Vibes",
    likes: 228,
    comments: 34,
  },
  {
    id: 7,
    tag: "FASHION",
    tagColor: "#ff00ff",
    img: "/img/feed/tom3.jpeg",
    author: "Pop",
    avatar: "#ff00ff",
    time: "1d ago",
    caption: "Tom Fashion Week BKK 2025 recap ❤️‍🔥 — highlights from every look worth watching on the runway",
    hashtags: "#FashionWeek #TomFashion #BKK",
    likes: 621,
    comments: 114,
  },
  {
    id: 8,
    tag: "TRAVEL",
    tagColor: "#00ffff",
    img: "/img/feed/tom4.jpeg",
    author: "Beam",
    avatar: "#00ffff",
    time: "2d ago",
    caption: "3 days 2 nights in Chiang Mai with my partner on a 3,000 THB budget — is it actually doable? 🏔️",
    hashtags: "#TomTravel #ChiangMai #TravelThai",
    likes: 389,
    comments: 71,
  },
  {
    id: 9,
    tag: "CAMPUS",
    tagColor: "#ff00ff",
    img: "/img/feed/tom5.jpeg",
    author: "Fah",
    avatar: "#ff00ff",
    time: "4h ago",
    caption: "How the LGBTQ+ Club at my university changed my life — a first-year student's honest experience 🏫",
    hashtags: "#CampusLife #University #Pride",
    likes: 156,
    comments: 29,
  },
  {
    id: 10,
    tag: "LIFESTYLE",
    tagColor: "#00ffff",
    img: "/img/feed/tom6.jpeg",
    author: "Lek",
    avatar: "#00ffff",
    time: "12h ago",
    caption: "Morning routine for office Toms — 5 things to start your day feeling energized and confident ☀️",
    hashtags: "#MorningRoutine #TomLife #SelfCare",
    likes: 302,
    comments: 45,
  },
  {
    id: 11,
    tag: "EVENTS",
    tagColor: "#ff00ff",
    img: "/img/feed/tom7.jpeg",
    author: "Mint",
    avatar: "#ff00ff",
    time: "3d ago",
    caption: "TOM Pride Bangkok 2025 recap — the biggest community event of the year and it did not disappoint 🏳️‍🌈",
    hashtags: "#TOMPride #Pride2025 #Bangkok",
    likes: 834,
    comments: 143,
  },
  {
    id: 12,
    tag: "SELF-CARE",
    tagColor: "#ccff00",
    img: "/img/feed/1.png",
    author: "Wan",
    avatar: "#ccff00",
    time: "5h ago",
    caption: "Mental health tips for Toms who are still figuring out their identity — you are not alone 🌿",
    hashtags: "#MentalHealth #SelfLove #TomCommunity",
    likes: 495,
    comments: 92,
  },
];

export default function CommunityFeed() {
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

  useEffect(() => {
    updateFades();
  }, []);

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
    const walk = (x - startX.current) * 1.2;
    scrollRef.current.scrollLeft = startScrollLeft.current - walk;
    updateFades();
  };

  const stopDrag = () => {
    isDragging.current = false;
    setDragging(false);
  };

  const filtered = active
    ? feedPosts.filter((p) => p.tag === active)
    : feedPosts;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-cyan-500 tracking-widest uppercase mb-3">Community Feed</p>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Posts from Community
          </h2>
          <p className="text-gray-400 text-sm">What members are talking about right now</p>
        </div>

        {/* Category filter pills — horizontally scrollable */}
        <div className="relative mb-10">
          {/* Left fade */}
          {showLeft && (
            <div
              className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
            />
          )}
          {/* Right fade + chevron hint */}
          {showRight && (
            <div
              className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none flex items-center justify-end pr-1"
              style={{ background: "linear-gradient(to left, #ffffff 60%, transparent)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-40">
                <path d="M6 4l4 4-4 4" stroke="#52525b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}

          <div
            ref={scrollRef}
            onScroll={updateFades}
            onWheel={(e) => {
              if (e.deltaY !== 0) {
                e.preventDefault();
                scrollRef.current!.scrollLeft += e.deltaY;
                updateFades();
              }
            }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            className="flex gap-2 overflow-x-auto py-3 px-1"
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
                  style={
                    isActive
                      ? {
                          background: "linear-gradient(90deg, #ff00ff, #cc44ff, #9900ff)",
                          color: "#ffffff",
                          boxShadow: "0 0 8px #cc44ff60, 0 0 16px #ff00ff25",
                          border: "none",
                        }
                      : { background: "#f4f4f5", color: "#52525b", border: "1px solid #e4e4e7" }
                  }
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((post) => (
            <div
              key={post.id}
              className="rounded-2xl overflow-hidden bg-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
            >
              {/* Image */}
              <div className="relative w-full" style={{ paddingBottom: "100%" }}>
                <Image
                  src={post.img}
                  alt={post.tag}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Category badge */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span
                    className="text-[10px] font-black px-2 py-0.5 rounded-full"
                    style={{ background: `${post.tagColor}ee`, color: "#050d1a" }}
                  >
                    {post.tag}
                  </span>
                </div>
                {/* Bottom gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3 z-10"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }}
                />
                {/* Likes */}
                <div className="absolute bottom-2.5 right-2.5 z-10">
                  <span className="text-xs font-bold drop-shadow flex items-center gap-1">
                    <span style={{ color: "#ef4444" }}>♥</span>
                    <span className="text-white">{post.likes}</span>
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-7 h-7 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${post.avatar}33, ${post.avatar}99)`,
                      border: `1.5px solid ${post.avatar}`,
                    }}
                  >
                    <UserRound size={14} style={{ color: post.avatar }} strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-gray-900 truncate flex-1">{post.author}</span>
                  <span className="text-[10px] text-gray-400 flex-shrink-0">{post.time}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-1.5">{post.caption}</p>
                <p className="text-[10px] font-semibold truncate mb-2 text-gray-900">{post.hashtags}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-50 text-[11px] text-gray-400">
                  <span className="flex items-center gap-1"><span style={{ color: "#ef4444" }}>♥</span>{post.likes}</span>
                  <span>💬 {post.comments}</span>
                  <span className="ml-auto">↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-sm font-bold">No posts in this category yet</p>
          </div>
        )}

      </div>
    </section>
  );
}
