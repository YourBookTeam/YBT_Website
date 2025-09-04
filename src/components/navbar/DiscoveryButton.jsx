import Button from "../Button";

function DiscoverButton({ toggleOpen }) {
  return (
    <div className="md:pl-5">
        <Button to="/contact" tall onClick={toggleOpen}>Book A Free Discovery Call</Button>
    </div>
  );
}

export default DiscoverButton;
