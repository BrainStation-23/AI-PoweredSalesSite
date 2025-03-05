import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes your MVP service different?",
    answer: "Unlike traditional agencies, we specialize in rapid MVP development with a 30-day delivery guarantee. Our process is streamlined for startups and innovators who need to validate their ideas quickly without compromising on quality.",
  },
  {
    question: "What's included in the MVP package?",
    answer: "Your MVP includes core feature development, modern UI/UX design, deployment to a production environment, basic analytics integration, and a handover session with our team. We also provide documentation and 2 weeks of post-launch support.",
  },
  {
    question: "Do I own the code?",
    answer: "Yes, you receive 100% ownership of all code and assets we create for your project. We use industry-standard technologies and provide clean, documented code that can be easily maintained or extended by any developer.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, scalable technologies like React, Next.js, Node.js, and PostgreSQL. Our stack is chosen for reliability and future scalability, ensuring your MVP can grow with your business needs.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}