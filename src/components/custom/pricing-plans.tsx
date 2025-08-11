import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export function PricingPlans() {
  const plans = [
    {
      name: "Basic",
      price: "$29.99",
      description: "Perfect for beginners starting their fitness journey with essential gym access and basic features.",
      features: [
        { text: "Access to gym equipment during off-peak hours", included: true },
        { text: "Basic fitness assessment", included: true },
        { text: "2 group classes per month", included: false },
        { text: "Personal training sessions", included: false },
        { text: "Nutrition consultation", included: false },
        { text: "Access to premium facilities", included: false }
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: "$59.99",
      description: "Ideal for dedicated fitness enthusiasts who want more features and flexibility in their workout routine.",
      features: [
        { text: "24/7 gym access", included: true },
        { text: "Comprehensive fitness assessment", included: true },
        { text: "Unlimited group classes", included: true },
        { text: "1 personal training session per month", included: true },
        { text: "Basic nutrition consultation", included: false },
        { text: "Access to premium facilities", included: false }
      ],
      highlighted: true
    },
    {
      name: "Elite",
      price: "$99.99",
      description: "The ultimate fitness experience with exclusive benefits and personalized attention for optimal results.",
      features: [
        { text: "24/7 gym access with priority booking", included: true },
        { text: "Monthly fitness assessments", included: true },
        { text: "Unlimited group classes with priority booking", included: true },
        { text: "4 personal training sessions per month", included: true },
        { text: "Monthly nutrition consultation", included: true },
        { text: "Full access to premium facilities", included: true }
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-zinc-100 dark:bg-zinc-800 mx-4 rounded-4xl">
      {/* Section Header */}
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            Choose Your Plans
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-white dark:bg-zinc-900 border-2 transition-all duration-300 hover:shadow-lg ${
                plan.highlighted 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-zinc-200 dark:border-zinc-700'
              }`}
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
                    {plan.price}
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-400 ml-2">/month</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        feature.included 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-zinc-200 dark:bg-zinc-700'
                      }`}>
                        {feature.included ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <X className="w-3 h-3 text-zinc-400" />
                        )}
                      </div>
                      <span className={`text-sm ${
                        feature.included 
                          ? 'text-zinc-900 dark:text-zinc-100' 
                          : 'text-zinc-400 dark:text-zinc-500'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900'
                  }`}
                >
                  Get Started
                  <span className="ml-2">→</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}