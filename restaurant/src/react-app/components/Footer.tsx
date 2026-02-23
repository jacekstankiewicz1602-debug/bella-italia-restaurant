import { Link } from "react-router";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gold/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl text-gradient-gold">
                La Dolce Vita
              </span>
              <p className="font-elegant text-xs text-gold/60 tracking-[0.4em] uppercase mt-1">
                Mayfair • London
              </p>
            </Link>
            <p className="font-elegant text-ivory-muted/70 leading-relaxed mb-6">
              Experience the pinnacle of Italian fine dining, where tradition meets 
              contemporary elegance in the heart of Mayfair.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-ivory mb-6">
              <span className="text-gold">—</span> Explore
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Our Menu", path: "/menu" },
                { name: "Reservations", path: "/reservations" },
                { name: "Order Online", path: "/order" },
                { name: "Private Dining", path: "/about" },
                { name: "Gift Vouchers", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-elegant text-ivory-muted/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-ivory mb-6">
              <span className="text-gold">—</span> Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span className="font-elegant text-ivory-muted/70">
                  42 Berkeley Square<br />
                  Mayfair, London W1J 5AW
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+442071234567"
                  className="font-elegant text-ivory-muted/70 hover:text-gold transition-colors duration-300"
                >
                  +44 (0)20 7123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:reservations@ladolcevita.co.uk"
                  className="font-elegant text-ivory-muted/70 hover:text-gold transition-colors duration-300"
                >
                  reservations@ladolcevita.co.uk
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-display text-lg text-ivory mb-6">
              <span className="text-gold">—</span> Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <div className="font-elegant text-ivory-muted/70">
                  <p className="text-ivory mb-1">Lunch</p>
                  <p>Tue – Sun: 12:00 – 14:30</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-1 flex-shrink-0 opacity-0" />
                <div className="font-elegant text-ivory-muted/70">
                  <p className="text-ivory mb-1">Dinner</p>
                  <p>Tue – Thu: 18:00 – 22:00</p>
                  <p>Fri – Sat: 18:00 – 23:00</p>
                  <p>Sun: 18:00 – 21:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-1 flex-shrink-0 opacity-0" />
                <div className="font-elegant text-ivory-muted/70">
                  <p className="text-gold/80 italic">Closed Mondays</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-elegant text-sm text-ivory-muted/50">
            © {new Date().getFullYear()} La Dolce Vita. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="font-elegant text-sm text-ivory-muted/50 hover:text-gold transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-elegant text-sm text-ivory-muted/50 hover:text-gold transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
