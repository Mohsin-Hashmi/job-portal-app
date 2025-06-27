import React from "react";
import footerLogo from "../assets/footerLogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="pt-[100px] pb-[60px] text-white">
        <div className="flex justify-between items-start">
          <div className="max-w-[377px] ">
            <Link to='/'>
              <img src={footerLogo} alt="logo" />
            </Link>

            <p className="mt-[40px] text-[16px] font-normal">
              Empowering your career journey with opportunities that inspire
              growth and success. Join our community and discover your next big
              step in the world of work.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold mb-[24px]">Company</h3>
            <ul className="list-none">
              <li className="mb-[16px] text-[16px] font-normal hover:text-[#309689]">
                <Link to="">About Us</Link>
              </li>
              <li className="mb-[16px] text-[16px] font-normal hover:text-[#309689]">
                <Link to="">Our Team</Link>
              </li>
              <li className="mb-[16px] text-[16px] font-normal hover:text-[#309689]">
                <Link to="">Partners</Link>
              </li>
              <li className="mb-[16px] text-[16px] font-normal hover:text-[#309689]">
                <Link to="">For Candidates</Link>
              </li>
              <li className="mb-[16px] text-[16px] font-normal hover:text-[#309689]">
                <Link to="">For Employers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold mb-[24px]">
              Job Categories
            </h3>
            <ul className="list-none">
              <li className="mb-[16px] text-[16px] font-normal hover:text-[#309689]">
                <Link to="">Telecomunications</Link>
              </li>
              <li className="mb-[16px] text-[16px] font-normal hover:text-[#309689]">
                <Link to="">Hotels & Tourism</Link>
              </li>
              <li className="mb-[16px] text-[16px] font-normal hover:text-[#309689]">
                <Link to="">Construction</Link>
              </li>
              <li className="mb-[16px] text-[16px] font-normal hover:text-[#309689]">
                <Link to="">Education</Link>
              </li>
              <li className="mb-[16px] text-[16px] font-normal hover:text-[#309689]">
                <Link to="">Financial Services</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold mb-[24px]">Newsletter</h3>
            <input
              className="py-[20px] pl-[21px] w-[306px] bg-[#FFFFFF] text-[#011F5B] outline-none border-none rounded-xl placeholder:text-[#011F5B]"
              type="email"
              name=""
              id=""
              placeholder="Email Address"
            />
            <Link
              to=""
              className="w-[306px] text-white text-[18px] font-bold bg-[#309689] block text-center p-[20px] mt-[16px] rounded-xl"
            >
              Subscribe now
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center pt-[80px]">
          <p className="text-[14px] text-white font-normal">
            © Copyright Job Portal 2024. Designed by Figma.guru
          </p>
          <div className="flex gap-x-10">
            <Link to="" className="hover:text-[#309689]">
              Privacy Policy
            </Link>
            <Link to="" className="hover:text-[#309689]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
