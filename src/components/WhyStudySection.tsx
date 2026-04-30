import { cn } from "@/lib/utils";
import { Bot, GraduationCap, Mic, Wrench } from "lucide-react";

const benefits = [
  {
    Icon: Bot,
    isOrange: true,
    title: "גישה לכלי AI מתקדמים",
    text: "תעבדו עם כלי AI מובילים עם רישיונות ייעודיים לחברי הפורום — ותצאו עם יכולות שישדרגו כל יום עבודה.",
  },
  {
    Icon: GraduationCap,
    isOrange: false,
    title: "הכשרה מקצועית מהשטח",
    text: "תכנית הכשרה מובנית עם מנטורים ומומחים — AI, אפיון מוצר ומיפוי תהליכים שתוכלו להכניס ישירות לעבודה.",
  },
  {
    Icon: Mic,
    isOrange: true,
    title: "הרצאות העשרה ייחודיות",
    text: "הרצאות ממובילי תעשייה ומומחים בחדשנות וטכנולוגיה — תכנים שלא תמצאו בשום מקום אחר בארגון.",
  },
  {
    Icon: Wrench,
    isOrange: false,
    title: "תוצרים שבאמת מיושמים",
    text: "תפתחו פתרונות אמיתיים לאתגרים שבחרתם — ותראו אותם עוברים מרעיון לשימוש יומיומי בחטיבות.",
  },
];

export function WhyStudySection() {
  return (
    <section className={cn("relative overflow-hidden")}>
      <style>{`
        .why-outer { padding: 100px 0; }
        .why-inner { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
        .why-h2   { font-size: 45px; font-weight: 900; color: #0f172a; text-align: center; margin-bottom: 8px; }
        .why-sub  { font-size: 20px; color: #555; text-align: center; margin-bottom: 60px; }
        .why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }

        @media (max-width: 768px) {
          .why-outer { padding: 60px 0; }
          .why-inner { padding: 0 20px; }
          .why-h2   { font-size: 28px; }
          .why-sub  { font-size: 16px; margin-bottom: 32px; }
          .why-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>

      <div className="why-outer" style={{ backgroundColor: "#ffffff", direction: "rtl" }}>
        <div className="why-inner">
          <h2 className="why-h2">מה תרוויחו מהפורום?</h2>
          <p className="why-sub">הצטרפות לפורום פותחת בפניכם הזדמנות מקצועית ייחודית.</p>

          <div className="why-grid">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: 20,
                  direction: "rtl",
                  backgroundColor: "#f8fafc",
                  borderRadius: 16,
                  padding: "24px 20px",
                  border: "1px solid #e5e7eb",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "12px",
                    background: benefit.isOrange
                      ? "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)"
                      : "#2a5377",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <benefit.Icon size={24} color="#ffffff" strokeWidth={1.75} />
                </div>
                <div>
                  <p style={{ fontSize: 19, fontWeight: 700, color: "#0f172a", marginBottom: 6, textAlign: "right" }}>
                    {benefit.title}
                  </p>
                  <p style={{ fontSize: 15, color: "#555", lineHeight: 1.65, textAlign: "right" }}>
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
