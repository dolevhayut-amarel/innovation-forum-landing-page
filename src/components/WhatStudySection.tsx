import { cn } from "@/lib/utils";

const meetings = [
  {
    number: "מפגש 1",
    title: "פתיחה וחשיבה יצירתית",
    text: "היכרות בין-חטיבתית, יישור קו על מטרות הפורום, הרצאה חיצונית בנושא חשיבה יצירתית ואבחון צרכים ארגוניים.",
  },
  {
    number: "מפגש 2",
    title: "Marketplace של אתגרים",
    text: "כל משתתף מציג צרכים מחטיבתו. תיעדוף אסטרטגי עם מנטורים — ופיצול פנימי לעבודה לפי מסלול (AI / תהליכי).",
  },
  {
    number: "מפגש 3+",
    title: "עבודה מעשית בקבוצות",
    text: "שני הפורומים מתכנסים יחד עם פיצול פנימי. כל מסלול מעמיק כלים ומתחיל לאפיין פתרונות אמיתיים לאתגרי החטיבות.",
  },
  {
    number: "מפגש אמצע",
    title: "הצגה לסמנכ\"לים",
    text: "במפגש הרביעי מוצג מה נעשה עד כה במליאה. הסמנכ\"לים נותנים משוב ומכוונים את הפורומים לתוצאות עסקיות.",
  },
  {
    number: "מפגש סיום",
    title: "הצגת תוצרים סופיים",
    text: "כל קבוצה מציגה את התוצר שפיתחה. הכלים, האוטומציות והתהליכים שנבנו נכנסים לתכנית הטמעה בחטיבות.",
  },
  {
    number: "לוח זמנים",
    title: "יוני – דצמבר 2026",
    text: "6-7 מפגשים, אחת לשבועיים, שלוש שעות כל מפגש. כיסוי 100% חטיבתי עם ייצוג מכל מחלקה בארגון.",
  },
];

export function WhatStudySection() {
  return (
    <section
      className={cn("relative")}
      style={{
        backgroundColor: "#8364FF",
        padding: "100px 40px",
        direction: "rtl",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "45px",
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "right",
            marginBottom: "8px",
          }}
        >
          מבנה המפגשים
        </h2>
        <p
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.85)",
            textAlign: "right",
            marginBottom: "40px",
          }}
        >
          סדרה מובנית של 6-7 מפגשים שמובילה מרעיון לתוצר מוטמע
        </p>

        <div
          className="what-study-boxes"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          <style>{`
            @media (max-width: 1024px) {
              .what-study-boxes {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
            @media (max-width: 480px) {
              .what-study-boxes {
                grid-template-columns: repeat(1, 1fr) !important;
              }
            }
          `}</style>

          {meetings.map((meeting) => (
            <div
              key={meeting.number}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                direction: "rtl",
                textAlign: "right",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#7D69FF",
                  backgroundColor: "#f0edff",
                  borderRadius: "50px",
                  padding: "4px 12px",
                  display: "inline-block",
                  marginBottom: "12px",
                  width: "fit-content",
                }}
              >
                {meeting.number}
              </p>

              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#131316",
                  marginBottom: "10px",
                }}
              >
                {meeting.title}
              </p>

              <p
                style={{
                  fontSize: "14px",
                  color: "#444444",
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                {meeting.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
