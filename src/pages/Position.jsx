import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { positions } from "../data/positions";
import { FaArrowLeft } from "react-icons/fa6";

function Position() {
  //Getting position data from positions page
  const { id } = useParams();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const selectedPosition = positions.find((position) => position.id === id);
    if (selectedPosition) {
      setPosition(selectedPosition);
    } else {
      setPosition(null);
    }
  }, [id]);
  if (!position || position.status === "close") return <p>No open positions</p>;

  return (
    <div>
      <section className="w-full h-8 my-3 mb-15">
        <div className="bg-lighter-gold h-10 w-full p-4 flex items-center pt-6 md:pt-4">
          <Link
            to="/internships#current-openings"
            className="underline flex items-center gap-2 hover:text-gray"
          >
            <FaArrowLeft />
            Back To All Jobs
          </Link>
        </div>
      </section>
      <section className="open_position flex flex-col items-center justify-center">
        <img src={position.image} alt="" className="w-100 my-10 pb-5"></img>
        <div className="title_containter w-80 md:w-170 lg:w-240 pb-10">
          <section className="w-full flex flex-col items-center md:flex-row md:justify-between md:w-170 md:px-15 lg:w-240 m-1">
            <h1 className="position_name text-md mb-5 md:text-2xl lg:text-2xl font-semibold content-end">
              {position.title}
            </h1>
            <a
              href={position.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer justify-center text-sm px-5 py-2 w-30 rounded bg-gold hover:bg-lighter-gold text-white flex items-center gap-2 font-semibold transition-colors duration-200 drop-shadow-hero relative text-center"
            >
              Apply
            </a>
          </section>
          <hr className=" border border-black border-solid my-5" />
        </div>
      </section>
      <section className="positon_details flex flex-col justify-center items-center px-17 my-3.5 text-left">
        <section className="position_Description w-80 md:w-170 lg:w-240">
          <h2 className="font-bold mb-2">Description:</h2>
          <p className="text-justify leading-relaxed ml-3 mb-6">
            {position.description}
          </p>
          <h2 className="font-bold inline-block mb-1">Availability:</h2>
          <p className="inline-block ml-1.5 mb-6">
            {position.availability}
          </p>
          <br />
          <h2 className="font-bold inline-block mb-1">Duration:</h2>
          <p className="inline-block ml-1.5 mb-6">
            {position.duration}
          </p>
          <br />
          <h2 className="font-bold inline-block">Compensation:</h2>
          <p className="inline-block ml-1.5 mb-6">
            {position.type}
          </p>
          <br />
        </section>
        <section className="position_requirements my-10 w-80 md:w-170 lg:w-240">
          <h2 className="font-bold mb-2">Requirements:</h2>
          <ol className="list-decimal ml-5">
            {(position?.requirements || []).map((item, index) => (
              <li key={item.id || index} className="my-4">
                {item.value || item}
              </li>
            ))}
          </ol>
        </section>
        <section className="position_responsibility my-10 w-80 md:w-170 lg:w-240">
          <h2 className="font-bold mb-2">Key Responsibilities:</h2>
          <ol className="list-decimal ml-5">
            {(position?.responsibilities || []).map((item, index) => (
              <li key={item.id || index} className="my-4">
                {item.value || item}
              </li>
            ))}
          </ol>
        </section>
        <section className="position_Benefits my-10 w-80 md:w-170 lg:w-240">
          <h2 className="font-bold mb-2">Benefits:</h2>
          <ol className="list-decimal ml-5">
            {(position?.benefits || []).map((item, index) => (
              <li key={item.id || index} className="my-4">
                {item.value || item}
              </li>
            ))}
          </ol>
        </section>
        <section className="position_Conclusion w-80 md:w-170 lg:w-240">
          {(position?.conclusion || []).map((item, index) => (
            <p
              key={item.id || index}
              className="my-4 font-bold"
            >
              {item.value || item}
            </p>
          ))}
        </section>
      </section>
      <section className="apply_btn flex justify-center py-6">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfOfuC1LJugoad0F8BlypC8HfbAC1F6bPFjSSqquZv7Zv-ULQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer justify-center text-sm px-5 py-2 w-60 rounded bg-gold hover:bg-lighter-gold text-white flex items-center gap-2 font-semibold transition-colors duration-200 drop-shadow-hero relative text-center"
        >
          Apply
        </a>
      </section>
      <div className="bg-lighter-gold h-10 w-full p-2 flex items-center justify-center">
        <Link
          to="/internships#current-openings"
          className="underline hover:text-gray flex items-center gap-2"
        >
          <FaArrowLeft />
          Back To All Jobs
        </Link>
      </div>
    </div>
  );
}

export default Position;
