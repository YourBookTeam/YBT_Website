import { Link } from "react-router-dom";

function TeamMemberPreview({ person }) {
  const scrollToTop = () => {
      window.scrollTo(0,0);
  }

  return (
    <Link to={"/about#" + person.link} onClick={scrollToTop} className="flex flex-col items-center gap-5">
        <img src={person.headshot} className="rounded-full h-50 w-50 object-cover bg-gold hover:opacity-80 transition-colors duration-200"/>
        <div className="text-2xl font-semibold">{person.name}</div>
        <div className="text-xl">{person.position}</div>
    </Link>
    
  );
}
export default TeamMemberPreview;
