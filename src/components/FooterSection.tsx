"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { REGISTRATION_CLOSED } from "@/lib/config";

export function FooterSection() {
  const [name, setName] = useState("");
  const [division, setDivision] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [forum, setForum] = useState("");
  const [agreed, setAgreed] = useState(false);

  const router = useRouter();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sessionStorage.setItem("forum_form", JSON.stringify({
      name, division, phone, email, forum,
      agreed,
      source: "footer",
    }));
    router.push("/questionnaire");
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

  return (
    <>
      <section
        id="footer-contact"
        data-section="footer-contact"
        style={{
          background: "linear-gradient(160deg, #326a9e 0%, #2a5377 40%, #1e3252 100%)",
          padding: "80px 10px 80px",
          direction: "rtl",
        }}
      >
        <style>{`
          .footer-input::placeholder { color: rgba(42, 83, 119, 0.55); }
          .footer-input option { background-color: #ffffff; color: #2a5377; }
          .footer-form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
          @media (max-width: 768px) { .footer-form-row-2 { grid-template-columns: 1fr; } }
        `}</style>

        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px" }}>
          {REGISTRATION_CLOSED && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
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
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", textAlign: "center", marginBottom: "8px" }}
          >
            {REGISTRATION_CLOSED
              ? <span>ההרשמה לפורומי החדשנות <span style={{ color: "#f97316" }}>נסגרה</span></span>
              : <>עדיין לא נרשמתם? — <span style={{ color: "#f97316" }}>זה הזמן</span></>
            }
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", textAlign: "center", marginBottom: "40px" }}
          >
            {REGISTRATION_CLOSED ? "נשמח לראותכם בסבב הבא" : "השאירו פרטים ונחזור אליכם בהקדם עם כל הפרטים על הרשמה לפורום"}
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            onSubmit={(e) => { e.preventDefault(); if (!REGISTRATION_CLOSED) handleSubmit(e); }}
            className={cn("flex flex-col gap-3")}
            style={{ direction: "rtl", opacity: REGISTRATION_CLOSED ? 0.5 : 1, pointerEvents: REGISTRATION_CLOSED ? "none" : "auto" }}
          >
            <div className="footer-form-row-2">
              <input type="text" placeholder="שם מלא" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} className="footer-input" disabled={REGISTRATION_CLOSED} />
              <input type="text" placeholder="חטיבה / מחלקה" value={division} onChange={(e) => setDivision(e.target.value)} style={inputStyle} className="footer-input" disabled={REGISTRATION_CLOSED} />
            </div>
            <div className="footer-form-row-2">
              <input type="tel" placeholder="טלפון נייד" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} className="footer-input" disabled={REGISTRATION_CLOSED} />
              <input type="email" placeholder="כתובת מייל" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} className="footer-input" disabled={REGISTRATION_CLOSED} />
            </div>
            <select value={forum} onChange={(e) => setForum(e.target.value)} style={{ ...inputStyle, appearance: "none" }} className="footer-input" disabled={REGISTRATION_CLOSED}>
              <option value="">לאיזה פורום אני מתעניין/ת?</option>
              <option value="tech">פורום חדשנות טכנולוגית (AI)</option>
              <option value="process">פורום חדשנות תהליכית</option>
            </select>

            {forum === "tech" && (
              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: "10px", padding: "10px 14px", fontSize: "12px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, direction: "rtl" }}>
                <strong style={{ color: "#f97316" }}>שימו לב: </strong>
                הצטרפות לפורום מחייבת התחייבות להמשך עבודה באמרל לשנה מתום הקורס, שכן מדובר בהכשרה ייחודית שהארגון משקיע בה משאבים רבים.
              </div>
            )}

            <label style={{ fontSize: "14px", color: "#ffffff", direction: "rtl", display: "flex", alignItems: "center", gap: "8px", cursor: REGISTRATION_CLOSED ? "not-allowed" : "pointer" }}>
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} disabled={REGISTRATION_CLOSED} />
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

      <footer
        style={{
          backgroundColor: "#0c1a2e",
          padding: "24px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          direction: "rtl",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.amarel.net/wp-content/uploads/2024/03/Logo_Amarel_white-Orange-1.svg"
          alt="Amarel"
          style={{ height: "40px", width: "auto", objectFit: "contain" }}
        />

        <div style={{ flex: 1 }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "4px", textAlign: "left" }}>
          <span style={{ color: "#ffffff", fontWeight: 700, fontSize: "15px" }}>אמרל בע״מ</span>
          <span style={{ color: "#ffffff", fontSize: "15px" }}>innovation@amarel.net</span>
          <span style={{ color: "#aaaaaa", fontSize: "13px" }}>
            נבנה באהבה על ידי מחלקת חדשנות ♥
          </span>
        </div>
      </footer>
    </>
  );
}
