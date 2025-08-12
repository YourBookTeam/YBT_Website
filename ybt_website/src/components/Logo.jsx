import { Link } from "react-router-dom";
import SvgLogo from "./svgs/SvgLogo";

function Logo({ className }) {
  return (
    <Link to="/">
      <SvgLogo className={className} />
    </Link>
  );
}

export default Logo;
