import { useState } from "react";
import PageHero from "@/react-app/components/PageHero";
import { Plus, Minus, X, ShoppingBag, Truck, Store, ChevronRight, Check, CreditCard } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  extras?: { name: string; price: number }[];
  notes?: string;
}

const menuCategories = [
  {
    id: "antipasti",
    name: "Antipasti",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&q=80",
    items: [
      { id: "a1", name: "Burrata di Puglia", price: 24, description: "Creamy Pugliese burrata, heirloom tomatoes, aged balsamic" },
      { id: "a2", name: "Carpaccio di Manzo", price: 28, description: "Hand-sliced Wagyu beef, black truffle, Parmigiano" },
      { id: "a3", name: "Tartare di Tonno", price: 32, description: "Bluefin tuna tartare, avocado, yuzu, caviar" },
      { id: "a4", name: "Vitello Tonnato", price: 26, description: "Rose veal, tonnato sauce, capers" },
      { id: "a5", name: "Carciofi alla Romana", price: 18, description: "Roman-style artichokes, mint, garlic" },
    ],
  },
  {
    id: "primi",
    name: "Primi",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80",
    items: [
      { id: "p1", name: "Tagliatelle al Tartufo", price: 68, description: "Hand-rolled pasta, white Alba truffle, butter" },
      { id: "p2", name: "Risotto allo Zafferano", price: 38, description: "Carnaroli rice, saffron, bone marrow" },
      { id: "p3", name: "Cacio e Pepe", price: 28, description: "Tonnarelli, aged Pecorino, black pepper" },
      { id: "p4", name: "Ravioli di Aragosta", price: 48, description: "Lobster-filled ravioli, bisque reduction" },
      { id: "p5", name: "Pappardelle al Ragù", price: 34, description: "Wide ribbons, Chianina beef ragù" },
    ],
  },
  {
    id: "secondi",
    name: "Secondi",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
    items: [
      { id: "s1", name: "Filetto di Manzo", price: 58, description: "Fassona beef fillet, Barolo reduction" },
      { id: "s2", name: "Branzino al Sale", price: 52, description: "Salt-crusted Mediterranean sea bass" },
      { id: "s3", name: "Agnello Scottadito", price: 48, description: "Grilled lamb cutlets, salsa verde" },
      { id: "s4", name: "Ossobuco alla Milanese", price: 46, description: "Slow-braised veal shank, gremolata" },
    ],
  },
  {
    id: "dolci",
    name: "Dolci",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
    items: [
      { id: "d1", name: "Tiramisù Classico", price: 16, description: "Mascarpone, Marsala savoiardi, espresso" },
      { id: "d2", name: "Panna Cotta", price: 14, description: "Vanilla cream, wild strawberry compote" },
      { id: "d3", name: "Cannoli Siciliani", price: 15, description: "Crispy shells, ricotta, candied orange" },
      { id: "d4", name: "Affogato al Tartufo", price: 18, description: "Truffle gelato, hot espresso" },
    ],
  },
  {
    id: "wines",
    name: "Wine Selection",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80",
    items: [
      { id: "w1", name: "Prosecco Superiore (bottle)", price: 58, description: "Bisol, Veneto NV" },
      { id: "w2", name: "Gavi di Gavi (bottle)", price: 85, description: "La Scolca, Piedmont 2021" },
      { id: "w3", name: "Tignanello (bottle)", price: 185, description: "Antinori, Tuscany 2019" },
      { id: "w4", name: "Barolo DOCG (bottle)", price: 280, description: "Giacomo Conterno, Piedmont 2017" },
    ],
  },
];

const extras = [
  { id: "e1", name: "Extra White Truffle Shavings", price: 35 },
  { id: "e2", name: "Add Caviar (30g)", price: 45 },
  { id: "e3", name: "Truffle Oil Drizzle", price: 12 },
  { id: "e4", name: "Extra Parmigiano", price: 8 },
];

