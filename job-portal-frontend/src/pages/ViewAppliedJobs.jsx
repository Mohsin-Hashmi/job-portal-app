import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import getAppliedJobs from "../services/getAppliedJobsAPI";
import { useEffect } from "react";
import { useState } from "react";
import { addJobApplication } from "../utils/jobApplicationsSlice";
import { useDispatch } from "react-redux";
const ViewAppliedJobs = () => {
  const dispatch = useDispatch();
  const [userAppliedJobs, setUserAppliedJobs] = useState([]);

  const handleAppliedJobs = async () => {
    try {
      const application = await getAppliedJobs();
      dispatch(addJobApplication(application));
      setUserAppliedJobs(application);
    } catch (err) {
      console.log("Error in get applied job API");
    }
  };

  useEffect(() => {
    handleAppliedJobs();
  }, []);

  console.log("user applied jobs are:", userAppliedJobs);
  // Filter jobs that match applied job IDs
  return (
    <div className=" container">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 mt-6 text-center text-[#FFFFFF]">
          Your Applied Jobs
        </h2>

        {userAppliedJobs.length > 0 ? (
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white  shadow-md ">
              <thead>
                <tr className="bg-blue-500 text-white text-left">
                  <th className="py-3 px-6">Company</th>
                  <th className="py-3 px-6">Title</th>
                  <th className="py-3 px-6">Type</th>
                  <th className="py-3 px-6">Location</th>
                  <th className="py-3 px-6">Applied On</th>
                  <th className="py-3 px-6">Status</th>
                </tr>
              </thead>
              <tbody>
                {userAppliedJobs.map((job) => (
                  <tr
                    key={job._id}
                    className=" border-t hover:bg-gray-50 border-gray-200 transition duration-300 text-[#000]"
                  >
                    <td className="py-3 px-6">{job?.job?.company}</td>
                    <td className="py-3 px-6">{job?.job?.title}</td>
                    <td className="py-3 px-6">{job?.job?.type}</td>
                    <td className="py-3 px-6">{job?.job?.location}</td>
                    <td className="py-3 px-6">
                      {new Date(job?.job?.createdAt).toLocaleDateString()}
                    </td>

                    <td className="py-3 px-4 capitalize">
                      <span
                        className={
                          job?.status === "pending"
                            ? "text-yellow-500 font-semibold"
                            : job.status === "accepted"
                            ? "text-green-600 font-semibold"
                            : "text-red-500 font-semibold"
                        }
                      >
                        {job?.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600">
            You haven't applied to any jobs yet.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ViewAppliedJobs;
