"use client";
import React from "react";
import { ArrowRight, TrendingUp, DollarSign, Target } from "lucide-react";

const cases = [
    {
        category: "APPAREL BRAND",
        title: "From ₹25.7L/Month to ₹72L/Month",
        image: "/img1.jpg",
        metrics: [
            { icon: TrendingUp, value: "180%", label: "Revenue Growth" },
            { icon: Target, value: "+25%", label: "Conv. Rate" },
            { icon: DollarSign, value: "-40%", label: "CPMs" },
        ],
        description: "First starting out with them in March 2024, the brand used to hit ₹25L around per month & was stuck at the same revenue roof since last 4-5 months. 2 of the primary metrics were disturbed i.e. conversion rates + CPMs. Cracking a solid zero-to-one ROAS offer improved the conversion rates by 25% & having a solid media buying strategy helped us bring down CPMs by 40% approx. But the major goal was to give a next-level user experience to consumers, where we were able to crack by 3rd month, and 72% of revenue growth in 3rd month is testament to it. Brand's ROI & contribution margins drastically improved by 22% using our profit optimisation strategies. Finally, the brand is now growing by 30-40% MoM. (Quick Insight - DPA + cost caps work so well for women apparel)"
    },
    {
        category: "JEWELLERY & ACCESSORIES",
        title: "From ₹5.7L/Month to ₹87L/Month",
        image: "/img2.gif",
        metrics: [
            { icon: TrendingUp, value: "15x", label: "Scale Achieved" },
            { icon: DollarSign, value: "₹4.4Cr", label: "Profitable Rev" },
            { icon: Target, value: "7-8X", label: "Average ROAS" },
        ],
        description: "The jewellery & accessories brand never going beyond 6L+ months started working with us in March & since then the growth has been consistent besides profitability. The biggest concern before we started for the founder was that the brand isn't scaling as smoothly as he wanted & ROAS use to be around 5-6X that time. With our efforts on content, ads & growth consulting, we improved the ROAS to 6-7X in first 3 months & then scaled to 85L+ within 10 months. Since we started brand has almost generated a 4.4Cr in profitable revenue."
    },
    {
        category: "FMCG/CPG BRAND",
        title: "₹42 Lacs Revenue with ROAS of 11.6X",
        image: "/img3.jpg",
        metrics: [
            { icon: TrendingUp, value: "11.6X", label: "ROAS" },
            { icon: DollarSign, value: "₹3", label: "Cost Per Click" },
            { icon: Target, value: "3.18%", label: "CTR achieved" },
        ],
        description: "The brand's low-priced product range limited the Average Order Value (AOV), restricting growth despite ad spend efforts. We crafted strategic offers like bundled deals and sales promotions to boost AOV and encourage higher-ticket orders. Sharp audience segmentation ensured we reached high-intent buyers, achieving a CPM of ₹97 (below the industry average). Engaging ad creatives delivered a CTR of 3.18%, a CPC of just ₹3, and a cost per checkout initiation of ₹28. With these optimizations, we scaled the brand's campaigns, driving 3,508 purchases at a total spend of ₹3,63,516.48. This resulted in ₹42,15,819.96 in revenue with an exceptional ROAS of 11.60X. The brand successfully broke through growth barriers in a challenging market, leveraging higher AOV and cost-efficient strategies to scale profitably."
    }
];

export function CaseStudyGallery() {
    return (
        <section id="results" className="section-padding" style={{ width: "100%", backgroundColor: "#FFFFFF", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
            <div className="section-inner" style={{ maxWidth: "1600px" }}>
                {/* Section Header */}
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        backgroundColor: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)",
                        borderRadius: "100px", padding: "6px 16px", marginBottom: "24px"
                    }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#22c55e", display: "inline-block" }} />
                        <span style={{ fontSize: "13px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                            Success Stories
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 6vw, 56px)",
                        fontWeight: 900, color: "#0f172a", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "20px"
                    }}>
                        Our <span style={{ color: "#22c55e" }}>Client Results</span>
                    </h2>
                    <p style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "#64748b", lineHeight: 1.6, maxWidth: "700px", margin: "0 auto" }}>
                        We've helped brands break their revenue ceilings and add seven figures in profitable growth using data first marketing strategies.
                    </p>
                </div>

                {/* Case Study List (Vertical) */}
                <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
                    {cases.map((cs, idx) => (
                        <div key={idx}
                             className="case-study-card vertical"
                             style={{
                                 backgroundColor: "#f8fafc",
                                 border: "1px solid #e2e8f0",
                                 borderRadius: "40px",
                                 display: "grid",
                                 gridTemplateColumns: "1.2fr 1fr",
                                 overflow: "hidden",
                                 transition: "all 0.4s ease",
                                 minHeight: "500px"
                             }}>
                            {/* Image Side */}
                            <div style={{ backgroundColor: "#ffffff", padding: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #e2e8f0" }}>
                                <img src={cs.image} alt={cs.title} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", transition: "transform 0.5s ease" }} />
                            </div>

                            {/* Content Side */}
                            <div style={{ padding: "56px 48px", display: "flex", flexDirection: "column", gap: "28px", justifyContent: "center" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span style={{
                                        backgroundColor: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)",
                                        borderRadius: "8px", padding: "6px 16px",
                                        fontSize: "12px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.06em", textTransform: "uppercase"
                                    }}>
                                        {cs.category}
                                    </span>
                                </div>

                                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "36px", fontWeight: 900, color: "#0f172a", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                                    {cs.title}
                                </h3>

                                <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.75, fontWeight: 500 }}>
                                    {cs.description}
                                </p>

                                {/* Metrics Strip */}
                                <div className="metrics-strip" style={{
                                    display: "flex",
                                    gap: "40px",
                                    paddingTop: "32px",
                                    borderTop: "1px solid #e2e8f0"
                                }}>
                                    {cs.metrics.map((m, i) => (
                                        <div key={i} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <span style={{ fontFamily: "var(--font-heading)", fontSize: "24px", fontWeight: 900, color: "#22c55e" }}>
                                                {m.value}
                                            </span>
                                            <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                                                {m.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{ textAlign: "center", marginTop: "100px" }}>
                    <a href="#book-call" className="btn-cta" style={{
                        backgroundColor: "#22c55e",
                        color: "#000000",
                        fontSize: "20px",
                        fontWeight: 800,
                        fontFamily: "var(--font-heading)",
                        padding: "22px 64px",
                        borderRadius: "14px",
                        border: "none",
                        boxShadow: "0 20px 40px -10px rgba(34,197,94,0.35)",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center"
                    }}>
                        Scale Your Brand Now <ArrowRight size={22} style={{ marginLeft: "12px" }} />
                    </a>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .case-study-card {
                        grid-template-columns: 1fr !important;
                        min-height: auto !important;
                        borderRadius: 24px !important;
                    }
                    /* Image container */
                    .case-study-card > div:first-child {
                        height: 240px !important;
                        padding: 32px !important;
                        border-right: none !important;
                        border-bottom: 1px solid #e2e8f0 !important;
                    }
                    /* Content container */
                    .case-study-card > div:last-child {
                        padding: 32px 20px !important;
                        gap: 20px !important;
                    }
                    h3 {
                        font-size: 24px !important;
                        line-height: 1.2 !important;
                    }
                    p {
                        font-size: 14px !important;
                        line-height: 1.6 !important;
                    }
                    /* Metrics row */
                    .case-study-card .metrics-strip {
                        gap: 20px !important;
                        flex-wrap: wrap !important;
                        padding-top: 24px !important;
                    }
                }
            `}</style>
        </section>
    );
}
