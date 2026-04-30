"use client";

import { cn } from "@/lib/utils";

interface ProgramCard {
  plusColor: string;
  title: string;
  text: string;
}

const programCards: ProgramCard[] = [
  {
    plusColor: "#85E577",
    title: "עבודה מעשית ותוצרים אמיתיים",
    text: "כל מפגש מניב תוצרים מוחשיים — Use Cases, אוטומציות וכלים שנכנסים ישירות לשימוש בחטיבות. לא רק שיח רעיוני, אלא פתרונות שמיושמים.",
  },
  {
    plusColor: "#7D69FF",
    title: "הכשרות מקצועיות מהשטח",
    text: "סדרת הדרכות מובנית ישירות ממנטורים, סמנכ\"לים ומומחים מהתעשייה. תכנים בתחומי AI, אפיון מוצר, מיפוי תהליכים וחשיבה יזמית.",
  },
  {
    plusColor: "#85E577",
    title: "שיתוף ידע בין-חטיבתי",
    text: "כינוס עובדים ומנהלים מכל החטיבות לחשיבה משותפת. שני הפורומים פועלים במקביל ומחזקים שיתוף Best Practices בכל הארגון.",
  },
];

const inputStyle: React.CSSProperties = {
  backgroundColor: "#221C4A",
  border: "1px solid #ffffff",
  borderRadius: "50px",
  padding: "14px 20px",
  fontSize: "18px",
  color: "#ffffff",
  width: "100%",
  outline: "none",
  direction: "rtl",
};

export function StudyProgramsSection() {
  return (
    <section
      style={{
        backgroundColor: "#F1F2ED",
        padding: "80px 10px 60px",
        direction: "rtl",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
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
          מה מקבלים בפורום?
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#131316",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          6-7 מפגשים שמניבים תוצרים אמיתיים ומשנים את הארגון
        </p>

        <div className="study-programs-boxes">
          {programCards.map((card, index) => (
            <div
              key={index}
              className="study-programs-box"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "28px 28px 24px",
                direction: "rtl",
                position: "relative",
                marginTop: "28px",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: card.plusColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  fontWeight: 900,
                  color: "#ffffff",
                  marginBottom: "16px",
                  marginTop: "-56px",
                }}
              >
                +
              </div>

              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#131316",
                  marginBottom: "12px",
                  textAlign: "right",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontSize: "16px",
                  color: "#444444",
                  lineHeight: 1.6,
                  textAlign: "right",
                }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className={cn("study-programs-bottom")}>
          <div
            style={{
              flex: 1,
              direction: "rtl",
            }}
          >
            <p
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#131316",
              }}
            >
              עשרות עובדים ומנהלים מכל החטיבות כבר נרשמו —{" "}
              <span style={{ color: "#7D69FF" }}>עכשיו תורכם</span>
            </p>
          </div>

          <div style={{ flex: 1 }} id="registration">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
              style={{ direction: "rtl" }}
            >
              <input
                type="text"
                name="firstname"
                placeholder="שם מלא"
                className="study-input"
                style={inputStyle}
              />

              <input
                type="text"
                name="division"
                placeholder="חטיבה / מחלקה"
                className="study-input"
                style={inputStyle}
              />

              <input
                type="tel"
                name="phone"
                placeholder="טלפון נייד"
                className="study-input"
                style={inputStyle}
              />

              <input
                type="email"
                name="email"
                placeholder="כתובת מייל"
                className="study-input"
                style={inputStyle}
              />

              <select
                name="forum"
                className="study-input"
                style={{ ...inputStyle, appearance: "none" }}
              >
                <option value="">לאיזה פורום אני מתעניין/ת?</option>
                <option value="tech">פורום חדשנות טכנולוגית (AI)</option>
                <option value="process">פורום חדשנות תהליכית</option>
                <option value="both">שניהם — תחליטו בשבילי</option>
              </select>

              <label
                style={{
                  fontSize: "14px",
                  color: "#131316",
                  direction: "rtl",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "16px",
                  cursor: "pointer",
                }}
              >
                <input type="checkbox" name="gdpr" defaultChecked />
                <span>אני מאשר/ת קבלת עדכונים מפורום החדשנות של אמרל</span>
              </label>

              <button
                type="submit"
                style={{
                  backgroundColor: "#85E577",
                  color: "#131316",
                  borderRadius: "50px",
                  padding: "14px 30px",
                  fontSize: "18px",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                  display: "block",
                  textAlign: "center",
                }}
              >
                אני רוצה להצטרף לפורום &gt;&gt;
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .study-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        .study-input option {
          background-color: #221C4A;
          color: white;
        }

        .study-programs-boxes {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 60px;
        }

        .study-programs-bottom {
          display: flex;
          flex-direction: row;
          gap: 40px;
          align-items: center;
        }

        @media (max-width: 768px) {
          .study-programs-boxes {
            grid-template-columns: 1fr;
          }

          .study-programs-bottom {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
