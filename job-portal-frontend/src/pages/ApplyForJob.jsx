import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import applyForJob from "../services/applyForJobAPI";
import { useDispatch } from "react-redux";
import { addJobApplication } from "../utils/jobApplicationsSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ApplyForJob = () => {
  const dispatch= useDispatch();
  const navigate=useNavigate();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [resumeFile, setResumeFile] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [coverLetter, setCoverLetter] = useState();
  const [linkedInProfileLink, setLinkedInProfileLink] = useState();
  const [gitHubProfileLink, setGitHubProfileLink] = useState();
  const [portfolioProfileLink, setPortfolioProfileLink] = useState();
  const [startDate, setStartDate] = useState();
  const [aboutYourSelf, setAboutYourSelf] = useState();
  const { _id } = useParams();
  const jobs = useSelector((store) => store?.jobs?.jobs);
  const job = jobs.find((job) => job._id === _id);
  console.log("Job details: ", job);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await applyForJob({
      fullName,
      email,
      resumeFile,
      phoneNumber,
      coverLetter,
      linkedInProfileLink,
      gitHubProfileLink,
      portfolioProfileLink,
      startDate,
      aboutYourSelf,
      jobId:_id
    });
    
    dispatch(addJobApplication(response.JobApplication))
    toast.success("Job Submitted Successfully")
    navigate('/view-applied-jobs')
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setResumeFile("");
    setAboutYourSelf("");
    setCoverLetter("");
    setLinkedInProfileLink("");
    setGitHubProfileLink("");
    setPortfolioProfileLink("");
    setStartDate("");
    console.log("apply for job:", response.JobApplication)
    }catch(err){
      console.log("Error in job submitting", err)
    }
    
  };


  return (
    <div className="container">
      <Header />
      <section>
        <div className="py-10  ">
          <h1 className="text-5xl font-bold mb-10 text-center text-[#FFFFFF]">
            Apply for Job
          </h1>
          {job ? (
            <div className="bg-[#F6FBFF] p-12 rounded-lg text-[#011F5B] shadow-[0px_-5px_23px_0px_#011F5B]">
              <h2 className="text-[35px] font-semibold mb-2 mt-4">
                {job?.title}
              </h2>
              <p className=" mb-2 text-[25px] font-normal">
                Company: {job?.company}
              </p>
              <p className=" mb-2 text-[22px]  font-normal">
                Location: {job?.location}
              </p>
              <p className="mb-2 text-[22px]  font-normal">
                Job Type : {job?.type}
              </p>
              <p className=" mb-10 text-[22px]  font-normal">
                Salary Range: ${job?.salary.min} to ${job?.salary.max}{" "}
              </p>

              <h3 className="text-center text-4xl font-bold mb-7">
                Application From
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between flex-wrap">
                  <div className="flex items-center flex-wrap w-[500px]">
                    <label htmlFor="" className="text-xl mb-4 block">
                      Full Name*
                    </label>
                    <input
                      className="w-full p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#FFFFFF]  outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
                      type="text"
                      placeholder="Enter Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center flex-wrap w-[500px]">
                    <label htmlFor="" className="text-xl mb-4 block">
                      Email Address*
                    </label>
                    <input
                      className="w-full p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
                      type="email"
                      placeholder="Enter Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center flex-wrap w-[500px]">
                    <label htmlFor="" className="text-xl mb-4 mt-4 block">
                      Phone Number*
                    </label>
                    <input
                      className="w-full p-3 rounded-lg border border-[#011F5B] text-[#011F5B] bg-[#fff] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center flex-wrap w-[500px]">
                    <label htmlFor="" className="text-xl mb-4 mt-4 block">
                      Resume/CV*
                    </label>
                    <input
                      className="w-full p-3 rounded-lg border border-[#011F5B]   text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
                      type="file"
                      placeholder="Enter Your Resume/CV"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setResumeFile(e.target.files[0])}
                    />
                  </div>
                </div>

                <h3 className="text-center text-4xl font-bold mb-7 mt-7">
                  Additional Information
                </h3>
                <label htmlFor="" className="text-xl mb-4 mt-4 block">
                  Cover Letter*
                </label>
                <textarea
                  name=""
                  id=""
                  className="w-full h-[200px] p-3 rounded-lg border border-[#011F5B]   text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg placeholder:text-[#011F5B] placeholder:text-[16px]"
                  placeholder="Cover Letter"
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                ></textarea>

                <div className="flex items-center gap-x-5 ">
                  <div className="flex items-center flex-wrap w-[400px]">
                    <label htmlFor="" className="text-xl mb-4 mt-4 block">
                      LinkedIn Profile*
                    </label>
                    <input
                      type="url"
                      className="w-full p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
                      placeholder="Enter LinkedIn Profile Address"
                      value={linkedInProfileLink}
                      onChange={(e) => setLinkedInProfileLink(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center flex-wrap w-[400px]">
                    <label htmlFor="" className="text-xl mb-4 mt-4 block">
                      Github Profile
                    </label>
                    <input
                      type="url"
                      className="w-full p-3 rounded-lg border border-[#011F5B]   text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
                      placeholder="Enter Github Profile Address"
                      value={gitHubProfileLink}
                      onChange={(e) => setGitHubProfileLink(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center flex-wrap w-[400px]">
                    <label htmlFor="" className="text-xl mb-4 mt-4 block">
                      Portfolio Website
                    </label>
                    <input
                      type="url"
                      className="w-full p-3 rounded-lg border border-[#011F5B] text-[#011F5B] bg-[#fff] outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
                      placeholder="Enter Portfolio Profile Address"
                      value={portfolioProfileLink}
                      onChange={(e) => setPortfolioProfileLink(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-around flex-wrap">
                  <div className="flex items-center flex-wrap w-[500px]">
                    <label htmlFor="" className="text-xl mb-4 mt-4 block">
                      Earliest Start Date*
                    </label>
                    <input
                      className="w-full p-3 rounded-lg border border-[#011F5B]   text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
                      type="date"
                      placeholder="Enter Starting Date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center flex-wrap w-[500px]">
                    <label htmlFor="" className="text-xl mb-4 mt-4 block">
                      How did you hear about us*
                    </label>
                    <input
                      className="w-full p-3 rounded-lg border border-[#011F5B]  text-[#011F5B] bg-[#fff]  outline-none font-medium text-lg block placeholder:text-[#011F5B] placeholder:text-[16px]"
                      type="text"
                      placeholder="Tell About Yourself"
                      value={aboutYourSelf}
                      onChange={(e) => setAboutYourSelf(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-x-5 mt-8">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    id="terms"
                    name="terms"
                  />
                  <label htmlFor="terms" className="text-lg  font-medium">
                    I am willing to relocate if necessary
                  </label>
                </div>
                <p className="text-center  mt-9">
                  By submitting this application, I certify that all information
                  provided is accurate and complete to the best of my knowledge.
                  I understand that any false statements or omissions may
                  disqualify me from further consideration for employment.
                </p>
                <div className="flex justify-center items-center pt-20">
                  <Link
                    to="/"
                    className="font-medium text-xl hover:text-[#309689] text-[#011F5B]"
                  >
                    Back
                  </Link>
                  <button
                    type="submit"
                    className="w-[700px] py-5 px-5 inline-block bg-[#309689] rounded-lg text-white text-xl font-medium ml-10"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
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

export default ApplyForJob;
