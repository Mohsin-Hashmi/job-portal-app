import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import getAppliedJobs from '../services/getAppliedJobsAPI';
import { useEffect } from 'react';
import { useState } from 'react';
const ViewAppliedJobs = () => {
    const [userAppliedJobs, setUserAppliedJobs] = useState([]);
  
  const allJobs = useSelector((store) => store?.jobs?.jobs);

  

  const handleAppliedJobs = async()=>{
    try{
      const application= await getAppliedJobs()
      const jobId= application.map((app)=> app.job)
      setUserAppliedJobs(jobId)

    }catch(err){
      console.log("Error in get applied job API")
    }
  }

  useEffect(()=>{
    handleAppliedJobs(appliedJobs)
  }, [])
  // Filter jobs that match applied job IDs
  const appliedJobs = allJobs.filter((job) => userAppliedJobs.includes(job._id));
  return (
    <div className=" container">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 mt-6 text-center text-[#FFFFFF]">Your Applied Jobs</h2>

        {appliedJobs.length > 0 ? (
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white  shadow-md ">
              <thead>
                <tr className="bg-blue-500 text-white text-left">
                  <th className="py-3 px-6">Company</th>
                  <th className="py-3 px-6">Title</th>
                  <th className="py-3 px-6">Location</th>
                  <th className="py-3 px-6">Applied On</th>
                </tr>
              </thead>
              <tbody>
                {appliedJobs.map((job) => (
                  <tr
                    key={job._id}
                    className=" border-gray-200 hover:bg-gray-100 transition duration-300 "
                  >
                    <td className="py-3 px-6">{job.company}</td>
                    <td className="py-3 px-6">{job.title}</td>
                    <td className="py-3 px-6">{job.location}</td>
                    <td className="py-3 px-6">
                      {new Date(job.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600">You haven't applied to any jobs yet.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ViewAppliedJobs;
