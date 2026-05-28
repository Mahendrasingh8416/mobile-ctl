'use client';
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

const points = [
    "No bottlenecks.",
    "No fragmented systems.",
    "No fragile builds that break under growth.",
];

export default function ForYourTeam() {
    return (
        <>
            <section className="container-fluid mb-5 py-5">
                <div className="container py-lg-5 px-3 px-md-4" style={{ width: '90%' }}>

                    {/* Top Heading */}
                    <div className="text-center">
                        <h1
                            style={{
                                backgroundColor: "yellow",
                                textAlign: "center",
                                paddingTop: "2%",
                                paddingBottom: "2%",
                                marginLeft: "5%",
                                marginRight: "5%",
                                fontSize: "clamp(22px, 4vw, 32px)"
                            }}
                        >
                            Two Sides of the Same System
                        </h1>
                    </div>

                    <div className="text-center mb-4 mt-4">
                        <h2
                            className="fw-bold"
                            style={{
                                color: '#014421',
                                fontSize: 'clamp(20px, 4vw, 25px)'
                            }}
                        >
                            For Your Team
                        </h2>
                    </div>

                    <h1
                        className="mt-3 fw-semibold fst-italic lh-tight text-dark text-center text-lg-start"
                        style={{
                            fontSize: 'clamp(18px, 3vw, 20px)',
                            maxWidth: '900px',
                            marginBottom: '2rem'
                        }}
                    >
                        Your website shouldn’t create operational dependency
                    </h1>

                    {/* Main Content Row */}
                    <div className="row g-4 g-lg-5 align-items-start mt-2">

                        {/* Image */}
                        <div className="col-12 col-lg-7">
                            <div className="rounded-3 overflow-hidden shadow-sm">
                                <Image
                                    src="/web/same.jpg"
                                    width={700}
                                    height={700}
                                    alt="Team Image"
                                    className="img-fluid w-100 object-fit-cover"
                                    style={{
                                        height: 'auto',
                                        maxHeight: '600px'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="col-12 col-lg-5">

                            <p
                                className="lh-base mb-4"
                                style={{
                                    color: '#1f1f1f',
                                    fontSize: 'clamp(14px, 2vw, 15px)'
                                }}
                            >
                                If every update requires developer support,
                                momentum slows. If systems don’t connect, your team
                                compensates manually.
                            </p>

                            <h3
                                className="fw-bold lh-snug mb-4"
                                style={{
                                    fontSize: 'clamp(14px, 2vw, 15px)'
                                }}
                            >
                                Well-structured custom website development restores control.
                            </h3>

                            <p
                                className="fst-italic lh-lg mb-4"
                                style={{
                                    color: '#8d8d8d',
                                    fontSize: 'clamp(14px, 2vw, 15px)'
                                }}
                            >
                                We build custom websites that integrate your tools,
                                simplify workflows and give your team structured control.
                            </p>

                            {/* Negative Points */}
                            <div className="d-flex flex-column gap-3 mb-5">
                                {points.map((item, idx) => (
                                    <div key={idx} className="d-flex align-items-center gap-3">
                                        <RxCross2
                                            className="text-danger flex-shrink-0"
                                            size={22}
                                            style={{ strokeWidth: '1.5' }}
                                        />
                                        <h4
                                            className="mb-0 fw-semibold"
                                            style={{
                                                color: '#7a7a7a',
                                                fontSize: 'clamp(14px, 2vw, 15px)'
                                            }}
                                        >
                                            {item}
                                        </h4>
                                    </div>
                                ))}
                            </div>

                            {/* Result Box */}
                            <div className="bg-black p-4 rounded-4 shadow">
                                <h3
                                    className="fw-bold mb-2"
                                    style={{
                                        color: '#EEF430',
                                        fontSize: 'clamp(14px, 2vw, 15px)'
                                    }}
                                >
                                    The result is simple:
                                </h3>

                                <p
                                    className="text-white mb-0"
                                    style={{
                                        fontSize: 'clamp(14px, 2vw, 18px)'
                                    }}
                                >
                                    You’ll gain clarity, efficiency and full autonomy.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                                <button
                                    className="btn text-dark w-100 w-sm-auto"
                                    style={{ backgroundColor: "yellow" }}
                                >
                                    View Our Portfolio →
                                </button>

                                <button
                                    className="btn text-dark w-100 w-sm-auto"
                                    style={{ backgroundColor: "yellow" }}
                                >
                                    Work With Us →
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}