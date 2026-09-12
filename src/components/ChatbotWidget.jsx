"use client";

import { useEffect, useRef, useState } from "react";

const GREETING =
  "Hi! I'm the Ed Impact Africa Foundation assistant (demo). Ask me about our programs, impact, or how to get in touch.";

const FALLBACK =
  "I don't have a specific answer for that yet. You can reach our team directly at info@edimpactafricafoundation.org or +256 781 064 668, or visit our Contact Us page.";

const STOP_WORDS = new Set([
  "the", "a", "an", "is", "are", "do", "does", "how", "what", "when", "where", "why",
  "who", "can", "i", "you", "your", "to", "of", "for", "in", "on", "and", "or", "my",
  "with", "about", "us", "it", "this", "that", "be", "have", "has",
]);

const tokenize = (text) =>
  (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word));

const scoreMatch = (queryTokens, faqTokens) => {
  if (!queryTokens.length || !faqTokens.length) return 0;
  const faqSet = new Set(faqTokens);
  const overlap = queryTokens.filter((token) => faqSet.has(token)).length;
  return overlap / queryTokens.length;
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [faqs, setFaqs] = useState([]);
  const [messages, setMessages] = useState([{ role: "bot", text: GREETING }]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("/api/faqs?limit=100")
      .then((res) => res.json())
      .then((data) => setFaqs(data?.docs || []))
      .catch(() => setFaqs([]));
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const respondTo = (text) => {
    const queryTokens = tokenize(text);
    let best = null;
    let bestScore = 0;
    for (const faq of faqs) {
      const score = scoreMatch(queryTokens, tokenize(faq.question));
      if (score > bestScore) {
        bestScore = score;
        best = faq;
      }
    }
    return bestScore >= 0.5 ? best.answer : FALLBACK;
  };

  const handleSend = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const reply = respondTo(text);
    setMessages((prev) => [...prev, { role: "user", text }, { role: "bot", text: reply }]);
    setInput("");
  };

  return (
    // Sits above the theme's scroll-to-top button (fixed, right: 30px, bottom: 30px, 50px tall),
    // which only becomes visible after scrolling, so this must clear it at every scroll position.
    <div style={{ position: "fixed", right: 24, bottom: 96, zIndex: 9999 }}>
      {isOpen && (
        <div
          style={{
            width: 320,
            maxWidth: "calc(100vw - 48px)",
            height: 440,
            maxHeight: "calc(100vh - 140px)",
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            marginBottom: 12,
            fontFamily: "inherit",
          }}
        >
          <div
            style={{
              background: "#0d3b2e",
              color: "#fff",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img src="/assets/images/author-two.png" alt="" style={{ width: 24, height: 24, borderRadius: "50%", background: "#fff" }} onError={(e) => (e.target.style.display = "none")} />
              <strong style={{ fontSize: 14 }}>Ed Impact Assistant</strong>
              <span style={{ fontSize: 10, background: "#f5a623", color: "#0d3b2e", padding: "2px 6px", borderRadius: 8, fontWeight: 700 }}>DEMO</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="close chat"
              style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: 18, lineHeight: 1 }}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>

          <div
            ref={scrollRef}
            style={{ flex: 1, overflowY: "auto", padding: 14, display: "flex", flexDirection: "column", gap: 10, background: "#f7f7f5" }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    background: m.role === "user" ? "#f5a623" : "#fff",
                    color: "#1a1a1a",
                    padding: "8px 12px",
                    margin: 0,
                    borderRadius: 12,
                    maxWidth: 230,
                    boxSizing: "border-box",
                    fontSize: 13,
                    lineHeight: "18px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                    overflowWrap: "break-word",
                  }}
                >
                  {m.text}
                </p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} style={{ display: "flex", borderTop: "1px solid #eee", padding: 8, gap: 8 }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              style={{
                flex: 1,
                border: "1px solid #ddd",
                borderRadius: 20,
                padding: "8px 14px",
                fontSize: 13,
                outline: "none",
              }}
            />
            <button
              type="submit"
              aria-label="send message"
              style={{
                background: "#0d3b2e",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 36,
                height: 36,
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <i className="fa-solid fa-paper-plane" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "close chat" : "open chat"}
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#f5a623",
          color: "#0d3b2e",
          border: "none",
          boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
          cursor: "pointer",
          fontSize: 22,
          marginLeft: "auto",
          display: "block",
        }}
      >
        <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-comment-dots"} />
      </button>
    </div>
  );
};

export default ChatbotWidget;
