// app/page.tsx or pages/index.js depending on your project structure
import HeroSection from "@/components/HeroSection";
import AboutStudyGroup from "@/components/AboutStudyGroup";
import UpcomingEvents from "@/components/UpcomingEvents";
import FooterCTA from "@/components/FooterCTA";
export default function Home() {
  return (
    <>

      <HeroSection/>
      <AboutStudyGroup/>
      <UpcomingEvents/>
      <FooterCTA/>
    </>
  );
}
