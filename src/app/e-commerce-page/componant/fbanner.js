// import styles from "/fbanner.module.css";
import styles from "./fbanner.module.css";

export default function Fbanner() {
    
  return (
    <section className={styles.heroSection}>
      <div className="container py-5">
        <div className="row align-items-center">
          
          {/* Left Column: Content */}
          <div className="col-lg-7">
            
            {/* Heading (Always at the top) */}
            <h1 className={`${styles.heroTitle} text-center text-lg-start mb-4 fw-bold`} style={{fontStyle:"italic"}}>
            E-commerce That Works <br></br>The Way Your Business <br></br>Actually Runs
            </h1>

            {/* Mobile Image (Visible only on mobile/tablet) */}
            <div className={`${styles.heroMobileImg} d-block d-lg-none my-4`} />

            {/* Text Paragraphs */}
            <p className="fontmainText fw-bold text-center text-lg-start mb-3">
              At Custom Labs, we deliver e-commerce development services that feel simple to use, easy to manage, and built to grow with you.

            </p>
            <p className="fontmainText text-center text-lg-start mb-4">
              Your e-commerce system shouldn’t slow you down- <br></br> it should move your business forward.
            </p>






                        </p>
            <p className="fontmainText text-center text-lg-start mb-4">
              Your e-commerce system shouldn’t slow you down- <br></br> it should move your business forward.
            </p>

            </p>
            <p className="fontmainText text-center text-lg-start mb-4">
              Your e-commerce system shouldn’t slow you down- <br></br> it should move your business forward.
            </p>

            </p>
            <p className="fontmainText text-center text-lg-start mb-4">
              Your e-commerce system shouldn’t slow you down- <br></br> it should move your business forward.
            </p>



            {/* Buttons */}
            <div className="d-flex flex-column align-items-center flex-lg-row gap-3 mt-4"style={{width:"50%"}}>
              <button className="btn-warning-custom w-100 max-w-sm"> View Our Portfolio </button>
              <button className="btn-warning-custom w-100 max-w-sm"> Work With Us </button>
            </div>
          </div>


          {/* Right Column: Desktop Background Spacer */}
          <div className="col-lg-5 d-none d-lg-block">
            {/* Keeps space clear on desktop for CSS background image */}
          </div>

        </div>
      </div>
    </section>
  );
}
