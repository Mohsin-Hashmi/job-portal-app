import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import phoneLogo from "../assets/phone-logo.png";
import emailLogo from "../assets/email-icon.png";
import locationLogo from "../assets/location-lcon.png";
import contactUsAPI from "../services/contactUsAPI";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await contactUsAPI({
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
      }
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      alert("Message sent successfully");
    } catch (err) {}
  };

  return (
    <div className="container">
      <Header />
      <section className="contactUs">
        <div className="wrapper py-[10px] ">
          <h2 className="text-center text-[#FFFFFF] text-[35px] font-bold mt-8">Contact Us </h2>
          <p className="text-center mt-[10px] mb-[50px] text-[#FFFFFF] font-[500] ">
            Any question or remarks? Just write us a message!
          </p>
          <div className="max-w-[1169px] p-[20px] flex  rounded-xl bg-[#F6FBFF] text-[#011F5B]  shadow-[0px_-5px_23px_0px_#011F5B]">
            <div className="bg-[#309689] w-[491px] py-[40px] pl-[40px] rounded-[10px]">
              <h4 className="text-[28px] text-[#FFFFFF]">
                Contact Information
              </h4>
              <p className="text-[18px] font-[500] text-[#FFFFFF] mt-[6px]">
                Say something to start a live chat!
              </p>
              <div className="w-[337px] pt-[111px]">
                <div className="flex gap-x-[25px] mb-[50px]">
                  <img src={phoneLogo} alt="phone logo" />
                  <p className="text-[#FFFFFF] font-[500]">+1012 3456 789</p>
                </div>
                <div className="flex gap-x-[25px] mb-[50px]">
                  <img src={emailLogo} alt="email logo" />
                  <p className="text-[#FFFFFF] font-[500]">demo@gmail.com</p>
                </div>
                <div className="flex gap-x-[25px] items-start">
                  <img src={locationLogo} alt="location logo" />
                  <p className="text-[#FFFFFF] font-[500]">
                    132 Dartmouth Street Boston, Massachusetts 02156 United
                    States
                  </p>
                </div>
              </div>
            </div>
            <div className="py-[60px] px-[50px] w-full">
              <form className="" onSubmit={handleSubmit}>
                <div className="flex flex-wrap justify-between gap-y-[46px] items-center ">
                  <div className="min-w-[300px]">
                    <label
                      className="text-xl  mb-[18px] ml-[3px] font-normal block"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="border border-[#011F5B] font-[500] text-[15px] placeholder:text-[13px] text-[#011F5B] block w-full p-[10px] outline-none rounded-lg transition-all duration-200 placeholder:text-[#011F5B]"
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter Your First Name"
                      required
                    />
                  </div>
                  <div className="min-w-[300px]">
                    <label
                      className="text-xl text-[#011F5B] mb-[18px] ml-[3px] font-normal block"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="border border-[#011F5B]  font-[500] text-[15px] placeholder:text-[13px] text-[#011F5B] block w-full p-[10px] outline-none rounded-lg transition-all duration-200 placeholder:text-[#011F5B]"
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter Your Last Name"
                      required
                    />
                  </div>
                  <div className="min-w-[300px]">
                    <label
                      className="text-xl text-[#011F5B] mb-[18px] ml-[3px] font-normal block"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="border border-[#011F5B]  font-[500] text-[15px] placeholder:text-[13px] text-[#011F5B] block w-full p-[10px] outline-none rounded-lg transition-all duration-200 placeholder:text-[#011F5B]" 
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <div className="min-w-[300px]">
                    <label
                      className="text-xl text-[#011F5B] mb-[18px] ml-[3px] font-normal block"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="border border-[#011F5B] font-[500] text-[15px] placeholder:text-[13px] text-[#011F5B] block w-full p-[10px] outline-none rounded-lg transition-all duration-200 placeholder:text-[#011F5B]"
                      type="tel"
                      id="phone"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter Your Phone Number"
                      required
                    />
                  </div>
                </div>
                <div className="mt-[20px]">
                  <label
                    className="text-xl text-[#fff] mb-[18px] ml-[3px] font-normal block"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="border border-[#011F5B]  h-[170px] font-[500] text-[15px] placeholder:text-[13px] text-[#011F5B] block w-full p-[10px] outline-none rounded-lg transition-all duration-200 placeholder:text-[#011F5B]"
                    type="text"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter Your Message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="py-[19px] px-[48px] mt-[45px] bg-[#309689] font-[500] text-[#FFFFFF]   rounded-xl float-right  "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
