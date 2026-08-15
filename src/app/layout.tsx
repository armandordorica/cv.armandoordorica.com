import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cv.armandoordorica.com"),
  title: {
    default: "Armando Ordorica · Machine Learning Scientist",
    template: "%s · Armando Ordorica",
  },
  description:
    "Staff scientist and PhD researcher building large-scale recommender systems through reinforcement learning, causal inference, and ranking.",
  keywords: [
    "Armando Ordorica",
    "machine learning",
    "reinforcement learning",
    "causal inference",
    "ranking algorithms",
    "recommender systems",
    "personalization",
    "Pinterest",
  ],
  authors: [{ name: "Armando Ordorica" }],
  openGraph: {
    title: "Armando Ordorica · Machine Learning Scientist",
    description:
      "Building intelligent systems that learn what matters over time.",
    type: "website",
    url: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
