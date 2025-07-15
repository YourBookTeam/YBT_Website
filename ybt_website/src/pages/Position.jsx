import { Link } from 'react-router-dom';
import Nav from "../components/Navbar"
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";

function Position() {

  return (
    <div>
      <Nav></Nav>
      <div>Position Page</div>

      <section className="w-full bg[#] ">
        <Buttons to="/careers" className="cursor-pointer ">Back to All Jobs</Buttons>
      </section>
      <section className='position_hero'></section>
      <section className='open_position'>
        <section className='position_title'>
          <h1 className='position_Name'>{Title}</h1>
          <Buttons className={"justify-center font-bold text-sm bg-[#011829]"}>Apply</Buttons>
        </section>
        <section className='position_Description'>
          <h2>Description:</h2>
          <p>{job_description}</p>
          <h2>Location:</h2><p>{location}</p>
          <h2>Duration:</h2><p>{duration}</p>
          <h2>Compensation:</h2><p>{compensation}</p>
        </section>
        <section className='position_responsibility'>
          <h2>Key Responsibilities:</h2>
          <ul>
            {responsibilities}
          </ul>
        </section>
        <section className='position_qualification'>
          <h2>Qualifications:</h2>
          <ul>
            {qualifications}
          </ul>
        </section>
        <section className='position_Benefits'>
          <h2>Benefitss:</h2>
          <ul>
            {benefits}
          </ul>
        </section>
        <Buttons>Apply</Buttons>
      </section>
      <section className="w-full bg[#] ">
        <Buttons to="/careers" className="cursor-pointer ">Back to All Jobs</Buttons>
      </section>
      <Footer />
    </div>
  );

}

export default Position;