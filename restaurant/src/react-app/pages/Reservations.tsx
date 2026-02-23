import { useState } from "react";
import PageHero from "@/react-app/components/PageHero";
import { Calendar, Clock, Users, ChevronLeft, ChevronRight, Check } from "lucide-react";

const timeSlots = [
  "12:00", "12:30", "13:00", "13:30", "14:00",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ReservationsPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [guests, setGuests] = useState(2);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    return { daysInMonth, startingDay };
  };

  const { daysInMonth, startingDay } = getDaysInMonth(currentMonth);

  const isDateAvailable = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && date.getDay() !== 1; // Closed on Mondays
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <PageHero
          title="Reservation Confirmed"
          subtitle="We look forward to welcoming you"
          image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
          height="medium"
        />
        <section className="py-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full border-2 border-gold flex items-center justify-center">
              <Check className="w-10 h-10 text-gold" />
            </div>
            <h2 className="font-display text-3xl text-ivory mb-4">
              Thank You, {formData.name}
            </h2>
            <p className="font-elegant text-ivory-muted/70 mb-8">
              Your reservation has been confirmed. A confirmation email has been sent to {formData.email}.
            </p>
            <div className="bg-card border border-gold/20 p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Calendar className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="font-elegant text-ivory">{selectedDate && formatDate(selectedDate)}</p>
                </div>
                <div>
                  <Clock className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="font-elegant text-ivory">{selectedTime}</p>
                </div>
                <div>
                  <Users className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="font-elegant text-ivory">{guests} {guests === 1 ? "Guest" : "Guests"}</p>
                </div>
              </div>
            </div>
            <p className="font-elegant text-sm text-ivory-muted/50">
              For any changes to your reservation, please call us at +44 (0)20 7123 4567
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Reservations"
        subtitle="Reserve your table for an unforgettable dining experience"
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
      />

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-16">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-display transition-all duration-300 ${
                    step >= s
                      ? "bg-gold text-background"
                      : "border border-gold/30 text-gold/30"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 h-px transition-all duration-300 ${
                      step > s ? "bg-gold" : "bg-gold/20"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Date & Time */}
          {step === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calendar */}
              <div className="bg-card border border-gold/20 p-8">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={() =>
                      setCurrentMonth(
                        new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
                      )
                    }
                    className="p-2 text-gold/60 hover:text-gold transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <h3 className="font-display text-xl text-ivory">
                    {currentMonth.toLocaleDateString("en-GB", {
                      month: "long",
                      year: "numeric",
                    })}
                  </h3>
                  <button
                    onClick={() =>
                      setCurrentMonth(
                        new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
                      )
                    }
                    className="p-2 text-gold/60 hover:text-gold transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <div
                      key={day}
                      className="text-center font-elegant text-sm text-gold/50"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: startingDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isAvailable = isDateAvailable(day);
                    const isSelected =
                      selectedDate?.getDate() === day &&
                      selectedDate?.getMonth() === currentMonth.getMonth();

                    return (
                      <button
                        key={day}
                        onClick={() =>
                          isAvailable &&
                          setSelectedDate(
                            new Date(
                              currentMonth.getFullYear(),
                              currentMonth.getMonth(),
                              day
                            )
                          )
                        }
                        disabled={!isAvailable}
                        className={`aspect-square flex items-center justify-center font-elegant text-sm transition-all duration-300 ${
                          isSelected
                            ? "bg-gold text-background"
                            : isAvailable
                            ? "text-ivory hover:bg-gold/20"
                            : "text-ivory-muted/20 cursor-not-allowed"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time & Guests */}
              <div className="space-y-8">
                {/* Time Selection */}
                <div className="bg-card border border-gold/20 p-8">
                  <h3 className="font-display text-xl text-ivory mb-6 flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold" />
                    Select Time
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 font-elegant text-sm transition-all duration-300 ${
                          selectedTime === time
                            ? "bg-gold text-background"
                            : "border border-gold/30 text-gold/70 hover:border-gold hover:text-gold"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest Count */}
                <div className="bg-card border border-gold/20 p-8">
                  <h3 className="font-display text-xl text-ivory mb-6 flex items-center gap-3">
                    <Users className="w-5 h-5 text-gold" />
                    Number of Guests
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {guestOptions.map((num) => (
                      <button
                        key={num}
                        onClick={() => setGuests(num)}
                        className={`w-12 h-12 font-elegant transition-all duration-300 ${
                          guests === num
                            ? "bg-gold text-background"
                            : "border border-gold/30 text-gold/70 hover:border-gold hover:text-gold"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                    <span className="flex items-center text-ivory-muted/50 text-sm font-elegant ml-2">
                      For larger parties, please call us
                    </span>
                  </div>
                </div>

                {/* Continue Button */}
                <button
                  onClick={() => setStep(2)}
                  disabled={!selectedDate || !selectedTime}
                  className="w-full py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background font-display tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Contact Details */}
          {step === 2 && (
            <div className="max-w-xl mx-auto">
              <div className="bg-card border border-gold/20 p-8 mb-8">
                <div className="flex items-center justify-between text-sm mb-6 pb-6 border-b border-gold/10">
                  <span className="font-elegant text-ivory-muted/60">
                    {selectedDate && formatDate(selectedDate)} at {selectedTime}
                  </span>
                  <span className="font-elegant text-gold">
                    {guests} {guests === 1 ? "Guest" : "Guests"}
                  </span>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-6">
                  <div>
                    <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                      Full Name *
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
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-background border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-background border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-elegant text-sm text-ivory-muted/70 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      rows={4}
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder="Allergies, dietary requirements, special occasions..."
                      className="w-full bg-background border border-gold/30 px-4 py-3 text-ivory font-elegant focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 py-4 border border-gold/30 text-gold font-display tracking-wider hover:border-gold transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background font-display tracking-wider transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                    >
                      Review
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="max-w-xl mx-auto">
              <div className="bg-card border border-gold/20 p-8">
                <h3 className="font-display text-2xl text-ivory text-center mb-8">
                  Review Your Reservation
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-3 border-b border-gold/10">
                    <span className="font-elegant text-ivory-muted/60">Date</span>
                    <span className="font-elegant text-ivory">{selectedDate && formatDate(selectedDate)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gold/10">
                    <span className="font-elegant text-ivory-muted/60">Time</span>
                    <span className="font-elegant text-ivory">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gold/10">
                    <span className="font-elegant text-ivory-muted/60">Guests</span>
                    <span className="font-elegant text-ivory">{guests}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gold/10">
                    <span className="font-elegant text-ivory-muted/60">Name</span>
                    <span className="font-elegant text-ivory">{formData.name}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gold/10">
                    <span className="font-elegant text-ivory-muted/60">Email</span>
                    <span className="font-elegant text-ivory">{formData.email}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gold/10">
                    <span className="font-elegant text-ivory-muted/60">Phone</span>
                    <span className="font-elegant text-ivory">{formData.phone}</span>
                  </div>
                  {formData.specialRequests && (
                    <div className="py-3">
                      <span className="font-elegant text-ivory-muted/60 block mb-2">Special Requests</span>
                      <span className="font-elegant text-ivory text-sm">{formData.specialRequests}</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 py-4 border border-gold/30 text-gold font-display tracking-wider hover:border-gold transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-background font-display tracking-wider transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                  >
                    Confirm Reservation
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
