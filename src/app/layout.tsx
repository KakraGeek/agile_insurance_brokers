import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agile Insurance Brokers Ltd - Leading Insurance Brokers in Ghana | Motor, Health, Life & Commercial Insurance",
  description: "Agile Insurance Brokers Ltd - Ghana's trusted insurance brokerage firm. Expert advice on motor, health, life, commercial, and business insurance. Get competitive quotes and professional service at no cost to you.",
  keywords: "insurance brokers Ghana, motor insurance Ghana, health insurance Ghana, life insurance Ghana, commercial insurance Ghana, car insurance Ghana, business insurance Ghana, insurance quotes Ghana, professional indemnity insurance, public liability insurance, travel insurance Ghana, best insurance brokers in Ghana, affordable motor insurance Ghana, comprehensive health insurance plans, business liability insurance Ghana, insurance for small businesses Ghana, professional insurance services Ghana",
  authors: [{ name: "Agile Insurance Brokers Ltd" }],
  creator: "Agile Insurance Brokers Ltd",
  publisher: "Agile Insurance Brokers Ltd",
  robots: "index, follow",
  alternates: {
    canonical: "https://agile-insurance-website.vercel.app"
  },
  openGraph: {
    title: "Agile Insurance Brokers Ltd - Leading Insurance Brokers in Ghana",
    description: "Expert insurance brokerage services in Ghana. Motor, health, life, commercial, and business insurance solutions. Professional advice and competitive quotes at no cost.",
    type: "website",
    locale: "en_US",
    url: "https://agile-insurance-website.vercel.app",
    siteName: "Agile Insurance Brokers Ltd",
    images: [
      {
        url: "/Images/optimized/Logos/Agile_Logo-removebg-preview.webp",
        width: 1200,
        height: 630,
        alt: "Agile Insurance Brokers Ltd - Leading Insurance Brokers in Ghana"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Agile Insurance Brokers Ltd - Leading Insurance Brokers in Ghana",
    description: "Expert insurance brokerage services in Ghana. Motor, health, life, commercial, and business insurance solutions.",
    images: ["/Images/optimized/Logos/Agile_Logo-removebg-preview.webp"]
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
