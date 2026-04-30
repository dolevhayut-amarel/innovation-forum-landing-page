import { cn } from "@/lib/utils";
import { Zap, RefreshCw, Lightbulb, Users } from "lucide-react";

const benefits = [
  {
    Icon: Zap,
    iconBg: "#2a5377",
    title: "מינוף AI ושיפור פרודוקטיביות",
    text: "הפורום הטכנולוגי יפתח כלים ויישומים מבוססי AI שייעלו תהליכים בחטיבות ויהפכו את הטכנולוגיה לנכס עבודה יומיומי.",
  },
  {
    Icon: RefreshCw,
    iconBg: "#f97316",
    title: "ייעול תהליכים ארגוניים",
    text: "הפורום התהליכי ימפה פערים ויפתח פתרונות לשיפור תהליכים קיימים — שינוי אמיתי שמורגש בכל יום עבודה.",
  },
  {
    Icon: Lightbulb,
    iconBg: "#2a5377",
    title: "שיתוף ידע ותרבות חדשנות",
    text: "שני הפורומים יחזקו שיתוף Best Practices בין חטיבות ויטמיעו תרבות של יוזמה ולמידה מתמדת בקרב העובדים.",
  },
  {
    Icon: Users,
    iconBg: "#f97316",
    title: "שייכות לארגון",
    text: "השתייכות לפורום יוצרת תחושת גאווה ומחויבות — עובדים ומנהלים נבחרים שותפים לעיצוב עתיד הארגון ומגבירים מעורבות ושימור.",
  },
];

export function WhyStudySection() {
  return (
    <section
      className={cn("relative overflow-hidden")}
      style={{ padding: "100px 0", direction: "rtl", backgroundColor: "#ffffff" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: 45,
            fontWeight: 900,
            color: "#0f172a",
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          למה להצטרף לפורום?
        </h2>
        <p
          style={{
            fontSize: 20,
            color: "#0f172a",
            textAlign: "center",
            marginBottom: 60,
          }}
        >
          כי ביחד נבנה ארגון חדשני ומתקדם יותר.
        </p>

        <div
          className="why-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 32,
          }}
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 20,
                direction: "rtl",
                backgroundColor: "#f1f5f9",
                borderRadius: 16,
                padding: "28px 24px",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "12px",
                  backgroundColor: benefit.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <benefit.Icon size={24} color="#ffffff" strokeWidth={1.75} />
              </div>
              <div>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: 6,
                    textAlign: "right",
                  }}
                >
                  {benefit.title}
                </p>
                <p
                  style={{
                    fontSize: 16,
                    color: "#444444",
                    lineHeight: 1.6,
                    textAlign: "right",
                  }}
                >
                  {benefit.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
