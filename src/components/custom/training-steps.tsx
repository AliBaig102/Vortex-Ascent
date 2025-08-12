"use client";

import { Button } from "@/components/ui/button";
import { Check, CheckCircle, Users, Trophy, Target } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const steps = [
  {
    id: 1,
    icon: CheckCircle,
    title: "Assessment",
    description: "Complete fitness evaluation and goal setting with our expert trainers."
  },
  {
    id: 2,
    icon: Target,
    title: "Plan Creation",
    description: "Get a personalized workout and nutrition plan tailored to your needs."
  },
  {
    id: 3,
    icon: Users,
    title: "Training",
    description: "Start your guided training sessions with professional support."
  },
  {
    id: 4,
    icon: Trophy,
    title: "Achievement",
    description: "Track progress and celebrate your fitness milestones with us."
  }
];

export function TrainingSteps() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const addToStepsRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !stepsRef.current.includes(el)) {
      stepsRef.current[index] = el;
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background floating animation
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current.children, {
          y: "random(-20, 20)",
          x: "random(-10, 10)",
          rotation: "random(-5, 5)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          stagger: 0.5
        });
      }

      // Title and subtitle entrance
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 0, y: 30 });
        gsap.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      }

      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
        gsap.to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out"
        });
      }

      // Steps staggered entrance
      if (stepsRef.current.length > 0) {
        gsap.set(stepsRef.current, { opacity: 0, y: 50, scale: 0.9 });
        gsap.to(stepsRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.4,
          ease: "power3.out"
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section 
      ref={sectionRef}
      className="relative py-16 px-4 bg-white dark:bg-zinc-950 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-l from-orange-500/10 to-red-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Training Steps Overview */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
            >
              Your Fitness Journey in{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                4 Simple Steps
              </span>
            </h2>
            <p 
              ref={subtitleRef}
              className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
            >
              We&apos;ve streamlined the process to help you achieve your fitness goals
              efficiently and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => addToStepsRefs(el, index)}
                className="relative group"
              >
                <div 
                  className="bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-6 h-full transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/30"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      y: -10,
                      scale: 1.02,
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      y: 0,
                      scale: 1,
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm font-semibold text-primary mb-2 tracking-wider">
                      STEP {step.id}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Step Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Training Step
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-50 dark:bg-zinc-900 px-8 py-4 rounded-4xl">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/image-06.jpg"
                  alt="Gym equipment and training setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                Start Training
                <br />
                With Us
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Begin your fitness journey with our expert trainers and state-of-the-art facilities. We offer personalized programs designed to help you achieve your health and fitness goals.
              </p>
              
              {/* Statistics */}
              <div className="flex flex-wrap gap-8">
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">3.000</span>
                    <span className="text-primary text-xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">Active Members</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">5.000</span>
                    <span className="text-primary text-xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">Success Stories</p>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* How Its Work Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-50 dark:bg-zinc-900 rounded-4xl px-8 py-4">
            {/* Left - Content */}
            <div className="space-y-8">
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                How Its Work
              </h3>
              
              {/* Training Types */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center mt-1">
                    <Check className="size-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Body Training</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center mt-1">
                    <Check className="size-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Cardio Training</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center mt-1">
                    <Check className="size-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Endurance Training</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </div>
            
            {/* Right - Image */}
            <div className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/image-07.jpg"
                  alt="Person doing cardio training in gym"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Never Give Up Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-50 dark:bg-zinc-900 rounded-4xl px-8 py-4">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/image-04.jpeg"
                  alt="Motivational gym training session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                Never Give Up
                <br />
                Your Fitness Journey
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Stay motivated and committed to your fitness goals. Our supportive community and expert trainers will help you push through challenges and achieve lasting results.
              </p>
              
              {/* Statistics */}
              <div className="flex flex-wrap gap-8">
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">4.000</span>
                    <span className="text-primary text-xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">Weekly Workouts</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">5.000</span>
                    <span className="text-primary text-xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">Calories Burned</p>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}