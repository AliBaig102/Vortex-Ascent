"use client";
import { Button } from "@/components/ui/button";
import { Dumbbell, Menu, User, Phone, Mail, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/custom/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance animation
      gsap.fromTo(headerRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
      // Navigation animation
      if (navRef.current) {
        gsap.fromTo(navRef.current.children,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.4, stagger: 0.1 }
        );
      }

      // Actions animation
      gsap.fromTo(actionsRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.3 }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
        );
        gsap.fromTo(mobileMenuRef.current.children,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.2, ease: "power2.out", stagger: 0.05, delay: 0.1 }
        );
      } else {
        gsap.to(mobileMenuRef.current,
          { height: 0, opacity: 0, duration: 0.2, ease: "power2.in" }
        );
      }
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header 
        ref={headerRef}
        className="sticky top-0 z-50 w-full border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 shadow-sm"
      >
        <div className="container mx-auto px-4">
           <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link 
               href="/" 
               className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
             >
               <div className="relative flex items-center justify-center w-10 h-10">
                 <Image
                   src="/images/logo.png"
                   alt="Vortex Ascent Logo"
                   width={40}
                   height={40}
                   className="object-contain rounded-md"
                   priority={true}
                 />
               </div>
               <div className="flex flex-col -space-y-1">
                 <span className="text-lg font-bold tracking-tight text-foreground">
                   Vortex
                 </span>
                 <span className="text-sm font-medium text-primary">Ascent</span>
               </div>
             </Link>

            {/* Navigation */}
            <nav ref={navRef} className="hidden md:flex items-center space-x-8">
               {navigationItems.map(({ href, label }) => (
                 <Link
                   key={href}
                   href={href}
                   className={`text-sm font-medium transition-colors relative group ${
                     pathname === href
                       ? "text-primary"
                       : "text-foreground hover:text-primary"
                   }`}
                 >
                   {label}
                   <span
                     className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ${
                       pathname === href ? "scale-x-100" : ""
                     }`}
                   />
                 </Link>
               ))}
             </nav>

            {/* Right side actions */}
            <div ref={actionsRef} className="flex items-center space-x-4">
              {/* Theme toggle */}
              <div className="hover:scale-110 transition-transform duration-200">
                <ThemeToggle />
              </div>

              {/* Action buttons */}
              <div className="hidden sm:flex items-center space-x-3">
                <Link href="/login">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-2 border-zinc-200 dark:border-zinc-700 hover:border-orange-500 dark:hover:border-orange-400 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 hover:scale-105"
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
                    }}
                  >
                    Log In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
                    }}
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <Button 
                variant="outline" 
                size="sm" 
                className="md:hidden border-2 border-zinc-200 dark:border-zinc-700 hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-300"
                onClick={toggleMobileMenu}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2 });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
                }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
           ref={mobileMenuRef}
           className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-lg overflow-hidden"
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="space-y-4">
              {navigationItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    pathname === href
                      ? "bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-500 dark:text-orange-400 border-l-4 border-orange-500"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-orange-500 dark:hover:text-orange-400"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              
              {/* Mobile action buttons */}
              <div className="pt-4 space-y-3 border-t border-zinc-200 dark:border-zinc-700">
                <Link href="/login" className="block">
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-zinc-200 dark:border-zinc-700 hover:border-orange-500 dark:hover:border-orange-400 hover:text-orange-500 dark:hover:text-orange-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log In
                  </Button>
                </Link>
                <Link href="/signup" className="block">
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
