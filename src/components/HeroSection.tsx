"use client";

import { cn } from "@/lib/utils";
import { Layers, CalendarDays, Users, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const heroFeatures = [
  { Icon: Layers,      title: "שני פורומים\nמקבילים בארגון" },
  { Icon: CalendarDays, title: "6-7 מפגשים\nאחת לשבועיים" },
  { Icon: Users,       title: "פתוח לעובדים\nומנהלים מכל החטיבות" },
];

function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      style={{ zIndex: 10 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })}
    >
      {/* Mouse SVG */}
      <svg width="28" height="42" viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="26" height="40" rx="13" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
        {/* Animated scroll wheel */}
        <motion.rect
          x="12" y="8" width="4" height="8" rx="2"
          fill="rgba(255,255,255,0.9)"
          animate={{ y: [8, 16, 8], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      {/* Animated chevrons */}
      <motion.div
        className="flex flex-col items-center"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={16} color="rgba(255,255,255,0.5)" strokeWidth={2} />
        <ChevronDown size={16} color="rgba(255,255,255,0.25)" strokeWidth={2} style={{ marginTop: "-6px" }} />
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      className={cn("hero-main relative overflow-hidden flex flex-col justify-center w-full")}
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "100px",
      }}
      dir="rtl"
    >
      {/* Dark gradient overlay — right side */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to left, rgba(5,8,45,0.92) 0%, rgba(5,8,45,0.85) 30%, rgba(5,8,45,0.4) 55%, transparent 75%)",
          zIndex: 2,
        }}
      />

      {/* Bottom fade for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "160px",
          background: "linear-gradient(to top, rgba(5,8,45,0.6) 0%, transparent 100%)",
          zIndex: 3,
        }}
      />

      {/* Main content */}
      <div className="hero-content-inner relative mx-auto w-full px-6 pb-14" style={{ maxWidth: "1200px", zIndex: 5 }}>
        <div className="hero-content ml-auto" style={{ maxWidth: "580px" }}>

          {/* Badge pill */}
          <motion.div
            className="flex justify-end mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(249,115,22,0.15)",
              border: "1px solid rgba(249,115,22,0.4)",
              borderRadius: "999px",
              padding: "6px 16px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#f97316",
              letterSpacing: "0.04em",
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f97316", display: "inline-block", boxShadow: "0 0 8px #f97316" }} />
              פורום חדשנות 2026 | אמרל
            </span>
          </motion.div>

          <motion.h1
            className="hero-h1 font-black text-right"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            style={{ lineHeight: 1.05, marginBottom: "20px" }}
          >
            <span dir="ltr" style={{ display: "block", background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", textAlign: "right" }}>
              MAKE IT POSSIBLE
            </span>
            <span dir="ltr" style={{ display: "block", color: "#ffffff", fontSize: "0.38em", fontWeight: 700, lineHeight: 1.35, marginTop: "10px", textAlign: "right", letterSpacing: "0.02em" }}>
              YOUR IDEAS. YOUR IMPACT. YOUR FORUM.
            </span>
            <span style={{ display: "block", color: "rgba(255,255,255,0.8)", fontSize: "0.34em", fontWeight: 500, lineHeight: 1.5, marginTop: "8px" }}>
              פורום החדשנות באמרל — ההרשמה פתוחה
            </span>
          </motion.h1>

          <motion.h2
            className="hero-subtitle text-white text-right"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.6, marginBottom: "32px", color: "rgba(255,255,255,0.75)" }}
          >
            מנגנון ארגוני מובנה להצפת רעיונות, פיתוח פתרונות ושיפור מתמיד של תהליכים.
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-row gap-3 justify-end mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          >
            {/* Primary CTA */}
            <motion.a
              href="#footer-contact"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(249,115,22,0.45)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "16px",
                padding: "14px 28px",
                borderRadius: "12px",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(249,115,22,0.3)",
                border: "none",
                cursor: "pointer",
              }}
            >
              הצטרפו עכשיו
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#brand-statement"
              whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "16px",
                padding: "14px 28px",
                borderRadius: "12px",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              קרא עוד
            </motion.a>
          </motion.div>

          {/* Feature icons */}
          <motion.div
            className="hero-features flex flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            style={{ direction: "rtl" }}
          >
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                style={{ flex: "1 1 0%" }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 10px",
                  backdropFilter: "blur(6px)",
                }}>
                  <feature.Icon size={24} color="#f97316" strokeWidth={1.5} />
                </div>
                <p className="text-white text-center" style={{ fontSize: "12px", fontWeight: 600, whiteSpace: "pre-line", lineHeight: 1.4, color: "rgba(255,255,255,0.8)" }}>
                  {feature.title}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      <style>{`
        .hero-h1 { font-size: 96px; font-weight: 900; }

        @media (max-width: 768px) {
          .hero-h1 { font-size: 52px; }
          .hero-main { min-height: 100svh !important; padding-top: 60px !important; padding-bottom: 80px !important; }
          .hero-content-inner { padding: 0 16px !important; }
          .hero-subtitle { font-size: 17px !important; margin-bottom: 24px !important; }
          .hero-features { gap: 8px !important; }
        }
      `}</style>
    </section>
  );
}
