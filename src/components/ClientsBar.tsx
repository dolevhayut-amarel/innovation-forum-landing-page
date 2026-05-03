"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 2,
    suffix: "",
    label: "פורומים מקבילים",
    sub: "טכנולוגי ותהליכי - בו-זמנית",
  },
  {
    value: 7,
    prefix: "עד ",
    suffix: " מפגשים",
    label: "בסדרה אחת",
    sub: "פעם בשבועיים, עם תוצרים אמיתיים",
  },
  {
    value: 3,
    suffix: " שעות",
    label: "לכל מפגש",
    sub: "עבודה מעשית, לא הרצאה",
  },
  {
    value: 15,
    prefix: "~",
    suffix: " משתתפים",
    label: "לכל פורום",
    sub: "נבחרים בקפידה - מקומות מוגבלים",
  },
];

function Counter({ value }: { value: number }) {
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
      if (start >= value) { setCount(value); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}</span>;
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const accent = hovered ? "#f97316" : "#ffffff";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "28px 20px",
        borderRight: index < stats.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
        cursor: "default",
        transition: "background 0.3s ease",
        background: hovered ? "rgba(249,115,22,0.10)" : "transparent",
        borderRadius: "12px",
      }}
    >
      {/* Metric row: prefix + BIG NUMBER + suffix */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "6px" }}>
        {stat.prefix && (
          <span style={{ fontSize: "18px", fontWeight: 700, color: "rgba(255,255,255,0.55)", letterSpacing: 0 }}>
            {stat.prefix}
          </span>
        )}
        <span style={{
          fontSize: "56px", fontWeight: 900, lineHeight: 1,
          letterSpacing: "-2px", fontVariantNumeric: "tabular-nums",
          color: accent, transition: "color 0.3s ease",
        }}>
          <Counter value={stat.value} />
        </span>
        {stat.suffix && (
          <span style={{ fontSize: "18px", fontWeight: 700, color: "rgba(255,255,255,0.55)" }}>
            {stat.suffix}
          </span>
        )}
      </div>

      {/* divider */}
      <div style={{
        width: "28px", height: "2px", borderRadius: "2px", margin: "0 auto 10px",
        background: hovered ? "linear-gradient(90deg,#f97316,#e53e2f)" : "rgba(255,255,255,0.2)",
        transition: "background 0.3s ease",
      }} />

      {/* Primary label */}
      <span style={{
        fontSize: "15px", fontWeight: 700,
        color: "rgba(255,255,255,0.95)", marginBottom: "5px", display: "block",
      }}>
        {stat.label}
      </span>

      {/* Secondary context */}
      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>
        {stat.sub}
      </span>
    </motion.div>
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
          <StatCard key={i} stat={stat} index={i} />
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
