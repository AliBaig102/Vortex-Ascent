import { Button } from "@/components/ui/button";
import { Dumbbell, Menu, User, Phone, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/custom/theme-toggle";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative flex items-center justify-center w-10 h-10 ">
              <Image
                src="/images/text-logo.png"
                alt="Vortex Ascent Logo"
                width={50}
                height={50}
                className="object-contain rounded-lg"
                priority={true}
              />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-lg font-bold tracking-tight text-foreground">Vortex</span>
              <span className="text-sm font-medium text-primary">Ascent</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Action buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <Button variant="outline" size="sm">
                Log In
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Sign Up
              </Button>
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