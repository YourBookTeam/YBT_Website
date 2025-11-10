import React from "react";

function ClientCards({client}){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 px-15 justify-items-center">
            {client.map((item) =>(
                <div className="bg-[#f8f8f8] drop-shadow-md rounded-lg p-6 w-85 h-103" key={item.id} style={{ borderTop: `4px solid ${item.borderColor}` }}>
                    <div className="my-4">
                        <h3 className="text-2xl text-center font-semibold  mb-5">{item.title}</h3>
                        <h4 className="text-center font-semibold text-gold mb-6">{item.priceNotes}</h4>
                    </div>
                    <ul className="space-y-2">
                        {item.clientStage.map((stage, index)=> (
                        <li key={index} className="flex items-start space-x-3">
                            <span className="mt-4 w-1 h-1 bg-gold rounded-full flex-shrink-0"></span>
                            <p className="leading-relaxed p-1 rounded">{stage}</p>
                        </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
export default ClientCards;