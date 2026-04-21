"use client";
import React from "react";

const steps = [
    {
        number: "01",
        phase: "Week 1 to 2",
        title: "Deep Dive Audit & War Room",
        description:
            "Before we touch a single ad, we dissect your business. We map your unit economics (CAC, LTV, blended ROAS), identify where revenue is leaking, and benchmark your creatives against top performers in your category. Most brands discover they were leaving 30–40% of revenue on the table before we even launch.",
        outcomes: [
            "Full funnel profitability report",
            "Creative & competitor gap analysis",
            "90-day scaling roadmap",
        ],
        icon: "🔬",
    },
    {
        number: "02",
        phase: "Week 2 to 3",
        title: "Creative Engine Goes Live",
        description:
            "We build a creative system and not just ads. Our team produces high-converting UGC, lifestyle videos, and static assets grounded in real customer psychology and scroll-stopping hooks tested across thousands of creatives. We ship 15 to 25 new ad variations per month so your audience never goes cold.",
        outcomes: [
            "15–25 fresh ad creatives/month",
            "Hook testing framework",
            "Brand consistent UGC scripts",
        ],
        icon: "🎬",
    },
    {
        number: "03",
        phase: "Week 3 to 4",
        title: "Full Funnel Launch Across Meta, Instagram & Google",
        description:
            "We deploy our proprietary bidding architecture across Meta, Instagram & Google simultaneously, eliminating platform dependency and de-risking your ad spend. Each channel targets a specific buying intent: Instagram for discovery & top of funnel reach, Meta for retargeting warm audiences, Google for purchase-ready intent. One broken platform never kills your month again.",
        outcomes: [
            "Multi platform media buying",
            "Custom landing page optimisation",
            "Purchase intent bid strategies",
        ],
        icon: "🚀",
    },
    {
        number: "04",
        phase: "Month 2",
        title: "Conversion Rate & AOV Optimisation",
        description:
            "Scaling spend on a leaky funnel is burning money. We run systematic CRO experiments on your product pages, checkout flow, and post purchase upsells to squeeze every rupee of value out of the traffic we're already sending. A 10% lift in CVR can double your ROAS without touching the budget.",
        outcomes: [
            "A/B tested landing pages",
            "Checkout flow fixes",
            "Post purchase upsell sequences",
        ],
        icon: "📈",
    },
    {
        number: "05",
        phase: "Month 2 to 3",
        title: "Retention Flywheel & LTV Maximisation",
        description:
            "New customer acquisition is expensive. Repeat customers are free profit. We build and optimise your email and SMS flows, including welcome series, win back campaigns, and loyalty triggers, so every customer you acquire buys again and again. Brands typically see a 25 to 40% boost in repeat purchase rate within 60 days.",
        outcomes: [
            "Email & SMS automation build",
            "VIP loyalty triggers",
            "Win back campaign sequences",
        ],
        icon: "♻️",
    },
    {
        number: "06",
        phase: "Month 3+",
        title: "Aggressive Scale To ₹1CR/Month & Beyond",
        description:
            "With the foundation locked in with proven creatives, optimised funnel, and high retention backend, we scale budget aggressively and predictably. No more fear of ruining ROAS when you increase spend. This is where brands go from ₹10L months to ₹70L to ₹1CR+ months, contractually guaranteed.",
        outcomes: [
            "Guaranteed ROAS floor maintained",
            "Budget scaling playbook",
            "Monthly performance review",
        ],
        icon: "💰",
    },
];

