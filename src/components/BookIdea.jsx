import DiscoveryButton from "./navbar/DiscoveryButton";
import typewriter from "../assets/typewriter.png";
import FloatingDots from "./FloatingDots";

const BookIdea = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="flex flex-col items-center justify-center py-12 px-4 mx-8 rounded-xl relative overflow-hidden bg-gold bg-center bg-size-[700px] bg-no-repeat bg-blend-soft-light drop-shadow-hero min-h-96"
      style={{ backgroundImage: `url(${typewriter})` }}
    >
      <FloatingDots />
      <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold text-center drop-shadow-hero mb-8">
        Have a book idea or want to learn more?
      </h2>
      <DiscoveryButton onClick={scrollToTop} />
    </div>
  );
};

export default BookIdea;
