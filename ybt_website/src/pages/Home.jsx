import StorySection from "../components/home-page/StorySection";
import HeroBanner from "../components/home-page/HeroBanner";
import TeamPreview from "../components/home-page/TeamPreview";

function Home() {
  return (
    <>
      <HeroBanner></HeroBanner>
      <StorySection />
      <TeamPreview />
    </>
  );
}

export default Home;
