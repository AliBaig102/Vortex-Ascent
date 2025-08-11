'use client';

import { Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setTheme, type Theme } from '@/store/slices/themeSlice';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function ThemeToggle() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sunRef = useRef<SVGSVGElement>(null);
  const moonRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Initial entrance animation
    if (buttonRef.current) {
      gsap.set(buttonRef.current, { opacity: 0, scale: 0.8 });
      gsap.to(buttonRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: 0.2
      });
    }
  }, []);
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);

  const handleThemeChange = (newTheme: Theme) => {
    dispatch(setTheme(newTheme));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          ref={buttonRef}
          variant="outline" 
          size="icon"
          className="relative overflow-hidden border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1.05,
              duration: 0.2,
              ease: "power2.out"
            });
            
            // Rotate icons on hover
            if (sunRef.current) {
              gsap.to(sunRef.current, {
                rotation: 180,
                duration: 0.3,
                ease: "power2.out"
              });
            }
            if (moonRef.current) {
              gsap.to(moonRef.current, {
                rotation: 180,
                duration: 0.3,
                ease: "power2.out"
              });
            }
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1,
              duration: 0.2,
              ease: "power2.out"
            });
            
            // Reset icon rotation
            if (sunRef.current) {
              gsap.to(sunRef.current, {
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
              });
            }
            if (moonRef.current) {
              gsap.to(moonRef.current, {
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
              });
            }
          }}
        >
          <Sun 
            ref={sunRef}
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" 
          />
          <Moon 
            ref={moonRef}
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" 
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className="backdrop-blur-sm bg-background/80 border-border/50"
      >
        <DropdownMenuItem
          onClick={() => handleThemeChange('light')}
          className={`transition-all duration-200 hover:bg-primary/10 ${
            theme === 'light' ? 'bg-primary/20 text-primary' : ''
          }`}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget.querySelector('svg'), {
              scale: 1.1,
              duration: 0.2,
              ease: "power2.out"
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget.querySelector('svg'), {
              scale: 1,
              duration: 0.2,
              ease: "power2.out"
            });
          }}
        >
          <Sun className="mr-2 h-4 w-4 transition-transform duration-200" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange('dark')}
          className={`transition-all duration-200 hover:bg-primary/10 ${
            theme === 'dark' ? 'bg-primary/20 text-primary' : ''
          }`}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget.querySelector('svg'), {
              scale: 1.1,
              duration: 0.2,
              ease: "power2.out"
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget.querySelector('svg'), {
              scale: 1,
              duration: 0.2,
              ease: "power2.out"
            });
          }}
        >
          <Moon className="mr-2 h-4 w-4 transition-transform duration-200" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange('system')}
          className={`transition-all duration-200 hover:bg-primary/10 ${
            theme === 'system' ? 'bg-primary/20 text-primary' : ''
          }`}
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget.querySelector('svg'), {
              scale: 1.1,
              duration: 0.2,
              ease: "power2.out"
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget.querySelector('svg'), {
              scale: 1,
              duration: 0.2,
              ease: "power2.out"
            });
          }}
        >
          <Monitor className="mr-2 h-4 w-4 transition-transform duration-200" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}