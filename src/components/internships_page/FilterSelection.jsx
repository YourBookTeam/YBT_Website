import SearchFilterButton from "./SearchFilterButton";
import { positions } from "../../data/positions";

const FilterSelection = ({ positionFilters, setPositionFilters }) => {
  let departments = positions.map((position) => {
    if (position.department) {
      return position.department;
    } else {
      console.error("Department property missing from position data");
      return "Missing Department";
    }
  });
  departments = [
    ...new Set(
      departments.filter((department) => department != "Missing Department")
    ),
  ];

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <h2>Departments:</h2>
      <SearchFilterButton
        positionFilters={positionFilters}
        setPositionFilters={setPositionFilters}
      >
        All
      </SearchFilterButton>
      {departments.map((department) => (
        <SearchFilterButton
          key={"filter" + department}
          positionFilters={positionFilters}
          setPositionFilters={setPositionFilters}
        >
          {department}
        </SearchFilterButton>
      ))}
    </div>
  );
};
export default FilterSelection;
