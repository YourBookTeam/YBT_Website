import Button from "./Button";
import typewriter from "../assets/typewriter.png";

const BookIdea = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-2 relative overflow-hidden bg-center bg-size-[700px] bg-no-repeat bg-blend-soft-light" style={{ backgroundImage: `url(${typewriter})` }}>
      <h2 className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-hero mb-8">
        Have a book idea or want to learn more?
      </h2>
      <Button to="/contact" className="text-lg" black>
        Book a free discovery call
      </Button>
    </div>
  );
};

export default BookIdea;
