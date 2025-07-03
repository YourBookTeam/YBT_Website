import { Link } from 'react-router-dom';

function NavBar(){

    return (
        <nav>
            <div className="left-nav">
                <div className="text-3xl font-bold underline text-blue-600">
                    Hello World
                </div>
            </div>

            <div className="mid-nav">
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>

                <Link to="/success_stories" className="success-link">
                    Success Stories
                    <i class="fa-solid fa-chevron-down"></i>
                </Link>

                <Link to="/careers">Careers</Link>               
                <Link to="/faq">FAQ</Link>
            </div>
            
            <div className="right-nav">
                <Link to="/contact" className="book-link">Book A Free Consultation</Link>
            </div>
        </nav>
    ); 
}


export default NavBar;