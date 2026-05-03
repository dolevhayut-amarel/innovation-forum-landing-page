"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClothespinSVG } from "@/components/ClothespinSVG";

const questions = [
  {
    id: 1,
    number: "01",
    title: "מה החלום שלך לשנות ביחידה שלך מבחינה תהליכית?",
    subtitle: "פרט/י על תהליך שהיית רוצה לשפר, לשנות או לחדש - ולמה זה חשוב בעיניך",
    placeholder: "התחל/י לכתוב...",
    image: null,
  },
  {
    id: 2,
    number: "02",
    title: "לפנייך אטב כביסה",
    subtitle: "פרט/י כמה שיותר שימושים יצירתיים ויוצאי דופן לחפץ זה - שאינם השימוש המקורי שלו",
    placeholder: "שימוש 1, שימוש 2, שימוש 3...",
    image: "clothespin",
  },
];

const variants = {
  enter: { opacity: 0, y: 60 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 },
};

export default function QuestionnairePage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>(["", ""]);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setTimeout(() => textareaRef.current?.focus(), 500);
  }, [current]);

  function handleChange(val: string) {
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = val;
      return next;
    });
  }

  async function handleNext() {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setSubmitting(true);
      try {
        const stored = sessionStorage.getItem("forum_form");
        const formData = stored ? JSON.parse(stored) : {};
        await fetch("/api/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            q1: answers[0],
            q2: answers[1],
          }),
        });
        sessionStorage.removeItem("forum_form");
      } catch (e) {
        console.error("Submit failed:", e);
      } finally {
        setSubmitting(false);
        setDone(true);
      }
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && e.metaKey) {
      e.preventDefault();
      if (answers[current].trim()) handleNext();
    }
  }

  const progress = ((current + (done ? 1 : 0)) / questions.length) * 100;
  const q = questions[current];

  return (
    <div
      style={{
        minHeight: "100svh",
        background: "linear-gradient(160deg, #0f172a 0%, #1e3a52 60%, #0f172a 100%)",
        direction: "rtl",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Progress bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", background: "rgba(255,255,255,0.08)", zIndex: 50 }}>
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6 }}
          style={{ height: "100%", background: "linear-gradient(90deg, #f97316, #e53e2f)", borderRadius: "0 2px 2px 0" }}
        />
      </div>

      {/* Logo */}
      <div style={{ padding: "24px 40px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.amarel.net/wp-content/uploads/2024/03/Logo_Amarel_white-Orange-1.svg"
          alt="Amarel"
          style={{ height: "32px", width: "auto", opacity: 0.85 }}
        />
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px",
        }}
      >
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="done"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              style={{ textAlign: "center", maxWidth: "600px" }}
            >
              <div style={{ fontSize: "64px", marginBottom: "24px" }}>🎉</div>
              <h1 style={{ fontSize: "40px", fontWeight: 900, color: "#ffffff", marginBottom: "16px", lineHeight: 1.2 }}>
                תודה רבה!
              </h1>
              <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "40px" }}>
                תשובותיך התקבלו. נחזור אליך בהקדם עם פרטים על ההצטרפות לפורום.
              </p>
              <motion.a
                href="/"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)",
                  color: "#ffffff",
                  borderRadius: "50px",
                  padding: "14px 40px",
                  fontSize: "18px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                חזרה לדף הבית
              </motion.a>
            </motion.div>
          ) : (
            <motion.div
              key={q.id}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45 }}
              style={{ width: "100%", maxWidth: "720px" }}
            >
              {/* Question number */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}
              >
                <span style={{ fontSize: "13px", fontWeight: 800, color: "#f97316", letterSpacing: "2px" }}>
                  {q.number}
                </span>
                <span style={{ color: "#f97316", fontSize: "16px" }}>→</span>
              </motion.div>

              {/* Clothespin image */}
              {q.image === "clothespin" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100px",
                    height: "100px",
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "28px",
                  }}
                >
                  <ClothespinSVG size={64} />
                </motion.div>
              )}

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                  fontSize: "clamp(28px, 5vw, 44px)",
                  fontWeight: 900,
                  color: "#ffffff",
                  lineHeight: 1.2,
                  marginBottom: "12px",
                }}
              >
                {q.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28 }}
                style={{
                  fontSize: "17px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                  marginBottom: "40px",
                }}
              >
                {q.subtitle}
              </motion.p>

              {/* Answer area - no box, pure text on screen */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                style={{ position: "relative" }}
              >
                <textarea
                  ref={textareaRef}
                  value={answers[current]}
                  onChange={(e) => handleChange(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={q.placeholder}
                  rows={5}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    resize: "none",
                    fontSize: "clamp(20px, 3vw, 28px)",
                    fontWeight: 500,
                    color: "#ffffff",
                    lineHeight: 1.6,
                    caretColor: "#f97316",
                    fontFamily: "inherit",
                    direction: "rtl",
                    padding: 0,
                  }}
                />
                {/* Underline */}
                <div
                  style={{
                    height: "2px",
                    background: answers[current]
                      ? "linear-gradient(90deg, #f97316, #e53e2f)"
                      : "rgba(255,255,255,0.15)",
                    borderRadius: "2px",
                    transition: "background 0.3s ease",
                  }}
                />
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                style={{ marginTop: "36px", display: "flex", alignItems: "center", gap: "16px" }}
              >
                <motion.button
                  onClick={handleNext}
                  disabled={!answers[current].trim()}
                  whileHover={answers[current].trim() ? { scale: 1.04 } : {}}
                  whileTap={answers[current].trim() ? { scale: 0.97 } : {}}
                  style={{
                    background: answers[current].trim()
                      ? "linear-gradient(135deg, #f97316 0%, #e53e2f 100%)"
                      : "rgba(255,255,255,0.1)",
                    color: answers[current].trim() ? "#ffffff" : "rgba(255,255,255,0.3)",
                    border: "none",
                    borderRadius: "50px",
                    padding: "14px 36px",
                    fontSize: "17px",
                    fontWeight: 700,
                    cursor: answers[current].trim() ? "pointer" : "default",
                    transition: "background 0.3s, color 0.3s",
                    fontFamily: "inherit",
                  }}
                >
                  {submitting ? "שולח..." : current < questions.length - 1 ? "המשך" : "שלח תשובות"} →
                </motion.button>

                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
                  או לחץ <kbd style={{ background: "rgba(255,255,255,0.1)", borderRadius: "4px", padding: "2px 6px", fontSize: "12px" }}>⌘</kbd>
                  {" + "}
                  <kbd style={{ background: "rgba(255,255,255,0.1)", borderRadius: "4px", padding: "2px 6px", fontSize: "12px" }}>Enter</kbd>
                </span>
              </motion.div>

              {/* Step indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: "48px", display: "flex", gap: "8px" }}
              >
                {questions.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      height: "3px",
                      width: i === current ? "32px" : "16px",
                      borderRadius: "2px",
                      background: i <= current
                        ? "linear-gradient(90deg, #f97316, #e53e2f)"
                        : "rgba(255,255,255,0.15)",
                      transition: "width 0.3s, background 0.3s",
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle bg decoration */}
      <div style={{ position: "fixed", bottom: "-200px", left: "-200px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "fixed", top: "-150px", right: "-150px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(42,83,119,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
    </div>
  );
}
