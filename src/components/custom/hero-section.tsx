"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Dumbbell, Zap, Target } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const floatingIconsRef = useRef<HTMLDivElement[]>([]);
  const orbsRef = useRef<HTMLDivElement[]>([]);
  const shapesRef = useRef<HTMLDivElement[]>([]);
  const statsCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, statsRef.current, formRef.current], {
        opacity: 0,
        y: 50
      });
      
      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.8
      });

      // Main timeline for entrance animations
      const tl = gsap.timeline();
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5")
      .to(statsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .to(formRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6");

      // Floating animations for icons
      floatingIconsRef.current.forEach((icon, index) => {
        if (icon) {
          gsap.to(icon, {
            y: "-=20",
            rotation: "+=5",
            duration: 3 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.5
          });
        }
      });

      // Pulsing animations for orbs
      orbsRef.current.forEach((orb, index) => {
        if (orb) {
          gsap.to(orb, {
            scale: 1.2,
            x: index % 2 === 0 ? 100 : -80,
            y: index % 2 === 0 ? -50 : 30,
            duration: 8 + index * 2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 1
          });
        }
      });

      // Pulsing animations for shapes
      shapesRef.current.forEach((shape, index) => {
        if (shape) {
          gsap.to(shape, {
            scale: 1.5,
            opacity: 0.8,
            duration: 2 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.5
          });
        }
      });

      // Stats cards animation
      statsCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card, 
            { opacity: 0, x: index === 0 ? 50 : -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              delay: 1 + index * 0.5
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToFloatingRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) floatingIconsRef.current[index] = el;
  };

  const addToOrbsRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) orbsRef.current[index] = el;
  };

  const addToShapesRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) shapesRef.current[index] = el;
  };

  const addToStatsCardsRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) statsCardsRef.current[index] = el;
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />
      
      {/* Animated Gradient Orbs */}
      <div 
        ref={(el) => addToOrbsRefs(el, 0)}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-full blur-3xl"
      />
      
      <div 
        ref={(el) => addToOrbsRefs(el, 1)}
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-purple-500/15 rounded-full blur-3xl"
      />

      {/* Floating Icons */}
      <div 
        ref={(el) => addToFloatingRefs(el, 0)}
        className="absolute top-32 right-32 text-orange-500/30 dark:text-orange-400/30"
      >
        <Dumbbell size={48} />
      </div>
      
      <div 
        ref={(el) => addToFloatingRefs(el, 1)}
        className="absolute bottom-40 left-32 text-red-500/30 dark:text-red-400/30"
      >
        <Zap size={40} />
      </div>
      
      <div 
        ref={(el) => addToFloatingRefs(el, 2)}
        className="absolute top-1/2 right-20 text-blue-500/30 dark:text-blue-400/30"
      >
        <Target size={36} />
      </div>

      {/* Floating Geometric Shapes */}
      <div 
        ref={(el) => addToShapesRefs(el, 0)}
        className="absolute top-40 left-1/4 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
      />
      
      <div 
        ref={(el) => addToShapesRefs(el, 1)}
        className="absolute bottom-32 right-1/3 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rotate-45"
      />
      
      <div 
        ref={(el) => addToShapesRefs(el, 2)}
        className="absolute top-1/3 left-20 w-3 h-3 bg-gradient-to-r from-green-400 to-teal-500 rounded-full"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content - First on desktop */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <h1 
                ref={titleRef}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
                  Shape Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  Dream Body
                </span>
              </h1>
              
              <p 
                ref={subtitleRef}
                className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Transform your body and mind with our expert trainers and state-of-the-art facilities. Join our fitness community and achieve your health goals today.
              </p>
            </div>
            
            {/* Stats */}
            <div 
              ref={statsRef}
              className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Trainers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Access</div>
              </div>
            </div>
            
            {/* Email Signup */}
            <div 
              ref={formRef}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0"
            >
              <Input 
                type="email" 
                placeholder="Enter Your Email Here" 
                className="flex-1 h-14 px-6 text-base bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border-2 border-transparent focus:border-orange-500 transition-all duration-300"
              />
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-14 px-8 whitespace-nowrap shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
                }}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div 
            ref={imageRef}
            className="relative"
          >
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[700px]">
              {/* Main Image Container */}
              <div 
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/image-05.jpeg"
                  alt="Fitness training - person working out in gym"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Dynamic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-orange-500/20" />
                
                {/* Floating Stats Cards */}
                <div 
                  ref={(el) => addToStatsCardsRefs(el, 0)}
                  className="absolute top-8 right-8 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                >
                  <div className="text-2xl font-bold text-orange-500">98%</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Success Rate</div>
                </div>
                
                <div 
                  ref={(el) => addToStatsCardsRefs(el, 1)}
                  className="absolute bottom-8 left-8 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                >
                  <div className="text-2xl font-bold text-red-500">5★</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Rating</div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div 
                ref={(el) => addToOrbsRefs(el, 2)}
                className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-orange-400/30 to-red-500/30 rounded-full blur-2xl"
              />
              
              <div 
                ref={(el) => addToOrbsRefs(el, 3)}
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}