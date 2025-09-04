import { useState } from "react";
import SuccessMessage from "./SuccessMessage";
import NameField from "./NameField";
import EmailField from "./EmailField";
import MessageField from "./MessageField";
import InquiryField from "./InquiryField";

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
    <div className="flex flex-col items-center justify-center w-full pb-10 px-5 xl:p-0">
        {formSubmitted ? (
            <SuccessMessage/>
        ) : (
        <form name="contact-form" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6 w-full text-lg flex flex-col items-center">
            <input type="hidden" name="contact-form" value="contact" />
            <NameField name={formData.name} handleInputChange={handleInputChange}/>

            <EmailField email={formData.email} handleInputChange={handleInputChange}/>

            <MessageField message={formData.message} handleInputChange={handleInputChange}/>

            <InquiryField inquiryTypes={formData.inquiryType} handleCheckboxChange={handleCheckboxChange}/>

            <button type="submit" className="w-full bg-black text-white px-4 py-2.5 font-bold text-2xl shadow-lg cursor-pointer hover:bg-gray">
                Send message
            </button>
        </form>
        )}
    </div>
  );
};

export default ContactForm;