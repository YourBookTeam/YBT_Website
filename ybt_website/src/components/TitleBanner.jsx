function TitleBanner({ children }) {
  return (
    <div className="flex justify-self-center justify-center bg-[url(src/assets/gold-brush-mark.png)] bg-size-[100%_100%] w-100 md:w-150 xl:w-200 m-10">
      <div className="text-white text-4xl md:text-5xl xl:text-6xl text-center font-bold p-10 drop-shadow-hero">
        {children}
      </div>
    </div>
  );
}
export default TitleBanner;