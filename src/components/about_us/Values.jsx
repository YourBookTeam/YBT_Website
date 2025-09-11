import { FaHandshakeAngle, FaScaleBalanced, FaUsersViewfinder } from "react-icons/fa6";
import { FaHeart, FaCrown } from "react-icons/fa";

function Values() {
  return (
    <div className="
      flex flex-col items-center font-bold
      pt-10 2xl:pt-20
      md:pb-10 2xl:pb-20
      gap-15 lg:gap-20
      sm:px-10
    ">
      <div className="text-4xl sm:text-4xl 2xl:text-5xl">Our Core Values</div>
      

        <div className="
          grid grid-cols-3 font-secondary font-semibold 
          gap-0 sm:gap-15 md:gap-25 lg:gap-40 2xl:gap-50
          text-lg sm:text-xl
        ">
            <div className="flex flex-col items-center">
            <FaHandshakeAngle className="shrink-0 text-gold size-18 sm:size-20 md:size-30"/>
            <div className="text-center">Collaboration</div>
            </div>
            <div className="flex flex-col items-center">
            <FaScaleBalanced className="shrink-0 text-gold size-18 sm:size-20 md:size-30"/>
            <div className="text-center">Integrity</div>
            </div>
            <div className="flex flex-col items-center">
            <FaUsersViewfinder className="shrink-0 text-gold size-18 sm:size-20 md:size-30"/>
            <div className="text-center">Author Centric</div>
            </div>
        </div>

        <div className="
          grid grid-cols-2 font-secondary font-semibold 
          gap-15 sm:gap-30 md:gap-30 lg:gap-50 2xl:gap-60
          text-lg sm:text-xl
        ">
            <div className="flex flex-col items-center">
            <FaHeart className="shrink-0 text-gold size-18 sm:size-20 md:size-30"/>
            <div className="text-center">Heart</div>
            </div>
            <div className="flex flex-col items-center">
            <FaCrown className="shrink-0 text-gold size-18 sm:size-20 md:size-30"/>
            <div className="text-center">Legacy</div>
            </div>
        </div>
    </div>
  );
}
export default Values;