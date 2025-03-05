import { motion } from "framer-motion";
import { Search, Code2, TestTube2, Rocket, Clock, Bot } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const comparisonSteps = [
  {
    title: "Requirements Gathering",
    traditional: {
      duration: "2-4 weeks",
      description: "Multiple meetings, extensive documentation",
      icon: Search,
    },
    aiPowered: {
      duration: "2-3 days",
      description: "AI-assisted requirement analysis",
      icon: Bot,
    },
  },
  {
    title: "Development",
    traditional: {
      duration: "3-6 months",
      description: "Manual coding, frequent iterations",
      icon: Code2,
    },
    aiPowered: {
      duration: "2 weeks",
      description: "AI-accelerated development with ready components",
      icon: Bot,
    },
  },
  {
    title: "Testing & QA",
    traditional: {
      duration: "4-8 weeks",
      description: "Manual testing, bug fixes",
      icon: TestTube2,
    },
    aiPowered: {
      duration: "1 week",
      description: "Automated testing with AI validation",
      icon: Bot,
    },
  },
  {
    title: "Deployment",
    traditional: {
      duration: "1-2 weeks",
      description: "Complex deployment process",
      icon: Rocket,
    },
    aiPowered: {
      duration: "1-2 days",
      description: "Automated deployment with CI/CD",
      icon: Bot,
    },
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Traditional vs AI-Powered Development
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our AI-powered approach dramatically reduces development time while maintaining quality
          </p>
        </motion.div>

        <div className="space-y-8">
          {comparisonSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center text-foreground">
                {step.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-destructive/20 bg-destructive/5 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-foreground">Traditional Approach</CardTitle>
                      <Clock className="h-5 w-5 text-destructive" />
                    </div>
                    <p className="text-destructive font-semibold">{step.traditional.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <step.traditional.icon className="h-5 w-5 text-destructive mt-1" />
                      <p className="text-muted-foreground">{step.traditional.description}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-primary/5 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-foreground">AI-Powered Approach</CardTitle>
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-primary font-semibold">{step.aiPowered.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <step.aiPowered.icon className="h-5 w-5 text-primary mt-1" />
                      <p className="text-muted-foreground">{step.aiPowered.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-2xl font-bold text-primary">
            Total Time: 30 Days vs 6+ Months
          </p>
          <Button size="lg" className="mt-8" asChild>
            <a href="https://cal.com/harrymckayroper/mvp">Start Your AI-Powered Development</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}