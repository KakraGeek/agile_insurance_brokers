import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, Heart, Handshake, Target, Zap, Star } from "lucide-react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

export const metadata = {
  title: "Agile - Home",
  description: "Welcome to Agile Insurance Brokers Ltd. Your trusted partner for comprehensive insurance solutions in Ghana.",
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{" "}
              <span className="text-primary">Agile Insurance</span>{" "}
              <span className="text-secondary">Brokers Ltd</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your trusted partner for comprehensive insurance solutions. We provide peace of mind 
              through sound insurance and exceptional service at no cost to you.
            </p>

          </div>
        </div>
      </section>

      {/* Hero Slider Section */}
      <HeroSlider 
        slides={[
          {
            id: 1,
            image: "/Images/optimized/Hero Slider Images/Hero1_resized.webp",
            tagline: "Protecting What Matters Most – Your Family, Your Future"
          },
          {
            id: 2,
            image: "/Images/optimized/Hero Slider Images/Hero2_resized.webp",
            tagline: "Expert Advice That Drives Confident Decisions"
          },
          {
            id: 3,
            image: "/Images/optimized/Hero Slider Images/Hero3_resized1.webp",
            tagline: "Reliable and Speedy Support at your Point of Need"
          },
          {
            id: 4,
            image: "/Images/optimized/Hero Slider Images/Hero4_resized.webp",
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
