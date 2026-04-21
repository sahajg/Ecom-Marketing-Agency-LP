"use client";
import React from "react";
import Script from "next/script";

export function Booking() {
    return (
        <section
            id="book-call"
            className="section-padding"
            style={{
                width: "100%",
                backgroundColor: "#0F1014",
                borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
        >
            <div className="section-inner">
                {/* Section Header */}
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        backgroundColor: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)",
                        borderRadius: "100px", padding: "6px 16px", marginBottom: "24px"
                    }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#22c55e", display: "inline-block" }} />
                        <span style={{ fontSize: "13px", fontWeight: 800, color: "#22c55e", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                            Get Started
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(30px, 4.5vw, 48px)",
                        fontWeight: 900,
                        color: "#f1f5f9",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                        marginBottom: "20px",
                    }}>
                        Schedule Your <span style={{ color: "#22c55e" }}>Strategy Session</span>
                    </h2>
                    <p style={{
                        fontSize: "18px",
                        color: "#94a3b8",
                        fontWeight: 500,
                        maxWidth: "600px",
                        margin: "0 auto",
                        lineHeight: 1.7,
                    }}>
                        By the end of this Growth Session, you will have a clear understanding of how to scale your brand to the next level. Find a time that works for you.
                    </p>
                </div>

                {/* Calendly Inline Widget Container */}
                <div style={{
                    backgroundColor: "#16171D",
                    borderRadius: "32px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.07)",
                    boxShadow: "0 40px 100px -20px rgba(0,0,0,0.6)",
                    maxWidth: "1060px",
                    margin: "0 auto"
                }}>
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/zormhq/30min?background_color=16171d&text_color=ffffff&primary_color=22c55e"
                        style={{ width: "100%", height: "850px" }}
                    />
                    <Script
                        src="https://assets.calendly.com/assets/external/widget.js"
                        strategy="lazyOnload"
                    />
                </div>
            </div>
        </section>
    );
}
