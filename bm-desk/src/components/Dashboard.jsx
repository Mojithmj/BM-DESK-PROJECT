import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuRotateCcw } from "react-icons/lu";
import Avatariamge from "../assets/Avatar Image.png";
import { HiArrowRight } from "react-icons/hi";
import Ticketimageone from "../assets/Avatarimageone.png";
import Ticketimagetwo from "../assets/Avatarimagetwo.png";
import { useNavigate } from "react-router-dom";
import AssignedTickets from "./AssignedTickets";
import Opentickets from "./Opentickets";
import EscalatedReport from "./projectmanager/EscalatedReport";
import Closedtickets from "./Closedtickets";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { LuChevronRight } from "react-icons/lu";
import { Button } from "./ui/button";

function Dashboard() {
  const [assignedTicketsCount, setAssignedTicketsCount] = useState(0);
  const [openTicketsCount, setOPenTicketsCount] = useState(0);
  const [EscalatedTicketsCount, setEscalatedTicketsCount] = useState(0);
  const [ClosedTicketsCount, setClosedTicketsCount] = useState(0);
  // all time dropdown
  const [DropdownOpen, setDropdownOpen] = useState(false);
  const [alltimeOption, setAlltimeOption] = useState("All Time");
  // today dropdown
  const [todaydrop, setTodaydrop] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Today");

  const managername = localStorage.getItem("myusername") === "projectmanager";
  const navigate = useNavigate();

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

  // profile
  const profiles = [
    {
      name: "Maria Joyce",
      role: "IT Support",
      avatar: Avatariamge,
      stats: [
        { label: "Total", value: 562, color: "#00B42A" },
        { label: "Active", value: 562, color: "#165DFF" },
        { label: "Escalated", value: 562, color: "#F53F3F" },
      ],
    },
  ];

  // cards
  const cardsData = [
    {
      title: "Assigned Tickets",
      bgColor: "#E8F3FF",
      svgColor: "#165DFF",
      count: assignedTicketsCount,
      buttonText: "Continue",
      textColor: "#165DFF",
    },
    {
      title: "To Do",
      bgColor: "#FFF7E8",
      svgColor: "#FF7D00",
      count: openTicketsCount,
      buttonText: "Continue",
      textColor: "#FF7D00",
    },
  ];

  const replacementCard = [
    {
      title: "Escalated Tickets",
      bgColor: "#FFECE8",
      svgColor: "#F53F3F",
      count: EscalatedTicketsCount,
      buttonText: "See Report",
      textColor: "#F53F3F",
    },
  ];

  //my tickets
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
    {
      image: Ticketimagetwo,
      title: "Ticket 3452",
      description: "Ticket - TICKT-7424 has been resolved",
      time: "1 Hr",
    },
  ];

  // graph
  const data = [
    { time: "9:30 AM", uv: 30 },
    { time: "9:34 AM", uv: 33 },
    { time: "11:30 AM", uv: 40 },
    { time: "2:00 PM", uv: 25 },
    { time: "4:00 PM", uv: 50 },
    { time: "6:00 PM", uv: 40 },
    { time: "8:00 PM", uv: 110 },
    { time: "9:00 PM", uv: 100 },
  ];

  // recent tickets
  const items = [
    {
      id: 1,
      title: "Benchmark Learning (Educore)",
      description: "Glitches in the report card of y...",
      status: "Critical",
      svgPath:
        "M259.998 121.307C257.962 122.032 254.802 123.872 252.977 125.396C246.976 130.405 127.996 246.877 124.437 251.226C118.517 258.459 117.316 268.369 121.402 276.255C123.63 280.554 136.966 295.148 143.675 300.628C146.622 303.035 150.004 305.004 151.189 305.004C152.375 305.004 155.766 303.341 158.726 301.308C173.911 290.876 192.985 299.902 192.985 317.521C192.985 323.226 191.585 326.992 187.412 332.52C185.215 335.429 184.604 337.532 184.845 341.365C185.015 344.083 208.585 367.644 213.516 370.026C218.565 372.463 226.647 372.671 231.862 370.497C236.144 368.713 234.712 370.067 309.957 296.677C342.989 264.459 368.255 239.036 369.629 236.632C372.834 231.025 372.922 221.255 369.819 215.454C368.643 213.253 362.301 205.937 355.729 199.195C346.222 189.443 343.222 186.938 341.05 186.938C339.55 186.938 335.328 188.739 331.668 190.94C326.012 194.343 324.175 194.942 319.398 194.942C312.417 194.942 306.156 191.96 301.877 186.595C299.019 183.013 298.81 182.189 298.81 174.556C298.81 166.682 298.957 166.156 302.571 161.138C305.256 157.41 306.333 154.882 306.333 152.304C306.333 149.007 305.177 147.536 293.042 135.391C282.554 124.895 278.904 121.86 275.739 121.001C270.451 119.565 264.567 119.68 259.998 121.307Z",
    },
    {
      id: 2,
      title: "Benchmark School Manager",
      description: "Glitches in the reprt card of y...",
      status: "Critical",
      svgPath:
        "M259.998 121.307C257.962 122.032 254.802 123.872 252.977 125.396C246.976 130.405 127.996 246.877 124.437 251.226C118.517 258.459 117.316 268.369 121.402 276.255C123.63 280.554 136.966 295.148 143.675 300.628C146.622 303.035 150.004 305.004 151.189 305.004C152.375 305.004 155.766 303.341 158.726 301.308C173.911 290.876 192.985 299.902 192.985 317.521C192.985 323.226 191.585 326.992 187.412 332.52C185.215 335.429 184.604 337.532 184.845 341.365C185.015 344.083 208.585 367.644 213.516 370.026C218.565 372.463 226.647 372.671 231.862 370.497C236.144 368.713 234.712 370.067 309.957 296.677C342.989 264.459 368.255 239.036 369.629 236.632C372.834 231.025 372.922 221.255 369.819 215.454C368.643 213.253 362.301 205.937 355.729 199.195C346.222 189.443 343.222 186.938 341.05 186.938C339.55 186.938 335.328 188.739 331.668 190.94C326.012 194.343 324.175 194.942 319.398 194.942C312.417 194.942 306.156 191.96 301.877 186.595C299.019 183.013 298.81 182.189 298.81 174.556C298.81 166.682 298.957 166.156 302.571 161.138C305.256 157.41 306.333 154.882 306.333 152.304C306.333 149.007 305.177 147.536 293.042 135.391C282.554 124.895 278.904 121.86 275.739 121.001C270.451 119.565 264.567 119.68 259.998 121.307Z",
    },
    {
      id: 3,
      title: "BM Asset Management System",
      description: "Glitches in the report card of y...",
      status: "Critical",
      svgPath:
        "M259.998 121.307C257.962 122.032 254.802 123.872 252.977 125.396C246.976 130.405 127.996 246.877 124.437 251.226C118.517 258.459 117.316 268.369 121.402 276.255C123.63 280.554 136.966 295.148 143.675 300.628C146.622 303.035 150.004 305.004 151.189 305.004C152.375 305.004 155.766 303.341 158.726 301.308C173.911 290.876 192.985 299.902 192.985 317.521C192.985 323.226 191.585 326.992 187.412 332.52C185.215 335.429 184.604 337.532 184.845 341.365C185.015 344.083 208.585 367.644 213.516 370.026C218.565 372.463 226.647 372.671 231.862 370.497C236.144 368.713 234.712 370.067 309.957 296.677C342.989 264.459 368.255 239.036 369.629 236.632C372.834 231.025 372.922 221.255 369.819 215.454C368.643 213.253 362.301 205.937 355.729 199.195C346.222 189.443 343.222 186.938 341.05 186.938C339.55 186.938 335.328 188.739 331.668 190.94C326.012 194.343 324.175 194.942 319.398 194.942C312.417 194.942 306.156 191.96 301.877 186.595C299.019 183.013 298.81 182.189 298.81 174.556C298.81 166.682 298.957 166.156 302.571 161.138C305.256 157.41 306.333 154.882 306.333 152.304C306.333 149.007 305.177 147.536 293.042 135.391C282.554 124.895 278.904 121.86 275.739 121.001C270.451 119.565 264.567 119.68 259.998 121.307Z",
    },
    {
      id: 4,
      title: "DocMe-For Schools",
      description: "Glitches in the report card of y...",
      status: "Critical",
      svgPath:
        "M259.998 121.307C257.962 122.032 254.802 123.872 252.977 125.396C246.976 130.405 127.996 246.877 124.437 251.226C118.517 258.459 117.316 268.369 121.402 276.255C123.63 280.554 136.966 295.148 143.675 300.628C146.622 303.035 150.004 305.004 151.189 305.004C152.375 305.004 155.766 303.341 158.726 301.308C173.911 290.876 192.985 299.902 192.985 317.521C192.985 323.226 191.585 326.992 187.412 332.52C185.215 335.429 184.604 337.532 184.845 341.365C185.015 344.083 208.585 367.644 213.516 370.026C218.565 372.463 226.647 372.671 231.862 370.497C236.144 368.713 234.712 370.067 309.957 296.677C342.989 264.459 368.255 239.036 369.629 236.632C372.834 231.025 372.922 221.255 369.819 215.454C368.643 213.253 362.301 205.937 355.729 199.195C346.222 189.443 343.222 186.938 341.05 186.938C339.55 186.938 335.328 188.739 331.668 190.94C326.012 194.343 324.175 194.942 319.398 194.942C312.417 194.942 306.156 191.96 301.877 186.595C299.019 183.013 298.81 182.189 298.81 174.556C298.81 166.682 298.957 166.156 302.571 161.138C305.256 157.41 306.333 154.882 306.333 152.304C306.333 149.007 305.177 147.536 293.042 135.391C282.554 124.895 278.904 121.86 275.739 121.001C270.451 119.565 264.567 119.68 259.998 121.307Z",
    },
    {
      id: 5,
      title: "Benchmark Learning (Educore)",
      description: "Glitches in the report card of y...",
      status: "Critical",
      svgPath:
        "M259.998 121.307C257.962 122.032 254.802 123.872 252.977 125.396C246.976 130.405 127.996 246.877 124.437 251.226C118.517 258.459 117.316 268.369 121.402 276.255C123.63 280.554 136.966 295.148 143.675 300.628C146.622 303.035 150.004 305.004 151.189 305.004C152.375 305.004 155.766 303.341 158.726 301.308C173.911 290.876 192.985 299.902 192.985 317.521C192.985 323.226 191.585 326.992 187.412 332.52C185.215 335.429 184.604 337.532 184.845 341.365C185.015 344.083 208.585 367.644 213.516 370.026C218.565 372.463 226.647 372.671 231.862 370.497C236.144 368.713 234.712 370.067 309.957 296.677C342.989 264.459 368.255 239.036 369.629 236.632C372.834 231.025 372.922 221.255 369.819 215.454C368.643 213.253 362.301 205.937 355.729 199.195C346.222 189.443 343.222 186.938 341.05 186.938C339.55 186.938 335.328 188.739 331.668 190.94C326.012 194.343 324.175 194.942 319.398 194.942C312.417 194.942 306.156 191.96 301.877 186.595C299.019 183.013 298.81 182.189 298.81 174.556C298.81 166.682 298.957 166.156 302.571 161.138C305.256 157.41 306.333 154.882 306.333 152.304C306.333 149.007 305.177 147.536 293.042 135.391C282.554 124.895 278.904 121.86 275.739 121.001C270.451 119.565 264.567 119.68 259.998 121.307Z",
    },
  ];

  // Modify cardsData based on localStorage
  const modifiedCardsData = managername
    ? cardsData.map((card) => {
        if (card.title === "Assigned Tickets") {
          return {
            ...card,
            title: "Completed",
            buttonText: "See Report",
            count: ClosedTicketsCount,
          };
        } else if (card.title === "To Do") {
          return { ...card, title: "Re-Opened", buttonText: "See Report" };
        }
        return card;
      })
    : cardsData;

  return (
    <div className="transition-all ml-4 mt-4 duration-300 ease-in-out">
      <div className="hidden">
        <AssignedTickets onCountUpdate={setAssignedTicketsCount} />
      </div>
      <div className="hidden">
        <Opentickets onCountUpdate={setOPenTicketsCount} />
      </div>
      <div className="hidden">
        <EscalatedReport onCountUpdate={setEscalatedTicketsCount} />
      </div>
      <div className="hidden">
        <Closedtickets onCountUpdate={setClosedTicketsCount} />
      </div>
      {/* Activity dashboard */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between items-center p-2 w-full">
          {/* Title Section */}
          <div className="font-semibold text-[16px] md:text-[24px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px]  font-inter text-[#4E5969]">
            {managername ? "Employee Activity Dashboard" : "Activity Dashboard"}
          </div>

          {/* Dropdown Section */}
          <div className="relative">
            {/* Dropdown Trigger */}
            <Button
              className="flex flex-row justify-center items-center gap-5 2xl:w-[153px] 2xl:h-[50px] lg:w-[140px] lg:h-[30px] md:w-[110px] md:h-[28px] sm:w-[100px] sm:h-[28px] w-[90px] h-[26px] py-[10px] px-[15px] sm:px-[18px] rounded-md bg-[#E8F3FF] cursor-pointer"
              onClick={triggerDropdown}
            >
              <div className="font-inter font-normal 2xl:text-lg lg:text-[12px] md:text-[10px] sm:text-[9px] text-[8px] text-[#1D2129]">
                {alltimeOption}
              </div>
              <div className="2xl:w-[20px] 2xl:h-[18px] lg:w-[16px] lg:h-[16px] md:h-[14px] sm:w-[12px] sm:h-[12px] text-[#C8CAD8]">
                <RiArrowDropDownLine />
              </div>
            </Button>

            {/* Dropdown Menu */}
            {DropdownOpen && (
              <div className="absolute text-nowrap top-[40px] left-0 w-full bg-white border border-gray-300 rounded-xl shadow-lg z-10">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 font-inter font-normal 2xl:text-lg lg:text-[14px] md:text-[10px] sm:text-[9px] text-[8px] text-[#1D2129] hover:bg-[#E8F3FF] cursor-pointer"
                    onClick={() => alltimeOptionClick("Today")}
                  >
                    Today
                  </li>
                  <li
                    className="px-4 py-2 font-inter font-normal 2xl:text-lg lg:text-[14px] md:text-[10px] sm:text-[9px] text-[8px] text-[#1D2129] hover:bg-[#E8F3FF] cursor-pointer"
                    onClick={() => alltimeOptionClick("This Month")}
                  >
                    This month
                  </li>
                  <li
                    className="px-4 py-2 font-inter font-normal 2xl:text-lg lg:text-[14px] md:text-[10px] sm:text-[9px] text-[8px] text-[#1D2129] hover:bg-[#E8F3FF] cursor-pointer"
                    onClick={() => alltimeOptionClick("This year")}
                  >
                    This year
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {/* 1 Card */}

              <div className="border-[1px] min-h-[300px] h-full p-4 md:p-6 lg:p-7 2xl:p-9 rounded-2xl text-[#E5E6EB] bg-[#FFF] justify-center items-center">
                {profiles.map((profile, index) => (
                  <div key={index} className="">
                    <div className="flex flex-col  gap-[36px] lg:gap-[30px]">
                      {/* Profile name */}
                      <div className="flex flex-row items-center justify-between">
                        <div className="text-[#4E5969] font-inter font-semibold 2xl:text-xl lg:text-[18px] md:text-[16px] sm:text-[14px]">
                          Profile
                        </div>
                        <div className="2xl:w-[19px] 2xl:h-[19px] lg:w-[15px] lg:h-[15px] md:w-[10px] md:h-[10px] sm:w-[8px] sm:h-[8px] text-[#4E5969]">
                          <LuRotateCcw />
                        </div>
                      </div>

                      {/* Profile pic */}
                      <div className="flex flex-col items-center">
                        <div className="relative w-[70px] h-[70px]  md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] xl:w-[100px] xl:h-[100px] 2xl:w-[100px] 2xl:h-[100px]">
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
                          <div className="absolute inset-0 flex items-center justify-center p-3">
                            <img
                              src={profile.avatar}
                              alt="Avatar"
                              className="rounded-full w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="font-inter font-semibold 2xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[#1D2129]">
                          {profile.name}
                        </div>
                        <div className="text-[#86909C] font-inter 2xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] font-normal">
                          {profile.role}
                        </div>
                      </div>

                      {/* Bottom card stats */}
                      <div className="flex flex-row 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap 2xl:gap-[16px] lg:gap-[13px] md:gap-[10px] gap-[8px] justify-center items-center">
                        {profile.stats.map((stat, idx) => (
                          <div
                            key={idx}
                            className="border-[0.44px] border-[#E5E6EB] rounded-[9px] flex flex-row items-center gap-[5px] md:gap-[7px] lg:gap-[9px] px-2 "
                          >
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="11"
                                viewBox="0 0 11 12"
                                fill="none"
                              >
                                <circle
                                  cx="5.5"
                                  cy="5.59"
                                  r="5.42"
                                  fill={stat.color}
                                />
                              </svg>
                            </div>
                            <div>
                              <p className="text-[#4E5969] text-[10px] sm:text-[8px] font-normal">
                                {stat.label}
                              </p>
                              <p className="text-[#1D2129] text-[14px] sm:text-[12px] font-bold">
                                {stat.value}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 2nd and 3rd card */}

              {modifiedCardsData.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col min-h-[300px] h-full justify-between border-[1px]  p-4 md:p-6 lg:p-7 2xl:p-9  rounded-2xl text-[#E5E6EB]  bg-[#FFF] "
                >
                  <div className="flex flex-row items-center justify-between">
                    <div className="text-[#4E5969] font-inter font-semibold normal 2xl:text-[18px] lg:text-[16px] md:text-[12px]">
                      <p>{card.title}</p>
                    </div>
                    <div className="2xl:w-[19px] 2xl:h-[19px] lg:w-[15px] lg:h-[15px] md:w-[10px] md:h-[10px] text-[#4E5969]">
                      <LuRotateCcw />
                    </div>
                  </div>
                  <div className="flex flex-row 2xl:gap-[15px] justify-center lg:gap-[10px] md:gap-[8px] items-center">
                    <div
                      className="2xl:p-[19px] lg:p-[10px] rounded-[15px]"
                      style={{ backgroundColor: card.bgColor }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="38"
                        height="38"
                        viewBox="0 0 41 41"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.009 0.845255C22.7721 0.921867 22.4239 1.06397 22.2353 1.16102C21.8502 1.35929 22.0309 1.18492 10.0003 12.9708C3.04674 19.783 1.28278 21.5513 1.05271 21.9402C0.335393 23.1529 0.387408 24.7562 1.18189 25.9215C1.55343 26.4666 4.65223 29.6205 5.01092 29.8187C5.3549 30.0089 5.79005 30.0447 6.14224 29.9119C6.26351 29.8661 6.56439 29.6707 6.81092 29.4776C7.36772 29.0413 7.77946 28.8568 8.45823 28.739C10.243 28.4293 11.9499 29.6382 12.2846 31.4492C12.4343 32.2587 12.2039 33.2632 11.7262 33.8839C11.5985 34.05 11.388 34.3235 11.2586 34.4916C10.9316 34.9165 10.8399 35.3011 10.9558 35.7616C11.0384 36.09 11.2378 36.327 12.7791 37.9299C14.6442 39.8696 15.1012 40.2368 15.9838 40.5049C16.424 40.6386 16.6571 40.6617 17.2403 40.6294C17.9944 40.5877 18.4046 40.4625 19.0223 40.0857C19.4838 39.8042 39.6501 20.0513 39.983 19.5547C40.4201 18.9026 40.579 18.3731 40.5877 17.5396C40.597 16.6351 40.4492 16.1011 40.0103 15.4542C39.8384 15.2009 38.9128 14.1932 37.9532 13.2146C36.4072 11.638 36.1692 11.4255 35.8626 11.3476C35.3714 11.2228 34.9566 11.3601 34.2836 11.87C33.5405 12.433 32.8829 12.6383 31.9919 12.5858C30.584 12.5028 29.5247 11.7454 29.0154 10.4576C28.8961 10.1561 28.8577 9.87694 28.858 9.31442C28.8586 8.25916 28.9929 7.94221 29.9373 6.76616C30.2198 6.41436 30.3016 5.74992 30.1156 5.3168C30.0499 5.16358 29.2253 4.25269 28.2249 3.22814C26.3819 1.34065 26.037 1.06561 25.2078 0.822302C24.6354 0.654429 23.5648 0.665553 23.009 0.845255Z"
                          fill={card.svgColor}
                        />
                      </svg>
                    </div>

                    <div
                      className="text-[48px] md:text-[52px] lg:text-[60px] 2xl:text-[68px] font-semibold font-Inter"
                      style={{ color: card.textColor }}
                    >
                      {card.count}
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      // Navigate to different paths based on the card title
                      if (card.title === "Assigned Tickets") {
                        navigate("/assignedtickets"); // Navigate to Assigned Tickets page
                      } else if (card.title === "To Do") {
                        navigate("/opentickets"); // Navigate to To Do page
                      } else if (card.title === "Escalated Tickets") {
                        navigate("/escalatedtickets"); // Navigate to Escalated Tickets page
                      } else if (card.title === "Completed") {
                        navigate("/closedtickets"); // Navigate to Escalated Tickets page
                      } else if (card.title === "Re-Opened") {
                        navigate("/opentickets"); // Navigate to Escalated Tickets page
                      }
                    }}
                    className="flex items-center justify-end cursor-pointer"
                  >
                    <div className="font-inter text-[14px]   normal font-semibold text-[#1D2129]">
                      {card.buttonText}
                    </div>
                    <div className="w-[18px] h-[18px] text-[18px] text-[#181D27]">
                      <HiArrowRight />
                    </div>
                  </div>
                </div>
              ))}

              {/* 4th Card */}

              {managername ? (
                replacementCard.map((card, index) => (
                  <div
                    key={index}
                    className="flex flex-col min-h-[300px] h-full justify-between border-[1px]  p-4 md:p-6 lg:p-7 2xl:p-9  rounded-2xl text-[#E5E6EB]  bg-[#FFF] "
                  >
                    <div className="flex flex-row items-center justify-between">
                      <div className="text-[#4E5969] font-inter font-semibold normal 2xl:text-[18px] lg:text-[16px] md:text-[12px]">
                        <p>{card.title}</p>
                      </div>
                      <div className="2xl:w-[19px] 2xl:h-[19px] lg:w-[15px] lg:h-[15px] md:w-[10px] md:h-[10px] text-[#4E5969]">
                        <LuRotateCcw />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center 2xl:gap-[15px]  lg:gap-[10px] md:gap-[8px] gap-[8px] items-center">
                      <div
                        className="2xl:p-[19px] lg:p-[10px] rounded-[15px]"
                        style={{ backgroundColor: card.bgColor }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="38"
                          height="38"
                          viewBox="0 0 41 41"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M23.009 0.845255C22.7721 0.921867 22.4239 1.06397 22.2353 1.16102C21.8502 1.35929 22.0309 1.18492 10.0003 12.9708C3.04674 19.783 1.28278 21.5513 1.05271 21.9402C0.335393 23.1529 0.387408 24.7562 1.18189 25.9215C1.55343 26.4666 4.65223 29.6205 5.01092 29.8187C5.3549 30.0089 5.79005 30.0447 6.14224 29.9119C6.26351 29.8661 6.56439 29.6707 6.81092 29.4776C7.36772 29.0413 7.77946 28.8568 8.45823 28.739C10.243 28.4293 11.9499 29.6382 12.2846 31.4492C12.4343 32.2587 12.2039 33.2632 11.7262 33.8839C11.5985 34.05 11.388 34.3235 11.2586 34.4916C10.9316 34.9165 10.8399 35.3011 10.9558 35.7616C11.0384 36.09 11.2378 36.327 12.7791 37.9299C14.6442 39.8696 15.1012 40.2368 15.9838 40.5049C16.424 40.6386 16.6571 40.6617 17.2403 40.6294C17.9944 40.5877 18.4046 40.4625 19.0223 40.0857C19.4838 39.8042 39.6501 20.0513 39.983 19.5547C40.4201 18.9026 40.579 18.3731 40.5877 17.5396C40.597 16.6351 40.4492 16.1011 40.0103 15.4542C39.8384 15.2009 38.9128 14.1932 37.9532 13.2146C36.4072 11.638 36.1692 11.4255 35.8626 11.3476C35.3714 11.2228 34.9566 11.3601 34.2836 11.87C33.5405 12.433 32.8829 12.6383 31.9919 12.5858C30.584 12.5028 29.5247 11.7454 29.0154 10.4576C28.8961 10.1561 28.8577 9.87694 28.858 9.31442C28.8586 8.25916 28.9929 7.94221 29.9373 6.76616C30.2198 6.41436 30.3016 5.74992 30.1156 5.3168C30.0499 5.16358 29.2253 4.25269 28.2249 3.22814C26.3819 1.34065 26.037 1.06561 25.2078 0.822302C24.6354 0.654429 23.5648 0.665553 23.009 0.845255Z"
                            fill={card.svgColor}
                          />
                        </svg>
                      </div>

                      <div
                        className="text-[48px] md:text-[52px] lg:text-[60px] 2xl:text-[68px]  font-semibold font-Inter"
                        style={{ color: card.textColor }}
                      >
                        {card.count}
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <div className="font-inter text-[14px] normal font-semibold text-[#1D2129]">
                        {card.buttonText}
                      </div>
                      <div className="w-[18px] h-[18px] text-[18px] text-[#181D27]">
                        <HiArrowRight />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <div className="flex min-h-[300px] h-full flex-col justify-between border-[1px] px-[16px] 2xl:py-[32px] lg:py-[10px] rounded-2xl text-[#E5E6EB] bg-[#FFF]">
                    <div className="flex flex-col gap-[27px]">
                      {/* Header */}
                      <div className="flex flex-row items-center justify-between">
                        <div className="text-[#4E5969] font-inter font-semibold normal lg:h-[15px] md:w-[10px] md:h-[10px] text-nowrap mt-4 ml-2">
                          My Tickets
                        </div>
                        <div className="w-[28px] h-[28px] text-[20px] text-[#4E5969] cursor-pointer">
                          <HiArrowRight
                            onClick={() => {
                              navigate("/actionedtickets");
                            }}
                            className="mt-4"
                          />
                        </div>
                      </div>

                      {/* Ticket List */}
                      <div className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px] mt-[10px]">
                        <div className="flex flex-col gap-[14px]">
                          {tickets.map((ticket, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-[16px] w-full"
                            >
                              <img
                                src={ticket.image}
                                className="rounded-[64px] w-[40px] h-[40px] flex-shrink-0"
                                alt={`Ticket ${index + 1}`}
                              />
                              <div className="flex flex-row justify-between w-full">
                                <div className="flex flex-col">
                                  <p className="font-inter 2xl:text-[14px] lg:text-[12px] md:text-[11px] sm:text-[10px] font-semibold text-[#1D2129]">
                                    {ticket.title}
                                  </p>
                                  <p className="font-inter 2xl:text-[12px] lg:text-[11px] md:text-[10px] sm:text-[8px] text-ellipsis overflow-hidden w-[120px] whitespace-nowrap font-normal text-[#86909C]">
                                    {ticket.description}
                                  </p>
                                </div>
                                <div className="flex-shrink-0">
                                  <p className="font-inter text-[11px] 2xl:whitespace-nowrap lg:whitespace-nowrap md:whitespace-normal sm:whitespace-normal font-normal text-[#878A99]">
                                    {ticket.time}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5 card bottom */}
            <div className="grid grid-cols-1  xl:grid-cols-2 gap-4">
              <div className="  border-[1px] border-[#E9EBEC] rounded-2xl">
                {/* Ticket productivity */}
                <div className="flex justify-between px-[16px] py-[19px]">
                  <div className="text-[#4E5969] font-inter font-semibold normal 2xl:text-[18px] lg:text-[16px] md:text-[12px]">
                    Tickets Productivity Chart
                  </div>
                  <div className="relative">
                    {/* Trigger Button */}
                    <div
                      className="flex cursor-pointer"
                      onClick={todayDropdown}
                    >
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

              <div className=" flex flex-col gap-[20px] 2xl:gap-[27px]  px-[20px] py-[32px]  border-[1px] border-[#E9EBEC] rounded-2xl">
                <div className="flex justify-between">
                  <div className="text-[#4E5969] font-inter font-semibold normal 2xl:text-[18px] lg:text-[16px] md:text-[12px] mt-[-15px]">
                    Recent Tickets
                  </div>
                  {!managername && (
                    <div className="h-[28px] w-[28px] text-[22px] text-[#181D27] cursor-pointer mt-[-12px]">
                      <HiArrowRight
                        onClick={() => {
                          navigate("/opentickets");
                        }}
                      />
                    </div>
                  )}
                </div>
                {/* card */}
                <div className="flex flex-col gap-[8px]">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between border-[1px] rounded-[8px] border-[#E5E6EB] bg-[#FFF] px-[8px] py-[6px]"
                    >
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex gap-[16px] items-center">
                          <div className="border-[0.5px] 2xl:w-[40px] lg:w-[40px]  justify-center text-[#0E42D2] border-[#E5E6EB] rounded-[7px]">
                            <svg
                              width="35"
                              height="35"
                              viewBox="0 0 493 493"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_1082_5675)">
                                <rect
                                  width="492.479"
                                  height="492.479"
                                  rx="98.4957"
                                  fill="white"
                                ></rect>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d={item.svgPath}
                                  fill="#165DFF"
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_1082_5675">
                                  <rect
                                    width="492.479"
                                    height="492.479"
                                    fill="white"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>

                          <div className="flex 2xl:gap-[20px] lg:gap-[10px]">
                            <div>
                              <p className="text-[12px] sm:text-[7px] md:text-[10px] lg:text-[12px] 2xl:text-[14px] font-inter font-semibold text-[#1D2129]">
                                {item.title}
                              </p>
                              <p className="font-inter text-[#86909C] text-[10px] sm:text-[6px] md:text-[10px]  2xl:text-[12px] font-normal">
                                {item.description}
                              </p>
                            </div>
                            <div className="inline-flex items-center text-[#FFE4BA] mt-[-10px]">
                              <p className="border-[1px] rounded-[4px] border-[#FFE4BA] 2xl:p-[9px] lg:p-[3px] bg-[#FFF] text-[10px]  font-normal text-[#FF7D00] leading-none">
                                {item.status}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M9 18.4004L15 12.4004L9 6.40039"
                              stroke="#86909C"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
