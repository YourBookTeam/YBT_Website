import SvgLogo from "../svgs/SvgLogo";
import Button from "../Button";

function HeroBanner() {
  return (
    <div className="flex bg-off-white w-screen">
      <div className="relative flex flex-2 bg-gold text-black justify-center overflow-clip">
        <div className="flex flex-col self-center justify-center items-start gap-12 p-14 mr-40">
          <div className="text-6xl font-bold text-white drop-shadow-hero">
            We are
          </div>
          <div className="text-8xl font-bold italic drop-shadow-hero">
            Your Book Team
          </div>
          <div className="bg-[url(src/assets/white-brush-mark.png)] bg-size-[100%_100%] w-150">
            <div className="text-xl font-medium p-10 drop-shadow-hero">
              We turn aspiring writers into bestselling authors by focusing on
              each story’s heart—turning a shaky first draft into a story that
              outlives you—we build legacy.
            </div>
          </div>
          <Button to="/contact" className="text-2xl" black>
            Discovery call
          </Button>
        </div>
        <SvgLogo className="fill-off-white absolute right-0 top-[50%] h-[70%] w-auto translate-x-[50%] translate-y-[-50%]"></SvgLogo>
      </div>
      <div className="relative flex flex-1 justify-center overflow-clip">
        <SvgLogo className="fill-gold absolute left-0 top-[50%] h-[70%] w-auto translate-x-[-50%] translate-y-[-50%]"></SvgLogo>
        <div className="flex flex-col h-full justify-around text-6xl font-black text-gold">
          <div>Y</div>
          <div>B</div>
          <div>T</div>
        </div>
      </div>
    </div>
  );
}
export default HeroBanner;
