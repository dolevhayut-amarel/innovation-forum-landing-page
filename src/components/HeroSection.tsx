"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";

const stats = [
  { value: "2", label: "פורומים מקבילים" },
  { value: "6–7", label: "מפגשים בסדרה" },
  { value: "100%", label: "פתוח לכל עובד" },
];

function ScrollIndicator() {
  return (
    <motion.button
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      style={{ zIndex: 10, background: "none", border: "none", cursor: "pointer" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })}
      aria-label="גלול למטה"
    >
      <svg width="26" height="40" viewBox="0 0 26 40" fill="none">
        <rect x="1" y="1" width="24" height="38" rx="12" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
        <motion.rect
          x="11" y="7" width="4" height="7" rx="2"
          fill="rgba(255,255,255,0.8)"
          animate={{ y: [7, 15, 7], opacity: [0.9, 0.2, 0.9] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <motion.svg
        width="16" height="20" viewBox="0 0 16 20" fill="none"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M8 1L8 15M8 15L2 9M8 15L14 9" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </motion.button>
  );
}

export function HeroSection() {
  return (
    <section
      className={cn("hero-main relative w-full overflow-hidden")}
      style={{
        background: "#05081a",
        minHeight: "100vh",
      }}
      dir="rtl"
    >
      {/* Background image — right half bleeds in from left */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          zIndex: 0,
        }}
      />

      {/* Overlay: strong dark on right, fades to transparent on left */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to left, #05081a 0%, #05081a 35%, rgba(5,8,26,0.75) 55%, rgba(5,8,26,0.2) 75%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: 120, background: "linear-gradient(to top, #05081a 0%, transparent 100%)", zIndex: 2 }} />

      {/* ── Content ── */}
      <div
        className="relative flex items-center"
        style={{ minHeight: "100vh", zIndex: 5, maxWidth: "1240px", margin: "0 auto", padding: "0 40px" }}
      >
        {/* Right column — text */}
        <div className="flex flex-col hero-text-col" style={{ maxWidth: "520px", width: "100%", paddingTop: "60px", paddingBottom: "60px" }}>

          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "24px" }}
          >
            <span className="hero-badge" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid rgba(249,115,22,0.35)",
              borderRadius: "999px",
              padding: "6px 14px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#f97316",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              background: "rgba(249,115,22,0.08)",
            }}>
              <motion.span
                style={{ width: 7, height: 7, borderRadius: "50%", background: "#f97316", display: "inline-block" }}
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              פורום חדשנות 2026 — אמרל
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="hero-h1"
            style={{ margin: "0 0 20px 0", lineHeight: 1.0, fontWeight: 900, textAlign: "right" }}
          >
            <span style={{
              display: "block",
              background: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "0.55em",
              fontWeight: 800,
              lineHeight: 1.2,
              textTransform: "none",
              letterSpacing: "-0.01em",
            }}>
              Make an impact,
            </span>
            <span style={{
              display: "block",
              color: "#ffffff",
              fontSize: "0.55em",
              fontWeight: 800,
              lineHeight: 1.2,
              textTransform: "none",
              letterSpacing: "-0.01em",
            }}>
              for real!
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            style={{
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
              margin: "0 0 36px 0",
              textAlign: "right",
            }}
          >
            מנגנון ארגוני מובנה להצפת רעיונות, פיתוח פתרונות ושיפור מתמיד של תהליכים — פתוח לכל עובד ומנהל באמרל.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="hero-btns"
            style={{ display: "flex", gap: "12px", flexDirection: "row", marginBottom: "48px" }}
          >
            <motion.a
              href="#footer-contact"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 36px rgba(249,115,22,0.5)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
                color: "#fff", fontWeight: 700, fontSize: "15px",
                padding: "14px 26px", borderRadius: "10px",
                textDecoration: "none", boxShadow: "0 4px 20px rgba(249,115,22,0.3)",
                whiteSpace: "nowrap",
              }}
            >
              הצטרפו עכשיו
              <ArrowLeft size={16} strokeWidth={2.5} />
            </motion.a>

            <motion.a
              href="#brand-statement"
              whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "transparent",
                color: "#fff", fontWeight: 600, fontSize: "15px",
                padding: "14px 22px", borderRadius: "10px",
                textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)", whiteSpace: "nowrap",
                transition: "border-color 0.2s",
              }}
            >
              <Play size={14} fill="white" strokeWidth={0} />
              למד עוד
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            style={{
              display: "flex",
              gap: "0",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "28px",
            }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{
                flex: 1,
                textAlign: "center",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                padding: "0 16px",
              }}>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "#f97316", lineHeight: 1.1, marginBottom: "4px" }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
        {/* Left column is intentionally empty — background image fills it */}
      </div>

      <ScrollIndicator />

      <style>{`
        .hero-h1 { font-size: 86px; }
        .hero-badge { white-space: nowrap; }

        @media (max-width: 900px) {
          .hero-h1 { font-size: 58px !important; }
          .hero-text-col { max-width: 100% !important; }
        }
        @media (max-width: 640px) {
          .hero-h1 { font-size: 44px !important; }
          .hero-btns { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
