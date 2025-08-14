import Dropdown from '../components/Dropdown';
import Titlebanner from '../components/TitleBanner';

function Terms() {
  
  const Term ={
    termOne : {
      title: "1. Acceptance of Terms and Conditions",
      detail: "Book marketing is a process in which authors promote their books to reach a wider audience, increase sales, and establish a strong author platform."
    },
    termTwo :{
      title: "2. Website Content",
      detail: "The content on the Website is provided for general information purposes only. It may be subject to change without notice. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, reliability, or suitability of the information on the Website."
    },
    termThree :{
      title: "3. Intellectual Property Rights",
      detail: "The Website and its contents, including but not limited to text, graphics, images, logos, and software, are the property of YourBookTeam or its licensors and are protected by intellectual property laws. You may not reproduce, distribute, modify, transmit, or use the content of the Website without prior written permission from YourBookTeam."
    },
    termFour :{
      title: "4. User Conduct",
      detail: (
        <>
          <p className='mb-7'>When using the Website, you agree to:</p>
          
          <ul>
            <li className='mb-3'>1.  Comply with all applicable laws and regulations.</li>
            <li className='mb-3'>2.  Use the Website solely for lawful purposes and in a manner that does not infringe or restrict the rights of others.</li>
            <li className='mb-3'>3.  Refrain from engaging in any activity that may disrupt or interfere with the proper functioning of the Website or its services.</li>
            <li>4.  Maintain the confidentiality of any login credentials or account information associated with the Website.</li>
          </ul>
        </>
      )
    },
    termFive :{
      title: "5. Links to Third-Party Websites",
      detail: "The Website may contain links to third-party websites for your convenience. We do not endorse or assume any responsibility for the content, products, services, or privacy practices of these third-party websites. You access these websites at your own risk, and you are encouraged to review their respective terms of service and privacy policies."
    },
    termSix :{
      title: "6. Limitation of Liability",
      detail: "In no event shall YourBookTeam, its officers, directors, employees, or agents be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use of the Website or its contents, even if advised of the possibility of such damages."
    },
    termSeven :{
      title: "7. Indemnification",
      detail: "You agree to indemnify and hold harmless YourBookTeam, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses arising out of or in connection with your use of the Website or any violation of these Terms."
    },
    termEight :{
      title: "8. Modifications and Termination",
      detail: "We reserve the right to modify or terminate the Website or these Terms at any time, without notice or liability. It is your responsibility to review these Terms periodically. Continued use of the Website after any modifications to the Terms shall constitute your acceptance of such modifications."
    },
    termNine :{
      title: "9. Governing Law",
      detail: "These Terms shall be governed by and construed in accordance with the laws of the United States/New York. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in New York."
    },
  }

  return (
    <div className="font-primary text-lg p-10 flex flex-col items-center justify-center">
      <Titlebanner>Terms and Conditions</Titlebanner>
      <p className='xl:px-50 xl:pt-6 text-justify leading-loose font-secondary'>Welcome to YourBookTeam! These Terms and Conditions govern your use of our website and services. By accessing or using this website, you agree to be bound by these terms and conditions in full. Please read them carefully before proceeding.</p>
      <section className='termsContainer xl:py-7 w-10/12'>
        {Object.entries(Term).map(([key, term]) => (
          <Dropdown key={key} question={term.title} answer={term.detail} />))
        }
      </section>
    </div>
  );
}
export default Terms;
