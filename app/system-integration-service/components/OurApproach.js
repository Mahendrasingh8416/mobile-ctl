"use client";
import Link from "next/link";

export default function OurApproach() {
  const apperData = [
    {
      items: [
        {
          title: `We Start With Your Workflow`,
          desc: `Before we build anything, we understand how your business operates today. Our consulting and system integration services focus on real processes, not assumptions.`,
        },
        {
          title: `We Connect With Purpose`,
          desc: `Every integration is designed to move data securely and reliably between systems.`,
        },
      ],
    },
    {
      items: [
        {
          title: `We Build for What’s Next`,
          desc: `Flexible architecture that supports new tools without needing to start over.`,
        },
        {
          title: `We Prioritize Stability`,
          desc: `No surprises. No downtime. Just systems you can depend on.`,
        },
      ],
    },
    {
      items: [
        {
          title: `We Improve Over Time`,
          desc: `We track how your systems perform in real use, and refine where needed.`,
        },
      ],
    },
  ];

  return (
    <section
      className="container py-5"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="main-wrapper d-flex flex-column align-items-center gap-4">
        {/* Section Badge */}
        <h1
          className="badge rounded-pill px-4 py-2 bg-black fw-bold text-center"
          style={{
            color: "#eef430",
            whiteSpace: "normal",
          }}
        >
          Our Approach To Integration
        </h1>

        {/* Main Title */}
        <h2 className="fw-semibold text-center mb-4 main-title">
          How We Build Systems That Work Together
        </h2>

        {/* Grid Mapping */}
        <div className="w-100">
          {apperData.map((group, groupIdx) => (
            <div key={groupIdx} className="row g-4 mb-4 justify-content-center">
              {group.items.map((item, itemIdx) => (
                <div key={itemIdx} className="col-12 col-md-6">
                  <div className="h-100 p-4 shadow-sm d-flex flex-column justify-content-center border-approach">
                    <h3 className="fw-bold mb-2 card-title">
                      {item.title}
                    </h3>

                    <p className="mb-0 text-muted lh-base card-text">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="d-flex flex-column flex-md-row gap-3 pt-4 w-100 justify-content-center align-items-center">
          <Link
            href="/"
            className="btn fw-bold border-0 shadow-sm transition-scale d-flex align-items-center justify-content-center action-btn"
            style={{
              backgroundColor: "#EEF430",
              borderRadius: "4px",
            }}
          >
            View our Portfolio
          </Link>

          <Link
            href="/solutionservice"
            className="btn fw-bold border-0 shadow-sm transition-scale d-flex align-items-center justify-content-center action-btn"
            style={{
              backgroundColor: "#EEF430",
              borderRadius: "4px",
            }}
          >
            Work With Us
          </Link>
        </div>
      </div>

      <style jsx>{`
        .main-wrapper {
          width: 86%;
          margin: 0 auto;
        }

        .border-approach {
          border-left: 20px solid #eef430;
          background-color: #fff;
        }

        .transition-scale {
          transition: transform 0.2s ease;
        }

        .transition-scale:hover {
          transform: scale(1.05);
        }

        .main-title {
          font-size: calc(1.4rem + 1vw);
        }

        .card-title {
          color: #034a27;
          font-size: 1.4rem;
        }

        .card-text {
          font-size: 1rem;
        }

        .action-btn {
          font-size: 14px;
          height: 52px;
          width: 240px;
        }

        @media (max-width: 768px) {
          .main-wrapper {
            width: 95%;
          }

          .border-approach {
            border-left: 8px solid #eef430;
          }

          .main-title {
            font-size: 1.8rem;
          }

          .card-title {
            font-size: 1.2rem;
          }

          .card-text {
            font-size: 0.95rem;
          }

          .action-btn {
            width: 100%;
            max-width: 280px;
          }

          h1.badge {
            font-size: 1rem !important;
            padding: 12px 24px !important;
          }
        }

        @media (max-width: 576px) {
          .main-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}