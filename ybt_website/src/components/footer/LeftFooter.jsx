const LeftFooter = () => {
  return (
    <div className="flex-1 flex flex-col min-w-64 min-h-96 items-center">
        <h3 className="text-3xl mb-8 font-bold">Quick Links</h3>
        <ul className="flex flex-col items-center space-y-2 text-xl">
        <li>
            <a href="about">About Us</a>
        </li>
        <li>
            <a href="services">Services</a>
        </li>
        <li>
            <a href="careers">Careers</a>
        </li>
        <li>
            <a href="faq">FAQ</a>
        </li>
        </ul>
        <div className="mt-auto mb-5">
        <a href="terms">Terms of Use and Policies</a>
        </div>
    </div>
  );
};

export default LeftFooter;
