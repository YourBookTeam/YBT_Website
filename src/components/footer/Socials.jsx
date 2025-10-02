import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const Socials = () => {
    return (
        <div className="flex gap-4 text-white text-2xl">
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
    );
};

export default Socials;