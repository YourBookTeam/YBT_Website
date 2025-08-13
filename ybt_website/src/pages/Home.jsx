import SuccessStories from "../components/home-page/SuccessStories";
import HeroBanner from "../components/home-page/HeroBanner";
import TeamPreview from "../components/home-page/TeamPreview";
import { team } from "../data/team.js";

function Home() {
  const main_team = team.filter((person)=> person.status == "main_display");

  return (
    <>
      <HeroBanner></HeroBanner>
      <SuccessStories />
      <TeamPreview team={ main_team } />
    </>
  );
}

export default Home;
