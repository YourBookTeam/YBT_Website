import TitleBanner from "../components/TitleBanner";
import MeetYourTeam from "../components/about_us/MeetYourTeam";
import backgroundImg from '../assets/books_about_us.jpg';
import { team } from "../data/team.js";

import { FaPeopleGroup, FaHandshakeAngle, FaScaleBalanced, FaUsersViewfinder } from "react-icons/fa6";
import { FaHeart, FaCrown } from "react-icons/fa";


function About() {
  const main_team = team.filter((person)=> person.status == "main_display");
  const carousel_team = team.filter((person) => person.status == "carousel.display");

  return (
    <div>
      <TitleBanner>About Us</TitleBanner>

      <div className="relative h-32 w-full flex justify-center items-center">
        <div className="absolute inset-0 bg-cover bg-center filter contrast-75"style={{ backgroundImage: `url(${backgroundImg})` }}></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-white text-[35px] font-bold">
          Hi, We Are Your Book Team!
        </div>
    </div>

      <div className="md:px-10 lg:px-30 xl:px-100 py-10 flex flex-col gap-10">
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

          <div className="flex flex-col items-center font-bold text-[20px] gap-10 pt-20">
            <div>Our Core Values</div>
            <div className="grid grid-cols-3 gap-50">
              <div className="flex flex-col items-center">
                <FaHandshakeAngle size={100} className="shrink-0 text-saffron"/>
                <div>Collaboration</div>
              </div>
              <div className="flex flex-col items-center">
                <FaScaleBalanced size={100} className="shrink-0 text-saffron"/>
                <div>Integrity</div>
              </div>
              <div className="flex flex-col items-center">
                <FaUsersViewfinder size={100} className="shrink-0 text-saffron"/>
                <div className="text-center">Customer Centric</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-50">
              <div className="flex flex-col items-center">
                <FaHeart size={100} className="shrink-0 text-saffron"/>
                <div>Heart</div>
              </div>
              <div className="flex flex-col items-center">
                <FaCrown size={100} className="shrink-0 text-saffron"/>
                <div>Legacy</div>
              </div>
            </div>
          </div>
      </div>
      
      <TitleBanner>Meet Your Team</TitleBanner>

      <MeetYourTeam main_team={main_team}/>

      {/* <div className="mt-30 bg-soft-saffron flex items-center">
        <div className="team-carousel md:px-10 lg:px-10 xl:px-200 py-20">
          <div className="flex items-center gap-10">
            <div className="w-50 h-50 shrink-0 overflow-hidden rounded">
              <img src={headshot_nermina} className="w-full h-full object-cover"/>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <div className="font-bold text-[25px]">Nermina Salkic</div>
                <div className="text-[20px]">CPO</div>
              </div>
              <div>
                With a strong background in finance and over 30 years of experience in the publishing 
                industry, Isaac plays a pivotal role in driving the company’s growth and ensuring 
                financial stability. Isaac’s expertise helps guide the company toward continued success 
                in a rapidly evolving market.
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );

}

export default About;