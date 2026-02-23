import { useState } from "react";
import PageHero from "@/react-app/components/PageHero";
import { ChevronDown, Leaf, Fish, Wheat } from "lucide-react";

const menuCategories = [
  {
    id: "antipasti",
    name: "Antipasti",
    description: "Begin your journey with our selection of refined starters",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=800&q=80",
    dishes: [
      { name: "Burrata di Puglia", price: "£24", description: "Creamy Pugliese burrata, heirloom tomatoes, aged balsamic, basil oil", allergens: ["dairy"] },
      { name: "Carpaccio di Manzo", price: "£28", description: "Hand-sliced Wagyu beef, black truffle, Parmigiano Reggiano, rocket", allergens: [] },
      { name: "Tartare di Tonno", price: "£32", description: "Bluefin tuna tartare, avocado, yuzu, oscietra caviar", allergens: ["fish"] },
      { name: "Vitello Tonnato", price: "£26", description: "Rose veal, tonnato sauce, capers, lemon zest", allergens: ["fish"] },
      { name: "Carciofi alla Romana", price: "£18", description: "Roman-style artichokes, mint, garlic, extra virgin olive oil", allergens: [], vegetarian: true },
    ],
  },
  {
    id: "primi",
    name: "Primi",
    description: "Handcrafted pasta and risotto, the heart of Italian cuisine",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
    dishes: [
      { name: "Tagliatelle al Tartufo Bianco", price: "£68", description: "Hand-rolled tagliatelle, white Alba truffle, butter, Parmigiano", allergens: ["gluten", "dairy"] },
      { name: "Risotto allo Zafferano", price: "£38", description: "Carnaroli rice, saffron, bone marrow, gold leaf", allergens: ["dairy"] },
      { name: "Cacio e Pepe", price: "£28", description: "Tonnarelli, aged Pecorino Romano, Tellicherry black pepper", allergens: ["gluten", "dairy"] },
      { name: "Ravioli di Aragosta", price: "£48", description: "Lobster-filled ravioli, bisque reduction, chervil", allergens: ["gluten", "shellfish"] },
      { name: "Pappardelle al Ragù", price: "£34", description: "Wide ribbons, 12-hour Chianina beef ragù, rosemary", allergens: ["gluten"] },
    ],
  },
  {
    id: "secondi",
    name: "Secondi",
    description: "Exquisite main courses showcasing the finest ingredients",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    dishes: [
      { name: "Filetto di Manzo", price: "£58", description: "Fassona beef fillet, Barolo reduction, bone marrow, seasonal vegetables", allergens: [] },
      { name: "Branzino al Sale", price: "£52", description: "Whole Mediterranean sea bass, salt-crusted, lemon, herbs", allergens: ["fish"] },
      { name: "Agnello Scottadito", price: "£48", description: "Grilled lamb cutlets, salsa verde, roasted garlic, artichokes", allergens: [] },
      { name: "Ossobuco alla Milanese", price: "£46", description: "Slow-braised veal shank, gremolata, saffron risotto", allergens: ["dairy"] },
      { name: "Pollo alla Diavola", price: "£38", description: "Spatchcock chicken, Calabrian chilli, roasted lemon, rosemary potatoes", allergens: [] },
    ],
  },
  {
    id: "dolci",
    name: "Dolci",
    description: "Sweet conclusions crafted with artisanal precision",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
    dishes: [
      { name: "Tiramisù Classico", price: "£16", description: "Mascarpone, Marsala-soaked savoiardi, espresso, cocoa", allergens: ["gluten", "dairy"] },
      { name: "Panna Cotta", price: "£14", description: "Vanilla bean cream, wild strawberry compote, aged balsamic", allergens: ["dairy"] },
      { name: "Cannoli Siciliani", price: "£15", description: "Crispy shells, sheep's milk ricotta, candied orange, pistachios", allergens: ["gluten", "dairy"] },
      { name: "Affogato al Tartufo", price: "£18", description: "Truffle gelato, hot espresso, amaretti crumble", allergens: ["dairy", "gluten"] },
      { name: "Selezione di Formaggi", price: "£24", description: "Italian artisan cheeses, honeycomb, fig mostarda, walnut bread", allergens: ["dairy", "gluten"] },
    ],
  },
];

const wines = [
  { category: "Red", items: [
    { name: "Barolo DOCG, Giacomo Conterno", year: "2017", price: "£280", region: "Piedmont" },
    { name: "Brunello di Montalcino, Biondi-Santi", year: "2015", price: "£320", region: "Tuscany" },
    { name: "Amarone della Valpolicella, Bertani", year: "2012", price: "£195", region: "Veneto" },
    { name: "Tignanello, Antinori", year: "2019", price: "£185", region: "Tuscany" },
  ]},
  { category: "White", items: [
    { name: "Cervaro della Sala, Antinori", year: "2020", price: "£145", region: "Umbria" },
    { name: "Gavi di Gavi, La Scolca", year: "2021", price: "£85", region: "Piedmont" },
    { name: "Greco di Tufo, Feudi di San Gregorio", year: "2021", price: "£72", region: "Campania" },
  ]},
  { category: "Sparkling", items: [
    { name: "Franciacorta Brut, Ca' del Bosco", year: "NV", price: "£95", region: "Lombardy" },
    { name: "Prosecco Superiore, Bisol", year: "NV", price: "£58", region: "Veneto" },
  ]},
];

