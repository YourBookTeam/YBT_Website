import { useState } from "react";
import DiscoveryCall from "../components/contact/DiscoveryCall";
import ContactForm from "../components/contact/ContactForm";
import CalendlyPopup from "../components/contact/CalendlyPopup";
import ReferralBanner from "../components/contact/ReferralBanner";

function Contact() {
  const [showCalendly, setShowCalendly] = useState(false);
  
  const handleCalendlyOpen = () => {
      setShowCalendly(true);
  };
  
  const handleCalendlyClose = () => {
      setShowCalendly(false);
  };

  return (
    <div className="bg-gold">

      <div className="flex flex-col xl:flex-row xl:gap-20 xl:p-20">
        <DiscoveryCall handleCalendlyOpen={handleCalendlyOpen}/>
        <ContactForm/>
      </div>

      {showCalendly && (
        <CalendlyPopup handleCalendlyClose={handleCalendlyClose}/>
      )}
      
      <ReferralBanner/>
      
    </div>
  );
}

export default Contact;
