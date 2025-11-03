import { useState } from "react";
import AllBundleCards from "./AllBundleCards.jsx";
import { bundleData } from "../../../data/service-data/bundleData.js";
import BundleComparison from "./BundleComparison.jsx";

function BundlePackages() {
  const [toggleSwitch, setToggleSwitch] = useState(true);
  const [currentPackage, setCurrentPackage] = useState(
    bundleData.completePackage
  );

  const handleToggle = () => {
    const currentToggle = !toggleSwitch;
    setToggleSwitch(currentToggle);
    setCurrentPackage(
      currentToggle ? bundleData.completePackage : bundleData.authorPackage
    );
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="toggle-switch w-[95%] h-30 bg-white rounded-lg shadow-sm flex flex-col items-center gap-2 py-2 text-[13px] font-bold">
        <button
          className={`flex justify-center items-center rounded-lg cursor-pointer py-2 px-4 w-[95%] h-12 transition-colors duration-300 ease-in-out ${
            toggleSwitch ? " bg-gold text-white" : " bg-white text-black"
          }`}
          onClick={handleToggle}
        >
          Complete Publishing Package
        </button>
        <button
          className={`flex justify-center items-center rounded-lg cursor-pointer py-2 px-4 w-[95%] h-12 transition-colors duration-300 ease-in-out ${
            !toggleSwitch ? " bg-gold text-white" : " bg-white text-black"
          }`}
          onClick={handleToggle}
        >
          Author Support Package
        </button>
      </div>

      <AllBundleCards currentPackage={currentPackage} />

      <BundleComparison/>
    </div>
  );
}
export default BundlePackages;
