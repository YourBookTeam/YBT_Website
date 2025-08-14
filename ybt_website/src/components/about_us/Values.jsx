import { FaHandshakeAngle, FaScaleBalanced, FaUsersViewfinder } from "react-icons/fa6";
import { FaHeart, FaCrown } from "react-icons/fa";

function Values() {
  return (
    <div className="
      flex flex-col items-center font-bold
      gap-12 pt-10
    ">
      <div className="text-4xl">Our Core Values</div>
      

        <div className="
          grid grid-cols-3
          gap-6
        ">
            <div className="flex flex-col items-center">
            <FaHandshakeAngle className="shrink-0 text-gold size-18"/>
            <div className="text-sm text-center">Collaboration</div>
            </div>
            <div className="flex flex-col items-center">
            <FaScaleBalanced className="shrink-0 text-gold size-18"/>
            <div className="text-sm text-center">Integrity</div>
            </div>
            <div className="flex flex-col items-center">
            <FaUsersViewfinder className="shrink-0 text-gold size-18"/>
            <div className="text-sm text-center">Author Centric</div>
            </div>
        </div>

        <div className="
          grid grid-cols-2 
          gap-15
        ">
            <div className="flex flex-col items-center">
            <FaHeart className="shrink-0 text-gold size-18"/>
            <div className="text-sm text-center">Heart</div>
            </div>
            <div className="flex flex-col items-center">
            <FaCrown className="shrink-0 text-gold size-18"/>
            <div className="text-sm text-center">Legacy</div>
            </div>
        </div>
    </div>
  );
}
export default Values;