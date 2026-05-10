"use client";

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "1 / 1", background: "#05081a" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-bg-new.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </section>
  );
}
