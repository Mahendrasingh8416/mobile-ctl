"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark nav-custom d-flex align-items-center justify-content-between">
        {/* 1. LOGO */}
        <Link href="/" className="navbar-brand">
          <Image
            src="/images/logo.webp"
            alt="CTL Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* 2. CONTACT US BUTTON & HAMBURGER (Yeh mobile aur desktop dono par bahar rahega) */}
        <div className="d-flex align-items-center gap-3 ms-auto ms-lg-0 order-lg-3">
          <Link href="#" className="btn btn-warning-custom">
            Contact Us
          </Link>

          <button
            className="navbar-toggler"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* 3. NAVIGATION LINKS (Yeh sirf mobile par collapse hoga) */}
        <div className={`collapse navbar-collapse order-lg-2 ms-lg-auto ${open ? "show" : ""}`}>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-lg-3">
              <Link href="/about" className="nav-link" onClick={handleClose}>
                About Us
              </Link>
            </li>

            {/* What We Do Dropdown */}
            <li className="nav-item dropdown mx-lg-3">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                What we do
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <Link
                    href="https://custom-tech-labs-eta.vercel.app/custom-website-development-service"
                    className="dropdown-item"
                    onClick={handleClose}
                  >
                    Custom Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://custom-tech-labs-eta.vercel.app/custom-app-development-service"
                    className="dropdown-item"
                    onClick={handleClose}
                  >
                    Custom Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://custom-tech-labs-eta.vercel.app/system-integration-service"
                    className="dropdown-item"
                    onClick={handleClose}
                  >
                    System Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://custom-tech-labs-eta.vercel.app/ecommerce-solution-service"
                    className="dropdown-item"
                    onClick={handleClose}
                  >
                    eCommerce Solutions
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item mx-lg-3">
              <Link href="#" className="nav-link" onClick={handleClose}>
                Our Results
              </Link>
            </li>

            <li className="nav-item mx-lg-3">
              <Link href="#" className="nav-link" onClick={handleClose}>
                Insight
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}