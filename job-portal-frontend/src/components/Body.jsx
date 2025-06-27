import React, { useState } from "react";
import Banner from "./Banner";
import TopCompanies from "./TopCompanies";
import RecentJobs from "./RecentJobs";
const Body = () => {

  const[searchParams, setSearchParams]= useState({
    titleOrCompany: "",
    location: "",
    jobType: ""
  })

  const handleSearch = (params)=>{
    setSearchParams(params)
  }
  return (
    <>
      <Banner onSearch= {handleSearch}/>
      <TopCompanies />
      <RecentJobs searchParams= {searchParams} />
    </>
  );
};

export default Body;
