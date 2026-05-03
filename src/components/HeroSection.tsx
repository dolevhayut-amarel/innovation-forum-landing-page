"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

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

      {/* Overlay: desktop = right-side dark, mobile = full dark */}
      <div className="absolute inset-0 hero-overlay" style={{ zIndex: 1 }} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: 120, background: "linear-gradient(to top, #05081a 0%, transparent 100%)", zIndex: 2 }} />

      {/* ── Content ── */}
      <div
        className="relative flex items-center hero-content-wrap"
        style={{ minHeight: "100vh", zIndex: 5, maxWidth: "1240px", margin: "0 auto", padding: "0 40px" }}
      >
        {/* Right column — text */}
        <div className="flex flex-col hero-text-col" style={{ maxWidth: "520px", width: "100%", paddingTop: "60px", paddingBottom: "100px" }}>

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
              קול קורא — מוזמנים להירשם כעת
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="hero-h1"
            style={{ margin: "0 0 20px 0", lineHeight: 1.05, fontWeight: 900, textAlign: "right", direction: "ltr", unicodeBidi: "plaintext" }}
          >
            <span className="hero-headline-orange" style={{
              display: "block",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textAlign: "right",
            }}>
              Make an impact,
            </span>
            <span style={{
              display: "block",
              color: "#ffffff",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textAlign: "right",
              textShadow: "0 0 40px rgba(255,255,255,0.15), 0 0 80px rgba(249,115,22,0.1)",
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

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="hero-btns"
            style={{ display: "flex", marginBottom: "48px" }}
          >
            <motion.a
              href="#brand-statement"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 36px rgba(249,115,22,0.5)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
                color: "#fff", fontWeight: 700, fontSize: "15px",
                padding: "14px 28px", borderRadius: "10px",
                textDecoration: "none", boxShadow: "0 4px 20px rgba(249,115,22,0.3)",
                whiteSpace: "nowrap",
              }}
            >
              בואו לקרוא עוד
              <ArrowLeft size={16} strokeWidth={2.5} />
            </motion.a>
          </motion.div>


        </div>
        {/* Left column is intentionally empty — background image fills it */}
      </div>

      <ScrollIndicator />

      <style>{`
        .hero-h1 { font-size: 88px; }
        .hero-badge { white-space: nowrap; }

        .hero-headline-orange {
          background: linear-gradient(90deg, #f97316 0%, #ff6b35 30%, #fbbf24 55%, #f97316 80%, #ef4444 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
          filter: drop-shadow(0 0 18px rgba(249,115,22,0.55));
        }

        @keyframes shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        /* Desktop overlay */
        .hero-overlay {
          background: linear-gradient(to left, #05081a 0%, #05081a 35%, rgba(5,8,26,0.75) 55%, rgba(5,8,26,0.2) 75%, transparent 100%);
        }

        @media (max-width: 900px) {
          .hero-h1 { font-size: 56px !important; }
          .hero-text-col { max-width: 100% !important; }
          /* Mobile: darken whole image so text is always readable */
          .hero-overlay {
            background: linear-gradient(to bottom, rgba(5,8,26,0.55) 0%, rgba(5,8,26,0.75) 40%, #05081a 80%) !important;
          }
          .hero-content-wrap {
            padding: 0 24px !important;
            align-items: flex-end !important;
          }
          .hero-text-col {
            padding-top: 0 !important;
            padding-bottom: 60px !important;
          }
          .hero-badge { font-size: 11px !important; }
        }
        @media (max-width: 480px) {
          .hero-h1 { font-size: 44px !important; }
          .hero-btns { flex-direction: column !important; }
          .hero-btns a { justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
