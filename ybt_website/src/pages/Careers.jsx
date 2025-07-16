import { Link } from 'react-router-dom';
import { useState } from "react";
import { positions } from "../data/positions.js";
import TitleBanner from "../components/TitleBanner";
import Button from "../components/Buttons";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import headshot_intern_rachel from "../assets/headshots/headshot_intern_rachel.png";
import headshot_intern_nadun from "../assets/headshots/headshot_intern_nadun.png";
import headshot_intern_genevieve from "../assets/headshots/headshot_intern_genevieve.png";

function Careers() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const openJobs = positions.filter((job)=> job.status == "open");
  const [searchedJobs, setSearchedJobs] = useState(openJobs);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(openJobs.length / itemsPerPage);
  const startIndex = itemsPerPage * (currentPage-1);
  const endIndex = startIndex + itemsPerPage;
  const displayedJobs = openJobs.slice(startIndex, endIndex);

  const handleSubmit = (event) =>{
    event.preventDefault();

    const rankedJobs = openJobs
    .map((job) => {
      const titleScore = job.title.toLowerCase().includes(query.toLowerCase()) ? 2 : 0;
      const descScore = job.description.toLowerCase().includes(query.toLowerCase()) ? 1 : 0;
      return { ...job, score: titleScore + descScore };
    })
    .filter((job) => job.score > 0)
    .sort((a, b) => b.score - a.score);

    setSearchedJobs(rankedJobs);
  
    console.log(query);
    setQuery("");
  }

  const handleChange = (event) =>{
    setQuery(event.target.value);
  }

  const handleNext = () => {
    if(currentPage < totalPages){
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePrevious = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  }

  const handlePageClick = (num) => {
    setCurrentPage(num);
  }



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

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="font-bold text-[20px]">Current Openings</div>
        <form onSubmit={handleSubmit} className="flex gap-2 text-[15px]">
          <input type="text" value={query} onChange={handleChange} placeholder="Search by keyword..." 
          className="w-150 h-8 px-2 py-1 border border-gray-300 rounded-md focus:outline-none bg-light-gray"/>

          <button type="submit" className="w-20 h-8 px-4 py-2 bg-saffron rounded-md text-center font-bold flex flex-col items-center justify-center cursor-pointer">Search</button>
        </form>
      </div>

      <div className="flex flex-col items-center gap-16 md:px-30 lg:px-50 xl:px-150 py-20">
        {openJobs.length == 0 ? (
          <div className="text-gray text-[20px]">No open positions at the moment</div>
        ) :
        displayedJobs.map((position) => (
          <div className="flex flex-col items-center gap-8">
            <img src={position.image} className="w-100 h-80 object-cover rounded-xl shadow-lg"></img>
            <div className="flex flex-col gap-4">
              <div className="font-bold text-[20px]">{position.title}</div>
              <div className="text-[15px] leading-7">{position.description}</div>
              <Button to={`/position/${position.id}`} className="px-4 border-0 rounded-md bg-[#F5BE29] cursor-pointer w-30 h-10 flex items-center">
                <div className="font-bold">APPLY</div>
                <FaArrowRight className="w-10 h-5"/>
              </Button>
            </div>
          </div>
        ))}

        <div className="flex gap-4">
          <button onClick={handlePrevious} className={`w-10 h-10 rounded-full flex items-center justify-center ${currentPage == 1 ? "bg-gray" : "cursor-pointer bg-black"}`}>
            <FaArrowLeft className="text-white w-5 h-5 text-center"/>
          </button>
          {Array.from({length: totalPages}, (value, index) => index+1).map((num) => (
            <button key={num} className={`cursor-pointer ${currentPage == num ? "underline" : ""}`} onClick={() => handlePageClick(num)}>
              {num}
            </button>
          ))}
          <button onClick={handleNext} className={`w-10 h-10 rounded-full flex items-center justify-center ${currentPage == totalPages ? "bg-gray" : "cursor-pointer bg-black"}`}>
            <FaArrowRight className="text-white w-5 h-5 text-center"/>
          </button>
        </div>
      </div>
    </div>
  );

}

export default Careers;