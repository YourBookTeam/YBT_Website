import { Link } from "react-router-dom";
import SvgLogo from "./svgs/SvgLogo";

function Logo({ className }) {
  const scrollToTop = () => {
      window.scrollTo(0,0);
  }

  return (
    <Link to="/"  onClick={scrollToTop}>
      <SvgLogo className={className}/>
    </Link>
  );
}

export default Logo;
