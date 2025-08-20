"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Award, GraduationCap, Briefcase } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function AnimatedTeamPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const teamMembers = [
    {
      name: "Patrick Morttey",
      position: "Board Chairman",
      description: "Patrick Morttey is a distinguished finance and banking professional with extensive expertise in credit risk analysis, project financing, and value chain financing. With over three decades of experience in corporate and investment banking, he has successfully led and structured major financial transactions, including syndicated loans and strategic funding for large-scale projects in Ghana.",
      experience: "Over three decades in corporate and investment banking",
      background: "Former Deputy Head of Corporate Banking at GCB Bank PLC",
      education: "MBA in Finance from the University of Ghana, certified ACCA Level 1 professional",
      expertise: ["Credit Risk Analysis", "Project Financing", "Value Chain Financing", "Corporate Banking"]
    },
    {
      name: "Love Aklasi",
      position: "Board Member",
      description: "Love Aklasi is a seasoned banking and financial services professional with over 15 years of experience in branch operations, sales, and customer relationship management. She has held key leadership roles in Fidelity Bank Ghana and United Bank for Africa, where she successfully drove profitability, optimized operations, and enhanced customer engagement.",
      experience: "Over 15 years in banking and financial services",
      background: "Key leadership roles in Fidelity Bank Ghana and United Bank for Africa",
      education: "MBA in Marketing from the University of Leicester, BA in English from the University of Cape Coast",
      expertise: ["Branch Operations", "Sales Management", "Customer Relationship Management", "Profitability Optimization"]
    },
    {
      name: "Jemima Dei",
      position: "Board Member",
      description: "Jemima Dei is a distinguished legal practitioner with extensive experience in corporate finance, commercial litigation, and regulatory compliance. She is currently a Counsel at Kuenyehia & Nutsukpui, where she specializes in high-stakes commercial disputes, corporate advisory, and arbitration.",
      experience: "Extensive experience in corporate finance and commercial litigation",
      background: "Counsel at Kuenyehia & Nutsukpui",
      education: "LLM in Corporate Finance & Law from the University of Aberdeen, qualified lawyer in Ghana",
      expertise: ["Corporate Finance", "Commercial Litigation", "Regulatory Compliance", "Corporate Advisory", "Arbitration"]
    },
    {
      name: "Emmanuel Kobla Obey",
      position: "Managing Director",
      description: "Mr. Emmanuel Kobla Obey is an insurance practitioner with experience from Trinity Insurance Brokers and Metrix Brokerage Ltd. He has been in the insurance industry for 10 years and has acquired rich experience in diverse fields. He is the Managing Director of Agile Insurance Brokers Ltd and is assisted by an Operations Manager and two senior officers.",
      experience: "10 years in the insurance industry",
      background: "Experience from Trinity Insurance Brokers and Metrix Brokerage Ltd",
      education: "Insurance practitioner with diverse field experience",
      expertise: ["Insurance Broking", "Operations Management", "Strategic Leadership", "Client Relations"]
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

  // Animation variants for avatars
  const avatarVariants = {
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

  // Animation variants for hero section
  const heroVariants = {
    hidden: { 
      opacity: 0, 
      y: 100 
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

  // Animation variants for expertise tags
  const tagVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" ref={containerRef}>
      {/* Hero Section with Enhanced Parallax */}
      <motion.section 
        className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20 relative overflow-hidden"
        variants={heroVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Fixed Background Image - Stays in place while text scrolls */}
        <div 
          className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('/Images/Parallax/New/banner_parallax_01.webp')",
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Our <span className="text-white">Board & Management</span>
            </h1>
            <motion.p 
              className="text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Meet our experienced team of professionals who are dedicated to providing you with the best insurance solutions and exceptional service.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Members with Enhanced Animations */}
      <section className="py-16 relative">
        {/* Background Pattern with Parallax */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -250])
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{
              backgroundImage: "url('/Images/health insurance.png')"
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                whileHover={{ 
                  y: -5, 
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className="hover:shadow-2xl transition-all duration-500 border-primary/20 bg-white/90 backdrop-blur-sm overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start space-x-6">
                      {/* Enhanced Avatar with Animation */}
                      <motion.div 
                        className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300"
                        variants={avatarVariants}
                        custom={index}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <User className="h-10 w-10 text-primary" />
                      </motion.div>
                      
                      <div className="flex-1">
                        {/* Name and Position with Staggered Animation */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                        >
                          <CardTitle className="text-2xl text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                            {member.name}
                          </CardTitle>
                          <div className="flex items-center text-secondary font-semibold mb-4">
                            <Briefcase className="h-4 w-4 mr-2" />
                            {member.position}
                          </div>
                        </motion.div>

                        {/* Description with Fade In */}
                        <motion.p 
                          className="text-gray-600 leading-relaxed mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                        >
                          {member.description}
                        </motion.p>
                        
                        {/* Experience & Background Grid */}
                        <motion.div 
                          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                        >
                          <div className="flex items-start space-x-3">
                            <Award className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-gray-900">Experience</h4>
                              <p className="text-sm text-gray-600">{member.experience}</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-gray-900">Background</h4>
                              <p className="text-sm text-gray-600">{member.background}</p>
                            </div>
                          </div>
                        </motion.div>
                        
                        {/* Education */}
                        <motion.div 
                          className="flex items-start space-x-3 mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                        >
                          <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Education</h4>
                            <p className="text-sm text-gray-600">{member.education}</p>
                          </div>
                        </motion.div>
                        
                        {/* Expertise Tags with Staggered Animation */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 1.0, duration: 0.5 }}
                        >
                          <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, skillIndex) => (
                              <motion.span 
                                key={skillIndex} 
                                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors duration-300 cursor-default"
                                variants={tagVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: skillIndex * 0.05 + index * 0.1 + 1.2, duration: 0.4 }}
                                whileHover={{ 
                                  scale: 1.05, 
                                  y: -2,
                                  transition: { duration: 0.2 }
                                }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section with Strong Parallax */}
      <motion.section 
        className="py-16 bg-secondary text-white relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Fixed Background Image - Stays in place while text scrolls */}
        <div 
          className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: "url('/Images/Parallax/New/banner_parallax_07.webp')",
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
            className="text-xl mb-8 max-w-2xl mx-auto text-white"
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
