"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Globe, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: "3rem" }}>
          <h2>Let&apos;s Discuss Your Next Project</h2>
          <p style={{ maxWidth: "700px", margin: "0.8rem auto 0 auto", color: "#475569" }}>
            Looking for electrical, illumination or infrastructure project support? Connect with
            Linycon Private Limited to discuss your project requirements.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2.5rem",
            maxWidth: "1350px",
            margin: "0 auto",
          }}
          className="contact-layout"
        >
          {/* Company Details Card */}
          <div
            className="glass-card"
            style={{
              padding: "2.5rem",
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "1.8rem",
            }}
          >
            <div>
              <span style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#0a5060", fontWeight: 700 }}>
                Company
              </span>
              <h3 style={{ fontSize: "1.45rem", color: "#0a5060", marginTop: "2px" }}>
                Linycon Private Limited
              </h3>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "rgba(10, 80, 96, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: "1px solid rgba(10, 80, 96, 0.12)",
                }}
              >
                <Phone size={18} color="#0a5060" />
              </div>
              <div>
                <span style={{ fontSize: "0.8rem", color: "#64748b", display: "block" }}>Phone</span>
                <a
                  href="tel:+917977252121"
                  style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }}
                >
                  +91 7977252121
                </a>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "rgba(10, 80, 96, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: "1px solid rgba(10, 80, 96, 0.12)",
                }}
              >
                <Mail size={18} color="#0a5060" />
              </div>
              <div>
                <span style={{ fontSize: "0.8rem", color: "#64748b", display: "block" }}>Email</span>
                <a
                  href="mailto:linycon.info@gmail.com"
                  style={{ fontSize: "1.05rem", fontWeight: 600, color: "#0f172a" }}
                >
                  linycon.info@gmail.com
                </a>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "rgba(10, 80, 96, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: "1px solid rgba(10, 80, 96, 0.12)",
                }}
              >
                <MapPin size={18} color="#0a5060" />
              </div>
              <div>
                <span style={{ fontSize: "0.8rem", color: "#64748b", display: "block" }}>Address</span>
                <p style={{ fontSize: "0.95rem", color: "#334155", lineHeight: 1.5, margin: 0 }}>
                  601, Bhimashri Heights, Azad Chouk, Kharegaon, Kalwa, Thane (West), Maharashtra – 400605.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "rgba(10, 80, 96, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: "1px solid rgba(10, 80, 96, 0.12)",
                }}
              >
                <Globe size={18} color="#0a5060" />
              </div>
              <div>
                <span style={{ fontSize: "0.8rem", color: "#64748b", display: "block" }}>Website</span>
                <a
                  href="http://www.linycon.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.05rem", fontWeight: 600, color: "#0a5060" }}
                >
                  www.linycon.in
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form with exact CTA "Contact Our Team" */}
          <div
            className="glass-card"
            style={{
              padding: "2.5rem",
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <CheckCircle2 size={48} color="#16a34a" style={{ margin: "0 auto 1rem auto" }} />
                <h3 style={{ fontSize: "1.4rem", color: "#0f172a", marginBottom: "0.5rem" }}>
                  Message Sent
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#475569", marginBottom: "1.5rem" }}>
                  Thank you for contacting Linycon Private Limited. We will get back to you shortly.
                </p>
                <button className="btn-secondary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#334155", fontWeight: 600, marginBottom: "6px" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem 1rem",
                      borderRadius: "8px",
                      background: "#ffffff",
                      border: "1px solid #cbd5e1",
                      color: "#0f172a",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#334155", fontWeight: 600, marginBottom: "6px" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem 1rem",
                      borderRadius: "8px",
                      background: "#ffffff",
                      border: "1px solid #cbd5e1",
                      color: "#0f172a",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#334155", fontWeight: 600, marginBottom: "6px" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem 1rem",
                      borderRadius: "8px",
                      background: "#ffffff",
                      border: "1px solid #cbd5e1",
                      color: "#0f172a",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "#334155", fontWeight: 600, marginBottom: "6px" }}>
                    Project Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your project requirements, scope, or location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.8rem 1rem",
                      borderRadius: "8px",
                      background: "#ffffff",
                      border: "1px solid #cbd5e1",
                      color: "#0f172a",
                      fontSize: "0.95rem",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", marginTop: "0.5rem" }}
                  id="contact-team-cta"
                >
                  <span>Contact Our Team</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        input::placeholder,
        textarea::placeholder {
          color: #94a3b8;
          font-size: 0.92rem;
        }
        input:focus,
        textarea:focus {
          border-color: #0a5060 !important;
          box-shadow: 0 0 0 3px rgba(10, 80, 96, 0.12) !important;
        }
        @media (max-width: 800px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
