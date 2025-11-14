import { Link } from "react-router-dom";

function TeamMember({ person }) {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <Link to={"/about#" + person.link} onClick={scrollToTop} className="flex flex-col items-center gap-10 flex-shrink-0 w-64 z-100">
      <img src={person.headshot} alt={person.name} className="rounded-tr-3xl h-90 w-64 mx-10 object-cover bg-gold drop-shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"/>
      <section className="team-info w-full flex flex-col items-center">
        <div className="text-base font-semibold">{person.name}</div>
        <div className="text-base ml-3">{person.title_abbreviation}</div>
      </section>
    </Link>
  );
}

export default TeamMember;
