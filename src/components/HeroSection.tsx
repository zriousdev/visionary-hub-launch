import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent-light/5 to-primary/5 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent leading-tight">
                उत्कृष्ट दर्जा,{" "}
                <br />
                <span className="text-primary">घाऊक किंमत.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span className="font-semibold text-foreground">
                  प्रत्येक सामान्य माणसाला मूलभूत मानवी सुविधा कमी किमतीत आणि उत्कृष्ट दर्जाची मिळाव्यात हे आमचे स्वप्न आहे.
                </span>
                <br />
                (किराणा, कपडे, शिक्षण, मकान)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection("download")}
                className="group"
              >
                Download Our App
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => scrollToSection("about")}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Quality goods at wholesale prices"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("about")}
          className="rounded-full"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>

      {/* Shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 fill-background"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;