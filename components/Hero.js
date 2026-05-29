import Image from 'next/image'; // Agar Next.js use kar rahe ho toh

export default function Hero() {
  return (
    <section className="hero">
      <div className="container px-5 py-5">
        <div className="hero-box">
          <div className="row align-items-center">
            <div className=" col-lg-6">
              <h1 class="h1" >
                Technology Built for the <br />
                Way People Actually Work
              </h1>

              <p>
                We bridge the gap between complex engineering and human
                intuition to build tech that users actually enjoy using.
              </p>

            <button className="custom-btn me-2">
  View Our Portfolio
</button>

<button className="custom-btn">
  Work With Us
</button>
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