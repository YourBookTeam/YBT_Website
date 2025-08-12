import { IoPersonCircleOutline } from "react-icons/io5";

function Team_Member({ person }) {
  return (
    <div className="flex items-center gap-10 lg:w-300">
        <div className="w-50 h-50 shrink-0 overflow-hidden rounded">
            {
                person.headshot === "" ? (
                    <IoPersonCircleOutline className="lg:size-54"/>
                ) :
                (
                    <img src={person.headshot} alt="" className="w-full h-full object-cover rounded-full bg-gold"/>
                )
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