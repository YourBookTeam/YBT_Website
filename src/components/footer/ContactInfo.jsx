import { FiMapPin, FiMail } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <div className="flex-1 flex flex-col gap-6 md:min-w-64 md:min-h-96 text-white">
      
        <h3 className="hidden md:flex text-xl font-bold">Contact</h3>

        <div className="flex flex-col gap-4">
          <div className="text-xl flex">
              <FiMapPin className="text-xl mt-1" />
              <p className="min-w-56 ml-2 text-left">3214 Silverado Dr<br/>Los Angeles, CA 90039</p>
          </div>

          <div className="text-xl flex leading-relaxed">
              <FiMail className="text-xl mt-1.5" />
              <a href="mailto:info@yourbookteam.com" className="min-w-56 ml-2">
                info@yourbookteam.com
              </a>
          </div>
        </div>
    </div>
  );
};

export default ContactInfo;
