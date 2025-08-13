import { FaHandshakeAngle, FaScaleBalanced, FaUsersViewfinder } from "react-icons/fa6";
import { FaHeart, FaCrown } from "react-icons/fa";

function Values() {
  return (
    <div className="flex flex-col items-center font-bold gap-20 lg:pt-10 lg:pb-30">
        <div className="text-5xl">Our Core Values</div>
        <div className="grid grid-cols-3 gap-100">
            <div className="flex flex-col items-center">
            <FaHandshakeAngle size={150} className="shrink-0 text-gold"/>
            <div className="text-xl">Collaboration</div>
            </div>
            <div className="flex flex-col items-center">
            <FaScaleBalanced size={150} className="shrink-0 text-gold"/>
            <div className="text-xl">Integrity</div>
            </div>
            <div className="flex flex-col items-center">
            <FaUsersViewfinder size={150} className="shrink-0 text-gold"/>
            <div className="text-xl">Author Centric</div>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-50">
            <div className="flex flex-col items-center">
            <FaHeart size={150} className="shrink-0 text-gold"/>
            <div className="text-xl">Heart</div>
            </div>
            <div className="flex flex-col items-center">
            <FaCrown size={150} className="shrink-0 text-gold"/>
            <div className="text-xl">Legacy</div>
            </div>
        </div>
    </div>
  );
}
export default Values;