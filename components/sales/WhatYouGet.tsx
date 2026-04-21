"use client";
import React from "react";

const transformations = [
    {
        from: "Burning ₹50K/month on ads with no idea what's working",
        to: "Every rupee tracked to revenue, so you know your exact CAC, ROAS, and profit margin at all times",
    },
    {
        from: "One bad month wipes out your entire ad budget",
        to: "Revenue spread across Meta, Instagram & Google so no single platform can kill your month",
    },
    {
        from: "Creatives that go stale in 2 weeks and tank your CPMs",
        to: "15–25 fresh, tested ad variations every month keeping your CPMs low and CTR high",
    },
    {
        from: "Chasing customers once and never seeing them again",
        to: "A retention flywheel that turns first-time buyers into repeat customers, resulting in 25 to 40% more LTV",
    },
    {
        from: "An agency that reports vanity metrics and disappears",
        to: "Weekly calls, live dashboards, and a team that treats your P&L like it's their own",
    },
    {
        from: "Guessing why your conversion rate tanked this month",
        to: "Systematic CRO consisting of tested landing pages, checkout fixes, and AOV upsells so more traffic equals more revenue",
    },
    {
        from: "Feeling stuck at the same revenue number for 6 months",
        to: "A clear, contractually backed path to ₹70L to ₹1CR per month within 120 days",
    },
];

export function WhatYouGet() {
    return (
        <section
            id="what-you-get"
            className="section-padding"
            style={{
                backgroundColor: "#FFFFFF",
                position: "relative",
                overflow: "hidden",
                borderTop: "1px solid #f1f5f9"
            }}
        >
            <div className="section-inner" style={{ position: "relative" }}>
                {/* Header */}
                <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 72px" }}>
                    <div style={{
                        color: "#16a34a",
                        fontSize: "12px",
                        fontWeight: 800,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: "20px",
                    }}>
                        What You Get
                    </div>
                    <h2 style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(28px, 4.5vw, 46px)",
                        fontWeight: 900,
                        color: "#0f172a",
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        marginBottom: "20px",
                    }}>
                        We don't just run ads.{" "}
                        <span style={{ color: "#22c55e" }}>
                            We change what's possible for your brand.
                        </span>
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "17px", lineHeight: 1.7 }}>
                        Here's the exact shift every brand we work with goes through, from where you are now to where you'll be in 120 days.
                    </p>
                </div>

                {/* Transformation rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "1000px", margin: "0 auto" }}>
                    {transformations.map((item, index) => (
                        <div
                            key={index}
                            className="wyg-row"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr auto 1fr",
                                alignItems: "center",
                                gap: "20px",
                                borderRadius: "16px",
                                border: "1px solid #e2e8f0",
                                backgroundColor: "#f8fafc",
                                padding: "24px 28px",
                                transition: "all 0.25s ease",
                            }}
                        >
                            {/* FROM */}
                            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                <div style={{
                                    width: "28px", height: "28px", borderRadius: "8px",
                                    backgroundColor: "#dc2626",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    flexShrink: 0, fontSize: "12px", color: "#ffffff",
                                    fontWeight: 900
                                }}>
                                    ✕
                                </div>
                                <p style={{ color: "#dc2626", fontSize: "14px", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                                    {item.from}
                                </p>
                            </div>

                            {/* Arrow */}
                            <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                                <div style={{
                                    width: "32px", height: "32px", borderRadius: "50%",
                                    backgroundColor: "#22c55e",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "#ffffff", fontSize: "16px", fontWeight: 800,
                                    boxShadow: "0 4px 12px -2px rgba(34,197,94,0.3)"
                                }}>
                                    →
                                </div>
                            </div>

                            {/* TO */}
                            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                <div style={{
                                    width: "28px", height: "28px", borderRadius: "8px",
                                    backgroundColor: "#22c55e",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    flexShrink: 0, fontSize: "12px", color: "#ffffff",
                                    fontWeight: 900
                                }}>
                                    ✓
                                </div>
                                <p style={{ color: "#1e293b", fontSize: "14px", fontWeight: 700, lineHeight: 1.6, margin: 0 }}>
                                    {item.to}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom stat strip */}
                <div className="stat-strip" style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1px",
                    backgroundColor: "#e2e8f0",
                    borderRadius: "20px",
                    overflow: "hidden",
                    marginTop: "72px",
                    border: "1px solid #e2e8f0",
                }}>
                    {[
                        { stat: "3 Brands/Mo", label: "Max intake, so every client gets full attention" },
                        { stat: "100% DFY", label: "We handle everything. You just approve and scale" },
                    ].map((item, i) => (
                        <div key={i} style={{ backgroundColor: "#f8fafc", padding: "36px 32px", textAlign: "center" }}>
                            <div style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "clamp(24px, 3vw, 32px)",
                                fontWeight: 900, color: "#22c55e", marginBottom: "8px",
                            }}>
                                {item.stat}
                            </div>
                            <div style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.55, fontWeight: 500 }}>
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .wyg-row:hover {
                    border-color: rgba(34,197,94,0.3);
                    background-color: #ffffff;
                    box-shadow: 0 8px 24px -8px rgba(0,0,0,0.08);
                }
                @media (max-width: 768px) {
                    .wyg-row {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                        padding: 32px 24px !important;
                    }
                    /* Hide the horizontal arrow container on mobile */
                    .wyg-row > div:nth-child(2) {
                        display: none !important;
                    }
                    /* Stat strip: ensure equal width on mobile */
                    .stat-strip {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    .stat-strip > div {
                        padding: 24px 12px !important;
                    }
                    .stat-strip div div:first-child {
                        font-size: 20px !important;
                    }
                    .stat-strip div div:last-child {
                        font-size: 11px !important;
                        line-height: 1.4 !important;
                    }
                }
            `}</style>
        </section>
    );
}
