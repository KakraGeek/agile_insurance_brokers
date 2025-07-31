import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, Target, Zap, Building } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Agile - About Us",
  description: "Learn about Agile Insurance Brokers Ltd. A dynamic Ghanaian-owned insurance brokerage firm committed to protecting businesses, people, and assets across Ghana.",
};

export default function AboutPage() {
  const subpages = [
    {
      title: "Our Services",
      description: "Discover our comprehensive range of insurance services designed to protect what matters most to you.",
      href: "/about/services",
      icon: Shield,
      color: "primary"
    },
    {
      title: "Our Products",
      description: "Explore our diverse portfolio of insurance products tailored to meet your specific needs.",
      href: "/about/products",
      icon: Building,
      color: "secondary"
    },
    {
      title: "Our Team",
      description: "Meet our experienced team of insurance professionals dedicated to serving you.",
      href: "/about/team",
      icon: Users,
      color: "primary"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">Agile Insurance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A dynamic Ghanaian-owned insurance brokerage firm committed to protecting businesses, 
              people, and assets across Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                Agile Insurance Brokers Ltd is a dynamic Ghanaian-owned insurance brokerage firm 
                committed to protecting businesses, people, and assets across Ghana.
              </p>
              <p className="text-gray-600 mb-6">
                We were incorporated in 2019 and are authorized to transact business with all 
                registered insurance companies in the country. Our focus is to provide tailored, 
                affordable insurance solutions backed by professional advice and support.
              </p>
              <p className="text-gray-600 mb-6">
                We provide peace of mind to our clients through sound insurance and exceptional service.
              </p>
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

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Authorized Broker</h3>
              <p className="text-gray-600">
                Authorized to transact business with all registered insurance companies in Ghana.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Service</h3>
              <p className="text-gray-600">
                Tailored, affordable insurance solutions backed by professional advice and support.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Focused</h3>
              <p className="text-gray-600">
                Committed to protecting businesses, people, and assets across Ghana.
              </p>
            </div>
          </div>

          {/* Explore More Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More About Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our services, products, and meet our dedicated team of professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subpages.map((subpage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className={`w-12 h-12 bg-${subpage.color}/10 rounded-full flex items-center justify-center mb-4`}>
                    <subpage.icon className={`h-6 w-6 text-${subpage.color}`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{subpage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{subpage.description}</p>
                  <Link href={subpage.href}>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`w-full border-${subpage.color} text-${subpage.color} hover:bg-${subpage.color} hover:text-white`}
                    >
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