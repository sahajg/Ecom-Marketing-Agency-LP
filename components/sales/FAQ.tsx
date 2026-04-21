"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
    {
        question: "What kind of businesses Zorm works with?",
        answer: "At our agency, we prioritize the specific needs and potential of each brand, rather than focusing solely on their size. We've had the privilege of assisting brands across a wide spectrum, from those generating multiple six figures per month to smaller brands operating at around $10k/month. In many cases, we've helped these businesses achieve remarkable growth, scaling to multiple six figures per month and beyond. However, it's important to note that we're selective about the brands we work with. Regardless of size, we only partner with those who possess the essential prerequisites for success. If your brand meets these prerequisites and you're seeking to enhance your results, scale your business, and establish a long-term partnership focused on your success, we encourage you to schedule a call with us today.",
    },
    {
        question: "Why should I work with Zorm instead of 99 other agencies?",
        answer: "While we prioritize delivering exceptional results and experiences to our clients, we don't dwell on our competitors. Your satisfaction and success are our main focus. Ultimately, the choice is yours, and we encourage you to select the option that aligns best with your needs and values. We're selective about the clients we work with because this isn't about quantity for us; it's about quality. We maintain a close knit team dedicated to high performance. Our guiding principle is simple: how can we deliver the best possible outcomes for our clients?",
    },
    {
        question: "What if I simply hire in-house instead?",
        answer: "We've collaborated with brands of all sizes, including those with extensive marketing departments. We believe in leveraging collective expertise to achieve optimal results. By integrating your team and resources with our proven processes, we work together seamlessly to propel you toward your goals. Your success is our priority, and we're committed to maximizing every opportunity to help you succeed.",
    },
    {
        question: "Do you have any lock-in contract?",
        answer: "Absolutely not. We prioritize providing our clients with options, believing firmly in the power of choice. Through our commitment to delivering exceptional results and experiences rather than tying clients into contracts, we've observed an increase in client retention rates over time. Nevertheless, we do emphasize the importance of trusting the process and understanding that success takes time. Rest assured, we're dedicated to guiding our clients towards sustainable growth and success.",
    },
    {
        question: "How will it be different from what we're doing currently?",
        answer: "We'll be able to give you the best answer after checking your ads. But here's how we do things differently: instead of throwing shit on the wall & hoping some sticks, we carefully pick the best foundations of your advertising and build on them to make them even better. This creates a strong momentum that keeps growing.",
    },
    {
        question: "What is your pricing?",
        answer: "Our pricing is tailored specifically to your budget and the scope of work required. We believe in crafting unique solutions rather than offering a generic package. The key performance indicators (KPIs) we establish are always designed to ensure profitability for you. Our goal is to create a partnership that is both financially beneficial and strategically aligned with your business objectives.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section id="faqs" className="section-padding" style={{ width: "100%", backgroundColor: "#0F1014", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="section-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "80px" }}>

                {/* Left: Heading */}
                <div style={{ position: "sticky", top: "120px", height: "fit-content" }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        backgroundColor: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)",
                        borderRadius: "100px", padding: "6px 16px", marginBottom: "24px"
                    }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#22c55e", display: "inline-block" }} />
                        <span style={{ fontSize: "13px", fontWeight: 800, color: "#22c55e", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                            Support
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(36px, 4vw, 56px)",
                        fontWeight: 900,
                        color: "#f1f5f9",
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        margin: 0,
                    }}>
                        Frequently<br />Asked<br />Questions
                    </h2>
                    <div style={{ width: "48px", height: "4px", backgroundColor: "#22c55e", borderRadius: "100px", marginTop: "32px" }} />
                </div>

                {/* Right: Accordion */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                style={{
                                    borderRadius: "20px",
                                    border: `1px solid ${isOpen ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.07)"}`,
                                    backgroundColor: isOpen ? "rgba(34,197,94,0.04)" : "rgba(255,255,255,0.02)",
                                    overflow: "hidden",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {/* Question row */}
                                <button
                                    onClick={() => toggle(idx)}
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "28px 32px",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        gap: "20px",
                                    }}
                                >
                                    <span style={{
                                        fontSize: "17px",
                                        fontWeight: 700,
                                        color: isOpen ? "#22c55e" : "#e2e8f0",
                                        lineHeight: 1.4,
                                        flex: 1,
                                        transition: "color 0.25s ease"
                                    }}>
                                        {faq.question}
                                    </span>
                                    <div style={{
                                        width: "30px", height: "30px",
                                        borderRadius: "50%",
                                        backgroundColor: isOpen ? "#22c55e" : "rgba(255,255,255,0.08)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0,
                                        transition: "all 0.3s ease"
                                    }}>
                                        <ChevronRight style={{
                                            width: "16px", height: "16px",
                                            color: isOpen ? "#000000" : "#94a3b8",
                                            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                                            transition: "transform 0.3s ease",
                                        }} />
                                    </div>
                                </button>

                                {/* Answer */}
                                <div style={{
                                    maxHeight: isOpen ? "800px" : "0",
                                    opacity: isOpen ? 1 : 0,
                                    transition: "all 0.4s ease",
                                    overflow: "hidden"
                                }}>
                                    <div style={{ padding: "0 32px 28px 32px" }}>
                                        <p style={{
                                            fontSize: "15px",
                                            fontWeight: 500,
                                            color: "#94a3b8",
                                            lineHeight: 1.8,
                                            margin: 0,
                                        }}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .section-inner {
                        grid-template-columns: 1fr !important;
                        gap: 56px !important;
                    }
                    div[style*="position: sticky"] {
                        position: relative !important;
                        top: 0 !important;
                    }
                }
            `}</style>
        </section>
    );
}
