import { Link } from "react-router-dom";

const QuickLinks = () => {
    const scrollToTop = () => {
        window.scrollTo(0,0);
    }

    return (
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
                <Link to="/careers" onClick={scrollToTop} className="relative group">
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
    );
};

export default QuickLinks;
