"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CompanyLogos() {
  const sectionRef = useRef<HTMLElement>(null);
  const logosRef = useRef<(HTMLDivElement | null)[]>([]);

  const addToLogosRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !logosRef.current.includes(el)) {
      logosRef.current[index] = el;
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance animation
      if (logosRef.current.length > 0) {
        gsap.set(logosRef.current, { opacity: 0, y: 30, scale: 0.8 });
        gsap.to(logosRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        });
      }

      // Continuous floating animation
      logosRef.current.forEach((logo, index) => {
        if (logo) {
          gsap.to(logo, {
            y: "-=10",
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.2
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const companies = [
    {
      name: "Google",
      logo: "/images/Google.png",
    },
    {
      name: "Meta",
      logo: "/images/Meta.png",
    },
    {
      name: "Netflix",
      logo: "/images/Netflix.png",
    },
    {
      name: "PayPal",
      logo: "/images/Paypal.png",
    },
    {
      name: "Microsoft",
      logo: "/images/Microsoft.png",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 md:py-16 px-4 container mx-auto rounded-4xl bg-gradient-to-br from-zinc-50 via-zinc-100/50 to-zinc-50 dark:from-zinc-900 dark:via-zinc-800/50 dark:to-zinc-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-l from-orange-500/5 to-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400 mb-2">Trusted by Leading Companies</h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company, index) => (
            <div
              key={company.name}
              ref={(el) => addToLogosRefs(el, index)}
              className="group flex items-center justify-center p-4 rounded-xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-200/30 dark:border-zinc-700/30 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.05,
                  y: -5,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  y: 0,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={120}
                height={60}
                className="h-8 md:h-10 lg:h-12 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
