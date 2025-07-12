import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import getSavedJobsAPI from "../services/getSavedJobsAPI";
import deleteSavedJobAPI from "../services/deleteSavedJobAPI";
import unSavedJobAPI from "../services/unSavedJobAPI";
import { toast } from "react-toastify";
const SavedJobs = () => {
  const [savedJob, setSavedJob] = useState([]);
  /**get saved jobs API Function */
  const handleSavedJobs = async () => {
    try {
      const response = await getSavedJobsAPI();
      setSavedJob(response);
      console.log("get saved jobs:", response);
    } catch (err) {
      console.log("Error in saved jobs API");
    }
  };
  useEffect(() => {
    handleSavedJobs();
  }, []);

  /**delete saved job API Function */
  const handleDeleteJob = async (jobId) => {
    try {
      const response = await deleteSavedJobAPI(jobId);
      if (response) {
        setSavedJob((prevJobs) =>
          prevJobs.filter((job) => job._id.toString() !== jobId.toString())
        );
        toast.success("Job Deleted Successfully");
      } else {
        toast.error("Failed to Delete Job");
      }
    } catch (err) {
      console.log("Error in delete API",err);
    }
  };

  /** unsaved job API Function */
  const handleUnSavedJob = async (jobId) => {
    try {
      const response = await unSavedJobAPI(jobId);
      if (response) {
        setSavedJob((prevJobs) =>
          prevJobs.filter((job) => job._id.toString() !== jobId.toString())
        );
        toast.success("Job Unsaved Successfully");
      } else {
        toast.error("Failed to Unsaved Job");
      }
    } catch (err) {
      console.log("Error in unsaved job API");
    }
  };
  return (
    <div className="container">
      <Header />
      <section>
        <h2 className="text-4xl font-bold mb-7 text-center text-[#FFFFFF]">
          Saved Jobs{" "}
        </h2>
        {savedJob.length === 0 ? (
          <p className="text-gray-600">No jobs found.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white  rounded-lg shadow ">
              <thead>
                <tr className="bg-blue-500 text-[#FFFFFF] text-left text-sm uppercase tracking-wider">
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Company</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Submission</th>
                  <th className="py-3 px-4">Salary</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Action</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {savedJob.map((job) => (
                  <tr key={job._id} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4">{job?.title || "N/A"}</td>
                    <td className="py-3 px-4">{job?.company || "N/A"}</td>
                    <td className="py-3 px-4">{job?.location || "N/A"}</td>
                    <td className="py-3 px-4">{job?.type || "N/A"}</td>

                    <td className="py-3 px-4">
                      {job?.createdAt
                        ? new Date(job.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="py-3 px-4">
                      {job?.salary?.min} - {job?.salary?.max}{" "}
                      {job?.salary?.currency}
                    </td>
                    <td className="py-3 px-4">
                      {job?.isActive
                        ? "Open for Application"
                        : "Job Canceled" || "N/A"}
                    </td>
                    <td className="py-3 px-4 space-x-2">
                      <button
                        onClick={() => handleDeleteJob(job._id)}
                        className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                    <td className="py-3 px-4 space-x-2">
                      <button
                        onClick={() => handleUnSavedJob(job._id)}
                        className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                      >
                        Unsaved
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default SavedJobs;
