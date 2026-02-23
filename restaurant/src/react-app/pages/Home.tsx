import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        
        {/* Luxury Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/90" />
        
        {/* Subtle Marble Texture Overlay */}
        <div className="absolute inset-0 marble-texture opacity-30" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rotate-45 opacity-40" />
        <div className="absolute bottom-40 right-10 w-24 h-24 border border-gold/20 rotate-12 opacity-30" />
        
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          {/* Elegant Divider */}
          <div className={`flex items-center gap-4 mb-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="w-2 h-2 rotate-45 border border-gold" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          
          {/* Main Title */}
          <h1 className={`font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-ivory mb-4 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-gradient-gold">La Dolce Vita</span>
          </h1>
          
          {/* Tagline */}
          <p className={`font-elegant text-xl md:text-2xl lg:text-3xl text-ivory-muted tracking-[0.2em] uppercase mt-2 ${isLoaded ? 'animate-fade-in-up-delay-1' : 'opacity-0'}`}>
            Timeless Italian Elegance in Mayfair
          </p>
          
          {/* Subtitle */}
          <p className={`font-elegant text-lg text-ivory-muted/70 mt-6 max-w-xl italic ${isLoaded ? 'animate-fade-in-up-delay-2' : 'opacity-0'}`}>
            Where every dish tells a story of passion, tradition, and the finest ingredients
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 mt-12 ${isLoaded ? 'animate-fade-in-up-delay-3' : 'opacity-0'}`}>
            <Link
              to="/reservations"
              className="group relative px-10 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background font-display text-lg tracking-wider overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            >
              <span className="relative z-10">Reserve a Table</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-gold translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
            
            <Link
              to="/menu"
              className="group px-10 py-4 border border-gold/50 text-gold font-display text-lg tracking-wider transition-all duration-500 hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
            >
              View the Menu
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-float">
          <span className="font-elegant text-sm text-gold/60 tracking-widest uppercase mb-2">Discover</span>
          <ChevronDown className="w-6 h-6 text-gold/60" />
        </div>
      </section>

      {/* Featured Section Preview - Will be expanded in next task */}
      <section className="relative py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <div className="font-elegant text-gold/60 tracking-[0.3em] uppercase text-sm">Our Signature</div>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl text-ivory mb-6">
            Culinary <span className="text-gradient-gold italic">Masterpieces</span>
          </h2>
          
          <p className="font-elegant text-xl text-ivory-muted/70 max-w-2xl mx-auto leading-relaxed">
            Each creation is a testament to our commitment to excellence, crafted with the finest 
            ingredients sourced from the heart of Italy and prepared with generations of expertise.
          </p>
        </div>
      </section>
    </div>
  );
}
