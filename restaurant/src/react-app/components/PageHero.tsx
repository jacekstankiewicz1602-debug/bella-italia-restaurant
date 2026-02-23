interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  height?: "full" | "large" | "medium";
}

export default function PageHero({
  title,
  subtitle,
  image,
  height = "medium",
}: PageHeroProps) {
  const heightClasses = {
    full: "h-screen",
    large: "h-[70vh]",
    medium: "h-[50vh] min-h-[400px]",
  };

  return (
    <section className={`relative ${heightClasses[height]} w-full overflow-hidden`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-20">
        {/* Decorative Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold" />
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory">
          <span className="text-gradient-gold">{title}</span>
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-elegant text-lg md:text-xl text-ivory-muted/70 mt-4 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
