import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, Heart, Handshake, Target, Zap, Star } from "lucide-react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Script from "next/script";

export const metadata = {
  title: "Agile Insurance Brokers Ltd - Leading Insurance Brokers in Ghana | Expert Insurance Solutions",
  description: "Agile Insurance Brokers Ltd - Ghana's premier insurance brokerage firm. Expert advice on motor, health, life, commercial, and business insurance. Get competitive quotes and professional service at no cost to you.",
  keywords: "insurance brokers Ghana, motor insurance Ghana, health insurance Ghana, life insurance Ghana, commercial insurance Ghana, car insurance Ghana, business insurance Ghana, insurance quotes Ghana, professional indemnity insurance, public liability insurance, travel insurance Ghana, best insurance brokers in Ghana, affordable motor insurance Ghana, comprehensive health insurance plans, business liability insurance Ghana, insurance for small businesses Ghana, professional insurance services Ghana",
  openGraph: {
    title: "Agile Insurance Brokers Ltd - Leading Insurance Brokers in Ghana",
    description: "Expert insurance brokerage services in Ghana. Motor, health, life, commercial, and business insurance solutions. Professional advice and competitive quotes at no cost.",
    type: "website",
    url: "https://agilebrokersgh.com",
    images: [
      {
        url: "/Images/Logos/Logo-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Agile Insurance Brokers Ltd - Leading Insurance Brokers in Ghana"
      }
    ]
  }
};

export default function HomePage() {
  const coreValues = [
    { icon: Star, title: "Excellence", description: "We strive for excellence in everything we do" },
    { icon: Shield, title: "Integrity", description: "Honest and transparent in all our dealings" },
    { icon: Users, title: "Teamwork", description: "Collaborative approach to serving our clients" },
    { icon: Heart, title: "Service", description: "Dedicated to exceptional customer service" },
    { icon: Handshake, title: "Empathy", description: "Understanding and caring for our clients' needs" },
    { icon: Award, title: "Ethics", description: "Maintaining the highest ethical standards" },
  ];



  return (
    <div className="min-h-screen">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            "name": "Agile Insurance Brokers Ltd",
            "description": "Ghana's trusted insurance brokerage firm providing comprehensive insurance solutions including motor, health, life, and commercial insurance.",
            "url": "https://agilebrokersgh.com",
            "logo": "https://agilebrokersgh.com/Images/Logos/Logo-removebg-preview.png",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Ghana",
              "addressLocality": "Accra"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "serviceArea": {
              "@type": "Country",
              "name": "Ghana"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Insurance Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Motor Insurance",
                    "description": "Comprehensive motor insurance coverage for vehicles in Ghana"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Health Insurance",
                    "description": "Health insurance plans for individuals and families"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Life Insurance",
                    "description": "Life insurance policies for financial protection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Insurance",
                    "description": "Business insurance solutions for companies in Ghana"
                  }
                }
              ]
            },
            "foundingDate": "2019",
            "areaServed": "Ghana"
          })
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Updated with optimized images */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{" "}
              <span className="text-primary">Agile Insurance</span>{" "}
              <span className="text-secondary">Brokers Ltd</span>
            </h1>
            <h2 className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your trusted partner for comprehensive insurance solutions. We provide peace of mind 
              through sound insurance and exceptional service at no cost to you.
            </h2>

          </div>
        </div>
      </section>

      {/* Hero Slider Section */}
      <HeroSlider 
        slides={[
          {
            id: 1,
            image: "/Images/Hero Slider Images/Optimised/new_Hero1_result.webp",
            tagline: "Protecting What Matters Most – Your Family, Your Future"
          },
          {
            id: 2,
            image: "/Images/Hero Slider Images/Optimised/new_Hero2_result.webp",
            tagline: "Expert Advice That Drives Confident Decisions"
          },
          {
            id: 3,
            image: "/Images/Hero Slider Images/Optimised/new_Hero3_result.webp",
            tagline: "Reliable and Speedy Support at your Point of Need"
          },
          {
            id: 4,
            image: "/Images/Hero Slider Images/Optimised/new_Hero4_result.webp",
            tagline: "Powering Business Growth with Trusted Coverage"
          }
        ]}
        autoPlay={true}
        interval={5000}
      />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Agile Insurance Brokers</h2>
              <p className="text-lg text-gray-600 mb-6">
                Agile Insurance Brokers Limited was incorporated in 2019 under the Companies Act, 2019 (Act 992).
                The Company aims to be a leader in providing high quality and competitively priced insurance services nationwide.
              </p>
              <p className="text-gray-600 mb-6">
                Our mandate allows us to transact business with all registered insurance companies in Ghana.  
                Our brokerage services come to you at &quot;NO COST TO YOU&quot; and are designed to enhance your risk 
                management strategies while ensuring efficiency and cost savings.
              </p>
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Target className="mr-2 h-5 w-5" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">To be everywhere risk exists.</p>
                </CardContent>
              </Card>
              <Card className="border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-secondary flex items-center">
                    <Zap className="mr-2 h-5 w-5" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">To provide peace of mind to our customers through sound insurance and exceptional service.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and ensure we provide the best service to our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/about/products">
              <Button className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View Our Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold !text-white drop-shadow-md mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 text-white">
            Get a free quote today and discover how we can protect what matters most to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white !text-white bg-transparent hover:bg-white hover:!text-secondary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
