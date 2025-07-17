import { Link } from "react-router-dom";
function Button({ to, children, className, tall }) {
  let baseClassName =
    "flex items-center gap-2 bg-saffron hover:bg-dark-saffron text-black font-semibold rounded-lg transition-colors duration-200 shadow-md relative";

  baseClassName = tall
    ? baseClassName + " " + "p-4"
    : baseClassName + " " + "px-7 py-2";

  return (
    <Link to={to} className={baseClassName + " " + className}>
      {children}
    </Link>
  );
}
export default Button;
