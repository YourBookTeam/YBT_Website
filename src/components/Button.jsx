import { Link } from "react-router-dom";
function Button({ to, children, className, onClick, gold, black, tall, wide }) {
  let baseClassName = "flex items-center justify-center text-center ease-in-out duration-200 font-semibold";

  if(tall){
    baseClassName += " p-4";
  }

  if(wide){
    baseClassName += " px-7 py-2";
  }
  
  if(black){
    baseClassName += " bg-hero-black transition-colors hover:bg-gray text-white gap-2 drop-shadow-hero relative"
  }

  if(gold){
    baseClassName += " bg-white text-gold border-2 border-gold rounded-md shadow-md transition-opacity hover:opacity-80 transition-transform  hover:scale-99";
  }

  return (
    <Link to={to} onClick={onClick} className={className + " " + baseClassName}>
      {children}
    </Link>
  );
}
export default Button;