const winePairings = [
  { id: "wp1", name: "Sommelier's Pairing (glass)", price: 18 },
  { id: "wp2", name: "Premium Pairing (glass)", price: 28 },
];

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("antipasti");
  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">("delivery");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<"menu" | "checkout" | "confirmation">("menu");
  const [customizingItem, setCustomizingItem] = useState<{id: string; name: string; price: number} | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<{name: string; price: number}[]>([]);
  const [itemNotes, setItemNotes] = useState("");
  const [checkoutData, setCheckoutData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
    notes: "",
  });

  const addToCart = (item: {id: string; name: string; price: number}, extras: {name: string; price: number}[] = [], notes: string = "") => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id && JSON.stringify(i.extras) === JSON.stringify(extras));
      if (existing && !extras.length && !notes) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1, extras, notes }];
    });
    setCustomizingItem(null);
    setSelectedExtras([]);
    setItemNotes("");
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const getCartTotal = () => {
    return cart.reduce((sum, item) => {
      const extrasTotal = item.extras?.reduce((e, ex) => e + ex.price, 0) || 0;
      return sum + ((item.price + extrasTotal) * item.quantity);
    }, 0);
  };

  const serviceCharge = getCartTotal() * 0.125;
  const deliveryFee = deliveryMethod === "delivery" ? 5 : 0;
  const orderTotal = getCartTotal() + serviceCharge + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("confirmation");
  };

  if (currentStep === "confirmation") {
    return (
      <div className="min-h-screen bg-background">
        <PageHero
          title="Order Confirmed"
          subtitle="Thank you for your order"
          image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          height="medium"
        />
        <section className="py-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full border-2 border-gold flex items-center justify-center">
              <Check className="w-10 h-10 text-gold" />
            </div>
            <h2 className="font-display text-3xl text-ivory mb-4">
              Order #LDV{Math.random().toString().slice(2, 8)}
            </h2>
            <p className="font-elegant text-ivory-muted/70 mb-8">
              A confirmation has been sent to {checkoutData.email}. 
              {deliveryMethod === "delivery" 
                ? " Your order will arrive in approximately 45-60 minutes."
                : " Your order will be ready for collection in approximately 30 minutes."
              }
            </p>
            
            <div className="bg-card border border-gold/20 p-8 text-left mb-8">
              <h3 className="font-display text-xl text-ivory mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between font-elegant text-ivory-muted/70">
                    <span>{item.quantity}x {item.name}</span>
                    <span>£{((item.price + (item.extras?.reduce((s, e) => s + e.price, 0) || 0)) * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gold/10 pt-4 space-y-2">
                <div className="flex justify-between font-elegant text-ivory-muted/50">
                  <span>Subtotal</span>
                  <span>£{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-elegant text-ivory-muted/50">
                  <span>Service Charge (12.5%)</span>
                  <span>£{serviceCharge.toFixed(2)}</span>
                </div>
                {deliveryMethod === "delivery" && (
                  <div className="flex justify-between font-elegant text-ivory-muted/50">
                    <span>Delivery</span>
                    <span>£5.00</span>
                  </div>
                )}
                <div className="flex justify-between font-display text-lg text-gold pt-2">
                  <span>Total</span>
                  <span>£{orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <p className="font-elegant text-sm text-ivory-muted/50">
              Questions about your order? Call us at +44 (0)20 7123 4567
            </p>
          </div>
        </section>
      </div>
    );
  }

  if (currentStep === "checkout") {
    return (
      <div className="min-h-screen bg-background pt-24">
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setCurrentStep("menu")}
              className="flex items-center gap-2 text-gold font-elegant mb-8 hover:text-gold-light transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to Menu
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Checkout Form */}
              <div>
                <h2 className="font-display text-3xl text-ivory mb-8">
                  <span className="text-gradient-gold">Checkout</span>
                </h2>

                <form onSubmit={handleCheckout} className="space-y-6">
                  <div>
                    <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={checkoutData.name}
                      onChange={(e) => setCheckoutData({ ...checkoutData, name: e.target.value })}
                      className="w-full bg-card border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={checkoutData.email}
                        onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
                        className="w-full bg-card border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={checkoutData.phone}
                        onChange={(e) => setCheckoutData({ ...checkoutData, phone: e.target.value })}
                        className="w-full bg-card border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  {deliveryMethod === "delivery" && (
                    <>
                      <div>
                        <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                          Delivery Address *
                        </label>
                        <input
                          type="text"
                          required
                          value={checkoutData.address}
                          onChange={(e) => setCheckoutData({ ...checkoutData, address: e.target.value })}
                          className="w-full bg-card border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                          Postcode *
                        </label>
                        <input
                          type="text"
                          required
                          value={checkoutData.postcode}
                          onChange={(e) => setCheckoutData({ ...checkoutData, postcode: e.target.value })}
                          className="w-full bg-card border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                      Order Notes
                    </label>
                    <textarea
                      rows={3}
                      value={checkoutData.notes}
                      onChange={(e) => setCheckoutData({ ...checkoutData, notes: e.target.value })}
                      placeholder="Any special instructions..."
                      className="w-full bg-card border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  {/* Payment Placeholder */}
                  <div className="bg-card border border-gold/20 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="w-5 h-5 text-gold" />
                      <span className="font-display text-ivory">Payment</span>
                    </div>
                    <p className="font-elegant text-sm text-ivory-muted/50 mb-4">
                      Secure payment powered by Stripe
                    </p>
                    <div className="bg-background border border-gold/30 p-4 text-center">
                      <span className="font-elegant text-ivory-muted/50">
                        [Stripe Payment Form Placeholder]
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background font-display tracking-wider transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                  >
                    Place Order • £{orderTotal.toFixed(2)}
                  </button>
                </form>
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-card border border-gold/20 p-6 sticky top-24">
                  <h3 className="font-display text-xl text-ivory mb-6">Your Order</h3>
                  
                  <div className="space-y-4 max-h-[400px] overflow-y-auto mb-6">
                    {cart.map((item, index) => (
                      <div key={index} className="flex justify-between gap-4 pb-4 border-b border-gold/10">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-elegant text-gold">{item.quantity}x</span>
                            <span className="font-elegant text-ivory">{item.name}</span>
                          </div>
                          {item.extras?.map((extra, i) => (
                            <p key={i} className="font-elegant text-sm text-ivory-muted/50 ml-6">
                              + {extra.name}
                            </p>
                          ))}
                          {item.notes && (
                            <p className="font-elegant text-sm text-ivory-muted/50 ml-6 italic">
                              "{item.notes}"
                            </p>
                          )}
                        </div>
                        <span className="font-elegant text-ivory">
                          £{((item.price + (item.extras?.reduce((s, e) => s + e.price, 0) || 0)) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-4 border-t border-gold/20">
                    <div className="flex justify-between font-elegant text-ivory-muted/60">
                      <span>Subtotal</span>
                      <span>£{getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-elegant text-ivory-muted/60">
                      <span>Service Charge (12.5%)</span>
                      <span>£{serviceCharge.toFixed(2)}</span>
                    </div>
                    {deliveryMethod === "delivery" && (
                      <div className="flex justify-between font-elegant text-ivory-muted/60">
                        <span>Delivery</span>
                        <span>£5.00</span>
                      </div>
                    )}
                    <div className="flex justify-between font-display text-xl text-gold pt-4 border-t border-gold/20">
                      <span>Total</span>
                      <span>£{orderTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Order Online"
        subtitle="Experience La Dolce Vita in the comfort of your home"
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
      />

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Delivery Toggle */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setDeliveryMethod("delivery")}
              className={`flex items-center gap-3 px-8 py-4 font-elegant tracking-wider transition-all duration-300 ${
                deliveryMethod === "delivery"
                  ? "bg-gold text-background"
                  : "border border-gold/30 text-gold/70 hover:border-gold"
              }`}
            >
              <Truck className="w-5 h-5" />
              Delivery
            </button>
            <button
              onClick={() => setDeliveryMethod("pickup")}
              className={`flex items-center gap-3 px-8 py-4 font-elegant tracking-wider transition-all duration-300 ${
                deliveryMethod === "pickup"
                  ? "bg-gold text-background"
                  : "border border-gold/30 text-gold/70 hover:border-gold"
              }`}
            >
              <Store className="w-5 h-5" />
              Collection
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                {menuCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center gap-4 p-4 transition-all duration-300 ${
                      selectedCategory === cat.id
                        ? "bg-gold/10 border-l-2 border-gold"
                        : "hover:bg-gold/5"
                    }`}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span className={`font-display ${selectedCategory === cat.id ? "text-gold" : "text-ivory"}`}>
                      {cat.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            <div className="lg:col-span-2">
              {menuCategories
                .filter((cat) => cat.id === selectedCategory)
                .map((category) => (
                  <div key={category.id}>
                    <h2 className="font-display text-2xl text-ivory mb-6">{category.name}</h2>
                    <div className="space-y-4">
                      {category.items.map((item) => (
                        <div
                          key={item.id}
                          className="bg-card border border-gold/10 p-6 hover:border-gold/30 transition-all duration-300 group"
                        >
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                              <h3 className="font-display text-lg text-ivory group-hover:text-gold transition-colors">
                                {item.name}
                              </h3>
                              <p className="font-elegant text-sm text-ivory-muted/60 mt-1">
                                {item.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="font-display text-gold">£{item.price}</span>
                              <button
                                onClick={() => setCustomizingItem(item)}
                                className="w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all duration-300"
                              >
                                <Plus className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>

            {/* Cart Sidebar - Desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 bg-card border border-gold/20 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <ShoppingBag className="w-5 h-5 text-gold" />
                  <h3 className="font-display text-lg text-ivory">Your Order</h3>
                  <span className="ml-auto font-elegant text-gold">{cart.length} items</span>
                </div>

                {cart.length === 0 ? (
                  <p className="font-elegant text-ivory-muted/50 text-center py-8">
                    Your cart is empty
                  </p>
                ) : (
                  <>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto mb-6">
                      {cart.map((item, index) => (
                        <div key={index} className="pb-4 border-b border-gold/10">
                          <div className="flex justify-between items-start gap-2">
                            <div className="flex-1">
                              <span className="font-elegant text-ivory text-sm">{item.name}</span>
                              {item.extras?.map((extra, i) => (
                                <p key={i} className="font-elegant text-xs text-ivory-muted/50">
                                  + {extra.name}
                                </p>
                              ))}
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-ivory-muted/50 hover:text-red-400 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-6 h-6 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="font-elegant text-ivory w-6 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-6 h-6 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <span className="font-elegant text-gold text-sm">
                              £{((item.price + (item.extras?.reduce((s, e) => s + e.price, 0) || 0)) * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 pt-4 border-t border-gold/20">
                      <div className="flex justify-between font-elegant text-sm text-ivory-muted/60">
                        <span>Subtotal</span>
                        <span>£{getCartTotal().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-elegant text-sm text-ivory-muted/60">
                        <span>Service (12.5%)</span>
                        <span>£{serviceCharge.toFixed(2)}</span>
                      </div>
                      {deliveryMethod === "delivery" && (
                        <div className="flex justify-between font-elegant text-sm text-ivory-muted/60">
                          <span>Delivery</span>
                          <span>£5.00</span>
                        </div>
                      )}
                      <div className="flex justify-between font-display text-lg text-gold pt-2">
                        <span>Total</span>
                        <span>£{orderTotal.toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setCurrentStep("checkout")}
                      className="w-full mt-6 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background font-display tracking-wider transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                    >
                      Checkout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg z-40"
      >
        <ShoppingBag className="w-6 h-6 text-background" />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-background text-gold rounded-full text-sm font-display flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>

      {/* Mobile Cart Drawer */}
      {isCartOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-background/90" onClick={() => setIsCartOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-card border-l border-gold/20 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl text-ivory">Your Order</h3>
              <button onClick={() => setIsCartOpen(false)}>
                <X className="w-6 h-6 text-ivory" />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="font-elegant text-ivory-muted/50 text-center py-8">
                Your cart is empty
              </p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item, index) => (
                    <div key={index} className="pb-4 border-b border-gold/10">
                      <div className="flex justify-between items-start gap-2">
                        <span className="font-elegant text-ivory">{item.name}</span>
                        <button onClick={() => removeFromCart(item.id)}>
                          <X className="w-4 h-4 text-ivory-muted/50" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center gap-3">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 border border-gold/30 flex items-center justify-center text-gold">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-elegant text-ivory">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 border border-gold/30 flex items-center justify-center text-gold">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="font-elegant text-gold">£{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-4 border-t border-gold/20 mb-6">
                  <div className="flex justify-between font-elegant text-ivory-muted/60">
                    <span>Subtotal</span>
                    <span>£{getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-elegant text-ivory-muted/60">
                    <span>Service (12.5%)</span>
                    <span>£{serviceCharge.toFixed(2)}</span>
                  </div>
                  {deliveryMethod === "delivery" && (
                    <div className="flex justify-between font-elegant text-ivory-muted/60">
                      <span>Delivery</span>
                      <span>£5.00</span>
                    </div>
                  )}
                  <div className="flex justify-between font-display text-xl text-gold pt-2">
                    <span>Total</span>
                    <span>£{orderTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => { setIsCartOpen(false); setCurrentStep("checkout"); }}
                  className="w-full py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background font-display tracking-wider"
                >
                  Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Customize Item Modal */}
      {customizingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-background/90" onClick={() => setCustomizingItem(null)} />
          <div className="relative bg-card border border-gold/20 p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setCustomizingItem(null)}
              className="absolute top-4 right-4 text-ivory-muted/50 hover:text-ivory"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="font-display text-2xl text-ivory mb-2">{customizingItem.name}</h3>
            <p className="font-display text-gold mb-6">£{customizingItem.price}</p>

            {/* Extras */}
            <div className="mb-6">
              <h4 className="font-display text-lg text-ivory mb-4">Enhance Your Dish</h4>
              <div className="space-y-3">
                {extras.map((extra) => (
                  <label
                    key={extra.id}
                    className="flex items-center justify-between p-4 border border-gold/20 cursor-pointer hover:border-gold/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedExtras.some(e => e.name === extra.name)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedExtras([...selectedExtras, { name: extra.name, price: extra.price }]);
                          } else {
                            setSelectedExtras(selectedExtras.filter(ex => ex.name !== extra.name));
                          }
                        }}
                        className="w-5 h-5 accent-gold"
                      />
                      <span className="font-elegant text-ivory">{extra.name}</span>
                    </div>
                    <span className="font-elegant text-gold">+£{extra.price}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Wine Pairing */}
            <div className="mb-6">
              <h4 className="font-display text-lg text-ivory mb-4">Wine Pairing</h4>
              <div className="space-y-3">
                {winePairings.map((pairing) => (
                  <label
                    key={pairing.id}
                    className="flex items-center justify-between p-4 border border-gold/20 cursor-pointer hover:border-gold/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedExtras.some(e => e.name === pairing.name)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedExtras([...selectedExtras, { name: pairing.name, price: pairing.price }]);
                          } else {
                            setSelectedExtras(selectedExtras.filter(ex => ex.name !== pairing.name));
                          }
                        }}
                        className="w-5 h-5 accent-gold"
                      />
                      <span className="font-elegant text-ivory">{pairing.name}</span>
                    </div>
                    <span className="font-elegant text-gold">+£{pairing.price}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="mb-8">
              <h4 className="font-display text-lg text-ivory mb-4">Special Instructions</h4>
              <textarea
                rows={3}
                value={itemNotes}
                onChange={(e) => setItemNotes(e.target.value)}
                placeholder="Any allergies or preferences..."
                className="w-full bg-background border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(customizingItem, selectedExtras, itemNotes)}
              className="w-full py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background font-display tracking-wider transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              Add to Order • £{(customizingItem.price + selectedExtras.reduce((s, e) => s + e.price, 0)).toFixed(2)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
