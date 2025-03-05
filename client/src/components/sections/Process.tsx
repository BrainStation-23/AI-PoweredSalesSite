import { motion } from "framer-motion";
import { Search, Code2, TestTube2, Rocket } from "lucide-react";

const steps = [
  {
    title: "1. Understand Your Needs",
    description: "Detailed discussion to understand your project goals and requirements",
    icon: Search,
  },
  {
    title: "2. Rapid Development",
    description: "AI-powered development to build core features quickly",
    icon: Code2,
  },
  {
    title: "3. Testing & Refinement",
    description: "Thorough testing and optimization of all features",
    icon: TestTube2,
  },
  {
    title: "4. Launch",
    description: "Deploy your MVP and start gathering user feedback",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our 4-Step Process</h2>
          <p className="text-muted-foreground">Build your software in 30 days with our proven process</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
