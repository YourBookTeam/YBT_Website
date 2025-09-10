import gold_brush_mark from "../assets/gold-brush-mark.png";

function TitleBanner({ id, children }) {
  return (
    <div
      id={id}
      className="flex justify-self-center justify-center bg-size-[100%_100%] w-90 sm:w-110 md:w-150 xl:w-200 m-10 mx-auto"
      style={{ backgroundImage: `url(${gold_brush_mark})` }}
    >
      <div className="text-white text-4xl md:text-5xl xl:text-6xl text-center font-bold p-10 drop-shadow-hero">
        {children}
      </div>
    </div>
  );
}
export default TitleBanner;
