import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlagBand from "@/components/FlagBand";
import Story from "@/components/Story";
import WhoWeHelp from "@/components/WhoWeHelp";
import Experiences from "@/components/Experiences";
import Planner from "@/components/Planner";
import MapSection from "@/components/MapSection";
import Guides from "@/components/Guides";
import LocalBusiness from "@/components/LocalBusiness";
import Creators from "@/components/Creators";
import BusinessModel from "@/components/BusinessModel";
import Impact from "@/components/Impact";
import Closing from "@/components/Closing";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FlagBand />
        <Story />
        <WhoWeHelp />
        <FlagBand />
        <Experiences />
        <Planner />
        <FlagBand />
        <MapSection />
        <Guides />
        <FlagBand />
        <LocalBusiness />
        <Creators />
        <BusinessModel />
        <FlagBand />
        <Impact />
        <Closing />
      </main>
    </>
  );
}
