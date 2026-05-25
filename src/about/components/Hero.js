import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className="container py-5">
        <div className="row align-items-center">
          
          {/* Left Column: Content */}
          <div className="col-lg-7">
            
            {/* Heading (Always at the top) */}
            <h1 className={`${styles.heroTitle} text-center text-lg-start mb-4 fw-bold`}>
              Strategic. Human-Centered.<br />Tech That Works for People.
            </h1>

            {/* Mobile Image (Visible only on mobile/tablet) */}
            <div className={`${styles.heroMobileImg} d-block d-lg-none my-4`} />

            {/* Text Paragraphs */}
            <p className="fontmainText fw-bold text-center text-lg-start mb-3">
              CustomTech Labs is a joint venture between Laxmaya Technologies, a global technology and enterprise engineering company, and Small Biz Marketing (SBM), a U.S.-based strategy and growth marketing agency.
            </p>
            <p className="fontmainText text-center text-lg-start mb-4">
              Together, we combine deep technical expertise with strategic business intelligence to create technology that doesn’t just function—it feels intuitive, efficient, and natural to the people who use it.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-column align-items-center flex-lg-row gap-3 mt-4">
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
