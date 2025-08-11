import TeamMemberPreview from "./TeamMemberPreview";
import TitleBanner from "../TitleBanner";
import Button from "../Button";

function TeamPreview() {
  return (
    <>
      <TitleBanner>Meet the Team</TitleBanner>
      <div className="flex flex-col items-center m-15 gap-15">
        <div className="text-xl w-[50%] text-center">
          Our experienced team of experts is equipped to work with individuals
          from diverse backgrounds and situations.
        </div>
        <div className="flex flex-wrap gap-30 px-15 justify-center">
          <TeamMemberPreview
            name="John Kiss"
            position="CEO"
            imgSrc="src/assets/no-bg-headshots/john-removebg-preview.png"
          />
          <TeamMemberPreview
            name="Nermina Salkic"
            position="CPO"
            imgSrc="src/assets/no-bg-headshots/nermina-removebg-preview.png"
          />
          <TeamMemberPreview
            name="Arfin Rabbi"
            position="CGO"
            imgSrc="src/assets/no-bg-headshots/arfin1-removebg-preview.png"
          />
          <TeamMemberPreview name="Mark Baltierra" position="CDO" imgSrc="" />
          <TeamMemberPreview
            name="Brian Desta"
            position="CSO"
            imgSrc="src/assets/no-bg-headshots/brian-removebg-preview.png"
          />
          <TeamMemberPreview
            name="Kim Nwafor"
            position="CHO"
            imgSrc="src/assets/no-bg-headshots/kim-removebg-preview.png"
          />
          <TeamMemberPreview name="Stacy" position="COO" imgSrc="" />
          <TeamMemberPreview
            name="Saige"
            position="CMO"
            imgSrc="src/assets/no-bg-headshots/saige-removebg-preview.png"
          />
        </div>
        <Button to="/about" className="text-lg">
          Meet us
        </Button>
      </div>
    </>
  );
}
export default TeamPreview;
