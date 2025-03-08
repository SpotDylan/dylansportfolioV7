import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import FloatingGradients from "@/components/FloatingGradients";
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
  title: "Dylan Nguyen",
  description: "Dylan's portfolio, projects, and resume",
  openGraph: {
    title: "Dylan Nguyen",
    description: "Dylan's portfolio, projects, and resume",
    images: [
      {
        url: "/previewimage.png",
        width: 1200,
        height: 630,
        alt: "Dylan Nguyen's Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dylan Nguyen",
    description: "Dylan's portfolio, projects, and resume",
    images: ["/previewimage.png"],
    creator: "@dynguyen0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingGradients />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
