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
    backgroundColor: "#0c1222",
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
          backgroundColor: "#0c1222",
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
            background-color: #0c1222;
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
                  marginBottom: "20px",
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

              <button
                type="submit"
                style={{
                  backgroundColor: "#f97316",
                  color: "#0f172a",
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
          backgroundColor: "#0f172a",
          padding: "24px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          direction: "rtl",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <Image
            src="/images/logo-white.png"
            alt="Amarel Logo"
            width={140}
            height={40}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div style={{ flex: 1 }} />

        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <span style={{ color: "#ffffff", fontWeight: 700, fontSize: "15px" }}>
            אמרל בע״מ
          </span>
          <span style={{ color: "#ffffff", fontSize: "15px" }}>innovation@amarel.net</span>
          <span style={{ color: "#aaaaaa", fontSize: "13px", maxWidth: "340px" }}>
            פורום חדשנות Q2 2026 — נכתב ע"י קרן גטלובסקי, דולב חיוט ומעיין כבל
          </span>
        </div>
      </footer>

      <div
        style={{
          backgroundColor: "#0f172a",
          borderTop: "1px solid #2a2a2a",
          padding: "12px 40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
          direction: "rtl",
        }}
      >
        <a href="#" style={{ color: "#ffffff", fontSize: "14px", textDecoration: "none" }}>
          מדיניות פרטיות
        </a>
        <span style={{ color: "#555555" }}>|</span>
        <a href="#" style={{ color: "#ffffff", fontSize: "14px", textDecoration: "none" }}>
          הצהרת נגישות
        </a>
      </div>
    </>
  );
}
