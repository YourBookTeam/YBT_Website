import SuccessStories from "../components/home-page/SuccessStories";
import NavBar from "../components/Navbar";
import HeroBanner from "../components/home-page/HeroBanner";
import TeamPreview from "../components/home-page/TeamPreview";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <HeroBanner></HeroBanner>
      <SuccessStories />
      <TeamPreview />
    </>
  );
}

export default Home;
