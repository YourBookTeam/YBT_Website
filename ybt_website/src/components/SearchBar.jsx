function SearchBar({ query, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 text-[15px]">
        <input type="text" value={query} onChange={handleChange} placeholder="Search by keyword..." 
        className="w-150 h-8 px-2 py-1 border border-gray-300 rounded-md focus:outline-none bg-light-gray"/>

        <button type="submit" className="w-20 h-8 px-4 py-2 bg-saffron rounded-md text-center font-bold flex flex-col items-center justify-center cursor-pointer">Search</button>
    </form>
  );
}
export default SearchBar;
