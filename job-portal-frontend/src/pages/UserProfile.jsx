import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const UserProfile = () => {
  return (
    <div className="container">
      <Header />
      <section>
        <h1 className="text-center text-[35px] text-[#FFFFFF] font-bold mt-8">
          Create Your Profile
        </h1>
        <p className="text-center mt-2 text-2xl font-normal text-[#FFFFFF]">
          Professional details to create your profile
        </p>
        <form action="" className="bg-[#F6FBFF] p-12 mt-9 rounded-xl text-[#011F5B]">
          <div className="flex items-center justify-between">
            <div className="">
              <label htmlFor="" className="text-xl mb-4 block">
                Current Job Title*
              </label>
              <input
                type="text"
                className="w-[500px] p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
                placeholder="Frontend Developer"
                required
              />
            </div>
            <div>
              <label htmlFor="" className="text-xl mb-4 block">
                Experience Level*
              </label>
              <div className="relative w-full">
                <select
                  className="w-[500px] p-3 pr-10 rounded-lg  border border-[#011F5B] text-[#011F5B] bg-[#fff] outline-none font-medium text-[16px] appearance-none"
                  defaultValue=""
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
            </div>
          </div>
          <label htmlFor="" className="text-xl my-4  block">
            Location*
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-full p-3 rounded-lg  border border-[#011F5B]  text-[#011F5B] bg-[#fff] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
            placeholder="New York, NK"
            required
          />
          <label htmlFor="" className="text-xl my-4  block">
            Key Skills*
          </label>
          <textarea
            name=""
            id=""
            className="w-full p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
            placeholder="React, JavaScript, TypeScript, Node.js..."
            required
          ></textarea>
          <label htmlFor="" className="text-xl my-4  block">
            Resume/CV*
          </label>
          <input
            type="file"
            name=""
            id=""
            className="w-full p-3 rounded-lg  border border-[#011F5B] text-[#011F5B] bg-[#fff] outline-none font-medium text-[16px] block"
            placeholder="Upload Resume (PDF, DOC, DOCX)"
            required
          />
          <label htmlFor="" className="text-xl my-4  block">
            LinkedIn Profile*
          </label>
          <input
            type="url"
            name=""
            id=""
            className="w-full p-3 rounded-lg border border-[#011F5B] text-[#011F5B] bg-[#fff] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
            placeholder="https:://linkedin.com/in/"
            required
          />
          <label htmlFor="" className="text-xl my-4  block">
            Portfolio Website*
          </label>
          <input
            type="url"
            name=""
            id=""
            className="w-full p-3 rounded-lg border border-[#011F5B] text-[#011F5B] bg-[#fff] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
            placeholder="https:://yourportfolio.com"
            required
          />
          <label htmlFor="" className="text-xl my-4  block">
            Professional Bio*
          </label>
          <textarea
            name=""
            id=""
            className="w-full p-3 rounded-lg  border border-[#011F5B] text-[#011F5B] bg-[#fff] outline-none font-medium text-xl placeholder:text-[#011F5B] placeholder:text-[16px] block h-[200px]"
            placeholder="Tell us about yourself, your experience and what you're looking for..."
            required
          ></textarea>
          {/* second time  */}
          <div className="flex items-center justify-between">
            <div className="">
              <label htmlFor="" className="text-xl my-4 block">
                Preferred Job Type*
              </label>

              <div className="relative w-full">
                <select
                  className="w-[500px] p-3 pr-10 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff] outline-none font-medium text-[16px] appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Select job type
                  </option>
                  <option value="">Full-time</option>
                  <option value="">Part-time</option>
                  <option value="">Contract</option>
                  <option value="">Internship</option>
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
                >
                  <option value="" disabled hidden  >
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
          </div>
          {/* checkboxes */}
          <div className="my-9">
            <span className="flex items-center gap-x-4">
              <input type="checkbox" className="w-5 h-5 rounded-full" />
              <p className=" text-medium font-medium">
                Open to remote work opportunities.
              </p>
            </span>
            <span className="flex items-center gap-x-4 mt-3">
              <input type="checkbox" className="w-5 h-5 rounded-full" />
              <p className=" text-medium font-medium">
                I agree to the{" "}
                <strong>
                  <i>Terms of Service</i>{" "}
                </strong>{" "}
                and{" "}
                <strong>
                  <i>Privacy Policy</i>
                </strong>
                .
              </p>
            </span>
            <span className="flex items-center gap-x-4 mt-3">
              <input type="checkbox" className="w-5 h-5 rounded-full" />
              <p className=" text-medium font-medium">
                I want to receive job alerts and career updates via email
              </p>
            </span>
          </div>
          {/* Buttons */}
          <div className="flex justify-center items-center pt-7">
            <Link to="/" className="font-medium text-xl hover:text-[#309689]">
              Back
            </Link>
            <button className="w-[700px] py-5 px-5 inline-block bg-[#309689] rounded-lg text-white text-xl font-medium ml-10">
              Create Account
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default UserProfile;
