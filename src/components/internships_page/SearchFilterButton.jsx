/* import { useState } from "react"; */
import { cn } from "../../lib/utils";

const SearchFilterButton = ({
  children,
  positionFilters,
  setPositionFilters,
}) => {
  const filterIncluded = positionFilters.includes(children);

  let selected = false;
  if (positionFilters.length == 0 && children == "All") {
    selected = true;
  } else if (filterIncluded) {
    selected = true;
  }

  const toggleFilter = () => {
    // Throws error if positionFilters isn't even an array.
    if (!positionFilters) {
      console.error(positionFilters);
      return;
    }

    // Handle toggle if it's the "All" filter.
    if (children == "All") {
      setPositionFilters([]);
      return;
    }

    // Handle toggle for the rest of the filters.
    if (filterIncluded) {
      setPositionFilters(
        positionFilters.filter((filter) => filter != children)
      );
    } else {
      setPositionFilters([...positionFilters, children]);
    }
  };

  return (
    <button
      type="button"
      className={cn(
        "flex items-center justify-center text-center ease-in-out duration-200 font-semibold bg-white border-2 rounded-md shadow-md opacity-80 hover:opacity-100 transition-all hover:scale-105 px-4 py-1",
        selected ? "text-gold border-gold" : "text-gray border-gray"
      )}
      onClick={toggleFilter}
    >
      {children}
    </button>
  );
};
export default SearchFilterButton;
