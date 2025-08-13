function Team_Member({ person }) {
  return (
    <div className="
        flex items-center
        w-150 px-10 gap-5
    ">
        <div className="
            shrink-0 overflow-hidden rounded
            w-50 h-50
        ">
            {
                <img src={person.headshot} alt="" className="w-full h-full object-cover rounded-full bg-gold"/>
            }
        </div>

        <div className="flex flex-col gap-4">
            <div>
                <div className="font-bold text-3xl">{person.name}</div>
                <div className="text-xl font-secondary">{person.title} {'(' + person.title_abbreviation + ')'}</div>
            </div>
            <div className="font-secondary">{person.quote}</div>
        </div>
    </div>
  );
}
export default Team_Member;