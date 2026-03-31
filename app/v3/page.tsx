import NavbarV3 from "./components/NavbarV3";
import HeroV3 from "./components/HeroV3";
import AsSeenTickerV3 from "./components/AsSeenTickerV3";
import VideoTestimonialsSectionV3 from "./components/VideoTestimonialsSectionV3";
import ProcessSectionV3 from "./components/ProcessSectionV3";
import ProcessVideoSectionV3 from "./components/ProcessVideoSectionV3";
import WhyChooseSectionV3 from "./components/WhyChooseSectionV3";
import ReadyToSellSectionV3 from "./components/ReadyToSellSectionV3";
import OurWorkSectionV3 from "./components/OurWorkSectionV3";
import WhyChooseSellToJRV3 from "./components/WhyChooseSellToJRV3";
import FaqSectionV3 from "./components/FaqSectionV3";
import FooterV3 from "./components/FooterV3";
import RevealOnScroll from "./components/RevealOnScroll";

export default function V3Page() {
  return (
    <main className="flex-1">
      <NavbarV3 />
      <RevealOnScroll delay={0.04}>
        <HeroV3 />
      </RevealOnScroll>
      <RevealOnScroll delay={0.06}>
        <AsSeenTickerV3 />
      </RevealOnScroll>
      <RevealOnScroll delay={0.08}>
        <VideoTestimonialsSectionV3 />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <ProcessSectionV3 />
      </RevealOnScroll>
      <RevealOnScroll delay={0.12}>
        <ProcessVideoSectionV3 />
      </RevealOnScroll>
      <RevealOnScroll delay={0.14}>
        <WhyChooseSectionV3 />
      </RevealOnScroll>
      <RevealOnScroll delay={0.16}>
        <ReadyToSellSectionV3 />
      </RevealOnScroll>
      <RevealOnScroll delay={0.18}>
        <OurWorkSectionV3 />
      </RevealOnScroll>
      <RevealOnScroll delay={0.2}>
        <WhyChooseSellToJRV3 />
      </RevealOnScroll>
      <RevealOnScroll delay={0.22}>
        <FaqSectionV3 />
      </RevealOnScroll>
      <RevealOnScroll delay={0.24}>
        <FooterV3 />
      </RevealOnScroll>
    </main>
  );
}
