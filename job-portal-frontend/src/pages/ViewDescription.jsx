import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ViewDescription = () => {
  const { _id } = useParams();
  const jobs = useSelector((store) => store.jobs);

  const job = jobs.find((job) => job._id === _id);

  console.log("selected jobs are", jobs);

  return (
    <div className="container">
      <Header />
      <section>
        <div className="py-10 text-[#FFFFFF]">
          <h1 className="text-5xl font-bold mb-10 text-center ">
            Apply for Job
          </h1>
          {job ? (
            <div className="bg-[#F6FBFF] text-[#011F5B] p-12 mt-9 rounded-xl shadow-[0px_-5px_23px_0px_#011F5B]">
              <h3 className="text-[34px] font-semibold mb-2">{job.title}</h3>
              <p className="text-[25px] font-medium">{job.company}</p>
              <p className="text-[18px]">
                {job.type} | {job.location}
              </p>
              <p className="text-[18px] mt-2">
                Salary: ${job.salary.min.toLocaleString()} - $
                {job.salary.max.toLocaleString()} {job.salary.currency}
              </p>
              <p className="text-[18px] mt-2">{job.description}</p>

              <div className="mt-4">
                <h4 className="text-[18px] font-semibold mb-2">Key Skills</h4>
                <ul className="list-disc list-inside text-[18px] ml-4">
                  {job.skills?.map((skill, index) => (
                    <li className="mb-2" key={index}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="mt-4">
                <h4 className="text-[22px] font-semibold mb-2">Requirements</h4>
                <ul className="list-disc list-inside text-[18px]  ml-4 ">
                  {job.requirements?.map((req, index) => (
                    <li className="mb-2" key={index}>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mt-4">
                <h4 className="text-[22px] font-semibold  mb-2">Benefits</h4>
                <ul className="list-disc list-inside ml-4 text-[18px] ">
                  {job.benefits?.map((benefit, index) => (
                    <li className="mb-2" key={index}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <p clasName="text-[20px] mt-2">{job.isActive}</p>
              <Link
                to={`/apply-for-job/${job._id}`}
                className="w-[700px] py-5 px-5  bg-[#309689] rounded-lg text-white text-xl font-medium mt-20 block m-auto text-center"
              >
                Apply For Job
              </Link>
            </div>
          ) : (
            <p className="text-red-500">Job not found.</p>
          )}
        </div>
       
      </section>
      <Footer />
    </div>
  );
};

export default ViewDescription;
