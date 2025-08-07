import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, DollarSign, AlertTriangle, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Agile - Our Services",
  description: "Comprehensive insurance services including risk assessment, claims management, policy reviews, and more.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: "Risk Assessment & Advisory",
      description: "We conduct thorough risk evaluations and place coverage with reputable insurers capable of handling claims promptly and efficiently."
    },
    {
      icon: FileText,
      title: "Claims Management",
      description: "We oversee the entire claims process from the accident scene to full settlement, allowing you to focus on your core business."
    },
    {
      icon: AlertTriangle,
      title: "Insurance Audits & Policy Reviews",
      description: "We assess your current policies, recommend appropriate coverage, and ensure you're adequately covered."
    },
    {
      icon: DollarSign,
      title: "Claims Pre-financing",
      description: "In select cases, we facilitate advance claim payments under special terms to ease financial strain."
    },
    {
      icon: TrendingUp,
      title: "Premium Negotiations",
      description: "We secure the most competitive premium rates to help you save on costs."
    },
    {
      icon: Clock,
      title: "Policy Renewal & Compliance Alerts",
      description: "We manage renewals, updates, and compliance for vehicle insurance, roadworthiness certificates, and driver's licenses."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive insurance solutions tailored to your needs. We provide expert guidance and support throughout your insurance journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
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