import { Link } from "react-router-dom";
import SvgNavbarLogo from "./svgs/SvgNavbarLogo";

function Logo({ className, handleClick}) {
  const scrollToTop = () => {
      window.scrollTo(0,0);
  }

  return (
    <Link to="/"  onClick={()=>{ scrollToTop(); handleClick() }}>
      <SvgNavbarLogo className={className}/>
    </Link>
  );
}

export default Logo;
