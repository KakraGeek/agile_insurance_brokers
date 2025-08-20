"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface HeroSlide {
  id: number;
  image: string;
  tagline: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface HeroSliderProps {
  slides?: HeroSlide[];
  autoPlay?: boolean;
  interval?: number;
}

export default function HeroSlider({ slides: propSlides, autoPlay = true, interval = 5000 }: HeroSliderProps) {
  // Default slides data if none provided
  const defaultSlides: HeroSlide[] = [
    {
      id: 1,
      image: "/images/hero-slider-images/new_Hero1_result.webp",
      tagline: "Protecting what matters most - your family, your future",
      title: "Your Trusted Insurance Partner",
      subtitle: "Comprehensive insurance solutions for individuals and businesses in Ghana",
      ctaText: "Get Started",
      ctaLink: "/contact"
    },
    {
      id: 2,
      image: "/images/hero-slider-images/new_Hero2_result.webp",
      tagline: "Expert advice that drives confident decisions",
      title: "Expert Advice & Competitive Rates",
      subtitle: "We provide peace of mind through sound insurance and exceptional service",
      ctaText: "Learn More",
      ctaLink: "/about"
    },
    {
      id: 3,
      image: "/images/hero-slider-images/new_Hero3_result.webp",
      tagline: "Reliable and speedy support - at your point of need",
      title: "Protect What Matters Most",
      subtitle: "Motor, health, life, commercial, and business insurance tailored to your needs",
      ctaText: "View Services",
      ctaLink: "/about/services"
    },
    {
      id: 4,
      image: "/images/hero-slider-images/new_Hero4_result.webp",
      tagline: "Powering business growth with trusted coverage",
      title: "Dedicated to Your Protection",
      subtitle: "Trust our experienced team to safeguard your assets and provide peace of mind",
      ctaText: "Contact Us",
      ctaLink: "/contact"
    }
  ];

  // Use provided slides or default slides
  const slides = propSlides || defaultSlides;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Auto-play functionality with proper timing
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      nextSlide();
    }, interval);

    return () => clearTimeout(timer);
  }, [currentSlide, isPlaying, interval, nextSlide]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  // Animation variants for slides
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  // Animation variants for background image
  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0.8 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden bg-black">
      {/* Slides with Framer Motion */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Parallax Effect */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image 
              src={slides[currentSlide].image}
              alt={`Agile Insurance Brokers Ltd - ${slides[currentSlide].tagline}`}
              width={1200}
              height={600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="w-full h-full object-cover"
              priority={currentSlide === 0}
              quality={85}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
          
          {/* Content Overlay with Enhanced Animations */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-20"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-primary/95 text-white px-6 py-4 md:px-8 md:py-6 shadow-2xl backdrop-blur-sm rounded-xl border border-white/20 max-w-xs md:max-w-md lg:max-w-lg text-center">
              <motion.p 
                className="text-sm md:text-lg lg:text-xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {slides[currentSlide].tagline}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between z-30 px-4 md:px-6">
        {/* Left Arrow */}
        <motion.button
          onClick={prevSlide}
          className="group bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300"
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          onClick={nextSlide}
          className="group bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300"
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      </div>

      {/* Enhanced Slider Navigation Dots */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-2 md:space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className={`w-8 h-1.5 md:w-12 md:h-2 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "bg-primary shadow-lg"
                  : "bg-white/60 hover:bg-white/80"
              }`}>
                <motion.div 
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: index === currentSlide ? "100%" : "0%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Enhanced Slide Counter */}
      <motion.div 
        className="absolute top-4 md:top-6 right-4 md:right-6 bg-black/60 backdrop-blur-md text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium border border-white/20 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {currentSlide + 1} / {slides.length}
      </motion.div>

      {/* Play/Pause Control */}
      <motion.button
        onClick={togglePlayPause}
        className="absolute top-4 md:top-6 left-4 md:left-6 bg-black/60 backdrop-blur-md text-white p-2 md:p-3 rounded-full border border-white/20 z-30 hover:bg-black/80 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 md:w-5 md:h-5" />
        ) : (
          <Play className="w-4 h-4 md:w-5 md:h-5" />
        )}
      </motion.button>

      {/* Enhanced Progress Bar */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: interval / 1000, 
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
            key={currentSlide}
          />
        </div>
      )}
    </section>
  );
} 