"use client";

import { Clock, Dumbbell, TrendingUp, Bell, BarChart3, ClipboardList, Heart, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function FitnessCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const addToCardsRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      const tl = gsap.timeline();
      
      // Title animation
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 0, y: 50 });
        tl.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        });
      }

      // Cards staggered animation
      if (cardsRef.current.length > 0) {
        gsap.set(cardsRef.current, { opacity: 0, y: 80, scale: 0.8 });
        tl.to(cardsRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        }, "-=0.5");
      }

      // Background floating animation
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current, {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    {
      icon: ClipboardList,
      title: "Workout Tracking",
      description: "Record and monitor your exercises, sets, reps, and weights to track your progress and maintain accountability"
    },
    {
      icon: Users,
      title: "Group Cardio",
      description: "Join high-energy group cardio sessions including HIIT, spinning, and aerobic exercises to boost your endurance"
    },
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle and increase strength through progressive resistance training with free weights and machines"
    },
    {
      icon: Clock,
      title: "Interval Training",
      description: "Maximize fat burn and improve conditioning with timed workout intervals alternating between high and low intensity"
    },
    {
      icon: Bell,
      title: "Workout Reminders",
      description: "Stay consistent with customizable notifications for your scheduled workouts and fitness goals"
    },
    {
      icon: TrendingUp,
      title: "Progress Analytics",
      description: "Visualize your fitness journey with detailed charts and metrics tracking improvements in strength and endurance"
    },
    {
      icon: ClipboardList,
      title: "Custom Programs",
      description: "Access personalized workout plans tailored to your goals, whether building muscle, losing weight, or improving fitness"
    },
    {
      icon: Heart,
      title: "Heart Rate Training",
      description: "Monitor your cardiovascular health and optimize workouts by training in targeted heart rate zones"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-zinc-50 via-zinc-100/50 to-zinc-50 dark:from-zinc-900 dark:via-zinc-800/50 dark:to-zinc-900 m-4 rounded-4xl overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          ref={backgroundRef}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
        />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-orange-500/5 to-red-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100 bg-clip-text text-transparent mb-4"
          >
            Fitness Category Training
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                ref={(el) => addToCardsRefs(el, index)}
                className="group relative overflow-hidden bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                  gsap.to(e.currentTarget.querySelector('.icon-container'), {
                    scale: 1.1,
                    rotation: 5,
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
                  gsap.to(e.currentTarget.querySelector('.icon-container'), {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.out"
                  });
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="icon-container mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-600 rounded-2xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <IconComponent className="h-8 w-8 text-zinc-600 dark:text-zinc-400 group-hover:text-primary transition-all duration-500 group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-100 leading-tight group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <CardDescription className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed text-center group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}