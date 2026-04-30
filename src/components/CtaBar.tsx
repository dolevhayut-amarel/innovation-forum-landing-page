import { cn } from "@/lib/utils";

export function CtaBar() {
  return (
    <section
      className={cn("w-full")}
      style={{
        backgroundColor: "#2a5377",
        padding: "30px 60px",
        direction: "rtl",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <p
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#ffffff",
            flex: 1,
            minWidth: 280,
          }}
        >
          הפורומים מחכים לכם — הצטרפו עכשיו לפורום החדשנות של אמרל ועצבו את עתיד הארגון
        </p>
        <a
          href="#registration"
          style={{
            background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)",
            color: "#ffffff",
            borderRadius: 50,
            padding: "14px 32px",
            fontSize: 18,
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            flexShrink: 0,
            whiteSpace: "nowrap",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          אני רוצה להצטרף לפורום &gt;&gt;
        </a>
      </div>
    </section>
  );
}
