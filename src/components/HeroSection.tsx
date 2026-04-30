"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroFeature {
  icon: string;
  title: string;
}

const heroFeatures: HeroFeature[] = [
  {
    icon: "/images/bicon1.png",
    title: "מסלולי לימוד ממוקדים\nלקריירה בהייטק",
  },
  {
    icon: "/images/bicon2.png",
    title: "הכשרה מקצועית עם\nהמרצים המובילים בישראל",
  },
  {
    icon: "/images/bicon3.png",
    title: "מחלקת השמה ייעודית\nלהשתלבות מהירה בהייטק",
  },
];

export function HeroSection() {
  return (
    <section
      className={cn("relative overflow-hidden flex flex-col justify-end w-full")}
      style={{
        backgroundImage: "url('/images/bg-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: "890px",
      }}
      dir="rtl"
    >
      {/* Logo — absolute top-right (RTL) relative to the section */}
      <div
        className="absolute"
        style={{ top: "40px", right: "40px", zIndex: 10 }}
      >
        <Image
          src="/images/logo-white.png"
          alt="HackerU Logo"
          width={200}
          height={60}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Man image — absolute, bottom-left */}
      <div
        className="absolute bottom-0 left-0 hidden md:block"
        style={{ zIndex: 1, pointerEvents: "none", height: "85%" }}
      >
        <Image
          src="/images/man.png"
          alt=""
          width={600}
          height={760}
          style={{ height: "100%", width: "auto", objectFit: "contain" }}
          aria-hidden="true"
        />
      </div>

      {/* Bpluses decoration — bottom-right area */}
      <div
        className="absolute"
        style={{
          bottom: "40px",
          right: "0",
          zIndex: 2,
          pointerEvents: "none",
          opacity: 0.6,
        }}
      >
        <Image
          src="/images/bpluses.png"
          alt=""
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
          aria-hidden="true"
        />
      </div>

      {/* Main content container */}
      <div
        className="relative mx-auto w-full px-6 pb-10"
        style={{ maxWidth: "1200px", zIndex: 5 }}
      >
        {/* Content column — right ~55% in RTL layout */}
        <div className="hero-content ml-auto" style={{ maxWidth: "660px" }}>
          {/* h1 */}
          <h1
            className="hero-h1 text-white font-black text-right"
            dangerouslySetInnerHTML={{
              __html: "פחות דיבורים,<br>יותר תכל'ס!",
            }}
            style={{ lineHeight: 1, marginBottom: "20px" }}
          />

          {/* h2 subtitle */}
          <h2
            className="text-white text-right"
            style={{
              fontSize: "30px",
              fontWeight: 400,
              lineHeight: 1.4,
              marginBottom: "30px",
            }}
          >
            זה הזמן לרכוש מקצוע תוך מספר חודשים ולהתחיל לעבוד בהייטק.
          </h2>

          {/* Hero features row */}
          <div
            className="flex flex-row"
            style={{ direction: "rtl", marginBottom: "30px" }}
          >
            {heroFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                style={{ flex: "1 1 0%" }}
              >
                <div style={{ marginBottom: "8px", textAlign: "center" }}>
                  <Image
                    src={feature.icon}
                    alt={feature.title.replace(/\n/g, " ")}
                    width={60}
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p
                  className="text-white text-center"
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    whiteSpace: "pre-line",
                    lineHeight: 1.4,
                  }}
                >
                  {feature.title}
                </p>
              </div>
            ))}
          </div>

          {/* Form */}
          <section style={{ direction: "rtl" }}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="text"
                name="firstname"
                placeholder="מה השם שלך?"
                className="hero-input"
                style={{
                  backgroundColor: "#221C4A",
                  border: "1px solid #ffffff",
                  borderRadius: "50px",
                  padding: "14px 20px",
                  fontSize: "18px",
                  color: "#ffffff",
                  width: "100%",
                  outline: "none",
                  direction: "rtl",
                }}
              />

              <input
                type="tel"
                name="phone"
                placeholder="מה הטלפון שלך?"
                className="hero-input"
                style={{
                  backgroundColor: "#221C4A",
                  border: "1px solid #ffffff",
                  borderRadius: "50px",
                  padding: "14px 20px",
                  fontSize: "18px",
                  color: "#ffffff",
                  width: "100%",
                  outline: "none",
                  direction: "rtl",
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="ומה המייל?"
                className="hero-input"
                style={{
                  backgroundColor: "#221C4A",
                  border: "1px solid #ffffff",
                  borderRadius: "50px",
                  padding: "14px 20px",
                  fontSize: "18px",
                  color: "#ffffff",
                  width: "100%",
                  outline: "none",
                  direction: "rtl",
                }}
              />

              <label
                style={{
                  fontSize: "14px",
                  color: "#ffffff",
                  direction: "rtl",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "16px",
                  cursor: "pointer",
                }}
              >
                <input type="checkbox" name="gdpr" defaultChecked />
                <span>
                  אני מאשר/ת קבלת דיוורים ישירים ודברי פרסומות מהאקריו בכפוף
                  למדיניות הגנת הפרטיות
                </span>
              </label>

              <button
                type="submit"
                style={{
                  backgroundColor: "#85E577",
                  color: "#131316",
                  borderRadius: "50px",
                  padding: "14px 30px",
                  fontSize: "18px",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                  display: "block",
                  textAlign: "center",
                }}
              >
                אני רוצה ללמוד מקצוע מבוקש &gt;&gt;
              </button>
            </form>
          </section>
        </div>
      </div>

      {/* Scoped styles for placeholder color and responsive h1 */}
      <style>{`
        .hero-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        .hero-h1 {
          font-size: 100px;
          font-weight: 900;
        }
        @media (max-width: 768px) {
          .hero-h1 {
            font-size: 50px;
          }
        }
      `}</style>
    </section>
  );
}
