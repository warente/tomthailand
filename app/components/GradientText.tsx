import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  /** gradient preset หรือใส่ gradient string เองได้เลย */
  gradient?:
    | "pink-purple"   // #ff00ff → #cc44ff → #9900ff  (default)
    | "cyan-blue"     // #00ffff → #4499ff
    | "lime-cyan"     // #ccff00 → #00ffff
    | "rainbow"       // #00ffff → #ff00ff → #ccff00
    | string;         // custom CSS gradient string
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

const PRESETS: Record<string, string> = {
  "pink-purple": "linear-gradient(90deg, #ff00ff, #cc44ff, #9900ff)",
  "cyan-blue":   "linear-gradient(90deg, #00ffff, #4499ff)",
  "lime-cyan":   "linear-gradient(90deg, #ccff00, #00ffff)",
  "rainbow":     "linear-gradient(90deg, #00ffff, #ff00ff, #ccff00)",
};

export default function GradientText({
  children,
  gradient = "pink-purple",
  className = "",
  style = {},
  as: Tag = "span",
}: GradientTextProps) {
  const bg = PRESETS[gradient] ?? gradient;

  return (
    <Tag
      className={className}
      style={{
        background: bg,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/*
  ========================
  📖 วิธีใช้ (USAGE GUIDE)
  ========================

  import GradientText from "@/app/components/GradientText";

  // Preset: pink-purple (default)
  <GradientText>Personal Profile</GradientText>

  // Preset อื่น
  <GradientText gradient="cyan-blue">Community</GradientText>
  <GradientText gradient="lime-cyan">Events</GradientText>
  <GradientText gradient="rainbow">TOM Thailand</GradientText>

  // Custom gradient
  <GradientText gradient="linear-gradient(90deg, #ff6600, #ffcc00)">
    Custom Color
  </GradientText>

  // ใส่ className เพิ่มได้
  <GradientText className="text-4xl font-black" gradient="pink-purple">
    Big Title
  </GradientText>

  // เปลี่ยน tag (default = span)
  <GradientText as="h2" className="text-3xl font-extrabold" gradient="rainbow">
    Section Heading
  </GradientText>
*/
