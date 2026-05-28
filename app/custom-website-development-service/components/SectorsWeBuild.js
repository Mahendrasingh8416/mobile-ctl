'use client';
import Image from "next/image";

const sectors = [
    { name: "Healthcare", img: "/web/d1.png" },
    { name: "Retail", img: "/web/d2.png" },
    { name: "Education", img: "/web/d3.png" },
    { name: "Construction", img: "/web/d4.png" },
    { name: "Manufacturing", img: "/web/d5.png" },
];

export default function SectorsWeBuild() {
    return (
        <>
            <section className="container-fluid py-5 d-flex flex-column align-items-center gap-4">

                {/* Main Header Bar */}
                <div
                    className="col-11 col-md-8 col-lg-7 d-flex justify-content-center align-items-center py-3"
                    style={{
                        backgroundColor: '#eef430',
                        width: '90%',
                        marginTop: '-5%'
                    }}
                >
                    <h1
                        className="fw-bold mb-0 text-center px-2"
                        style={{ fontSize: 'clamp(1.2rem, 3vw, 2.3rem)' }}
                    >
                        Sectors We Build For
                    </h1>
                </div>

                {/* Subheading */}
                <div className="text-center px-3">
                    <h3
                        className="fw-normal mb-0"
                        style={{
                            fontSize: 'clamp(16px, 2vw, 22px)',
                            fontStyle: "italic"
                        }}
                    >
                        <span className="fw-bold">
                            Different industries. Same friction. Same fix.
                        </span>
                        <br className="d-none d-md-block" />
                        We connect what should never have been separate in the first place.
                    </h3>
                </div>

                {/* Sectors Grid */}
                <div className="container" style={{ maxWidth: '1100px' }}>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">

                        {sectors.map((sector, index) => (
                            <div key={index} className="col d-flex justify-content-center">
                                <div
                                    className="d-flex flex-column justify-content-center align-items-center p-3 shadow-sm hover-lift sector-card"
                                    style={{
                                        backgroundColor: '#f5f5f5',
                                        border: "3px solid yellow"
                                    }}
                                >
                                    <div
                                        className="mb-2 position-relative"
                                        style={{
                                            width: '100%',
                                            height: '70px'
                                        }}
                                    >
                                        <Image
                                            src={sector.img}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            alt={sector.name}
                                        />
                                    </div>
                                    <h4
                                        className="fw-semibold m-0 text-center"
                                        style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}
                                    >
                                        {sector.name}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Statement */}
                <div className="col-11 col-md-8 col-lg-6 text-center px-3">
                    <p
                        className="fw-normal mb-0"
                        style={{
                            fontSize: 'clamp(15px, 2vw, 18px)',
                            fontStyle: "italic"
                        }}
                    >
                        The industries may differ, but the goal stays the same:
                        <br className="d-none d-md-block" />
                        Replace fragmented technology with connected digital ecosystems.
                    </p>
                </div>

                <style jsx>{`
                    .hover-lift {
                        transition: transform 0.2s ease, box-shadow 0.2s ease;
                        cursor: default;
                    }

                    .hover-lift:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 5px 15px rgba(0,0,0,0.08) !important;
                    }

                    .sector-card {
                        width: 100%;
                        max-width: 237px;
                        min-height: 163px;
                    }

                    @media (max-width: 768px) {
                        .sector-card {
                            max-width: 100%;
                        }
                    }
                `}</style>

            </section>

            <div
                style={{
                    width: '100%',
                    borderTop: '15px solid #eff430',
                    borderBottom: '15px solid #000'
                }}
            ></div>
        </>
    );
}