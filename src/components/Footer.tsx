import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-xl font-bold !text-white drop-shadow-md">Agile Insurance</h3>
              <p className="text-sm text-gray-300">Brokers Ltd</p>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted partner for comprehensive insurance solutions. 
              We provide expert advice and competitive quotes for all your insurance needs.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 !text-white drop-shadow-md">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about/products" className="text-gray-300 hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-gray-300 hover:text-white transition-colors">
                  Partners & Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 !text-white drop-shadow-md">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about/products" className="text-gray-300 hover:text-white transition-colors">
                  Motor Insurance
                </Link>
              </li>
              <li>
                <Link href="/about/products" className="text-gray-300 hover:text-white transition-colors">
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link href="/about/products" className="text-gray-300 hover:text-white transition-colors">
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link href="/about/products" className="text-gray-300 hover:text-white transition-colors">
                  Commercial Insurance
                </Link>
              </li>
              <li>
                <Link href="/about/products" className="text-gray-300 hover:text-white transition-colors">
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link href="/about/products" className="text-gray-300 hover:text-white transition-colors">
                  Property Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 !text-white drop-shadow-md">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-white mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Romick Plaza, Kweku Boi Street<br />
                    Adenta, Ghana<br />
                    GPS: GD-009-1766
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <div>
                  <a href="tel:+233244104087" className="text-gray-300 hover:text-white transition-colors text-sm block">
                    +233 244 104 087
                  </a>
                  <a href="tel:+233248290188" className="text-gray-300 hover:text-white transition-colors text-sm block">
                    +233 248 290 188
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <a href="mailto:info@agilebrokersgh.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@agilebrokersgh.com
                </a>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-white mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Mon - Fri: 8:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Agile Insurance Brokers Ltd. All rights reserved | Powered by The Geek Toolbox
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 