import { useState } from "react";
import { useRef } from "react";
import { interns } from "../data/interns.js";
import { positions } from "../data/positions.js";
import TitleBanner from "../components/TitleBanner.jsx";
import Interns from "../components/internships_page/Interns.jsx";
import SearchBar from "../components/internships_page/SearchBar.jsx";
import Pagination from "../components/internships_page/Pagination.jsx";
import CurrentOpenings from "../components/internships_page/CurrentOpenings.jsx";
import FilterSelection from "../components/internships_page/FilterSelection.jsx";

import Fuse from "fuse.js";

function Internships() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const openPositions = positions.filter(
    (position) => position.status == "open"
  );
  const [positionFilters, setPositionFilters] = useState([]);

  // Use query and filters to create results on every render
  const filteredPositions = openPositions.filter((position) => {
    try {
      return (
        positionFilters.length == 0 ||
        positionFilters.includes(position.department)
      );
    } catch (error) {
      console.error("An error occurred: ", error.message);
      return false;
    }
  });

  const fuseOptions = {
    keys: ["title"],
  };
  const fuse = new Fuse(filteredPositions, fuseOptions);

  const finalFilter = query
    ? fuse.search(query).map((result) => result.item)
    : filteredPositions;

  const sectionRef = useRef(null);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(finalFilter.length / itemsPerPage);
  const startIndex = itemsPerPage * (currentPage - 1);
  const endIndex = startIndex + itemsPerPage;
  const displayedPositions = finalFilter.slice(startIndex, endIndex);

  const displayedInterns = interns.filter(
    (intern) => intern.status == "display"
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    setCurrentPage(1);
    setQuery("");
  };

  const handleChange = (event) => {
    setCurrentPage(1);
    setQuery(event.target.value);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePageClick = (num) => {
    setCurrentPage(num);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <TitleBanner>Internships</TitleBanner>

      <div className="flex flex-col justify-center items-center text-center px-5 md:px-10 lg:px-30 xl:px-50 2xl:px-100 pt-10 pb-20 gap-2">
        <div className="font-light">
          At YourBookTeam, interns don’t just observe — they contribute. This is
          your chance to gain hands-on experience, build your portfolio, and be
          part of a creative, collaborative team.
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10">
        <div
          id="current-openings"
          className="font-bold text-4xl"
          ref={sectionRef}
        >
          Current Openings
        </div>
        <SearchBar
          query={query}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <FilterSelection
          positionFilters={positionFilters}
          setPositionFilters={setPositionFilters}
        />
      </div>

      <CurrentOpenings displayedPositions={displayedPositions} />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handlePageClick={handlePageClick}
      />

      <Interns displayedInterns={displayedInterns} />
    </div>
  );
}

export default Internships;
