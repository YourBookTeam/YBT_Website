import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import TeamMember from "./TeamMember";

const TeamCarousel = ({ team = [], options = {} }) => {
  const plugins = [
    AutoScroll({
      playOnInit: true,
      startDelay: 0,
      speed: 1,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      stopOnFocusIn: false,
    }),
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, ...options },
    plugins
  );

  useEffect(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (!autoScroll) return;

    // Start playing on mount if not already
    if (!autoScroll.isPlaying()) autoScroll.play();

    // Resume autoplay when the mouse leaves the carousel
    const node = emblaApi.rootNode();
    const handleMouseLeave = () => {
      if (!autoScroll.isPlaying()) autoScroll.play();
    };

    node.addEventListener("mouseleave", handleMouseLeave);

    // Keep Embla stable on resize
    const resizeObserver = new ResizeObserver(() => emblaApi.reInit());
    resizeObserver.observe(node);

    return () => {
      node.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, [emblaApi]);

  if (team.length === 0) return null;

  return (
    <div className="embla relative overflow-hidden pt-2 w-screen max-w-full">

      {/* LEFT FADE */}
      <div className="hidden 2xl:flex absolute pointer-events-none left-0 top-0 h-full w-10 bg-gradient-to-r from-[#F9F9F9] to-transparent z-10"></div>

      {/* RIGHT FADE */}
      <div className="hidden 2xl:flex absolute pointer-events-none right-0 top-0 h-full w-10 bg-gradient-to-l from-[#F9F9F9] to-transparent z-10"></div>

      <div className="embla__viewport !overflow-visible" ref={emblaRef}>
        <div className="embla__container flex flex-nowrap">
          {team.map((person, i) => (
            <div
              className="embla__slide !overflow-visible flex-none w-[18rem] px-[11%]"
              key={i}
            >
              <TeamMember person={person} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;