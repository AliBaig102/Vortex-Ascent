import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart, Award, Clock, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";

const stats = [
  { number: "5000+", label: "Active Members" },
  { number: "50+", label: "Expert Trainers" },
  { number: "10+", label: "Years Experience" },
  { number: "24/7", label: "Gym Access" },
];

const values = [
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "We help you set realistic goals and provide the roadmap to achieve them through personalized training programs."
  },
  {
    icon: Heart,
    title: "Community First",
    description: "Building a supportive community where everyone feels welcome, motivated, and inspired to reach their potential."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality equipment, training, and service to ensure your success."
  },
  {
    icon: Users,
    title: "Inclusive Environment",
    description: "Creating a space where people of all fitness levels can train comfortably and confidently."
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                About Vortex Ascent
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Elevating Fitness to New Heights
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Founded with a vision to transform lives through fitness, Vortex Ascent has been the premier destination for fitness enthusiasts, athletes, and anyone looking to improve their health and wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Explore Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Visit Our Gym
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <Image
                  src="/images/image-02.jpg"
                  alt="Modern gym interior"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower individuals to achieve their fitness goals through innovative training methods, 
                  state-of-the-art equipment, and a supportive community that celebrates every milestone 
                  on the journey to better health.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-3xl mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading fitness destination that transforms lives, builds confidence, 
                  and creates a healthier community where fitness is accessible, enjoyable, 
                  and sustainable for everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape the experience we create for our members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="p-0 mb-4">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      {/* Facility Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">State-of-the-Art Facility</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our 15,000 square foot facility features the latest equipment, spacious workout areas, 
                and amenities designed to enhance your fitness experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>123 Fitness Street, Health City, HC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Open 24/7 for Members</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@vortexascent.com</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/images/image-07.jpg"
                  alt="Gym equipment and facility"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
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
                Ready to Join Our Community?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Experience the difference that expert guidance and a supportive community can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" variant="secondary">
                    Become a Member
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Schedule a Tour
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