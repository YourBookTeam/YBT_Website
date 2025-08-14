function Team_Member({ person }) {
  return (
    <div className="
        items-center flex
        flex-col
        w-100 sm:w-160
        px-15 md:px-0 
        gap-5
    ">
        <div className="
            shrink-0 overflow-hidden rounded
            w-50 sm:w-70 md:w-80
            h-50 sm:h-70 md:h-80
        ">
            {
                <img src={person.headshot} alt="" className="w-full h-full object-cover rounded-full bg-gold"/>
            }
        </div>

        <div className="
            flex flex-col gap-4
            text-center
        ">
            <div className="flex flex-col gap-2 md:gap-4">
                <div className="font-bold text-3xl sm:text-4xl md:text-5xl">{person.name}</div>
                <div className="font-secondary text-xl sm:text-3xl md:text-4xl">{person.title} {'(' + person.title_abbreviation + ')'}</div>
            </div>
            <div className="font-secondary text-md sm:text-2xl">{person.quote}</div>
        </div>
    </div>
  );
}
export default Team_Member;