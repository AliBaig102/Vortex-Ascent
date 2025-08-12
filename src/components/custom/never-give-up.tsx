"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function NeverGiveUp() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background floating animation
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current.children, {
          y: "random(-20, 20)",
          x: "random(-15, 15)",
          rotation: "random(-5, 5)",
          duration: "random(4, 6)",
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          stagger: 0.3
        });
      }

      // Title entrance with split text effect
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 0 });
        gsap.set(titleRef.current.children, { y: 50, opacity: 0 });
        gsap.to(titleRef.current, { opacity: 1, duration: 0.1 });
        gsap.to(titleRef.current.children, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out"
        });
      }

      // Text entrance
      if (textRef.current) {
        gsap.set(textRef.current, { opacity: 0, y: 30 });
        gsap.to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power3.out"
        });
      }

      // Button entrance
      if (buttonRef.current) {
        gsap.set(buttonRef.current, { opacity: 0, scale: 0.8 });
        gsap.to(buttonRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.6,
          ease: "back.out(1.7)"
        });
      }

      // Image entrance
      if (imageRef.current) {
        gsap.set(imageRef.current, { opacity: 0, x: 50, scale: 0.9 });
        gsap.to(imageRef.current, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section 
      ref={sectionRef}
      className="m-4 p-8 rounded-4xl bg-gradient-to-br overflow-hidden from-orange-500 via-orange-600 to-red-500 relative"
    >
      {/* Enhanced Background Effects */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
        
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-white/15 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-white/25 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-white/10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div 
            ref={contentRef}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                <span className="inline-block">Never Give</span>
                <br />
                <span className="inline-block bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">Up</span>
              </h2>
              
              <p 
                ref={textRef}
                className="text-white/90 text-lg leading-relaxed max-w-md"
              >
                Push your limits, break barriers, and transform your body and mind. Your journey to a stronger, better you starts here.
              </p>
            </div>
            
            <Button 
              ref={buttonRef}
              size="lg"
              className="bg-white text-orange-600 hover:bg-white/90 hover:text-orange-700 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.05,
                  y: -2,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  y: 0,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }}
            >
              Get Started
            </Button>
          </div>
          
          {/* Right - Image */}
          <div 
            ref={imageRef}
            className="relative"
          >
            <div className="relative w-full h-[200px] md:h-[300px]">
              {/* Enhanced Decorative Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent rounded-3xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-yellow-200/20 rounded-3xl blur-sm"></div>
              
              {/* Main Image */}
              <div 
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                }}
              >
                <Image
                  src="/images/image-01.jpeg"
                  alt="Determined athlete training hard in gym"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Enhanced Overlay Pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}