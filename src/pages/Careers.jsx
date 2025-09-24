import { useState } from "react";
import { useRef } from "react";
import { interns } from "../data/interns.js";
import { positions } from "../data/positions.js";
import TitleBanner from "../components/TitleBanner";
import Interns from "../components/careers_page/Interns";
import SearchBar from "../components/careers_page/SearchBar";
import Pagination from "../components/careers_page/Pagination";
import CurrentOpenings from "../components/careers_page/CurrentOpenings";

import Fuse from "fuse.js";

function Careers() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const openJobs = positions.filter((job) => job.status == "open");
  const [searchedJobs, setSearchedJobs] = useState(openJobs);
  const sectionRef = useRef(null);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(searchedJobs.length / itemsPerPage);
  const startIndex = itemsPerPage * (currentPage - 1);
  const endIndex = startIndex + itemsPerPage;
  const displayedJobs = searchedJobs.slice(startIndex, endIndex);

  const displayedInterns = interns.filter(
    (intern) => intern.status == "display"
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    setCurrentPage(1);
    setQuery("");
    setSearchedJobs(openJobs);
  };

  // Create fuse for fuzzy search
  const fuseOptions = {
    keys: ["title"],
  };
  const fuse = new Fuse(openJobs, fuseOptions);

  const handleChange = (event) => {
    setCurrentPage(1);
    setQuery(event.target.value);

    if (!event.target.value) {
      setSearchedJobs(openJobs);
      return;
    }

    const searchResults = fuse
      .search(event.target.value)
      .map((result) => result.item);
    setSearchedJobs(searchResults);
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
      <TitleBanner>Careers</TitleBanner>

      <div className="flex flex-col justify-center items-center text-center px-5 md:px-10 lg:px-30 xl:px-50 2xl:px-100 pt-10 pb-20 gap-2">
        <div className="font-bold text-2xl">Internships</div>
        <div className="font-light font-secondary">
          At YourBookTeam, interns don’t just observe — they contribute. This is
          your chance to gain hands-on experience, build your portfolio, and be
          part of a creative, collaborative team.
        </div>
      </div>

      <Interns displayedInterns={displayedInterns} />

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
      </div>

      <CurrentOpenings displayedJobs={displayedJobs} />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handlePageClick={handlePageClick}
      />
    </div>
  );
}

export default Careers;
