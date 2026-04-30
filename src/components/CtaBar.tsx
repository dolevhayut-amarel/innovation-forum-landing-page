import { cn } from "@/lib/utils";

export function CtaBar() {
  return (
    <section
      className={cn("w-full")}
      style={{
        backgroundColor: "#7D69FF",
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
            color: "#131316",
            flex: 1,
            minWidth: 280,
          }}
        >
          ההתחייבות שלנו: להפוך חלום למציאות וללוות אתכם עד לעבודה הראשונה שלכם בהייטק
        </p>
        <button
          type="button"
          style={{
            backgroundColor: "#F1F2ED",
            color: "#131316",
            borderRadius: 50,
            padding: "14px 32px",
            fontSize: 18,
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          קליק לקריירה בהייטק &gt;&gt;
        </button>
      </div>
    </section>
  );
}
