import { FaPeopleGroup } from "react-icons/fa6";

function Story() {
  return (
    <div className="flex flex-col gap-10">
        <div>
            <div className="font-bold text-[20px] pb-2">About Us</div>
            <div className="leading-loose">
                We turn aspiring writers into bestselling authors by focusing on each story’s heart—turning a shaky first draft into a story that 
                outlives you—we build legacy. YourBookTeam helps you turn your ideas into powerful books — even if you’re short on time or experience. 
                From writing to editing, publishing, and marketing, our expert team guides you every step of the way.
            </div>
            </div>

        <div className="flex items-center w-full gap-10">
        <div>
            <div className="font-bold text-[20px] pb-2">Our Story</div>
            <div className="leading-loose">
            Founded by publishing expert John Kiss, YourBookTeam began with a passion for helping people share meaningful stories. We started 
            with one goal: help people tell meaningful stories that make an impact. Our client-centric approach ensures your voice is honored 
            while we elevate your ideas into polished, powerful work. As we look to the future, we’re embracing multimedia formats and digital 
            experiences to push the boundaries of publishing while keeping human connection at the heart of every story. At YourBookTeam, we 
            don’t just publish books — we help authors create legacies.
            </div>
        </div>
        <FaPeopleGroup size={250} className="shrink-0 text-saffron"/>
        </div>
    </div>
  );
}
export default Story;