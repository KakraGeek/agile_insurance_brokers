"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, DollarSign, AlertTriangle, TrendingUp, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedServicesPage() {
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

  // Animation variants for cards
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  // Animation variants for service icons
  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5, 
      rotate: -180 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 200
      }
    }
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Fixed Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Fixed Background Image - Stays in place while text scrolls */}
        <div 
          className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: "url('/Images/Parallax/New/banner_parallax_07.webp')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-700/60 to-emerald-700/60" />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Our <span className="text-white">Services</span>
            </h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Comprehensive insurance solutions tailored to your needs. We provide expert guidance and support throughout your insurance journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section - No Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className="hover:shadow-2xl transition-all duration-500 border-primary/20 bg-white/90 backdrop-blur-sm h-full">
                  <CardHeader>
                    <motion.div 
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                      variants={iconVariants}
                      custom={index}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <service.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    >
                      <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <motion.p 
                      className="text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    >
                      {service.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section with Strong Parallax */}
      <motion.section 
        className="py-16 bg-secondary text-white relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Fixed Background Image - Stays in place while text scrolls */}
        <div 
          className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: "url('/Images/Parallax/New/banner_parallax_05.webp')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-3xl font-bold !text-white drop-shadow-md mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Get a free quote today and discover how we can protect what matters most to you.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white !text-white bg-transparent hover:bg-white hover:!text-secondary transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
