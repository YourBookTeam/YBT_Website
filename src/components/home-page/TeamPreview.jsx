import TeamMemberPreview from "./TeamMemberPreview";
import TitleBanner from "../TitleBanner";
import Button from "../Button";

function TeamPreview({ team }) {
  return (
    <>
      <TitleBanner>Meet the Team</TitleBanner>
      <div className="flex flex-col items-center m-15 gap-15">
        <div className="text-xl w-full text-center">
          Our experienced team of experts is equipped to work with individuals
          from diverse backgrounds and situations.
        </div>
        <div className="flex flex-wrap gap-10 md:gap-30 px-0 sm:px-15 justify-center">
          {team.length == 0 ? (
              <div className="text-gray text-xl">No Team Members To Show At The Moment</div>
          ) :
          team.map((person) => (
            <TeamMemberPreview key={person.id} person={person}/>
          ))}
        </div>
        <Button to="/about" className="text-lg">
          Meet us
        </Button>
      </div>
    </>
  );
}
export default TeamPreview;
