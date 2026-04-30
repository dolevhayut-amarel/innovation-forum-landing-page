"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Testimonial {
  image: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  youtubeUrl: string;
}

const testimonials: Testimonial[] = [
  {
    image: "/images/testimonial-noa.png",
    name: "נועה אדלמן",
    role: "מעצבת גרפית",
    company: "WIX",
    quote: "עוד לא סיימתי את הלימודים וכבר מצאתי תעמוד",
    youtubeUrl: "https://www.youtube.com/watch?v=BjeOCKfiup8",
  },
  {
    image: "/images/testimonial-nir.png",
    name: "ניר סאיאס",
    role: "ראש צוות אבטחת מידע",
    company: "Sygnia",
    quote: "נרשמתי ל-HackerU בדצמבר 17 בזמן שהייתי קצין בצבא",
    youtubeUrl: "https://www.youtube.com/watch?v=Eho0Cnw65-U",
  },
  {
    image: "/images/testimonial-vitaly.png",
    name: "ויטלי ריסקין",
    role: "מעצב גרפי",
    company: "WIX",
    quote: "חיפשתי קורס עיצוב גרפי וחוויית משתמש",
    youtubeUrl: "https://www.youtube.com/watch?v=4v5y0PMubBg",
  },
  {
    image: "/images/testimonial-ido.jpg",
    name: "עידו בומס",
    role: "בוגר קורס דיגיטל",
    company: "",
    quote: "",
    youtubeUrl: "https://www.youtube.com/watch?v=cWmH28ZKE6E",
  },
  {
    image: "/images/testimonial-shani.png",
    name: "שני קרל",
    role: "QA בחברת פסבי",
    company: "",
    quote: "",
    youtubeUrl: "https://www.youtube.com/watch?v=AcVD4yidf50",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Build visible indices: [activeIndex-1, activeIndex, activeIndex+1]
  const getVisibleIndices = (): [number, number, number] => {
    const len = testimonials.length;
    return [
      (activeIndex - 1 + len) % len,
      activeIndex,
      (activeIndex + 1) % len,
    ];
  };

  const [leftIdx, centerIdx, rightIdx] = getVisibleIndices();

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f0edff 50%, #ffffff 100%)",
        padding: "100px 0",
        direction: "rtl",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontSize: "45px",
          fontWeight: 900,
          color: "#131316",
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        עדיין מתלבטים?
      </h2>

      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          marginBottom: "50px",
          color: "#131316",
        }}
      >
        גם הם התחילו בלי רקע ובלי ניסיון, והיום יש להם קריירה מצליחה בהייטק.
      </p>

      {/* Carousel wrapper with nav buttons */}
      <div
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto 40px",
          padding: "0 20px",
        }}
      >
        {/* Prev button (RTL: goes to higher index) */}
        <button
          onClick={handlePrev}
          aria-label="הקודם"
          className={cn("testimonials-nav-btn")}
          style={{
            position: "absolute",
            right: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "#ffffff",
            border: "1px solid #e0e0e0",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            fontSize: "20px",
          }}
        >
          ›
        </button>

        {/* Next button (RTL: goes to lower index) */}
        <button
          onClick={handleNext}
          aria-label="הבא"
          className={cn("testimonials-nav-btn")}
          style={{
            position: "absolute",
            left: "-20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "#ffffff",
            border: "1px solid #e0e0e0",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            fontSize: "20px",
          }}
        >
          ‹
        </button>

        {/* Cards row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 0",
          }}
        >
          {[leftIdx, centerIdx, rightIdx].map((idx, position) => {
            const isCenter = position === 1;
            const item = testimonials[idx];

            return (
              <a
                key={`${idx}-${position}`}
                href={item.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: isCenter ? "340px" : "280px",
                  flexShrink: 0,
                  display: "block",
                  textDecoration: "none",
                }}
              >
                {/* Video thumbnail card */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    borderRadius: "12px",
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    opacity: isCenter ? 1 : 0.85,
                    transform: isCenter ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s ease, opacity 0.3s ease",
                    boxShadow: isCenter
                      ? "0 8px 32px rgba(0,0,0,0.18)"
                      : "0 2px 8px rgba(0,0,0,0.10)",
                  }}
                >
                  {/* Play button overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "64px",
                      height: "64px",
                    }}
                  >
                    <Image
                      src="/images/vplay.png"
                      alt="Play"
                      width={64}
                      height={64}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>

                {/* Name / role below card */}
                <div
                  style={{
                    padding: "8px 0",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#131316",
                      marginBottom: "2px",
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#555555",
                    }}
                  >
                    {item.role}
                    {item.company ? ` | ${item.company}` : ""}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* CTA below carousel */}
      <p
        style={{
          fontSize: "22px",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "20px",
          color: "#131316",
        }}
      >
        הדרך שלכם לקריירה בהייטק מתחילה עם HackerU
      </p>

      <div style={{ textAlign: "center" }}>
        <button
          type="button"
          style={{
            backgroundColor: "#85E577",
            color: "#131316",
            borderRadius: "50px",
            padding: "14px 40px",
            fontSize: "18px",
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
          }}
        >
          אני רוצה קריירה בהייטק!
        </button>
      </div>
    </section>
  );
}
