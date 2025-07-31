import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Shield, Users, Award, Handshake, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Partners & Clients - Agile Insurance Brokers Ltd | Trusted Insurance Partners in Ghana",
  description: "Discover Agile Insurance Brokers Ltd's trusted partners and diverse client sectors across Ghana. We serve construction, banking, healthcare, education, oil & gas, and more with comprehensive insurance solutions.",
  keywords: "insurance partners Ghana, insurance clients Ghana, trusted insurance brokers, construction insurance Ghana, banking insurance Ghana, healthcare insurance Ghana, education insurance Ghana, oil and gas insurance Ghana, NGO insurance Ghana, car rental insurance Ghana, pharmaceutical insurance Ghana",
  openGraph: {
    title: "Partners & Clients - Agile Insurance Brokers Ltd | Trusted Insurance Partners in Ghana",
    description: "Discover Agile Insurance Brokers Ltd's trusted partners and diverse client sectors across Ghana. We serve construction, banking, healthcare, education, oil & gas, and more with comprehensive insurance solutions.",
    type: "website",
    url: "https://agile-insurance-website.vercel.app/clients",
    images: [
      {
        url: "/Images/Logos/Logo-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Partners & Clients - Agile Insurance Brokers Ltd"
      }
    ]
  }
};

export default function ClientsPage() {
  const partners = [
    { 
      name: "Ghana Police Service", 
      logo: "/Images/Logos/ghana-police-logo-removebg-preview.png",
      alt: "Ghana Police Service"
    },
    { 
      name: "Ghana National Fire Service", 
      logo: "/Images/Logos/fire_service-removebg-preview.png",
      alt: "Ghana National Fire Service"
    },
    { 
      name: "State Transport Company", 
      logo: "/Images/Logos/stc-removebg-preview.png",
      alt: "State Transport Company"
    },
    { 
      name: "Driver and Vehicle Licensing Authority (DVLA)", 
      logo: "/Images/Logos/DVLA-removebg-preview.png",
      alt: "Driver and Vehicle Licensing Authority"
    },
  ];

  const clientSectors = [
    {
      title: "Construction/Civil Engineering",
      clients: ["ZDI Limited", "Providence Ltd"],
      icon: Building,
      color: "primary"
    },
    {
      title: "Banking & Finance",
      clients: ["Fiaseman Rural Bank Plc"],
      icon: Shield,
      color: "secondary"
    },
    {
      title: "Printing & Publishing",
      clients: ["Ideaz Printhouse Limited"],
      icon: Building,
      color: "primary"
    },
    {
      title: "Car Rentals",
      clients: ["Dzakay Car Rentals", "Jeken Car Rentals", "Oliver Car Rentals"],
      icon: Shield,
      color: "secondary"
    },
    {
      title: "Health/Pharmaceuticals",
      clients: ["Royale E&E Medicals Ltd", "Barnor Hospital", "Mediport Fertility"],
      icon: Shield,
      color: "primary"
    },
    {
      title: "Oil & Gas",
      clients: ["Magnify Petroleum Ltd", "Energy Links Ltd"],
      icon: Building,
      color: "secondary"
    },
    {
      title: "Education",
      clients: ["Country Int School", "Goshen Community School"],
      icon: Users,
      color: "primary"
    },
    {
      title: "NGOs",
      clients: ["Rainforest Alliance"],
      icon: Award,
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary">Partners</span> & <span className="text-secondary">Clients</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Building strong relationships with trusted partners and serving diverse clients 
              across Ghana&apos;s economy with comprehensive insurance solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Agile Insurance Brokers partners with all registered insurance companies in Ghana 
              to offer the broadest and most competitive insurance solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {partners.map((partner, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm border border-gray-200 relative">
                    <Image 
                      src={partner.logo}
                      alt={partner.alt}
                      fill
                      sizes="96px"
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Trusted partner for professional, compliant, and client-focused services.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              These partnerships enable us to deliver professional, compliant, and client-focused 
              insurance services nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Major Clients</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Since our inception, we have successfully provided top-tier broking services across 
              various sectors of the Ghanaian economy. Our clientele includes corporations, 
              renowned local businesses, corporate groups, informal associations, and private individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientSectors.map((sector, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 bg-${sector.color}/10 rounded-full flex items-center justify-center mb-4`}>
                    <sector.icon className={`h-6 w-6 text-${sector.color}`} />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{sector.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {sector.clients.map((client, clientIndex) => (
                      <li key={clientIndex} className="text-gray-600 text-sm flex items-center">
                        <Star className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                        {client}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              These relationships allow us to provide comprehensive, reliable insurance solutions 
              across a broad spectrum of client needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Become Our Client
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Reliability Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Partnerships</h3>
              <p className="text-gray-600">
                Strong relationships with all registered insurance companies in Ghana for comprehensive coverage options.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600">
                Successfully serving diverse clients across multiple sectors since our inception in 2019.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Focused</h3>
              <p className="text-gray-600">
                Dedicated to providing personalized insurance solutions that meet your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold !text-white drop-shadow-md mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
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