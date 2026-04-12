import type { Metadata } from "next";
import { Inter, Syne, Geist_Mono, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "TeamChaos — From 25+ Hackathons to Runner-Up",
  description:
    "The story of Team Chaos — how persistence, sleepless nights, and relentless iteration led to finishing runner-up in just 24 hours.",
  keywords: ["TeamChaos", "Team Chaos", "Hackathon", "AI", "E-commerce", "Next.js"],
  openGraph: {
    title: "TeamChaos — From 25+ Hackathons to Our First Win",
    description: "A cinematic story of persistence, innovation, and winning.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("scroll-smooth", syne.variable, inter.variable, spaceGrotesk.variable, playfair.variable)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${geistMono.variable} noise antialiased`}>
        {children}
      </body>
    </html>
  );
}
