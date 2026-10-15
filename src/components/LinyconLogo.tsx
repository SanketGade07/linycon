"use client";

import React from "react";
import Image from "next/image";

interface LinyconLogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export default function LinyconLogo({
  className = "",
  variant = "dark",
  size = "md",
  showTagline = false,
}: LinyconLogoProps) {
  const isLight = variant === "light";
  const emblemSrc = isLight
    ? "/images/linycon_emblem_light.png"
    : "/images/linycon_emblem.png";

  // Professionally calibrated proportions (emblem to wordmark golden balance)
  const config = {
    sm: { emblemH: 32, emblemW: 16, fontSize: "0.62rem", letterSpacing: "0.1em", gap: "2px" },
    md: { emblemH: 40, emblemW: 21, fontSize: "0.72rem", letterSpacing: "0.12em", gap: "3px" },
    lg: { emblemH: 52, emblemW: 27, fontSize: "0.92rem", letterSpacing: "0.12em", gap: "4px" },
  }[size];

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
        }}
      >
        {/* Emblem - Prominent, crisp brand mark */}
        <div
          style={{
            position: "relative",
            height: `${config.emblemH}px`,
            width: `${config.emblemW}px`,
            flexShrink: 0,
          }}
        >
          <Image
            src={emblemSrc}
            alt="LINYCON"
            fill
            priority
            sizes="60px"
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        {/* Wordmark - Balanced, elegant serif typography matching brand guidelines */}
        <span
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: config.fontSize,
            fontWeight: 700,
            letterSpacing: config.letterSpacing,
            color: isLight ? "#9ece2b" : "#76c043",
            lineHeight: 1,
            marginTop: config.gap,
            textAlign: "center",
            textTransform: "uppercase",
            textShadow: isLight ? "0 1px 3px rgba(0, 0, 0, 0.5)" : "none",
          }}
        >
          LINYCON
        </span>
      </div>

      {showTagline && (
        <span
          style={{
            marginLeft: "0.85rem",
            fontSize: "0.72rem",
            letterSpacing: "0.04em",
            color: isLight ? "#94A3B8" : "#475569",
            fontWeight: 500,
          }}
        >
          Electrical • Illumination • Infrastructure
        </span>
      )}
    </div>
  );
}
