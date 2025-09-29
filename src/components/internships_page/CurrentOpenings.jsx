import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";

function CurrentOpenings({ displayedJobs }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="flex flex-col items-center gap-16 py-20 px-10">
      {displayedJobs.length == 0 ? (
        <div className="text-gray text-xl">No open positions at the moment</div>
      ) : (
        displayedJobs.map((position) => (
          <div
            className="flex flex-col lg:flex-row items-center gap-8 justify-center"
            key={position.id}
          >
            <img
              src={position.image}
              className="
                  object-cover rounded-xl shadow-lg
                  w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]
                "
            ></img>
            <div
              className="
                flex flex-col justify-center gap-4
                items-center lg:items-start
                w-[100%] lg:w-[60%] xl:w-[50%] 2xl:w-[30%]
              "
            >
              <div className="font-bold text-2xl text-center">
                {position.title}
              </div>
              <div className="text-center lg:text-start text-md leading-7">
                {position.description}
              </div>
              <Button
                gold wide
                to={`/position/${position.id}`}
                onClick={scrollToTop}
                className="px-0 py-0"
              >
                <div className="font-bold">APPLY</div>
                <FaArrowRight className="w-10 h-5" />
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
export default CurrentOpenings;