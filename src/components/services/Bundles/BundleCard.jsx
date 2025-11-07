import Button from "../../Button.jsx";

function BundleCard({ card }) {
  let gradient = "";
  if (card.title === "Executive")
    gradient = "bg-gradient-to-r from-gold to-[#8A6D17]";
  else if (card.title === "Professional")
    gradient = "bg-gradient-to-r from-[#CEB260] to-[#BBA156]";
  else if (card.title === "Emerging")
    gradient = "bg-gradient-to-r from-[#D4C18B] to-[#CEB260]";

  return (
    <div className="
        bg-white shadow-sm flex flex-col text-black rounded-lg
        ease-in-out duration-200 transition-transform hover:-translate-y-2
        w-full h-auto
        lg:h-210 xl:h-200
        ">
        <div
            className={`title text-white w-full h-[20%] rounded-t-lg p-7 flex flex-col gap-2 justify-center item-center text-center ${gradient}`}
        >
            <p className="font-bold text-2xl">{card.title}</p>
            <p>{card.subtitle}</p>
        </div>

        <div className="body px-6 py-8 flex flex-col gap-4 h-full">
            <div className="font-bold text-2xl flex flex-col gap-2">
              <p>Upfront Payment:</p>
              <p>{card.payment}</p>
            </div>

            <div className="bg-[#f9f7f0] text-[#2ecc71] w-[95%] p-3 rounded-lg border-l-4 border-[#2ecc71] font-semibold text-sm">
              <p>Bundle Discount: Save {card.discount}</p>
            </div>

            <div className="bg-[#f9f9f9] w-[95%] p-3 rounded-lg border-l-4 border-gold text-sm">
              <p>Revenue Share: {card.revenueShare} of net sales (for 5 years)</p>
            </div>

            <p className="font-semibold">What's Included:</p>

            {card.included.map((line, index) => (
            <div
                key={index}
                className="border-b border-gray/10 last:border-none pb-2 text-sm"
            >
                <p>
                  <span className="text-[#2ecc71]">✔</span> {line}
                </p>
            </div>
            ))}

            <Button
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="
                  bg-gold rounded-lg text-white text-[18px] h-15
                  ease-in-out duration-200 transition-colors hover:bg-[#8A6D17]
                  transition-transform hover:-translate-y-[2%]
              "
              >
              {card.button}
            </Button>
        </div>
    </div>
  );
}
export default BundleCard;
