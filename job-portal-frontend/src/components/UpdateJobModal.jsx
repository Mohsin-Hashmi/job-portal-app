import React from "react";

import { useDispatch } from "react-redux";

import { useState } from "react";
const UpdateJobModal = ({ job, onClose, editTask }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(job.title || "");
  const [company, setCompany] = useState(job.company || "");
  const [location, setLocation] = useState(job.location || "");
  const [type, setType] = useState(job.type || "");
  const [department, setDepartment] = useState(job.department || "");
  const [salary, setSalary] = useState(job.salary || "");
  const [experience, setExperience] = useState(job.experience || "");
  const payload = {
    title,
    company,
    location,
    type,
    department,
    salary,
    experience,
  };

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await editTask(job._id, payload);
    } catch (err) {
      console.log("Error in Update Task");
    }
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-[700px]">
        <h2 className="text-xl font-bold mb-4">Update Job</h2>
        <form action="" onSubmit={handleUpdate}>
          <div className="flex justify-between items-center flex-wrap gap-y-5">
            <input
              type="text"
              className="w-[300px] p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[14px]"
              placeholder="Enter Job Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              className="w-[300px] p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[14px]"
              placeholder="Enter Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[14px]"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <div className="relative w-full">
              <select
                className="w-full p-3   rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff] outline-none font-medium text-[16px] appearance-none"
                defaultValue=""
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" disabled hidden>
                  Select Job Type
                </option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-[#242832] text-sm">
                ▼
              </div>
            </div>
            <div className="relative w-full">
              <select
                className="w-full p-3 rounded-lg  border border-[#011F5B] text-[#011F5B] bg-[#fff] outline-none font-medium text-[16px] appearance-none"
                defaultValue=""
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="" disabled hidden>
                  Select Department
                </option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
              </select>
              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none  text-[#011F5B] text-sm">
                ▼
              </div>
            </div>
            <div className="relative w-full">
              <select
                className="w-full p-3 pr-10 rounded-lg  border border-[#011F5B] text-[#011F5B] bg-[#fff] outline-none font-medium text-[16px] appearance-none"
                defaultValue=""
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="" disabled hidden>
                  Select Experience Level
                </option>
                <option value="beginner">Beginner: 0 to 1 Year</option>
                <option value="medium">Medium: 1 to 3 Years</option>
                <option value="experienced">Experienced: 3 to 5 Years</option>
              </select>
              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none  text-[#011F5B] text-sm">
                ▼
              </div>
            </div>
            <div className="relative w-full">
              <select
                className="w-full p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff] outline-none font-medium text-[16px] appearance-none"
                defaultValue=""
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="" disabled hidden>
                  Select salary range
                </option>
                <option value="0-30k">
                  Beginner: 0 to 1 Year of Experience ($0 – $30,000)
                </option>
                <option value="30k-60k">
                  Medium: 1 to 3 Years of Experience ($30,000 – $60,000)
                </option>
                <option value="60k-100k">
                  Experienced: 3 to 5 Years of Experience ($60,000 – $100,000)
                </option>
                <option value="100k+">
                  Senior: 5+ Years of Experience ($100,000+)
                </option>
              </select>
              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-[#242832] text-sm">
                ▼
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-x-5 my-4">
            <button
              onClick={onClose}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
            <button
              type="submit"
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateJobModal;
