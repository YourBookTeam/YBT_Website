const ReferralBanner = () => {
  return (
      <div className="bg-black relative">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="max-w-4xl mx-auto">

            <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold underline mb-8 xl:mb-4">
              Know a visionary with a story the world needs to hear?
            </p>

            <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-4">
              Introduce us and receive:
            </p>

            <div className="lg:grid lg:grid-cols-5 lg:gap-4 items-center flex flex-col lg:flex-row">

              <div className="col-span-2 text-white text-md md:text-xl lg:text-2xl text-right whitespace-nowrap">
                <span className="text-gold font-bold text-md md:text-xl lg:text-2xl">10% of</span> the final project fee
              </div>

              <p className="text-white text-md md:text-xl lg:text-2xl text-center">or</p>

              <div className="col-span-2 text-white text-md md:text-xl lg:text-2xl text-left whitespace-nowrap">
                <span className="text-gold font-bold text-md md:text-xl lg:text-2xl">10% off</span>{" "} your own custom book project
              </div>

            </div>

          </div>
        </div>
      </div>
  );
};

export default ReferralBanner;