import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Users, Heart, Target, Clock, Trophy, Star, CheckCircle } from "lucide-react";
import Link from "next/link";

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
            whether you're a beginner or an elite athlete.
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

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of fitness services, each designed to meet your unique needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className={`relative h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  service.popular ? "ring-2 ring-primary" : ""
                }`}>
                  {service.popular && (
                    <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                      <Link href="/contact">
                        <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your fitness journey with our complementary wellness and support services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                <Star className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">{service}</p>
              </Card>
            ))}
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
  );
}