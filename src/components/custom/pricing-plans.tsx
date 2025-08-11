"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function PricingPlans() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const plansRef = useRef<(HTMLDivElement | null)[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const addToPlansRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !plansRef.current.includes(el)) {
      plansRef.current[index] = el;
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background floating animation
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current.children, {
          y: "random(-15, 15)",
          x: "random(-10, 10)",
          rotation: "random(-3, 3)",
          duration: "random(4, 6)",
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          stagger: 0.3
        });
      }

      // Title entrance
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 0, y: 30 });
        gsap.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      }

      // Plans staggered entrance
      if (plansRef.current.length > 0) {
        gsap.set(plansRef.current, { opacity: 0, y: 60, scale: 0.9 });
        gsap.to(plansRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.4,
          ease: "power3.out"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const plans = [
    {
      name: "Basic",
      price: "$29.99",
      description: "Perfect for beginners starting their fitness journey with essential gym access and basic features.",
      features: [
        { text: "Access to gym equipment during off-peak hours", included: true },
        { text: "Basic fitness assessment", included: true },
        { text: "2 group classes per month", included: false },
        { text: "Personal training sessions", included: false },
        { text: "Nutrition consultation", included: false },
        { text: "Access to premium facilities", included: false }
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: "$59.99",
      description: "Ideal for dedicated fitness enthusiasts who want more features and flexibility in their workout routine.",
      features: [
        { text: "24/7 gym access", included: true },
        { text: "Comprehensive fitness assessment", included: true },
        { text: "Unlimited group classes", included: true },
        { text: "1 personal training session per month", included: true },
        { text: "Basic nutrition consultation", included: false },
        { text: "Access to premium facilities", included: false }
      ],
      highlighted: true
    },
    {
      name: "Elite",
      price: "$99.99",
      description: "The ultimate fitness experience with exclusive benefits and personalized attention for optimal results.",
      features: [
        { text: "24/7 gym access with priority booking", included: true },
        { text: "Monthly fitness assessments", included: true },
        { text: "Unlimited group classes with priority booking", included: true },
        { text: "4 personal training sessions per month", included: true },
        { text: "Monthly nutrition consultation", included: true },
        { text: "Full access to premium facilities", included: true }
      ],
      highlighted: false
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 px-4 bg-zinc-100 dark:bg-zinc-800 mx-4 rounded-4xl overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-r from-primary/8 to-secondary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-l from-orange-500/8 to-red-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/6 to-purple-500/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-gradient-to-tl from-green-500/6 to-teal-500/6 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
          >
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Perfect Plans
            </span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              ref={(el) => addToPlansRefs(el, index)}
              className={`relative bg-white/80 dark:bg-zinc-900/80 border-2 transition-all duration-500 backdrop-blur-sm ${
                plan.highlighted 
                  ? 'border-primary/50 shadow-xl shadow-primary/20 scale-105' 
                  : 'border-zinc-200/50 dark:border-zinc-700/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10'
              }`}
              onMouseEnter={(e) => {
                if (!plan.highlighted) {
                  gsap.to(e.currentTarget, {
                    y: -8,
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.highlighted) {
                  gsap.to(e.currentTarget, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                }
              }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-400 ml-2">/month</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 group">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                        feature.included 
                          ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                          : 'bg-zinc-200 dark:bg-zinc-700'
                      }`}>
                        {feature.included ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <X className="w-3 h-3 text-zinc-400" />
                        )}
                      </div>
                      <span className={`text-sm transition-colors duration-300 ${
                        feature.included 
                          ? 'text-zinc-900 dark:text-zinc-100 group-hover:text-primary' 
                          : 'text-zinc-400 dark:text-zinc-500'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Button 
                  className={`w-full transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl'
                      : 'bg-zinc-900 hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-white dark:bg-zinc-100 dark:hover:bg-gradient-to-r dark:hover:from-primary dark:hover:to-secondary dark:text-zinc-900 dark:hover:text-white'
                  }`}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.05,
                      duration: 0.2,
                      ease: "power2.out"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      duration: 0.2,
                      ease: "power2.out"
                    });
                  }}
                >
                  Get Started
                  <span className="ml-2">→</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}