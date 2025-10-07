import { Link } from "react-router-dom";

function TeamMemberPreview({ person }) {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <Link to={"/about#" + person.link} onClick={scrollToTop} className="flex flex-col items-center gap-5 flex-shrink-0 w-60">
      <img src={person.headshot} alt={person.name} className="rounded-tr-3xl h-90 w-60 object-cover bg-gold hover:opacity-80 transition-colors duration-200"/>
      <section className="team-info w-full flex">
        <div className="text-base font-semibold">{person.name}</div>
        <div className="text-base ml-3">{person.title_abbreviation}</div>
      </section>
    </Link>
  );
}

export default TeamMemberPreview;
