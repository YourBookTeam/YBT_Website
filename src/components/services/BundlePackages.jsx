import { useState } from 'react';

function BundlePackages(){
    const [firstEnabled, setFirstEnabled] = useState(true);
    const [secondEnabled, setSecondEnabled] = useState(false);

    const handleToggle = ()=> {
        setFirstEnabled(!firstEnabled);
        setSecondEnabled(!secondEnabled);
    }

    return(
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-[95%] h-30 bg-white rounded-lg shadow-sm flex flex-col items-center gap-2 py-2 text-[13px] font-bold">
                <button 
                    className={`flex justify-center items-center rounded-lg cursor-pointer py-2 px-4 w-[95%] h-12 transition-colors duration-300 ease-in-out ${firstEnabled ? " bg-gold text-white" : " bg-white text-black"}`}
                    onClick={handleToggle}
                    >
                    Complete Publishing Package
                </button>
                <button 
                    className={`flex justify-center items-center rounded-lg cursor-pointer py-2 px-4 w-[95%] h-12 transition-colors duration-300 ease-in-out ${secondEnabled ? " bg-gold text-white" : " bg-white text-black"}`}
                    onClick={handleToggle}
                    >
                    Author Support Package
                </button>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-2">
                <p className="text-[#8A6D17] font-bold text-3xl leading-relaxed mx-2">
                    Complete Publishing Package
                </p>
                <div className="text-lg flex flex-col gap-1">
                    <p>
                        Ghostwriting + Editorial + Marketing + Publishing + Cover Design
                    </p>
                    <p>
                        Ideal for visionaries with a powerful idea who need a professional writer to bring it to life.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default BundlePackages;