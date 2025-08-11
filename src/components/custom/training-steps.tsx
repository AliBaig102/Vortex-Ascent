import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

export function TrainingSteps() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-zinc-950">
      <div>
        {/* Training Step Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Training Step
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-50 dark:bg-zinc-900 px-8 py-4 rounded-4xl">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Gym equipment and training setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                Start Training
                <br />
                With Us
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Begin your fitness journey with our expert trainers and state-of-the-art facilities. We offer personalized programs designed to help you achieve your health and fitness goals.
              </p>
              
              {/* Statistics */}
              <div className="flex flex-wrap gap-8">
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">3.000</span>
                    <span className="text-primary text-xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">Active Members</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">5.000</span>
                    <span className="text-primary text-xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">Success Stories</p>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* How Its Work Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-50 dark:bg-zinc-900 rounded-4xl px-8 py-4">
            {/* Left - Content */}
            <div className="space-y-8">
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                How Its Work
              </h3>
              
              {/* Training Types */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center mt-1">
                    <Check className="size-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Body Training</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center mt-1">
                    <Check className="size-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Cardio Training</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 size-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center mt-1">
                    <Check className="size-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Endurance Training</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </div>
            
            {/* Right - Image */}
            <div className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Person doing cardio training in gym"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Never Give Up Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-50 dark:bg-zinc-900 rounded-4xl px-8 py-4">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Motivational gym training session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                Never Give Up
                <br />
                Your Fitness Journey
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Stay motivated and committed to your fitness goals. Our supportive community and expert trainers will help you push through challenges and achieve lasting results.
              </p>
              
              {/* Statistics */}
              <div className="flex flex-wrap gap-8">
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">4.000</span>
                    <span className="text-primary text-xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">Weekly Workouts</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">5.000</span>
                    <span className="text-primary text-xl">+</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">Calories Burned</p>
                </div>
              </div>
              
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}