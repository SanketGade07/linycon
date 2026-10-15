"use client";

import React from "react";
import Image from "next/image";

interface ProjectItem {
  id: string;
  title: string;
  scope: string;
  image: string;
}

export default function Projects() {
  const projects: ProjectItem[] = [
    {
      id: "nh79-gulabpura-chittorgarh",
      title: "Six-Laning of Gulabpura–Chittorgarh Section, NH 79, Rajasthan",
      scope:
        "Road, junction, toll plaza, toll plaza booth, toll plaza canopy and underpass lighting, along with toll plaza HT and LT works.",
      image: "/images/hero_highway.jpg",
    },
    {
      id: "nh79-kishangarh-gulabpura",
      title: "Six-Laning of Kishangarh–Gulabpura Section, NH 79, Rajasthan",
      scope:
        "Road, junction, toll plaza, toll plaza booth, toll plaza canopy and underpass lighting, along with toll plaza HT and LT works.",
      image: "/images/toll_plaza.jpg",
    },
    {
      id: "nh66-wadpale-boargaon",
      title: "Four-Laning of Wadpale–Boargaon Section, NH 66, Maharashtra",
      scope: "Road, junction, toll plaza canopy and underpass lighting.",
      image: "/images/junction_lighting.jpg",
    },
    {
      id: "nh13-solapur-bijapur",
      title: "Four-Laning of Solapur–Bijapur Section, NH 13, Karnataka",
      scope: "Road, junction, toll plaza booth and underpass lighting.",
      image: "/images/tunnel_lighting.jpg",
    },
    {
      id: "caterpillar-warehouse",
      title: "Warehouse Electrical Works – Caterpillar India Private Limited",
      scope: "Electrical works for a warehouse in Tiruvallur, Tamil Nadu.",
      image: "/images/warehouse_electrical.jpg",
    },
    {
      id: "mumbai-monorail-cctv",
      title: "CCTV Works – Wadala Depot & Mumbai Monorail Stations",
      scope:
        "CCTV works at Wadala Depot and monorail stations across Mumbai, Maharashtra.",
      image: "/images/cctv_monorail.jpg",
    },
  ];

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: "3rem" }}>
          <h2>Selected Infrastructure & Electrical Projects</h2>
        </div>

        {/* 6 Projects Grid: strictly 3 columns x 2 rows on all laptops and desktops */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
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
              <div className="project-card-img" style={{ position: "relative", width: "100%" }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Text Body - ONLY exact title and scope */}
              <div
                className="project-card-content"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <h3 className="project-card-title">
                  {project.title}
                </h3>
                <p className="project-card-desc">
                  {project.scope}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ALL Laptops & Desktops: Exactly 3 columns x 2 rows */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.8rem;
        }
        .project-card-img {
          height: 210px;
        }
        .project-card-content {
          padding: 1.8rem 1.5rem;
        }
        .project-card-title {
          font-size: 1.2rem;
          color: #0f172a;
          margin-bottom: 0.85rem;
          line-height: 1.4;
          font-weight: 700;
        }
        .project-card-desc {
          font-size: 0.96rem;
          color: #475569;
          line-height: 1.65;
          margin: 0;
        }

        /* 13" - 14" Laptops and compact desktop viewports: maintain 3 columns with scaled proportions */
        @media (max-width: 1200px) {
          .projects-grid {
            gap: 1.35rem;
          }
          .project-card-img {
            height: 185px;
          }
          .project-card-content {
            padding: 1.4rem 1.2rem;
          }
          .project-card-title {
            font-size: 1.1rem;
          }
          .project-card-desc {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 960px) {
          .projects-grid {
            gap: 1rem;
          }
          .project-card-img {
            height: 165px;
          }
          .project-card-content {
            padding: 1.2rem 1rem;
          }
          .project-card-title {
            font-size: 1.02rem;
          }
          .project-card-desc {
            font-size: 0.85rem;
          }
        }

        /* Mobile Screens ONLY */
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
          .project-card-img {
            height: 175px !important;
          }
          .project-card-content {
            padding: 1.3rem 1.1rem !important;
          }
          .project-card-title {
            font-size: 1.1rem !important;
          }
          .project-card-desc {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 540px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .project-card-img {
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}
