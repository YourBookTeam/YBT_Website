import { Link } from "react-router-dom";

const QuickLinks = ({ currentPage, baseClass, listClass }) => {
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
    <div className={baseClass}>
        <h3 className="text-2xl lg:text-xl font-bold">Site Map</h3>

        <ul className={listClass}>
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