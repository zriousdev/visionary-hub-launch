import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-scale-in');
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

  const testimonials = [
    {
      name: "R. Sharma",
      location: "Nashik",
      message: "Amazing quality products at prices I couldn't find anywhere else. Highly recommended for daily needs.",
      rating: 5,
    },
    {
      name: "S. Patel",
      location: "Nashik", 
      message: "The convenience of getting everything from groceries to clothes at wholesale rates is a game-changer for my family.",
      rating: 5,
    },
    {
      name: "A. Khan",
      location: "Nashik",
      message: "A truly noble mission to help the common person. The quality and prices are both excellent. Keep up the great work!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-accent-light/5">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-4">
            What our customers say <span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-on-scroll bg-background rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Message */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.message}"
              </p>

              {/* Customer info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-accent">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;