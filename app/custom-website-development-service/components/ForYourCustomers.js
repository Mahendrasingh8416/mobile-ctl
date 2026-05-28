'use client';
import Image from "next/image";
import Link from "next/link";

export default function ForYourCustomers() {
    return (
        <section
            className="container-fluid py-5"
            style={{ backgroundColor: '#f3f3f3' }}
        >
            <div
                className="container py-4 py-md-5 px-3 px-md-5 rounded-5"
                style={{
                    backgroundColor: '#ebebeb',
                    width: '90%',
                    maxWidth: '1400px'
                }}
            >

                {/* Section Header */}
                <div className="text-center mb-4 mb-md-5">
                    <h2
                        className="fw-bold"
                        style={{
                            color: '#014421',
                            fontSize: 'clamp(22px, 4vw, 25px)'
                        }}
                    >
                        For Your Customers
                    </h2>
                </div>

                {/* Top Content Row */}
                <div className="row g-4 align-items-center mb-4 mb-md-5">

                    {/* Left Image */}
                    <div className="col-12 col-lg-6">
                        <div className="rounded-3 overflow-hidden shadow-sm">
                            <Image
                                src="/web/customer.jpg"
                                width={650}
                                height={450}
                                alt="Customer Experience"
                                className="img-fluid w-100 h-auto object-fit-cover"
                            />
                        </div>
                    </div>

                    {/* Right Text Content */}
                    <div className="col-12 col-lg-6 text-center text-lg-start">
                        <h1
                            className="fw-bold fst-italic lh-tight mb-4"
                            style={{
                                fontSize: 'clamp(18px, 4vw, 20px)'
                            }}
                        >
                            Your website is often the first <br />
                            experience someone has with your <br />
                            brand.
                        </h1>

                        <p className="fw-bold mb-3">
                            Every interaction shapes perception.
                        </p>

                        {/* Highlight Label */}
                        <div className="d-inline-block bg-black px-3 py-2">
                            <h3
                                className="text-yellow fw-bold mb-0"
                                style={{ fontSize: '0.9rem' }}
                            >
                                Speed. Navigation. Structure. Flow.
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Bottom Text Content */}
                <div className="mt-4 text-center text-lg-start">
                    <p
                        className="fw-bold fst-italic lh-lg mb-4 text-dark"
                        style={{
                            fontSize: 'clamp(14px, 2vw, 18px)'
                        }}
                    >
                        We build custom digital environments that guide users with clarity—
                        whether that means <span className="fw-bold fst-normal">custom ecommerce website development</span>,
                        service pages, booking systems, advanced integrations or modern
                        <span className="fw-bold fst-normal"> AI features in website experiences</span> or integrated portals.
                    </p>

                    <h3
                        className="fw-bold fst-italic mb-2"
                        style={{
                            fontSize: 'clamp(14px, 2vw, 15px)'
                        }}
                    >
                        We build platforms that guide users through information and action.
                    </h3>

                    <div className="mb-4 mb-md-5">
                        <h3
                            className="fw-bold mb-2"
                            style={{
                                fontSize: 'clamp(14px, 2vw, 15px)'
                            }}
                        >
                            Because a well-built website doesn’t just function.
                        </h3>

                        <div className="d-inline-block bg-black px-2 py-1">
                            <h3
                                className="fw-bold mb-0"
                                style={{
                                    color: '#EEF430',
                                    fontSize: '0.9rem'
                                }}
                            >
                                It builds confidence.
                            </h3>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                        <Link
                            href="/"
                            className="btn fw-bold d-flex align-items-center justify-content-center hover-scale border-0 text-black w-100 w-sm-auto"
                            style={{
                                backgroundColor: '#EEF430',
                                minWidth: '180px',
                                height: '42px',
                                borderRadius: '6px'
                            }}
                        >
                            View our Portfolio→
                        </Link>

                        <Link
                            href="/solutionservice"
                            className="btn fw-bold d-flex align-items-center justify-content-center hover-scale border-0 text-black w-100 w-sm-auto"
                            style={{
                                backgroundColor: '#EEF430',
                                minWidth: '180px',
                                height: '42px',
                                borderRadius: '6px'
                            }}
                        >
                            Work With Us →
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hover-scale {
                    transition: transform 0.3s ease;
                }

                .hover-scale:hover {
                    transform: scale(1.05);
                }

                .text-yellow {
                    color: #EEF430;
                }

                @media (max-width: 576px) {
                    .hover-scale {
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
}