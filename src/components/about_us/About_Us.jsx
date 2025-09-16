import { FaPeopleGroup } from "react-icons/fa6";

function About_Us() {
  return (
    <div className="
      items-center justify-center font-secondary 
      text-center lg:text-left
      flex
      flex-col-reverse lg:flex-row
      px-40 sm:px-15 lg:px-30 2xl:px-80
      gap-5 2xl:gap-15
    ">
        <div className="
          flex flex-col 
          gap-5 2xl:gap-10
          text-lg sm:text-xl
        ">
            <div className="leading-loose">
                    YourBookTeam helps you turn your ideas into powerful books, even if you’re short on time or experience. From writing to editing, publishing, and marketing, our expert team guides you every step of the way.
            </div>
            <div className="leading-loose">
                    We turn aspiring writers into bestselling authors by focusing on each story’s heart—turning a shaky first draft into a story that outlives you—we build legacy.
            </div>
        </div>
        <FaPeopleGroup className="
          shrink-0 text-gold
          size-50 lg:size-60 2xl:size-70
        "/>
    </div>
  );
}
export default About_Us;