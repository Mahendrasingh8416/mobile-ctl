import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-lg-7">
            
            {/* Mobile Image + Text Overlap Container */}
            <div className={styles.heroMobileWrapper}>
              {/* Yeh sirf mobile par chalegi background image ke roop me */}
              <div className={`${styles.heroMobileImg} d-block d-lg-none`}></div>
              
              {/* Heading Text: Jo exact image ke upar float karega */}
              <h1 className={`${styles.heroTitle} text-center text-lg-start fw-bold`}>
                Strategic. Human-Centered. <br /> Tech That Works for People.
              </h1>
            </div>

            {/* Paragraphs */}
            <p className="fontmainText fw-bold text-center text-lg-start mb-3 mt-4">
              CustomTech Labs is a joint venture between Laxmaya Technologies, a global technology and enterprise engineering company, and Small Biz Marketing (SBM), a U.S.-based strategy and growth marketing agency.
            </p>
            <p className="fontmainText text-center text-lg-start mb-4">
              Together, we combine deep technical expertise with strategic business intelligence to create technology that doesn’t just function—it feels intuitive, efficient, and natural to the people who use it.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-column align-items-center flex-lg-row gap-3 mt-4">
              <button className={`btn-warning-custom w-100 ${styles.maxWsm}`}>
                View Our Portfolio
              </button>
              <button className={`btn-warning-custom w-100 ${styles.maxWsm}`}>
                Work With Us
              </button>
            </div>
          </div>

          {/* Right Side Spacer */}
          <div className="col-lg-5 d-none d-lg-block"></div>
        </div>
      </div>
    </section>
  );
}
