"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/appsimg/case.jpg",
    title: "Industries We Transform",
    description:
      "We’ve built systems for healthcare operations, retail platforms, educational ecosystems, construction workflows, and manufacturing environments helping them replace inefficient processes with systems that reduce errors and improve visibility.",
  },
  {
    image: "/appsimg/case.jpg",
    title: "Industries We Transform",
    description:
      "We’ve built systems for healthcare operations, retail platforms, educational ecosystems, construction workflows, and manufacturing environments helping them replace inefficient processes with systems that reduce errors and improve visibility.",
  },
  {
    image: "/appsimg/case.jpg",
    title: "Industries We Transform",
    description:
      "We’ve built systems for healthcare operations, retail platforms, educational ecosystems, construction workflows, and manufacturing environments helping them replace inefficient processes with systems that reduce errors and improve visibility.",
  },
];

export default function CaseStudies() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section
      className="container-fluid mt-4 mt-md-5 position-relative px-0"
      style={{ backgroundColor: "#fff" }}
    >
      <section className="container-fluid p-0 position-relative">
        <div className="banners-containers banner-container">
          <div className="content-wrapper">
            <h2 className="pt-3 text-center text-md-start">Case Studies</h2>
          </div>
        </div>

        <div className="position-relative">
          <div
            className="row justify-content-center align-items-center position-relative"
            style={{ top: isMobile ? "-20px" : "-52px" }}
          >
            {/* rest of your code same rahega */}
          </div>
        </div>
      </section>
    </section>
  );
}