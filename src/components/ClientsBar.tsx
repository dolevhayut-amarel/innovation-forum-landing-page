import { cn } from "@/lib/utils";

const stats = [
  { num: "2", label: "פורומים מקבילים" },
  { num: "6-7", label: "מפגשי עבודה בסדרה" },
  { num: "3", label: "שעות לכל מפגש" },
  { num: "30%+", label: "יעד קיצור תהליכים" },
  { num: "100%", label: "כיסוי חטיבתי" },
];

export function ClientsBar() {
  return (
    <section
      className={cn("w-full")}
      style={{ backgroundColor: "#2563eb", padding: "32px 40px", direction: "rtl" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="flex flex-row flex-wrap items-center justify-center" style={{ gap: "0 48px" }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center"
              style={{
                padding: "16px 24px",
                background: "rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "12px",
                minWidth: "120px",
              }}
            >
              <div style={{ fontSize: "36px", fontWeight: 900, color: "#ffffff", lineHeight: 1, marginBottom: "4px" }}>
                {stat.num}
              </div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
