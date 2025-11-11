import BundleCard from "./BundleCard";

function AllBundleCards({ currentPackage }){

    return(
        <div className="flex flex-col items-center justify-center gap-8 w-full">

            <div className="flex flex-col justify-center items-center text-center gap-2 w-[95%]">
                <p className="text-[#8A6D17] font-bold text-3xl leading-relaxed mx-2">
                    {currentPackage.title}
                </p>
                <div className="text-lg flex flex-col gap-1">
                    <p>
                        {currentPackage.subtitle1}
                    </p>
                    <p>
                        {currentPackage.subtitle2}
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 items-center justify-center w-[95%] lg:max-w-300">
                <BundleCard card={currentPackage.executiveCard}/>
                <BundleCard card={currentPackage.professionalCard}/>
                <BundleCard card={currentPackage.emergingCard}/>
            </div>

        </div>
    )
}
export default AllBundleCards;