function AllergenIcon({ type }: { type: string }) {
  const icons: Record<string, { icon: React.ReactNode; label: string }> = {
    dairy: { icon: <span className="text-xs">🥛</span>, label: "Dairy" },
    gluten: { icon: <Wheat className="w-3 h-3" />, label: "Gluten" },
    fish: { icon: <Fish className="w-3 h-3" />, label: "Fish" },
    shellfish: { icon: <span className="text-xs">🦐</span>, label: "Shellfish" },
  };
  const item = icons[type];
  if (!item) return null;
  return (
    <span className="inline-flex items-center gap-1 text-ivory-muted/50 text-xs" title={item.label}>
      {item.icon}
    </span>
  );
}

export default function MenuPage() {
  const [openCategory, setOpenCategory] = useState<string>("antipasti");
  const [wineFilter, setWineFilter] = useState<string>("all");

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="The Menu"
        subtitle="A symphony of flavours, crafted with passion and the finest ingredients from Italy"
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
      />

      {/* Menu Categories */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
              <span className="font-elegant text-gold/60 tracking-[0.3em] uppercase text-sm">
                À La Carte
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4">
              Curated <span className="text-gradient-gold italic">Excellence</span>
            </h2>
          </div>

          {/* Accordion Menu */}
          <div className="space-y-4">
            {menuCategories.map((category) => (
              <div
                key={category.id}
                className="border border-gold/20 overflow-hidden transition-all duration-500"
              >
                {/* Category Header */}
                <button
                  onClick={() => setOpenCategory(openCategory === category.id ? "" : category.id)}
                  className="w-full flex items-center gap-6 p-6 hover:bg-gold/5 transition-colors duration-300"
                >
                  <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-display text-2xl text-ivory mb-1">
                      {category.name}
                    </h3>
                    <p className="font-elegant text-ivory-muted/60 text-sm">
                      {category.description}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gold transition-transform duration-300 ${
                      openCategory === category.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Category Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openCategory === category.id ? "max-h-[2000px]" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-8 pt-2 border-t border-gold/10">
                    <div className="space-y-6">
                      {category.dishes.map((dish, index) => (
                        <div
                          key={index}
                          className="flex items-start justify-between gap-4 group"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <h4 className="font-display text-lg text-ivory group-hover:text-gold transition-colors duration-300">
                                {dish.name}
                              </h4>
                              {dish.vegetarian && (
                                <Leaf className="w-4 h-4 text-green-500" />
                              )}
                              <div className="flex gap-2">
                                {dish.allergens.map((a) => (
                                  <AllergenIcon key={a} type={a} />
                                ))}
                              </div>
                            </div>
                            <p className="font-elegant text-ivory-muted/60 text-sm leading-relaxed">
                              {dish.description}
                            </p>
                          </div>
                          <span className="font-display text-gold text-lg">
                            {dish.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine List */}
      <section className="py-24 px-6 bg-midnight-light/30">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
              <span className="font-elegant text-gold/60 tracking-[0.3em] uppercase text-sm">
                The Cellar
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4">
              Wine <span className="text-gradient-gold italic">Selection</span>
            </h2>
            <p className="font-elegant text-ivory-muted/60 max-w-xl mx-auto">
              Our sommelier has curated an exceptional collection from Italy's most prestigious estates
            </p>
          </div>

          {/* Wine Filters */}
          <div className="flex justify-center gap-4 mb-12">
            {["all", "Red", "White", "Sparkling"].map((filter) => (
              <button
                key={filter}
                onClick={() => setWineFilter(filter)}
                className={`px-6 py-2 font-elegant text-sm tracking-wider transition-all duration-300 ${
                  wineFilter === filter
                    ? "bg-gold text-background"
                    : "border border-gold/30 text-gold/70 hover:border-gold hover:text-gold"
                }`}
              >
                {filter === "all" ? "All Wines" : filter}
              </button>
            ))}
          </div>

          {/* Wine List */}
          <div className="space-y-12">
            {wines
              .filter((w) => wineFilter === "all" || w.category === wineFilter)
              .map((wineCategory) => (
                <div key={wineCategory.category}>
                  <h3 className="font-display text-xl text-gold mb-6 flex items-center gap-3">
                    <span className="w-8 h-px bg-gold/50" />
                    {wineCategory.category} Wines
                  </h3>
                  <div className="space-y-4">
                    {wineCategory.items.map((wine, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-4 py-4 border-b border-gold/10 group hover:bg-gold/5 px-4 -mx-4 transition-colors duration-300"
                      >
                        <div className="flex-1">
                          <h4 className="font-display text-ivory group-hover:text-gold transition-colors duration-300">
                            {wine.name}
                          </h4>
                          <p className="font-elegant text-sm text-ivory-muted/50">
                            {wine.region} • {wine.year}
                          </p>
                        </div>
                        <span className="font-display text-gold">{wine.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Tasting Menu CTA */}
      <section className="relative py-32 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4">
            Chef's <span className="text-gradient-gold italic">Tasting Menu</span>
          </h2>
          <p className="font-elegant text-ivory-muted/70 mb-8 leading-relaxed">
            Experience the full expression of our culinary philosophy with a seven-course 
            journey through seasonal Italian flavours, paired with wines selected by our sommelier.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-center">
              <span className="font-display text-2xl text-gold">£145</span>
              <p className="font-elegant text-sm text-ivory-muted/50">per person</p>
            </div>
            <div className="w-px h-12 bg-gold/30 hidden sm:block" />
            <div className="text-center">
              <span className="font-display text-2xl text-gold">£215</span>
              <p className="font-elegant text-sm text-ivory-muted/50">with wine pairing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
