const items = [
  "The faces shaping Thailand's TOM culture.",
  "Thailand Tom Awards — Coming Soon 2026",
  "Tomboi Creator Platform — Apply Now",
  "TOM Thailand Community — 10,000+ Members",
  "The faces shaping Thailand's TOM culture.",
  "Thailand Tom Awards — Coming Soon 2026",
  "Tomboi Creator Platform — Apply Now",
  "TOM Thailand Community — 10,000+ Members",
];

export default function NewsTicker() {
  return (
    <div className="bg-[#0a1628] border-y border-white/10 overflow-hidden py-3">
      <div className="whitespace-nowrap flex animate-marquee space-x-12">
        {items.map((item, i) => (
          <span key={i} className="text-sm font-semibold text-white/70 flex items-center gap-4 flex-shrink-0">
            <span className="font-black text-cyan-400 tracking-widest">NEWS</span>
            <span className="text-white/30">|</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
