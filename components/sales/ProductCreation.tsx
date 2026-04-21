"use client";
import React from "react";

export function ProductCreation() {
    return (
        <section style={{ backgroundColor: "#FFFFFF", padding: "120px 20px", position: "relative", overflow: "hidden", borderTop: "1px solid #f1f5f9" }}>
            <div className="section-inner" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
                <div>
                    <h2 style={{
                        fontSize: "clamp(32px, 5vw, 52px)",
                        color: "#0f172a",
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: "32px",
                        letterSpacing: "-0.02em"
                    }}>
                        "You don't find winning products, <span style={{ color: "#22c55e" }}>you create them.</span>"
                    </h2>

                    <p style={{
                        color: "#475569",
                        fontSize: "18px",
                        lineHeight: 1.75,
                        marginBottom: "40px"
                    }}>
                        Most ecom store owners wait for a 'winning' product to drop in their lap. We don't wait. We use data driven creative engineering and aggressive offer optimization to turn your average SKUs into mass-market winners.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        {[
                            { title: "Creative Engineering", desc: "We test 20+ hooks per week to find the exact angle that clicks." },
                            { title: "Offer Architecture", desc: "Bundles, upsells, and price point testing geared for max AOV." },
                            { title: "Market Message Resonancy", desc: "Aligning your brand voice with actual consumer pain points." }
                        ].map((item, idx) => (
                            <div key={idx} style={{ display: "flex", gap: "20px" }}>
                                <div style={{
                                    width: "48px", height: "48px", borderRadius: "12px",
                                    backgroundColor: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)",
                                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                                    color: "#22c55e", fontWeight: 800, fontSize: "16px"
                                }}>
                                    {idx + 1}
                                </div>
                                <div>
                                    <h4 style={{ color: "#0f172a", fontWeight: 700, fontSize: "18px", marginBottom: "4px" }}>{item.title}</h4>
                                    <p style={{ color: "#64748b", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ position: "relative" }}>
                    <div style={{
                        borderRadius: "24px",
                        border: "1px solid #e2e8f0",
                        overflow: "hidden",
                        backgroundColor: "#f8fafc",
                        padding: "0",
                        boxShadow: "0 20px 60px -15px rgba(0,0,0,0.08)"
                    }}>
                        <img 
                            src="/d2c-roadmap.jpg" 
                            alt="D2C Marketing Roadmap" 
                            style={{ 
                                width: "100%", 
                                height: "auto", 
                                display: "block" 
                            }} 
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 900px) {
                    section {
                        padding: 60px 20px !important;
                    }
                    .section-inner {
                        grid-template-columns: 1fr !important;
                        gap: 48px !important;
                    }
                    h2 {
                        font-size: 30px !important;
                        margin-bottom: 24px !important;
                    }
                }
            `}</style>
        </section>
    );
}
