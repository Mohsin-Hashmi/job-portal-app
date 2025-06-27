import React from "react";
import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [titleOrCompany, setTitleOrCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const handleSearch = () => {
    onSearch({ titleOrCompany, location, jobType });
    setTitleOrCompany("");
    setLocation("");
    setJobType("");
  };

  return (
    <section className="flex gap-8 justify-center items-center pt-[70px] pb-[80px]">
      <input
        type="text"
        className=" w-[300px] p-5 rounded-lg   text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg placeholder:text-[#011F5B] shadow-[0px_-5px_23px_0px_#011F5B]"
        placeholder="Job Title or Company"
        value={titleOrCompany}
        onChange={(e) => setTitleOrCompany(e.target.value)}
      />
      <input
        type="text"
        className=" w-[200px] p-5 rounded-lg   text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg placeholder:text-[#011F5B] shadow-[0px_-5px_23px_0px_#011F5B]"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div className="relative ">
        <select
          className="w-[200px] p-4 pr-10 rounded-lg marker: text-[#011F5B] bg-[#fff] cursor-pointer  outline-none font-medium text-lg appearance-none shadow-[0px_-5px_23px_0px_#011F5B]"
          defaultValue=""
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="" disabled hidden>
            Select job type
          </option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
          <option value="Hybird">Hybrid</option>
        </select>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-[#011F5B] text-sm">
          ▼
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="py-2 px-6 inline-block bg-[#309689] rounded-lg text-white text-base font-medium max-h-[100px]"
      >
        Search Job
      </button>
    </section>
  );
};

export default SearchBar;
