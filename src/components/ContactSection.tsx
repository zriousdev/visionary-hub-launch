import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, ArrowUp } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
              }, index * 150);
            });
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "HOME", id: "home" },
    { label: "ABOUT US", id: "about" },
    { label: "SERVICES", id: "services" },
    { label: "APP", id: "download" },
    { label: "CONTACT", id: "contact" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Shop No 1, Unity Market, Makhmalabad Naka, Nashik, Maharashtra, 422003, India",
    },
    {
      icon: Mail,
      label: "Email",
      value: "choudharyhubllp@gmail.com",
      href: "mailto:choudharyhubllp@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9175260069",
      href: "tel:+919175260069",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-accent text-accent-foreground relative">
      <div className="container-custom">
        {/* Contact Info */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            Contact Us <span className="text-primary">.</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <div key={index} className="space-y-4 animate-on-scroll">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl">
                  <info.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{info.label}</h3>
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="text-accent-foreground/80 hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-accent-foreground/80">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-on-scroll">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-accent-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-accent-foreground/20 animate-on-scroll">
          <p className="text-accent-foreground/60">
            Copyright &copy; 2025 Choudhary Hub LLP. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        variant="default"
        size="icon"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 shadow-elegant hover:shadow-xl transition-all duration-300"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </section>
  );
};

export default ContactSection;