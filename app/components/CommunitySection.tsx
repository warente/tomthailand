import Image from "next/image";
import Link from "next/link";

const tags = ["Amantots", "Tiago", "Tagics", "Senitire", "Ineestnaoiam"];

export default function CommunitySection() {
  return (
    <section className="pt-10 pb-5 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div
            className="w-full lg:w-1/2 rounded-2xl overflow-hidden h-[380px] relative flex-shrink-0"
            style={{
              border: "2px solid #00ffff",
              outline: "1.5px solid #00ffff",
              outlineOffset: "3px",
              boxShadow: "0 0 12px #00ffff, 0 0 30px #00ffff70, 0 0 60px #00ffff30",
            }}
          >
            <Image
              src="/commu.png"
              alt="TOM Thailand Community"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-sm font-bold text-cyan-500 tracking-widest uppercase">The Community</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight break-keep">
              เป็นตัวเองได้ ในที่ปลอดภัย
            </h2>
            <p className="text-gray-600 text-lg">
              พื้นที่กลางสำหรับทอม ดี้ และทุกคนที่สนใจ Tom Lifestyle — เป็นมิตร ไม่ toxic ปลอดภัย และมีชีวิตชีวา
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
              {tags.map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-600 text-sm font-bold border border-cyan-200">
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-4">
              <Link
                href="/community"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-gray-900 bg-primary hover:bg-[#b3e600] shadow-neon-primary transition-all duration-300 uppercase"
              >
                Join The Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
