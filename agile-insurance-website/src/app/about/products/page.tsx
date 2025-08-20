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
      image: "/Images/Product Images/Optimised/new_motor insurance_result.webp"
    },
    {
      icon: Ship,
      title: "Marine Insurance",
      description: "Covers loss or damage to ships, cargo, and transport during shipment.",
      image: "/Images/Product Images/Optimised/new_marine insurance_result.webp"
    },
    {
      icon: Users,
      title: "Workmen's Compensation",
      description: "Coverage for employer's liability due to injury or occupational disease.",
      image: "/Images/Product Images/Optimised/new_workmen_result.webp"
    },
    {
      icon: Shield,
      title: "Public Liability",
      description: "Liability for third-party injury/property damage (mandatory under Act 1061).",
      image: "/Images/Product Images/Optimised/new_public liability_result.webp"
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Group and individual plans: OPD, surgery, hospitalization, evacuation, etc.",
      image: "/Images/Product Images/Optimised/new_health insurance_result.webp"
    },
    {
      icon: Building,
      title: "Commercial Building Insurance",
      description: "Mandatory cover for fire, collapse, earthquake, flood, etc.",
      image: "/Images/Product Images/Optimised/new_commercial building_result.webp"
    },
    {
      icon: Briefcase,
      title: "Group Life Comprehensive Plan",
      description: "Customizable 24-hour coverage for employee benefits.",
      image: "/Images/Product Images/Optimised/new_group life_result.webp"
    },
    {
      icon: Package,
      title: "Assets All-Risk Insurance",
      description: "Extensive protection against theft, damage, flood, breakdown, etc.",
      image: "/Images/Product Images/Optimised/new_assets all risk_result.webp"
    },
    {
      icon: Shield,
      title: "Combined Fire & Burglary",
      description: "Business protection against both fire and theft.",
      image: "/Images/Product Images/Optimised/new_combined fire & burglary_result.webp"
    },
    {
      icon: Plane,
      title: "Goods-in-Transit Insurance",
      description: "Covers cargo in transit against fire, theft, collision, natural disasters.",
      image: "/Images/Product Images/Optimised/new_goods-in-transit_result.webp"
    },
    {
      icon: FileText,
      title: "Insurance Bonds/Guarantees",
      description: "Comprehensive bonding solutions",
      features: ["Bid Bonds", "Performance Bonds", "Advance Mobilization Bonds"],
      image: "/Images/Product Images/Optimised/new_insurance bonds_result.webp"
    },
    {
      icon: Plane,
      title: "Travel Insurance",
      description: "Cover for baggage, delays, missed connections, emergency medical.",
      image: "/Images/Product Images/Optimised/new_travel insurance_result.webp"
    },
    {
      icon: UserCheck,
      title: "Professional Indemnity",
      description: "Covers professionals like doctors, nurses, etc.",
      image: "/Images/Product Images/Optimised/new_professional indemnity_result.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20 relative overflow-hidden">
        {/* Fixed Background Image - Stays in place while text scrolls */}
        <div 
          className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('/Images/Parallax/New/banner_parallax_02.webp')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-secondary/40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Our <span className="text-white">Products</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
              Comprehensive range of insurance products designed to protect what matters most to you and your business.
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
                      className="object-contain hover:scale-105 transition-transform duration-300"
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
      <section className="py-16 bg-secondary text-white relative overflow-hidden">
        {/* Fixed Background Image - Stays in place while text scrolls */}
        <div 
          className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: "url('/Images/Parallax/New/banner_parallax_01.webp')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary/80" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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