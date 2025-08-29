function Team_Member({ person }) {
  return (
    <div className="
        items-center flex
        flex-col lg:flex-row
        w-100 sm:w-160 lg:w-250 xl:w-300
        px-15 md:px-0 lg:px-20
        gap-5 lg:gap-10
    ">
        <div className="
            shrink-0 overflow-hidden rounded
            w-50 sm:w-60
            h-50 sm:h-60
        ">
            {
                <img src={person.headshot} alt="" className="w-full h-full object-cover rounded-full bg-gold"/>
            }
        </div>

        <div className="
            flex flex-col gap-4
            text-center lg:text-left
        ">
            <div className="flex flex-col gap-2 md:gap-4">
                <div className="font-bold text-3xl md:text-4xl">{person.name}</div>
                <div className="font-secondary text-xl sm:text-2xl">{person.title} {'(' + person.title_abbreviation + ')'}</div>
            </div>
            <div className="font-secondary text-md sm:text-xl">{person.quote}</div>
        </div>
    </div>
  );
}
export default Team_Member;