"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Users, Star, Trophy, Handshake, ChevronDown, Check } from "lucide-react";

function CustomSelect({ options, placeholder, color }: { options: string[]; placeholder: string; color: string }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 rounded-xl text-sm text-left flex items-center justify-between transition-all duration-200"
        style={{
          border: `2px solid ${open ? color : "#e5e7eb"}`,
          background: "#fff",
          color: selected ? "#111" : "#9ca3af",
          boxShadow: open ? `0 0 12px ${color}40` : "none",
        }}
      >
        <span>{selected || placeholder}</span>
        <ChevronDown
          size={16}
          className="flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color }}
        />
      </button>

      {open && (
        <div
          className="absolute z-50 w-full mt-1 rounded-xl overflow-hidden"
          style={{
            background: "#ffffff",
            border: "1.5px solid #e5e7eb",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { setSelected(opt); setOpen(false); }}
              className="w-full px-4 py-2.5 text-left text-sm flex items-center justify-between transition-colors duration-150"
              style={{
                color: selected === opt ? color : "#374151",
                background: selected === opt ? `${color}10` : "transparent",
                fontWeight: selected === opt ? 700 : 400,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#f9fafb"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = selected === opt ? `${color}10` : "transparent"; }}
            >
              <span>{opt}</span>
              {selected === opt && <Check size={13} style={{ color }} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

type FormType = "community" | "creator" | "contest" | "partner";

const tabs: { key: FormType; label: string; color: string; Icon: React.ElementType }[] = [
  { key: "community", label: "Join Community",   color: "#00ffff", Icon: Users     },
  { key: "creator",   label: "Apply as Creator", color: "#ff00ff", Icon: Star      },
  { key: "contest",   label: "Contest Waitlist", color: "#ccff00", Icon: Trophy    },
  { key: "partner",   label: "Partner With Us",  color: "#cc44ff", Icon: Handshake },
];

export default function JoinPage() {
  const [active, setActive] = useState<FormType>("community");
  const [submitted, setSubmitted] = useState(false);

  const activeTab = tabs.find((t) => t.key === active)!;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-[#050d1a] pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-circuit opacity-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, #cc44ff 0%, transparent 70%)" }} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-bold text-pink-400 tracking-widest uppercase mb-4">Get Involved</p>
            <h1
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              Join<br />
              <span style={{ background: "linear-gradient(90deg,#00ffff,#cc44ff,#ff00ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                TOM Thailand
              </span>
            </h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Choose how you want to be part of us — as a Member, Creator, or Partner
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => { setActive(tab.key); setSubmitted(false); }}
                  className="rounded-xl p-3 text-center transition-all duration-200"
                  style={{
                    border: `2px solid ${tab.color}`,
                    outline: active === tab.key ? `1.5px solid ${tab.color}` : "none",
                    outlineOffset: "3px",
                    background: active === tab.key ? `${tab.color}15` : "transparent",
                    boxShadow: active === tab.key ? `0 0 16px ${tab.color}60` : "none",
                  }}
                >
                  <div className="flex justify-center mb-2">
                    <tab.Icon
                      size={24}
                      strokeWidth={2.5}
                      style={{ color: active === tab.key ? "#111111" : "#aaa" }}
                    />
                  </div>
                  <p
                    className="text-xs font-black uppercase tracking-wide leading-tight"
                    style={{ color: active === tab.key ? "#111111" : "#999" }}
                  >
                    {tab.label}
                  </p>
                </button>
              ))}
            </div>

            {/* Form Card */}
            <div
              className="rounded-2xl p-8 bg-white"
              style={{
                border: `2px solid ${activeTab.color}`,
                outline: `1.5px solid ${activeTab.color}`,
                outlineOffset: "3px",
                boxShadow: `0 0 20px ${activeTab.color}50, 0 0 60px ${activeTab.color}20`,
              }}
            >
              <h2
                className="text-2xl font-extrabold text-gray-900 mb-2"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                <span className="inline-flex items-center gap-2">
                <activeTab.Icon size={22} strokeWidth={2.5} style={{ color: activeTab.color }} />
                {activeTab.label}
              </span>
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                {active === "community" && "กรอกข้อมูลเพื่อเข้าร่วม Community ของ TOM Thailand ฟรี"}
                {active === "creator" && "สมัครเป็น Tomboi Creator — เราจะติดต่อกลับภายใน 3-5 วันทำการ"}
                {active === "contest" && "ลง Waitlist เพื่อรับข่าวสาร Thailand Tom Awards ก่อนใคร"}
                {active === "partner" && "แจ้งความสนใจร่วมเป็น Partner — ทีมงานจะติดต่อภายใน 48 ชั่วโมง"}
              </p>

              {submitted ? (
                <div
                  className="text-center py-12 rounded-xl"
                  style={{ background: `${activeTab.color}10`, border: `1px solid ${activeTab.color}40` }}
                >
                  <div className="text-5xl mb-4">✅</div>
                  <p className="text-lg font-bold text-gray-900">ส่งข้อมูลเรียบร้อย!</p>
                  <p className="text-gray-500 text-sm mt-2">เราจะติดต่อกลับเร็วๆ นี้</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Common Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                        ชื่อ – นามสกุล *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="ชื่อของคุณ"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none transition-all duration-200"
                        style={{ ["--tw-border-opacity" as string]: 1 }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = activeTab.color; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                        อีเมล *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none transition-all duration-200"
                        onFocus={(e) => { e.currentTarget.style.borderColor = activeTab.color; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                      เบอร์โทรศัพท์
                    </label>
                    <input
                      type="tel"
                      placeholder="08X-XXX-XXXX"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none transition-all duration-200"
                      onFocus={(e) => { e.currentTarget.style.borderColor = activeTab.color; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; }}
                    />
                  </div>

                  {/* Creator Specific */}
                  {active === "creator" && (
                    <>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                          Instagram / TikTok Handle *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="@yourusername"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none transition-all duration-200"
                          onFocus={(e) => { e.currentTarget.style.borderColor = activeTab.color; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                          แนะนำตัวสั้นๆ *
                        </label>
                        <textarea
                          required
                          rows={3}
                          placeholder="เล่าให้ฟังหน่อยว่าเป็นใคร ทำอะไร และอยากเป็น Creator แบบไหน..."
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none transition-all duration-200 resize-none"
                          onFocus={(e) => { e.currentTarget.style.borderColor = activeTab.color; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; }}
                        />
                      </div>
                    </>
                  )}

                  {/* Partner Specific */}
                  {active === "partner" && (
                    <>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                          ชื่อองค์กร / แบรนด์ *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="ชื่อบริษัท หรือแบรนด์"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none transition-all duration-200"
                          onFocus={(e) => { e.currentTarget.style.borderColor = activeTab.color; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                          ประเภทความร่วมมือ
                        </label>
                        <CustomSelect
                          color={activeTab.color}
                          placeholder="Select Type"
                          options={["Sponsor / Event", "Brand Partnership", "Creator Collaboration", "Media Partnership", "Other"]}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                          รายละเอียดเพิ่มเติม
                        </label>
                        <textarea
                          rows={3}
                          placeholder="อธิบายสิ่งที่ต้องการร่วมกัน..."
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none transition-all duration-200 resize-none"
                          onFocus={(e) => { e.currentTarget.style.borderColor = activeTab.color; }}
                          onBlur={(e) => { e.currentTarget.style.borderColor = "#e5e7eb"; }}
                        />
                      </div>
                    </>
                  )}

                  {/* City */}
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                      จังหวัด
                    </label>
                    <CustomSelect
                      color={activeTab.color}
                      placeholder="Select Province"
                      options={["Bangkok", "Chiang Mai", "Khon Kaen", "Phuket", "Nakhon Ratchasima", "Songkhla / Hat Yai", "Other"]}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-base font-black uppercase tracking-widest transition-all duration-300"
                    style={{
                      background: activeTab.color === "#ccff00"
                        ? "#ccff00"
                        : `linear-gradient(90deg, ${activeTab.color}, ${activeTab.color}cc)`,
                      color: "#111111",
                      boxShadow: `0 0 20px ${activeTab.color}60`,
                    }}
                  >
                    {active === "community" && "Join Community"}
                    {active === "creator" && "Apply as Creator"}
                    {active === "contest" && "Join Waitlist"}
                    {active === "partner" && "Submit"}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    ข้อมูลของคุณจะถูกเก็บเป็นความลับ และจะไม่ถูกนำไปขายให้บุคคลที่สาม
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
