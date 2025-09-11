function Interns({ displayedInterns }) {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-xl">Our Interns!</div>

        <div className="flex flex-col gap-10 items-center justify-center md:px-10 lg:px-30 xl:px-100 py-10">
            {displayedInterns.length == 0 ? (
                <div className="text-gray text-xl">No interns to show at the moment</div>
            ) :
            displayedInterns.map((intern) => (
                <div className="flex gap-10">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-35 h-35 shrink-0 overflow-hidden rounded-full">
                            <img src={intern.headshot}/>
                        </div>
                        <div className="text-lg font-bold">{intern.name}</div>
                    </div>
                    <div className="font-secondary">{intern.quote}</div>
                </div>
            ))}
        </div>
    </div>
  );
}
export default Interns;