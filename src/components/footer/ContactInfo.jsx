import { FiMapPin, FiMail } from "react-icons/fi";

const ContactInfo = ({ baseClass, addressClass }) => {
  return (
    <div className={baseClass}>
      
        <h3 className="text-base lg:text-lg 2xl:text-2xl font-bold">Contact</h3>

        <div className="flex flex-col gap-4">
          <div className="text-sm lg:text-base 2xl:text-xl flex">
              <FiMapPin className="text-lg 2xl:text-xl mt-1" />
              <p className={addressClass}>3214 Silverado Dr<br/>Los Angeles, CA 90039</p>
          </div>

          <div className="text-sm lg:text-base 2xl:text-xl flex items-center leading-relaxed">
              <FiMail className="text-lg 2xl:text-xl " />
              <a href="mailto:info@yourbookteam.com" className="min-w-56 ml-2">
                info@yourbookteam.com
              </a>
          </div>
        </div>
    </div>
  );
};

export default ContactInfo;
