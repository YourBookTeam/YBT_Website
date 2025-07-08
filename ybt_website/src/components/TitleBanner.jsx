function TitleBanner({ children }) {
  return (
    <div className="flex w-screen justify-center bg-soft-saffron py-4 font-bold text-2xl">
      {children}
    </div>
  );
}
export default TitleBanner;
