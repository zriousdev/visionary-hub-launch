import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscription Successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section id="subscribe" ref={sectionRef} className="section-padding bg-gradient-primary">
      <div className="container-custom text-center text-primary-foreground">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Subscribe to our newsletter <span className="text-primary-glow">.</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Get updates on our latest offers, new products, and initiatives to help our community.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-primary-foreground text-foreground border-0 focus:ring-2 focus:ring-primary-glow"
            />
            <Button 
              type="submit" 
              variant="secondary"
              size="lg"
              className="whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;