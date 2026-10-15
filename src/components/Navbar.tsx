"use client";

import React, { useState, useEffect } from "react";
import LinyconLogo from "./LinyconLogo";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Projects", href: "#projects" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          background: isScrolled
            ? "rgba(255, 255, 255, 0.98)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled
            ? "1px solid #e2e8f0"
            : "none",
          boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.08)" : "none",
          padding: isScrolled ? "0.75rem 0" : "1.2rem 0",
          transition: "all 0.3s ease",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo - Dynamically switches variant between transparent top and scrolled */}
          <a
            href="#hero"
            aria-label="Linycon Home"
            style={{
              display: "flex",
              alignItems: "center",
              lineHeight: 1,
              textDecoration: "none",
            }}
          >
            <LinyconLogo variant={isScrolled ? "dark" : "light"} />
          </a>

          {/* Desktop Nav Items */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.2rem",
            }}
            className="desktop-menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: isScrolled ? "#334155" : "#ffffff",
                  textShadow: isScrolled ? "none" : "0 1px 4px rgba(0, 0, 0, 0.5)",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = isScrolled ? "#0a5060" : "#76c043";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isScrolled ? "#334155" : "#ffffff";
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="desktop-menu">
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: "0.65rem 1.4rem",
                fontSize: "0.9rem",
                background: isScrolled
                  ? "#0a5060"
                  : "linear-gradient(135deg, #76c043 0%, #5ba42c 100%)",
                color: isScrolled ? "#ffffff" : "#081c08",
                boxShadow: isScrolled
                  ? "0 4px 14px rgba(10, 80, 96, 0.25)"
                  : "0 4px 16px rgba(118, 192, 67, 0.35)",
              }}
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: isScrolled ? "#f1f5f9" : "rgba(255, 255, 255, 0.15)",
              border: isScrolled ? "1px solid #cbd5e1" : "1px solid rgba(255, 255, 255, 0.25)",
              color: isScrolled ? "#0f172a" : "#ffffff",
              padding: "0.55rem",
              borderRadius: "8px",
              cursor: "pointer",
              display: "none",
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              background: "#ffffff",
              borderBottom: "1px solid #e2e8f0",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#1e293b",
                  padding: "0.4rem 0",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ width: "100%", textAlign: "center", marginTop: "0.5rem" }}
            >
              Discuss Your Project
            </a>
          </div>
        )}
      </nav>

      <style jsx>{`
        @media (max-width: 960px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
