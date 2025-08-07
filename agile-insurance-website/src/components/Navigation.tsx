"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center min-h-20 py-2">
          {/* Logo and Text */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/Logos/Logo-removebg-preview.png"
                alt="Agile Insurance Logo"
                width={80}
                height={80}
                className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                priority
              />
              <div className="ml-3">
                <h1 className="text-base lg:text-lg font-bold whitespace-nowrap leading-none">
                  <span className="text-primary">Agile</span>{" "}
                  <span className="text-secondary">Insurance</span>
                </h1>
                <p className="text-xs text-secondary leading-none">Brokers Ltd</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex space-x-8">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-primary bg-primary/10"
                  : "text-gray-700 hover:text-primary hover:bg-gray-50"
              }`}
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive("/about")
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  About Us
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/about" className="cursor-pointer">
                    Who We Are
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/services" className="cursor-pointer">
                    Our Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/products" className="cursor-pointer">
                    Our Products
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/team" className="cursor-pointer">
                    Our Team
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/clients"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/clients")
                  ? "text-primary bg-primary/10"
                  : "text-gray-700 hover:text-primary hover:bg-gray-50"
              }`}
            >
              Partners & Clients
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-primary bg-primary/10"
                  : "text-gray-700 hover:text-primary hover:bg-gray-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex">
            {pathname !== "/contact" && (
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Get a Free Quote
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center min-h-16 py-2 px-4 w-full justify-between">
          {/* Logo and Text */}
          <Link href="/" className="flex items-center min-w-0 max-w-[70vw]">
            <Image
              src="/Images/Logos/Logo-removebg-preview.png"
              alt="Agile Insurance Logo"
              width={28}
              height={28}
              className="w-7 h-7 object-contain flex-shrink-0"
              priority
            />
            <div className="ml-2 min-w-0">
              <div className="text-[11px] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="text-primary">Agile</span>{" "}
                <span className="text-secondary">Insurance</span>
              </div>
              <div className="text-[8px] text-secondary leading-none">
                Brokers Ltd
              </div>
            </div>
          </Link>
          {/* Hamburger Menu */}
          <div className="flex-shrink-0 ml-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/")
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-700 mb-2">
                  About Us
                </div>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/about"
                    className={`block py-1 text-sm ${
                      isActive("/about") && !pathname.includes("/about/")
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Who We Are
                  </Link>
                  <Link
                    href="/about/services"
                    className={`block py-1 text-sm ${
                      isActive("/about/services")
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/about/products"
                    className={`block py-1 text-sm ${
                      isActive("/about/products")
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our Products
                  </Link>
                  <Link
                    href="/about/team"
                    className={`block py-1 text-sm ${
                      isActive("/about/team")
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our Team
                  </Link>
                </div>
              </div>
              <Link
                href="/clients"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/clients")
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Partners & Clients
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/contact")
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 pt-2">
                {pathname !== "/contact" && (
                  <Link href="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Get a Free Quote
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 