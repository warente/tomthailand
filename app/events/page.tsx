import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Users, PartyPopper, Camera, Sparkles, GraduationCap, Trophy } from "lucide-react";
import GradientText from "../components/GradientText";

const eventTypes = [
  { Icon: Users,         title: "Meetup",               desc: "Connect with Community members in casual settings across the country.",              img: "/img/Meetup.png" },
  { Icon: PartyPopper,   title: "Party Night",           desc: "A special party that brings Tom & Dee from all over Thailand together in one night.", img: "/img/Party%20Night.png" },
  { Icon: Camera,        title: "Creator Meet & Greet",  desc: "Meet your favorite Creators face-to-face at an exclusive in-person event.",          img: "/img/Creator%20Meet%20%26%20Greet.png" },
  { Icon: Sparkles,      title: "Fashion Night",         desc: "Show off your Tom style at an incredibly cool fashion show event.",                   img: "/img/Fashion%20Night.png" },
  { Icon: GraduationCap, title: "Campus Event",          desc: "On-campus activities at universities nationwide, made for student Toms.",             img: "/img/Campus%20Event.png" },
  { Icon: Trophy,        title: "Contest Final Night",   desc: "The grand finale of Thailand Tom Awards — the biggest night of the year.",            img: "/img/Contest%20Final%20Night.png" },
];

const cities = [
  { name: "Bangkok",           region: "Central",   status: "coming_soon", color: "#00ffff", x: 337, y: 644 },
  { name: "Chiang Mai",        region: "North",     status: "coming_soon", color: "#ff00ff", x: 165, y: 200 },
  { name: "Khon Kaen",         region: "Northeast", status: "planned",     color: "#ccff00", x: 506, y: 360 },
  { name: "Phuket",            region: "South",     status: "planned",     color: "#cc44ff", x: 220, y: 1056 },
  { name: "Pattaya",           region: "East",      status: "planned",     color: "#00ffff", x: 405, y: 740 },
  { name: "Nakhon Ratchasima", region: "Northeast", status: "planned",     color: "#ff00ff", x: 443, y: 500 },
  { name: "Chiang Rai",        region: "North",     status: "planned",     color: "#ccff00", x: 308, y: 155 },
  { name: "Surat Thani",       region: "South",     status: "planned",     color: "#cc44ff", x: 274, y: 929 },
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#050d1a] min-h-[520px] flex items-center overflow-hidden">
          <Image
            src="/img/hero/hero-event.png"
            alt="Events Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/60 to-[#050d1a]/20" />
          <div className="absolute inset-0 bg-circuit opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-left w-full">
            <p className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-4">TOM Events</p>
            <h1
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              We&apos;re Coming<br />
              <span style={{ background: "linear-gradient(90deg,#ccff00,#00ffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                To Your City.
              </span>
            </h1>
            <p className="text-lg text-white/60 max-w-xl mb-10">
              กิจกรรมสำหรับ Tom & Dee ทั่วประเทศไทย — Meetup, Party, Fashion และ Award Night ที่คุณไม่ควรพลาด
            </p>
            <div
              className="inline-block px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest"
              style={{ background: "#ccff0020", border: "1.5px solid #ccff00", color: "#ccff00" }}
            >
              Coming Soon — 2026
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-bold text-cyan-500 tracking-widest uppercase mb-3">Event Types</p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                Event Types
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTypes.map((e, i) => (
                <div
                  key={e.title}
                  className="card-in card-scan group rounded-2xl overflow-hidden bg-white hover:-translate-y-2 transition-all duration-300"
                  style={{
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[5/3] overflow-hidden">
                    <Image
                      src={e.img}
                      alt={e.title}
                      fill
                      className="object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Hover glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#cc44ff30] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  {/* Text */}
                  <div className="p-6">
                    <GradientText
                      as="h3"
                      gradient="pink-purple"
                      className="text-lg font-black mb-2"
                      style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                    >
                      {e.title}
                    </GradientText>
                    <p className="text-sm text-gray-500 leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities */}
        <section className="py-20 bg-[#F4F9FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-bold text-pink-500 tracking-widest uppercase mb-3">Locations</p>
              <h2
                className="text-3xl md:text-4xl font-extrabold"
                style={{
                  fontFamily: "var(--font-orbitron), sans-serif",
                  background: "linear-gradient(90deg,#ff00ff,#cc44ff,#00ffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                08 Cities · Coming 2026
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-center">

              {/* Thailand Map SVG */}
              <div className="flex-shrink-0 flex justify-center">
                <div className="relative">
                  <Image
                    src="/img/map.png"
                    alt="Thailand Map"
                    width={843}
                    height={1264}
                    className="w-48 md:w-64 h-auto"
                  />
                </div>
              </div>

              {/* City list */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {cities.map((city) => (
                  <div
                    key={city.name}
                    className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                  >
                    {/* Color pin */}
                    <div className="relative flex-shrink-0">
                      <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444", boxShadow: "0 0 8px #ef4444" }} />
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>{city.name}</p>
                      <p className="text-xs text-gray-400">{city.region} Thailand</p>
                    </div>
                    {/* Badge */}
                    <span
                      className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full flex-shrink-0"
                      style={
                        city.status === "coming_soon"
                          ? { background: "#ff00ff20", color: "#ff00ff" }
                          : { background: "#f4f4f5", color: "#9ca3af" }
                      }
                    >
                      {city.status === "coming_soon" ? "Soon" : "Planned"}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Interest Form CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2
              className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Be the First to Know
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              Register your interest — we'll notify you first when an event comes to your city.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-base font-bold text-gray-900 bg-primary hover:bg-[#b3e600] shadow-neon-primary transition-all duration-300 uppercase tracking-widest"
            >
              Notify Me
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
