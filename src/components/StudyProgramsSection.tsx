"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface ProgramCard {
  plusColor: string;
  title: string;
  text: string;
}

const programCards: ProgramCard[] = [
  {
    plusColor: "#f97316",
    title: "עבודה מעשית ותוצרים אמיתיים",
    text: "כל מפגש מניב תוצרים מוחשיים — Use Cases, אוטומציות וכלים שנכנסים ישירות לשימוש בחטיבות. לא רק שיח רעיוני, אלא פתרונות שמיושמים.",
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

const inputStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  border: "1px solid #2a5377",
  borderRadius: "50px",
  padding: "14px 20px",
  fontSize: "18px",
  color: "#2a5377",
  width: "100%",
  outline: "none",
  direction: "rtl",
};

const view = { once: true, amount: 0.1 } as const;
const hidden = { opacity: 0, y: 32 };
const show = { opacity: 1, y: 0 };

export function StudyProgramsSection() {
  const router = useRouter();
  const [forum, setForum] = useState("");
  return (
    <section
      style={{
        background: "linear-gradient(160deg, #326a9e 0%, #2a5377 40%, #1e3252 100%)",
        padding: "80px 10px 60px",
        direction: "rtl",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
        <motion.h2
          className="study-programs-h2"
          initial={hidden}
          whileInView={show}
          viewport={view}
          transition={{ duration: 0.55 }}
          style={{ fontSize: "45px", fontWeight: 900, color: "#ffffff", textAlign: "center", marginBottom: "8px" }}
        >
          מה מקבלים בפורום?
        </motion.h2>

        <motion.p
          className="study-programs-sub"
          initial={hidden}
          whileInView={show}
          viewport={view}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{ fontSize: "20px", color: "rgba(255,255,255,0.8)", textAlign: "center", marginBottom: "50px" }}
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
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "16px",
                padding: "28px 28px 24px",
                direction: "rtl",
                position: "relative",
                marginTop: "28px",
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
              <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#ffffff", marginBottom: "12px", textAlign: "right" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, textAlign: "right" }}>
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={cn("study-programs-bottom")}
          initial={hidden}
          whileInView={show}
          viewport={view}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div style={{ flex: 1, direction: "rtl" }}>
            <p style={{ fontSize: "26px", fontWeight: 700, color: "#ffffff" }}>
              עשרות עובדים ומנהלים מכל החטיבות כבר נרשמו —{" "}
              <span style={{ color: "#f97316" }}>עכשיו תורכם</span>
            </p>
          </div>

          <div style={{ flex: 1 }} id="registration">
            <form onSubmit={(e) => {
              e.preventDefault();
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
            }} className="flex flex-col gap-3" style={{ direction: "rtl" }}>
              <input type="text" name="firstname" placeholder="שם מלא" className="study-input" style={inputStyle} />
              <input type="text" name="division" placeholder="חטיבה / מחלקה" className="study-input" style={inputStyle} />
              <input type="tel" name="phone" placeholder="טלפון נייד" className="study-input" style={inputStyle} />
              <input type="email" name="email" placeholder="כתובת מייל" className="study-input" style={inputStyle} />
              <select name="forum" className="study-input" style={{ ...inputStyle, appearance: "none" }} value={forum} onChange={(e) => setForum(e.target.value)}>
                <option value="">לאיזה פורום אני מתעניין/ת?</option>
                <option value="tech">פורום חדשנות טכנולוגית (AI)</option>
                <option value="process">פורום חדשנות תהליכית</option>
              </select>
              <label style={{ fontSize: "14px", color: "#ffffff", direction: "rtl", display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", cursor: "pointer" }}>
                <input type="checkbox" name="gdpr" defaultChecked />
                <span>אני מאשר/ת קבלת עדכונים מפורום החדשנות של אמרל</span>
              </label>
              {forum === "tech" && (
                <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: "10px", padding: "10px 14px", fontSize: "12px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, direction: "rtl", marginBottom: "12px" }}>
                  <strong style={{ color: "#f97316" }}>שימו לב: </strong>
                  הצטרפות לפורום מחייבת התחייבות להמשך עבודה באמרל לשנה מיום ההצטרפות, שכן מדובר בהכשרה ייחודית שהארגון משקיע בה משאבים רבים.
                </div>
              )}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)",
                  color: "#ffffff",
                  borderRadius: "50px",
                  padding: "14px 30px",
                  fontSize: "18px",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                  display: "block",
                  textAlign: "center",
                }}
              >
                אני רוצה להצטרף לפורום &gt;&gt;
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      <style>{`
        .study-input::placeholder { color: rgba(42, 83, 119, 0.55); }
        .study-input option { background-color: #ffffff; color: #2a5377; }
        .study-programs-boxes {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 60px;
        }
        .study-programs-bottom {
          display: flex;
          flex-direction: row;
          gap: 40px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .study-programs-h2 { font-size: 28px !important; }
          .study-programs-sub { font-size: 16px !important; }
          .study-programs-boxes { grid-template-columns: 1fr; }
          .study-programs-bottom { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
