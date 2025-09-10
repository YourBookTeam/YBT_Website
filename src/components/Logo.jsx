import { Link } from "react-router-dom";
import SvgLogo from "./svgs/SvgLogo";

function Logo({ className, handleClick}) {
  const scrollToTop = () => {
      window.scrollTo(0,0);
  }

  return (
    <Link to="/"  onClick={()=>{ scrollToTop(); handleClick() }}>
      <SvgLogo className={className}/>
    </Link>
  );
}

export default Logo;
