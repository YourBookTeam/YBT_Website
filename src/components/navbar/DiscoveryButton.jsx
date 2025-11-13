import Button from "../Button";

function DiscoveryButton({ onClick }) {
  return (
    <div>
      <Button gold tall to="/contact" onClick={onClick} className="mx-5 text-sm">
        Book a Free Discovery Call
      </Button>
    </div>
  );
}

export default DiscoveryButton;
