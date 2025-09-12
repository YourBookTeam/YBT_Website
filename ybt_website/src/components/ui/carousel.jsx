import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "../../lib/utils";

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(
    opts?.startIndex || 0
  );

  const onSelect = React.useCallback((api) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const scrollTo = React.useCallback(
    (index) => {
      if (index === api?.selectedScrollSnap()) return;
      const autoplay = api?.plugins()?.autoplay;
      autoplay?.reset();
      api?.scrollTo(index);
    },
    [api]
  );

  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        scrollTo,
        selectedIndex,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
}

// Changed to wrap element
function CarouselPreviousWrapper({ className, children, ...props }) {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <div
      data-slot="carousel-previous"
      className={cn(canScrollPrev ? "cursor-pointer" : "opacity-40", className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      {children}
    </div>
  );
}

// Changed to wrap element
function CarouselNextWrapper({ className, children, ...props }) {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <div
      data-slot="carousel-next"
      className={cn(canScrollNext ? "cursor-pointer" : "opacity-40", className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      {children}
    </div>
  );
}

function CarouselDots({ className, ...props }) {
  const { selectedIndex, scrollTo, api } = useCarousel();

  return (
    <div
      role="tablist"
      className={cn("flex items-center justify-center gap-2", className)}
      {...props}
    >
      {api?.scrollSnapList().map((_, index) => (
        <div
          key={index}
          role="tab"
          data-slot="carousel-dot"
          aria-selected={index === selectedIndex}
          aria-controls="carousel-item"
          aria-label={`Slide ${index + 1}`}
          className={cn(
            "size-5 rounded-full",
            index === selectedIndex ? "bg-gray" : "bg-light-gray cursor-pointer"
          )}
          onClick={() => scrollTo(index)}
        />
      ))}
    </div>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPreviousWrapper,
  CarouselNextWrapper,
  CarouselDots,
};
