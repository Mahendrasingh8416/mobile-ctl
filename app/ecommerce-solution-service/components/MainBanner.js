export default function Hero() {
  return (
    // <>
    //   <section
    //     className="hero"
    //     /* Ensure the parent section is relative so the bar attaches to the bottom */
    //     style={{
    //       backgroundImage: "url('/images/bannerImg.png')",
    //       position: 'relative'
    //     }}
    //   >
    //     <div className="container px-5 py-5">
    //       <div className="hero-box">
    //         <div className="row align-items-center">
    //           <div className="col-lg-6">
    //             <h1>
    //               E-commerce That Works The Way Your Business Actually Runs
    //             </h1>
    //             <p>
    //               <b>At Custom Labs, we deliver e-commerce development services that feel simple to use, easy to manage, and built to grow with you.</b>
    //             </p>
    //             <p>Your e-commerce system shouldn’t slow you down- it should move your business forward.</p>
    //             <div className="d-flex gap-3">
    //               <button className="btn-warning-custom">View Our Portfolio</button>
    //               <button className="btn-warning-custom">Work With Us</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Rectangle 178 - Yellow Accent Bar */}
    //   </section>
    //   {/* <div className="hero-accent-bar"></div> */}
    //   <div
    //     style={{
    //       width: "100%",
    //       height: "40px",
    //       background: "#eff430",
    //       borderBottom: "20px solid #000",
    //     }}
    //   ></div>
    // </>

   <>
      {/* ================= DESKTOP HERO ================= */}
      <section className="hero d-none d-md-block">
        <div className="container px-5 py-5">
          <div className="hero-box">
            <div className="row align-items-center">
              <div className="col-lg-6">
               <h1>
               E-commerce That Works The Way Your Business Actually Runs
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
        </div>
      </section>

      {/* ================= MOBILE HERO ================= */}
      <section className="container-fluid px-0 d-block d-md-none">
        
        {/* Top Section */}
        <div
          className="d-flex flex-column  text-center px-3 "
          style={{
            backgroundImage: "url('/images/mobilebanner3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "90vh",
          }}
        >
          <h1 className="fw-bold display-6 albert-font ">
          
              E-commerce That Works<br></br> The Way Your Business<br></br> Actually Runs
                
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="container text-center py-5 px-4">
          <p
            className="mx-auto mb-5 text-muted"
            style={{
              maxWidth: "600px",
              fontSize: "15px",
              lineHeight: "1.6",
            }}
          >
            We bridge the gap between complex engineering and human intuition
            to build tech that users actually enjoy using.
          </p>

          <div className="d-flex flex-column gap-3 align-items-center">
            <button
              className="btn fw-bold w-100 py-3 shadow border-0"
              style={{
                backgroundColor: "#E1FA32",
                color: "#000",
                fontSize: "18px",
                borderRadius: "8px",
                maxWidth: "340px",
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
                maxWidth: "340px",
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
  