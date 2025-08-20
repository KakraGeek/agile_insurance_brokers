"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, Target, Zap, Building } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function AnimatedAboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

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

  // Animation variants for sections
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

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



  // Animation variants for feature icons
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

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section with Enhanced Animations */}
      <motion.section 
        className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20 relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Fixed Background Image - Stays in place while text scrolls */}
        <div 
          className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('/Images/Parallax/New/banner_parallax_05.webp')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-secondary/40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
                         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
               About <span className="text-primary">Agile Insurance</span>{" "}
               <span className="text-secondary">Brokers</span>
             </h1>
             <motion.p 
               className="text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4, duration: 0.6 }}
             >
               Discover our story, mission, and commitment to providing exceptional insurance solutions 
               that protect what matters most to you and your business.
             </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content with Enhanced Animations */}
      <motion.section 
        className="py-16 bg-white relative"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Background Pattern with Parallax */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -200])
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{
              backgroundImage: "url('/Images/commercial building.png')"
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
                             <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
               <motion.p 
                 className="text-lg text-gray-600 mb-6"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4, duration: 0.6 }}
               >
                 Agile Insurance Brokers Ltd is a dynamic Ghanaian-owned insurance brokerage firm 
                 committed to protecting businesses, people, and assets across Ghana.
               </motion.p>
               <motion.p 
                 className="text-gray-600 mb-6"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6, duration: 0.6 }}
               >
                 We were incorporated in 2019 and are authorized to transact business with all 
                 registered insurance companies in the country. Our focus is to provide tailored, 
                 affordable insurance solutions backed by professional advice and support.
               </motion.p>
               <motion.p 
                 className="text-gray-600 mb-6"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.8, duration: 0.6 }}
               >
                 We provide peace of mind to our clients through sound insurance and exceptional service.
               </motion.p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
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
              </motion.div>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
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
              </motion.div>
            </motion.div>
          </div>

          {/* Key Features with Enhanced Animations */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="text-center"
              variants={cardVariants}
              custom={0}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                variants={iconVariants}
                custom={0}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Shield className="h-8 w-8 text-primary" />
              </motion.div>
                             <h3 className="text-xl font-semibold text-gray-900 mb-2">Authorized Broker</h3>
               <p className="text-gray-600">
                 Authorized to transact business with all registered insurance companies in Ghana.
               </p>
             </motion.div>
             <motion.div 
               className="text-center"
               variants={cardVariants}
               custom={1}
               whileHover={{ 
                 y: -8, 
                 scale: 1.03,
                 transition: { duration: 0.3 }
               }}
             >
               <motion.div 
                 className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                 variants={iconVariants}
                 custom={1}
                 whileHover={{ 
                   scale: 1.1, 
                   rotate: 5,
                   transition: { duration: 0.3 }
                 }}
               >
                 <Award className="h-8 w-8 text-secondary" />
               </motion.div>
               <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Service</h3>
               <p className="text-gray-600">
                 Tailored, affordable insurance solutions backed by professional advice and support.
               </p>
             </motion.div>
                          <motion.div 
               className="text-center"
               variants={cardVariants}
               custom={2}
               whileHover={{ 
                 y: -8, 
                 scale: 1.03,
                 transition: { duration: 0.3 }
               }}
             >
               <motion.div 
                 className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                 variants={iconVariants}
                 custom={2}
                 whileHover={{ 
                   scale: 1.1, 
                   rotate: 5,
                   transition: { duration: 0.3 }
                 }}
               >
                 <Users className="h-8 w-8 text-primary" />
               </motion.div>
               <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Focused</h3>
               <p className="text-gray-600">
                 Committed to protecting businesses, people, and assets across Ghana.
               </p>
             </motion.div>
          </motion.div>

          {/* Explore More Section with Animation */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More About Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our services, products, and meet our dedicated team of professionals.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {subpages.map((subpage, index) => (
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
                <Card className="hover:shadow-2xl transition-all duration-500 cursor-pointer border-primary/20 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <motion.div 
                      className={`w-12 h-12 bg-${subpage.color}/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-${subpage.color}/20 transition-colors duration-300`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <subpage.icon className={`h-6 w-6 text-${subpage.color}`} />
                    </motion.div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors duration-300">{subpage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{subpage.description}</p>
                    <Link href={subpage.href}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className={`w-full border-${subpage.color} text-${subpage.color} hover:bg-${subpage.color} hover:text-white transition-all duration-300 hover:scale-105`}
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

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
            backgroundImage: "url('/Images/Parallax/New/banner_parallax_03.webp')",
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
            Ready to Partner With Us?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 opacity-90 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Let&apos;s work together to protect what matters most to you and your business.
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
