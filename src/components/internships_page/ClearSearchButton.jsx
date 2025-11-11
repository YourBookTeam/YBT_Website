const ClearSearchButton = ({ children }) => {
  return (
    <button
      type="submit"
      className="flex items-center justify-center text-center ease-in-out duration-200 font-semibold bg-white border-2 rounded-md shadow-md opacity-80 hover:opacity-100 transition-all hover:scale-105 px-4 py-1 text-gold border-gold"
    >
      {children}
    </button>
  );
};
export default ClearSearchButton;
