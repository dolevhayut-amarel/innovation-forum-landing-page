"use client";

import { cn } from "@/lib/utils";
import { Bot, Workflow, Star } from "lucide-react";
import { motion } from "framer-motion";

const outcomes = [
  {
    forum: "פורום חדשנות טכנולוגית",
    color: "#f97316",
    splash: "rgba(249,115,22,0.09)",
    Icon: Bot,
    tagline: "AI ככלי עבודה יומיומי",
    deliverables: [
      "בניית Use Cases ארגוניים מבוססי AI",
      "אוטומציות בתהליכי עבודה",
      "כלים לניתוח מידע ושיפור שירות",
      "שיתוף Best Practices בין חטיבות",
      "הטמעת כלים ותהליכים חדשניים",
    ],
  },
  {
    forum: "פורום חדשנות תהליכית",
    color: "#2a5377",
    splash: "rgba(42,83,119,0.09)",
    Icon: Workflow,
    tagline: "שיפור תהליכים מהשטח",
    deliverables: [
      "קיצור תהליכים תפעוליים בחטיבות",
      "שיפור תהליכי Onboarding",
      "שיפור ממשקי עבודה בין מחלקות",
      "אוטומציה של תהליכים ידניים",
      "חדשנות בסינרגיה בין החטיבות",
    ],
  },
  {
    forum: "מה תרוויחו?",
    color: "#f97316",
    splash: "rgba(249,115,22,0.09)",
    Icon: Star,
    tagline: "ערך אישי ומקצועי",
    deliverables: [
      "הכשרות ממנטורים ומומחים מהתעשייה",
      "הכרות עם עובדים ומנהלים מכל החטיבות",
      "פיתוח כישורי חדשנות ויזמות",
      "תרומה אמיתית לארגון שאתם חלק ממנו",
      "גאווה בתוצרים שהובלתם מרעיון למציאות",
    ],
  },
];

const view = { once: true, amount: 0.15 } as const;
const hidden = { opacity: 0, y: 36 };
const show = { opacity: 1, y: 0 };

export function TestimonialsSection() {
  return (
    <section
      className={cn("w-full")}
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #eef3f8 50%, #ffffff 100%)",
        padding: "100px 0",
        direction: "rtl",
      }}
    >
      <motion.h2
        initial={hidden}
        whileInView={show}
        viewport={view}
        transition={{ duration: 0.55 }}
        style={{
          fontSize: "45px",
          fontWeight: 900,
          color: "#0f172a",
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        מה הפורום מייצר?
      </motion.h2>

      <motion.p
        initial={hidden}
        whileInView={show}
        viewport={view}
        transition={{ duration: 0.55, delay: 0.1 }}
        style={{
          fontSize: "20px",
          textAlign: "center",
          marginBottom: "50px",
          color: "#0f172a",
        }}
      >
        תוצרים מדידים שמשנים את הארגון — לא רק שיח, אלא שינוי אמיתי.
      </motion.p>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
        className="testimonials-grid"
      >
        {outcomes.map((item, i) => (
          <motion.div
            key={item.forum}
            initial={hidden}
            whileInView={show}
            viewport={view}
            transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
            style={{
              background: `radial-gradient(circle at top right, ${item.splash} 0%, #ffffff 55%)`,
              borderRadius: "16px",
              padding: "32px 24px",
              border: `1px solid ${item.color}22`,
              boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "12px",
                backgroundColor: item.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              <item.Icon size={24} color="#ffffff" strokeWidth={1.75} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: item.color, marginBottom: "8px" }}>
              {item.forum}
            </h3>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: item.color,
                backgroundColor: item.color + "15",
                borderRadius: "50px",
                padding: "4px 12px",
                display: "inline-block",
                marginBottom: "20px",
              }}
            >
              {item.tagline}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {item.deliverables.map((d) => (
                <li
                  key={d}
                  style={{
                    fontSize: "15px",
                    color: "#444444",
                    lineHeight: 1.6,
                    paddingBottom: "8px",
                    borderBottom: "1px solid #f0f0f0",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                  }}
                >
                  <span style={{ color: item.color, flexShrink: 0, fontWeight: 700 }}>✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={hidden}
        whileInView={show}
        viewport={view}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        <motion.a
          href="#registration"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)",
            color: "#ffffff",
            borderRadius: "50px",
            padding: "14px 40px",
            fontSize: "18px",
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          אני רוצה להשתתף בפורום &gt;&gt;
        </motion.a>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            padding: 0 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
