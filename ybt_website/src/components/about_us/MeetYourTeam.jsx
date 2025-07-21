function MeetYourTeam({ main_team }) {
  return (
    <div className="md:px-10 lg:px-40 xl:px-200 py-20 flex flex-col gap-30">
      {main_team.length == 0 ? (
            <div className="text-gray text-xl">No Team Members To Show At The Moment</div>
        ) :
        main_team.map((person) => (
          <div className="flex items-center gap-10">
            <div className="w-50 h-50 shrink-0 overflow-hidden rounded">
              <img src={person.headshot} className="w-full h-full object-cover"/>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <div className="font-bold text-[25px]">{person.name}</div>
                <div className="text-[20px]">{person.title}</div>
              </div>
              <div>{person.quote}</div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default MeetYourTeam;