import { FaHandshakeAngle, FaScaleBalanced, FaUsersViewfinder } from "react-icons/fa6";
import { FaHeart, FaCrown } from "react-icons/fa";

function Values() {
  return (
    <div className="
    flex flex-col items-center font-bold gap-20 pt-10 
    xl:pb-30
    lg:pb-20
    ">
        <div className="text-5xl">Our Core Values</div>
        <div className="
          grid grid-cols-3 
          xl:gap-100
          lg:gap-50
        ">
            <div className="flex flex-col items-center">
            <FaHandshakeAngle className="shrink-0 text-gold size-40"/>
            <div className="text-xl">Collaboration</div>
            </div>
            <div className="flex flex-col items-center">
            <FaScaleBalanced className="shrink-0 text-gold size-40"/>
            <div className="text-xl">Integrity</div>
            </div>
            <div className="flex flex-col items-center">
            <FaUsersViewfinder className="shrink-0 text-gold size-40"/>
            <div className="text-xl">Author Centric</div>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-50">
            <div className="flex flex-col items-center">
            <FaHeart className="shrink-0 text-gold size-40"/>
            <div className="text-xl">Heart</div>
            </div>
            <div className="flex flex-col items-center">
            <FaCrown className="shrink-0 text-gold size-40"/>
            <div className="text-xl">Legacy</div>
            </div>
        </div>
    </div>
  );
}
export default Values;