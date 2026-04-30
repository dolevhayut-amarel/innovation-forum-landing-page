import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: "⚡",
    iconBg: "#7D69FF",
    title: "מינוף AI ושיפור פרודוקטיביות",
    text: "הפורום הטכנולוגי יפתח כלים ויישומים מבוססי AI שייעלו תהליכים בחטיבות ויהפכו את הטכנולוגיה לנכס עבודה יומיומי.",
  },
  {
    icon: "🔄",
    iconBg: "#85E577",
    title: "ייעול תהליכים ארגוניים",
    text: "הפורום התהליכי ימפה פערים ויפתח פתרונות לשיפור תהליכים קיימים — עם יעד צמצום של 30%+ בזמן ביצוע.",
  },
  {
    icon: "💡",
    iconBg: "#7D69FF",
    title: "שיתוף ידע ותרבות חדשנות",
    text: "שני הפורומים יחזקו שיתוף Best Practices בין חטיבות ויטמיעו תרבות של יוזמה ולמידה מתמדת בקרב העובדים.",
  },
  {
    icon: "🤝",
    iconBg: "#85E577",
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
            color: "#131316",
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          למה להצטרף לפורום?
        </h2>
        <p
          style={{
            fontSize: 20,
            color: "#131316",
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
                backgroundColor: "#F1F2ED",
                borderRadius: 16,
                padding: "28px 24px",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  backgroundColor: benefit.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  flexShrink: 0,
                }}
              >
                {benefit.icon}
              </div>
              <div>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#131316",
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
