import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground mb-6">
            Transform Your Idea into{" "}
            <span className="text-primary">Software in 30 Days</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Empower your Enterprise Operations Teams to slash costs, boost efficiency, and automate workflows with expertly crafted AI solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://calendly.com/shahadat-bs23/30min" target="_blank" rel="noopener noreferrer">
                <Rocket className="mr-2 h-5 w-5" />
                Schedule a Meeting
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#pricing">
                <Zap className="mr-2 h-5 w-5" />
                See Our Plans
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}