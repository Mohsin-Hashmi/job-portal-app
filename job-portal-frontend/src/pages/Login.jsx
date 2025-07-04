import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginAPI } from "../services/loginAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import facebookLogo from "../assets/facebook-logo.png";
import googleIcon from "../assets/google-icon.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Validating the login

  const validate = () => {
    const isError = {};
    if (!email) {
      isError.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      isError.email = "Invalid email address";
    }
    if (!password) {
      isError.password = "Password is required";
    }
    return isError; //return null
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  // Handle Submit function 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setError(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    try {
      const response = await loginAPI({ email, password });

      if (!response?.success) {
        setError({ api: response?.message || "Login failed" });
        return;
      }

      console.log('response is ', response.user);
      dispatch(addUser(response.user));
      localStorage.setItem("token", response.token);
      if(response.user.isAdmin){
        navigate("/company-dashboard")
      }else{
        navigate("/");
      }   
    } catch (err) {
      console.log("Error is login API ");
    }
  };
  return (
    <>
      <div className=" flex items-center justify-center min-h-screen  ">
        <section className=" bg-[#F6FBFF] w-[400px] m-auto rounded-lg p-5 shadow-[0px_-5px_23px_0px_#011F5B]">
          <h1 className="text-[28px] font-semibold text-center text-[#011F5B]">
            Welcome Back
          </h1>
          <form action="" onSubmit={handleSubmit}>  
            <input
              className={`w-full py-[12px] pl-[11px] mb-[6px] mt-[22px] outline-none border border-[#011F5B]  text-[#011F5B] rounded-lg placeholder:text-[#011F5B] ${
                errors.email ? "border border-red-500" : ""
              }`}
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="text-red-500 text-xs">{errors.email}</div>
            )}
            <input
              className={`w-full py-[12px] pl-[11px] mb-[6px] mt-[22px] outline-none border border-[#011F5B]  text-[#011F5B] rounded-lg  placeholder:text-[#011F5B] ${
                errors.password ? "border border-red-500" : ""
              }`}
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="text-red-500 text-xs ">{errors.password}</div>
            )}
            <div className="flex items-top gap-x-2  my-4">
              <input
                type="checkbox"
                className=""
                onChange={handleShowPassword}
              />
              <p className="text-[12px] text-[#011F5B]">Show Password</p>
            </div>
            {errors.api && (
              <div className="text-red-500 text-xs mb-2">{errors.api}</div>
            )}
            <button
              type="submit"
              className="bg-[#309689] text-[#FFFFFF] w-full block text-center py-3 rounded-lg text-[16px] font-semibold"
            >
              Login
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-600 text-sm">Or With</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <Link
            to=""
            className="bg-[#1877F2] w-full flex items-end text-[#FFFFFF] gap-x-5 m-auto justify-center  text-center py-2 rounded-lg text-[14px] font-semibold"
          >
            <img src={facebookLogo} alt="" />
            Signup with Facebook
          </Link>
          <Link
            to=""
            className="bg-[#FFFFFF] text-gray-500 w-full flex items-end gap-x-5 mt-3 justify-center  text-center py-2 rounded-lg text-[14px] font-semibold"
          >
            <img src={googleIcon} alt="" />
            Signup with Google
          </Link>
          <p className="mt-[28px] text-center">
            Dno't have an account ?{" "}
            <span>
              <Link
                to="/auth/signup"
                className="mt-[28px] ml-[10px] hover:text-[#309689] text-[#011F5B]"
              >
                Sign Up
              </Link>
            </span>
          </p>
        </section>
      </div>
    </>
  );
};

export default Login;
