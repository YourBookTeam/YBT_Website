function ServiceCards({services}){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) =>(
                <div className="bg-white shadow-sm rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" key={item.id}>
                    <h3 className="text-xl font-semibold text-gold mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                        {item.package.map((packages, index)=> (
                            <li key={index} className="flex items-center">
                            <span className="text-gold mr-2">✔</span>
                            <span className="text-gray-800">{packages}</span>
                        </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
export default ServiceCards;