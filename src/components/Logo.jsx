import { Link } from "react-router-dom";
import SvgLogo from "./svgs/SvgLogo";

function Logo({ className, handleClick }) {

  return (
    <Link to="/"  onClick={handleClick}>
      <SvgLogo className={className}/>
    </Link>
  );
}

export default Logo;
