import SvgLogo from "../svgs/SvgLogo";
import Button from "../Button";
import white_brush_mark from "../../assets/white-brush-mark.png";

function HeroBanner() {
  return (
    <div className="flex bg-off-white w-screen">

      <div className="relative bg-gold">
        <div className="
          flex flex-col self-center justify-center items-start p-14
          lg:gap-7 xl:gap-12  
          lg:mr-20 xl:mr-40
        ">
          <div className="
            font-bold text-white drop-shadow-hero
            lg:text-4xl xl:text-6xl 
          ">
            We are
          </div>
          <div className="
            font-bold italic drop-shadow-hero
            lg:text-6xl 2xl:text-8xl
          ">
            Your Book Team
          </div>
          <div className="bg-size-[100%_100%] w-150" style={{ backgroundImage:`url(${white_brush_mark})`} }>
            <div className="
              font-medium p-10
              text-lg xl:text-xl 
            ">
              We turn aspiring writers into bestselling authors by focusing on
              each story’s heart—turning a shaky first draft into a story that
              outlives you—we build legacy.
            </div>
          </div>
          <Button to="/contact" black className="
            lg:text-lg xl:text-2xl"
          >
            Discovery call
          </Button>
        </div>
        <SvgLogo className="
          fill-off-white absolute right-0 top-[50%] h-[70%] w-auto translate-y-[-50%] translate-x-[50%]"></SvgLogo>
      </div>

      <div className="
        relative flex flex-1 overflow-clip
        lg:justify-end xl:justify-center
        lg:pr-10 xl:pr-0
      ">
        <SvgLogo className="
          fill-gold absolute left-0 top-[50%] h-[70%] w-auto translate-y-[-50%] translate-x-[-50%]"></SvgLogo>
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
