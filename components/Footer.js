import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    // <footer className="footer-container text-white py-5 px-4" style={{ backgroundColor: "#070707" }}>
    //   <div className="container">

    //     {/* Logo Section */}
    //     <div className="footer-logo mb-4">
    //       <Image
    //         src="/images/logo.webp"
    //         alt="Logo"
    //         width={150}
    //         height={60}
    //         className="logo1"
    //         style={{ objectFit: "contain" }}
    //       />
    //     </div>

    //     {/* Divider Line */}
    //     <hr className="border-secondary my-4" />

    //     {/* Copyright Text */}
    //     <div className="text-secondary small mb-5">
    //       © 2024 Custom Tech Labs. All Rights Reserved.
    //     </div>

    //     {/* Layout Container:
    //         Desktop (md) par ye 'd-flex flex-row gap-5' ban jayega (Pehle jaisa)
    //         Mobile par ye flexbox wrap hokar 2 columns banayega */}
    //     <div className="d-flex flex-column flex-md-row flex-wrap gap-4 gap-md-5">

    //       {/* ABOUT - Mobile par 50% width aur desktop par automatic inline */}
    //       <div className="footer-column flex-grow-1 flex-md-grow-0" style={{ minWidth: "140px", flexBasis: "calc(50% - 1rem)" }}>
    //         <h3 className="h6 text-secondary text-uppercase fw-bold mb-3">About</h3>
    //         <div className="d-flex flex-column gap-2">
    //           <a href="/" className="text-white text-decoration-none">Our Story</a>
    //           <a href="/" className="text-white text-decoration-none">Careers</a>
    //         </div>
    //       </div>

    //       {/* QUICK LINKS */}
    //       <div className="footer-column flex-grow-1 flex-md-grow-0" style={{ minWidth: "140px", flexBasis: "calc(50% - 1rem)" }}>
    //         <h3 className="h6 text-secondary text-uppercase fw-bold mb-3">Quick Links</h3>
    //         <div className="d-flex flex-column gap-2">
    //           <a href="/" className="text-white text-decoration-none">Home</a>
    //           <a href="/" className="text-white text-decoration-none">Contact</a>
    //         </div>
    //       </div>

    //       {/* OUR SERVICES */}
    //       <div className="footer-column flex-grow-1 flex-md-grow-0" style={{ minWidth: "140px", flexBasis: "calc(50% - 1rem)" }}>
    //         <h3 className="h6 text-secondary text-uppercase fw-bold mb-3">Our Services</h3>
    //         <div className="d-flex flex-column gap-2">
    //           <a href="/" className="text-white text-decoration-none">Services</a>
    //           <a href="/" className="text-white text-decoration-none">Resources</a>
    //         </div>
    //       </div>

    //       {/* LET'S CONNECT */}
    //       <div className="footer-column contact-col flex-grow-1 flex-md-grow-0" style={{ minWidth: "140px", flexBasis: "calc(50% - 1rem)" }}>
    //         <h3 className="h6 text-secondary text-uppercase fw-bold mb-3">Let's Connect</h3>
    //         <div className="d-flex flex-column gap-2">
    //           <div>
    //             <button
    //               className="btn fw-bold px-4 py-2 border-0"
    //               style={{ backgroundColor: "#E1FA32", color: "#000", borderRadius: "0px" }}
    //             >
    //               Email Now
    //             </button>
    //           </div>
    //           <div className="social-icons pt-2 d-flex gap-3 text-secondary">
    //             <i className="fab fa-facebook-f"></i>
    //             <i className="fab fa-instagram"></i>
    //             <i className="fab fa-twitter"></i>
    //             <i className="fab fa-linkedin-in"></i>
    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </footer>
    <footer
      className="footer-container text-white py-5 px-4"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Logo Section  */}
      <div className="footer-logo mb-4">
        <Image
          src="/images/logo.webp"
          alt="Logo"
          width={150}
          height={60}
          className="logo1"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="big-div ">
        <div className="left">
          {/* Layout Container: 
           Desktop (md) par ye 'd-flex flex-row gap-5' ban jayega (Pehle jaisa)
          Mobile par ye flexbox wrap hokar 2 columns banayega */}
          <div className="d-flex flex-column flex-md-row flex-wrap gap-4 gap-md-5">
            {/* ABOUT - Mobile par 50% width aur desktop par automatic inline */}
            <div
              className="footer-column flex-grow-1 flex-md-grow-0"
              style={{ minWidth: "140px", flexBasis: "calc(50% - 1rem)" }}
            >
              <h3 className="h6 text-secondary text-uppercase fw-bold mb-3">
                About
              </h3>
              <div className="d-flex flex-column gap-2">
                <a href="/" className="text-white text-decoration-none">
                  Our Story
                </a>
                <a href="/" className="text-white text-decoration-none">
                  Careers
                </a>
              </div>
            </div>
          </div>

          {/* OUR SERVICES */}
          <div
            className="footer-column flex-grow-1 flex-md-grow-0"
            style={{ minWidth: "140px", flexBasis: "calc(50% - 1rem)" }}
          >
            <h3 className="h6 text-secondary text-uppercase fw-bold mb-3">
              Our Services
            </h3>
            <div className="d-flex flex-column gap-2">
              <a href="/" className="text-white text-decoration-none">
                Services
              </a>
              <a href="/" className="text-white text-decoration-none">
                Resources
              </a>
            </div>
          </div>
        </div>

        {/*second part of div  */}
        <div className="right   ms-4">
          {/* QUICK LINKS */}
          <div
            className="footer-column flex-grow-1 flex-md-grow-0"
            style={{ minWidth: "140px", flexBasis: "calc(50% - 1rem)" }}
          >
            <h3 className="h6 text-secondary text-uppercase fw-bold mb-3">
              Quick Links
            </h3>
            <div className="d-flex flex-column gap-2">
              <a href="/" className="text-white text-decoration-none">
                Home
              </a>
              <a href="/" className="text-white text-decoration-none">
                Contact
              </a>
            </div>
          </div>

          {/* LET'S CONNECT */}
          <div
            className="footer-column contact-col flex-grow-1 flex-md-grow-0"
            style={{ minWidth: "140px", flexBasis: "calc(50% - 1rem)" }}
          >
            <h3 className="h6 text-secondary text-uppercase fw-bold mb-3">
              Let's Connect
            </h3>
            <div className="d-flex flex-column gap-2">
              <div>
                <button
                  className="btn fw-bold px-4 py-2 border-0"
                  style={{
                    backgroundColor: "#E1FA32",
                    color: "#000",
                    borderRadius: "0px",
                  }}
                >
                  Email Now
                </button>
              </div>
              <div className="social-icons pt-2 d-flex gap-3 text-secondary">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="border-secondary my-4" />

      {/* Copyright Text */}
      <div className="text-secondary small ml-4 ">
        © 2024 Custom Tech Labs. All Rights Reserved.
      </div>
    </footer>
  );
}
