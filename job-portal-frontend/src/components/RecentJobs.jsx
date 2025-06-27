import React, { useState, useEffect } from "react";
import getAllJobs from "../services/getJobsAPI";
import { Link } from "react-router-dom";
import JobCardSkeleton from "./JobCardSkeleton";
import { useDispatch } from "react-redux";
import { addJobs } from "../utils/jobsSlice";

const RecentJobs = ({searchParams}) => {
  const [jobs, setJobs] = useState([]);
  const [filterJobs, setFilterJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchJobs = async () => {
    try {
      const response = await getAllJobs();
      if (!response || !response.success) {
        console.log("No jobs found");
        return;
      }
      const jobList = response.current_jobs_are;
      console.log("Jobs data is : ", jobList);
      setJobs(jobList);
      setFilterJobs(jobList);
      dispatch(addJobs(jobList));
    } catch (err) {
      console.log("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

    useEffect(() => {
    // Filter jobs whenever searchParams or jobs change
    const { titleOrCompany, location, jobType } = searchParams;
    const filtered = jobs.filter((job) => {
      const company = job.company?.toLowerCase() || "";
      const jobTitle = job.title?.toLowerCase() || "";
      const jobLocation = job.location?.toLowerCase() || "";
      const jobTypeValue = job.type?.toLowerCase() || "";
      const searchTitleOrCompany = titleOrCompany?.toLowerCase() || "";
      const searchLocation = location?.toLowerCase() || "";
      const searchJobType = jobType?.toLowerCase() || "";

      const matchesTitleOrCompany =
        !searchTitleOrCompany ||
        company.includes(searchTitleOrCompany) ||
        jobTitle.includes(searchTitleOrCompany);

      const matchesLocation =
        !searchLocation || jobLocation.includes(searchLocation);

      const matchesJobType =
        !searchJobType || jobTypeValue === searchJobType;

      return matchesTitleOrCompany && matchesLocation && matchesJobType;
    });
    setFilterJobs(filtered);
  }, [searchParams, jobs]);

  return (
    <section className="py-[60px] text-white">
      <h2 className="text-[50px] font-bold mb-10 text-[#FFFFFF] text-center">Recent Jobs Available</h2>
      {loading ? (
        <div>
          {[...Array(10)].map((_, i) => (
            <JobCardSkeleton key={i} />
          ))}
        </div>
      ) : filterJobs.length > 0 ? (
        <div>
          {filterJobs.map((job) => (
            <div key={job._id} className="bg-[#F6FBFF] p-6 rounded-lg mb-4 text-[#011F5B] shadow-[0px_-5px_23px_0px_#011F5B]">
              <h3 className="text-[30px] font-semibold">{job.title}</h3>
              <p className="text-[26px] font-medium">{job.company}</p>
              <p className="text-[20px]">
                {job.type} | {job.location}
              </p>
              <p className="text-[20px] mt-2 ">
                Salary: ${job.salary.min.toLocaleString()} - $
                {job.salary.max.toLocaleString()} {job.salary.currency}
              </p>
              <Link
                to={`/view-description/${job._id}`}
                className="bg-[#309689] text-[#FFFFFF] w-[190px] text-center p-3 mt-3 rounded-xl block text-lg"
              >
                View Description 
              </Link>
              <Link
                to={`/apply-for-job/${job._id}`}
                className="bg-[#309689] text-[#FFFFFF]  w-[190px] text-center p-3 mt-3 rounded-xl block text-lg"
              >
                Apply For Job
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-[20px]">No jobs available at the moment</p>
        </div>
      )}
    </section>
  );
};

export default RecentJobs;
