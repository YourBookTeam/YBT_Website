import Button from "../Button";

function DiscoverButton() {
  return (
    <div className="hidden md:flex pl-12">
        <Button to="/contact" tall>Book a free discovery call</Button>
    </div>
  );
}

export default DiscoverButton;
