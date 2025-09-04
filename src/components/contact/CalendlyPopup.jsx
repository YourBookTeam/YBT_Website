import { InlineWidget } from "react-calendly";

const CalendlyPopup = ({ handleCalendlyClose }) => {
    return (
        <div
            className="fixed inset-0 flex justify-center z-1"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            >
            <div className="bg-white mt-8 w-full max-w-4xl h-[600px] relative">
            <button
                onClick={handleCalendlyClose}
                className="absolute top-8 right-8 text-2xl font-bold cursor-pointer"
                >
                ×
            </button>
            <InlineWidget
                url="https://calendly.com/ybt-freeconsultation/potential-clients"
                styles={{
                height: "100%",
                width: "100%",
                }}
            />
            </div>
        </div>
    );
};

export default CalendlyPopup;