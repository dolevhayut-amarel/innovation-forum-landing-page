import Image from "next/image";
import { cn } from "@/lib/utils";

interface Benefit {
  icon: string;
  title: string;
  text: string;
}

const benefits: Benefit[] = [
  {
    icon: "/images/why-icon1.webp",
    title: "מומחים בהכשרות טכנולוגיות בכל העולם",
    text: "מלמדים 25 שנה במעל ל-30 מדינות ושותפים אסטרטגיים של הבית הלבן בהכשרות סייבר",
  },
  {
    icon: "/images/why-icon2.webp",
    title: "ליווי אישי בדרך לקריירה חדשה",
    text: "לומדים עם המנטורים המובילים בתעשייה עם שיעורי תרגול פרטיים וקבוצתיים",
  },
  {
    icon: "/images/why-icon3.png",
    title: "ליווי מלא להשמה ברישיון משרד העבודה",
    text: "מחלקת השמה ברישיון מס׳ 2301, בשיתוף פעולה עם יותר מ־2,690 חברות כולל הכנה לראיונות, בניית תיק מקצועי וליווי אישי עד למציאת עבודה",
  },
];

export function WhyStudySection() {
  return (
    <section
      className={cn("relative overflow-hidden")}
      style={{ padding: "100px 0 150px", direction: "rtl" }}
    >
      {/* Decorative lines bottom-left */}
      <Image
        src="/images/why-lines2.png"
        alt=""
        width={300}
        height={300}
        aria-hidden
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{ opacity: 0.3, zIndex: 0 }}
      />

      {/* Inner wrapper */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 60,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Right column — text (RTL: visually on the right) */}
        <div
          style={{
            flex: "0 0 58%",
            direction: "rtl",
          }}
        >
          <h2
            style={{
              fontSize: 45,
              fontWeight: 900,
              color: "#131316",
              textAlign: "right",
              marginBottom: 8,
            }}
          >
            ?למה ללמוד דווקא ב-HackerU
          </h2>
          <p
            style={{
              fontSize: 20,
              color: "#131316",
              textAlign: "right",
              marginBottom: 40,
            }}
          >
            כי אנחנו מכשירים אותך לעבודה, לא רק ללימודים.
          </p>

          {/* Benefit boxes */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: 20,
                  direction: "rtl",
                }}
              >
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={56}
                  height={56}
                  style={{
                    width: 56,
                    height: 56,
                    flexShrink: 0,
                    objectFit: "contain",
                  }}
                />
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
                      color: "#131316",
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

        {/* Left column — images (RTL: visually on the left) */}
        <div
          className="max-md:hidden"
          style={{
            flex: "0 0 42%",
            position: "relative",
            minHeight: 500,
          }}
        >
          {/* Decorative purple shape */}
          <Image
            src="/images/purple-shape.png"
            alt=""
            width={160}
            height={160}
            aria-hidden
            style={{
              position: "absolute",
              bottom: "20%",
              left: "5%",
              width: 160,
              zIndex: 0,
            }}
          />
          {/* Decorative green shape */}
          <Image
            src="/images/green-shape.png"
            alt=""
            width={80}
            height={80}
            aria-hidden
            style={{
              position: "absolute",
              top: "15%",
              right: "10%",
              width: 80,
              zIndex: 0,
            }}
          />
          {/* Main student composite image */}
          <Image
            src="/images/why-study.png"
            alt="סטודנטים של HackerU"
            width={600}
            height={500}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              position: "relative",
              zIndex: 2,
            }}
          />
        </div>
      </div>
    </section>
  );
}
