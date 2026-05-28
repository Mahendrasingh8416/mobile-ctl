'use client';
import Image from "next/image";
import Link from "next/link";

const philosophyData = [
    {
        img: '/web/a1.png',
        title: "Clarity Before Design",
        description: "We start with clarity.If positioning isn’t sharp, design won’t save it.",
    },
    {
        img: '/web/a2.png',
        title: "Real Behavior Over Assumptions",
        description: "We design for real behavior.Not ideal users. Not assumed patterns.",
    },
    {
        img: '/web/a3.png',
        title: "Structure Before Scale ",
        description: "We build for longevity.Scalable architecture. Clean code. Structured foundations.",
    },
    {
        img: '/web/a4.png',
        title: " Intention Over Launch",
        description: "We launch with intention.No chaos. No forced adoption. No fragile systems. ",
    },
    {
        img: '/web/a5.png',
        title: "Reality Over Theory ",
        description: "We refine based on data.Usage reveals truth. We follow it.",
    },
    {
        img: '/web/a6.png',
        title: "We Optimize In Practice, Not Theory. ",
        description: "User behavior is our compass. Every click and scroll guides us.",
    },
];

export default function WebDevelopmentPhilosophy() {
    return (
        <section
            className="container-fluid my-5 p-0 overflow-hidden"
            style={{ backgroundColor: '#f3f3f3' }}
        >

            {/* Top Header */}
            <div className="w-100 bg-black py-3 px-3 px-md-4">
                <h1
                    className="text-white text-center fw-bold mb-0"
                    style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
                >
                    Our Web Development Philosophy
                </h1>
            </div>

            <div className="container py-4 py-md-5" style={{ width: "92%" }}>

                {/* Subtitle */}
                <h2
                    className="text-center fst-italic text-dark mb-4 mb-md-5 px-2 px-md-5"
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.6rem)',
                        lineHeight: '1.4'
                    }}
                >
                    Built on the same principles that guide every platform we develop.
                </h2>

                {/* Grid Cards */}
                <div className="row g-4 px-0 px-md-3">
                    {philosophyData.map((item, idx) => (
                        <div key={idx} className="col-12 col-md-6">
                            <div className="border border-dark h-100 p-3 d-flex flex-column transition-hover bg-transparent philosophy-card">

                                {/* Yellow Icon Box */}
                                <div
                                    className="d-flex align-items-center justify-content-center flex-shrink-0 mb-4"
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        backgroundColor: '#EEF430'
                                    }}
                                >
                                    <Image
                                        src={item.img}
                                        width={30}
                                        height={30}
                                        alt="icon"
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <h3
                                        className="fw-bold text-black mb-3"
                                        style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="text-secondary mb-0 lh-lg"
                                        style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1rem)' }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-4 pt-3 d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
                    <Link
                        href="/"
                        className="btn fw-bold d-flex align-items-center justify-content-center hover-scale border-0 text-black shadow-sm philosophy-btn"
                        style={{
                            backgroundColor: '#EEF430',
                            borderRadius: '6px'
                        }}
                    >
                        View our Portfolio →
                    </Link>

                    <Link
                        href="/solutionservice"
                        className="btn fw-bold d-flex align-items-center justify-content-center hover-scale border-0 text-black shadow-sm philosophy-btn"
                        style={{
                            backgroundColor: '#EEF430',
                            borderRadius: '6px'
                        }}
                    >
                        Work With Us →
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .hover-scale {
                    transition: transform 0.3s ease;
                }

                .hover-scale:hover {
                    transform: scale(1.05);
                }

                .transition-hover {
                    transition: background-color 0.3s ease;
                }

                .transition-hover:hover {
                    background-color: rgba(0,0,0,0.02) !important;
                }

                .philosophy-btn {
                    width: 200px;
                    height: 42px;
                    font-size: 14px;
                }

                @media (max-width: 768px) {
                    .philosophy-btn {
                        width: 100%;
                        max-width: 280px;
                    }

                    .philosophy-card {
                        padding: 1rem;
                    }
                }
            `}</style>
        </section>
    );
}