import backgroundImg from '../assets/books_about_us.jpg';

function IntroBanner() {
  return (
    <div className="relative h-32 w-full flex justify-center items-center">
        <div className="absolute inset-0 bg-cover bg-center filter contrast-75"style={{ backgroundImage: `url(${backgroundImg})` }}></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-white text-[35px] font-bold">
            Hi, We Are Your Book Team!
        </div>
    </div>
  );
}
export default IntroBanner;