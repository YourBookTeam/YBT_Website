function Team_Member({ person }) {
  return (
    <div className="
        items-center flex
        flex-col
        w-100 sm:w-150
        px-10 
        gap-5
    ">
        <div className="
            shrink-0 overflow-hidden rounded
            w-50 sm:w-70 
            h-50 sm:h-70
        ">
            {
                <img src={person.headshot} alt="" className="w-full h-full object-cover rounded-full bg-gold"/>
            }
        </div>

        <div className="
            flex flex-col gap-4
            text-center
        ">
            <div>
                <div className="font-bold text-3xl sm:text-4xl">{person.name}</div>
                <div className="font-secondary text-xl sm:text-2xl">{person.title} {'(' + person.title_abbreviation + ')'}</div>
            </div>
            <div className="font-secondary text-md sm:text-xl">{person.quote}</div>
        </div>
    </div>
  );
}
export default Team_Member;