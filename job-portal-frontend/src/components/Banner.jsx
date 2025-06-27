import React from "react";
import SearchBar from "./SearchBar";
import jobsIcon from "../assets/jobs-icon.png";
import candidateIcon from "../assets/candidate-icon.png";
import companyIcon from "../assets/companies-icon.png";
const Banner = ({onSearch}) => {
  return (
    <section className="text-white  py-[100px]">
      <h1 className="text-[70px] text-center font-bold">
        Find Your Dream Job Today!
      </h1>
      <p className="text-[18px] text-center font-medium">
        Connecting Talent with Opportunity: Your Gateway to Career Success
      </p>
      <SearchBar onSearch={onSearch}/>
      <div className="flex justify-center gap-x-16">
        <div className="flex justify-center items-center gap-x-3">
          <img src={jobsIcon} alt="jobs icon" />
          <span>
            <h3 className="text-[20px] font-bold">25,850</h3>
            <p className="text-[16px] font-normal">Jobs</p>
          </span>
        </div>
        <div className="flex justify-center items-center gap-x-3">
          <img src={candidateIcon} alt="candidate icon" />
          <span>
            <h3 className="text-[20px] font-bold">10,250</h3>
            <p className="text-[16px] font-normal">Candidates</p>
          </span>
        </div>
        <div className="flex justify-center items-center gap-x-3">
          <img src={companyIcon} alt="company icon" />
          <span>
            <h3 className="text-[20px] font-bold">18,400</h3>
            <p className="text-[16px] font-normal">Companies</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
