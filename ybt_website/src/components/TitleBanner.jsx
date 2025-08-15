function TitleBanner({ id, children }) {
  return (
    <div
      id={id}
      className="flex justify-self-center justify-center bg-[url(src/assets/gold-brush-mark.png)] bg-size-[100%_100%] w-150 m-10"
    >
      <div className="text-white text-5xl text-center font-bold p-10 drop-shadow-hero">
        {children}
      </div>
    </div>
  );
}
export default TitleBanner;
