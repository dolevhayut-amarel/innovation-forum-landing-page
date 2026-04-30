import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LP General | 2025 - HackerU - החממה להכשרה למקצועות ההייטק",
  description: "HackerU - פחות דיבורים, יותר תכל'ס! זה הזמן לרכוש מקצוע תוך מספר חודשים ולהתחיל לעבוד בהייטק.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
