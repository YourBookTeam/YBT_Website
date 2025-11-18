import TeamCarousel from "./TeamCarousel"; 
import TitleBanner from "../TitleBanner";
import Button from "../Button";

function TeamPreview({ team }) {
  const scrollToTop = () => {
      window.scrollTo(0,0);
  }

  return (
    <>
      <div className="bg-[#F9F9F9] py-5 overflow-x-hidden flex flex-col items-center gap-10">
        <TitleBanner>Meet the Team</TitleBanner>

        <div className="w-full 2xl:w-[50%] flex flex-col justify-center items-center gap-10">
          <div className="text-xl w-full text-center">
            Our experienced team of experts is equipped to work with individuals
            from diverse backgrounds and situations.
          </div>
          {team.length == 0 ? (
              <div className="text-gray text-xl">No Team Members To Show At The Moment</div>
          ) :(
              <div className="w-full">
                <TeamCarousel team={team} />
              </div>
              )}
        </div>

        <Button gold wide to="/about#meet-us" onClick={scrollToTop} className="w-[40%] lg:w-[15%] 2xl:w-[10%]">Meet Us</Button>
      </div>
    </>
  );
}
export default TeamPreview;