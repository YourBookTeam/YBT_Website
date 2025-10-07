import { useEffect, useRef, useState } from "react";
import TeamMemberPreview from "./TeamMemberPreview";

function TeamCarousel({ team = [], speed = 0.5 }) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const frameRef = useRef(null);
  const pausedRef = useRef(false);
  const positionRef = useRef(0);

  const [items, setItems] = useState([...team]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    if (!wrapper || !container) return;

    // Function to duplicate items until container width is filled
    const fillItems = () => {
      const containerWidth = wrapper.offsetWidth;
      let currentWidth = Array.from(container.children).reduce(
        (sum, el) => sum + el.offsetWidth,
        0
      );

      let newItems = [...team];
      const gap = parseFloat(getComputedStyle(container).gap) || 0;

      while (currentWidth < containerWidth * 2) {
        newItems = [...newItems, ...team];
        currentWidth += team.reduce((sum, _, i) => sum + container.children[i].offsetWidth + gap, 0);
      }

      setItems(newItems);
    };

    fillItems();
    window.addEventListener("resize", fillItems);

    // Pause on hover
    const handleEnter = () => (pausedRef.current = true);
    const handleLeave = () => (pausedRef.current = false);
    wrapper.addEventListener("mouseenter", handleEnter);
    wrapper.addEventListener("mouseleave", handleLeave);

    // Animation loop
    const animate = () => {
      if (!pausedRef.current) {
        positionRef.current += speed;

        const firstChild = container.children[0];
        if (firstChild) {
          const gap = parseFloat(getComputedStyle(container).gap) || 0;
          const firstWidth = firstChild.offsetWidth + gap;

          if (positionRef.current >= firstWidth) {
            container.appendChild(firstChild);
            positionRef.current -= firstWidth;
          }
        }

        container.style.transform = `translateX(-${positionRef.current}px)`;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", fillItems);
      wrapper.removeEventListener("mouseenter", handleEnter);
      wrapper.removeEventListener("mouseleave", handleLeave);
    };
  }, [team, speed]);

  return (
    <div ref={wrapperRef} className="overflow-hidden w-full py-10">
      <div
        ref={containerRef}
        className="flex gap-10 will-change-transform"
      >
        {items.map((person, i) => (
          <div key={`${person.name}-${i}`} className="flex-shrink-0">
            <TeamMemberPreview person={person} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCarousel;



