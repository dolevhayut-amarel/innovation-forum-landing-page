import Image from "next/image";
import { cn } from "@/lib/utils";

const courses = [
  {
    icon: "/images/course-icon4.png",
    title: "סייבר ואבטחת מידע",
    text: "קורס הסייבר של HackerU נלמד גם באוניברסיטאות מובילות בעולם, ומשלב התמחות מעשית בהגנה ותקיפה, תרגול בסימולטור מתקדם וכלי AI – כדי שתיכנסו לתעשייה עם ניסיון מהשטח. לא נדרש רקע קודם.",
  },
  {
    icon: "/images/course-icon2.png",
    title: "עיצוב גרפי ו-UX/UI",
    text: "המסלול המלא של HackerU לעיצוב בדיגיטל – משלב התמחות כפולה בעיצוב גרפי וחוויית משתמש, תרגול מעשי, בניית תיק עבודות מנצח ולימוד כלי AI מתקדמים. מסיימים עם יתרון תחרותי אמיתי והכנה לעבודה בתעשייה. לא נדרש רקע קודם.",
  },
  {
    icon: "/images/course-icon1.png",
    title: "מאסטר בשיווק דיגיטלי",
    text: "המסלול המקיף של HackerU לשיווק דיגיטלי מעשי – כולל התמחות ב-3 מקצועות מבוקשים: SEO, PPC וניהול סושיאל, תרגול עם כלים מבוססי AI, פרויקט גמר שידמה עבודה אמיתית בשטח. לא נדרש רקע קודם.",
  },
  {
    icon: "/images/course-icon3.png",
    title: "Data Analyst & BI",
    text: "המסלול המקיף של HackerU למקצועות הדאטה – כולל תרגול מעשי, כלים מתקדמים (SQL, Python, BI, DBT) ועבודה עם טכנולוגיות AI, בהנחיית מומחים מהתעשייה. לא נדרש רקע קודם.",
  },
  {
    icon: "/images/course-icon8.png",
    title: "בדיקות תוכנה QA",
    text: "המסלול של HackerU שמכשיר אתכם לאחד המקצועות הכי נדרשים בהייטק – כולל תרגול Hands-On על פרויקטים אמיתיים, הכנה להסמכת ISTQB, שימוש בכלי AI וליווי עד למציאת עבודה. לא נדרש רקע קודם.",
  },
  {
    icon: "/images/course-icon6.png",
    title: "מאסטר Full Stack",
    text: "המסלול המתקדם של HackerU לפיתוח פולסטאק – כולל התמחות ב-Python, Node.js ו-React, תרגול Hands-On, בניית פרויקטי גמר וכלי AI שיעזרו לכם להשתלב מהר ובביטחון בשוק העבודה. לא נדרש רקע קודם.",
  },
  {
    icon: "/images/course-icon7.png",
    title: "ניהול רשתות תקשורת",
    text: "המסלול המלא שמכין אתכם לשני מקצועות מבוקשים – עם התמחות מעשית ב-Cisco ובענן של Microsoft Azure, הכנה להסמכות רשמיות ותרגול Hands-On בסביבות וירטואליות.",
  },
  {
    icon: "/images/course-icon5.png",
    title: "פיתוח משחקים ואנימציה בתלת מימד",
    text: "המסלול של HackerU לעולם הגיימינג – משלב פיתוח משחקים עם התמחות באנימציה, תרגול מעשי במנועי Unity ו-Unreal, פרויקט גמר מרשים וכלים מבוססי AI. לא נדרש רקע קודם.",
  },
];

export function WhatStudySection() {
  return (
    <section
      className={cn("relative")}
      style={{
        backgroundColor: "#8364FF",
        padding: "100px 110px",
        minHeight: "900px",
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
            marginBottom: "40px",
          }}
        >
          מסלולי הלימוד שלנו
        </h2>

        {/* Grid — 4 cols desktop, 2 cols tablet, 1 col mobile */}
        <div
          className="what-study-boxes"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {/* Responsive overrides via Tailwind (Tailwind v4 arbitrary values) */}
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
              section[data-section="what-study"] {
                padding: 60px 24px !important;
              }
            }
          `}</style>

          {courses.map((course) => (
            <div
              key={course.title}
              className="what-study-box"
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
              {/* Icon */}
              <div
                className="what-study-box__icon"
                style={{ marginBottom: "16px" }}
              >
                <Image
                  src={course.icon}
                  alt={course.title}
                  width={56}
                  height={56}
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Title */}
              <p
                className="what-study-box__title"
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#131316",
                  marginBottom: "10px",
                }}
              >
                {course.title}
              </p>

              {/* Body text */}
              <p
                className="what-study-box__text"
                style={{
                  fontSize: "14px",
                  color: "#444444",
                  lineHeight: 1.6,
                  flex: 1,
                  marginBottom: "16px",
                }}
              >
                {course.text}
              </p>

              {/* CTA button */}
              <a
                href="#"
                className="what-study-box__btn"
                style={{
                  display: "inline-block",
                  backgroundColor: "#85E577",
                  color: "#131316",
                  borderRadius: "50px",
                  padding: "10px 20px",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  textAlign: "center",
                  marginTop: "auto",
                }}
              >
                לפרטים נוספים &gt;&gt;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
