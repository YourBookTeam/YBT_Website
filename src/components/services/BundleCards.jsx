function BundleCards({ card }){

    return(
        <div className="flex flex-col justify-center gap-5">

            <div className="flex flex-col justify-center items-center text-center gap-2">
                <p className="text-[#8A6D17] font-bold text-3xl leading-relaxed mx-2">
                    {card.title}
                </p>
                <div className="text-lg flex flex-col gap-1">
                    <p>
                        {card.subtitle1}
                    </p>
                    <p>
                        {card.subtitle2}
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center">

                <div className="exec-card w-[95%] h-auto bg-white shadow-sm flex flex-col text-black rounded-b-lg">
                    <div className="title text-white bg-gradient-to-r from-gold to-[#8A6D17] w-full h-full rounded-t-lg p-7 flex flex-col gap-2 justify-center item-center text-center">
                        <p className="font-bold text-2xl">{card.executiveCard.title}</p>
                        <p>{card.executiveCard.subtitle}</p>
                    </div>

                    <div className="body px-6 py-8 flex flex-col gap-4">
                        <div className="font-bold text-2xl flex flex-col gap-2">
                            <p>Upfront Payment:</p>
                            <p>{card.executiveCard.payment}</p>
                        </div>

                        <div className="bg-[#f9f7f0] text-[#2ecc71] w-[95%] p-3 rounded-lg border-l-4 border-[#2ecc71] font-semibold text-sm">
                            <p>Bundle Discount: Save {card.executiveCard.discount}</p>
                        </div>

                        <div className="bg-[#f9f7f0] w-[95%] p-3 rounded-lg border-l-4 border-gold text-sm">
                            <p>Revenue Share: {card.executiveCard.revenueShare} of net sales (for 5 years)</p>
                        </div>

                        <p className="font-semibold">What's Included:</p>

                        { card.executiveCard.included.map((line, index) =>(
                            <div key={index} className="border-b border-gray/10 last:border-none pb-2 text-sm">
                                <p><span className="text-[#2ecc71]">✔</span> {line}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}
export default BundleCards;