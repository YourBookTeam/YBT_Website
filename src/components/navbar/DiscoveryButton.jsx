import Button from "../Button";

function DiscoverButton({ toggleOpen }) {
  return (
    <div>
        <Button nav tall to="/contact" onClick={toggleOpen}>Book A Free Discovery Call</Button>
    </div>
  );
}

export default DiscoverButton;
