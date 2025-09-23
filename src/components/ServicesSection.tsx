import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingCart, Users, BookOpen, Home } from "lucide-react";

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-4">
            Our Services <span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group text-center p-8 rounded-2xl bg-card hover:bg-accent-light/10 transition-all duration-300 hover:shadow-soft"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                y: -10
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-primary rounded-2xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-accent mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;