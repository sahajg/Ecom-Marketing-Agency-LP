import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zorm | D2C eCommerce Marketing Agency",
  description: "We help D2C eCommerce brands scale to ₹70L–₹1CR+ per month in less than 120 days with data-first ecom marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#050a17", color: "#F8FAFC" }}>
        {children}
      </body>
    </html>
  );
}
