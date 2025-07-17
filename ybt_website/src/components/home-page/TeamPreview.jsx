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
            imgSrc="src/assets/profile-photos/JohnKiss.png"
          />
          <TeamMemberPreview
            name="Betty Burtman"
            position="CEO"
            imgSrc="src/assets/profile-photos/BettyBurtman.png"
          />
          <TeamMemberPreview
            name="Brian Kimutai"
            position="CSO"
            imgSrc="src/assets/profile-photos/BrianKimutai.png"
          />
          <TeamMemberPreview
            name="Romi Holland"
            position="CIO"
            imgSrc="src/assets/profile-photos/RomiHolland.png"
          />
          <TeamMemberPreview
            name="Arfin Rabbi"
            position="CGO"
            imgSrc="src/assets/profile-photos/ArfinRabbi.png"
          />
          <TeamMemberPreview
            name="Nermina Salkic"
            position="CPO"
            imgSrc="src/assets/profile-photos/NerminaSalkic.png"
          />
          <TeamMemberPreview
            name="Issac Cylezo"
            position="CFO"
            imgSrc="src/assets/profile-photos/IssacCyzelo.png"
          />
        </div>
        <Button
          to="/about"
          className="bg-saffron px-7 py-2 rounded-lg text-lg text-black font-semibold"
        >
          Get to know us
        </Button>
      </div>
    </>
  );
}
export default TeamPreview;
