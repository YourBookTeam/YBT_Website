import { Link } from 'react-router-dom';
import TitleBanner from "../components/TitleBanner";
import NavBar from '../components/Navbar';


function Home() {
  return (
    <div>
      <NavBar></NavBar>

      <div>Home Page</div>

      <Link to="/about">Go To About</Link>
      <Link to="/careers">Go To Careers</Link>
      <Link to="/position">Go To Position</Link>
      <Link to="/success_stories">Go To Success Stories</Link>
      <Link to="/services">Go To Services</Link>
      <Link to="/faq">Go To FAQ</Link>
      <Link to="/contact">Go To Contact</Link>
      <Link to="/terms">Go To Terms</Link>

      <TitleBanner>Success Stories</TitleBanner>
    </div>
  );
}

export default Home;
