"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Layers, CalendarDays, Users } from "lucide-react";

const heroFeatures = [
  { Icon: Layers,      title: "שני פורומים\nמקבילים בארגון" },
  { Icon: CalendarDays, title: "6-7 מפגשים\nאחת לשבועיים" },
  { Icon: Users,       title: "פתוח לעובדים\nומנהלים מכל החטיבות" },
];

export function HeroSection() {
  return (
    <section
      className={cn("hero-main relative overflow-hidden flex flex-col justify-end w-full")}
      style={{
        backgroundImage: "url('/images/bg-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: "890px",
      }}
      dir="rtl"
    >
      {/* Man image — absolute, bottom-left */}
      <div
        className="absolute bottom-0 left-0 hidden md:block"
        style={{ zIndex: 1, pointerEvents: "none", height: "85%" }}
      >
        <Image
          src="/images/man.png"
          alt=""
          width={600}
          height={760}
          style={{ height: "100%", width: "auto", objectFit: "contain" }}
          aria-hidden="true"
        />
      </div>

      {/* Bpluses decoration */}
      <div
        className="absolute"
        style={{ bottom: "40px", right: "0", zIndex: 2, pointerEvents: "none", opacity: 0.6 }}
      >
        <Image src="/images/bpluses.png" alt="" width={300} height={300} style={{ objectFit: "contain" }} aria-hidden="true" />
      </div>

      {/* Main content */}
      <div className="hero-content-inner relative mx-auto w-full px-6 pb-10" style={{ maxWidth: "1200px", zIndex: 5 }}>
        <div className="hero-content ml-auto" style={{ maxWidth: "660px" }}>

          <h1
            className="hero-h1 font-black text-right"
            style={{ lineHeight: 1.05, marginBottom: "20px" }}
          >
            <span dir="ltr" style={{ display: "block", background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", textAlign: "right" }}>
              MAKE IT POSSIBLE
            </span>
            <span dir="ltr" style={{ display: "block", color: "#ffffff", fontSize: "0.38em", fontWeight: 700, lineHeight: 1.35, marginTop: "10px", textAlign: "right", letterSpacing: "0.02em" }}>
              YOUR IDEAS. YOUR IMPACT. YOUR FORUM.
            </span>
            <span style={{ display: "block", color: "rgba(255,255,255,0.85)", fontSize: "0.34em", fontWeight: 500, lineHeight: 1.5, marginTop: "8px" }}>
              פורום החדשנות באמרל — ההרשמה פתוחה
            </span>
          </h1>

          <h2
            className="hero-subtitle text-white text-right"
            style={{ fontSize: "28px", fontWeight: 400, lineHeight: 1.4, marginBottom: "30px" }}
          >
            מנגנון ארגוני מובנה להצפת רעיונות, פיתוח פתרונות ושיפור מתמיד של תהליכים.
          </h2>

          {/* Feature icons */}
          <div className="hero-features flex flex-row" style={{ direction: "rtl", marginBottom: "30px" }}>
            {heroFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center" style={{ flex: "1 1 0%" }}>
                <div style={{ marginBottom: "10px", textAlign: "center", width: 56, height: 56, borderRadius: "14px", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                  <feature.Icon size={28} color="#ffffff" strokeWidth={1.5} />
                </div>
                <p className="text-white text-center" style={{ fontSize: "13px", fontWeight: 600, whiteSpace: "pre-line", lineHeight: 1.4 }}>
                  {feature.title}
                </p>
              </div>
            ))}
          </div>

          {/* Form */}
          <section className="hero-form-wrap" style={{
            direction: "rtl",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            borderRadius: "20px",
            padding: "24px",
          }}>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <div className="flex gap-3 flex-col md:flex-row">
                <input type="text" name="firstname" placeholder="שם מלא" className="hero-input" style={{ backgroundColor: "#0c1a2e", border: "1px solid #ffffff", borderRadius: "50px", padding: "14px 20px", fontSize: "18px", color: "#ffffff", width: "100%", outline: "none", direction: "rtl" }} />
                <input type="text" name="division" placeholder="חטיבה / מחלקה" className="hero-input" style={{ backgroundColor: "#0c1a2e", border: "1px solid #ffffff", borderRadius: "50px", padding: "14px 20px", fontSize: "18px", color: "#ffffff", width: "100%", outline: "none", direction: "rtl" }} />
              </div>
              <div className="flex gap-3 flex-col md:flex-row">
                <input type="tel" name="phone" placeholder="טלפון נייד" className="hero-input" style={{ backgroundColor: "#0c1a2e", border: "1px solid #ffffff", borderRadius: "50px", padding: "14px 20px", fontSize: "18px", color: "#ffffff", width: "100%", outline: "none", direction: "rtl" }} />
                <input type="email" name="email" placeholder="כתובת מייל" className="hero-input" style={{ backgroundColor: "#0c1a2e", border: "1px solid #ffffff", borderRadius: "50px", padding: "14px 20px", fontSize: "18px", color: "#ffffff", width: "100%", outline: "none", direction: "rtl" }} />
              </div>
              <select name="forum" className="hero-input" style={{ backgroundColor: "#0c1a2e", border: "1px solid #ffffff", borderRadius: "50px", padding: "14px 20px", fontSize: "18px", color: "#ffffff", width: "100%", outline: "none", direction: "rtl", appearance: "none" }}>
                <option value="">לאיזה פורום אני מתעניין/ת?</option>
                <option value="tech">פורום חדשנות טכנולוגית (AI)</option>
                <option value="process">פורום חדשנות תהליכית</option>
                <option value="both">שניהם — תחליטו בשבילי</option>
              </select>
              <label style={{ fontSize: "14px", color: "#ffffff", direction: "rtl", display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px", cursor: "pointer" }}>
                <input type="checkbox" name="terms" defaultChecked />
                <span>אני מאשר/ת קבלת עדכונים מפורום החדשנות של אמרל</span>
              </label>
              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: "10px", padding: "10px 14px", fontSize: "12px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, direction: "rtl" }}>
                <strong style={{ color: "#f97316" }}>שימו לב: </strong>
                הצטרפות לפורום מחייבת התחייבות להמשך עבודה באמרל לשנה מיום ההצטרפות, שכן מדובר בהכשרה ייחודית שהארגון משקיע בה משאבים רבים.
              </div>
              <button type="submit" style={{ background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)", color: "#ffffff", borderRadius: "50px", padding: "14px 30px", fontSize: "18px", fontWeight: 700, border: "none", cursor: "pointer", width: "100%", display: "block", textAlign: "center" }}>
                אני רוצה להצטרף לפורום &gt;&gt;
              </button>
            </form>
          </section>
        </div>
      </div>

      <style>{`
        .hero-input::placeholder { color: rgba(255, 255, 255, 0.7); }
        .hero-input option { background-color: #0c1a2e; color: white; }
        .hero-h1 { font-size: 100px; font-weight: 900; }

        @media (max-width: 768px) {
          .hero-h1 { font-size: 52px; }
          .hero-main { min-height: 100svh !important; }
          .hero-content-inner { padding: 0 16px 32px !important; }
          .hero-form-wrap { padding: 18px !important; }
          .hero-subtitle { font-size: 20px !important; margin-bottom: 20px !important; }
          .hero-features { margin-bottom: 20px !important; }
        }
      `}</style>
    </section>
  );
}
