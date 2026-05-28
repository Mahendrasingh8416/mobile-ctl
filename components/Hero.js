import Image from 'next/image'; // Agar Next.js use kar rahe ho toh

export default function Hero() {
  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP HERO SECTION (Visible on MD screens and up, Hidden on Mobile) */}
      {/* ========================================================================= */}
      <section className="hero d-none d-md-block">
        <div className="container px-5 py-5">
          <div className="hero-box">
            <div className="row align-items-center">
              {/* Left Side Content */}
              <div className="col-lg-6">
                <h1 className="fw-bold mb-4 albert-font">
                  Technology Built for the <br />
                  Way People Actually Work
                </h1>

                <p className="text-muted mb-4 fs-5" style={{ maxWidth: "500px" }}>
                  We bridge the gap between complex engineering and human
                  intuition to build tech that users actually enjoy using.
                </p>

                <div className="d-flex gap-3">
                  <button className="custom-btn">
                    View Our Portfolio
                  </button>
                  <button className="custom-btn">
                    Work With Us
                  </button>
                </div>
              </div>
              
              {/* Right Side Image (Agar CSS background use nahi kar rahe toh yahan image add kar sakte ho) */}
              <div className="col-lg-6">
                {/* Desktop Background image CSS file `.hero` mein managed hai */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MOBILE HERO SECTION (Visible on Mobile only, Hidden on Desktop)       */}
      {/* ========================================================================= */}
      <section className="container-fluid px-0 d-block d-md-none">
        
        {/* Top Half: Title & Mobile Background Image */}
        <div
          className="d-flex flex-column align-items-center text-center  px-3"
          style={{
            backgroundImage: "url('/images/mobilebanner3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "70vh",
          }}
        >
          <h1 className="fw-bold display-6 albert-font  ">
            Technology Built for the
            <br />
            Way People Actually Work
          </h1>
        </div>

        {/* Bottom Half: Description & Yellow Buttons */}
        <div className="container text-center py-5 px-4">
          <p className="mx-auto mb-5 text-muted" style={{ maxWidth: "600px", fontSize: "15px", lineHeight: "1.6" }}>
            We bridge the gap between complex engineering and human intuition
            to build tech that users actually enjoy using.
          </p>

          {/* Vertical Buttons Layout */}
          <div className="d-flex flex-column gap-3 align-items-center">
            <button
              className="btn fw-bold w-100 py-3 shadow border-0"
              style={{
                backgroundColor: "#E1FA32", // Matching your footer yellow tint
                color: "#000",
                fontSize: "18px",
                borderRadius: "8px",
                maxWidth: "340px"
              }}
            >
              View Our Portfolio
            </button>

            <button
              className="btn fw-bold w-100 py-3 shadow border-0"
              style={{
                backgroundColor: "#E1FA32",
                color: "#000",
                fontSize: "18px",
                borderRadius: "8px",
                maxWidth: "340px"
              }}
            >
              Work With Us
            </button>
          </div>
        </div>

      </section>
    </>
  );
}