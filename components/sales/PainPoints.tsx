"use client";
import React from "react";
import { X, TriangleAlert } from "lucide-react";

export function PainPoints() {
    const points = [
        "Your brand isn't scaling as smoothly as you'd like",
        "You're stuck on a certain revenue for a long while now & can't go beyond",
        "Your ROAS is constantly dipping & you don't know what's happening",
        "Your ROAS is just around Breakeven, you're barely left with anything."
    ];

    return (
        <section id="why-us" className="section-padding" style={{
            backgroundColor: "#050608",
            borderTop: "1px solid rgba(255,255,255,0.03)",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Ambient Background Glows */}
            <div style={{
                position: "absolute", top: "-10%", left: "5%",
                width: "40%", height: "40%",
                background: "radial-gradient(circle at center, rgba(220,38,38,0.03) 0%, transparent 60%)",
                filter: "blur(80px)", pointerEvents: "none"
            }} />
            <div style={{
                position: "absolute", bottom: "-10%", right: "5%",
                width: "40%", height: "40%",
                background: "radial-gradient(circle at center, rgba(34,197,94,0.02) 0%, transparent 60%)",
                filter: "blur(80px)", pointerEvents: "none"
            }} />

            <div className="section-inner">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", alignItems: "flex-start" }} className="pain-grid">
                    {/* Left Side: Content */}
                    <div>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "10px",
                            padding: "8px 16px", borderRadius: "12px",
                            backgroundColor: "rgba(220,38,38,0.05)", border: "1px solid rgba(220,38,38,0.15)",
                            marginBottom: "32px"
                        }}>
                            <TriangleAlert size={16} color="#ef4444" />
                            <span style={{ fontSize: "11px", fontWeight: 800, color: "#f87171", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                                Current Challenges
                            </span>
                        </div>

                        <h2 style={{
                            fontSize: "clamp(32px, 4vw, 48px)",
                            fontWeight: 900,
                            color: "#ffffff",
                            lineHeight: 1.1,
                            fontFamily: "var(--font-heading)",
                            letterSpacing: "-0.03em",
                            marginBottom: "24px"
                        }}>
                            Facing Growth Killing <span style={{ color: "#ef4444" }}>Roadblocks?</span>
                        </h2>

                        <p style={{
                            fontSize: "18px",
                            color: "#94a3b8",
                            lineHeight: 1.7,
                            maxWidth: "500px",
                            fontWeight: 500
                        }}>
                            Most eCommerce founders are stuck in the "Scaling Loop" spending more but making less. If your brand feels stagnant, it's usually because of these four core issues.
                        </p>
                    </div>

                    {/* Right Side: Interactive Cards */}
                    <div style={{ display: "grid", gap: "20px" }}>
                        {points.map((p, idx) => (
                            <div key={idx}
                                className="pain-row"
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.02)",
                                    border: "1px solid rgba(255,255,255,0.05)",
                                    borderRadius: "20px",
                                    padding: "32px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "24px",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    cursor: "default"
                                }}
                            >
                                <div style={{
                                    width: "48px", height: "48px", borderRadius: "14px",
                                    backgroundColor: "rgba(220,38,38,0.1)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    flexShrink: 0, color: "#ef4444",
                                    border: "1px solid rgba(220,38,38,0.2)"
                                }}>
                                    <X size={20} strokeWidth={3} />
                                </div>
                                <h4 style={{
                                    fontSize: "17px",
                                    fontWeight: 700,
                                    color: "#f1f5f9",
                                    margin: 0,
                                    lineHeight: 1.5,
                                    letterSpacing: "-0.01em"
                                }}>
                                    {p}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .pain-row:hover {
                    background-color: rgba(220, 38, 38, 0.05) !important;
                    border-color: rgba(220, 38, 38, 0.3) !important;
                    transform: translateX(10px);
                }
                @media (max-width: 1024px) {
                    .pain-grid {
                        grid-template-columns: 1fr !important;
                        gap: 48px !important;
                    }
                    .pain-row:hover {
                        transform: translateY(-5px);
                    }
                }
            `}</style>
        </section>
    );
}
