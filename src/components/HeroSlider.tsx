"use client";

import { useState, useEffect } from "react";


import Image from "next/image";

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
  slides: HeroSlide[];
  autoPlay?: boolean;
  interval?: number;
}

export default function HeroSlider({ slides, autoPlay = true, interval = 5000 }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTagline, setShowTagline] = useState(false);

  // Auto-play functionality with proper timing
  useEffect(() => {
    if (!autoPlay) return;

    const showTaglineTimer = setTimeout(() => {
      setShowTagline(true);
    }, 1000); // Show tagline 1 second after image appears

    const hideTaglineTimer = setTimeout(() => {
      setShowTagline(false);
    }, interval - 1000); // Hide tagline 1 second before next slide

    const nextSlideTimer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => {
      clearTimeout(showTaglineTimer);
      clearTimeout(hideTaglineTimer);
      clearTimeout(nextSlideTimer);
    };
  }, [autoPlay, interval, slides.length, currentSlide]);

  // Reset tagline state when slide changes
  useEffect(() => {
    setShowTagline(false);
  }, [currentSlide]);



  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <section className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <Image 
                src={slide.image}
                alt={`Slide ${slide.id}`}
                width={1200}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="max-w-full max-h-full object-contain"
                priority={index === 0}
                quality={85}
              />
            </div>
            
            {/* Centered Tagline Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-500 ${
              index === currentSlide && showTagline ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className={`bg-primary/90 text-white px-6 py-4 md:px-8 md:py-6 shadow-xl backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-700 ${
                index === currentSlide && showTagline ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}>
                <p className="text-sm md:text-lg lg:text-xl font-bold text-center max-w-xs md:max-w-md">
                  {slide.tagline}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>



      {/* Modern Slider Navigation */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-1 md:space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`w-8 h-1 md:w-12 md:h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "bg-primary shadow-lg"
                  : "bg-secondary/80 hover:bg-secondary"
              }`}>
                <div className={`h-full rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "bg-primary w-full"
                    : "bg-secondary w-0 group-hover:w-full"
                }`} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-black/60 backdrop-blur-md text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium border border-black/30 z-30">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Progress Bar */}
      {autoPlay && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-1000 ease-linear"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          />
        </div>
      )}
    </section>
  );
} 