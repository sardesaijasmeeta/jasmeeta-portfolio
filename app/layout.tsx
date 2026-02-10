import type { Metadata } from "next";
import { Geist, Geist_Mono, Josefin_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yash Shah - Portfolio",
  description: "Portfolio of Yash Shah — developer, designer and creator.",
  openGraph: {
    title: "Yash Shah - Portfolio",
    description: "Portfolio of Yash Shah — developer, designer and creator.",
    images: [
      {
        url: "/coder.png",
        width: 1200,
        height: 630,
        alt: "Yash Shah - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Shah - Portfolio",
    description: "Portfolio of Yash Shah — developer, designer and creator.",
    images: ["/coder.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${josefinSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
