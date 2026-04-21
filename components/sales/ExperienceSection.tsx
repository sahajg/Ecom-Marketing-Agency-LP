"use client";
import React from "react";
import { MessageSquare, BarChart2, Users, ArrowRight } from "lucide-react";

const benefits = [
    {
        title: "In-House Like Communication",
        icon: <MessageSquare size={28} color="#22c55e" />,
        description: "Get your own dedicated Slack channel to stay connected with our marketing team. With twice a week reports, monthly creative analysis & consumer insights, on demand consulting calls, and more, tweaked to your liking. We're just a text away whenever you need help!"
    },
    {
        title: "Better DTC Landscape Understanding",
        icon: <BarChart2 size={28} color="#22c55e" />,
        description: "Coming from running our own eCommerce brand, we truly grasp the inner workings of the business from the founder's standpoint. The data we gather isn't just about numbers; we help brand owners understand it to improve their business every month."
    },
    {
        title: "Network of Vetted Partners",
        icon: <Users size={28} color="#22c55e" />,
        description: "Get access to our vetted partners for top quality services which will be required for your overall business growth. We've been working with these partners since long & have trust on their service quality, so you never have to worry finding right service providers."
    }
];

export function ExperienceSection() {
    return (
        <section id="why-us" className="section-padding" style={{ backgroundColor: "#FFFFFF", color: "#0f172a", textAlign: "center", borderTop: "1px solid #f1f5f9" }}>
            <div className="section-inner">
                {/* Header text */}
                <div style={{ marginBottom: "80px" }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        backgroundColor: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)",
                        borderRadius: "100px", padding: "6px 16px", marginBottom: "24px"
                    }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#22c55e", display: "inline-block" }} />
                        <span style={{ fontSize: "13px", fontWeight: 800, color: "#16a34a", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                            The Partnership
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(32px, 5vw, 48px)",
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: "16px",
                        letterSpacing: "-0.03em",
                        color: "#0f172a"
                    }}>
                        It&apos;s not just about results, <br />
                        <span style={{ color: "#22c55e" }}>Experience Matters.</span>
                    </h2>
                    <p style={{ fontSize: "20px", color: "#64748b", fontWeight: 500, margin: "0 auto", maxWidth: "700px", lineHeight: 1.65 }}>
                        Imagine working with a partner that ensures your growth is seamless and your experience is top notch.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "24px",
                }}>
                    {benefits.map((b, idx) => (
                        <div key={idx} style={{
                            backgroundColor: "#f8fafc",
                            border: "1px solid #e2e8f0",
                            borderRadius: "24px",
                            padding: "48px 32px",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "20px",
                            transition: "all 0.3s ease"
                        }}>
                            <div style={{ padding: "14px", backgroundColor: "rgba(34,197,94,0.06)", borderRadius: "14px", border: "1px solid rgba(34,197,94,0.15)" }}>
                                {b.icon}
                            </div>
                            <h3 style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "22px",
                                fontWeight: 900,
                                margin: 0,
                                letterSpacing: "-0.01em",
                                color: "#0f172a"
                            }}>
                                {b.title}
                            </h3>
                            <p style={{
                                fontSize: "15px",
                                color: "#475569",
                                lineHeight: "1.75",
                                margin: 0,
                                fontWeight: 500
                            }}>
                                {b.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{ marginTop: "80px" }}>
                    <a href="#book-call" className="btn-cta" style={{
                        backgroundColor: "#22c55e",
                        color: "#000000",
                        fontSize: "18px",
                        fontWeight: 800,
                        fontFamily: "var(--font-heading)",
                        padding: "18px 48px",
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 20px 40px -10px rgba(34,197,94,0.35)",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center"
                    }}>
                        Work With Us <ArrowRight size={20} style={{ marginLeft: "10px" }} />
                    </a>
                </div>
            </div>
        </section>
    );
}
