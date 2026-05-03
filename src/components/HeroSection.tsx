"use client";

import { cn } from "@/lib/utils";
import { Layers, CalendarDays, Users } from "lucide-react";
import { motion } from "framer-motion";

const heroFeatures = [
  { Icon: Layers,      title: "שני פורומים\nמקבילים בארגון" },
  { Icon: CalendarDays, title: "6-7 מפגשים\nאחת לשבועיים" },
  { Icon: Users,       title: "פתוח לעובדים\nומנהלים מכל החטיבות" },
];

export function HeroSection() {
  return (
    <section
      className={cn("hero-main relative overflow-hidden flex flex-col justify-end w-full")}
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: "890px",
      }}
      dir="rtl"
    >
      {/* Main content */}
      <div className="hero-content-inner relative mx-auto w-full px-6 pb-10" style={{ maxWidth: "1200px", zIndex: 5 }}>
        <div className="hero-content ml-auto" style={{ maxWidth: "660px" }}>

          <motion.h1
            className="hero-h1 font-black text-right"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ lineHeight: 1.05, marginBottom: "20px" }}
          >
            <span dir="ltr" style={{ display: "block", background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", textAlign: "right" }}>
              MAKE IT POSSIBLE
            </span>
            <span dir="ltr" style={{ display: "block", color: "#ffffff", fontSize: "0.38em", fontWeight: 700, lineHeight: 1.35, marginTop: "10px", textAlign: "right", letterSpacing: "0.02em" }}>
              YOUR IDEAS. YOUR IMPACT. YOUR FORUM.
            </span>
            <span style={{ display: "block", color: "rgba(255,255,255,0.85)", fontSize: "0.34em", fontWeight: 500, lineHeight: 1.5, marginTop: "8px" }}>
              פורום החדשנות באמרל — ההרשמה פתוחה
            </span>
          </motion.h1>

          <motion.h2
            className="hero-subtitle text-white text-right"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={{ fontSize: "28px", fontWeight: 400, lineHeight: 1.4, marginBottom: "30px" }}
          >
            מנגנון ארגוני מובנה להצפת רעיונות, פיתוח פתרונות ושיפור מתמיד של תהליכים.
          </motion.h2>

          {/* Feature icons */}
          <motion.div
            className="hero-features flex flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            style={{ direction: "rtl", marginBottom: "30px" }}
          >
            {heroFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center" style={{ flex: "1 1 0%" }}>
                <div style={{ marginBottom: "10px", textAlign: "center", width: 56, height: 56, borderRadius: "14px", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                  <feature.Icon size={28} color="#ffffff" strokeWidth={1.5} />
                </div>
                <p className="text-white text-center" style={{ fontSize: "13px", fontWeight: 600, whiteSpace: "pre-line", lineHeight: 1.4 }}>
                  {feature.title}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-input::placeholder { color: rgba(255, 255, 255, 0.7); }
        .hero-input option { background-color: #0c1a2e; color: white; }
        .hero-h1 { font-size: 100px; font-weight: 900; }

        @media (max-width: 768px) {
          .hero-h1 { font-size: 52px; }
          .hero-main { min-height: 100svh !important; }
          .hero-content-inner { padding: 0 16px 32px !important; }
          .hero-subtitle { font-size: 20px !important; margin-bottom: 20px !important; }
          .hero-features { margin-bottom: 20px !important; }
        }
      `}</style>
    </section>
  );
}
