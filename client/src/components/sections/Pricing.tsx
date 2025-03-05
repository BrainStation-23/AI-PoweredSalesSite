import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Sprint Package",
    price: "$10,000",
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
    name: "Enterprise",
    price: "$20,000",
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
  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-muted-foreground">Choose the plan that fits your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold mt-4">{plan.price}</div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-8">Book Free Demo</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
