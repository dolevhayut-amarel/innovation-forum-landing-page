"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function FooterSection() {
  const [name, setName] = useState("");
  const [division, setDivision] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [forum, setForum] = useState("");
  const [agreed, setAgreed] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: "#0c1a2e",
    border: "1px solid #ffffff",
    borderRadius: "50px",
    padding: "14px 20px",
    fontSize: "18px",
    color: "white",
    marginBottom: "16px",
    width: "100%",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <>
      <section
        id="footer-contact"
        data-section="footer-contact"
        style={{
          backgroundImage: "url('/images/footer-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#0c1a2e",
          padding: "100px 0 50px",
          direction: "rtl",
          position: "relative",
          minHeight: "670px",
        }}
      >
        <Image
          src="/images/bpluses.png"
          alt=""
          width={200}
          height={200}
          aria-hidden
          style={{
            position: "absolute",
            top: "40px",
            right: "40px",
            opacity: 0.3,
            pointerEvents: "none",
          }}
        />

        <style>{`
          @media (max-width: 768px) {
            .footer-inner {
              flex-direction: column !important;
              padding: 0 24px !important;
            }
            .footer-form-col {
              max-width: 100% !important;
              width: 100% !important;
            }
          }
          .footer-input::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }
          .footer-input option {
            background-color: #0c1a2e;
            color: white;
          }
        `}</style>

        <div
          className="footer-inner"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "60px",
          }}
        >
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: "50px",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              הצטרפו לפורום החדשנות של אמרל!
            </h2>
            <p
              style={{
                fontSize: "20px",
                color: "rgba(255,255,255,0.9)",
                marginBottom: "32px",
              }}
            >
              השאירו פרטים ונחזור אליכם בהקדם עם כל הפרטים על הרשמה לפורום
            </p>
          </div>

          <div
            className="footer-form-col"
            style={{ flex: 1, maxWidth: "500px" }}
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="שם מלא"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
                className="footer-input"
              />
              <input
                type="text"
                placeholder="חטיבה / מחלקה"
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                style={inputStyle}
                className="footer-input"
              />
              <input
                type="tel"
                placeholder="טלפון נייד"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={inputStyle}
                className="footer-input"
              />
              <input
                type="email"
                placeholder="כתובת מייל"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                className="footer-input"
              />
              <select
                value={forum}
                onChange={(e) => setForum(e.target.value)}
                style={{ ...inputStyle, appearance: "none" }}
                className="footer-input"
              >
                <option value="">לאיזה פורום אני מתעניין/ת?</option>
                <option value="tech">פורום חדשנות טכנולוגית (AI)</option>
                <option value="process">פורום חדשנות תהליכית</option>
                <option value="both">שניהם — תחליטו בשבילי</option>
              </select>

              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  color: "#ffffff",
                  fontSize: "14px",
                  lineHeight: 1.5,
                  marginBottom: "12px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  style={{ marginTop: "2px", flexShrink: 0, cursor: "pointer" }}
                />
                <span>אני מאשר/ת קבלת עדכונים מפורום החדשנות של אמרל</span>
              </label>

              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: "10px", padding: "10px 14px", fontSize: "12px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, direction: "rtl", marginBottom: "16px" }}>
                <strong style={{ color: "#f97316" }}>שימו לב: </strong>
                הצטרפות לפורום מחייבת התחייבות להמשך עבודה באמרל לשנה מיום ההצטרפות, שכן מדובר בהכשרה ייחודית שהארגון משקיע בה משאבים רבים.
              </div>

              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)",
                  color: "#ffffff",
                  borderRadius: "50px",
                  padding: "16px 20px",
                  fontSize: "18px",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                אני רוצה להצטרף לפורום &gt;&gt;
              </button>
            </form>
          </div>
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
