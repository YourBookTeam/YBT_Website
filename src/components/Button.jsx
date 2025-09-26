import { Link } from "react-router-dom";
function Button({ to, children, className, onClick, tall, black }) {
  let baseClassName =
    "flex items-center gap-2 font-semibold transition-colors duration-200 drop-shadow-hero relative text-center";

  baseClassName = tall
    ? baseClassName + " " + "p-4"
    : baseClassName + " " + "px-7 py-2";

  baseClassName = black
    ? baseClassName + " " + "bg-hero-black hover:bg-gray text-white"
    : baseClassName + " " + "bg-gold hover:bg-lighter-gold text-white";

  return (
    <Link to={to} onClick={onClick} className={baseClassName + " " + className}>
      {children}
    </Link>
  );
}
export default Button;
