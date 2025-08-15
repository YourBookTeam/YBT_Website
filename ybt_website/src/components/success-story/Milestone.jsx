import { FaSquareCheck } from "react-icons/fa6";

function Milestone({ children }) {
  return (
    <div className="flex justify-start gap-4">
      <FaSquareCheck className="fill-gold h-7" />
      <div>{children}</div>
    </div>
  );
}
export default Milestone;
