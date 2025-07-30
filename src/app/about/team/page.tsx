import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Award, GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Agile - Our Team",
  description: "Meet our experienced board and management team at Agile Insurance Brokers Ltd.",
};

export default function TeamPage() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary">Board & Management</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Meet our experienced team of professionals who are dedicated to providing you with the best insurance solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
                <CardHeader>
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-10 w-10 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-gray-900 mb-2">{member.name}</CardTitle>
                      <div className="flex items-center text-secondary font-semibold mb-4">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {member.position}
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>
                      
                      {/* Experience & Background */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                      </div>
                      
                      {/* Education */}
                      <div className="flex items-start space-x-3 mb-6">
                        <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Education</h4>
                          <p className="text-sm text-gray-600">{member.education}</p>
                        </div>
                      </div>
                      
                      {/* Expertise */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
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