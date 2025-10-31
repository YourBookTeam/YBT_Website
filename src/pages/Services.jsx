import { Link } from 'react-router-dom';
import { FaCircleCheck, FaPencil, FaBookOpen, FaImages, FaBullhorn, FaBookAtlas } from "react-icons/fa6";
import Services from "../../src/data/service-data/premiumServices";
import ServiceCards from '../components/services/ServiceCards';
import Button from "../components/Button";

export default function Service() {
  
  return (
    <div>
      <section className='hero bg-[#d0b25f] text-white p-'>
         <div className="heroContainer text-center flex flex-col items-center py-20">
            <h1 className='text-4xl'><strong>Professional Publishing Services for Every Author</strong></h1>
            <p className='w-170 mt-9 mb-7 text-lg'>Flexible pricing based on your financial capacity and payment preferences, ensuring high-quality publishing services are accessible while maintaining business sustainability.</p>
            <Button gold wide to="/contact" className="mx-5 py-4">Explore Our Services</Button>
        </div>
      </section>
      <section className='quickNav bg-[#f8f8f8] py-7'>
        <div className='flex flex-wrap justify-center'>
          <Button white  to="#philosophy" className="w-45 py-3 px-2 mx-2 my-3">Our Philosophy</Button>
          <Button white  to="#executive" className="w-45 py-3 px-2 mx-2 my-3">Executive Services</Button>
          <Button white  to="#tiers" className="w-45 py-3 px-2 mx-2 my-3">Client Tiers</Button>
          <Button white  to="#services" className="w-45 py-3 px-2 mx-2 my-3">Service Pricing</Button>
          <Button white  to="#bundles" className="w-45 py-3 px-2 mx-2 my-3">Bundle Packages</Button>
          <Button white  to="#payment" className="w-45 py-3 px-2 mx-2 my-3">Payment Options</Button>
        </div>
        
      </section>
      <section id="philosophy" className='philosophy text-center flex flex-col items-center py-20'>
        <div className='mb-10'>
          <h2 className='text-hero-black text-3xl mb-5'><strong>Our Pricing Philosophy</strong></h2>
          <p className='text-[#777777] w-155'>We believe every author deserves access to professional publishing services, regardless of their financial situation.</p>
        </div>
        <div className='flex flex-col items-center text-lg'>
          <p className='w-220 mb-7'>YourBookTeam offers flexible pricing based on client financial capacity and payment preferences, ensuring our high-quality publishing services are accessible while maintaining business sustainability.</p>
          <p className='w-225'>Our tiered approach allows us to serve authors at every stage of their career, from emerging writers to established executives.</p>
        </div>
      </section>
      <section id='executive' className='bg-[#f8f8f8] py-20 px-5 flex flex-col items-center justify-items-center'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl'><strong>Executive Tier Premium Services</strong></h2>
          <p className='my-7'>All included at no extra charge for our Executive Tier clients</p>
        </div>
        <ServiceCards services={Services} />
      </section>
              
    </div>
  );
}