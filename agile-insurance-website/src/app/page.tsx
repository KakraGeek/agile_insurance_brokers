import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, Heart, Handshake, Target, Zap, Star } from "lucide-react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Script from "next/script";
import Image from "next/image";

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
      
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About <span className="text-primary">AGILE</span> <span className="text-secondary">INSURANCE</span> <span className="text-primary">BROKERS</span>
              </h2>
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
              <Card className="border-primary/20 hover:shadow-xl transition-all duration-300">
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
              <Card className="border-secondary/20 hover:shadow-xl transition-all duration-300">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are guided by these fundamental principles in everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Trust & Reliability",
                description: "Building lasting relationships through consistent, dependable service."
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "Putting our clients' needs first in every decision we make."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Striving for the highest standards in all our services."
              },
              {
                icon: Heart,
                title: "Integrity",
                description: "Operating with honesty, transparency, and ethical practices."
              }
            ].map((value) => (
              <Card key={value.title} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 mb-3">{value.title}</CardTitle>
                <CardContent className="p-0">
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logo & Tagline Section with Fixed Background */}
      <section className="py-20 relative overflow-hidden">
        {/* Fixed Background Image - Stays in place while text scrolls */}
        <div 
          className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: "url('/Images/Parallax/New/banner_parallax_01.webp')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-secondary/40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div>
            <Image 
              src="/Images/Logos/Logo-removebg-preview.png"
              alt="Agile Insurance Brokers Ltd Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive insurance solutions tailored to meet your unique needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Motor Insurance",
                description: "Comprehensive coverage for your vehicles with competitive rates.",
                link: "/about/services"
              },
              {
                icon: Heart,
                title: "Health Insurance",
                description: "Protect your health and well-being with our health insurance plans.",
                link: "/about/services"
              },
              {
                icon: Users,
                title: "Life Insurance",
                description: "Secure your family's future with our life insurance policies.",
                link: "/about/services"
              },
              {
                icon: Handshake,
                title: "Commercial Insurance",
                description: "Protect your business with our comprehensive commercial insurance solutions.",
                link: "/about/services"
              },
              {
                icon: Star,
                title: "Travel Insurance",
                description: "Travel with peace of mind knowing you're protected worldwide.",
                link: "/about/services"
              },
              {
                icon: Award,
                title: "Professional Indemnity",
                description: "Protect your professional reputation and financial security.",
                link: "/about/services"
              }
            ].map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href={service.link}>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white relative overflow-hidden">
        {/* Fixed Background Image - Stays in place while text scrolls */}
        <div 
          className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: "url('/Images/Parallax/New/banner_parallax_03.webp')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary/80" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold !text-white drop-shadow-md mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Get a free quote today and discover how we can protect what matters most to you.</p>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white bg-transparent hover:bg-white hover:text-secondary transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
