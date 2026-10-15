"use client";

import React from "react";
import Image from "next/image";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: "indoor-electrification",
      title: "Indoor Electrification Works",
      description: "Electrical infrastructure and installation works for indoor environments.",
      image: "/images/indoor_electrification.jpg",
    },
    {
      id: "ht-work-transformers",
      title: "HT Work, Transformers & DG Sets",
      description: "High-tension electrical works involving transformers and diesel generator sets.",
      image: "/images/ht_transformer.jpg",
    },
    {
      id: "highway-street-lighting",
      title: "Highway & Street Lighting",
      description: "Illumination solutions for highways, roads and street infrastructure.",
      image: "/images/highway_lighting.jpg",
    },
    {
      id: "tunnel-underdeck",
      title: "Tunnel & Underdeck Illumination",
      description: "Lighting solutions for tunnels, underpasses and underdeck infrastructure.",
      image: "/images/tunnel_lighting.jpg",
    },
    {
      id: "stadium-lighting",
      title: "Stadium Lighting",
      description: "Illumination for stadiums and sports facilities.",
      image: "/images/stadium_lighting.jpg",
    },
    {
      id: "toll-plaza-illumination",
      title: "Toll Plaza Illumination & Electrical Works",
      description: "Lighting and electrical works for toll plazas, booths and canopies.",
      image: "/images/toll_plaza.jpg",
    },
    {
      id: "major-junctions",
      title: "Illumination of Major Junctions",
      description: "Lighting solutions for major road junctions and infrastructure corridors.",
      image: "/images/junction_lighting.jpg",
    },
    {
      id: "cctv-lv-systems",
      title: "CCTV & LV Systems",
      description: "CCTV installation and low-voltage system works.",
      image: "/images/cctv_monorail.jpg",
    },
  ];

  return (
    <section id="services" className="section-padding" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: "3rem" }}>
          <h2>Our Areas of Operation</h2>
        </div>

        {/* 8 Services Grid: strictly 4 columns x 2 rows on all laptops and desktops */}
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Image Preview */}
              <div
                className="service-card-img"
                style={{
                  position: "relative",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Text Content - EXACT info only */}
              <div
                className="service-card-content"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <h3 className="service-card-title">
                  {service.title}
                </h3>
                <p className="service-card-desc">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ALL Laptops & Desktops: Exactly 4 columns x 2 rows */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .service-card-img {
          height: 190px;
        }
        .service-card-content {
          padding: 1.5rem 1.3rem;
        }
        .service-card-title {
          font-size: 1.15rem;
          margin-bottom: 0.6rem;
          color: #0f172a;
          line-height: 1.35;
          font-weight: 700;
        }
        .service-card-desc {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }

        /* 13" - 14" Laptops and compact desktop viewports: maintain 4 columns with scaled proportions */
        @media (max-width: 1200px) {
          .services-grid {
            gap: 1.15rem;
          }
          .service-card-img {
            height: 165px;
          }
          .service-card-content {
            padding: 1.25rem 1.05rem;
          }
          .service-card-title {
            font-size: 1.04rem;
          }
          .service-card-desc {
            font-size: 0.88rem;
          }
        }

        @media (max-width: 960px) {
          .services-grid {
            gap: 0.9rem;
          }
          .service-card-img {
            height: 150px;
          }
          .service-card-content {
            padding: 1.1rem 0.85rem;
          }
          .service-card-title {
            font-size: 0.96rem;
          }
          .service-card-desc {
            font-size: 0.82rem;
          }
        }

        /* Mobile Screens ONLY */
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
          .service-card-img {
            height: 175px !important;
          }
          .service-card-content {
            padding: 1.3rem 1.1rem !important;
          }
          .service-card-title {
            font-size: 1.1rem !important;
          }
          .service-card-desc {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 540px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
          }
          .service-card-img {
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}
