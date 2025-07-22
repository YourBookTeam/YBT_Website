import TitleBanner from "../components/TitleBanner";
import IntroBanner from "../components/about_us/IntroBanner";
import Story from "../components/about_us/Story";
import Values from "../components/about_us/Values";
import MeetYourTeam from "../components/about_us/MeetYourTeam";
import { team } from "../data/team.js";


function About() {
  const main_team = team.filter((person)=> person.status == "main_display");
  const carousel_team = team.filter((person) => person.status == "carousel.display");

  return (
    <div>
      <TitleBanner>About Us</TitleBanner>
      <IntroBanner/>

      <div className="md:px-10 lg:px-30 xl:px-100 py-10 flex flex-col gap-10">
          <Story/>
          <Values/>
      </div>
      
      <TitleBanner>Meet Your Team</TitleBanner>

      <MeetYourTeam main_team={main_team}/>

    </div>
  );

}

export default About;