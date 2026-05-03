"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "קול קורא והרשמה",
    text: "ממלאים את הטופס, מציינים לאיזה פורום מתעניינים ומוסיפים פרטים קצרים על הרקע שלכם ומה מושך אתכם ליוזמה.",
    note: "פתוח לכלל עובדי אמרל",
  },
  {
    number: "02",
    title: "סינון ראשוני",
    text: "הצוות יעבור על הבקשות ויצור קשר עם המועמדים. הסינון מתמקד בפתיחות מחשבתית ורצון אמיתי לתרום - לא בידע טכנולוגי.",
    note: "מועמדים שלא נבחרו יקבלו עדיפות בסבבים הבאים",
  },
  {
    number: "03",
    title: "הודעה על קבלה לפורום",
    text: "מי שהתקבל יקבל הודעה רשמית עם כל הפרטים - תאריכי המפגשים, מיקום ומה לצפות למפגש הפתיחה.",
    note: "כ-15 משתתפים לכל פורום",
  },
];

const view = { once: true, amount: 0.15 } as const;
const hidden = { opacity: 0, y: 36 };
const show = { opacity: 1, y: 0 };

export function WhatStudySection() {
  return (
    <section className={cn("relative")}>
      <style>{`
        .process-outer {
          background:
            radial-gradient(ellipse at 85% 15%, rgba(249,115,22,0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 10% 80%, rgba(50,106,158,0.3) 0%, transparent 50%),
            linear-gradient(160deg, #326a9e 0%, #2a5377 40%, #1e3252 100%);
          padding: 100px 40px; direction: rtl;
        }
        .process-h2   { font-size: 45px; font-weight: 900; color: #ffffff; text-align: right; margin-bottom: 8px; }
        .process-sub  { font-size: 20px; color: rgba(255,255,255,0.85); text-align: right; margin-bottom: 48px; }
        .process-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

        @media (max-width: 768px) {
          .process-outer { padding: 60px 20px; }
          .process-h2   { font-size: 28px; }
          .process-sub  { font-size: 16px; margin-bottom: 28px; }
          .process-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="process-outer">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.h2
            className="process-h2"
            initial={hidden}
            whileInView={show}
            viewport={view}
            transition={{ duration: 0.55 }}
          >
            איך מצטרפים?
          </motion.h2>
          <motion.p
            className="process-sub"
            initial={hidden}
            whileInView={show}
            viewport={view}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            תהליך פשוט ומהיר - שלושה שלבים להצטרפות לפורום
          </motion.p>

          <div className="process-grid">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={hidden}
                whileInView={show}
                viewport={view}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "16px",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  direction: "rtl",
                  textAlign: "right",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: "17px",
                      color: "#ffffff",
                      flexShrink: 0,
                    }}
                  >
                    {step.number}
                  </div>
                  <p style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                    {step.title}
                  </p>
                </div>

                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "16px", flex: 1 }}>
                  {step.text}
                </p>

                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#f97316",
                    backgroundColor: "rgba(249,115,22,0.12)",
                    border: "1px solid rgba(249,115,22,0.25)",
                    borderRadius: "8px",
                    padding: "5px 12px",
                    display: "inline-block",
                    width: "fit-content",
                  }}
                >
                  {step.note}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
