import { Clock, Dumbbell, TrendingUp, Bell, BarChart3, ClipboardList, Heart, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FitnessCategories() {
  const categories = [
    {
      icon: ClipboardList,
      title: "Workout Tracking",
      description: "Record and monitor your exercises, sets, reps, and weights to track your progress and maintain accountability"
    },
    {
      icon: Users,
      title: "Group Cardio",
      description: "Join high-energy group cardio sessions including HIIT, spinning, and aerobic exercises to boost your endurance"
    },
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle and increase strength through progressive resistance training with free weights and machines"
    },
    {
      icon: Clock,
      title: "Interval Training",
      description: "Maximize fat burn and improve conditioning with timed workout intervals alternating between high and low intensity"
    },
    {
      icon: Bell,
      title: "Workout Reminders",
      description: "Stay consistent with customizable notifications for your scheduled workouts and fitness goals"
    },
    {
      icon: TrendingUp,
      title: "Progress Analytics",
      description: "Visualize your fitness journey with detailed charts and metrics tracking improvements in strength and endurance"
    },
    {
      icon: ClipboardList,
      title: "Custom Programs",
      description: "Access personalized workout plans tailored to your goals, whether building muscle, losing weight, or improving fitness"
    },
    {
      icon: Heart,
      title: "Heart Rate Training",
      description: "Monitor your cardiovascular health and optimize workouts by training in targeted heart rate zones"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-zinc-50 dark:bg-zinc-900 m-4 rounded-4xl">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Fitness Category Training
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-zinc-100 dark:bg-zinc-700 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-zinc-600 dark:text-zinc-400 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed text-center">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}