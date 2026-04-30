import { NextRequest, NextResponse } from "next/server";

const FORUM_LABELS: Record<string, string> = {
  tech: "פורום חדשנות טכנולוגית (AI)",
  process: "פורום חדשנות תהליכית",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, division, phone, email, forum, agreed, q1, q2, source } = body;

    const fields: Record<string, unknown> = {
      "שם מלא": name ?? "",
      "חטיבה / מחלקה": division ?? "",
      "טלפון": phone ?? "",
      "מייל": email ?? "",
      "פורום": FORUM_LABELS[forum] ?? forum ?? "",
      "הסכמה לעדכונים": agreed === true || agreed === "true",
      "שאלה 1 – חלום תהליכי": q1 ?? "",
      "שאלה 2 – שימושי אטב": q2 ?? "",
      "סטטוס": "חדש",
      "מקור": source ?? "לא ידוע",
      "תאריך הגשה": new Date().toISOString(),
    };

    const res = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields, typecast: true }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("Airtable error:", err);
      return NextResponse.json({ error: "airtable_error" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json({ success: true, id: data.id });
  } catch (e) {
    console.error("Submit error:", e);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
