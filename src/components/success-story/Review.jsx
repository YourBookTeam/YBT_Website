import SvgMessage from "../svgs/SvgMessage";

function Review({ children, name }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative aspect-3/2 w-100">
        <SvgMessage className="fill-gold w-full h-full absolute"></SvgMessage>
        <p className="relative p-10 text-xl text-center">{children}</p>
      </div>
      <p className="font-bold">{name}</p>
    </div>
  );
}
export default Review;
