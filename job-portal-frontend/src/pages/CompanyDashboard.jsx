import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const CompanyDashboard = () => {
  return (
    <>
      <div className="container">
        <Header />
        <section className="text-white pt-[100px] pb-[35px]">
          <h1 className="text-[70px] text-center font-bold">
            Welcome to Your Job Dashboard
          </h1>
          <p  className="text-[18px] text-center font-medium mt-3">Track your job applications, discover new opportunities, and manage your career progress all in one place. Stay organized and take the next step toward your dream job.</p>
          <Link to='/post-job' className="w-[700px] text-center m-auto mt-12 py-5 px-5 block bg-[#309689] rounded-lg text-white text-xl font-medium ">Post Job</Link>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default CompanyDashboard;
