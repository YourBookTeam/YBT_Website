import { Link } from 'react-router-dom';
import TitleBanner from "../components/TitleBanner";
import headshot_intern_rachel from "../assets/headshot_intern_rachel.png";
import headshot_intern_nadun from "../assets/headshot_intern_nadun.png";
import headshot_intern_genevieve from "../assets/headshot_intern_genevieve.png";

function Careers() {

  return (
    <div> 
      <TitleBanner>Careers</TitleBanner>

      <div className="flex flex-col justify-center items-center text-center md:px-10 lg:px-30 xl:px-100 py-10 gap-2">
        <div className="font-bold text-[25px]">Internships</div>
        <div className="font-light">
          At YourBookTeam, interns don’t just observe — they contribute. 
          This is your chance to gain hands-on experience, build your portfolio, 
          and be part of a creative, collaborative team.
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-[20px]">Our Interns!</div>

        <div className="flex gap-10 items-center justify-center md:px-10 lg:px-30 xl:px-100 py-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-35 h-35 shrink-0 overflow-hidden rounded-full">
              <img src={headshot_intern_rachel} className="w-full h-full object-cover"/>
            </div>
            <div className="text-[18px]">Rachel</div>
          </div>
            I was lucky to get hired by YourBookTeam as an intern, and now I’m thrilled to be a part of the paid team. 
            My internship was an amazing journey where I got to dive into the world of editing and content creation. 
            The team was incredibly supportive and made learning both fun and rewarding. From day one, I felt like a 
            valued member of the group, and the experience helped me grow so much professionally. If you’re looking for 
            an internship that offers great hands-on experience and a friendly work environment, I highly recommend YourBookTeam! 
          <div>
          </div>
        </div>

        <div className="flex gap-10 items-center justify-center md:px-10 lg:px-30 xl:px-100 py-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-35 h-35 shrink-0 overflow-hidden rounded-full">
              <img src={headshot_intern_nadun} className="w-full h-full object-cover"/>
            </div>
            <div className="text-[18px]">Nadun</div>
          </div>
            Interning as an editor at YourBookTeam was a fantastic experience that provided both professional and personal growth. 
            The collaborative environment and exposure to various print projects helped me develop essential editing skills. The 
            support and mentorship from the team were invaluable, and I am deeply grateful for the experience. I recommend this 
            internship to anyone who values hands-on learning and a chance to work on real-world projects.
          <div>
          </div>
        </div>

        <div className="flex gap-10 items-center justify-center md:px-10 lg:px-30 xl:px-100 py-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-35 h-35 shrink-0 overflow-hidden rounded-full">
              <img src={headshot_intern_genevieve} className="w-full h-full object-cover"/>
            </div>
            <div className="text-[18px]">Genevieve</div>
          </div>
            At YourBookTeam, I collaborated with seasoned professionals who guided me through the manuscript process, enhancing my 
            learning and skills. Working directly with the author, even remotely, deepened my understanding of publishing. I highly 
            recommend this internship for its impact on my professional growth. If given the chance, I would choose it again. Overall, 
            my time at YourBookTeam was positive and rewarding.
          <div>
          </div>
        </div>

      </div>

    </div>
  );

}

export default Careers;