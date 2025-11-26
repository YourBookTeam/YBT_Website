import StorySection from "../components/home-page/StorySection";
import HeroBanner from "../components/home-page/HeroBanner";
import MobileHeroBanner from "../components/home-page/MobileHeroBanner";
import TeamPreview from "../components/home-page/TeamPreview";
import { team } from "../data/team.js";
import  DesktopTest  from "../components/home-page/DesktopTest.jsx"
import MobileAutoBanner from "../components/home-page/MobileAutoBanner.jsx";


function Home() {
  const main_team = team.filter((person) => person.status == "active");

  return (
    <>
      {/* <HeroBanner></HeroBanner> */}
      
      <DesktopTest/>
      <MobileAutoBanner/>
      {/* <MobileHeroBanner/> */}
      <StorySection />
      <TeamPreview team={main_team} />
    </>
  );
}

export default Home;
