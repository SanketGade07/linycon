"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hello Linycon Team, I would like to inquire about electrical and illumination infrastructure solutions."
    );
    window.open(`https://wa.me/917977252121?text=${msg}`, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 99,
      }}
    >
      {/* WhatsApp Quick Connect Button */}
      <button
        onClick={handleWhatsApp}
        aria-label="Chat on WhatsApp"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "#25D366",
          border: "none",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(37, 211, 102, 0.4)",
          cursor: "pointer",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <MessageSquare size={24} />
      </button>

      {/* Phone Call Quick Button */}
      <a
        href="tel:+917977252121"
        aria-label="Call Linycon"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "#0e7490",
          border: "none",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(14, 116, 144, 0.4)",
          cursor: "pointer",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
