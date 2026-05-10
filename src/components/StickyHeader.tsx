"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 100,
        direction: "rtl",
        background: scrolled ? "rgba(5,8,26,0.82)" : "rgba(5,8,26,0.15)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.35)" : "none",
        transition: "background 0.3s, border-bottom 0.3s, box-shadow 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Logo White.png"
          alt="The How Company"
          style={{ height: "46px", width: "auto", display: "block" }}
        />

        <div style={{ width: "1px", height: "26px", background: "rgba(255,255,255,0.18)", flexShrink: 0 }} />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/aes full logo.png"
          alt="AES"
          style={{ height: "30px", width: "auto", display: "block" }}
        />
      </div>
    </motion.header>
  );
}
