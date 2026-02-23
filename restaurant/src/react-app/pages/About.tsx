import PageHero from "@/react-app/components/PageHero";
import { Award, Star, Utensils, Wine } from "lucide-react";
import { Link } from "react-router";

const timeline = [
  {
    year: "1985",
    title: "A Dream Takes Shape",
    description: "Chef Marco Benedetti leaves his family's trattoria in Tuscany, carrying with him generations of culinary wisdom and a vision of bringing authentic Italian elegance to London.",
  },
  {
    year: "1992",
    title: "La Dolce Vita Opens",
    description: "In the heart of Mayfair, a former Georgian townhouse transforms into an intimate dining sanctuary. The first guests experience what would become legendary hospitality.",
  },
  {
    year: "2001",
    title: "First Michelin Star",
    description: "Recognition arrives as the Michelin Guide awards La Dolce Vita its first star, cementing its place among London's finest establishments.",
  },
  {
    year: "2010",
    title: "A New Generation",
    description: "Chef Benedetti's protégé, Alessandro Ferrara, takes the helm as Executive Chef, honouring tradition while introducing contemporary refinements.",
  },
  {
    year: "2018",
    title: "Renovation & Renewal",
    description: "A sensitive restoration reveals the building's Georgian elegance while introducing modern luxuries. The iconic midnight blue and gold palette is born.",
  },
  {
    year: "2024",
    title: "Three Decades of Excellence",
    description: "La Dolce Vita celebrates 32 years of creating unforgettable moments, now serving the third generation of loyal guests.",
  },
];

const awards = [
  { icon: <Star className="w-8 h-8" />, title: "Michelin Star", subtitle: "Held continuously since 2001" },
  { icon: <Award className="w-8 h-8" />, title: "AA 3 Rosettes", subtitle: "Outstanding Cuisine" },
  { icon: <Wine className="w-8 h-8" />, title: "Wine Spectator", subtitle: "Award of Excellence" },
  { icon: <Utensils className="w-8 h-8" />, title: "Harden's", subtitle: "Top 10 Italian London" },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Main dining room with candlelight",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Intimate corner seating",
  },
  {
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80",
    alt: "Bar and lounge area",
  },
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80",
    alt: "Private dining room",
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    alt: "Wine cellar",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Table setting detail",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Our Story"
        subtitle="Three decades of passion, tradition, and Italian excellence"
        image="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
        height="large"
      />

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gold/50" />
                <span className="font-elegant text-gold/60 tracking-[0.3em] uppercase text-sm">
                  Our Philosophy
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-ivory mb-6">
                Where Tradition Meets <span className="text-gradient-gold italic">Artistry</span>
              </h2>
              <p className="font-elegant text-ivory-muted/70 leading-relaxed mb-6">
                At La Dolce Vita, we believe that exceptional dining is a celebration of life's 
                most precious moments. Every dish we create is a tribute to the generations of 
                Italian craftsmen who perfected these recipes, and a promise to honour their 
                legacy with the finest ingredients the world has to offer.
              </p>
              <p className="font-elegant text-ivory-muted/70 leading-relaxed mb-6">
                Our kitchen operates on a simple principle: source the best, respect the ingredient, 
                and let tradition guide our hands. From the white truffles of Alba to the olive oil 
                of Puglia, from the aged Parmigiano of Emilia-Romagna to the fresh seafood of the 
                Mediterranean, every element tells a story.
              </p>
              <p className="font-elegant text-ivory-muted/70 leading-relaxed">
                This is more than a restaurant. This is a sanctuary where time slows, 
                conversations deepen, and the sweet life – la dolce vita – becomes reality.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80"
                alt="Chef preparing a dish"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 border border-gold/20 -translate-x-4 -translate-y-4 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-24 px-6 bg-midnight-light/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                alt="Executive Chef Alessandro Ferrara"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 border border-gold/20 translate-x-4 translate-y-4 -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gold/50" />
                <span className="font-elegant text-gold/60 tracking-[0.3em] uppercase text-sm">
                  The Chef
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-ivory mb-6">
                Alessandro <span className="text-gradient-gold italic">Ferrara</span>
              </h2>
              <p className="font-elegant text-lg text-gold/80 italic mb-6">
                Executive Chef & Culinary Director
              </p>
              <p className="font-elegant text-ivory-muted/70 leading-relaxed mb-6">
                Born in Naples and trained in the grand kitchens of Rome and Milan, Chef Ferrara 
                brings over two decades of culinary mastery to La Dolce Vita. His journey began 
                in his grandmother's kitchen, where he learned that the soul of Italian cooking 
                lies in love, patience, and respect for ingredients.
              </p>
              <p className="font-elegant text-ivory-muted/70 leading-relaxed mb-6">
                After years at renowned establishments including Osteria Francescana and Le Calandre, 
                Alessandro joined La Dolce Vita in 2008 as Sous Chef under Marco Benedetti. 
                His ascension to Executive Chef in 2010 marked a new chapter while honouring 
                the restaurant's beloved traditions.
              </p>
              <blockquote className="border-l-2 border-gold pl-6 font-elegant text-ivory italic">
                "Cooking is an act of love. Every plate that leaves my kitchen carries a piece 
                of my heart, my heritage, and my hope that it brings joy to those who receive it."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
              <span className="font-elegant text-gold/60 tracking-[0.3em] uppercase text-sm">
                Our Journey
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-ivory">
              A Legacy of <span className="text-gradient-gold italic">Excellence</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gold/20" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="font-display text-2xl text-gold">{item.year}</span>
                    <h3 className="font-display text-xl text-ivory mt-2 mb-3">{item.title}</h3>
                    <p className="font-elegant text-ivory-muted/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-background" />

                  {/* Empty space for alignment */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 px-6 bg-midnight-light/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
              <span className="font-elegant text-gold/60 tracking-[0.3em] uppercase text-sm">
                Recognition
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-ivory">
              Awards & <span className="text-gradient-gold italic">Accolades</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-card border border-gold/10 p-8 text-center hover:border-gold/30 transition-all duration-500 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-all duration-300">
                  {award.icon}
                </div>
                <h4 className="font-display text-ivory mb-1">{award.title}</h4>
                <p className="font-elegant text-sm text-ivory-muted/50">{award.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
              <span className="font-elegant text-gold/60 tracking-[0.3em] uppercase text-sm">
                The Space
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-ivory">
              Inside <span className="text-gradient-gold italic">La Dolce Vita</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden group ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-elegant text-sm text-ivory">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Dining CTA */}
      <section className="relative py-32 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4">
            Private <span className="text-gradient-gold italic">Dining</span>
          </h2>
          <p className="font-elegant text-ivory-muted/70 mb-8 leading-relaxed">
            For intimate celebrations, corporate gatherings, or milestone occasions, 
            our private dining rooms offer an exclusive experience with bespoke menus 
            and dedicated service.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background font-display tracking-wider transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </div>
  );
}
