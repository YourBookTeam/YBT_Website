function TitleBanner({ id, children }) {
  return (
      <div 
        id={id}
        className="text-gold text-3xl md:text-4xl xl:text-5xl text-center font-bold p-10  flex-col justify-items-center">
        {children}
        <div className="bg-gold h-1 w-40 mt-5"></div>
      </div>
      
  );
}
export default TitleBanner;
