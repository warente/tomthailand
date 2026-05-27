import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Orbitron, Prompt } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "TOM Thailand — Thailand's Tom & Dee Lifestyle Community",
  description: "ศูนย์กลาง Community ของทอม ดี้ และ Tom Lifestyle ในประเทศไทย",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${plusJakarta.variable} ${orbitron.variable} ${prompt.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface text-white overflow-x-hidden">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
