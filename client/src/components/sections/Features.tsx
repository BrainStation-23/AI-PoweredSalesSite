import { motion } from "framer-motion";
import { Bot, Code, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "AI-Powered Development",
    description: "Leverage cutting-edge AI to accelerate development and reduce costs",
    icon: Bot,
  },
  {
    title: "Full Code Ownership",
    description: "You own 100% of the code and intellectual property",
    icon: Code,
  },
  {
    title: "30-Day Delivery",
    description: "Get your MVP up and running in just 30 days",
    icon: Clock,
  },
  {
    title: "Enterprise-Grade Security",
    description: "Built with security and scalability in mind",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}