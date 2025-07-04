import React, { useState } from "react";
import { Link } from "react-router-dom";
import facebookLogo from "../assets/facebook-logo.png";
import googleIcon from "../assets/google-icon.png";
import signupAPI from "../services/signupAPI";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import Validator from "validator";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // validation the fields
  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Invalid email address";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 3 || password.length > 20) {
      newErrors.password =
        "Password length should be between 3 to 20 characters";
    } else if (!Validator.isStrongPassword(password)) {
      newErrors.password = "Password is weak please make it strong";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  /**Handle Signup API Function */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setError(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    const response = await signupAPI({
      name,
      email,
      password,
      confirmPassword,
    });
    if (!response?.success) {
      setError({ api: response?.message || "Signup failed" });
      return;
    }
    dispatch(addUser(response?.user));
    navigate("/auth/login");
  };
  return (
    <>
      <div className=" flex items-center justify-center min-h-screen  ">
        <section className=" bg-[#F6FBFF] w-[400px] m-auto rounded-lg p-4 shadow-[0px_-5px_23px_0px_#011F5B]">
          <h1 className="text-[28px] font-semibold text-center text-[#011F5B]">
            Create An Account
          </h1>
          <form action="" onSubmit={handleSubmit}>
            <input
              className={`w-full py-[8px] pl-[11px] mb-[6px] mt-[22px] outline-none rounded-lg border border-[#011F5B] text-[#011F5B]  placeholder:text-[#011F5B] ${
                errors.name ? "border border-red-500" : ""
              }`}
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <div className="text-red-500 text-xs ">{errors.name}</div>
            )}
            <input
              className={`w-full py-[8px] pl-[11px] mb-[6px] mt-[18px] outline-none rounded-lg border border-[#011F5B] text-[#011F5B]  placeholder:text-[#011F5B]  ${
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
              className={`w-full py-[8px] pl-[11px] mb-[6px] mt-[18px] outline-none  rounded-lg border border-[#011F5B] text-[#011F5B]  placeholder:text-[#011F5B] ${
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
            <input
              className={`w-full py-[8px] pl-[11px] mb-[6px] mt-[18px] outline-none  rounded-lg border border-[#011F5B] text-[#011F5B]  placeholder:text-[#011F5B] ${
                errors.confirmPassword ? "border border-red-500" : ""
              }`}
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <div className="text-red-500 text-xs ">
                {errors.confirmPassword}
              </div>
            )}

            <div className="flex items-top gap-x-2  mb-2">
              <input
                type="checkbox"
                className=""
                onChange={handleShowPassword}
              />
              <p className="text-[12px]">Show Password</p>
            </div>
            {errors.api && (
              <div className="text-red-500 text-xs mb-2">{errors.api}</div>
            )}
            <button
              type="submit"
              className="bg-[#309689] w-full block text-center py-2 rounded-lg text-[14px] font-semibold text-[#FFFFFF]"
            >
              Sign Up
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-600 text-sm">Or With</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <Link
            to=""
            className="bg-[#1877F2] w-full flex items-end gap-x-5 m-auto justify-center text-[#FFFFFF] text-center py-2 rounded-lg text-[14px] font-semibold"
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
          <p className="mt-[10px] text-center">
            Already have an account?{" "}
            <span>
              <Link
                to="/auth/login"
                className="mt-[10px] ml-[10px] hover:text-[#309689] text-[#011F5B]"
              >
                Login
              </Link>
            </span>
          </p>
        </section>
      </div>
    </>
  );
};

export default SignUp;
