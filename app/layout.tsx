import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeuroCart — From 25+ Hackathons to Our First Win",
  description:
    "The story of Team Chaos — how persistence, sleepless nights, and relentless iteration led to building NeuroCart and winning our first hackathon.",
  keywords: ["NeuroCart", "Team Chaos", "Hackathon", "AI", "E-commerce", "Next.js"],
  openGraph: {
    title: "NeuroCart — From 25+ Hackathons to Our First Win",
    description: "A cinematic story of persistence, innovation, and winning.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} noise antialiased`}>
        {children}
      </body>
    </html>
  );
}
