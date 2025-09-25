import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import Logo from "../Logo.jsx";

const LogoSocials = () => {
    return (
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
    );
};

export default LogoSocials;
