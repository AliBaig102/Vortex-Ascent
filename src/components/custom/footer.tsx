"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLDivElement | null)[]>([]);
  const socialRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const addToLinksRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current[index] = el;
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background floating animation
      if (backgroundRef.current) {
        gsap.to(backgroundRef.current.children, {
          y: "random(-10, 10)",
          x: "random(-5, 5)",
          rotation: "random(-2, 2)",
          duration: "random(4, 6)",
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          stagger: 0.5
        });
      }

      // Brand section entrance
      if (brandRef.current) {
        gsap.set(brandRef.current, { opacity: 0, y: 30 });
        gsap.to(brandRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      }

      // Links staggered entrance
      if (linksRef.current.length > 0) {
        gsap.set(linksRef.current, { opacity: 0, y: 20 });
        gsap.to(linksRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.2,
          ease: "power3.out"
        });
      }

      // Social icons entrance
      if (socialRef.current) {
        const socialIcons = socialRef.current.querySelectorAll('a');
        gsap.set(socialIcons, { opacity: 0, scale: 0.8 });
        gsap.to(socialIcons, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.4,
          ease: "back.out(1.7)"
        });
      }

      // Bottom section entrance
      if (bottomRef.current) {
        gsap.set(bottomRef.current, { opacity: 0, y: 20 });
        gsap.to(bottomRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.6,
          ease: "power3.out"
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    service: [
      { label: "Contact Us", href: "/contact" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "About Us", href: "/about" },
    ],
    fitness: [
      { label: "Platform", href: "/platform" },
      { label: "Workout Library", href: "/workouts" },
      { label: "App Design", href: "/app" },
    ],
    aboutUs: [
      { label: "Service", href: "/service" },
      { label: "Fitness", href: "/fitness" },
      { label: "About Us", href: "/about" },
    ],
  };

  return (
    <footer 
      ref={footerRef}
      className="relative bg-gradient-to-br from-zinc-50 via-zinc-100/50 to-zinc-50 dark:from-zinc-900 dark:via-zinc-800/50 dark:to-zinc-900 border-t border-zinc-200/50 dark:border-zinc-800/50 rounded-t-4xl overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-l from-orange-500/5 to-red-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-blue-500/3 to-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div 
            ref={brandRef}
            className="lg:col-span-2 space-y-6"
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="size-20 relative">
                <Image
                  src="/images/text-logo.png"
                  alt="Vortex Ascent Logo"
                  fill
                  className="object-contain rounded-2xl"
                  priority={true}
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              Elevate your fitness journey with our comprehensive workout platform and expert guidance. Join us in building a stronger, healthier you.
            </p>

            {/* Social Media Icons */}
            <div 
              ref={socialRef}
              className="flex items-center gap-4"
            >
              <Link
                href="#"
                className="w-10 h-10 bg-zinc-200/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    y: -3,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    y: 0,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }}
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-zinc-200/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    y: -3,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    y: 0,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }}
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-zinc-200/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    y: -3,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    y: 0,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }}
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-4">
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                Subscribe to Newsletter
              </h4>
              <div className="flex gap-2 max-w-sm">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <Input
                    type="email"
                    placeholder="Enter Your Email Here"
                    className="pl-10 bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 focus:border-primary"
                  />
                </div>
                <Button 
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 shadow-lg hover:shadow-xl transition-all duration-300"
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
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div 
            ref={(el) => addToLinksRefs(el, 0)}
            className="space-y-6"
          >
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Service
            </h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div 
            ref={(el) => addToLinksRefs(el, 1)}
            className="space-y-6"
          >
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Fitness
            </h4>
            <ul className="space-y-3">
              {footerLinks.fitness.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div 
            ref={(el) => addToLinksRefs(el, 2)}
            className="space-y-6"
          >
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Us
            </h4>
            <ul className="space-y-3">
              {footerLinks.aboutUs.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          ref={bottomRef}
          className="mt-12 pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium tracking-wide">
              © {currentYear} Vortex Ascent. All rights reserved{" "}
              <span className="text-zinc-300 dark:text-zinc-600 mx-2">|</span>
              <span className="text-zinc-600 dark:text-zinc-300 hover:text-primary transition-colors duration-300">
                Developed by Mirza Ali Baig
              </span>
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-zinc-500 dark:text-zinc-400 hover:text-primary transition-all duration-300 text-sm hover:scale-105"
              >
                Twitter
              </Link>
              <span className="text-zinc-300 dark:text-zinc-600">—</span>
              <Link
                href="#"
                className="text-zinc-500 dark:text-zinc-400 hover:text-primary transition-all duration-300 text-sm hover:scale-105"
              >
                Instagram
              </Link>
              <span className="text-zinc-300 dark:text-zinc-600">—</span>
              <Link
                href="#"
                className="text-zinc-500 dark:text-zinc-400 hover:text-primary transition-all duration-300 text-sm hover:scale-105"
              >
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
