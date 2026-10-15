"use client";

import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "0",
        paddingBottom: "5.5rem",
      }}
      className="about-section"
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "3.5rem",
            alignItems: "stretch",
          }}
          className="about-grid"
        >
          {/* Left Column: Text Content */}
          <div>
            {/* About Us Badge */}
            <div style={{ marginBottom: "1rem" }}>
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
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: "clamp(2rem, 3.2vw, 2.7rem)",
                color: "#0a5060",
                lineHeight: 1.25,
                marginBottom: "1.75rem",
                letterSpacing: "-0.02em",
              }}
            >
              Engineering Excellence from Concept to Commissioning
            </h2>

            {/* Paragraphs */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                fontSize: "1.02rem",
                lineHeight: 1.75,
                color: "#334155",
              }}
            >
              <p>
                Linycon Private Limited is backed by an experienced team of professionals with
                expertise across the electrical, electronics and instrumentation industries.
              </p>
              <p>
                Our capabilities span project management, design and engineering, construction,
                field operations, site surveys, testing and commissioning.
              </p>
              <p>
                We strive to provide customers with advanced technologies and practical engineering
                solutions. Through our focus on quality, intelligent planning and skilled execution,
                we aim to deliver solutions tailored to customer requirements.
              </p>

              {/* Integrated Approach Highlight Box */}
              <div
                style={{
                  marginTop: "0.5rem",
                  padding: "1.2rem 1.4rem",
                  borderRadius: "10px",
                  background: "#f8fafc",
                  borderLeft: "4px solid #0a5060",
                  borderTop: "1px solid #e2e8f0",
                  borderRight: "1px solid #e2e8f0",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                <p
                  style={{
                    color: "#0a5060",
                    fontWeight: 600,
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  Our integrated approach covers the project lifecycle, from initial site assessment
                  and electrical system design to execution and commissioning.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              minHeight: "460px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 16px 40px rgba(10, 80, 96, 0.12)",
              border: "1px solid #e2e8f0",
            }}
            className="about-image-wrapper"
          >
            <Image
              src="/images/about_engineering.jpg"
              alt="Linycon Engineering Excellence Team"
              fill
              sizes="(max-width: 992px) 100vw, 45vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-image-wrapper {
            height: 360px !important;
            min-height: 360px !important;
          }
          .about-section {
            padding-bottom: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
