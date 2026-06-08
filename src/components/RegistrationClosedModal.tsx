"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { REGISTRATION_CLOSED } from "@/lib/config";

export function RegistrationClosedModal() {
  const [open, setOpen] = useState(REGISTRATION_CLOSED);

  if (!REGISTRATION_CLOSED) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(160deg, #1e3252 0%, #0f172a 100%)",
              border: "1px solid rgba(249,115,22,0.35)",
              borderRadius: "24px",
              padding: "48px 40px 40px",
              maxWidth: "480px",
              width: "100%",
              textAlign: "center",
              direction: "rtl",
              position: "relative",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(249,115,22,0.1)",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                background: "rgba(255,255,255,0.08)",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                cursor: "pointer",
                color: "rgba(255,255,255,0.5)",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
              }}
              aria-label="סגור"
            >
              ✕
            </button>

            {/* Icon */}
            <div style={{ fontSize: "52px", marginBottom: "16px" }}>🔒</div>

            {/* Title */}
            <h2
              style={{
                fontSize: "clamp(24px, 5vw, 32px)",
                fontWeight: 900,
                color: "#ffffff",
                marginBottom: "12px",
                lineHeight: 1.2,
              }}
            >
              ההרשמה נסגרה
            </h2>

            {/* Body */}
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                marginBottom: "32px",
              }}
            >
              תודה לכל מי שנרשם! ההרשמה לפורומי החדשנות של אמרל{" "}
              <strong style={{ color: "#f97316" }}>נסגרה</strong>.
              <br />
              נשמח לראותכם בסבב הבא.
            </p>

            {/* CTA */}
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)",
                color: "#ffffff",
                border: "none",
                borderRadius: "50px",
                padding: "14px 36px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                width: "100%",
              }}
            >
              הבנתי, תודה
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
