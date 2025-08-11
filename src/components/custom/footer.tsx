import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
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
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 rounded-t-4xl">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
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
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-10 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
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
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-6">
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">
              Get Started
            </h4>
            <ul className="space-y-3">
              {footerLinks.service.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">
              Get Started
            </h4>
            <ul className="space-y-3">
              {footerLinks.fitness.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">
              Get Started
            </h4>
            <ul className="space-y-3">
              {footerLinks.aboutUs.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
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
                className="text-zinc-500 dark:text-zinc-400 hover:text-primary transition-colors duration-300 text-sm"
              >
                Twitter
              </Link>
              <span className="text-zinc-300 dark:text-zinc-600">—</span>
              <Link
                href="#"
                className="text-zinc-500 dark:text-zinc-400 hover:text-primary transition-colors duration-300 text-sm"
              >
                Instagram
              </Link>
              <span className="text-zinc-300 dark:text-zinc-600">—</span>
              <Link
                href="#"
                className="text-zinc-500 dark:text-zinc-400 hover:text-primary transition-colors duration-300 text-sm"
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
