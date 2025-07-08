import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import getAllJobs from "../services/getJobsAPI";
import { useDispatch, useSelector } from "react-redux";
import { addJobs } from "../utils/jobsSlice";
import deleteJobAPI from "../services/deleteJobAPI";
import { removeJob } from "../utils/jobsSlice";
import { toast } from "react-toastify";
const ManageJob = () => {
  const dispatch = useDispatch();
  const jobStore = useSelector((store) => store.jobs.jobs || []);
  const admin = useSelector((store) => store.user);
 const adminJobs = Array.isArray(jobStore)
  ? jobStore.filter((job) => job.Admin?.toString() === admin._id?.toString())
  : [];


  useEffect(() => {
    const handleGetJob = async () => {
      try {
        const response = await getAllJobs();
        console.log("get job api:", response.current_jobs_are)
        dispatch(addJobs(response.current_jobs_are));
        
      } catch (err) {
        console.log("Error in get Job API", err);
      }
    };

    handleGetJob();
  }, [dispatch]);

  const handleEdit = (jobId) => {
    console.log("Edit job:", jobId);
    // navigate to edit job page
  };

  const handleDelete = async (jobId) => {
    try {
      const response = await deleteJobAPI(jobId);
      dispatch(removeJob(response))
      toast.success("Job Deleted Successfully")
    } catch (err) {
      console.log("error in delete job API")
    }    
  };

  return (
    <div className="container mx-auto px-4">
      <Header />
      <section className="my-8">
        <h2 className="text-4xl font-bold mb-7 text-center text-[#FFFFFF]">
          Manage Jobs
        </h2>
        {!adminJobs ? (
          <p className="text-gray-600">No jobs found.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow ">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-left text-sm uppercase tracking-wider">
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Company</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Experience</th>
                  <th className="py-3 px-4">Salary</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {adminJobs.map((job) => (
                  <tr key={job._id} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4">{job?.title || "N/A"}</td>
                    <td className="py-3 px-4">{job?.company || "N/A"}</td>
                    <td className="py-3 px-4">{job?.location || "N/A"}</td>
                    <td className="py-3 px-4">{job?.type || "N/A"}</td>
                    <td className="py-3 px-4">{job?.department || "N/A"}</td>
                    <td className="py-3 px-4">{job?.experience || "N/A"}</td>
                    <td className="py-3 px-4">
                      {job?.salary?.min} - {job?.salary?.max}{" "}
                      {job?.salary?.currency}
                    </td>
                    <td className="py-3 px-4 space-x-2">
                      <button
                        onClick={() => handleEdit(job._id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(job._id)}
                        className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                      >
                        Delete
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

export default ManageJob;
