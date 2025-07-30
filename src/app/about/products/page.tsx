import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Ship, Users, Shield, Heart, Building, Briefcase, Package, Plane, UserCheck, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Agile - Our Products",
  description: "Comprehensive range of insurance products including motor, marine, health, life, and commercial insurance.",
};

export default function ProductsPage() {
  const products = [
    {
      icon: Car,
      title: "Motor Insurance",
      description: "Comprehensive coverage for your vehicles",
      features: ["Third Party Only", "Third Party, Fire & Theft", "Comprehensive"],
      image: "/Images/optimized/motor insurance.webp"
    },
    {
      icon: Ship,
      title: "Marine Insurance",
      description: "Covers loss or damage to ships, cargo, and transport during shipment.",
      image: "/Images/optimized/marine insurance.webp"
    },
    {
      icon: Users,
      title: "Workmen's Compensation",
      description: "Coverage for employer's liability due to injury or occupational disease.",
      image: "/Images/optimized/workmen.webp"
    },
    {
      icon: Shield,
      title: "Public Liability",
      description: "Liability for third-party injury/property damage (mandatory under Act 1061).",
      image: "/Images/optimized/public liability.webp"
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Group and individual plans: OPD, surgery, hospitalization, evacuation, etc.",
      image: "/Images/optimized/health insurance.webp"
    },
    {
      icon: Building,
      title: "Commercial Building Insurance",
      description: "Mandatory cover for fire, collapse, earthquake, flood, etc.",
      image: "/Images/optimized/commercial building.webp"
    },
    {
      icon: Briefcase,
      title: "Group Life Comprehensive Plan",
      description: "Customizable 24-hour coverage for employee benefits.",
      image: "/Images/optimized/group life.webp"
    },
    {
      icon: Package,
      title: "Assets All-Risk Insurance",
      description: "Extensive protection against theft, damage, flood, breakdown, etc.",
      image: "/Images/optimized/assets all risk.webp"
    },
    {
      icon: Shield,
      title: "Combined Fire & Burglary",
      description: "Business protection against both fire and theft.",
      image: "/Images/optimized/combined fire & burglary.webp"
    },
    {
      icon: Plane,
      title: "Goods-in-Transit Insurance",
      description: "Covers cargo in transit against fire, theft, collision, natural disasters.",
      image: "/Images/optimized/goods-in-transit.webp"
    },
    {
      icon: FileText,
      title: "Insurance Bonds/Guarantees",
      description: "Comprehensive bonding solutions",
      features: ["Bid Bonds", "Performance Bonds", "Advance Mobilization Bonds"],
      image: "/Images/optimized/insurance bonds.webp"
    },
    {
      icon: Plane,
      title: "Travel Insurance",
      description: "Cover for baggage, delays, missed connections, emergency medical.",
      image: "/Images/optimized/travel insurance.webp"
    },
    {
      icon: UserCheck,
      title: "Professional Indemnity",
      description: "Covers professionals like doctors, nurses, etc.",
      image: "/Images/optimized/professional indemnity.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive insurance products designed to protect what matters most. From personal to commercial coverage, we have you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
                <CardHeader>
                  <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4 overflow-hidden relative">
                    <Image 
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                  {product.features && (
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
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