export function ProcessSection() {
    return (
        <section
            id="process"
            className="section-padding"
            style={{
                backgroundColor: "#0a0c0f",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background glow */}
            <div style={{
                position: "absolute", top: "20%", left: "-5%",
                width: "500px", height: "500px",
                background: "radial-gradient(circle at center, rgba(34,197,94,0.05) 0%, transparent 70%)",
                filter: "blur(80px)", pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", bottom: "10%", right: "-5%",
                width: "400px", height: "400px",
                background: "radial-gradient(circle at center, rgba(34,197,94,0.03) 0%, transparent 70%)",
                filter: "blur(80px)", pointerEvents: "none",
            }} />

            <div className="section-inner">
                {/* Header */}
                <div className="process-header" style={{ maxWidth: "720px", marginBottom: "80px" }}>
                    <div style={{
                        color: "#22c55e",
                        fontSize: "12px",
                        fontWeight: 800,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: "20px",
                    }}>
                        Our Process
                    </div>
                    <h2 style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(30px, 4.5vw, 48px)",
                        fontWeight: 900,
                        color: "#f1f5f9",
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        marginBottom: "20px",
                    }}>
                        From ₹3L/Month to ₹1CR+. Here's Exactly How We Do It.
                    </h2>
                    <p style={{
                        color: "#94a3b8",
                        fontSize: "17px",
                        lineHeight: 1.75,
                        maxWidth: "600px",
                    }}>
                        No vague "strategies." No 6 month ramp up periods. This is the
                        exact, step by step playbook we run for every brand we take on,
                        built to hit contractual results within 120 days.
                    </p>
                </div>

                {/* Timeline */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0px", position: "relative" }}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="process-step-row"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "120px 1px 1fr",
                                gap: "0 40px",
                                position: "relative",
                            }}
                        >
                            {/* Left: phase label */}
                            <div className="desktop-phase-column" style={{
                                paddingTop: "36px",
                                paddingBottom: index < steps.length - 1 ? "48px" : "0",
                                textAlign: "right",
                            }}>
                                <div style={{
                                    fontSize: "11px",
                                    fontWeight: 700,
                                    letterSpacing: "0.12em",
                                    color: "#475569",
                                    textTransform: "uppercase",
                                    whiteSpace: "nowrap",
                                }}>
                                    {step.phase}
                                </div>
                            </div>

                            {/* Center: timeline line + dot */}
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
                                <div style={{
                                    marginTop: "32px",
                                    width: "14px", height: "14px",
                                    borderRadius: "50%",
                                    backgroundColor: "#22c55e",
                                    border: "2px solid rgba(34,197,94,0.5)",
                                    boxShadow: "0 0 14px rgba(34,197,94,0.5)",
                                    flexShrink: 0,
                                    position: "relative",
                                    zIndex: 1,
                                    transform: "translateX(0.5px)",
                                }} />
                                {index < steps.length - 1 && (
                                    <div style={{
                                        flex: 1, width: "1px", marginTop: "8px",
                                        background: "linear-gradient(to bottom, rgba(34,197,94,0.25), rgba(34,197,94,0.04))",
                                    }} />
                                )}
                            </div>

                            {/* Right: content */}
                            <div style={{
                                paddingTop: "24px",
                                paddingBottom: index < steps.length - 1 ? "48px" : "0",
                            }}>
                                {/* Step header */}
                                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                                    <span style={{ fontSize: "24px" }}>{step.icon}</span>
                                    <div>
                                        <div style={{
                                            fontSize: "11px",
                                            fontWeight: 800,
                                            letterSpacing: "0.15em",
                                            color: "#22c55e",
                                            textTransform: "uppercase",
                                            marginBottom: "4px",
                                        }}>
                                            Step {step.number} <span className="mobile-phase-label">• {step.phase}</span>
                                        </div>
                                        <h3 style={{
                                            fontFamily: "var(--font-heading)",
                                            fontSize: "clamp(18px, 2.5vw, 22px)",
                                            fontWeight: 800,
                                            color: "#f1f5f9",
                                            margin: 0,
                                            lineHeight: 1.2,
                                        }}>
                                            {step.title}
                                        </h3>
                                    </div>
                                </div>

                                <p style={{
                                    color: "#94a3b8",
                                    fontSize: "15px",
                                    lineHeight: 1.8,
                                    margin: "0 0 24px 0",
                                    maxWidth: "680px",
                                }}>
                                    {step.description}
                                </p>

                                {/* Outcome pills */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                    {step.outcomes.map((outcome, idx) => (
                                        <span key={idx} style={{
                                            display: "flex", alignItems: "center", gap: "6px",
                                            fontSize: "12px", fontWeight: 700,
                                            color: "#4ade80",
                                            backgroundColor: "rgba(34,197,94,0.07)",
                                            border: "1px solid rgba(34,197,94,0.18)",
                                            padding: "6px 14px",
                                            borderRadius: "99px",
                                            letterSpacing: "0.01em",
                                        }}>
                                            <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#22c55e", flexShrink: 0 }} />
                                            {outcome}
                                        </span>
                                    ))}
                                </div>

                                {index < steps.length - 1 && (
                                    <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.04)", marginTop: "32px" }} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{
                    marginTop: "80px",
                    padding: "48px",
                    borderRadius: "24px",
                    border: "1px solid rgba(34,197,94,0.18)",
                    background: "linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(34,197,94,0.02) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "32px",
                    flexWrap: "wrap",
                }}>
                    <div>
                        <div style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(20px, 3vw, 26px)",
                            fontWeight: 900,
                            color: "#f1f5f9",
                            marginBottom: "8px",
                            lineHeight: 1.2,
                        }}>
                            Ready to start your 120 day sprint?
                        </div>
                        <p style={{ color: "#64748b", fontSize: "15px", margin: 0 }}>
                            We only take on 3 new brands per month. Spots fill fast.
                        </p>
                    </div>
                    <a href="#book-call" className="btn-cta" style={{
                        backgroundColor: "#22c55e",
                        color: "#000000",
                        fontSize: "20px",
                        fontWeight: 800,
                        fontFamily: "var(--font-heading)",
                        padding: "20px 56px",
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 20px 40px -10px rgba(34,197,94,0.35)",
                        letterSpacing: "-0.01em",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        Book A Call
                    </a>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .process-header {
                        margin-bottom: 48px !important;
                    }
                    .process-step-row {
                        grid-template-columns: 1px 1fr !important;
                        gap: 0 20px !important;
                    }
                    .desktop-phase-column {
                        display: none !important;
                    }
                    .mobile-phase-label {
                        display: inline !important;
                        color: #94a3b8;
                        margin-left: 2px;
                    }
                }
                .mobile-phase-label {
                    display: none;
                }
            `}</style>
        </section>
    );
}
