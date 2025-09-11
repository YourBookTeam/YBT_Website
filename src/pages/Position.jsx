import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from "../components/Button";
import { positions } from '../data/positions';


function Position() {
  //Getting position data from positions page
    const { id } = useParams();
    const [position, setPosition] = useState(null);

    useEffect(() => {
      const selectedPosition = positions.find(position => position.id === parseInt(id));
        if (selectedPosition){
        setPosition(selectedPosition)
      }else{
        setPosition(null);
      }
    }, [id]);
    if (!position || position.status === "close") return <p>No open positions</p>;

  
  return (
    <div>
       <section className="w-full h-8 my-3 mb-15 p-1">
        <Button to="/careers" className="cursor-pointer underline">Back to All Jobs</Button>
        </section>
         <section className='open_position flex justify-center w-full'>
          <div className='title_containter sm:w-150 md:w-190 lg:w-240'>
            <section className='position_title flex justify-between sm:w-150 md:w-190 lg:w-240 m-1'>
              <h1 className='position_name sm:text-md md:text-2xl lg:text-2xl font-semibold content-end'>{position.title}</h1>
              <Button className={"cursor-pointer justify-center font-bold text-sm text-white bg-[#011829] px-5 py-2 w-30 rounded"}>Apply</Button>
            </section>
            <hr className=" border border-black border-solid my-5"/>
          </div>
        </section>
        <section className='positon_details px-17 my-3.5 text-left'>
           <section className='position_Description'>
          <h2 className="font-bold mb-2">Description:</h2>
           <p className='mb-3 text-justify leading-relaxed'>{position.description}</p>
          <h2 className="font-bold inline-block mb-3">Location:</h2><p className='inline-block ml-1.5'>{position.location}</p><br />
          <h2 className="font-bold inline-block mb-3">Duration:</h2><p className='inline-block ml-1.5'>{position.duration}</p><br />
          <h2 className="font-bold inline-block">Compensation:</h2><p className='inline-block ml-1.5'>{position.compensation}</p><br />
        </section>
        <section className='position_responsibility my-10'>
          <h2 className="font-bold mb-2">Key Responsibilities:</h2>
           <ol className="list-decimal ml-5">
              {(position?.responsibilities || []).map((item, index) => (
              <li key={item.id || index} className="my-4">{item.value || item}</li>
            ))}
          </ol>
        </section>
        <section className='position_qualification my-10'>
          <h2 className="font-bold mb-2">Qualifications:</h2>
           <ol className="list-decimal ml-5">
              {(position?.qualifications || []).map((item, index) => (
              <li key={item.id || index} className="my-4">{item.value || item}</li>
            ))}
          </ol>
        </section>
        <section className='position_Benefits my-10'>
          <h2 className="font-bold  mb-2">Benefits:</h2>
          <ol className="list-decimal ml-5">
              {(position?.benefits || []).map((item, index) => (
              <li key={item.id || index} className="my-4">{item.value || item}</li>
            ))}
          </ol>
        </section>
        </section>
          <section className='apply_btn flex justify-center py-6'>
            <Button className={"cursor-pointer justify-center font-bold text-sm text-white bg-[#011829] px-5 py-2 w-60 rounded"}>Apply</Button>
          </section>
          <section className="w-full h-8 mt-10 p-1 text-center">
            <Button to="/careers" className="cursor-pointer underline">Back to All Jobs</Button>
          </section>
    </div>
  );
}

export default Position;