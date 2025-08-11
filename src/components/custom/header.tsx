"use client";
import { Button } from "@/components/ui/button";
import { Dumbbell, Menu, User, Phone, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/custom/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="relative flex items-center justify-center w-10 h-10">
              <Image
                src="/images/logo.png"
                alt="Vortex Ascent Logo"
                width={40}
                height={40}
                className="object-contain"
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
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
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
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Action buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Log In
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
