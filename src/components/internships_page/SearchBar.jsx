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
        className="w-[70%] lg:w-[70%] 2xl:w-[40%] h-8 px-2 py-1 border rounded-md focus:bg-white focus:outline-none bg-light-gray"
      />

      <button
        type="submit"
        className="flex items-center justify-center text-center transition-opacity ease-in-out duration-200 font-semibold bg-white text-gold border-2 border-gold rounded-md shadow-md hover:opacity-80 transition-transform hover:scale-99 px-4 py-1"
      >
        Clear
      </button>
    </form>
  );
}
export default SearchBar;
