import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Heamac — Pregnancy Care, Newborn Care & Neonatal Phototherapy",
    template: "%s | Heamac",
  },
  description:
    "Heamac provides trusted pregnancy care guides, newborn care information, neonatal jaundice management, and home phototherapy solutions for parents and healthcare professionals across India.",
  keywords:
    "neonatal jaundice, phototherapy, newborn care, pregnancy care, home phototherapy, bilirubin, neonatal care India, Heamac",
  authors: [{ name: "Heamac Medical Team" }],
  openGraph: {
    type: "website",
    siteName: "Heamac",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-white`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
