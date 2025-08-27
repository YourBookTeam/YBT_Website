import { FaRegCalendarAlt } from "react-icons/fa";

const DiscoveryCall = ({ handleCalendlyOpen }) => {
  return (
    <div className="flex flex-col gap-8 w-full p-10 xl:p-0 items-center xl:items-start">

      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-center xl:text-left">Set up a discovery call</h1>
        <p className="text-lg">
          Get more details about all the ways we can make your dream
          book become a reality. Feel free to send us a message or
          schedule a call here.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex items-center justify-center gap-3 bg-black text-white px-4 py-2.5 font-bold text-2xl shadow-lg cursor-pointer w-60"
        onClick={handleCalendlyOpen}
      >
        <FaRegCalendarAlt className="w-5 h-5 text-white" />
        Schedule here
      </button>
    </div>
  );
};

export default DiscoveryCall;