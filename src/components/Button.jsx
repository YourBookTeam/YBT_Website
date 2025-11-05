import { Link } from "react-router-dom";
function Button({ to, children, className, onClick, gold, black, tall, wide, white }) {
  let baseClassName = "flex items-center justify-center text-center ease-in-out duration-200";

  if (!className.includes("font-")) {
    baseClassName += " font-semibold"; // Default to font-semibold if no font class is provided
  }

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
  if(white){
    baseClassName += " bg-white text-black border-1 border-light-gray rounded-md hover:bg-gold hover:text-white transition-all";
  }

  return (
    <Link to={to} onClick={onClick} className={className + " " + baseClassName}>
      {children}
    </Link>
  );
}
export default Button;
