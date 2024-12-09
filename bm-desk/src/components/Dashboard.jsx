import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuRotateCcw } from "react-icons/lu";
import Avatariamge from "../assets/Avatar Image.png";
import { HiArrowRight } from "react-icons/hi";
import Ticketimageone from "../assets/Avatarimageone.png";
import Ticketimagetwo from "../assets/Avatarimagetwo.png";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { LuChevronRight } from "react-icons/lu";

function Dashboard() {
  // all time dropdown
  const [DropdownOpen, setDropdownOpen] = useState(false);
  const [alltimeOption, setAlltimeOption] = useState("All Time");
  // today dropdown
  const [todaydrop, setTodaydrop] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Today");

// all time dropdown
  const triggerDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };
  const alltimeOptionClick = (option) => {
    setAlltimeOption(option); // Update the selected option
    setDropdownOpen(false); // Close the dropdown
  };
  const todayDropdown = () => {
    setTodaydrop(!todaydrop);
  };
const handleOptionClick = (option) => {
    setSelectedOption(option); // Update the selected option
    setTodaydrop(false); // Close the dropdown
  };

  // graph
  const data = [
    { time: "9:30 AM", uv: 30 },
    { time: "9:34 AM", uv: 33},
    { time: "11:30 AM", uv: 40 },
    { time: "2:00 PM", uv: 25 },
    { time: "4:00 PM", uv: 50 },
    { time: "6:00 PM", uv: 40 },
    { time: "8:00 PM", uv: 110 },
    { time: "9:00 PM", uv: 100 },
  ];

  // tickets
  const tickets = [
    {
      image: Ticketimageone,
      title: "Ticket 3452",
      description: "Ticket - TICKT-7424 has been resolved",
      time: "36 min",
    },
    {
      image: Ticketimagetwo,
      title: "Ticket 3452",
      description: "Ticket - TICKT-7424 has been resolved",
      time: "1 Hr",
    },
    {
      image: Ticketimageone,
      title: "Ticket 3452",
      description: "Ticket - TICKT-7424 has been resolved",
      time: "Sept 06",
    },
  ]; 

  // recent tickets
  const items = [
    {
      id: 1,
      title: "Benchmark Learning (Educore)",
      description: "Glitches in the report card of y...",
      status: "Critical",
      svgPath: "M259.998 121.307C257.962 122.032 254.802 123.872 252.977 125.396C246.976 130.405 127.996 246.877 124.437 251.226C118.517 258.459 117.316 268.369 121.402 276.255C123.63 280.554 136.966 295.148 143.675 300.628C146.622 303.035 150.004 305.004 151.189 305.004C152.375 305.004 155.766 303.341 158.726 301.308C173.911 290.876 192.985 299.902 192.985 317.521C192.985 323.226 191.585 326.992 187.412 332.52C185.215 335.429 184.604 337.532 184.845 341.365C185.015 344.083 208.585 367.644 213.516 370.026C218.565 372.463 226.647 372.671 231.862 370.497C236.144 368.713 234.712 370.067 309.957 296.677C342.989 264.459 368.255 239.036 369.629 236.632C372.834 231.025 372.922 221.255 369.819 215.454C368.643 213.253 362.301 205.937 355.729 199.195C346.222 189.443 343.222 186.938 341.05 186.938C339.55 186.938 335.328 188.739 331.668 190.94C326.012 194.343 324.175 194.942 319.398 194.942C312.417 194.942 306.156 191.96 301.877 186.595C299.019 183.013 298.81 182.189 298.81 174.556C298.81 166.682 298.957 166.156 302.571 161.138C305.256 157.41 306.333 154.882 306.333 152.304C306.333 149.007 305.177 147.536 293.042 135.391C282.554 124.895 278.904 121.86 275.739 121.001C270.451 119.565 264.567 119.68 259.998 121.307Z",
    },
    {
      id: 2,
      title: "Benchmark School Manager",
      description: "Glitches in the reprt card of y...",
      status: "Critical",
      svgPath: "M259.998 121.307C257.962 122.032 254.802 123.872 252.977 125.396C246.976 130.405 127.996 246.877 124.437 251.226C118.517 258.459 117.316 268.369 121.402 276.255C123.63 280.554 136.966 295.148 143.675 300.628C146.622 303.035 150.004 305.004 151.189 305.004C152.375 305.004 155.766 303.341 158.726 301.308C173.911 290.876 192.985 299.902 192.985 317.521C192.985 323.226 191.585 326.992 187.412 332.52C185.215 335.429 184.604 337.532 184.845 341.365C185.015 344.083 208.585 367.644 213.516 370.026C218.565 372.463 226.647 372.671 231.862 370.497C236.144 368.713 234.712 370.067 309.957 296.677C342.989 264.459 368.255 239.036 369.629 236.632C372.834 231.025 372.922 221.255 369.819 215.454C368.643 213.253 362.301 205.937 355.729 199.195C346.222 189.443 343.222 186.938 341.05 186.938C339.55 186.938 335.328 188.739 331.668 190.94C326.012 194.343 324.175 194.942 319.398 194.942C312.417 194.942 306.156 191.96 301.877 186.595C299.019 183.013 298.81 182.189 298.81 174.556C298.81 166.682 298.957 166.156 302.571 161.138C305.256 157.41 306.333 154.882 306.333 152.304C306.333 149.007 305.177 147.536 293.042 135.391C282.554 124.895 278.904 121.86 275.739 121.001C270.451 119.565 264.567 119.68 259.998 121.307Z",
    },
    {
      id: 3,
      title: "BM Asset Management System",
      description: "Glitches in the report card of y...",
      status: "Critical",
      svgPath: "M259.998 121.307C257.962 122.032 254.802 123.872 252.977 125.396C246.976 130.405 127.996 246.877 124.437 251.226C118.517 258.459 117.316 268.369 121.402 276.255C123.63 280.554 136.966 295.148 143.675 300.628C146.622 303.035 150.004 305.004 151.189 305.004C152.375 305.004 155.766 303.341 158.726 301.308C173.911 290.876 192.985 299.902 192.985 317.521C192.985 323.226 191.585 326.992 187.412 332.52C185.215 335.429 184.604 337.532 184.845 341.365C185.015 344.083 208.585 367.644 213.516 370.026C218.565 372.463 226.647 372.671 231.862 370.497C236.144 368.713 234.712 370.067 309.957 296.677C342.989 264.459 368.255 239.036 369.629 236.632C372.834 231.025 372.922 221.255 369.819 215.454C368.643 213.253 362.301 205.937 355.729 199.195C346.222 189.443 343.222 186.938 341.05 186.938C339.55 186.938 335.328 188.739 331.668 190.94C326.012 194.343 324.175 194.942 319.398 194.942C312.417 194.942 306.156 191.96 301.877 186.595C299.019 183.013 298.81 182.189 298.81 174.556C298.81 166.682 298.957 166.156 302.571 161.138C305.256 157.41 306.333 154.882 306.333 152.304C306.333 149.007 305.177 147.536 293.042 135.391C282.554 124.895 278.904 121.86 275.739 121.001C270.451 119.565 264.567 119.68 259.998 121.307Z",
    },
    {
      id: 4,
      title: "DocMe-For Schools",
      description: "Glitches in the report card of y...",
      status: "Critical",
      svgPath: "M259.998 121.307C257.962 122.032 254.802 123.872 252.977 125.396C246.976 130.405 127.996 246.877 124.437 251.226C118.517 258.459 117.316 268.369 121.402 276.255C123.63 280.554 136.966 295.148 143.675 300.628C146.622 303.035 150.004 305.004 151.189 305.004C152.375 305.004 155.766 303.341 158.726 301.308C173.911 290.876 192.985 299.902 192.985 317.521C192.985 323.226 191.585 326.992 187.412 332.52C185.215 335.429 184.604 337.532 184.845 341.365C185.015 344.083 208.585 367.644 213.516 370.026C218.565 372.463 226.647 372.671 231.862 370.497C236.144 368.713 234.712 370.067 309.957 296.677C342.989 264.459 368.255 239.036 369.629 236.632C372.834 231.025 372.922 221.255 369.819 215.454C368.643 213.253 362.301 205.937 355.729 199.195C346.222 189.443 343.222 186.938 341.05 186.938C339.55 186.938 335.328 188.739 331.668 190.94C326.012 194.343 324.175 194.942 319.398 194.942C312.417 194.942 306.156 191.96 301.877 186.595C299.019 183.013 298.81 182.189 298.81 174.556C298.81 166.682 298.957 166.156 302.571 161.138C305.256 157.41 306.333 154.882 306.333 152.304C306.333 149.007 305.177 147.536 293.042 135.391C282.554 124.895 278.904 121.86 275.739 121.001C270.451 119.565 264.567 119.68 259.998 121.307Z",
    },
    {
      id: 5,
      title: "Benchmark Learning (Educore)",
      description: "Glitches in the report card of y...",
      status: "Critical",
      svgPath: "M259.998 121.307C257.962 122.032 254.802 123.872 252.977 125.396C246.976 130.405 127.996 246.877 124.437 251.226C118.517 258.459 117.316 268.369 121.402 276.255C123.63 280.554 136.966 295.148 143.675 300.628C146.622 303.035 150.004 305.004 151.189 305.004C152.375 305.004 155.766 303.341 158.726 301.308C173.911 290.876 192.985 299.902 192.985 317.521C192.985 323.226 191.585 326.992 187.412 332.52C185.215 335.429 184.604 337.532 184.845 341.365C185.015 344.083 208.585 367.644 213.516 370.026C218.565 372.463 226.647 372.671 231.862 370.497C236.144 368.713 234.712 370.067 309.957 296.677C342.989 264.459 368.255 239.036 369.629 236.632C372.834 231.025 372.922 221.255 369.819 215.454C368.643 213.253 362.301 205.937 355.729 199.195C346.222 189.443 343.222 186.938 341.05 186.938C339.55 186.938 335.328 188.739 331.668 190.94C326.012 194.343 324.175 194.942 319.398 194.942C312.417 194.942 306.156 191.96 301.877 186.595C299.019 183.013 298.81 182.189 298.81 174.556C298.81 166.682 298.957 166.156 302.571 161.138C305.256 157.41 306.333 154.882 306.333 152.304C306.333 149.007 305.177 147.536 293.042 135.391C282.554 124.895 278.904 121.86 275.739 121.001C270.451 119.565 264.567 119.68 259.998 121.307Z",
    },
  ];

  return (
    <div>
      {/* Activity dashboard */}
      <div className="flex flex-row justify-between p-2 w-full ">
        <div className="font-semibold 2xl:text-[32px] lg:text-[22px] md:text-[18px] text-[16px] normal font-inter text-[#4E5969]">
          Activity Dashboard
        </div>
        <div className="relative">
      {/* Dropdown Trigger */}
      <div
        className="flex flex-row justify-center items-center gap-5 2xl:w-[153px] 2xl:h-[50px] lg:w-[140px] lg:h-[30px] md:w-[110px] md:h-[20px] py-[10px] px-[21px] rounded-md bg-[#E8F3FF] cursor-pointer"
        onClick={triggerDropdown}
      >
        <div className="font-inter font-normal 2xl:text-lg lg:text-[12px] md:text-[8px] text-[#1D2129]">
          {alltimeOption}
        </div>
        <div className="2xl:w-[20px] 2xl:h-[18px] md:h-[16px] text-[24px] text-[#C8CAD8] mt-[-4px]">
          <RiArrowDropDownLine />
        </div>
      </div>

      {/* Dropdown Menu */}
      {DropdownOpen && (
        <div className="absolute text-nowrap top-[40px] left-0 w-full bg-white border border-gray-300 rounded-xl shadow-lg z-10">
          <ul className="py-2">
            <li
              className="px-4 py-2 font-inter font-normal 2xl:text-lg lg:text-[14px] md:text-[8px] text-[#1D2129] hover:bg-[#E8F3FF] cursor-pointer"
              onClick={() => alltimeOptionClick("Option 1")}
            >
              Option 1
            </li>
            <li
              className="px-4 py-2 font-inter font-normal 2xl:text-lg lg:text-[14px] md:text-[8px] text-[#1D2129] hover:bg-[#E8F3FF] cursor-pointer"
              onClick={() => alltimeOptionClick("Option 2")}
            >
              Option 2
            </li>
            <li
              className="px-4 py-2 font-inter font-normal 2xl:text-lg lg:text-[14px] md:text-[8px] text-[#1D2129] hover:bg-[#E8F3FF] cursor-pointer"
              onClick={() => alltimeOptionClick("Option 3")}
            >
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
          {/* 1 Card */}
          <div className="border-[1px]  2xl:p-[36px] lg:p-[10px] md:[5px] rounded-2xl text-[#E5E6EB]  bg-[#FFF]  justify-center items-center">
            <div className="flex flex-col gap-[36px]">
              {/* profile name */}
              <div className="flex flex-row items-center justify-between">
                <div className="text-[#4E5969] font-inter normal font-semibold 2xl:text-xl lg:text-[18px] md:text-[16px]">
                  Profile
                </div>
                <div className="2xl:w-[19px] 2xl:h-[19px] lg:w-[15px] lg:h-[15px] md:w-[10px] md:h-[10px]  text-[#4E5969]">
                  <LuRotateCcw />
                </div>
              </div>

              {/* pic */}
              <div className="flex flex-col items-center ">
                <div className="relative w-[50px] h-[50px]  sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px] 2xl:w-[100px] 2xl:h-[100px]">
                  {/* SVG Circle */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 101 101"
                    fill="none"
                    className="absolute inset-0 w-full h-full"
                  >
                    <circle
                      cx="50.6488"
                      cy="50.4159"
                      r="49.0119"
                      stroke="#C9CDD4"
                      strokeWidth="2.22782"
                    />
                  </svg>
                  {/* Centered Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={Avatariamge}
                      alt="Avatar"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="font-inter font-semibold 2xl:text-[20px] lg:text-[15px] md:[10px] normal text-[#1D2129]">
                  Maria Joyce
                </div>
                <div className="text-[#86909C] font-inter 2xl:text-[16px] lg:text-[11px] md:[6px]  normal font-normal">
                  IT Support
                </div>
              </div>

              {/* botom card */}
              <div className="flex flex-row 2xl:gap-[16px] lg:gap-[10px] md:gap-[2px] justify-center items-center">
                <div className="border-[0.44px] border-[#E5E6EB] rounded-[9px] flex flex-row items-center gap-[9px] px-2 py-[6px]">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 11 12"
                      fill="none"
                    >
                      <circle
                        cx="5.45451"
                        cy="5.59025"
                        r="5.42033"
                        fill="#00B42A"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <p className="text-[#4E5969] text-[10px] normal font-normal">
                      Total
                    </p>
                    <p className="text-[#1D2129] text-[14px] normal font-bold">
                      562
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="border-[0.44px] border-[#E5E6EB] rounded-[9px] flex flex-row items-center gap-[9px] px-2 py-[6px]">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 11 12"
                      fill="none"
                    >
                      <circle
                        cx="5.50285"
                        cy="5.59025"
                        r="5.42033"
                        fill="#165DFF"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <p className="text-[#4E5969] text-[10px] normal font-normal">
                      Active
                    </p>
                    <p className="text-[#1D2129] text-[14px] normal font-bold">
                      562
                    </p>
                  </div>
                </div>

                {/* 3 */}

                <div className="border-[0.44px] border-[#E5E6EB] rounded-[9px] flex flex-row items-center gap-[9px] px-2 py-[6px]">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 11 12"
                      fill="none"
                    >
                      <circle
                        cx="5.55119"
                        cy="5.59025"
                        r="5.42033"
                        fill="#F53F3F"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <p className="text-[#4E5969] text-[10px] normal font-normal">
                      Escalated
                    </p>
                    <p className="text-[#1D2129] text-[14px] normal font-bold">
                      562
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd card */}

          <div className="flex flex-col justify-between border-[1px]  2xl:p-[36px] lg:p-[10px] md:p-[5px]  rounded-2xl text-[#E5E6EB]  bg-[#FFF] ">
            <div className="flex flex-row items-center justify-between">
              <div className="text-[#4E5969] font-inter font-semibold normal 2xl:text-[18px] lg:text-[16px] md:text-[12px]">
                <p>Assigned </p>Tickets
              </div>
              <div className="2xl:w-[19px] 2xl:h-[19px] lg:w-[15px] lg:h-[15px] md:w-[10px] md:h-[10px] text-[#4E5969]">
                <LuRotateCcw />
              </div>
            </div>

            <div className="flex flex-row 2xl:gap-[15px] justify-center  lg:gap-[10px] md:gap-[8px] items-center">
              <div className="bg-[#E8F3FF] 2xl:p-[19px] lg:p-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 41 41"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.009 0.845255C22.7721 0.921867 22.4239 1.06397 22.2353 1.16102C21.8502 1.35929 22.0309 1.18492 10.0003 12.9708C3.04674 19.783 1.28278 21.5513 1.05271 21.9402C0.335393 23.1529 0.387408 24.7562 1.18189 25.9215C1.55343 26.4666 4.65223 29.6205 5.01092 29.8187C5.3549 30.0089 5.79005 30.0447 6.14224 29.9119C6.26351 29.8661 6.56439 29.6707 6.81092 29.4776C7.36772 29.0413 7.77946 28.8568 8.45823 28.739C10.243 28.4293 11.9499 29.6382 12.2846 31.4492C12.4343 32.2587 12.2039 33.2632 11.7262 33.8839C11.5985 34.05 11.388 34.3235 11.2586 34.4916C10.9316 34.9165 10.8399 35.3011 10.9558 35.7616C11.0384 36.09 11.2378 36.327 12.7791 37.9299C14.6442 39.8696 15.1012 40.2368 15.9838 40.5049C16.424 40.6386 16.6571 40.6617 17.2403 40.6294C17.9944 40.5877 18.4046 40.4625 19.0223 40.0857C19.4838 39.8042 39.6501 20.0513 39.983 19.5547C40.4201 18.9026 40.579 18.3731 40.5877 17.5396C40.597 16.6351 40.4492 16.1011 40.0103 15.4542C39.8384 15.2009 38.9128 14.1932 37.9532 13.2146C36.4072 11.638 36.1692 11.4255 35.8626 11.3476C35.3714 11.2228 34.9566 11.3601 34.2836 11.87C33.5405 12.433 32.8829 12.6383 31.9919 12.5858C30.584 12.5028 29.5247 11.7454 29.0154 10.4576C28.8961 10.1561 28.8577 9.87694 28.858 9.31442C28.8586 8.25916 28.9929 7.94221 29.9373 6.76616C30.2198 6.41436 30.3016 5.74992 30.1156 5.3168C30.0499 5.16358 29.2253 4.25269 28.2249 3.22814C26.3819 1.34065 26.037 1.06561 25.2078 0.822302C24.6354 0.654429 23.5648 0.665553 23.009 0.845255Z"
                    fill="#165DFF"
                  />
                </svg>
              </div>

              <div className="2xl:text-[68px] lg:text-[46px] normal font-semibold font-inter text-[#165DFF]">
                32
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="font-inter text-[14px] normal font-semibold text-[#1D2129]">
                Continue
              </div>
              <div className="w-[18px] h-[18px] text-[18px] text-[#181D27]">
                <HiArrowRight />
              </div>
            </div>
          </div>

          {/* 3rd card */}

          <div className="flex flex-col justify-between border-[1px]  2xl:p-[36px] lg:p-[10px] md:p-[5px]  rounded-2xl text-[#E5E6EB]  bg-[#FFF] ">
            <div className="flex flex-row items-center justify-between">
              <div className="text-[#4E5969] font-inter font-semibold normal 2xl:text-[18px] lg:text-[16px] md:text-[12px]">
                <p>To Do</p>
              </div>
              <div className="2xl:w-[19px] 2xl:h-[19px] lg:w-[15px] lg:h-[15px] md:w-[10px] md:h-[10px] text-[#4E5969]">
                <LuRotateCcw />
              </div>
            </div>

            <div className="flex flex-row 2xl:gap-[15px] justify-center lg:gap-[10px] md:gap-[8px] items-center">
              <div className="bg-[#FFF7E8] 2xl:p-[19px] lg:p-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.3596 0.845255C23.1227 0.921867 22.7745 1.06397 22.5859 1.16102C22.2008 1.35929 22.3815 1.18492 10.3509 12.9708C3.39733 19.783 1.63337 21.5513 1.4033 21.9402C0.685979 23.1529 0.737994 24.7562 1.53247 25.9215C1.90402 26.4666 5.00281 29.6205 5.36151 29.8187C5.70548 30.0089 6.14063 30.0447 6.49283 29.9119C6.61409 29.8661 6.91498 29.6707 7.1615 29.4776C7.71831 29.0413 8.13004 28.8568 8.80882 28.739C10.5935 28.4293 12.3005 29.6382 12.6352 31.4492C12.7849 32.2587 12.5545 33.2632 12.0768 33.8839C11.9491 34.05 11.7386 34.3235 11.6092 34.4916C11.2822 34.9165 11.1905 35.3011 11.3064 35.7616C11.389 36.09 11.5884 36.327 13.1297 37.9299C14.9948 39.8696 15.4518 40.2368 16.3344 40.5049C16.7746 40.6386 17.0077 40.6617 17.5909 40.6294C18.345 40.5877 18.7552 40.4625 19.3729 40.0857C19.8344 39.8042 40.0007 20.0513 40.3336 19.5547C40.7707 18.9026 40.9296 18.3731 40.9383 17.5396C40.9476 16.6351 40.7998 16.1011 40.3609 15.4542C40.189 15.2009 39.2634 14.1932 38.3038 13.2146C36.7577 11.638 36.5198 11.4255 36.2132 11.3476C35.722 11.2228 35.3072 11.3601 34.6341 11.87C33.8911 12.433 33.2335 12.6383 32.3424 12.5858C30.9346 12.5028 29.8753 11.7454 29.366 10.4576C29.2467 10.1561 29.2082 9.87694 29.2086 9.31442C29.2092 8.25916 29.3434 7.94221 30.2879 6.76616C30.5704 6.41436 30.6522 5.74992 30.4662 5.3168C30.4005 5.16358 29.5759 4.25269 28.5755 3.22814C26.7325 1.34065 26.3876 1.06561 25.5584 0.822302C24.986 0.654429 23.9153 0.665553 23.3596 0.845255Z"
                    fill="#FF7D00"
                  />
                </svg>
              </div>

              <div className="2xl:text-[68px] lg:text-[46px] normal font-semibold font-inter text-[#FF7D00]">
                32
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="font-inter text-[14px] normal font-semibold text-[#1D2129]">
                Continue
              </div>
              <div className="w-[18px] h-[18px] text-[18px] text-[#181D27]">
                <HiArrowRight />
              </div>
            </div>
          </div>

          {/* 4th Card */}
          <div>
            <div className="flex h-full flex-col justify-between  border-[1px]  px-[16px] 2xl:py-[32px] lg:py-[10px]  rounded-2xl text-[#E5E6EB] bg-[#FFF]">
              <div className="flex flex-col gap-[27px]">
                {/* Header */}
                <div className="flex flex-row items-center justify-between">
                  <div className="text-[#4E5969] font-inter font-semibold normal text-[20px]">
                    My Tickets
                  </div>
                  <div className="w-[28px] h-[28px] text-[28px] text-[#4E5969]">
                    <HiArrowRight />
                  </div>
                </div>

                {/* Ticket List */}
                <div className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px]">
    <div className="flex flex-col gap-[16px]">
      {tickets.map((ticket, index) => (
        <div key={index} className="flex items-center gap-[16px]">
          <img
            src={ticket.image}
            className="rounded-[64px] w-[40px] h-[40px]"
            alt={`Ticket ${index + 1}`}
          />
          <div className="flex flex-col flex-grow">
            <p className="font-inter text-[14px] normal font-semibold text-[#1D2129]">
              {ticket.title}
            </p>
            <p className="font-inter 2xl:text-[12px] lg:text-[11px] normal font-normal text-[#86909C]">
              {ticket.description}
            </p>
          </div>
          <p className="font-inter text-[11px] whitespace-nowrap normal font-normal text-[#878A99]">
            {ticket.time}
          </p>
        </div>
      ))}
    </div>
  </div>
              </div>
            </div>
          </div>

          {/* 5 card bottom */}
          <div className="col-span-2   border-[1px] border-[#E9EBEC] rounded-2xl">
            {/* Ticket productivity */}
            <div className="flex justify-between px-[16px] py-[19px]">
              <div className="text-[20px] font-semibold normal font-inter text-[#4E5969]">
                Tickets Productivity Chart
              </div>
              <div className="relative">
      {/* Trigger Button */}
      <div className="flex cursor-pointer" onClick={todayDropdown}>
        <div className="text-[13px] font-normal font-poppins text-[#1D2129]">
          {selectedOption}
        </div>
        <div className="h-[24px] w-[24px] text-[22px] text-[#1D2129]">
          <RiArrowDropDownLine />
        </div>
      </div>

      {/* Dropdown Menu */}
      {todaydrop && (
        <div className="absolute top-[40px]  left-0 text-nowrap bg-white border border-gray-300 rounded-xl shadow-lg z-10">
          <ul>
            <li
              className="px-4 py-2 text-[13px] font-normal font-poppins text-[#1D2129] cursor-pointer"
              onClick={() => handleOptionClick("Option 1")}
            >
              Option 1
            </li>
            <li
              className="px-4 py-2 text-[13px] font-normal font-poppins text-[#1D2129] cursor-pointer"
              onClick={() => handleOptionClick("Option 2")}
            >
              Option 2
            </li>
            <li
              className="px-4 py-2 text-[13px] font-normal font-poppins text-[#1D2129] cursor-pointer"
              onClick={() => handleOptionClick("Option 3")}
            >
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
</div>

            {/* Graph */}
            <div>
              <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                      top: 10,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    {/* Define the gradient */}
                    <defs>
                      <linearGradient
                        id="paint0_linear_485_8262"
                        x1="-338.468"
                        y1="0.834473"
                        x2="-338.468"
                        y2="297.662"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0.00617284"
                          stopColor="#165DFF"
                          stopOpacity={0.9998039}
                        />
                        <stop
                          offset="1"
                          stopColor="#B7CDFF"
                          stopOpacity={0.180392}
                        />
                      </linearGradient>
                    </defs>

                    <XAxis
                      dataKey="time"
                      tick={{ fontSize: "0.675rem", fill: "#ADB5BD" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: "0.675rem", fill: "#ADB5BD" }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => value} // No special formatting needed
                    />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#165DFF"
                      strokeWidth={4}
                      fill="url(#paint0_linear_485_8262)" // Apply the existing gradient
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* 6 card bottom */}
          <div className="col-span-2 flex flex-col gap-[27px] px-[20px] py-[32px]  border-[1px] border-[#E9EBEC] rounded-2xl">
            <div className="flex justify-between">
              <div className="text-[20px] font-semibold normal font-inter text-[#4E5969]">
                Recent Tickets
              </div>
              <div className="h-[28px] w-[28px] text-[22px] text-[#181D27]">
                <HiArrowRight />
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col gap-[8px]">
      {items.map((item) => (
        <div key={item.id} className="flex justify-between border-[1px] rounded-[8px] border-[#E5E6EB] bg-[#FFF] px-[8px] py-[6px]">
          <div className="flex gap-[16px]">
            <div className="border-[0.5px] 2xl:w-[40px] lg:w-[40px] justify-center text-[#0E42D2] border-[#E5E6EB] rounded-[7px]">
              <svg width="35" height="35" viewBox="0 0 493 493" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1082_5675)">
                  <rect width="492.479" height="492.479" rx="98.4957" fill="white"></rect>
                  <path fillRule="evenodd" clipRule="evenodd" d={item.svgPath} fill="#165DFF"></path>
                </g>
                <defs>
                  <clipPath id="clip0_1082_5675">
                    <rect width="492.479" height="492.479" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="flex 2xl:gap-[20px] lg:gap-[10px]">
              <div>
                <p className="text-[14px] font-inter font-semibold text-[#1D2129]">{item.title}</p>
                <p className="font-inter text-[#86909C] text-[12px] font-normal">{item.description}</p>
              </div>
              <div className="inline-flex items-center text-[#FFE4BA] mt-[-10px]">
                <p className="border-[1px] rounded-[4px] border-[#FFE4BA] 2xl:p-[9px] lg:p-[3px] bg-[#FFF] text-[10px] font-normal text-[#FF7D00] leading-none">
                  {item.status}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[24px] h-[24px] text-[#86909C]">
            <HiArrowRight />
          </div>
        </div>
      ))}
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
