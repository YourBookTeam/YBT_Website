import { FaPeopleGroup } from "react-icons/fa6";

function About_Us() {
  return (
    <div className="
      flex items-center justify-center font-secondary
      px-15 w-160 gap-5
    ">
        <div className="flex flex-col gap-10">
            <div className="leading-loose">
                    YourBookTeam helps you turn your ideas into powerful books, even if you’re short on time or experience. From writing to editing, publishing, and marketing, our expert team guides you every step of the way.
            </div>
            <div className="leading-loose">
                    We turn aspiring writers into bestselling authors by focusing on each story’s heart—turning a shaky first draft into a story that outlives you—we build legacy.
            </div>
        </div>
        <FaPeopleGroup className="
          shrink-0 text-gold
          size-50
        "/>
    </div>
  );
}
export default About_Us;