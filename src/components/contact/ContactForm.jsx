import { useState } from "react";
import NameField from "./NameField";
import EmailField from "./EmailField";
import MessageField from "./MessageField";
import InquiryField from "./InquiryField";
import SuccessModal from "./SuccessModal";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitError, setSubmitError] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // For Local development testing - show modal immediately for testing
    if (window.location.hostname === "localhost") {
      console.log("Local development: Showing success modal");
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccessModal(true);
        // Reset form
        setFormData({
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
      }, 500); 
      return;
    }

    try {
      const formPayload = new FormData();
      formPayload.append("form-name", "contact-form");
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("message", formData.message);
      
      Object.entries(formData.inquiryType).forEach(([key, value]) => {
        if (value) {
          formPayload.append(key, "on");
        }
      });

      const response = await fetch("/", {
        method: "POST",
        body: formPayload,
      });

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({
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
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitError("Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full pb-10 px-5 xl:p-0">
      <form
        name="contact-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-6 w-full text-lg flex flex-col items-center"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        
        {/* Hidden honeypot field */}
        <div className="hidden">
          <label>
            Don't fill this out if you're human: 
            <input name="bot-field" />
          </label>
        </div>

        <NameField name={formData.name} handleInputChange={handleInputChange} />
        <EmailField email={formData.email} handleInputChange={handleInputChange} />
        <MessageField message={formData.message} handleInputChange={handleInputChange} />
        <InquiryField
          inquiryTypes={formData.inquiryType}
          handleCheckboxChange={handleCheckboxChange}
        />

        {submitError && (
          <div className="text-red-500 text-sm w-full text-center">
            {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-hero-black text-white px-4 py-2.5 font-bold text-2xl shadow-lg ${
            isSubmitting ? "cursor-not-allowed opacity-80" : "cursor-pointer hover:bg-gray"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
      </form>


      {showSuccessModal && <SuccessModal onClose={closeModal} />}
    </div>
  );
};

export default ContactForm;