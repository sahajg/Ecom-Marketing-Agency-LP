import React from "react";
import { ArrowRight } from "lucide-react";

export function CTABridge() {
    return (
        <section className="section-padding" style={{ 
            backgroundColor: "#0F1014", 
            textAlign: "center", 
            borderTop: "1px solid rgba(255,255,255,0.05)" 
        }}>
            <div className="section-inner">
                <h2 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(32px, 5vw, 48px)",
                    fontWeight: 900,
                    marginBottom: "24px",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    color: "#f1f5f9"
                }}>
                    Take the first step towards your business <br />
                    growth by <span style={{ color: "#22c55e" }}>working with our team.</span>
                </h2>
                <p style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#94a3b8",
                    marginBottom: "48px",
                    maxWidth: "600px",
                    margin: "0 auto 48px",
                    lineHeight: 1.65,
                }}>
                    Are you ready to scale your brand to the next level profitably? Click below to book your strategy session.
                </p>

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
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center"
                }}>
                    Book Your Free Call <ArrowRight size={22} style={{ marginLeft: "10px" }} />
                </a>
            </div>
        </section>
    );
}
