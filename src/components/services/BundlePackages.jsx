import { useState } from 'react';
import BundleCards from './BundleCards';
import { bundleData } from '../../data/service-data/bundleData.js';

function BundlePackages(){
    const [completePackageEnabled, setcompletePackageEnabled] = useState(true);
    const [authorPackageEnabled, setauthorPackageEnabled] = useState(false);
    const [currentCard, setCurrentCard] = useState(bundleData.completePackage);

    const handleToggle = ()=> {
        setcompletePackageEnabled(!completePackageEnabled);
        setauthorPackageEnabled(!authorPackageEnabled);
        
        if(completePackageEnabled) setCurrentCard(bundleData.completePackage);
        else if(completePackageEnabled) setCurrentCard(bundleData.authorPackage);
    }

    return(
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-[95%] h-30 bg-white rounded-lg shadow-sm flex flex-col items-center gap-2 py-2 text-[13px] font-bold">
                <button 
                    className={`flex justify-center items-center rounded-lg cursor-pointer py-2 px-4 w-[95%] h-12 transition-colors duration-300 ease-in-out ${completePackageEnabled ? " bg-gold text-white" : " bg-white text-black"}`}
                    onClick={handleToggle}
                    >
                    Complete Publishing Package
                </button>
                <button 
                    className={`flex justify-center items-center rounded-lg cursor-pointer py-2 px-4 w-[95%] h-12 transition-colors duration-300 ease-in-out ${authorPackageEnabled ? " bg-gold text-white" : " bg-white text-black"}`}
                    onClick={handleToggle}
                    >
                    Author Support Package
                </button>
            </div>

            <BundleCards card={currentCard}/>
        </div>
    )
}
export default BundlePackages;