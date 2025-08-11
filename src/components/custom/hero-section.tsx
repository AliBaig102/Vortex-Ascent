import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image - First on mobile, second on desktop */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fitness training - person working out in gym"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Content - Second on mobile, first on desktop */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                Shape Your Body
                <br />
                <span className="text-primary">With Us Here</span>
              </h1>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Transform your body and mind with our expert trainers and state-of-the-art facilities. Join our fitness community and achieve your health goals today.
              </p>
            </div>
            
            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
              <Input 
                type="email" 
                placeholder="Enter Your Email Here" 
                className="flex-1 h-12 px-4 text-base"
              />
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6 whitespace-nowrap"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}