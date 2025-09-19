import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const DownloadSection = () => {
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
    <section id="download" ref={sectionRef} className="section-padding bg-accent-light/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left animate-on-scroll">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-3xl mb-6">
              <Smartphone className="h-10 w-10 text-primary-foreground" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-accent">
              Download the Choudhary Hub LLP App <span className="text-primary">.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get all our services and products at wholesale prices right from your phone. 
              Download our application from the Google Play Store and start saving today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                className="group"
                onClick={() => {
                  // This would normally open the Play Store
                  window.open("#", "_blank");
                }}
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get it on Google Play
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* App Mockup */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-elegant max-w-md mx-auto">
                <img
                  src={appMockup}
                  alt="Choudhary Hub LLP Mobile App"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;