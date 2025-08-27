import DiscoveryCall from "../components/contact/DiscoveryCall";
import ContactForm from "../components/contact/ContactForm";
import CalendlyPopup from "../components/contact/CalendlyPopup";
import ReferralBanner from "../components/contact/ReferralBanner";

function Contact() {


  return (
    <div className="bg-gold">
      <div className="py-16 px-32">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2">
            <DiscoveryCall/>
            <ContactForm/>
          </div>
        </div>
      </div>

      <CalendlyPopup/>
      <ReferralBanner/>
      
    </div>
  );
}

export default Contact;
