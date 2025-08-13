import { FaBook } from "react-icons/fa";

function Story() {
  return (
    <div className="flex items-center justify-center gap-10 lg:px-100 lg:pt-10">
      <FaBook className="shrink-0 text-gold lg:size-50"/>
      <div className="flex flex-col gap-10">
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