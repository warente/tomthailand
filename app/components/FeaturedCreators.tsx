import Image from "next/image";
import Link from "next/link";

const creators = [
  { name: "Jin",  tag: "STYLE : BANGKOK",     glowColor: "#00ffff", nameColor: "#111111", src: "/img/feed/1.png"        },
  { name: "Ryo",  tag: "STREET : BANGKOK",     glowColor: "#ff00ff", nameColor: "#ff00ff", src: "/img/feed/images.jpeg"  },
  { name: "Nana", tag: "HAIR : CHIANG MAI",    glowColor: "#ccff00", nameColor: "#111111", src: "/img/feed/images3.jpeg" },
  { name: "Wan",  tag: "EDITORIAL : BANGKOK",  glowColor: "#cc44ff", nameColor: "#cc44ff", src: "/img/feed/tom7.jpeg"    },
];

export default function FeaturedCreators() {
  return (
    <section className="pt-20 pb-10 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-bold text-cyan-500 tracking-widest uppercase">Featured Creators</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
            The faces shaping<br />Thailand&apos;s TOM culture.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {creators.map((c, i) => (
            <Link key={i} href="/tomboi" className="group block">
              {/* Card with neon glow border */}
              <div
                className="relative rounded-xl overflow-hidden bg-white transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                style={{
                  border: `2px solid ${c.glowColor}`,
                  outline: `1.5px solid ${c.glowColor}`,
                  outlineOffset: "3px",
                  boxShadow: `0 0 12px ${c.glowColor}, 0 0 30px ${c.glowColor}70, 0 0 60px ${c.glowColor}30`,
                }}
              >
                {/* Portrait image */}
                <div className="relative w-full overflow-hidden" style={{ paddingBottom: "133%" }}>
                  <Image
                    src={c.src}
                    alt={c.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-500 ease-out"
                  />
                </div>
              </div>

              {/* Name below card */}
              <div className="mt-3 px-1">
                <p
                  className="text-xs font-bold uppercase tracking-widest text-gray-500"
                  style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                >
                  {c.tag}
                </p>
                <h3
                  className="text-2xl font-black mt-1"
                  style={{
                    color: c.nameColor,
                    fontFamily: "var(--font-orbitron), sans-serif",
                    WebkitTextStroke: `0.8px ${c.nameColor}`,
                  }}
                >
                  {c.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/tomboi"
            className="inline-flex items-center justify-center px-8 py-3 border border-cyan-400 rounded-full text-sm font-bold text-cyan-500 hover:bg-cyan-50 hover:shadow-neon-cyan transition-all duration-300 uppercase tracking-wider"
          >
            View All Creators
          </Link>
        </div>
      </div>
    </section>
  );
}
