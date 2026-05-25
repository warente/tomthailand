import React from "react";

export type NeonVariant =
  | "full"      // double border + strong multi-layer glow (standard)
  | "glow"      // single border + soft ambient glow
  | "soft"      // thin border + minimal glow (subtle)
  | "pulse"     // same as full แต่ glow หายใจ
  | "gradient"  // gradient border (ไม่มี glow, เน้น border สวย)
  | "rainbow";  // rainbow gradient border หมุนสี

export type NeonColor =
  | "cyan"    // #00ffff
  | "pink"    // #ff00ff
  | "lime"    // #ccff00
  | "purple"  // #cc44ff
  | string;   // หรือใส่ hex เองได้เลย

const COLOR_MAP: Record<string, string> = {
  cyan:   "#00ffff",
  pink:   "#ff00ff",
  lime:   "#ccff00",
  purple: "#cc44ff",
};

function resolveColor(color: NeonColor): string {
  return COLOR_MAP[color] ?? color;
}

interface NeonBorderProps {
  /** Style ของ border — full | glow | soft | pulse | gradient | rainbow */
  variant?: NeonVariant;
  /** สี — cyan | pink | lime | purple | หรือ hex string */
  color?: NeonColor;
  /** rounded-* ของกรอบ */
  rounded?: "lg" | "xl" | "2xl" | "3xl" | "full";
  /** className เพิ่มเติมสำหรับ wrapper */
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function NeonBorder({
  variant = "full",
  color = "cyan",
  rounded = "2xl",
  className = "",
  children,
  style,
}: NeonBorderProps) {
  const c = resolveColor(color);

  const radii: Record<string, string> = {
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  };
  const r = radii[rounded];

  /* ---- ตัวแปร style ตาม variant ---- */
  let wrapperStyle: React.CSSProperties = {};
  let innerClass = "";

  if (variant === "full") {
    // Double border + strong glow — style มาตรฐาน
    wrapperStyle = {
      border: `2px solid ${c}`,
      outline: `1.5px solid ${c}`,
      outlineOffset: "3px",
      borderRadius: r,
      boxShadow: `0 0 12px ${c}, 0 0 30px ${c}70, 0 0 60px ${c}30`,
    };
  } else if (variant === "glow") {
    // Single border + soft layered glow
    wrapperStyle = {
      border: `2px solid ${c}`,
      borderRadius: r,
      boxShadow: `0 0 8px ${c}80, 0 0 24px ${c}40, 0 0 48px ${c}20`,
    };
  } else if (variant === "soft") {
    // Thin border + barely-there glow (เหมาะกับ card บน background สว่าง)
    wrapperStyle = {
      border: `1.5px solid ${c}60`,
      borderRadius: r,
      boxShadow: `0 0 10px ${c}25`,
    };
  } else if (variant === "pulse") {
    // Full style + breathing animation
    wrapperStyle = {
      border: `2px solid ${c}`,
      outline: `1.5px solid ${c}`,
      outlineOffset: "3px",
      borderRadius: r,
      boxShadow: `0 0 12px ${c}, 0 0 30px ${c}70, 0 0 60px ${c}30`,
    };
    innerClass = "neon-pulse-anim";
  } else if (variant === "gradient") {
    // Gradient border trick: background-clip padding-box + border-box
    wrapperStyle = {
      borderRadius: r,
      border: "2px solid transparent",
      background: `linear-gradient(#ffffff, #ffffff) padding-box,
                   linear-gradient(135deg, ${c}, ${c}60, ${c}ff) border-box`,
    };
  } else if (variant === "rainbow") {
    // Rainbow border via ::before — animation อยู่แค่ border ไม่กระทบ children
    wrapperStyle = {
      borderRadius: r,
    };
    innerClass = "neon-rainbow-border";
  }

  return (
    <div
      className={`${innerClass} ${className}`}
      style={{ ...wrapperStyle, ...style }}
    >
      {children}
    </div>
  );
}

/*
  ========================
  📖 วิธีใช้ (USAGE GUIDE)
  ========================

  import NeonBorder from "@/app/components/NeonBorder";

  // Style มาตรฐาน (full glow + double border)
  <NeonBorder variant="full" color="cyan">
    <div className="p-6">content</div>
  </NeonBorder>

  // Soft สำหรับ card เยอะๆ ไม่ให้ดู busy
  <NeonBorder variant="soft" color="pink">...</NeonBorder>

  // Pulse — glow หายใจ เด่นขึ้นมา
  <NeonBorder variant="pulse" color="lime">...</NeonBorder>

  // Gradient border — ไม่มี glow เน้น border สวย
  <NeonBorder variant="gradient" color="purple">...</NeonBorder>

  // Rainbow — ใช้กับ section hero หรือ featured card
  <NeonBorder variant="rainbow">...</NeonBorder>

  // ใส่ hex เองได้
  <NeonBorder variant="glow" color="#ff6600">...</NeonBorder>

  // Adjust rounded
  <NeonBorder variant="full" color="cyan" rounded="xl">...</NeonBorder>
*/
