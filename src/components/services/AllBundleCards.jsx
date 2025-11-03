import BundleCard from "./BundleCard";

function AllBundleCards({ currentPackage }){

    return(
        <div className="flex flex-col justify-center gap-8">

            <div className="flex flex-col justify-center items-center text-center gap-2">
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

            <BundleCard card={currentPackage.executiveCard}/>
            <BundleCard card={currentPackage.professionalCard}/>
            <BundleCard card={currentPackage.emergingCard}/>

        </div>
    )
}
export default AllBundleCards;