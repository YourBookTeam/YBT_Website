function Interns({ displayedInterns }) {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-2xl">Our Interns!</div>

        <div className="flex flex-col gap-10 items-center justify-center py-10 px-10 lg:px-20 xl:px-50 2xl:px-100">
            {displayedInterns.length == 0 ? (
                <div className="text-gray text-xl">No interns to show at the moment</div>
            ) :
            displayedInterns.map((intern) => (
                <div key={intern.id} className="flex gap-5 flex-col lg:flex-row">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-35 h-35 shrink-0 overflow-hidden rounded-full">
                            <img src={intern.headshot}/>
                        </div>
                        <div className="text-xl font-bold">{intern.name}</div>
                    </div>
                    <div className="font-secondary text-center lg:text-start">"{intern.quote}"</div>
                </div>
            ))}
        </div>
    </div>
  );
}
export default Interns;