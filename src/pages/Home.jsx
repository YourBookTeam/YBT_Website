import StorySection from "../components/home-page/StorySection";
import TeamPreview from "../components/home-page/TeamPreview";
import { team } from "../data/team.js";
import  DesktopBanner  from "../components/home-page/DesktopBanner.jsx"
import MobileAutoBanner from "../components/home-page/MobileAutoBanner.jsx";



function Home() {
  const main_team = team.filter((person) => person.status == "active");

  return (
    <>
      <DesktopBanner/>
      <MobileAutoBanner/>
      <StorySection />
      <TeamPreview team={main_team} />
    </>
  );
}

export default Home;
