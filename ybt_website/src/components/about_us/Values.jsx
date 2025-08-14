import { FaHandshakeAngle, FaScaleBalanced, FaUsersViewfinder } from "react-icons/fa6";
import { FaHeart, FaCrown } from "react-icons/fa";

function Values() {
  return (
    <div className="
      flex flex-col items-center font-bold
      pt-10
      gap-15
    ">
      <div className="text-5xl">Our Core Values</div>
      

        <div className="
          grid grid-cols-3
          gap-6 sm:gap-10
          text-sm sm:text-xl
        ">
            <div className="flex flex-col items-center">
            <FaHandshakeAngle className="shrink-0 text-gold size-18 sm:size-25"/>
            <div className="text-center">Collaboration</div>
            </div>
            <div className="flex flex-col items-center">
            <FaScaleBalanced className="shrink-0 text-gold size-18 sm:size-25"/>
            <div className="text-center">Integrity</div>
            </div>
            <div className="flex flex-col items-center">
            <FaUsersViewfinder className="shrink-0 text-gold size-18 sm:size-25"/>
            <div className="text-center">Author Centric</div>
            </div>
        </div>

        <div className="
          grid grid-cols-2 
          gap-15 sm:gap-20
          text-sm sm:text-xl
        ">
            <div className="flex flex-col items-center">
            <FaHeart className="shrink-0 text-gold size-18 sm:size-25"/>
            <div className="text-center">Heart</div>
            </div>
            <div className="flex flex-col items-center">
            <FaCrown className="shrink-0 text-gold size-18 sm:size-25"/>
            <div className="text-center">Legacy</div>
            </div>
        </div>
    </div>
  );
}
export default Values;