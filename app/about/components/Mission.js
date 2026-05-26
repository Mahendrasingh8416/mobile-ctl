import Image from "next/image";
import styles from "../style.module.css";

export default function Mission() {
  return (
    <section className={styles.missionSection}>
      <div className="container">
        {/* Yellow Header Badge */}
        <div
          style={{
            padding: "12px 100px",
            backgroundColor: "#eff430",
            borderRadius: "10px",
          }}
          className={styles.missionBadge}
        >
          Our Mission
        </div>

        {/* Text Area */}
        <h6 className={styles.missionDescription} style={{ fontSize: '24px' }}>
          To make technology human, simple, and smart—for both businesses and
          the people they serve.
        </h6>

        {/* Image Container */}
        <div> 
          <Image
            src="/images/our-mission.webp" // Ensure this is in public/images/
            alt="Our team collaborating"
            width={1200}
            height={800}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}
