import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const RegisterYourCompany = () => {
  return (
    <div className="container">
      <Header />
      <section>
        <h2 className="text-center text-[35px] text-[#FFFFFF] font-bold mt-8">
          Register Your Company
        </h2>
        <p className="text-center mt-2 text-[25px] font-nomal text-[#FFFFFF] ">
          Start hiring top talent today
        </p>
        <form
          action=""
          className="bg-[#F6FBFF] text-[#011F5B] p-12 mt-9 rounded-xl shadow-[0px_-5px_23px_0px_#011F5B]"
        >
          <h3 className="text-3xl font-semibold">Company Information </h3>
          <label htmlFor="" className="text-xl mb-4 mt-4 block">
            Company Name*
          </label>
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-[#011F5B]   text-[#011F5B] bg-[#fff] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
            placeholder="Enter your company name"
          />
          <label htmlFor="" className="text-xl mb-4 mt-4 block">
            Company Email*
          </label>
          <input
            type="email"
            className="w-full p-3 rounded-lg border border-[#011F5B]   text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
            placeholder="company@example.com"
          />

          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="" className="text-xl mb-4 mt-4 block">
                Industry*
              </label>
              <div className="relative w-full">
                <select
                  className="w-[500px] p-3 pr-10 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff]  outline-none font-medium text-[16px] appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Select Industry
                  </option>
                  <option value="IT">Information Technology</option>
                  <option value="media">Media and Telecommunication</option>
                  <option value="research">Research and Innovation</option>
                </select>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-[#011F5B] text-sm">
                  ▼
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-xl mb-4 mt-4 block">
                Company Size*
              </label>
              <div className="relative w-full">
                <select
                  className="w-[500px] p-3 pr-10 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff]  outline-none font-medium text-[16px] appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Company Size
                  </option>
                  <option value="startup">10 to 50 Employees</option>
                  <option value="medium">50 to 200 Employess</option>
                  <option value="enterprise">more than 200 Employees</option>
                </select>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-[#011F5B] text-sm">
                  ▼
                </div>
              </div>
            </div>
          </div>
          <label htmlFor="" className="text-xl mb-4 mt-4 block">
            Website (Optional)
          </label>
          <input
            type="email"
            className="w-full p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
            placeholder="https://www.yourcompany.com"
          />

          <h3 className="text-3xl font-semibold mt-14 mb-4">Contact Person</h3>
          <div className="flex items-center justify-between">
            <div className="">
              <label htmlFor="" className="text-xl mb-4 block">
                Full Name*
              </label>
              <input
                type="text"
                className="w-[500px] p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff] ] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
                placeholder="Your full name"
                required
              />
            </div>
            <div className="">
              <label htmlFor="" className="text-xl mb-4 block">
                Job Title*
              </label>
              <input
                type="text"
                className="w-[500px] p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
                placeholder="HR Manager, CEO, etc."
                required
              />
            </div>
          </div>
          <label htmlFor="" className="text-xl mb-4 mt-4  block">
            Phone Number*
          </label>
          <input
            type="tel"
            className="w-full p-3 rounded-lg border border-[#011F5B] text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
            placeholder="+1 (555) 123-4567"
          />
          <h3 className="text-3xl font-semibold mt-14 mb-4">Account Setup</h3>
          <div className="flex items-center justify-between">
            <div className="">
              <label htmlFor="" className="text-xl mb-4 block">
                Password*
              </label>
              <input
                type="password"
                className="w-[500px] p-3 rounded-lg border border-[#011F5B] text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[25px]"
                placeholder="........"
                required
              />
            </div>
            <div className="">
              <label htmlFor="" className="text-xl mb-4 block">
                Confirm Password*
              </label>
              <input
                type="password"
                className="w-[500px] p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[25px]"
                placeholder="........."
                required
              />
            </div>
          </div>
          <h3 className="text-3xl font-semibold mt-14 mb-4">
            Additional Information(Optional)
          </h3>
          <label htmlFor="" className="text-xl mb-4 mt-4 block">
            Company Logo
          </label>
          <input
            type="file"
            className="w-full p-3 rounded-lg  border border-[#011F5B]   text-[#011F5B] bg-[#fff]  outline-none font-medium text-[16px] block placeholder:text-[#011F5B] placeholder:text-[16px]"
            placeholder="Upload Logo(PNG, JPG, SVG)"
          />
          <label htmlFor="" className="text-xl mb-4 mt-4 block">
            Company Description
          </label>
          <textarea
            type="text"
            className="w-full p-3 h-[200px] rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
            placeholder="Brief description of your company and what you do..."
          />
          <div className="my-9">
            <span className="flex items-center gap-x-4 mt-3">
              <input type="checkbox" className="w-5 h-5 rounded-full" />
              <p className=" text-medium font-medium">
                I agree to the{" "}
                <strong>
                  <i>Terms of Service</i>{" "}
                </strong>{" "}
                and{" "}
                <strong>
                  <i>Privacy Policy*</i>
                </strong>
              </p>
            </span>
            <span className="flex items-center gap-x-4 mt-3">
              <input type="checkbox" className="w-5 h-5 rounded-full" />
              <p className=" text-medium font-medium">
                Send me hiring tips and platform updates via email
              </p>
            </span>
          </div>
          <button className="w-[700px] py-5 px-5 block bg-[#309689] rounded-lg text-white text-xl font-medium m-auto">
            Register Company
          </button>
          <p className="text-center mt-8 text-normal">
            Already have an account?{" "}
            <Link to="" className="text-[#309689]">
              Sign in
            </Link>
          </p>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default RegisterYourCompany;
