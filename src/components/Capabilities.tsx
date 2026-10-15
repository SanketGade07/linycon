"use client";

import React from "react";
import { Compass, Lightbulb, Sliders, HardHat } from "lucide-react";

export default function Capabilities() {
  const capabilities = [
    {
      num: "01",
      title: "Site Survey",
      description:
        "Our experienced professionals carry out detailed site surveys in coordination with customer requirements.",
      icon: <Compass size={24} color="#0a5060" />,
      accentBg: "rgba(10, 80, 96, 0.08)",
    },
    {
      num: "02",
      title: "Illumination Design",
      description:
        "We prepare illumination designs in accordance with relevant Indian Standards (IS), using illumination design software.",
      icon: <Lightbulb size={24} color="#0a5060" />,
      accentBg: "rgba(10, 80, 96, 0.08)",
    },
    {
      num: "03",
      title: "Electrical System Design",
      description:
        "Our team develops electrical system designs with the objective of optimizing capital and operating costs. Our capabilities include layout drawings and cable routing.",
      icon: <Sliders size={24} color="#0a5060" />,
      accentBg: "rgba(10, 80, 96, 0.08)",
    },
    {
      num: "04",
      title: "Project Execution",
      description:
        "Our engineers, technicians and supporting workforce execute projects with a focus on quality and effective delivery.",
      icon: <HardHat size={24} color="#0a5060" />,
      accentBg: "rgba(10, 80, 96, 0.08)",
    },
  ];

  return (
    <section id="capabilities" className="section-padding" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: "3.5rem" }}>
          <div style={{ marginBottom: "0.85rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.38rem 1.1rem",
                borderRadius: "100px",
                background: "#0a5060",
                color: "#ffffff",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                boxShadow: "0 2px 8px rgba(10, 80, 96, 0.2)",
              }}
            >
              Our Capabilities
            </span>
          </div>
          <h2>Integrated Engineering Capabilities</h2>
        </div>

        {/* 4 Capabilities Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
          }}
          className="capabilities-grid"
        >
          {capabilities.map((cap) => (
            <div
              key={cap.num}
              className="glass-card capability-card"
              style={{
                padding: "2.4rem 2.2rem",
                display: "flex",
                flexDirection: "column",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "14px",
                boxShadow: "0 4px 18px rgba(0, 0, 0, 0.04)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              {/* Top Row: Icon + Number */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.4rem",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: cap.accentBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(10, 80, 96, 0.12)",
                  }}
                >
                  {cap.icon}
                </div>

                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "#94a3b8",
                    letterSpacing: "0.02em",
                  }}
                >
                  {cap.num}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.35rem",
                  color: "#0a5060",
                  marginBottom: "0.85rem",
                  fontWeight: 700,
                }}
              >
                {cap.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "1.02rem",
                  color: "#475569",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .capability-card:hover {
          transform: translateY(-4px);
          border-color: #0a5060 !important;
          box-shadow: 0 12px 28px rgba(10, 80, 96, 0.1) !important;
        }
        @media (max-width: 768px) {
          .capabilities-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
