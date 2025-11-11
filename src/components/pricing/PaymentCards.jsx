function paymentCards({cards}){
    return(
        <div className="w-285 flex justify-evenly">
            {cards.map((item)=>(
                 <div className="bg-white drop-shadow-md rounded-lg p-6 w-85 h-120" key={item.id}>
                    <h3 className="text-xl font-semibold text-gold my-3">{item.title}</h3>
                    <ul className="space-y-1">
                        {item.details.map((detail, index)=> (
                        <li key={index} className="flex items-start space-x-3">
                            <span className="mt-4 w-1 h-1 bg-gold rounded-full flex-shrink-0"></span>
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