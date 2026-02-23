import { useState } from "react";
import PageHero from "@/react-app/components/PageHero";
import { MapPin, Phone, Mail, Clock, Send, Check, Instagram, Facebook } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    preferredDate: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Contact Us"
        subtitle="We would be delighted to hear from you"
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
      />

      {/* Contact Info Cards */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-gold/10 p-6 text-center hover:border-gold/30 transition-all duration-500 group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-all duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-display text-ivory mb-2">Address</h4>
              <p className="font-elegant text-sm text-ivory-muted/60">
                42 Berkeley Square<br />
                Mayfair, London W1J 5AW
              </p>
            </div>

            <div className="bg-card border border-gold/10 p-6 text-center hover:border-gold/30 transition-all duration-500 group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-display text-ivory mb-2">Telephone</h4>
              <a
                href="tel:+442071234567"
                className="font-elegant text-sm text-ivory-muted/60 hover:text-gold transition-colors"
              >
                +44 (0)20 7123 4567
              </a>
            </div>

            <div className="bg-card border border-gold/10 p-6 text-center hover:border-gold/30 transition-all duration-500 group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-display text-ivory mb-2">Email</h4>
              <a
                href="mailto:reservations@ladolcevita.co.uk"
                className="font-elegant text-sm text-ivory-muted/60 hover:text-gold transition-colors"
              >
                reservations@ladolcevita.co.uk
              </a>
            </div>

            <div className="bg-card border border-gold/10 p-6 text-center hover:border-gold/30 transition-all duration-500 group">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-all duration-300">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-display text-ivory mb-2">Hours</h4>
              <p className="font-elegant text-sm text-ivory-muted/60">
                Tue - Sun: 12pm - 11pm<br />
                Closed Mondays
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] w-full bg-card border border-gold/20 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5424742849877!2d-0.14684432342669073!3d51.509815171811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052ed0457b45%3A0xfe3c8fe7af74bb3!2sBerkeley%20Square%2C%20London%20W1J%206BS%2C%20UK!5e0!3m2!1sen!2sus!4v1703180000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(85%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="La Dolce Vita Location"
                />
              </div>
              
              {/* Additional Info */}
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-card border border-gold/10 p-6">
                  <h4 className="font-display text-ivory mb-3">Getting Here</h4>
                  <div className="space-y-2 font-elegant text-sm text-ivory-muted/60">
                    <p><span className="text-gold">Tube:</span> Green Park (Jubilee, Victoria, Piccadilly)</p>
                    <p><span className="text-gold">Bus:</span> Routes 9, 14, 19, 22, 38</p>
                    <p><span className="text-gold">Parking:</span> Berkeley Square Car Park</p>
                  </div>
                </div>
                <div className="bg-card border border-gold/10 p-6">
                  <h4 className="font-display text-ivory mb-3">Follow Us</h4>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="font-elegant text-sm text-ivory-muted/50 mt-3">
                    @ladolcevitamayfair
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gold/50" />
                <span className="font-elegant text-gold/60 tracking-[0.3em] uppercase text-sm">
                  Get in Touch
                </span>
              </div>
              <h2 className="font-display text-3xl text-ivory mb-6">
                Send Us a <span className="text-gradient-gold italic">Message</span>
              </h2>
              <p className="font-elegant text-ivory-muted/70 mb-8">
                Whether you have a question about our menu, wish to enquire about private 
                dining, or simply want to share your thoughts, we would love to hear from you.
              </p>

              {isSubmitted ? (
                <div className="bg-card border border-gold/20 p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-gold flex items-center justify-center">
                    <Check className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl text-ivory mb-4">Message Sent</h3>
                  <p className="font-elegant text-ivory-muted/70">
                    Thank you for reaching out. A member of our team will respond 
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-card border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-card border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-card border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                        Preferred Date (if applicable)
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-card border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-card border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Please select...</option>
                      <option value="reservation">Reservation Enquiry</option>
                      <option value="private-dining">Private Dining</option>
                      <option value="events">Events & Celebrations</option>
                      <option value="feedback">Feedback</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we assist you?"
                      className="w-full bg-card border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background font-display tracking-wider transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours Detail */}
      <section className="py-24 px-6 bg-midnight-light/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
              <span className="font-elegant text-gold/60 tracking-[0.3em] uppercase text-sm">
                Opening Hours
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h2 className="font-display text-3xl text-ivory">
              When to <span className="text-gradient-gold italic">Visit</span>
            </h2>
          </div>

          <div className="bg-card border border-gold/20 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-display text-xl text-gold mb-6">Lunch</h4>
                <div className="space-y-3">
                  {["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <div key={day} className="flex justify-between font-elegant text-ivory-muted/70">
                      <span>{day}</span>
                      <span>12:00 – 14:30</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-display text-xl text-gold mb-6">Dinner</h4>
                <div className="space-y-3">
                  <div className="flex justify-between font-elegant text-ivory-muted/70">
                    <span>Tuesday – Thursday</span>
                    <span>18:00 – 22:00</span>
                  </div>
                  <div className="flex justify-between font-elegant text-ivory-muted/70">
                    <span>Friday – Saturday</span>
                    <span>18:00 – 23:00</span>
                  </div>
                  <div className="flex justify-between font-elegant text-ivory-muted/70">
                    <span>Sunday</span>
                    <span>18:00 – 21:00</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gold/10">
                  <p className="font-elegant text-ivory-muted/50 italic">
                    Closed on Mondays
                  </p>
                  <p className="font-elegant text-sm text-ivory-muted/40 mt-2">
                    Last orders 30 minutes before closing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
