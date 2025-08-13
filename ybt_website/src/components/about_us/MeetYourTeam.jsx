import Team_Member from './Team_Member';

function MeetYourTeam({ main_team }) {
  return (
    <div className="lg:pt-10 lg:pb-20 flex flex-col gap-30 items-center">
      {main_team.length == 0 ? (
            <div className="text-gray text-xl">No Team Members To Show At The Moment</div>
        ) :
        main_team.map((person) => (
          <Team_Member person={person}/>
        ))}
    </div>
  );
}
export default MeetYourTeam;