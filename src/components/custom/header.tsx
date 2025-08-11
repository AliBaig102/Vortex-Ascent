import { Button } from "@/components/ui/button";
import { Dumbbell, Menu, User, Phone, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/custom/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Dumbbell className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Vortex Ascent</span>
              {/* <span className="text-xs text-muted-foreground">Fitness & Training</span> */}
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