import Button from "../Button";

function DiscoveryButton({ onClick }) {
  return (
    <div>
      <Button gold to="/contact" onClick={onClick} className="mx-5 px-2 py-3 md:text-[7px] md:py-1 lg:text-sm 2xl:text-base">
        Book a Free Discovery Call
      </Button>
    </div>
  );
}

export default DiscoveryButton;
