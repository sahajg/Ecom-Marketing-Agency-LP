"use client";
import React from "react";

export function ComparisonTable() {
    const tableData = [
        {
            category: "Creative Media Synergy",
            us: "✅ Fully Integrated",
            paidMedia: "❌ Disconnected",
            creative: "❌ Creative Agency"
        },
        {
            category: "Growth Strategy & Financial Planning",
            us: "✅ Detailed Growth Maps",
            paidMedia: "❌ Not Offered",
            creative: "❌ Not Offered"
        },
        {
            category: "Brand Alignment & In depth Research",
            us: "✅ Deep & Actionable",
            paidMedia: "❌ Minimal Insights",
            creative: "❌ No Connection to Distribution"
        },
        {
            category: "Diversified Creative Outputs",
            us: "✅ UGCs, High Prods, Lifestyle & Statics",
            paidMedia: "❌ No Creative Offerings",
            creative: "❌ Limited Capabilities"
        },
        {
            category: "Full Customer Journey Experience",
            us: "✅ Landing Page, LTV, AOV, RCC",
            paidMedia: "❌ Limited to Paid Media",
            creative: "❌ Limited to Creative Assets"
        },
        {
            category: "Seamless Comms",
            us: "✅ Daily Collaboration",
            paidMedia: "❌ No Integration",
            creative: "❌ Minimal"
        }
    ];

    const cellStyle: React.CSSProperties = {
        padding: "20px 16px",
        borderRadius: "12px",
        backgroundColor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: 600,
        color: "#94a3b8",
        minHeight: "80px",
        transition: "all 0.2s ease"
    };

    const headerCellStyle: React.CSSProperties = {
        ...cellStyle,
        backgroundColor: "rgba(255,255,255,0.05)",
        fontWeight: 800,
        fontSize: "15px",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        color: "#cbd5e1"
    };

    const highlightedStyle: React.CSSProperties = {
        ...cellStyle,
        background: "linear-gradient(180deg, rgba(34,197,94,0.12) 0%, rgba(34,197,94,0.04) 100%)",
        border: "1px solid rgba(34,197,94,0.35)",
        color: "#e2e8f0",
        boxShadow: "0 0 40px -10px rgba(34,197,94,0.12)",
        fontSize: "15px",
        fontWeight: 700
    };

    const categoryStyle: React.CSSProperties = {
        ...cellStyle,
        justifyContent: "flex-start",
        textAlign: "left",
        backgroundColor: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.05)",
        fontSize: "15px",
        fontWeight: 600,
        color: "#cbd5e1"
    };

    return (
        <section style={{ backgroundColor: "#0F1014", padding: "100px 20px" }}>
            <div className="section-inner" style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <h2 style={{
                        fontSize: "clamp(28px, 4vw, 42px)",
                        color: "#f1f5f9",
                        marginBottom: "20px",
                        fontWeight: 900,
                        letterSpacing: "-0.02em"
                    }}>
                        Not Your <span style={{ color: "#22c55e" }}>Standard Agency.</span>
                    </h2>
                    <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "0 auto", fontSize: "18px", lineHeight: 1.65 }}>
                        Why brands scale faster with a Full Funnel Growth Partner than isolated agencies.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.2fr 1.2fr 1fr 1fr",
                        gap: "12px",
                        overflowX: "auto"
                    }}
                    className="comparison-grid"
                >
                    {/* Header Row */}
                    <div style={categoryStyle}>CATEGORY</div>
                    <div style={{ ...highlightedStyle, fontWeight: 900, fontSize: "17px", color: "#ffffff" }}>
                        👑 Full Funnel DTC Agency
                    </div>
                    <div style={{ ...headerCellStyle, color: "#f59e0b" }}>Paid Media Agency</div>
                    <div style={{ ...headerCellStyle, color: "#f59e0b" }}>Creative Agency</div>

                    {/* Data Rows */}
                    {tableData.map((row, index) => (
                        <React.Fragment key={index}>
                            <div style={categoryStyle}>{row.category}</div>
                            <div style={highlightedStyle}>{row.us}</div>
                            <div style={cellStyle}>{row.paidMedia}</div>
                            <div style={cellStyle}>{row.creative}</div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 900px) {
                    .comparison-grid {
                        display: grid !important;
                        grid-template-columns: repeat(4, 1fr) !important;
                        gap: 4px !important;
                        overflow-x: visible !important;
                    }
                    .comparison-grid > div {
                        padding: 12px 4px !important;
                        font-size: 10px !important;
                        min-height: 60px !important;
                    }
                }
            `}</style>
        </section>
    );
}
