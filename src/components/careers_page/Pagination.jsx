import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Pagination({ totalPages, currentPage, handlePrevious, handleNext, handlePageClick }) {
  return (
    <div className="flex gap-4 items-center justify-center md:px-30 lg:px-50 xl:px-150 py-20">
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
  );
}
export default Pagination;