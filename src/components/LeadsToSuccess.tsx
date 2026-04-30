import { cn } from "@/lib/utils";
import { Bot, Workflow } from "lucide-react";

const cards = [
  {
    Icon: Bot,
    badge: "פורום 01",
    title: "פורום חדשנות טכנולוגית",
    audience: "מנהלים ועובדים עם חיבור לטכנולוגיה ועניין ב-AI",
    text: "להפוך את AI לכלי עבודה יומיומי — פיתוח אוטומציות, כלים חכמים וכלי ניתוח שמשנים את אופן העבודה.",
    accent: "#f97316",
    iconBg: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)",
    borderColor: "#f97316",
  },
  {
    Icon: Workflow,
    badge: "פורום 02",
    title: "פורום חדשנות תהליכית",
    audience: "בעלי חשיבה ניהולית ורצון לשפר תהליכים בארגון",
    text: "לזהות, לשפר ולייעל תהליכים ארגוניים — מיפוי פערים מהשטח ופיתוח פתרונות שמשפיעים על כל המחלקות.",
    accent: "#2a5377",
    iconBg: "linear-gradient(135deg, #2a5377 0%, #1e3a52 100%)",
    borderColor: "#2a5377",
  },
];

export function LeadsToSuccess() {
  return (
    <section className={cn("w-full")}>
      <style>{`
        .leads-outer { background-color: #ffffff; padding: 100px 0; direction: rtl; text-align: center; }
        .leads-inner { max-width: 960px; margin: 0 auto; padding: 0 24px; }
        .leads-h2    { font-size: 45px; font-weight: 900; color: #0f172a; margin-bottom: 16px; }
        .leads-sub   { font-size: 20px; color: #555; line-height: 1.6; max-width: 700px; margin: 0 auto 48px; }
        .leads-grid  { display: flex; flex-direction: row; gap: 24px; margin-bottom: 48px; }

        @media (max-width: 768px) {
          .leads-outer { padding: 60px 0; }
          .leads-inner { padding: 0 20px; }
          .leads-h2    { font-size: 28px; }
          .leads-sub   { font-size: 16px; margin-bottom: 32px; }
          .leads-grid  { flex-direction: column; }
        }
      `}</style>

      <div className="leads-outer">
        <div className="leads-inner">
          <h2 className="leads-h2">מה זה בכלל פורום חדשנות?</h2>
          <p className="leads-sub">
            מנגנון ארגוני מובנה שבו עובדים ומנהלים נבחרים מתכנסים כדי להציף רעיונות, לפתח פתרונות ולהניע שיפורים אמיתיים — הן בתחום הטכנולוגיה (AI) והן בתחום התהליכים הארגוניים.
          </p>

          <div className="leads-grid">
            {cards.map((card, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  backgroundColor: "#f8fafc",
                  borderRadius: "20px",
                  padding: "32px 28px",
                  textAlign: "right",
                  borderTop: `5px solid ${card.borderColor}`,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                }}
              >
                {/* Badge */}
                <div style={{ marginBottom: "16px" }}>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase" as const,
                      color: card.accent,
                      backgroundColor: card.accent + "18",
                      borderRadius: "6px",
                      padding: "4px 10px",
                    }}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "14px",
                    background: card.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <card.Icon size={26} color="#ffffff" strokeWidth={1.75} />
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0f172a", marginBottom: "10px" }}>
                  {card.title}
                </h3>

                {/* Audience */}
                <div
                  style={{
                    fontSize: "13px",
                    color: card.accent,
                    fontWeight: 600,
                    backgroundColor: card.accent + "12",
                    borderRadius: "8px",
                    padding: "6px 12px",
                    marginBottom: "16px",
                    display: "inline-block",
                    lineHeight: 1.5,
                  }}
                >
                  מיועד ל: {card.audience}
                </div>

                {/* Description */}
                <p style={{ fontSize: "16px", color: "#555", lineHeight: 1.7 }}>{card.text}</p>
              </div>
            ))}
          </div>

          <a
            href="#registration"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)",
              color: "#ffffff",
              borderRadius: "50px",
              padding: "14px 40px",
              fontSize: "18px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            אני רוצה להצטרף לפורום &gt;&gt;
          </a>
        </div>
      </div>
    </section>
  );
}
