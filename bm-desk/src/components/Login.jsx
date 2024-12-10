import React, { useState } from "react";
import image1 from "../assets/Group 1.jpg";
import group1 from "../assets/login.png";
import image3 from "../assets/image 32.png";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validatePassword = (password) => {
    let error = "";
    if (password.length < 8) {
      error = "Password must be at least 8 characters long.";
    } else if (!/[A-Z]/.test(password)) {
      error = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      error = "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(password)) {
      error = "Password must contain at least one number.";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      error = "Password must contain at least one special character.";
    }
    return error;
  };

  const handlePassword = (e) => {
    const newpassword = e.target.value;
    setPassword(newpassword);

    const error = validatePassword(newpassword);
    setPasswordError(error);
  };

  return (
    <div className="relative flex h-screen ">
      <div className="relative hidden md:block">
        <div className="overflow-hidden w-[50vw] h-screen">
          <img src={group1} alt="Group" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 p-6 lg:p-8 2xl:p-14">
          <div className="flex gap-2 items-center">
            <div>
              <img
                src={image1}
                alt="IMAGE1"
                className="z-50 top-0 w-[24px] h-[24px] md:w-[20px] lg:w-[22px] 2xl:w-[32px] md:h-[20x] lg:h-[22px] 2xl:h-[32px] object-contain"
              />
            </div>
            <div className="top-4 text-[#FFF] text-[17px] md:text-[20px] lg:text-[24px] 2xl:text-[28px] font-bold font-Poppins">
              BM Desk
              <span className="inline-block w-1 h-1 rounded-full bg-blue-500"></span>
            </div>
          </div>
        </div>
        {/* Text positioned on bottom of the background */}
        <div className="absolute border-l-[2px] pl-3 border-l-[#0095FF] bottom-10 left-10 text-[#FFF] font-Poppins font-semibold text-[12px] md:text-xl lg:text-[24px] 2xl:text-[34px]">
          <p> Streamlining IT Support</p>
          <p>For Effortless Issue</p>
          <p>Management</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full flex justify-center items-center p-4">
        <div className="flex flex-col gap-5 items-center w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={image1}
              alt="IMAGE1"
              className="w-[28px] h-[28px] md:w-[30px] lg:w-[38px] 2xl:w-[68px] 2xl:h-[68px] lg:h-[38px] md:h-[32px]"
            />
            <h1 className="text-[#141414] leading-none font-Poppins font-semibold text-[34px] md:text-[38px] lg:text-[42px] 2xl:text-[55px]">
              BM Desk
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 ml-0"></span>
            </h1>
          </div>
          {/* Welcome Message */}
          <div className="flex flex-col items-center gap-1">
            <h2 className="font-semibold text-[20px] md:text-[24px] font-Inter">
              Welcome Back!
            </h2>
            <p className="text-[#878A99] text-[14px] md:text-[16px] font-normal font-Inter">
              Sign in to continue to BM Desk
            </p>
          </div>
          {/* Login Form */}
          <form className="flex flex-col gap-4 w-full lg:w-[380px] 2xl:w-[457px] font-Inter">
            <div>
              <label
                htmlFor="username"
                className="block mb-1 text-[#212529] font-normal text-[14px] md:text-[16px] font-Inter"
              >
                Username
              </label>
              <div className="w-full rounded-[5px] border-[#CED4DA] overflow-hidden border-[1px]">
                <input
                  id="username"
                  type="text"
                  className="border-0 pl-4 py-2 md:w-70 lg:w-80 rounded-lg border-[#CED4DA] font-Inter text-[14px] md:text-[16px] outline-none"
                  placeholder="Enter username"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-[#212529] font-normal text-[14px] font-Inter md:text-[16px]"
              >
                Password
              </label>
              <div className="flex items-center relative w-full rounded-[5px] border-[#CED4DA] overflow-hidden border-[1px]">
                <input
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={handlePassword}
                  onFocus={() => setPasswordTouched(true)} // Track if field was touched
                  className="pl-4 py-2 md:w-70 lg:w-80 outline-none border-0 font-Inter  text-[14px]  md:text-[16px]"
                  placeholder="Enter password"
                />
                {passwordVisible ? (
                  <PiEyeLight
                    className="absolute right-5 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <PiEyeSlash
                    className="absolute right-5 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              {/* Error Message */}
              {passwordTouched && passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 rounded-sm" />
              <label className="text-[#212529] font-medium text-[14px] md:text-[16px] font-Inter">
                Remember Me
              </label>
            </div>
            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="w-full py-2 rounded-[5px] font-Inter bg-[#0095FF] text-white font-bold text-[14px] md:text-[16px] hover:bg-blue-700"
              >
                Sign In
              </button>
              <button className="w-full py-2 rounded-[5px] border border-[#0095FF] text-[#0095FF] flex items-center justify-center gap-2 hover:bg-blue-100">
                <img
                  src={image3}
                  alt="Google Icon"
                  className="w-4 h-4 md:w-5 md:h-5 font-Inter"
                />
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
