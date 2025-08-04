import { FaPeopleGroup } from "react-icons/fa6";

function About_Us() {
  return (
    <div className="flex items-center justify-center gap-5 lg:px-70">
        <div className="flex flex-col gap-10 indent-4">
            <div className="leading-loose">
                    YourBookTeam helps you turn your ideas into powerful books, even if you’re short on time or experience. From writing to editing, publishing, and marketing, our expert team guides you every step of the way.
            </div>
            <div className="leading-loose">
                    We turn aspiring writers into bestselling authors by focusing on each story’s heart—turning a shaky first draft into a story that outlives you—we build legacy.
            </div>
        </div>
        <FaPeopleGroup className="shrink-0 text-gold sm:size-60 md:size-20 lg:size-50"/>
    </div>
  );
}
export default About_Us;