import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Users, Heart, Target, Clock, Trophy, Star, CheckCircle, Play, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";

const services = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    description: "One-on-one sessions with certified trainers tailored to your fitness goals.",
    features: ["Customized workout plans", "Nutrition guidance", "Progress tracking", "Flexible scheduling"],
    price: "From $80/session",
    popular: false,
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "High-energy group workouts that motivate and challenge you alongside others.",
    features: ["HIIT classes", "Yoga sessions", "Strength training", "Cardio workouts"],
    price: "From $25/class",
    popular: true,
  },
  {
    icon: Heart,
    title: "Wellness Programs",
    description: "Comprehensive health and wellness programs for mind and body balance.",
    features: ["Stress management", "Sleep optimization", "Mental health support", "Lifestyle coaching"],
    price: "From $150/month",
    popular: false,
  },
  {
    icon: Target,
    title: "Athletic Performance",
    description: "Specialized training for athletes looking to enhance their performance.",
    features: ["Sport-specific training", "Injury prevention", "Recovery protocols", "Performance analytics"],
    price: "From $120/session",
    popular: false,
  },
  {
    icon: Clock,
    title: "24/7 Gym Access",
    description: "Round-the-clock access to our fully equipped fitness facility.",
    features: ["State-of-the-art equipment", "Cardio machines", "Free weights", "Functional training area"],
    price: "From $49/month",
    popular: true,
  },
  {
    icon: Trophy,
    title: "Competition Prep",
    description: "Intensive preparation programs for bodybuilding and fitness competitions.",
    features: ["Contest preparation", "Posing coaching", "Peak week protocols", "Stage presence training"],
    price: "From $200/month",
    popular: false,
  },
];

const additionalServices = [
  "Nutritional counseling",
  "Body composition analysis",
  "Massage therapy",
  "Physical therapy",
  "Supplement consultation",
  "Meal planning",
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Transform Your Fitness Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of fitness services designed to help you achieve your goals,
            whether you&apos;re a beginner or an elite athlete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your Journey
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Content Left - Image Right Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Professional Training
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expert-Led Fitness Programs
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our certified trainers bring years of experience and expertise to help you achieve your fitness goals.
                From beginner-friendly routines to advanced athletic training, we provide personalized guidance every step of the way.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Certified personal trainers with 10+ years experience
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Customized workout plans for all fitness levels
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Progress tracking and regular assessments
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Nutrition guidance and meal planning
                </li>
              </ul>
              <Link href="/contact">
                <Button size="lg" className="group">
                  Start Training Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <Image
                  src="/images/image-03.jpeg"
                  alt="Professional trainer working with client"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Left - Content Right Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20">
                <Image
                  src="/images/image-04.jpeg"
                  alt="Modern gym equipment and facilities"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="mb-4">
                State-of-the-Art Facility
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Premium Equipment & Amenities
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Train with confidence using our cutting-edge equipment and world-class facilities.
                Our 15,000 square foot space is designed to provide the ultimate fitness experience with modern amenities and a comfortable environment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Latest cardio and strength training equipment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Spacious group fitness studios
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  Locker rooms with premium amenities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3" />
                  24/7 access for members
                </li>
              </ul>
              <Link href="/about">
                <Button size="lg" variant="outline" className="group">
                  Tour Our Facility
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Transformation?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of members who have already transformed their lives with Vortex Ascent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" variant="secondary">
                    Join Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}