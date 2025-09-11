import { FaBook } from "react-icons/fa";

function Story() {
  return (
    <div 
    className="
      items-center justify-center font-secondary 
      text-center lg:text-left
      flex
      flex-col lg:flex-row
      px-5 sm:px-15 lg:px-30 2xl:px-80
      pt-5
      gap-10 2xl:gap-12
    ">
      <FaBook className="
        shrink-0 text-gold 
        size-30 sm:size-35 lg:size-40 2xl:size-50
      "/>
      <div className="
        flex flex-col 
        gap-5 2xl:gap-10
        text-lg sm:text-xl
      ">
          <div className="leading-loose">
                  Founded by publishing expert John Kiss, YourBookTeam began with a passion for helping people share meaningful stories. We started 
                  with one goal: help people tell meaningful stories that make an impact. Our client-centric approach ensures your voice is honored 
                  while we elevate your ideas into polished, powerful work.
          </div>
          <div className="leading-loose">
                  As we look to the future, we’re embracing multimedia formats and digital 
                  experiences to push the boundaries of publishing while keeping human connection at the heart of every story. At YourBookTeam, we 
                  don’t just publish books — we help authors create legacies.
          </div>
      </div>
    </div>
  );
}
export default Story;