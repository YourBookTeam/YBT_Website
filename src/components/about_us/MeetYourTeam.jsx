import Team_Member from './Team_Member';

function MeetYourTeam({ main_team }) {
  return (
    <div className="
      pt-10 pb-20 flex flex-col items-center
      gap-20 md:gap-40 lg:gap-35
      ">
      {main_team.length == 0 ? (
            <div className="text-gray text-xl">No Team Members To Show At The Moment</div>
        ) :
        main_team.map((person) => (
          <Team_Member key={person.id} person={person} id={person.link} />
        ))}
    </div>
  );
}
export default MeetYourTeam;