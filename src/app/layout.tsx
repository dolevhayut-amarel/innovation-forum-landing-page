import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "פורום חדשנות | אמרל 2026",
  description: "הצטרפו לפורום החדשנות של אמרל - מנגנון ארגוני מובנה להצפת רעיונות, פיתוח פתרונות ושיפור מתמיד של תהליכים.",
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
