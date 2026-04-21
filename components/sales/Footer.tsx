import React from "react";

export function Footer() {
    return (
        <footer style={{ 
            width: "100%", 
            backgroundColor: "#0F1014", 
            borderTop: "1px solid rgba(255,255,255,0.05)", 
            padding: "80px 0" 
        }}>
            <div className="section-inner" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
                <span style={{ 
                    fontFamily: "var(--font-heading)", 
                    fontSize: "24px", 
                    fontWeight: 900, 
                    letterSpacing: "-0.04em", 
                    color: "#f1f5f9" 
                }}>
                    ZORM
                </span>

                <div style={{ display: "flex", gap: "32px", fontSize: "14px", color: "#94a3b8", fontWeight: 600, flexWrap: "wrap", justifyContent: "center" }}>
                    <span style={{ cursor: "pointer" }}>Privacy Policy</span>
                    <span style={{ cursor: "pointer" }}>Terms of Service</span>
                    <span style={{ cursor: "pointer" }}>Disclaimer</span>
                </div>

                <div style={{ 
                    maxWidth: "800px", 
                    margin: "0 auto", 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "12px", 
                    fontSize: "12px", 
                    fontWeight: 500, 
                    lineHeight: 1.7, 
                    color: "#475569", 
                    textAlign: "center" 
                }}>
                    <p>This site is not part of the Facebook™ website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK, Inc.</p>
                    <p>This site is not part of the Meta website or Meta Inc. Additionally, this site is NOT endorsed by Meta in any way. META™ is a trademark of META, Inc.</p>
                </div>

                <p style={{ fontSize: "12px", color: "#64748b", fontWeight: 500, margin: 0 }}>
                    &copy; {new Date().getFullYear()} Zorm. All results guaranteed or your money back.
                </p>
            </div>
        </footer>
    );
}
