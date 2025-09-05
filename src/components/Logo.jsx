import { Link } from "react-router-dom";
import SvgLogo from "./svgs/SvgLogo";

function Logo({ className, toggleOpen }) {
  return (
    <Link to="/"  onClick={toggleOpen}>
      <SvgLogo className={className}/>
    </Link>
  );
}

export default Logo;
