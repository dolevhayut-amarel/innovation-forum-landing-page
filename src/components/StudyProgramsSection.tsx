"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { REGISTRATION_CLOSED } from "@/lib/config";

interface ProgramCard {
  plusColor: string;
  title: string;
  text: string;
}

const programCards: ProgramCard[] = [
  {
    plusColor: "#f97316",
    title: "עבודה מעשית ותוצרים אמיתיים",
    text: "כל מפגש מניב תוצרים מוחשיים - Use Cases, אוטומציות וכלים שנכנסים ישירות לשימוש בחטיבות. לא רק שיח רעיוני, אלא פתרונות שמיושמים.",
  },
  {
    plusColor: "#2a5377",
    title: "הכשרות מקצועיות מהשטח",
    text: "סדרת הדרכות מובנית ישירות ממנטורים, סמנכ\"לים ומומחים מהתעשייה. תכנים בתחומי AI, אפיון מוצר, מיפוי תהליכים וחשיבה יזמית.",
  },
  {
    plusColor: "#f97316",
    title: "שיתוף ידע בין-חטיבתי",
    text: "כינוס עובדים ומנהלים מכל החטיבות לחשיבה משותפת. שני הפורומים פועלים במקביל ומחזקים שיתוף Best Practices בכל הארגון.",
  },
];

const view = { once: true, amount: 0.1 } as const;
const hidden = { opacity: 0, y: 32 };
const show = { opacity: 1, y: 0 };

