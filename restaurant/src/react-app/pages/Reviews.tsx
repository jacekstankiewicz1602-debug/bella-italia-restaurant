import { useState } from "react";
import PageHero from "@/react-app/components/PageHero";
import { Star, Quote, Send, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Lady Victoria Hastings",
    date: "December 2024",
    rating: 5,
    text: "An evening of pure indulgence. The white truffle tagliatelle was transcendent – every bite a journey through the hills of Alba. The service was impeccable, attentive yet unobtrusive. This is, without question, the finest Italian dining in London.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Sir Charles Montgomery",
    date: "November 2024",
    rating: 5,
    text: "We celebrated our anniversary at La Dolce Vita and it exceeded every expectation. The sommelier's wine pairings were exceptional, and the ossobuco was the best I've tasted outside of Milan. A true gem in Mayfair.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "The Countess of Berkshire",
    date: "November 2024",
    rating: 5,
    text: "From the moment we stepped through the door, we were transported. The ambiance is utterly enchanting – candlelight, velvet, and that gorgeous midnight blue. My Dover sole was cooked to absolute perfection.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "James Worthington III",
    date: "October 2024",
    rating: 5,
    text: "As a frequent traveller to Rome and Florence, I'm particular about my Italian cuisine. La Dolce Vita rivals the very best trattorias I've visited in Italy. The burrata was creamy, the pasta al dente, the experience unforgettable.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Dame Philippa Carlton",
    date: "October 2024",
    rating: 5,
    text: "I hosted a private dinner for twelve in their elegant private dining room. Every detail was attended to with the utmost care. My guests are still talking about the tasting menu weeks later. Bravo!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    name: "Lord Edward Ashworth",
    date: "September 2024",
    rating: 5,
    text: "The chef's tasting menu with wine pairing was a masterclass in Italian gastronomy. Seven courses, each more impressive than the last. The Barolo they served with the beef was worth the price alone.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "Arabella St. Claire",
    date: "September 2024",
    rating: 4.8,
    text: "A wonderfully romantic setting for our engagement dinner. The tiramisu was heavenly, and they even brought out a personalised dessert with congratulations. Such thoughtful touches make all the difference.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
  {
    name: "The Hon. Sebastian Grey",
    date: "August 2024",
    rating: 5,
    text: "Having dined at many of London's finest establishments, I can say with confidence that La Dolce Vita stands among the very best. The attention to detail, the quality of ingredients, the artistry in presentation – all exemplary.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
  },
  {
    name: "Countess Maria del Rosario",
    date: "August 2024",
    rating: 5,
    text: "As an Italian living in London, finding authentic cuisine can be challenging. La Dolce Vita captured the essence of my grandmother's cooking with the sophistication of fine dining. Bellissimo!",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
  },
  {
    name: "Dr. William Pemberton",
    date: "July 2024",
    rating: 5,
    text: "An absolute revelation. The carpaccio was sliced paper-thin, the risotto was velvet, and the Amarone they recommended was divine. My wife and I have already booked our return visit.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  },
  {
    name: "Lady Georgiana Fitzroy",
    date: "July 2024",
    rating: 4.9,
    text: "The tasting of Italian cheeses paired with their selection of digestivi was the perfect end to an extraordinary meal. The staff's knowledge and passion for their craft is evident in every interaction.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
  },
  {
    name: "Baron Heinrich von Strauss",
    date: "June 2024",
    rating: 5,
    text: "From Vienna to London, I have dined at the finest restaurants across Europe. La Dolce Vita deserves to stand proudly among them. The truffle risotto alone is worth crossing continents for.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-gold fill-gold" : "text-gold/30"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    review: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Guest Reviews"
        subtitle="Words from those who have experienced La Dolce Vita"
        image="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
      />

      {/* Stats Section */}
      <section className="py-16 px-6 border-b border-gold/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="font-display text-4xl text-gold">4.9</span>
                <Star className="w-8 h-8 text-gold fill-gold" />
              </div>
              <p className="font-elegant text-ivory-muted/60">Average Rating</p>
            </div>
            <div>
              <span className="font-display text-4xl text-gold">2,847</span>
              <p className="font-elegant text-ivory-muted/60 mt-2">Guest Reviews</p>
            </div>
            <div>
              <span className="font-display text-4xl text-gold">#1</span>
              <p className="font-elegant text-ivory-muted/60 mt-2">Italian Restaurant in Mayfair</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
              <span className="font-elegant text-gold/60 tracking-[0.3em] uppercase text-sm">
                Testimonials
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-ivory">
              What Our <span className="text-gradient-gold italic">Guests</span> Say
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-card border border-gold/10 p-8 hover:border-gold/30 transition-all duration-500 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/10 group-hover:text-gold/20 transition-colors duration-300" />
                
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                  />
                  <div>
                    <h4 className="font-display text-ivory">{testimonial.name}</h4>
                    <p className="font-elegant text-sm text-ivory-muted/50">{testimonial.date}</p>
                  </div>
                </div>

                <StarRating rating={testimonial.rating} />

                <p className="font-elegant text-ivory-muted/70 mt-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Embed Placeholder */}
      <section className="py-24 px-6 bg-midnight-light/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <span className="font-elegant text-gold/60 tracking-[0.3em] uppercase text-sm">
              External Reviews
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>
          
          <h2 className="font-display text-3xl text-ivory mb-8">
            Find Us on <span className="text-gradient-gold italic">Google</span>
          </h2>

          <div className="bg-card border border-gold/20 p-12 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 text-gold fill-gold" />
              ))}
            </div>
            <p className="font-display text-3xl text-ivory mb-2">4.9 out of 5</p>
            <p className="font-elegant text-ivory-muted/60 mb-6">Based on 847 Google reviews</p>
            <a
              href="https://google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gold/30 text-gold font-elegant tracking-wider hover:border-gold hover:bg-gold/10 transition-all duration-300"
            >
              View on Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
              <span className="font-elegant text-gold/60 tracking-[0.3em] uppercase text-sm">
                Share Your Experience
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h2 className="font-display text-3xl text-ivory">
              Leave a <span className="text-gradient-gold italic">Review</span>
            </h2>
          </div>

          {isSubmitted ? (
            <div className="bg-card border border-gold/20 p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-gold flex items-center justify-center">
                <Send className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-2xl text-ivory mb-4">Thank You</h3>
              <p className="font-elegant text-ivory-muted/70">
                Your review has been submitted and will appear after moderation.
                We appreciate your feedback.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-gold/20 p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                  Your Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-1 transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= formData.rating ? "text-gold fill-gold" : "text-gold/30"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                  Your Review
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.review}
                  onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                  placeholder="Tell us about your dining experience..."
                  className="w-full bg-background border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background font-display tracking-wider transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
