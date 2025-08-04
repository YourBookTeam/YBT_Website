import { FaHandshakeAngle, FaScaleBalanced, FaUsersViewfinder } from "react-icons/fa6";
import { FaHeart, FaCrown } from "react-icons/fa";

function Values() {
  return (
    <div className="flex flex-col items-center font-bold gap-10 pt-10">
        <div className="text-4xl">Our Core Values</div>
        <div className="grid grid-cols-3 gap-50">
            <div className="flex flex-col items-center">
            <FaHandshakeAngle size={100} className="shrink-0 text-gold"/>
            <div>Collaboration</div>
            </div>
            <div className="flex flex-col items-center">
            <FaScaleBalanced size={100} className="shrink-0 text-gold"/>
            <div>Integrity</div>
            </div>
            <div className="flex flex-col items-center">
            <FaUsersViewfinder size={100} className="shrink-0 text-gold"/>
            <div className="text-center">Customer Centric</div>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-50">
            <div className="flex flex-col items-center">
            <FaHeart size={100} className="shrink-0 text-gold"/>
            <div>Heart</div>
            </div>
            <div className="flex flex-col items-center">
            <FaCrown size={100} className="shrink-0 text-gold"/>
            <div>Legacy</div>
            </div>
        </div>
    </div>
  );
}
export default Values;