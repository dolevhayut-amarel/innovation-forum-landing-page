"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function CtaBar() {
  return (
    <section
      className={cn("w-full")}
      style={{
        background: "linear-gradient(135deg, #326a9e 0%, #2a5377 50%, #1e3a52 100%)",
        padding: "30px 60px",
        direction: "rtl",
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .cta-bar-inner { flex-direction: column !important; text-align: center; }
          .cta-bar-btn   { width: 100% !important; text-align: center !important; }
          .cta-bar-text  { min-width: unset !important; text-align: center !important; }
        }
      `}</style>
      <motion.div
        className="cta-bar-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <p
          className="cta-bar-text"
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#ffffff",
            flex: 1,
            minWidth: 280,
          }}
        >
          הפורומים מחכים לכם — הצטרפו עכשיו לפורום החדשנות של אמרל ועצבו את עתיד הארגון
        </p>
        <motion.a
          href="#registration"
          className="cta-bar-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)",
            color: "#ffffff",
            borderRadius: 50,
            padding: "14px 32px",
            fontSize: 18,
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            flexShrink: 0,
            whiteSpace: "nowrap",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          אני רוצה להצטרף לפורום &gt;&gt;
        </motion.a>
      </motion.div>
    </section>
  );
}
