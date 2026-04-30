import { cn } from "@/lib/utils";
import { Bot, Workflow } from "lucide-react";

const cards = [
  {
    Icon: Bot,
    title: "פורום חדשנות טכנולוגית",
    text: 'להפוך את AI לכלי עבודה יומיומי — בניית "ארגז חול" ארגוני שבו מפתחים תוצרים, אוטומציות וכלים חדשניים.',
    color: "#2a5377",
  },
  {
    Icon: Workflow,
    title: "פורום חדשנות תהליכית",
    text: "לזהות, לשפר ולייעל תהליכים ארגוניים — מיפוי פערים מהשטח ופיתוח פתרונות לשיפור מתמיד.",
    color: "#2a5377",
  },
];

export function LeadsToSuccess() {
  return (
    <section
      className={cn("w-full")}
      style={{ backgroundColor: "#ffffff", padding: "100px 0", direction: "rtl", textAlign: "center" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: "45px", fontWeight: 900, color: "#0f172a", marginBottom: "16px" }}>
          מה זה בכלל פורום חדשנות?
        </h2>
        <p style={{ fontSize: "20px", color: "#0f172a", marginBottom: "48px", lineHeight: 1.6 }}>
          מנגנון ארגוני מובנה שבו עובדים ומנהלים נבחרים מתכנסים כדי להציף רעיונות, לפתח פתרונות ולהניע שיפורים אמיתיים — הן בתחום הטכנולוגיה (AI) והן בתחום התהליכים הארגוניים.
        </p>

        <div
          className="flex flex-col md:flex-row"
          style={{ gap: "24px", justifyContent: "center", marginBottom: "48px" }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                backgroundColor: "#f1f5f9",
                borderRadius: "16px",
                padding: "32px 24px",
                textAlign: "right",
                borderTop: `4px solid ${card.color}`,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "12px",
                  backgroundColor: card.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <card.Icon size={26} color="#ffffff" strokeWidth={1.75} />
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: 700, color: card.color, marginBottom: "12px" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "16px", color: "#444", lineHeight: 1.7 }}>{card.text}</p>
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
    </section>
  );
}
