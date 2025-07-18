function TitleBanner({ children }) {
  return (
    <div className="flex w-screen justify-center bg-soft-saffron py-8 font-bold text-4xl">
      {children}
    </div>
  );
}
export default TitleBanner;
