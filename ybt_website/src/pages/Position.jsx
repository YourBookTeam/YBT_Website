import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Buttons from "../components/Buttons";
import heroImg from '../assets/Join-The-Team.jpg'

//import jobData from "../data/positions";


function Position() {
  
  return (
    <div>
       <section className="w-full h-8 my-6 p-1 bg-[#FFE7A6] ">
        <Buttons to="/careers" className="cursor-pointer underline">Back to All Jobs</Buttons>
        </section>
        <section className="position_hero h-50 mb-13 flex justify-center">
          <img src={heroImg} alt="This is the position page's hero banner. Four individuals high" className="h-50 w-100"/>
        </section>
         <section className='open_position flex justify-center w-full'>
          <div className='title_containter sm:w-150 md:w-190 lg:w-240'>
            <section className='position_title flex justify-between sm:w-150 md:w-190 lg:w-240 m-1'>
              <h1 className='position_name sm:text-md md:text-2xl lg:text-2xl font-semibold content-end'>Social Media Intern</h1>
              <Buttons className={"justify-center font-bold text-sm text-white bg-[#011829] px-5 py-2 w-30 rounded"}>Apply</Buttons>
            </section>
            <hr className=" border border-black border-solid"/>
          </div>
        </section>
        <section className='positon_details px-17 my-3.5 text-left'>
           <section className='position_Description'>
          <h2 className="font-bold ">Description:</h2>
          <p></p>
          <h2 className="font-bold ">Location:</h2><p></p>
          <h2 className="font-bold ">Duration:</h2><p></p>
          <h2 className="font-bold ">Compensation:</h2><p></p>
        </section>
        <section className='position_responsibility'>
          <h2 className="font-bold ">Key Responsibilities:</h2>
        </section>
        <section className='position_qualification'>
          <h2 className="font-bold ">Qualifications:</h2>
        </section>
        <section className='position_Benefits'>
          <h2 className="font-bold ">Benefits:</h2>
        </section>
        </section>
          <section className='apply_btn flex justify-center m-1'>
            <Buttons className={"justify-center font-bold text-sm text-white bg-[#011829] px-5 py-2 w-60 rounded"}>Apply</Buttons>
          </section>
          <section className="w-full h-8 mt-10 p-1 bg-[#FFE7A6] text-center">
            <Buttons to="/careers" className="cursor-pointer underline">Back to All Jobs</Buttons>
          </section>
    </div>
  );
}

export default Position;