import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const Socials = () => {
    return (
        <div className="flex gap-4 text-white text-2xl w-fit">
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
    );
};

export default Socials;