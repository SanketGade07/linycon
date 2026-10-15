"use client";

import React from "react";
import {
  Users,
  Layers,
  Award,
  TrendingDown,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function WhyUs() {
  const points = [
    {
      num: "01",
      text: "Experienced professionals across electrical, electronics and instrumentation disciplines.",
      icon: <Users size={22} color="#0a5060" />,
      bg: "rgba(10, 80, 96, 0.08)",
    },
    {
      num: "02",
      text: "Capabilities covering surveys, design, engineering, construction and commissioning.",
      icon: <Layers size={22} color="#0a5060" />,
      bg: "rgba(10, 80, 96, 0.08)",
    },
    {
      num: "03",
      text: "Illumination design based on relevant Indian Standards.",
      icon: <Award size={22} color="#0a5060" />,
      bg: "rgba(10, 80, 96, 0.08)",
    },
    {
      num: "04",
      text: "Electrical system design focused on capital and operating cost considerations.",
      icon: <TrendingDown size={22} color="#0a5060" />,
      bg: "rgba(10, 80, 96, 0.08)",
    },
    {
      num: "05",
      text: "Integrated project support from concept to commissioning.",
      icon: <ShieldCheck size={22} color="#0a5060" />,
      bg: "rgba(10, 80, 96, 0.08)",
    },
    {
      num: "06",
      text: "Commitment to quality, advanced technologies and skilled execution.",
      icon: <Sparkles size={22} color="#0a5060" />,
      bg: "rgba(10, 80, 96, 0.08)",
    },
  ];

  return (
    <section id="why-us" className="section-padding" style={{ backgroundColor: "#f8fafc" }}>
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
              Why Linycon
            </span>
          </div>
          <h2>A Complete Approach to Electrical &amp; Illumination Projects</h2>
        </div>

        {/* 3-Column Bento Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.8rem",
          }}
          className="why-grid-3"
        >
          {points.map((item) => (
            <div
              key={item.num}
              className="why-card"
              style={{
                padding: "2rem 1.8rem",
                background: "#ffffff",
                borderRadius: "14px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "all 0.3s ease",
              }}
            >
              {/* Top Row: Custom Icon + Number */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: item.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div>

                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    color: "#94a3b8",
                  }}
                >
                  {item.num}
                </span>
              </div>

              {/* Exact Point Text */}
              <p
                style={{
                  fontSize: "1.02rem",
                  color: "#1e293b",
                  lineHeight: 1.65,
                  margin: 0,
                  fontWeight: 500,
                  flexGrow: 1,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(10, 80, 96, 0.09) !important;
          border-color: #cbd5e1 !important;
        }
        @media (max-width: 1024px) {
          .why-grid-3 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .why-grid-3 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
