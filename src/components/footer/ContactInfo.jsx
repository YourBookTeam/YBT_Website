import { FiMapPin, FiMail } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <div className="flex-1 flex flex-col items-center md:min-w-64 md:min-h-96">
      
        <h3 className="hidden md:flex text-3xl font-bold mb-8">Contact Info</h3>

        <div className="flex flex-col items-center">
          <div className="text-lg md:my-4 flex leading-relaxed">
              <FiMapPin className="text-xl mt-4" />
              <p className="min-w-56 ml-2">3214 Silverado Dr<br/>Los Angeles, CA 90039</p>
          </div>

          <div className="text-lg mt-4 md:my-4 flex leading-relaxed">
              <FiMail className="text-xl mt-1.5" />
              <a href="mailto:info@yourbookteam.com" className="min-w-56 ml-2 underline relative group">
                <span className="relative pb-0.5">
                  <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-105">info@yourbookteam.com</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </span>
              </a>
          </div>
        </div>

        <p className="hidden md:flex justify-center mt-auto mb-5">Copyright © 2025 YourBookTeam<br/>All Rights Reserved.</p>
    </div>
  );
};

export default ContactInfo;
