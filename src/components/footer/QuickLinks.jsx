import { Link } from "react-router-dom";

const QuickLinks = () => {
    const scrollToTop = () => {
        window.scrollTo(0,0);
    }

    return (
    <div className="flex-1 flex flex-col md:min-w-64 md:min-h-96 my-4 md:my-0 items-center">
        <h3 className="hidden md:flex text-3xl mb-8 font-bold">Quick Links</h3>

        <ul className="flex flex-col items-center space-y-2 text-xl font-bold md:font-normal">
            <li><Link to="/about" onClick={scrollToTop}> About Us</Link></li>
            <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
            <li><Link to="/#success-stories" onClick={scrollToTop}>Success Stories</Link></li>
            <li><Link to="/faq" onClick={scrollToTop}>FAQ</Link></li>
            <li className="md:hidden"><Link to="/terms" onClick={scrollToTop}>Terms</Link></li>
        </ul>

        <Link to="/terms" onClick={scrollToTop} className="hidden md:flex mt-auto mb-5">Terms of Use and Policy</Link>

    </div>
    );
};

export default QuickLinks;
