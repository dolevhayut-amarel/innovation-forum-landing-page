"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh", background: "#05081a" }}
      dir="rtl"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(5,8,26,0.72)", zIndex: 1 }}
      />

      {/* Content — centered column */}
      <div
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          minHeight: "100svh",
          zIndex: 2,
          padding: "80px 24px",
          maxWidth: "760px",
          margin: "0 auto",
          gap: "0",
        }}
      >
        {/* Row 1 — Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "28px" }}
        >
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid rgba(249,115,22,0.4)",
            borderRadius: "999px",
            padding: "7px 16px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#f97316",
            background: "rgba(249,115,22,0.08)",
            letterSpacing: "0.03em",
          }}>
            <motion.span
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#f97316", display: "inline-block", flexShrink: 0 }}
              animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            קול קורא - מוזמנים להירשם כעת
          </span>
        </motion.div>

        {/* Row 2 — Big English headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          style={{
            margin: "0 0 20px 0",
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            direction: "ltr",
          }}
          className="hero-h1"
        >
          <span className="hero-headline-orange">Make an impact,</span>
          <br />
          <span style={{ color: "#fff" }}>for real!</span>
        </motion.h1>

        {/* Row 3 — Hebrew subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          style={{
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.65)",
            margin: "0 0 40px 0",
            maxWidth: "560px",
          }}
        >
          מנגנון ארגוני מובנה להצפת רעיונות, פיתוח פתרונות ושיפור מתמיד של תהליכים - פתוח לכל עובד ומנהל באמרל.
        </motion.p>

        {/* Row 4 — CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          <motion.a
            href="#brand-statement"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 40px rgba(249,115,22,0.55)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "16px",
              padding: "15px 32px",
              borderRadius: "12px",
              textDecoration: "none",
              boxShadow: "0 4px 24px rgba(249,115,22,0.35)",
            }}
          >
            בואו לקרוא עוד
            <ArrowLeft size={18} strokeWidth={2.5} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute flex flex-col items-center gap-1"
        style={{ bottom: "28px", left: "50%", transform: "translateX(-50%)", zIndex: 10, background: "none", border: "none", cursor: "pointer" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })}
        aria-label="גלול למטה"
      >
        <svg width="24" height="38" viewBox="0 0 24 38" fill="none">
          <rect x="1" y="1" width="22" height="36" rx="11" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <motion.rect
            x="10" y="7" width="4" height="6" rx="2"
            fill="rgba(255,255,255,0.7)"
            animate={{ y: [7, 14, 7], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M1 1l6 6 6-6" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.button>

      <style>{`
        .hero-h1 { font-size: clamp(52px, 10vw, 110px); }

        .hero-headline-orange {
          background: linear-gradient(90deg, #f97316 0%, #ff6b35 30%, #fbbf24 55%, #f97316 80%, #ef4444 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
          filter: drop-shadow(0 0 20px rgba(249,115,22,0.5));
        }

        @keyframes shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}
