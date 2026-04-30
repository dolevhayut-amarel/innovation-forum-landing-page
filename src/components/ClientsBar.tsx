"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 2,
    suffix: "",
    label: "פורומים מקבילים",
    sub: "טכנולוגי ותהליכי — בו-זמנית",
    accent: false,
  },
  {
    value: 7,
    prefix: "עד ",
    suffix: " מפגשים",
    label: "בסדרה אחת",
    sub: "פעם בשבועיים, עם תוצרים אמיתיים",
    accent: true,
  },
  {
    value: 3,
    suffix: " שעות",
    label: "לכל מפגש",
    sub: "עבודה מעשית, לא הרצאה",
    accent: false,
  },
  {
    value: 15,
    prefix: "~",
    suffix: " משתתפים",
    label: "לכל פורום",
    sub: "נבחרים בקפידה — מקומות מוגבלים",
    accent: false,
  },
];

function Counter({
  value,
  prefix = "",
  suffix = "",
  accent,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  accent: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const steps = Math.ceil(duration / step);
    const increment = value / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export function ClientsBar() {
  return (
    <section
      className={cn("w-full")}
      style={{
        background: "linear-gradient(135deg, #326a9e 0%, #2a5377 50%, #1e3a52 100%)",
        padding: "48px 40px",
        direction: "rtl",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 0,
        }}
        className="clients-bar-inner"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "28px 20px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
              position: "relative",
            }}
          >
            {stat.accent && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "12px",
                  background: "rgba(249,115,22,0.08)",
                  pointerEvents: "none",
                }}
              />
            )}

            <div
              style={{
                fontSize: "52px",
                fontWeight: 900,
                lineHeight: 1,
                color: stat.accent ? "#f97316" : "#ffffff",
                marginBottom: "8px",
                letterSpacing: "-1px",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                accent={stat.accent}
              />
            </div>

            <div
              style={{
                width: "32px",
                height: "2px",
                background: stat.accent
                  ? "linear-gradient(90deg, #f97316, #e53e2f)"
                  : "rgba(255,255,255,0.3)",
                borderRadius: "2px",
                margin: "0 auto 10px",
              }}
            />

            <span
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.95)",
                marginBottom: "4px",
                display: "block",
              }}
            >
              {stat.label}
            </span>

            <span
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.4,
              }}
            >
              {stat.sub}
            </span>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .clients-bar-inner { flex-wrap: wrap !important; }
          .clients-bar-inner > div {
            flex: 1 1 40% !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.1) !important;
          }
        }
      `}</style>
    </section>
  );
}
