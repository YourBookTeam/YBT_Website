import React from "react";

function ClientCards({client}){
    return(
        <div className="w-280 flex justify-evenly">
            {client.map((item) =>(
                <div className="bg-[#f8f8f8] drop-shadow-md rounded-lg p-6 w-85 h-103" key={item.id} style={{ borderTop: `4px solid ${item.borderColor}` }}>
                    <div className="my-4">
                        <h3 className="text-2xl text-center font-semibold  mb-5">{item.title}</h3>
                        <h4 className="text-center font-semibold text-gold mb-6">{item.priceNotes}</h4>
                    </div>
                    <ul className="space-y-2">
                        {item.clientStage.map((stage, index)=> (
                        <li key={index} className="flex items-baseline space-x-2">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full align-top"></span>
                            <p className="leading-relaxed">{stage}</p>
                        </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
export default ClientCards;