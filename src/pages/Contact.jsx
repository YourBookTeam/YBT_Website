import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { InlineWidget } from "react-calendly";
import { Link } from "react-router-dom";

function Contact() {
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

  const [showCalendly, setShowCalendly] = useState(false);
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

  const handleCalendlyClose = () => {
    setShowCalendly(false);
  };

  return (
    <div className="bg-gold">
      <div className="py-16 px-32">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2">
            {/* Left Section - Discovery Call */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold">Set up a discovery call</h1>
                <p className="text-lg">
                  Get more details about all the ways we can make your dream
                  book become a reality. Feel free to send us a message or
                  schedule a call here.
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-3 bg-black text-white px-4 py-2.5 font-bold text-2xl shadow-lg cursor-pointer"
                onClick={() => setShowCalendly(true)}
              >
                <FaRegCalendarAlt className="w-5 h-5 text-white" />
                Schedule here
              </button>
            </div>

            {/* Right Section - Contact Form or Success Message */}
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
          </div>
        </div>
      </div>

      {/* Calendly Popup */}
      {showCalendly && (
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
      )}

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
    </div>
  );
}

export default Contact;
