'use client';

import Link from "next/link";

export default function BannerPage() {
    return (
        <>
            <section
                className="hero d-flex align-items-center"
                style={{
                    backgroundImage: "url('/web/main.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                }}
            >
                <div className="container px-3 px-md-5 py-5">
                    <div className="hero-box">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-6 text-center text-lg-start">
                                
                                <h1
                                    className="fw-bold mb-4"
                                    style={{
                                        fontSize: "clamp(2rem, 5vw, 4rem)",
                                        lineHeight: "1.2",
                                    }}
                                >
                                    Custom Website That Build Authority and Drive Action.
                                </h1>

                                <p
                                    className="mb-4"
                                    style={{
                                        fontSize: "clamp(1rem, 2vw, 1.2rem)",
                                    }}
                                >
                                    High performance website or Strategic digital platforms engineered for clarity, usability and measurable growth.
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