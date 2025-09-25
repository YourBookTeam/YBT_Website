function SearchBar({ query, handleSubmit, handleChange }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 text-md w-full items-center justify-center"
    >
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search by keyword..."
        className="font-secondary w-[70%] lg:w-[70%] 2xl:w-[40%] h-8 px-2 py-1 border rounded-md focus:bg-white focus:outline-none bg-light-gray"
      />

      <button
        type="submit"
        className="text-white w-20 h-8 px-4 py-2 bg-gold rounded-md text-center font-bold flex flex-col items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-lighter-gold"
      >
        Clear
      </button>
    </form>
  );
}
export default SearchBar;
