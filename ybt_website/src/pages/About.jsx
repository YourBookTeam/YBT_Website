import TitleBanner from "../components/TitleBanner";
import About_Us from "../components/about_us/About_Us";
import Story from "../components/about_us/Story";
import Values from "../components/about_us/Values";
import MeetYourTeam from "../components/about_us/MeetYourTeam";
import { team } from "../data/team.js";


function About() {
  const main_team = team.filter((person)=> person.status == "main_display");

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div>
        <TitleBanner>About Us</TitleBanner>
        <About_Us/>
      </div>
      
      <div>
        <TitleBanner>Our Story</TitleBanner>
        <Story/>
      </div>
  
      <Values/>
      
      <div>
        <TitleBanner>Meet Your Team</TitleBanner>
        <MeetYourTeam main_team={main_team}/>
      </div>

    </div>
  );

}

export default About;