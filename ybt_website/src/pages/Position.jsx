import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from "../components/Navbar"
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
import jobData from "../data/positions";

function Position() {
  //Getting position data from Json file
    const { id } = useParams();
    const [position, setPosition] = useState(null);

    useEffect(() => {
      const selectedPosition = jobData.find(position => position.id === parseInt(id));
        if (selectedPosition){
        setPosition(selectedPosition)
      }else{
        setPosition(null);
      }
    }, [id]);
    if(position.status === "close") return <p>No open positions</p>;

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
          <h1 className='position_name'>{position.title}</h1>
          <Buttons className={"justify-center font-bold text-sm bg-[#011829]"}>Apply</Buttons>
        </section>
        <section className='position_Description'>
          <h2>Description:</h2>
          <p>{position.description}</p>
          <h2>Location:</h2><p>{position.location}</p>
          <h2>Duration:</h2><p>{position.duration}</p>
          <h2>Compensation:</h2><p>{position.compensation}</p>
        </section>
        <section className='position_responsibility'>
          <h2>Key Responsibilities:</h2>
          <ul>
            {position.responsibilities.map(item => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
        </section>
        <section className='position_qualification'>
          <h2>Qualifications:</h2>
          <ul>
            {position.qualifications.map(item => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
        </section>
        <section className='position_Benefits'>
          <h2>Benefitss:</h2>
          <ul>
            {position.benefits.map(item => (
              <li key={item.id}>{item.value}</li>
            ))}
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