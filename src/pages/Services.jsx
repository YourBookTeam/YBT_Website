import React, { useState } from "react";
import Services from "../../src/data/service-data/premiumServices";
import ServiceCards from '../components/services/ServiceCards';
import clientData from '../data/service-data/clientTiers';
import ClientCards from '../components/services/ClientCards';
import payments from '../data/service-data/paymentOptions';
import PaymentCards from '../components/services/PaymentCards';
import serviceTableData from '../data/service-data/serviceTableData';
import ServiceTable from '../components/services/ServiceTable'
import Button from "../components/Button";
import BundlePackages from "../components/services/Bundles/BundlePackages";

export default function Service() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <section className='hero bg-[#d0b25f] text-white p-'>
         <div className="heroContainer text-center flex flex-col items-center py-20">
            <h1 className='text-4xl'><strong>Professional Publishing Services for Every Author</strong></h1>
            <p className='w-170 mt-9 mb-7 text-lg'>Flexible pricing based on your financial capacity and payment preferences, ensuring high-quality publishing services are accessible while maintaining business sustainability.</p>
            <Button gold wide to="/contact" className="mx-5 py-4 transform transition-all duration-400 hover:-translate-y-1 hover:shadow-xl cursor-pointer">Explore Our Services</Button>
        </div>
      </section>
      <section className='quickNav bg-light-grey py-7'>
        <div className='flex flex-wrap justify-center'>
          <Button white  to="#philosophy" className="w-45 py-3 px-2 mx-2 my-3 font-medium">Our Philosophy</Button>
          <Button white  to="#executive" className="w-45 py-3 px-2 mx-2 my-3 font-medium">Executive Services</Button>
          <Button white  to="#client" className="w-45 py-3 px-2 mx-2 my-3 font-medium">Client Tiers</Button>
          <Button white  to="#packagesPricing" className="w-45 py-3 px-2 mx-2 my-3 font-medium">Service Pricing</Button>
          <Button white  to="#bundles" className="w-45 py-3 px-2 mx-2 my-3 font-medium">Bundle Packages</Button>
          <Button white  to="#paymentInfo" className="w-45 py-3 px-2 mx-2 my-3 font-medium">Payment Options</Button>
        </div>
      </section>
      <section id="philosophy" className='philosophy py-15 text-center flex flex-col items-center'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl font-semibold'><strong>Our Pricing Philosophy</strong></h2>
          <p className='text-grey w-155 my-7'>We believe every author deserves access to professional publishing services, regardless of their financial situation.</p>
        </div>
        <div className="flex flex-col items-center text-lg">
          <p className="w-220 mb-7">
            YourBookTeam offers flexible pricing based on client financial
            capacity and payment preferences, ensuring our high-quality
            publishing services are accessible while maintaining business
            sustainability.
          </p>
          <p className="w-225">
            Our tiered approach allows us to serve authors at every stage of
            their career, from emerging writers to established executives.
          </p>
        </div>
      </section>
      <section id='executive' className='bg-light-grey py-15 px-5 flex flex-col items-center justify-items-center'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl font-semibold'>Executive Tier Premium Services</h2>
          <p className='my-7 text-grey'>All included at no extra charge for our Executive Tier clients</p>
        </div>
        <ServiceCards services={Services} />
      </section>
      <section id='client' className='h-200 flex flex-col items-center justify-center'>
        <div id='text'className='text-center mb-10'>
        <h2 className='text-3xl font-semibold'>Client Financial Categories</h2>
        <p className='text-[#777777] w-170 my-7'>We've designed our pricing structure to accommodate authors at different financial stages</p>
        </div>
        <ClientCards client={clientData} />
      </section>
      <section id="packagesPricing"
  className="bg-light-grey py-15 px-5 flex flex-col items-center justify-items-center">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-semibold">Service Packages & Pricing</h2>
    <p className="text-grey w-170 my-7">Choose from our comprehensive service offerings with flexible payment options</p>
  </div>

  <div id="serviceTab" className="flex flex-wrap justify-center">
    {serviceTableData.map((service, index) => (
      <Button
      key={service.id}
      wide
      className={`w-56 py-3 px-1 mx-2 my-3 border-light-gray rounded-md transition-all font-medium ${
        activeIndex === index
          ? "bg-gold text-white border-gold"
          : "bg-white text-black hover:bg-[#E7E8EF] hover:text-black"
      }`}
      onClick={() => setActiveIndex(index)}
    >
        {service.package}
      </Button>
    ))}
  </div>
  <ServiceTable data={serviceTableData[activeIndex]} />
      </section>
      <section id="bundles" className="py-20 px-5 bg-white">
        <BundlePackages />
      </section>
      <section id='paymentInfo' className='bg-light-grey py-15 px-5 flex flex-col items-center justify-items-center'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl font-semibold'>Payment Structure Details</h2>
          <p className='w-170 my-7'>Flexible payment options to suit your financial situation</p>
        </div>
        <PaymentCards cards={payments} />
      </section>
    </div>
  );
}
