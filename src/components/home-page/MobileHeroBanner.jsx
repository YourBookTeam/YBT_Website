import SvgLogo from "../svgs/SvgLogo";
import Button from "../Button";
import white_brush_mark from "../../assets/white-brush-mark.png";

function MobileHeroBanner() {
  return (
    <div className="lg:hidden bg-gold pt-10 flex flex-col">
        <div className="flex flex-col items-center justify-center gap-5 pb-8">
            <div className="flex flex-col justify-center items-center gap-3">
                <p className="font-bold text-white drop-shadow-hero text-5xl text-center">We are</p>
                <p className="text-5xl text-center font-bold italic drop-shadow-hero">Your Book Team</p>
            </div>

            <div className="bg-size-[100%_100%] w-120 sm:w-150 md:w-200" style={{ backgroundImage:`url(${white_brush_mark})`} }>
                <div className="font-medium p-10 text-lg">
                    We turn aspiring writers into bestselling authors by focusing on
                    each story’s heart—turning a shaky first draft into a story that
                    outlives you—we build legacy.
                </div>
            </div>

            <Button to="/contact" black className="text-lg text-center justify-center w-60">
                Discovery Call
            </Button>
        </div>

        <div className="bg-off-white p-4 flex items-center justify-around">
            <SvgLogo className="fill-gold" />
                <div className="font-bold text-gold text-5xl">Y</div>
                <div className="font-bold text-gold text-5xl">B</div>
                <div className="font-bold text-gold text-5xl">T</div>
        </div>
    </div>
  );
}
export default MobileHeroBanner;
