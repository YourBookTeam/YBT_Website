import { Link } from "react-router-dom";
import SvgLogo_Full_Gold from "./svgs/SvgLogo_Full_Gold"

function DesktopLogo({ className, handleClick}) {
  const scrollToTop = () => {
      window.scrollTo(0,0);
  }

  return (
    <Link to="/"  onClick={()=>{ scrollToTop(); handleClick() }}>
       <SvgLogo_Full_Gold className={className}/> 
    </Link>
  );
}

export default DesktopLogo;
