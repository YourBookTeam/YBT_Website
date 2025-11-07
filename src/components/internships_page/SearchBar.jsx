import ClearSearchButton from "./ClearSearchButton";

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

      <ClearSearchButton>Clear</ClearSearchButton>
    </form>
  );
}
export default SearchBar;
