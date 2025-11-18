import Button from "../Button";

function DiscoveryButton({ onClick }) {
  return (
    <div>
      <Button gold tall to="/contact" onClick={onClick} className="mx-5 text-sm 2xl:text-base">
        Book a Free Discovery Call
      </Button>
    </div>
  );
}

export default DiscoveryButton;
