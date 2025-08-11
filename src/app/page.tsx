import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/custom/header";
import { HeroSection } from "@/components/custom/hero-section";
import { Dumbbell, Heart, Zap, Mail, User, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div className="max-w-6xl mx-auto p-8">

        {/* Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5" />
                Strength Training
              </CardTitle>
              <CardDescription>
                Build muscle and increase your strength with our comprehensive programs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <Zap className="mr-2 h-4 w-4" />
                Start Training
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Cardio Workouts
              </CardTitle>
              <CardDescription>
                Improve your cardiovascular health with our varied cardio routines.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                View Workouts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Yoga & Flexibility
              </CardTitle>
              <CardDescription>
                Enhance your flexibility and find inner peace with our yoga classes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full">
                Join Class
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Demo */}
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Get Started Today</CardTitle>
            <CardDescription>
              Sign up for a free trial and begin your fitness journey.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Full Name
              </Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <Button className="w-full">
              <Zap className="mr-2 h-4 w-4" />
              Start Free Trial
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 text-zinc-600 dark:text-zinc-400">
          <p>Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui</p>
        </div>
      </div>
    </div>
  );
}
