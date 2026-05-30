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
  description: "ศูนย์กลาง Community ของทอม ดี้ และ Tom Lifestyle ในประเทศไทย ที่รวม Creator, Events และการประกวดระดับประเทศไว้ในที่เดียว",
  metadataBase: new URL("https://tomthailand.vercel.app"),
  openGraph: {
    title: "TOM Thailand — Thailand's Tom & Dee Lifestyle Community",
    description: "ศูนย์กลาง Community ของทอม ดี้ และ Tom Lifestyle ในประเทศไทย",
    url: "https://tomthailand.vercel.app",
    siteName: "TOM Thailand",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TOM Thailand",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TOM Thailand — Thailand's Tom & Dee Lifestyle Community",
    description: "ศูนย์กลาง Community ของทอม ดี้ และ Tom Lifestyle ในประเทศไทย",
    images: ["/opengraph-image.png"],
  },
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