export function StudyProgramsSection() {
  const router = useRouter();
  const [forum, setForum] = useState("");

  return (
    <>
      {/* ── Section 1: What you get — light theme ── */}
      <section style={{ background: "#ffffff", padding: "70px 10px 80px", direction: "rtl" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
          <motion.h2
            className="study-programs-h2"
            initial={hidden}
            whileInView={show}
            viewport={view}
            transition={{ duration: 0.55 }}
            style={{ fontSize: "45px", fontWeight: 900, color: "#0f172a", textAlign: "center", marginBottom: "8px" }}
          >
            מה מקבלים בפורום?
          </motion.h2>

          <motion.p
            className="study-programs-sub"
            initial={hidden}
            whileInView={show}
            viewport={view}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{ fontSize: "20px", color: "#555", textAlign: "center", marginBottom: "56px" }}
          >
            6-7 מפגשים שמניבים תוצרים אמיתיים ומשנים את הארגון
          </motion.p>

          <div className="study-programs-boxes">
            {programCards.map((card, index) => (
              <motion.div
                key={index}
                className="study-programs-box"
                initial={hidden}
                whileInView={show}
                viewport={view}
                transition={{ duration: 0.5, delay: 0.05 + index * 0.1 }}
                style={{
                  background: "#f8fafc",
                  border: `1px solid ${card.plusColor}22`,
                  borderRadius: "16px",
                  padding: "28px 28px 24px",
                  direction: "rtl",
                  position: "relative",
                  marginTop: "28px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: card.plusColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "32px",
                    fontWeight: 900,
                    color: "#ffffff",
                    marginBottom: "16px",
                    marginTop: "-56px",
                  }}
                >
                  +
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#0f172a", marginBottom: "10px", textAlign: "right" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.7, textAlign: "right", margin: 0 }}>
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Registration form — dark theme ── */}
      <section
        id="registration"
        style={{
          background: "linear-gradient(160deg, #326a9e 0%, #2a5377 40%, #1e3252 100%)",
          padding: "80px 10px 80px",
          direction: "rtl",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px" }}>
          {REGISTRATION_CLOSED && (
            <motion.div
              initial={hidden}
              whileInView={show}
              viewport={view}
              transition={{ duration: 0.45 }}
              style={{
                background: "rgba(249,115,22,0.12)",
                border: "1px solid rgba(249,115,22,0.45)",
                borderRadius: "14px",
                padding: "18px 24px",
                textAlign: "center",
                marginBottom: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontSize: "22px" }}>🔒</span>
              <span style={{ fontSize: "17px", fontWeight: 700, color: "#fbbf7a" }}>
                ההרשמה נסגרה — תודה לכל מי שנרשם!
              </span>
            </motion.div>
          )}

          <motion.p
            initial={hidden}
            whileInView={show}
            viewport={view}
            transition={{ duration: 0.55 }}
            style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", textAlign: "center", marginBottom: "8px" }}
          >
            {REGISTRATION_CLOSED
              ? <span>ההרשמה לפורומי החדשנות <span style={{ color: "#f97316" }}>נסגרה</span></span>
              : <>עשרות עובדים ומנהלים מכל החטיבות כבר נרשמו —{" "}<span style={{ color: "#f97316" }}>עכשיו תורכם</span></>
            }
          </motion.p>
          <motion.p
            initial={hidden}
            whileInView={show}
            viewport={view}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", textAlign: "center", marginBottom: "40px" }}
          >
            {REGISTRATION_CLOSED
              ? "נשמח לראותכם בסבב הבא"
              : "השאירו פרטים ונחזור אליכם עם כל המידע"
            }
          </motion.p>

          <motion.form
            initial={hidden}
            whileInView={show}
            viewport={view}
            transition={{ duration: 0.55, delay: 0.15 }}
            onSubmit={(e) => {
              e.preventDefault();
              if (REGISTRATION_CLOSED) return;
              const fd = new FormData(e.currentTarget);
              sessionStorage.setItem("forum_form", JSON.stringify({
                name: fd.get("firstname") ?? "",
                division: fd.get("division") ?? "",
                phone: fd.get("phone") ?? "",
                email: fd.get("email") ?? "",
                forum: fd.get("forum") ?? "",
                agreed: (e.currentTarget.querySelector('input[name="gdpr"]') as HTMLInputElement)?.checked ?? false,
                source: "registration",
              }));
              router.push("/questionnaire");
            }}
            className={cn("flex flex-col gap-3")}
            style={{ direction: "rtl", opacity: REGISTRATION_CLOSED ? 0.5 : 1, pointerEvents: REGISTRATION_CLOSED ? "none" : "auto" }}
          >
            <div className="form-row-2">
              <input type="text" name="firstname" placeholder="שם מלא" className="study-input" style={inputStyle} disabled={REGISTRATION_CLOSED} />
              <input type="text" name="division" placeholder="חטיבה / מחלקה" className="study-input" style={inputStyle} disabled={REGISTRATION_CLOSED} />
            </div>
            <div className="form-row-2">
              <input type="tel" name="phone" placeholder="טלפון נייד" className="study-input" style={inputStyle} disabled={REGISTRATION_CLOSED} />
              <input type="email" name="email" placeholder="כתובת מייל" className="study-input" style={inputStyle} disabled={REGISTRATION_CLOSED} />
            </div>
            <select
              name="forum"
              className="study-input"
              style={{ ...inputStyle, appearance: "none" }}
              value={forum}
              onChange={(e) => setForum(e.target.value)}
              disabled={REGISTRATION_CLOSED}
            >
              <option value="">לאיזה פורום אני מתעניין/ת?</option>
              <option value="tech">פורום חדשנות טכנולוגית (AI)</option>
              <option value="process">פורום חדשנות תהליכית</option>
            </select>

            {forum === "tech" && (
              <div style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(249,115,22,0.4)",
                borderRadius: "10px",
                padding: "10px 14px",
                fontSize: "12px",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.6,
                direction: "rtl",
              }}>
                <strong style={{ color: "#f97316" }}>שימו לב: </strong>
                הצטרפות לפורום מחייבת התחייבות להמשך עבודה באמרל לשנה מתום הקורס, שכן מדובר בהכשרה ייחודית שהארגון משקיע בה משאבים רבים.
              </div>
            )}

            <label style={{
              fontSize: "14px",
              color: "#ffffff",
              direction: "rtl",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: REGISTRATION_CLOSED ? "not-allowed" : "pointer",
            }}>
              <input type="checkbox" name="gdpr" defaultChecked disabled={REGISTRATION_CLOSED} />
              <span>אני מאשר/ת קבלת עדכונים מפורום החדשנות של אמרל</span>
            </label>

            <motion.button
              type="submit"
              disabled={REGISTRATION_CLOSED}
              style={{
                background: REGISTRATION_CLOSED
                  ? "rgba(255,255,255,0.12)"
                  : "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)",
                color: REGISTRATION_CLOSED ? "rgba(255,255,255,0.4)" : "#ffffff",
                borderRadius: "50px",
                padding: "16px 30px",
                fontSize: "18px",
                fontWeight: 700,
                border: REGISTRATION_CLOSED ? "1px solid rgba(255,255,255,0.18)" : "none",
                cursor: REGISTRATION_CLOSED ? "not-allowed" : "pointer",
                width: "100%",
                textAlign: "center",
                marginTop: "4px",
              }}
            >
              {REGISTRATION_CLOSED ? "🔒 ההרשמה נסגרה" : "אני רוצה להצטרף לפורום >>"}
            </motion.button>
          </motion.form>
        </div>
      </section>

      <style>{`
        .study-input::placeholder { color: rgba(42, 83, 119, 0.55); }
        .study-input option { background-color: #ffffff; color: #2a5377; }
        .study-programs-boxes {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 0;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 768px) {
          .study-programs-h2 { font-size: 28px !important; }
          .study-programs-sub { font-size: 16px !important; }
          .study-programs-boxes { grid-template-columns: 1fr; }
          .form-row-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

const inputStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid #2a5377",
  borderRadius: "50px",
  padding: "14px 20px",
  fontSize: "16px",
  color: "#2a5377",
  width: "100%",
  outline: "none",
  direction: "rtl",
};
