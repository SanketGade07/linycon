"use client";

import React from "react";
import LinyconLogo from "./LinyconLogo";
import { Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <footer
      style={{
        background: "#f1f5f9",
        borderTop: "1px solid #e2e8f0",
        paddingTop: "3.5rem",
        paddingBottom: "2.5rem",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Brand & Headline */}
        <div style={{ marginBottom: "2rem" }}>
          <LinyconLogo variant="dark" size="lg" />
          <h3
            style={{
              fontSize: "1.2rem",
              color: "#0a5060",
              marginTop: "1rem",
              fontWeight: 700,
            }}
          >
            Linycon Private Limited | Electrical, Illumination & Infrastructure Solutions
          </h3>
        </div>

        {/* Contact Info & Quick Links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid #cbd5e1",
            marginBottom: "2.5rem",
          }}
          className="footer-grid"
        >
          {/* Direct Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", fontSize: "0.95rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Phone size={16} color="#0a5060" />
              <span style={{ color: "#64748b" }}>Phone:</span>
              <a href="tel:+917977252121" style={{ color: "#0f172a", fontWeight: 600 }}>
                +91 7977252121
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Mail size={16} color="#0a5060" />
              <span style={{ color: "#64748b" }}>Email:</span>
              <a href="mailto:linycon.info@gmail.com" style={{ color: "#0f172a", fontWeight: 600 }}>
                linycon.info@gmail.com
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Globe size={16} color="#0a5060" />
              <span style={{ color: "#64748b" }}>Website:</span>
              <a
                href="http://www.linycon.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0a5060", fontWeight: 600 }}
              >
                www.linycon.in
              </a>
            </div>
          </div>

          {/* Quick Links: Home | About Us | Services | Projects | Contact Us */}
          <div>
            <span
              style={{
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#64748b",
                display: "block",
                marginBottom: "0.8rem",
                fontWeight: 700,
              }}
            >
              Quick Links
            </span>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.6rem",
                fontSize: "0.95rem",
              }}
            >
              {quickLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: "#334155",
                      fontWeight: 500,
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0a5060")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
                  >
                    {link.name}
                  </a>
                  {index < quickLinks.length - 1 && (
                    <span style={{ color: "#cbd5e1" }}>|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            paddingTop: "1.5rem",
            borderTop: "1px solid #e2e8f0",
            fontSize: "0.85rem",
            color: "#64748b",
            textAlign: "center",
          }}
        >
          © 2026 Linycon Private Limited. All Rights Reserved.
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
