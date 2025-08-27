import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        inquiryType: {
            tier1: false,
            tier2: false,
            tier3: false,
            other: false,
        },
        });
    const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      inquiryType: {
        ...prev.inquiryType,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="p-8">
        {formSubmitted ? (
        <div className="flex items-center justify-center h-64">
            <div
            className="px-6 py-4 w-full"
            style={{
                backgroundColor: "#86efac",
                border: "2px solid #22c55e",
            }}
            >
            <p className="text-lg">
                Thanks for contacting us! We will be in touch with you
                shortly.
            </p>
            </div>
        </div>
        ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
            <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white placeholder-gray-500 border border-gray-300 focus:border-amber-600 focus:outline font-['Inter']"
            />
            </div>

            {/* Email Field */}
            <div>
            <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white placeholder-gray-500 border border-gray-300 focus:border-amber-600 focus:outline font-['Inter']"
            />
            </div>

            {/* Message Field */}
            <div>
            <textarea
                name="message"
                placeholder="Message..."
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className="w-full px-4 py-3 bg-white placeholder-gray-500 resize-none border border-gray-300 focus:border-amber-600 focus:outline font-['Inter']"
            />
            </div>

            {/* Inquiry Type Section */}
            <div className="space-y-3">
            <p className="font-medium">Inquiring about:</p>
            <div className="grid grid-cols-2 gap-4">
                <label className="flex items-start gap-3 cursor-pointer">
                <input
                    type="checkbox"
                    name="tier1"
                    checked={formData.inquiryType.tier1}
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
                    checked={formData.inquiryType.tier2}
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
                    checked={formData.inquiryType.tier3}
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
                    checked={formData.inquiryType.other}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 border-gray-300 rounded focus:ring-amber-500 mt-1"
                />
                <div className="text-gray-700">
                    <div className="font-bold">Other</div>
                </div>
                </label>
            </div>
            </div>

            {/* Submit Button */}
            <button
            type="submit"
            className="bg-black text-white px-4 py-2.5 font-bold text-2xl shadow-lg cursor-pointer"
            >
            Send message
            </button>
        </form>
        )}
    </div>
  );
};

export default ContactForm;