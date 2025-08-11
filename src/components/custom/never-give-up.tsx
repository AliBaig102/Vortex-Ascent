import { Button } from "@/components/ui/button";
import Image from "next/image";

export function NeverGiveUp() {
  return (
    <section className="my-4 p-8 container mx-auto rounded-4xl bg-gradient-to-br overflow-hidden from-orange-500 to-orange-600 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Never Give
                <br />
                Up
              </h2>
              
              <p className="text-white/90 text-lg leading-relaxed max-w-md">
                Push your limits, break barriers, and transform your body and mind. Your journey to a stronger, better you starts here.
              </p>
            </div>
            
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Get Started
            </Button>
          </div>
          
          {/* Right - Image */}
          <div className="relative">
            <div className="relative w-full h-[200px] md:h-[300px]">
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-3xl"></div>
              
              {/* Main Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb"
                  alt="Determined athlete training hard in gym"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}