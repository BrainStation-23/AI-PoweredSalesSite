import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setHidden(latest > previous && latest > 150);
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.2 }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-xl font-bold text-foreground">
            RapidMVP
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
              Process
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </div>
        </div>
        <Button asChild>
          <a href="https://cal.com/harrymckayroper/mvp">Book Free Demo</a>
        </Button>
      </nav>
    </motion.header>
  );
}
