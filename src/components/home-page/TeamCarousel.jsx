import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import TeamMember from "./TeamMember";

const TeamCarousel = ({ team = [], options = {} }) => {
  const plugins = [
    AutoScroll({
      playOnInit: true,
      startDelay: 1000,
      speed: 2,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
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
    if (autoScroll && !autoScroll.isPlaying()) autoScroll.play();

    const resizeObserver = new ResizeObserver(() => emblaApi.reInit());
    resizeObserver.observe(emblaApi.rootNode());

    return () => resizeObserver.disconnect();
  }, [emblaApi]);

  if (team.length === 0) return null;

  return (
    <div className="embla overflow-hidden w-screen max-w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex flex-nowrap">
          {team.map((person, idx) => (
            <div
              className="embla__slide flex-none w-[18rem] px-[11%]"
              key={idx}
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