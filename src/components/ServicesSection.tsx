import { useEffect, useRef } from "react";
import { ShoppingCart, Users, BookOpen, Home } from "lucide-react";

const ServicesSection = () => {
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
              }, index * 100);
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

  const services = [
    {
      icon: ShoppingCart,
      title: "किराणा (Groceries)",
      description: "Daily essentials and quality groceries, delivered to you at wholesale prices.",
    },
    {
      icon: Users,
      title: "कपडे (Clothes)",
      description: "Affordable and quality clothing for the entire family, without the retail markup.",
    },
    {
      icon: BookOpen,
      title: "शिक्षण (Education)",
      description: "Supporting access to quality educational resources and materials affordably.",
    },
    {
      icon: Home,
      title: "मकान (Housing)",
      description: "Assisting in making basic and comfortable housing more accessible to everyone.",
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-4">
            Our Services <span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-on-scroll group text-center p-8 rounded-2xl bg-card hover:bg-accent-light/10 transition-all duration-300 hover:shadow-soft"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-primary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-accent mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;