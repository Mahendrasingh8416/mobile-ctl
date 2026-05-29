import "../app/footer.css";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    // DESKTOP FOOTER
    <>
   <footer className="footer-container text-white py-2 px-4" style={{ backgroundColor: "#070707" }}>
  <div className="container">

    {/* Main Row Container: Handles Logo on Left and Links on Right */}
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-4">
      
      {/* 1. Left Side: Logo Section */}
      <div className="footer-logo mb-4 mb-md-0">
        <Image
          src="/images/logo.webp"
          alt="Logo"
          width={150}
          height={60}
          className="logo1"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* 2. Right Side: Links & Content Grid */}
      {/* Mobile par ye automatically multi-row automatic balance 2 columns banayega aur desktop par inline line banega */}
      <div className="d-flex flex-row flex-wrap gap-4 gap-md-5 justify-content-start justify-content-md-end flex-grow-1 w-100 style_fix_mobile">
        
        {/* ABOUT */}
        <div className="footer-column" style={{ minWidth: "140px", flex: "1 1 calc(50% - 1rem)", maxWidth: "160px" }}>
          <h3 className="h6 text-secondary text-uppercase fw-bold mb-3">About</h3>
          <div className="d-flex flex-column gap-2">
            <a href="/" className="text-white text-decoration-none small">Our Story</a>
            <a href="/" className="text-white text-decoration-none small">Careers</a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column" style={{ minWidth: "140px", flex: "1 1 calc(50% - 1rem)", maxWidth: "160px" }}>
          <h3 className="h6 text-secondary text-uppercase fw-bold mb-3">Quick Links</h3>
          <div className="d-flex flex-column gap-2">
            <a href="/" className="text-white text-decoration-none small">Home</a>
            <a href="/" className="text-white text-decoration-none small">Contact</a>
          </div>
        </div>

        {/* OUR SERVICES */}
        <div className="footer-column" style={{ minWidth: "140px", flex: "1 1 calc(50% - 1rem)", maxWidth: "160px" }}>
          <h3 className="h6 text-secondary text-uppercase fw-bold mb-3">Our Services</h3>
          <div className="d-flex flex-column gap-2">
            <a href="/" className="text-white text-decoration-none small">Services</a>
            <a href="/" className="text-white text-decoration-none small">Resources</a>
          </div>
        </div>

        {/* LET'S CONNECT */}
        <div className="footer-column contact-col" style={{ minWidth: "140px", flex: "1 1 calc(50% - 1rem)", maxWidth: "180px" }}>
          <h3 className="h6 text-secondary text-uppercase fw-bold mb-3">Let's Connect</h3>
          <div className="d-flex flex-column gap-2">
            <div>
              <button
                className="btn fw-bold px-3 py-2 border-0 btn-sm"
                style={{ backgroundColor: "#E1FA32", color: "#000", borderRadius: "0px", fontSize: "13px" }}
              >
                Email Now
              </button>
            </div>
            <div className="social-icons pt-2 d-flex gap-3 text-secondary">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>

      </div>

    </div>

    {/* Divider Line */}
    <hr className="border-secondary my-4" />

    {/* Bottom Section: Copyright Text */}
    <div className="text-secondary small text-center">
      © 2024 Custom Tech Labs. All Rights Reserved.
    </div>

  </div>
</footer>




    </>
  );
}
