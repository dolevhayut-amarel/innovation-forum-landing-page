"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "1 / 1", background: "#05081a" }}
      dir="rtl"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-bg-new.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* Content — CTA pinned to bottom-center */}
      <div
        className="relative flex flex-col items-center justify-end text-center"
        style={{
          height: "100%",
          zIndex: 2,
          padding: "0 24px 6%",
        }}
      >
        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          <motion.button
            onClick={() => document.getElementById("brand-statement")?.scrollIntoView({ behavior: "smooth" })}
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
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 24px rgba(249,115,22,0.35)",
            }}
          >
            בואו לקרוא עוד
            <ArrowLeft size={18} strokeWidth={2.5} />
          </motion.button>
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


    </section>
  );
}
