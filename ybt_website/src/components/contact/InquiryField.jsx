const InquiryField = ({ inquiryTypes, handleCheckboxChange }) => {
  return (
    <div className="space-y-3">
        <p className="font-medium md:hidden">Inquiring About:</p>
        <div className="grid grid-cols-2 gap-4 sm:flex md:gap-10">
            <p className="hidden md:flex">Inquiring About:</p>
            <label className="flex items-start gap-3 cursor-pointer">
                <input
                    type="checkbox"
                    name="tier1"
                    checked={inquiryTypes.tier1}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 border-gray-300 rounded focus:ring-amber-500 mt-1"
                />
                <div className="text-gray-700">
                    <div className="font-medium">Tier 1:</div>
                    <div className="font-bold">The Foundation</div>
                </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
                <input
                    type="checkbox"
                    name="tier2"
                    checked={inquiryTypes.tier2}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 border-gray-300 rounded focus:ring-amber-500 mt-1"
                />
                <div className="text-gray-700">
                    <div className="font-medium">Tier 2:</div>
                    <div className="font-bold">The Signature</div>
                </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
                <input
                    type="checkbox"
                    name="tier3"
                    checked={inquiryTypes.tier3}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 border-gray-300 rounded focus:ring-amber-500 mt-1"
                />
                <div className="text-gray-700">
                    <div className="font-medium">Tier 3:</div>
                    <div className="font-bold">The Legacy</div>
                </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
                <input
                    type="checkbox"
                    name="other"
                    checked={inquiryTypes.other}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 border-gray-300 rounded focus:ring-amber-500 mt-1"
                />
                <div className="text-gray-700">
                    <div>Other</div>
                </div>
            </label>
        </div>
    </div>
  );
};

export default InquiryField;