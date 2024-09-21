import HeroSection from "../components/heroSection";
import ExplorePlatfrom from "../components/explorePlatform";
import LearnMoreCards from "../components/learnMoreCards";
import Features from "../components/features";
import FeaturesSection from "../components/customizeableSolutions";
import AustralianOpen from "../components/AustralianOpen/Page";
import Workplace from "../components/connected workplace/workplace";
import OperationsSection from "../components/Operations/Operations";
import MakeDecisions from "../components/Makedecision/Makedecision";
import Relations from "../components/relations/Relations";
import ImprovementSection from "../components/ImprovementSection/ImprovementSection";
import Footer from "../components/footer/Footer";
import TabContent from "../components/tabsCards/index"
const Homepage = () => {
  return (
    <>
      <HeroSection />
      <ExplorePlatfrom />
      <LearnMoreCards />
      <Features />
      <FeaturesSection />
      <AustralianOpen />
      <Workplace />
      <OperationsSection />
      <MakeDecisions />
      <Relations />
      <TabContent/>
      <ImprovementSection />
      <Footer />
    </>
  );
};
export default Homepage;
