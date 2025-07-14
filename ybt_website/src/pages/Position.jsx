import { Link } from 'react-router-dom';
import Nav from "../components/Navbar"
import Buttons from "../components/Buttons";

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
        <section className='apply_section'>
          <h1 id='' className='position_Name'></h1>
          <Buttons className={"justify-center font-bold text-sm bg-[#011829]"}>Apply</Buttons>
        </section>
      </section>


    </div>
  );

}

export default Position;