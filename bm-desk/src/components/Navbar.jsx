import React, { useState,useRef,useEffect } from "react";
import image1 from "../assets/Group 1.jpg";
import { FiSearch } from "react-icons/fi";
import { PiBellThin } from "react-icons/pi";
import Avatarimage from "../assets/Avatar.png";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [circleDropdown, setCircleDropdown] = useState(false);
  const dropdownRef = useRef(null);
 

  const toggleDropdown = () => {
    setCircleDropdown((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setCircleDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between p-3 border-b w-full">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-2">
          <img
            src={image1}
            alt="BM Desk Logo"
            className="z-50 w-[24px] h-[24px] md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px] 2xl:w-[33px] 2xl:h-[33px] object-contain"
          />
          <div className=" text-[#141414] text-[17px] md:text-[19px] lg:text-[21px] 2xl:text-[27px] font-bold font-poppins">
            BM Desk
            <span className="inline-block w-1 h-1 rounded-full bg-blue-500"></span>
          </div>
        </div>

        {/* Middle Section: Search Features */}
        <div className="flex items-center gap-2 bg-[#E8F3FF] p-2 rounded-md w-[150px] md:w-[200px] lg:w-[300px] 2xl:w-[463px] text-[#0E42D2]">
          <FiSearch className="w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[22px] lg:h-[22px] 2xl:w-[24px] 2xl:h-[24px]" />
          <input
            type="text"
            placeholder="Search Features"
            className="bg-transparent placeholder-[#0E42D2] border-none outline-none text-[10px] md:text-[11px] lg:text-[12px] 2xl:text-sm w-full"
          />
        </div>

        {/* Right Section: Icons and Profile */}
        <div className="flex items-center gap-4">
          <PiBellThin className="text-[19px] md:text-[23px] lg:text-[27px] 2xl:text-[31px]" />
          <div>
            <img className="w-[40px] h-[40px]" src={Avatarimage} />
          </div>
          {/* <CgProfile className="text-[19px] md:text-[23px] lg:text-[27px] 2xl:text-[31px]" /> */}
          <div className="text-[14px] font-medium">
            Eva Mandes
            <p className="text-[12px] md:text-[13px] text-[#71717A]">
              Eva@example.com
            </p>
          </div>
          {/* dropdown circle */}
          <div>
          <div className="relative text-nowrap" ref={dropdownRef}>
      <button onClick={toggleDropdown}>
        <IoIosArrowDropdownCircle className="text-[11px] md:text-[17px] lg:text-[21px] 2xl:text-[26px]" />
      </button>
      {circleDropdown && (
        <div className="absolute right-3 bg-white border border-gray-300 shadow-md rounded mt-1">
          <ul>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer "
              onClick={() => setCircleDropdown(false)}
            >
              Logout
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setCircleDropdown(false);
                navigate("/accountsettings");
              }}
            >
              Account Settings
            </li>
          </ul>
        </div>
      )}
    </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
