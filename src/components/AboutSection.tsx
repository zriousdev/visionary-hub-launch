import { useEffect, useRef } from "react";
import visionImage from "@/assets/vision-image.jpg";
import goalImage from "@/assets/goal-image.jpg";

const AboutSection = () => {
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
              }, index * 200);
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

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-background">
      <div className="container-custom">
        {/* Vision Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-on-scroll">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src={visionImage}
                alt="Our Vision"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
          </div>
          
          <div className="space-y-6 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-accent">
              Our Vision <span className="text-primary">.</span>
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                "प्रत्येक सामान्य माणसाला मूलभूत मानवी सुविधा कमी किमतीत आणि उत्कृष्ट दर्जाची मिळाव्यात हे आमचे स्वप्न आहे." 
                (किराणा, कपडे, शिक्षण, मकान)
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "It is our dream that every common person should get basic human facilities at low cost and of excellent quality." 
                (Grocery, Clothes, Education, Housing)
              </p>
            </div>
          </div>
        </div>

        {/* Goal Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1 animate-on-scroll">
            <h2 className="text-3xl lg:text-4xl font-bold text-accent">
              Our Goal <span className="text-primary">.</span>
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                ध्येय:- प्रत्येक उत्पादन किरकोळ प्रमाणात आमच्या ग्राहकांना घाऊक किंमतीत पुरवणे.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Goal:- To supply each product in retail quantities to our customers at wholesale prices.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src={goalImage}
                alt="Our Goal"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;