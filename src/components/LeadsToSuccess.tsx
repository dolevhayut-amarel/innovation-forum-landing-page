import { cn } from "@/lib/utils";

export function LeadsToSuccess() {
  return (
    <section
      className={cn("w-full")}
      style={{
        backgroundColor: "#ffffff",
        padding: "100px 0",
        direction: "rtl",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "45px",
            fontWeight: 900,
            color: "#131316",
            marginBottom: "16px",
          }}
        >
          מסלול שמוביל להצלחה
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#131316",
            fontWeight: 400,
            marginBottom: "40px",
          }}
        >
          הכירו את השיטה שעזרה לעשרות אלפי בוגרים להשתלב בהייטק
        </p>

        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto 40px",
            borderRadius: "16px",
            overflow: "hidden",
            aspectRatio: "16/9",
            backgroundColor: "#f5f5f5",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/QlSAJ3kFaKc"
            width="100%"
            height="100%"
            allowFullScreen
            frameBorder={0}
            style={{ display: "block" }}
          />
        </div>

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
            display: "inline-block",
          }}
        >
          אני רוצה ללמוד מקצוע מבוקש &gt;&gt;
        </button>
      </div>
    </section>
  );
}
