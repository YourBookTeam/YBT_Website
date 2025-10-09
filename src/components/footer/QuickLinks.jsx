import { Link } from "react-router-dom";

const QuickLinks = ({ currentPage }) => {
    const scrollToTop = () => {
        window.scrollTo(0,0);
    }

    const homeClassName = currentPage == "/" ? "underline" : "";
    const aboutClassName = currentPage == "/about" ? "underline" : "";
    const servicesClassName = currentPage == "/services" ? "underline" : "";
    const faqClassName = currentPage == "/faq" ? "underline" : "";
    const internshipsClassName = currentPage == "/internships" ? "underline" : "";
    const termsClassName = currentPage == "/terms" ? "underline" : "";

    return (
    <div className="flex flex-col gap-6 items-start text-white">
        <h3 className="text-xl font-bold">Site Map</h3>

        <ul className="flex flex-col text-xl gap-2 items-start">
            <li>
                <Link to="/" onClick={scrollToTop} className={homeClassName}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="/about" onClick={scrollToTop} className={aboutClassName}>
                    About Us
                </Link>
            </li>
            <li>
                <Link to="/services" onClick={scrollToTop} className={servicesClassName}>
                    Services
                </Link>
            </li>
            <li>
                <Link to="/#success-stories" onClick={scrollToTop} className="whitespace-nowrap">
                    Success Stories
                </Link>
            </li>
            <li>
                <Link to="/faq" onClick={scrollToTop} className={faqClassName}>
                    FAQ
                </Link>
            </li>
            <li>
                <Link to="/internships" onClick={scrollToTop} className={internshipsClassName}>
                    Internships
                </Link>
            </li>
            <li>
                <Link to="/terms" onClick={scrollToTop} className={termsClassName}>
                    Terms
                </Link>
            </li>
        </ul>

    </div>
    );
};

export default QuickLinks;