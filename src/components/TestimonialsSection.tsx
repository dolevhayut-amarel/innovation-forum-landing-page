import { cn } from "@/lib/utils";

const outcomes = [
  {
    forum: "פורום חדשנות טכנולוגית",
    color: "#7D69FF",
    icon: "🔬",
    kpi: "KPI: תוצר AI אחד לכל חטיבה",
    deliverables: [
      "בניית Use Cases ארגוניים מבוססי AI",
      "אוטומציות בתהליכי עבודה",
      "כלים לניתוח מידע ושיפור שירות",
      "שיתוף Best Practices בין חטיבות",
      "הטמעת כלים ותהליכים חדשניים",
    ],
  },
  {
    forum: "פורום חדשנות תהליכית",
    color: "#131316",
    icon: "⚙️",
    kpi: "KPI: קיצור 30%+ בזמן ביצוע תהליך",
    deliverables: [
      "קיצור תהליכים תפעוליים בחטיבות",
      "שיפור תהליכי Onboarding",
      "שיפור ממשקי עבודה בין מחלקות",
      "אוטומציה של תהליכים ידניים",
      "תהליך אחד בסינרגיה עם הפורום הטכנולוגי",
    ],
  },
  {
    forum: "לוח זמנים",
    color: "#7D69FF",
    icon: "📅",
    kpi: "Q4 2026: הצגת תוצרים להנהלה",
    deliverables: [
      "מאי 2026: פרסום קול קורא ופתיחת הרשמה",
      "יוני 2026: מפגש פתיחה ראשון",
      "יולי–ספטמבר: הכשרות ועבודה מעשית",
      "אוקטובר–דצמבר: הטמעה ומדידת KPI",
      "תכנון 2027 על בסיס התובנות",
    ],
  },
];

export function TestimonialsSection() {
  return (
    <section
      className={cn("w-full")}
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f0edff 50%, #ffffff 100%)",
        padding: "100px 0",
        direction: "rtl",
      }}
    >
      <h2
        style={{
          fontSize: "45px",
          fontWeight: 900,
          color: "#131316",
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        מה הפורום מייצר?
      </h2>

      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          marginBottom: "50px",
          color: "#131316",
        }}
      >
        תוצרים מדידים שמשנים את הארגון — לא רק שיח, אלא שינוי אמיתי.
      </p>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
        className="testimonials-grid"
      >
        {outcomes.map((item) => (
          <div
            key={item.forum}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "32px 24px",
              borderTop: `4px solid ${item.color}`,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>{item.icon}</div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: item.color,
                marginBottom: "8px",
              }}
            >
              {item.forum}
            </h3>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: item.color,
                backgroundColor: item.color + "15",
                borderRadius: "50px",
                padding: "4px 12px",
                display: "inline-block",
                marginBottom: "20px",
              }}
            >
              {item.kpi}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {item.deliverables.map((d) => (
                <li
                  key={d}
                  style={{
                    fontSize: "15px",
                    color: "#444444",
                    lineHeight: 1.6,
                    paddingBottom: "8px",
                    borderBottom: "1px solid #f0f0f0",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                  }}
                >
                  <span style={{ color: item.color, flexShrink: 0 }}>✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <a
          href="#registration"
          style={{
            backgroundColor: "#85E577",
            color: "#131316",
            borderRadius: "50px",
            padding: "14px 40px",
            fontSize: "18px",
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          אני רוצה להשתתף בפורום &gt;&gt;
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
