import { TopBar } from "@/components/sales/TopBar";
import { Hero } from "@/components/sales/Hero";
import { TrustedBy } from "@/components/sales/TrustedBy";
import { CaseStudyGallery } from "@/components/sales/CaseStudyGallery";
import { PainPoints } from "@/components/sales/PainPoints";
import { CTABridge } from "@/components/sales/CTABridge";
import { ExperienceSection } from "@/components/sales/ExperienceSection";
import { ComparisonTable } from "@/components/sales/ComparisonTable";
import { ProductCreation } from "@/components/sales/ProductCreation";
import { ProductCreation as WinningProducts } from "@/components/sales/ProductCreation"; // Alias for readability if needed
import { ProcessSection } from "@/components/sales/ProcessSection";
import { WhatYouGet } from "@/components/sales/WhatYouGet";
import { Booking } from "@/components/sales/Booking";
import { FAQ } from "@/components/sales/FAQ";
import { Footer } from "@/components/sales/Footer";

export default function Home() {
  return (
    <>
      <main style={{ backgroundColor: "#0F1014", minHeight: "100vh" }}>
        <TopBar />
        <Hero />
        <TrustedBy />
        <CaseStudyGallery />
        <PainPoints />
        <ProductCreation />
        <ComparisonTable />
        <ExperienceSection />
        <ProcessSection />
        <WhatYouGet />
        <FAQ />
        <CTABridge />
        <Booking />
        <Footer />
      </main>
    </>
  );
}
