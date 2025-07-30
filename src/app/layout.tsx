import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agile Insurance Brokers - Your Trusted Insurance Partner",
  description: "Agile Insurance Brokers provides comprehensive insurance solutions including motor, health, life, and commercial insurance. Get expert advice and competitive quotes.",
  keywords: "insurance, brokers, motor insurance, health insurance, life insurance, commercial insurance, Ghana",
  authors: [{ name: "Agile Insurance Brokers" }],
  openGraph: {
    title: "Agile Insurance Brokers - Your Trusted Insurance Partner",
    description: "Comprehensive insurance solutions for individuals and businesses in Ghana",
    type: "website",
    locale: "en_US",
  },
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
