import { Link } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { FiMapPin, FiMail } from "react-icons/fi";
import Logo from "../Logo";

const MobileFooter = () => {
    const scrollToTop = () => {
        window.scrollTo(0,0);
    }
    const smoothScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <footer className="md:hidden px-5 pt-5 pb-2 flex flex-col gap-5 items-center justify-center text-center">
            <div className="flex items-center justify-center gap-2">
                <FiMapPin/>
                <p>3214 Silverado Dr.<br/>Los Angeles, CA 90039</p>
            </div>

            <div className="flex items-center justify-center gap-3">
                <FiMail/>
                <a href="mailto:info@yourbookteam.com" className="underline">info@yourbookteam.com</a>
            </div>

            <div className="flex flex-col gap-2 font-bold text-lg">
                <Link to="/about" onClick={smoothScrollToTop}>About Us</Link>
                <Link to="/services" onClick={scrollToTop}>Services</Link>
                <Link to="/success-stories" onClick={scrollToTop}>Success Stories</Link>
                <Link to="/faq" onClick={scrollToTop}>FAQ</Link>
                <Link to="/terms" onClick={scrollToTop}>Terms</Link>
            </div>
                
            <Logo className="fill-gold size-20"/>
            <div className="flex flex-col items-center">
                <div className="flex justify-center gap-5 text-2xl">
                    <a href="https://www.facebook.com/YourBookTeam/" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://x.com/YourBookTeam" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter />
                    </a>
                    <a href="https://www.instagram.com/yourbookteam/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.tiktok.com/@your.book.team" target="_blank" rel="noopener noreferrer">
                        <FaTiktok />
                    </a>
                    <a href="https://www.youtube.com/@yourbookteam" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                </div>
            </div>

            <p>Copyright © 2023 YourBookTeam <br/> All Rights Reserved</p>
        </footer>
    );
};

export default MobileFooter;
