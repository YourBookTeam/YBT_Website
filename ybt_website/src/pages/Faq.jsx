import { Link } from 'react-router-dom';
import Dropdown1 from '../components/Dropdown1'; 

function Faq() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <Dropdown1
        question="What is book marketing?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at lorem ac nisi bibendum sodales. Praesent congue velit nec orci feugiat, et convallis metus fermentum."
      />

      <div className="mt-8">
        <Link to="/" className="hover:text-black-800">Go To Home</Link>
      </div>
    </div>
  );
}

export default Faq;
