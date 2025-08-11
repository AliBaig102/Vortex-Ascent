import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/custom/header";
import { HeroSection } from "@/components/custom/hero-section";
import { CompanyLogos } from "@/components/custom/company-logos";
import { FitnessCategories } from "@/components/custom/fitness-categories";
import { TrainingSteps } from "@/components/custom/training-steps";
import { PricingPlans } from "@/components/custom/pricing-plans";
import { NeverGiveUp } from "@/components/custom/never-give-up";
import { Footer } from "@/components/custom/footer";
import { Dumbbell, Heart, Zap, Mail, User, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CompanyLogos />
      <FitnessCategories />
      <TrainingSteps />
      <PricingPlans />
      <NeverGiveUp />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
