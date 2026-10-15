"use client";

import React from "react";
import Image from "next/image";

export default function Partners() {
  // STRICT CLIENT REQUIREMENT: Display the logos without any heading (especially no "Major Clients")
  const logos = [
    {
      name: "Transrail Lighting Ltd.",
      src: "/images/Transrail-Final-Logo.webp",
      alt: "Transrail Lighting Ltd.",
      boxWidth: 140,
      boxHeight: 40,
    },
    {
      name: "Bajaj Electricals Ltd.",
      src: "/images/BAJAJELEC.NS_BIG-b9981b4d.png",
      alt: "Bajaj Electricals Ltd.",
      boxWidth: 98,
      boxHeight: 54,
    },
    {
      name: "NCC Ltd.",
      src: "/images/ncc_logo.png",
      alt: "NCC Ltd.",
      boxWidth: 124,
      boxHeight: 48,
    },
    {
      name: "Ramky Infrastructure Limited",
      src: "/images/ramky_logo.png",
      alt: "Ramky Infrastructure Limited",
      boxWidth: 102,
      boxHeight: 52,
    },
    {
      name: "Sobha Limited",
      src: "/images/sobha_logo.png?v=4",
      alt: "Sobha Limited",
      boxWidth: 132,
      boxHeight: 36,
    },
  ];

  // Repeat twice per group (10 logos per group) for full viewport coverage
  const groupLogos = [...logos, ...logos];

  return (
    <section
      id="company-logos"
      className="partners-section"
      style={{
        background: "#ffffff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* Marquee Group 1 */}
          <div className="marquee-group">
            {groupLogos.map((logo, index) => (
              <div
                key={`g1-${logo.name}-${index}`}
                className="logo-item"
                style={{
                  width: `${logo.boxWidth}px`,
                  height: "58px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: `${logo.boxWidth}px`,
                    height: `${logo.boxHeight}px`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    unoptimized
                    sizes="180px"
                    style={{
                      objectFit: "contain",
                    }}
                    className="logo-img"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Marquee Group 2 - Exact clone for mathematically seamless 0-jerk infinite loop */}
          <div className="marquee-group" aria-hidden="true">
            {groupLogos.map((logo, index) => (
              <div
                key={`g2-${logo.name}-${index}`}
                className="logo-item"
                style={{
                  width: `${logo.boxWidth}px`,
                  height: "58px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: `${logo.boxWidth}px`,
                    height: `${logo.boxHeight}px`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    unoptimized
                    sizes="180px"
                    style={{
                      objectFit: "contain",
                    }}
                    className="logo-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .partners-section {
          padding: 4.5rem 0;
        }

        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          user-select: none;
        }

        .marquee-group {
          display: flex;
          align-items: center;
          gap: 3rem;
          padding-right: 3rem;
          flex-shrink: 0;
          animation: scrollGroup 26s linear infinite;
          will-change: transform;
        }

        @keyframes scrollGroup {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }

        @media (max-width: 768px) {
          .partners-section {
            padding: 3.25rem 0;
          }
          .marquee-group {
            gap: 1.8rem;
            padding-right: 1.8rem;
            animation-duration: 18s;
          }
        }
      `}</style>
    </section>
  );
}
