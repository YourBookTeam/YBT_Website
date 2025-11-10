import React from "react";
function paymentCards({cards}){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-12">
            {cards.map((item)=>(
                 <div className="bg-white drop-shadow-md rounded-lg p-6 w-full max-w-sm mx-auto flex flex-col" key={item.id}>
                    <h3 className="text-xl font-semibold text-gold my-3">{item.title}</h3>
                    <ul className="space-y-2 flex-1">
                        {item.details.map((detail, index)=> (
                        <li key={index} className="flex items-start space-x-3">
                            <span className="mt-1 w-2 h-2 bg-gold rounded-full flex-shrink-0"></span>
                            <p className="leading-relaxed p-1 rounded">{detail}</p>
                        </li>

                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
export default paymentCards;