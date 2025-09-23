import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-accent rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 15, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Mobile-first hero design */}
        <motion.div 
          className="lg:hidden space-y-6 text-center pt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Location info for mobile */}
          <motion.div 
            className="flex items-center justify-center space-x-2 text-sm text-muted-foreground bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 w-fit mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <MapPin className="h-4 w-4 text-primary" />
            <span>Shop No 1, Unity Market, Nashik</span>
          </motion.div>

          {/* Search bar for mobile */}
          <motion.div 
            className="relative max-w-md mx-auto"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search for products..." 
              className="pl-10 bg-background/90 backdrop-blur-sm"
            />
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              Why wait in line?<br />
              Your grocery list is just a{" "}
              <motion.span 
                className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                tap away!
              </motion.span>
            </h1>
          </motion.div>
          
          {/* Top Categories for mobile */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-left">Top Categories</h3>
            <div className="grid grid-cols-4 gap-3">
              {[
                { emoji: "🥬", name: "Vegetables" },
                { emoji: "🍎", name: "Fruits" },
                { emoji: "🧴", name: "Daily Care" },
                { emoji: "🌶️", name: "Spices" }
              ].map((category, index) => (
                <motion.div 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-card/70 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-2xl mb-1">{category.emoji}</div>
                  <span className="text-xs font-medium">{category.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

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
          
          <motion.div 
            className="flex flex-col gap-3 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 w-full"
                onClick={() => scrollToSection('download')}
              >
                Download Our App
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 w-full"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Desktop layout */}
        <motion.div 
          className="hidden lg:grid grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Content */}
          <motion.div 
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                उत्कृष्ट दर्जा,{" "}
                <br />
                <motion.span 
                  className="text-primary"
                  animate={{ 
                    textShadow: ["0 0 0px rgba(234, 88, 12, 0.5)", "0 0 20px rgba(234, 88, 12, 0.8)", "0 0 0px rgba(234, 88, 12, 0.5)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  घाऊक किंमत.
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <span className="font-semibold text-foreground">
                  प्रत्येक सामान्य माणसाला मूलभूत मानवी सुविधा कमी किमतीत आणि उत्कृष्ट दर्जाची मिळाव्यात हे आमचे स्वप्न आहे.
                </span>
                <br />
                (किराणा, कपडे, शिक्षण, मकान)
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => scrollToSection("download")}
                  className="group"
                >
                  Download Our App
                  <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => scrollToSection("about")}
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden shadow-elegant"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={heroImage}
                alt="Quality goods at wholesale prices"
                className="w-full h-auto object-cover"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
          </motion.div>
        </motion.div>
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