import { Link } from "react-router-dom";
function Button({ to, children, className, onClick, gold, black, nav, tall, wide }) {
  let baseClassName = "flex items-center justify-center text-center transition-colors duration-200 font-semibold";

  if(tall){
    baseClassName += " p-4";
  }

  if(wide){
    baseClassName += " px-7 py-2";
  }
  
  if(gold){
    baseClassName += " bg-gold hover:bg-lighter-gold text-white";
  }
  
  if(black){
    baseClassName += " bg-black hover:bg-gray text-white gap-2 drop-shadow-hero relative"
  }

  if(nav){
    baseClassName += " text-gold border-2 border-gold rounded-md shadow-md ml-5";
  }

  return (
    <Link to={to} onClick={onClick} className={baseClassName + " " + className}>
      {children}
    </Link>
  );
}
export default Button;
