import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopScroll from "@/components/TopScroll";
import type { Metadata } from "next";
import { Jost, Rubik } from "next/font/google";
import { title } from "@/data/general";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"], variable: "--jost" });

export const metadata: Metadata = {
  title: {
    default: `${title}`,
    template: `%s - ${title}`,
  },
  description:
    "Getree Landscaping provides expert garden design, lawn maintenance, and complete landscape makeovers. We create lush, sustainable environments that enhance your property's curb appeal.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${rubik.className} ${jost.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <TopScroll />
      </body>
    </html>
  );
}
