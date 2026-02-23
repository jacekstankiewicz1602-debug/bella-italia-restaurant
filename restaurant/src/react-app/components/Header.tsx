import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Instagram, Facebook } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Reservations", path: "/reservations" },
  { name: "Order Online", path: "/order" },
  { name: "Reviews", path: "/reviews" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex flex-col items-center">
            <span className="font-display text-2xl md:text-3xl text-gradient-gold tracking-wide">
              La Dolce Vita
            </span>
            <span className="font-elegant text-[10px] text-gold/60 tracking-[0.4em] uppercase">
              Mayfair
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-elegant text-sm tracking-[0.15em] uppercase transition-colors duration-300 group ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-ivory/80 hover:text-gold"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Reserve Button + Social */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/50 hover:text-gold transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/50 hover:text-gold transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <Link
              to="/reservations"
              className="px-6 py-2.5 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background font-elegant text-sm tracking-[0.15em] uppercase transition-all duration-500 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              Reserve Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-ivory p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/98 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <nav className="relative h-full flex flex-col items-center justify-center gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-display text-2xl tracking-wide transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-gold"
                  : "text-ivory/80 hover:text-gold"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                transform: isMobileMenuOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/reservations"
            className="mt-8 px-8 py-3 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background font-elegant text-sm tracking-[0.2em] uppercase"
            style={{
              transitionDelay: isMobileMenuOpen ? "350ms" : "0ms",
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
          >
            Reserve Now
          </Link>
        </nav>
      </div>
    </>
  );
}
