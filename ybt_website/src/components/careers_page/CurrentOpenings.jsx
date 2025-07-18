import Button from "../Buttons";
import { FaArrowRight } from "react-icons/fa";

function CurrentOpenings({ displayedJobs }) {
  return (
    <div className="flex flex-col items-center gap-16 md:px-30 lg:px-50 xl:px-150 py-20">
        {displayedJobs.length == 0 ? (
            <div className="text-gray text-[20px]">No open positions at the moment</div>
        ) :
        displayedJobs.map((position) => (
            <div className="flex flex-col items-center gap-8" key={position.id}>
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
    </div>
  );
}
export default CurrentOpenings;
