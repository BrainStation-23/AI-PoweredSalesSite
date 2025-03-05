import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    monthlyPrice: "$10,000",
    yearlyPrice: "$8,000",
    description: "Complete MVP in 4 weeks",
    features: [
      "4 Strategic Planning Sessions",
      "2-3 Core Features Implementation",
      "AI Integration Setup",
      "Stripe Payment Integration",
      "Email Integration",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: "$20,000",
    yearlyPrice: "$16,000",
    description: "Custom enterprise solution",
    features: [
      "Custom Internal Tool Development",
      "Process Automation Systems",
      "Data Pipeline Integration",
      "Admin Dashboard Creation",
      "Role-Based Access Control",
      "API Integration Framework",
    ],
  },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Transparent Pricing</h2>
          <p className="text-muted-foreground">Choose the plan that fits your needs</p>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant={billingPeriod === "monthly" ? "default" : "outline"}
              onClick={() => setBillingPeriod("monthly")}
            >
              Monthly
            </Button>
            <Button
              variant={billingPeriod === "yearly" ? "default" : "outline"}
              onClick={() => setBillingPeriod("yearly")}
            >
              Yearly
              <span className="ml-2 text-xs bg-primary/20 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="relative flex flex-col border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-foreground">
                    {billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    <span className="text-lg text-muted-foreground">/mo</span>
                  </div>
                  {billingPeriod === "yearly" && (
                    <p className="text-sm text-primary mt-2">
                      Save {parseInt(plan.monthlyPrice.slice(1)) * 0.2 * 12}$ per year
                    </p>
                  )}
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  size="lg" 
                  className="w-full mt-auto"
                  asChild
                >
                  <a href="https://cal.com/harrymckayroper/mvp">Schedule a Meeting</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}