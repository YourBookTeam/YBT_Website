import { Link } from 'react-router-dom';
import ReadMore from '../components/ReadMore'; 

function Services() {
  const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit ac ullamcorper gravida, erat risus fermentum lacus, eget dapibus erat turpis non sapien. Nullam placerat sapien ut nisi euismod, nec vehicula urna porta. In vel sapien eget magna eleifend commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed facilisis, nisi non laoreet fringilla, purus lacus eleifend metus, nec rhoncus sem nulla in ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit ac ullamcorper gravida, erat risus fermentum lacus, eget dapibus erat turpis non sapien. Nullam placerat sapien ut nisi euismod, nec vehicula urna porta. In vel sapien eget magna eleifend commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed facilisis, nisi non laoreet fringilla, purus lacus eleifend metus, nec rhoncus sem nulla in ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, velit ac ullamcorper gravida, erat risus fermentum lacus, eget dapibus erat turpis non sapien. Nullam placerat sapien ut nisi euismod, nec vehicula urna porta. In vel sapien eget magna eleifend commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed facilisis.`;

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Services</h1>

      <ReadMore text={longText} />

      <div className="mt-6">
        <Link to="/" className="hover:text-black-800">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Services;
