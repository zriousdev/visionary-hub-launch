import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin, Search } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { Input } from "@/components/ui/input";

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
        {/* Mobile-first hero design */}
        <div className="lg:hidden space-y-6 text-center pt-16">
          {/* Location info for mobile */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 w-fit mx-auto">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Shop No 1, Unity Market, Nashik</span>
          </div>

          {/* Search bar for mobile */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search for products..." 
              className="pl-10 bg-background/90 backdrop-blur-sm"
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              Why wait in line?<br />
              Your grocery list is just a{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                tap away!
              </span>
            </h1>
          </div>
          
          {/* Top Categories for mobile */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-left">Top Categories</h3>
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-card/70 transition-colors">
                <div className="text-2xl mb-1">🥬</div>
                <span className="text-xs font-medium">Vegetables</span>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-card/70 transition-colors">
                <div className="text-2xl mb-1">🍎</div>
                <span className="text-xs font-medium">Fruits</span>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-card/70 transition-colors">
                <div className="text-2xl mb-1">🧴</div>
                <span className="text-xs font-medium">Daily Care</span>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-card/70 transition-colors">
                <div className="text-2xl mb-1">🌶️</div>
                <span className="text-xs font-medium">Spices</span>
              </div>
            </div>
          </div>

          {/* Products For You section for mobile */}
          <div className="space-y-4 text-left">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Products For You</h3>
              <Button variant="ghost" size="sm" className="text-primary">
                View all →
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Product 1 */}
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-3">
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-3xl">🛒</span>
                </div>
                <h4 className="font-medium text-sm mb-1">Grocery</h4>
                <p className="text-xs text-muted-foreground mb-2">Fresh daily essentials</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs line-through text-muted-foreground">₹500.00</span>
                    <span className="text-sm font-bold text-primary ml-1">₹400.00</span>
                  </div>
                  <Button size="sm" className="text-xs px-3 py-1">ADD</Button>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-3">
                <div className="aspect-square bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-3xl">🌰</span>
                </div>
                <h4 className="font-medium text-sm mb-1">Cashew Nuts</h4>
                <p className="text-xs text-muted-foreground mb-2">Premium quality nuts</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs line-through text-muted-foreground">₹350.00</span>
                    <span className="text-sm font-bold text-primary ml-1">₹280.00</span>
                  </div>
                  <Button size="sm" className="text-xs px-3 py-1">ADD</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Offer banner for mobile */}
          <div className="bg-gradient-to-r from-primary to-primary-glow rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-lg">20% OFF</h4>
                <p className="text-sm opacity-90">On your first order</p>
              </div>
              <div className="text-3xl">🎯</div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 w-full"
              onClick={() => scrollToSection('download')}
            >
              Download Our App
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 w-full"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
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