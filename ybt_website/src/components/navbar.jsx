import { Link } from 'react-router-dom';

function NavBar(){

    return (
        <nav>
            <div className="left-nav">
                <Link to="/">
                    Hello World
                </Link>
            </div>

            <div className="mid-nav">
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>

                <div className="success-section">
                    <button className="success-button">
                        Success Stories
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>

                    <div className="success-dropdown">
                        <Link to="/success_stories" className="dropdown-item">
                            <b>Thirst -</b> H.W. Terrence
                        </Link>

                        <div className="dropdown-divider"></div>

                        <Link to="/success_stories" className="dropdown-item">
                            <b>Prompting Happiness -</b> Nimrod Vromen
                        </Link>

                        <div className="dropdown-divider"></div>
                        
                        <Link to="/success_stories" className="dropdown-item">
                            <b>Under the Floorboards -</b> John Kiss
                        </Link>
                    </div>
                </div>
                
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