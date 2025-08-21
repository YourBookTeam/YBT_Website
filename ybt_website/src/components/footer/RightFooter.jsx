import { FiMapPin, FiMail } from "react-icons/fi";

const RightFooter = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-between min-w-64 min-h-96">
        <h3 className="text-3xl font-bold mb-8">Contact Info</h3>
        <div className="flex flex-col items-center">
        <div className="text-lg my-4 flex leading-relaxed">
            <FiMapPin className="text-xl mt-4" />
            <div className="min-w-56 ml-2">
            3214 Silverado Dr
            <br />
            Los Angeles, CA 90039
            </div>
        </div>
        <div className="text-lg my-4 flex leading-relaxed">
            <FiMail className="text-xl mt-1.5" />
            <div className="min-w-56 ml-2">info@yourbookteam.com</div>
        </div>
        </div>
        <div className="flex justify-center mt-auto mb-5">
        Copyright © 2025 YourBookTeam
        <br />
        All Rights Reserved.
        </div>
    </div>
  );
};

export default RightFooter;
