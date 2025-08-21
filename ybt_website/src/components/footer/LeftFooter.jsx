import { Link } from "react-router-dom";

const LeftFooter = () => {
  return (
    <div className="flex-1 flex flex-col min-w-64 min-h-96 items-center">
        <h3 className="text-3xl mb-8 font-bold">Quick Links</h3>
        <ul className="flex flex-col items-center space-y-2 text-xl">
        <li>
            <Link to="/about"> About Us</Link>
        </li>
        <li>
            <Link to="/services">Services</Link>
        </li>
        <li>
            <Link to="/services">Success Stories</Link>
        </li>
        <li>
            <Link to="/services">FAQ</Link>
        </li>
        </ul>
        <div className="mt-auto mb-5">
            <Link to="/services">Terms of Use and Policy</Link>
        </div>
    </div>
  );
};

export default LeftFooter;
