import { Link } from 'react-router-dom';
import TitleBanner from "../components/TitleBanner";

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

        <div className="entire-intern">
          <div className="picture-section">
            
          </div>
        </div>

      </div>

    </div>
  );

}

export default Careers;