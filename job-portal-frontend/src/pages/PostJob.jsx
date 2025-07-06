import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import postJobAPI from "../services/postJobAPI";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addJobs } from "../utils/jobsSlice";
import { useSelector } from "react-redux";
const PostJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adminStore = useSelector((store) => store.user);
  const { _id } = adminStore;
  const [title, setTitle] = useState();
  const [company, setCompany] = useState();
  const [location, setLocation] = useState();
  const [type, setType] = useState();
  const [department, setDepartment] = useState();
  const [salary, setSalary] = useState();
  const [experience, setExperience] = useState();
  const [skills, setSkills] = useState();
  const [description, setDescription] = useState();
  const [requirements, setRequirements] = useState();
  const [benefits, setBenefits] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postJobAPI({
        title,
        company,
        location,
        type,
        department,
        salary,
        skills,
        description,
        experience,
        requirements,
        benefits,
        Admin: _id,
      });
      console.log(response);
      if (response.success === true) {
        toast.success("Job Created Successfully.");
      } else {
        toast.error("Failed to create job. Please try again.");
      }
      dispatch(addJobs(response));
      navigate("/manage-job");
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };
  return (
    <>
      <div className="container">
        <Header />
        <section>
          <h1 className="text-center text-[35px] text-[#FFFFFF] font-bold mt-8">
            Post a Job
          </h1>
          <p className="text-center mt-2 text-2xl font-normal text-[#FFFFFF]">
            Enter job details to attract the right candidates
          </p>
          <form
            action=""
            onSubmit={handleSubmit}
            className="bg-[#F6FBFF] p-12 mt-9 rounded-xl text-[#011F5B]"
          >
            <div className="flex items-center justify-between">
              <div className="">
                <label htmlFor="" className="text-xl mb-4 block">
                  Job Title*
                </label>
                <input
                  type="text"
                  className="w-[500px] p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
                  placeholder="Frontend Developer"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="" className="text-xl mb-4 block">
                  Department*
                </label>
                <div className="relative w-full">
                  <select
                    className="w-[500px] p-3 pr-10 rounded-lg  border border-[#011F5B] text-[#011F5B] bg-[#fff] outline-none font-medium text-[16px] appearance-none"
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
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <label htmlFor="" className="text-xl my-4 block">
                  Preferred Job Type*
                </label>

                <div className="relative w-full">
                  <select
                    className="w-[500px] p-3 pr-10 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff] outline-none font-medium text-[16px] appearance-none"
                    defaultValue=""
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="" disabled hidden>
                      Select job type
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
              </div>
              <div>
                <label htmlFor="" className="text-xl my-4 block">
                  Expected Salary Range*
                </label>

                <div className="relative w-full">
                  <select
                    className="w-[500px] p-3 pr-10 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff] outline-none font-medium text-[16px] appearance-none"
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
                      Experienced: 3 to 5 Years of Experience ($60,000 –
                      $100,000)
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
            </div>
            <label htmlFor="" className="text-xl my-4 block">
              Company Name*
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
              placeholder="Google"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <label htmlFor="" className="text-xl my-4  block">
              Location*
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-full p-3 rounded-lg  border border-[#011F5B]  text-[#011F5B] bg-[#fff] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
              placeholder="New York, NK"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <label htmlFor="" className="text-xl my-4 block">
              Experience Level*
            </label>
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
            <label htmlFor="" className="text-xl my-4  block">
              Key Skills*
            </label>
            <textarea
              name=""
              id=""
              className="w-full p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
              placeholder="React, JavaScript, TypeScript, Node.js..."
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              required
            ></textarea>
            <label htmlFor="" className="text-xl my-4  block">
              Job Description*
            </label>
            <textarea
              name=""
              id=""
              className="w-full p-3 rounded-lg  border border-[#011F5B] text-[#011F5B] bg-[#fff] outline-none font-medium text-xl placeholder:text-[#011F5B] placeholder:text-[16px] block h-[200px]"
              placeholder="Describe the role, responsibilities, and qualifications required..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <label htmlFor="" className="text-xl my-4  block">
              Requirements*
            </label>
            <textarea
              name=""
              id=""
              className="w-full p-3 rounded-lg  border border-[#011F5B] text-[#011F5B] bg-[#fff] outline-none font-medium text-xl placeholder:text-[#011F5B] placeholder:text-[16px] block h-[200px]"
              placeholder="List the skills, experience, and qualifications needed for this position..."
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              required
            ></textarea>
            <label htmlFor="" className="text-xl my-4  block">
              Benefits*
            </label>
            <textarea
              name=""
              id=""
              className="w-full p-3 rounded-lg  border border-[#011F5B] text-[#011F5B] bg-[#fff] outline-none font-medium text-xl placeholder:text-[#011F5B] placeholder:text-[16px] block h-[200px]"
              placeholder="Highlight the perks, benefits, and incentives offered for this role..."
              value={benefits}
              onChange={(e) => setBenefits(e.target.value)}
              required
            ></textarea>
            {/* second time  */}

            {/* checkboxes */}
            <div className="my-9">
              <span className="flex items-center gap-x-4">
                <input type="checkbox" className="w-5 h-5 rounded-full" />
                <p className=" text-medium font-medium">
                  Open to remote work opportunities.
                </p>
              </span>
            </div>
            {/* Buttons */}
            <div className="flex justify-center items-center pt-7">
              <Link
                to="/company-dashboard"
                className="font-medium text-xl hover:text-[#309689]"
              >
                Back
              </Link>
              <button
                type="submit"
                className="w-[700px] py-5 px-5 inline-block bg-[#309689] rounded-lg text-white text-xl font-medium ml-10"
              >
                Post Job
              </button>
            </div>
          </form>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default PostJob;
