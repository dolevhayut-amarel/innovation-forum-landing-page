"use client";

import { motion } from "framer-motion";

const view = { once: true, amount: 0.2 } as const;
const hidden = { opacity: 0, y: 36 };
const show = { opacity: 1, y: 0 };

export function BrandStatement() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "100px 24px",
        direction: "rtl",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* subtle bg decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center", position: "relative" }}>

        {/* FROM IDEA TO IMPACT */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={view}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "36px",
          }}
        >
          <span style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #f97316, #e53e2f)", borderRadius: "2px", display: "inline-block" }} />
          <span
            dir="ltr"
            style={{
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "3px",
              color: "#f97316",
              textTransform: "uppercase" as const,
            }}
          >
            FROM IDEA TO IMPACT
          </span>
          <span style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #e53e2f, #f97316)", borderRadius: "2px", display: "inline-block" }} />
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={hidden}
          whileInView={show}
          viewport={view}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "52px",
            fontWeight: 900,
            color: "#0f172a",
            lineHeight: 1.15,
            marginBottom: "24px",
          }}
          className="brand-h2"
        >
          חדשנות לא קורית במקרה<br />
          <span
            style={{
              background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            היא נוצרת. נבנית. בידיים שלכם.
          </span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={hidden}
          whileInView={show}
          viewport={view}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "20px",
            color: "#475569",
            lineHeight: 1.75,
            maxWidth: "680px",
            margin: "0 auto 48px",
          }}
          className="brand-body"
        >
          פורום החדשנות של אמרל הוא לא עוד ועדה. זה מנגנון אמיתי שבו עובדים ומנהלים נבחרים{" "}
          <strong style={{ color: "#0f172a" }}>מזהים, בונים ומיישמים</strong>{" "}
          — ורעיונות שמתחילים בפגישה הופכים לתהליכים שרצים בארגון.
        </motion.p>

        {/* Two pillars */}
        <motion.div
          initial={hidden}
          whileInView={show}
          viewport={view}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          }}
          className="brand-pillars"
        >
          <div
            style={{
              flex: 1,
              background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)",
              padding: "28px 24px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "28px", fontWeight: 900, color: "#ffffff", marginBottom: "6px" }}>
              פורום טכנולוגי
            </div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>
              AI · Automation · Agents
            </div>
          </div>

          <div
            style={{
              width: "4px",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              position: "relative",
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.22, 1],
                boxShadow: [
                  "0 0 0px 0px rgba(249,115,22,0)",
                  "0 0 20px 8px rgba(249,115,22,0.5)",
                  "0 0 0px 0px rgba(249,115,22,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #f97316, #e53e2f)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                fontWeight: 900,
                color: "#ffffff",
                zIndex: 1,
              }}
            >
              ✦
            </motion.div>
          </div>

          <div
            style={{
              flex: 1,
              background: "linear-gradient(135deg, #326a9e 0%, #1e3a52 100%)",
              padding: "28px 24px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "28px", fontWeight: 900, color: "#ffffff", marginBottom: "6px" }}>
              פורום תהליכי
            </div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>
              חשיבה יזמית · שיפור תהליכים · שינוי ארגוני
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={view}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            fontSize: "14px",
            color: "#94a3b8",
            marginTop: "20px",
          }}
        >
          שני פורומים. עבודה אחת משותפת. תוצאה אחת — ארגון שמתקדם.
        </motion.p>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .brand-h2 { font-size: 32px !important; }
          .brand-body { font-size: 17px !important; }
          .brand-pillars { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
