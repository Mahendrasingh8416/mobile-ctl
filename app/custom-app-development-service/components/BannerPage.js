export default function Hero() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: "url('/appsimg/main.png')" }}
      >
        <div className="container px-3 px-md-5 py-4 py-md-5">
          <div className="hero-box">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 text-center text-lg-start">
                <h1 className="fs-2 fs-md-1">
                  Custom Apps That Teams Adopt And Customers Love Using
                </h1>

                <p>
                  Tech that removes friction, simplifies decisions, and becomes
                  a natural extension of how people work and engage.
                </p>

                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                  <button className="btn-warning-custom w-100 w-sm-auto">
                    View Our Portfolio
                  </button>

                  <button className="btn-warning-custom w-100 w-sm-auto">
                    Work With Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rectangle 178 - Yellow Accent Bar */}
      </section>

      <div
        style={{
          width: "100%",
          height: "40px",
          background: "#eff430",
          borderBottom: "20px solid #000",
        }}
      ></div>
    </>
  );
}