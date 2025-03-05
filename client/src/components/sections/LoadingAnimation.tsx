import { motion } from "framer-motion";
import { Code2, Bot, Zap } from "lucide-react";

const progressSteps = [
  "Requirements Analysis",
  "Core Development",
  "Testing Phase",
  "Deployment",
];

export default function LoadingAnimation() {
  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Experience the Speed of AI Development
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch how AI accelerates the development process
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Traditional Development Animation */}
          <div className="relative">
            <div className="flex items-center justify-center mb-4 gap-2">
              <Code2 className="h-6 w-6 text-destructive" />
              <h3 className="text-xl font-semibold text-foreground">Traditional</h3>
            </div>
            <div className="space-y-6">
              {progressSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 4, delay: index * 4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-muted-foreground">{step}</span>
                    <span className="ml-auto text-sm text-destructive">
                      {index === 0 ? "2-4 weeks" : index === 1 ? "3-6 months" : index === 2 ? "4-8 weeks" : "1-2 weeks"}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-destructive"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 4, delay: index * 4 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI-Powered Development Animation */}
          <div className="relative">
            <div className="flex items-center justify-center mb-4 gap-2">
              <Bot className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">AI-Powered</h3>
            </div>
            <div className="space-y-6">
              {progressSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-muted-foreground">{step}</span>
                    <span className="ml-auto text-sm text-primary">
                      {index === 0 ? "2-3 days" : index === 1 ? "2 weeks" : index === 2 ? "1 week" : "1-2 days"}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <motion.div
                    className="absolute right-0 -top-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.3, delay: index * 1 + 1 }}
                  >
                    <Zap className="h-4 w-4 text-primary" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 6 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl font-bold text-primary">
            30 Days vs 6+ Months
          </p>
          <p className="text-muted-foreground mt-2">
            Experience the power of AI-accelerated development
          </p>
        </motion.div>
      </div>
    </section>
  );
}
