import { FiMapPin, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import Logo from "../Logo.jsx";

const MobileFooter = () => {
    const scrollToTop = () => {
        window.scrollTo(0,0);
    }

    return (
        <footer className="lg:hidden px-5 pt-5 pb-2 flex flex-col gap-5 items-center justify-center text-center">
            
            {/* Contact Info */}
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
            
            {/* Quick Links */}
            <div className="flex-1 flex flex-col md:min-w-64 md:min-h-96 my-4 md:my-0 items-center">
                <h3 className="hidden md:flex text-3xl mb-8 font-bold">Quick Links</h3>

                <ul className="flex flex-col items-center space-y-2 text-xl font-bold md:font-normal">
                    <li>
                        <Link to="/about" onClick={scrollToTop} className="relative group">
                            <span className="relative pb-1">
                                <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-105">About Us</span>
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={scrollToTop} className="relative group">
                            <span className="relative pb-1">
                                <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-105">Services</span>
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/#success-stories" onClick={scrollToTop} className="relative group whitespace-nowrap">
                            <span className="relative pb-1">
                                <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-105">Success Stories</span>
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/faq" onClick={scrollToTop} className="relative group">
                            <span className="relative pb-1">
                                <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-105">FAQ</span>
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/internships" onClick={scrollToTop} className="relative group">
                            <span className="relative pb-1">
                                <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-105">Internships</span>
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                            </span>
                        </Link>
                    </li>
                    <li className="md:hidden">
                        <Link to="/terms" onClick={scrollToTop} className="relative group">
                            <span className="relative pb-1">
                                <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-105">Terms</span>
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                            </span>
                        </Link>
                    </li>
                </ul>

                <Link to="/terms" onClick={scrollToTop} className="hidden md:flex mt-auto mb-5 relative group">
                    <span className="relative pb-1">
                        <span className="inline-block transition-transform duration-200 ease-out group-hover:scale-105">Terms of Use and Policy</span>
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </span>
                </Link>

            </div>

            {/* Logo Socials */}
            <div className="flex-1 flex flex-col gap-5 md:min-w-64 md:min-h-96 items-center">
                <Logo className="fill-gold size-20 md:size-60 transition-transform duration-200 ease-out hover:scale-102"/>

                <div className="flex justify-center gap-4 text-2xl mt-auto md:mb-5">
                    <a href="https://www.facebook.com/YourBookTeam/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 ease-out hover:scale-110">
                        <FaFacebookF />
                    </a>
                    <a href="https://x.com/YourBookTeam" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 ease-out hover:scale-110">
                        <FaXTwitter />
                    </a>
                    <a href="https://www.instagram.com/yourbookteam/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 ease-out hover:scale-110">
                        <FaInstagram />
                    </a>
                    <a href="https://www.tiktok.com/@your.book.team" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 ease-out hover:scale-110">
                        <FaTiktok />
                    </a>
                    <a href="https://www.youtube.com/@yourbookteam" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 ease-out hover:scale-110">
                        <FaYoutube />
                    </a>
                </div>
                <p className="md:hidden">Copyright © 2025 YourBookTeam <br/> All Rights Reserved</p>
            </div>

        </footer>
    );
};

export default MobileFooter;
