import Button from "../Button";

function DiscoverButton({ toggleOpen }) {
  return (
    <div>
        <Button gold tall to="/contact" onClick={toggleOpen} className="ml-5">Book A Free Discovery Call</Button>
    </div>
  );
}

export default DiscoverButton;
