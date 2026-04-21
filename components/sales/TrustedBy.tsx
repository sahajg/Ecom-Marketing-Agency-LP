"use client";
import React from "react";

export function TrustedBy() {
    const clientLogos = [
        "babynmeindia.com",
        "croffle guys.jpg",
        "dulaar.co.avif",
        "elope.webp",
        "firstinonline.webp",
        "kinaasa.in.webp",
        "snugglyspaces.com",
        "wearrae.in.avif"
    ];

    // Duplicate the logos for a seamless infinite scroll
    const allLogos = [...clientLogos, ...clientLogos, ...clientLogos];

    return (
        <section style={{
            width: "100%",
            backgroundColor: "#0F1014",
            padding: "56px 0",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            borderBottom: "1px solid rgba(255,255,255,0.04)",
            overflow: "hidden",
        }}>
            {/* Label */}
            <div style={{
                textAlign: "center",
                marginBottom: "40px",
                fontSize: "14px",
                fontWeight: 800,
                color: "rgba(241, 245, 249, 0.7)",
                letterSpacing: "0.2em",
                textTransform: "uppercase"
            }}>
                Trusted by Leading E-commerce Brands
            </div>

            {/* Marquee Track */}
            <div style={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
            }}>
                {/* Fade edges */}
                <div style={{
                    position: "absolute", left: 0, top: 0, bottom: 0,
                    width: "200px",
                    background: "linear-gradient(to right, #0F1014 0%, transparent 100%)",
                    zIndex: 2,
                    pointerEvents: "none"
                }} />
                <div style={{
                    position: "absolute", right: 0, top: 0, bottom: 0,
                    width: "200px",
                    background: "linear-gradient(to left, #0F1014 0%, transparent 100%)",
                    zIndex: 2,
                    pointerEvents: "none"
                }} />

                {/* Scrolling Row */}
                <div className="marquee-track">
                    {allLogos.map((logo, index) => (
                        <div key={index} className="logo-card">
                            <img
                                src={`/clients/${logo}`}
                                alt={`Client logo ${index + 1}`}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain",
                                    display: "block"
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .marquee-track {
                    display: flex;
                    align-items: center;
                    gap: 24px;
                    width: max-content;
                    animation: marquee-scroll 28s linear infinite;
                    padding: 0 12px;
                }

                @media (hover: hover) and (pointer: fine) {
                    .marquee-track:hover {
                        animation-play-state: paused;
                    }
                }

                @keyframes marquee-scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-33.333%); }
                }

                .logo-card {
                    flex-shrink: 0;
                    width: 200px;
                    height: 100px;
                    background-color: #ffffff;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 18px 24px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.25);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .logo-card:hover {
                    transform: scale(1.06);
                    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
                }
                @media (max-width: 768px) {
                    .logo-card {
                        width: 140px !important;
                        height: 70px !important;
                        padding: 12px 16px !important;
                        border-radius: 10px !important;
                    }
                    .marquee-track {
                        gap: 16px !important;
                    }
                }
            `}</style>
        </section>
    );
}
