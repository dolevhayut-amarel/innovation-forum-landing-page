import Image from "next/image";
import { cn } from "@/lib/utils";

const logos = [
  { src: "/images/logo-abra.webp", alt: "Abra" },
  { src: "/images/logo-one-taldor.webp", alt: "ONE Taldor" },
  { src: "/images/logo-papaya.webp", alt: "Papaya Global" },
  { src: "/images/logo-itworks.webp", alt: "itworks" },
  { src: "/images/logo-hibob.webp", alt: "HiBob" },
  { src: "/images/logo-hp.webp", alt: "HP" },
  { src: "/images/logo-solaredge.webp", alt: "SolarEdge" },
  { src: "/images/logo-amdocs.webp", alt: "Amdocs" },
  { src: "/images/logo-cyrebro.webp", alt: "Cyrebro" },
] as const;

export function ClientsBar() {
  return (
    <section
      className={cn("w-full overflow-hidden")}
      style={{ backgroundColor: "#7D69FF", padding: "40px" }}
    >
      <p
        style={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#131316",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        הבוגרים שלנו עובדים בהייטק, נקודה.{" "}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "32px 40px",
        }}
      >
        {logos.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={30}
            style={{ height: "30px", width: "auto", objectFit: "contain" }}
          />
        ))}
      </div>
    </section>
  );
}
