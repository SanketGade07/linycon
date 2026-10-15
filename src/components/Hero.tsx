"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState<"A" | "B">("A");
  const activeVideoRef = useRef<"A" | "B">("A");
  const isTransitioningRef = useRef(false);

  const videoUrl =
    "https://ik.imagekit.io/ocot2fs3tf/hero-bg-video/gemini_generated_video_e92f9571_gwr_video_mvp.mp4";

  useEffect(() => {
    const vA = videoRefA.current;
    const vB = videoRefB.current;

    // Strictly enforce muted & zero volume on both elements to guarantee NO sound
    [vA, vB].forEach((v) => {
      if (v) {
        v.muted = true;
        v.defaultMuted = true;
        v.volume = 0;
      }
    });

    if (vA) {
      vA.play().catch(() => {});
    }

    const handleTimeUpdate = (letter: "A" | "B") => {
      if (letter !== activeVideoRef.current || isTransitioningRef.current) return;

      const currentEl = letter === "A" ? vA : vB;
      const nextEl = letter === "A" ? vB : vA;

      if (!currentEl || !nextEl) return;

      const duration = currentEl.duration || 10;
      // Trigger smooth 1.6s crossfade before reaching the end of the 10s video
      if (currentEl.currentTime >= duration - 1.6 && currentEl.currentTime < duration) {
        isTransitioningRef.current = true;
        nextEl.currentTime = 0;
        nextEl.play().catch(() => {});

        const nextLetter = letter === "A" ? "B" : "A";
        activeVideoRef.current = nextLetter;
        setActiveVideo(nextLetter);

        // Reset transition lock once crossfade is complete
        setTimeout(() => {
          isTransitioningRef.current = false;
        }, 1800);
      }
    };

    const handleEnded = (letter: "A" | "B") => {
      const el = letter === "A" ? vA : vB;
      if (el) {
        el.pause();
        el.currentTime = 0;
      }
    };

    const onTimeUpdateA = () => handleTimeUpdate("A");
    const onTimeUpdateB = () => handleTimeUpdate("B");
    const onEndedA = () => handleEnded("A");
    const onEndedB = () => handleEnded("B");

    vA?.addEventListener("timeupdate", onTimeUpdateA);
    vB?.addEventListener("timeupdate", onTimeUpdateB);
    vA?.addEventListener("ended", onEndedA);
    vB?.addEventListener("ended", onEndedB);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        if (activeVideoRef.current === "A" && vA?.paused) vA.play().catch(() => {});
        if (activeVideoRef.current === "B" && vB?.paused) vB.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      vA?.removeEventListener("timeupdate", onTimeUpdateA);
      vB?.removeEventListener("timeupdate", onTimeUpdateB);
      vA?.removeEventListener("ended", onEndedA);
      vB?.removeEventListener("ended", onEndedB);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "650px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Full Background Seamless Dual Video Loop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          backgroundColor: "#06111c",
        }}
      >
        {/* Video A */}
        <video
          ref={videoRefA}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="/images/hero_expressway.jpg"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            opacity: activeVideo === "A" ? 1 : 0,
            transition: "opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: activeVideo === "A" ? 1 : 0,
            pointerEvents: "none",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Video B (Seamless loop crossfade partner) */}
        <video
          ref={videoRefB}
          muted
          playsInline
          preload="auto"
          poster="/images/hero_expressway.jpg"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            opacity: activeVideo === "B" ? 1 : 0,
            transition: "opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: activeVideo === "B" ? 1 : 0,
            pointerEvents: "none",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Soft directional gradient on text side for crisp legibility without washing out the video */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(6, 17, 28, 0.72) 0%, rgba(6, 17, 28, 0.38) 55%, rgba(6, 17, 28, 0.2) 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <div style={{ maxWidth: "800px" }}>
          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2.4rem, 4.8vw, 4.1rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              color: "#ffffff",
              textShadow: "0 2px 14px rgba(0, 0, 0, 0.6)",
            }}
          >
            Electrical, Illumination &amp; Infrastructure Solutions
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)",
              lineHeight: 1.65,
              color: "#f1f5f9",
              maxWidth: "720px",
              marginBottom: "2.5rem",
              textShadow: "0 1px 8px rgba(0, 0, 0, 0.6)",
            }}
          >
            From site surveys and electrical system design to project execution, testing and
            commissioning, Linycon Private Limited delivers integrated solutions for
            electrical, illumination and infrastructure projects.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.2rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#contact"
              className="btn-primary"
              id="hero-cta-discuss"
              style={{
                background: "linear-gradient(135deg, #76c043 0%, #5ba42c 100%)",
                color: "#081c08",
                fontWeight: 700,
                boxShadow: "0 6px 20px rgba(118, 192, 67, 0.4)",
              }}
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="btn-secondary"
              id="hero-cta-services"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                color: "#ffffff",
                borderColor: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <span>Explore Our Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
