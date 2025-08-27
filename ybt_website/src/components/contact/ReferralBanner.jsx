const ReferralBanner = () => {
  return (
    <>
    {/* Referral Banner */}
      <div className="bg-black relative">
        {/* Banner content */}
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-xl md:text-2xl font-bold underline mb-4">
              Know a visionary with a story the world needs to hear?
            </p>
            <p className="text-white text-lg md:text-xl font-semibold mb-4">
              Introduce us and receive:
            </p>
            <div className="grid grid-cols-5 gap-4 items-center">
              <div className="col-span-2 text-white text-xl md:text-2xl text-right whitespace-nowrap">
                <span className="text-gold font-bold text-3xl">10% of</span> the
                final project fee
              </div>
              <div className="text-white text-xl md:text-2xl text-center">
                or
              </div>
              <div className="col-span-2 text-white text-xl md:text-2xl text-left whitespace-nowrap">
                <span className="text-gold font-bold text-3xl">10% off</span>{" "}
                your own custom book project
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default ReferralBanner;