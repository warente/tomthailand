import NeonBorder from "../components/NeonBorder";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const variants = [
  {
    variant: "full" as const,
    label: "full",
    desc: "Double border + strong multi-layer glow — สไตล์มาตรฐาน",
    code: `variant="full" color="cyan"`,
  },
  {
    variant: "glow" as const,
    label: "glow",
    desc: "Single border + soft ambient glow — เบาลงนิดหนึ่ง",
    code: `variant="glow" color="pink"`,
  },
  {
    variant: "soft" as const,
    label: "soft",
    desc: "Thin border + minimal glow — สำหรับ card เยอะๆ ไม่ให้ดู busy",
    code: `variant="soft" color="lime"`,
  },
  {
    variant: "pulse" as const,
    label: "pulse",
    desc: "เหมือน full แต่ glow หายใจ — ใช้กับ featured/important card",
    code: `variant="pulse" color="purple"`,
  },
  {
    variant: "gradient" as const,
    label: "gradient",
    desc: "Gradient border ไม่มี glow — เน้น border สวย ดู premium",
    code: `variant="gradient" color="cyan"`,
  },
  {
    variant: "rainbow" as const,
    label: "rainbow",
    desc: "Rainbow gradient หมุนสี — สำหรับ highlight สูงสุด",
    code: `variant="rainbow"`,
  },
];

const colors = [
  { name: "cyan",   hex: "#00ffff", label: "Cyan" },
  { name: "pink",   hex: "#ff00ff", label: "Pink" },
  { name: "lime",   hex: "#ccff00", label: "Lime" },
  { name: "purple", hex: "#cc44ff", label: "Purple" },
];

const demoColors: ("cyan" | "pink" | "lime" | "purple")[] = ["cyan", "pink", "lime", "purple", "cyan", "pink"];

export default function DesignPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        {/* Header */}
        <section className="bg-[#050d1a] pt-24 pb-16 text-center">
          <p className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-3">Design System</p>
          <h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            NeonBorder Variants
          </h1>
          <p className="text-white/50 text-base max-w-lg mx-auto">
            เลือก <code className="text-cyan-400 bg-white/10 px-2 py-0.5 rounded">variant</code> และ{" "}
            <code className="text-pink-400 bg-white/10 px-2 py-0.5 rounded">color</code> ได้เลย
          </p>
        </section>

        {/* Variant Showcase */}
        <section className="py-16 bg-[#0a1628]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white font-bold text-lg mb-8 tracking-widest uppercase">▸ 6 Variants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {variants.map((v, i) => (
                <div key={v.label}>
                  <NeonBorder
                    variant={v.variant}
                    color={demoColors[i]}
                    className="p-6 bg-white"
                  >
                    <div className="mb-3">
                      <span
                        className="text-xs font-black uppercase tracking-widest px-2 py-0.5 rounded"
                        style={{
                          background: `${colors.find(c => c.name === demoColors[i])?.hex}20`,
                          color: colors.find(c => c.name === demoColors[i])?.hex,
                        }}
                      >
                        variant=&quot;{v.label}&quot;
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-gray-900 mb-1" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                      {v.label.toUpperCase()}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{v.desc}</p>
                    <code className="block text-xs bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-600 font-mono break-all">
                      {`<NeonBorder ${v.code}>`}
                    </code>
                  </NeonBorder>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Color Palette on dark background */}
        <section className="py-16 bg-[#050d1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white font-bold text-lg mb-8 tracking-widest uppercase">▸ 4 Colors × variant=&quot;full&quot; (dark bg)</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {colors.map((col) => (
                <NeonBorder
                  key={col.name}
                  variant="full"
                  color={col.name as "cyan" | "pink" | "lime" | "purple"}
                  className="p-6 bg-[#0a1628] text-center"
                >
                  <div
                    className="w-10 h-10 rounded-full mx-auto mb-3"
                    style={{ background: col.hex, boxShadow: `0 0 12px ${col.hex}` }}
                  />
                  <p className="font-black text-white text-sm uppercase tracking-widest">{col.label}</p>
                  <p className="text-white/40 text-xs mt-1 font-mono">{col.hex}</p>
                  <code className="block mt-3 text-xs text-white/30 font-mono">color=&quot;{col.name}&quot;</code>
                </NeonBorder>
              ))}
            </div>
          </div>
        </section>

        {/* Color Palette on white background */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-gray-900 font-bold text-lg mb-8 tracking-widest uppercase">▸ 4 Colors × variant=&quot;full&quot; (white bg)</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {colors.map((col) => (
                <NeonBorder
                  key={col.name}
                  variant="full"
                  color={col.name as "cyan" | "pink" | "lime" | "purple"}
                  className="p-6 bg-white text-center"
                >
                  <div
                    className="w-10 h-10 rounded-full mx-auto mb-3"
                    style={{ background: col.hex, boxShadow: `0 0 12px ${col.hex}` }}
                  />
                  <p className="font-black text-gray-900 text-sm uppercase tracking-widest">{col.label}</p>
                  <p className="text-gray-400 text-xs mt-1 font-mono">{col.hex}</p>
                  <code className="block mt-3 text-xs text-gray-400 font-mono">color=&quot;{col.name}&quot;</code>
                </NeonBorder>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Code */}
        <section className="py-16 bg-[#050d1a]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white font-bold text-lg mb-8 tracking-widest uppercase">▸ วิธีใช้งาน</h2>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #ffffff20" }}>
              <div className="bg-[#0a1628] px-4 py-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-white/30 text-xs ml-2 font-mono">NeonBorder usage</span>
              </div>
              <pre className="bg-[#061020] text-sm text-white/80 p-6 overflow-x-auto leading-relaxed font-mono">
{`import NeonBorder from "@/app/components/NeonBorder";

// variant options: full | glow | soft | pulse | gradient | rainbow
// color options:   cyan | pink | lime | purple | "#hex"

<NeonBorder variant="full" color="cyan">
  <div className="p-6 bg-white">
    content ของคุณ
  </div>
</NeonBorder>

<NeonBorder variant="pulse" color="pink" rounded="xl">
  <div className="p-4 bg-[#0a1628]">
    animated glow card
  </div>
</NeonBorder>

<NeonBorder variant="gradient" color="purple" rounded="3xl">
  <div className="p-8">
    gradient border card
  </div>
</NeonBorder>

// ใช้ hex เองก็ได้
<NeonBorder variant="glow" color="#ff6600">
  ...
</NeonBorder>`}
              </pre>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
