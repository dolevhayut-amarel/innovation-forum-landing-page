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
    title: "הצגת התקדמות",
    text: "כל קבוצה מציגה את הפתרון שפיתחה בפני שאר המשתתפים — מקבלת פידבק, מחדדת כיוונים ומתכוננת לגרסה הסופית.",
  },
  {
    number: "מפגש סיום",
    title: "הצגת תוצרים סופיים",
    text: "כל קבוצה מציגה את התוצר המוכן. הכלים, האוטומציות והתהליכים שנבנו נכנסים לתכנית הטמעה אמיתית בחטיבות.",
  },
];

export function WhatStudySection() {
  return (
    <section
      className={cn("relative")}
      style={{
        backgroundColor: "#2a5377",
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
                background: "rgba(255, 255, 255, 0.07)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
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
                  color: "#f97316",
                  backgroundColor: "rgba(249, 115, 22, 0.15)",
                  border: "1px solid rgba(249, 115, 22, 0.3)",
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
                  color: "#ffffff",
                  marginBottom: "10px",
                }}
              >
                {meeting.title}
              </p>

              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.7)",
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
