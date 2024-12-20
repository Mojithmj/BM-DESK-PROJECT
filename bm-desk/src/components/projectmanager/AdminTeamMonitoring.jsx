import React, { useState } from "react";
import { Label } from "../ui/label";
import { Card } from "../ui/card";
import icon from "../../assets/projectmanagercard.svg";
import image1 from "../../assets/AvatarImage12.png";
import image2 from "../../assets/AvatarImage13.png";
import blue from "../../assets/Blue.svg";
import green from "../../assets/Green.svg";
import red from "../../assets/Red.svg";
import { PiGreaterThan } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function AdminTeamMonitoring() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [alltimeOption, setAlltimeOption] = useState("All Time");

  const handleOptionClick = (option) => {
    setAlltimeOption(option);
    setDropdownOpen(false);
  };

  // const cardData = [
  //   { text: "Created tickets", value: "7500" },
  //   { text: "Open Tickets", value: "6578" },
  //   { text: "Closed tickets", value: "12546" },
  //   { text: "Escalated tickets", value: "564" },
  //   { text: "For Approvals", value: "1546" },
  // ];
  const cardData = [
    { text: "Created tickets", value: "7500", path: "/opentickets" },
    { text: "Open Tickets", value: "6578", path: "/opentickets" },
    { text: "Closed tickets", value: "12546", path: "/closedtickets" },
    { text: "Escalated tickets", value: "564", path: "/escalatedreports" },
    { text: "For Approvals", value: "1546", path: "/ticketapprovals" },
  ];

  const supportTeamData = [
    {
      name: "Maria Joyce",
      role: "Support Executive",
      metrics: [
        { type: "Total", value: 562, color: "green", icon: green },
        { type: "Active", value: 562, color: "blue", icon: blue },
        { type: "Escalated", value: 562, color: "red", icon: red },
      ],
      image: image1,
    },
    {
      name: "Abhi",
      role: "Support Executive",
      metrics: [
        { type: "Total", value: 562, color: "green", icon: green },
        { type: "Active", value: 562, color: "blue", icon: blue },
        { type: "Escalated", value: 562, color: "red", icon: red },
      ],
      image: image2,
    },
    {
      name: "Abhi",
      role: "Support Executive",
      metrics: [
        { type: "Total", value: 562, color: "green", icon: green },
        { type: "Active", value: 562, color: "blue", icon: blue },
        { type: "Escalated", value: 562, color: "red", icon: red },
      ],
      image: image2,
    },
    {
      name: "Abhi",
      role: "Support Executive",
      metrics: [
        { type: "Total", value: 562, color: "green", icon: green },
        { type: "Active", value: 562, color: "blue", icon: blue },
        { type: "Escalated", value: 562, color: "red", icon: red },
      ],
      image: image2,
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="transition-all ml-4 mt-4 duration-300 ease-in-out">
      {/* Header Section */}
      <div className="relative w-full">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[20px] sm:text-[18px] md:text-[24px] lg:text-[28px] 2xl:text-[32px] font-semibold text-[#4E5969] font-inter">
            Dashboard
          </h1>

          <div
            className="flex flex-row justify-center items-center gap-2 px-4 py-2 rounded-md bg-[#E8F3FF] cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="text-sm lg:text-base font-normal text-[#1D2129]">
              {alltimeOption}
            </span>
            <RiArrowDropDownLine className="text-lg text-[#C8CAD8]" />
          </div>

          {dropdownOpen && (
            <div className="absolute top-12 right-0 bg-white border rounded-lg shadow-lg z-10 w-36">
              <ul className="py-2">
                {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-[#E8F3FF] cursor-pointer"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Cards Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-4 mt-4">
        {cardData.map((data, index) => (
          // <Card
          //   key={index}
          //   className="p-4 sm:p-6 flex items-center justify-between ]"
          // >
          <Card
            key={index}
            className="p-4 sm:p-6 flex items-center justify-between cursor-pointer"
            onClick={() => navigate(data.path)} // Navigate to the specified path on click
          >
            <div>
              <h1 className="text-[12px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px] font-normal text-[#1D2129]">
                {data.text}
              </h1>
              <h1 className="text-[20px] sm:text-[18px] md:text-[24px] lg:text-[28px] 2xl:text-[32px] font-bold text-[#1D2129]">
                {data.value}
              </h1>
            </div>
            <img src={icon} alt="icon" className="w-8 h-8" />
          </Card>
        ))}
      </div>

      {/* Support Team Section */}
      <div className="mt-6">
        <Card className="p-4 h-auto">
          <h1 className="text-[10px] 2xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-inter font-semibold text-[#4E5969] mb-4">
            Top Performing In Support Team
          </h1>
          {supportTeamData.map((member, index) => (
            // <Card
            //   key={index}
            //   className="flex flex-col md:flex-row items-center justify-between p-4 mb-2"
            // >
            //   <div className="flex items-center gap-4">
            //     <img
            //       src={member.image}
            //       alt="profile"
            //       className="w-10 h-10 rounded-full border"
            //     />
            //     <div>
            //       <h1 className="text-sm font-semibold text-[#1D2129]">
            //         {member.name}
            //       </h1>
            //       <h2 className="text-xs text-[#86909C]">{member.role}</h2>
            //     </div>
            //   </div>

            //   <div className="flex flex-row gap-4 mt-4 md:mt-0">
            //     {member.metrics.map((metric, idx) => (
            //       <div
            //         key={idx}
            //         className="flex flex-row items-center gap-2 px-4 py-2 border rounded-lg"
            //       >
            //         <img src={metric.icon} alt={metric.color} className="w-4" />
            //         <div>
            //           <h1 className="text-xs text-[#4E5969]">{metric.type}</h1>
            //           <h1 className="text-sm font-bold">{metric.value}</h1>
            //         </div>
            //       </div>
            //     ))}
            //   </div>
            // </Card>
            <Card key={index} className="w-full h-[80px] flex mt-2">
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center">
                  <div className="flex flex-row gap-4 items-center px-[8px]">
                    <div className="p-[3px] rounded-full border-[2px] border-[#C9CDD4] ">
                      <img src={member.image} alt="profile image" />
                    </div>
                    <div className="flex flex-col gap-[0px]">
                      <h1 className="whitespace-nowrap text-[12px] sm:text-[7px] md:text-[10px] lg:text-[12px] 2xl:text-[14px] font-semibold text-[#1D2129]">
                        {member.name}
                      </h1>
                      <h1 className=" whitespace-nowrap font-normal text-[#86909C] text-[10px] sm:text-[6px] md:text-[10px]  2xl:text-[12px]">
                        {member.role}
                      </h1>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center ml-20">
                    {member.metrics.map((metric, metricIndex) => (
                      <Card
                        key={metricIndex}
                        className="h-[45px] w-auto flex flex-row gap-2 items-center"
                      >
                        <div className="px-[11.39px] py-[6.195px] flex flex-row gap-[9.29px] items-center">
                          <div className="h-[10.841px] w-[10.841px] overflow-hidden">
                            <img
                              src={metric.icon}
                              alt={metric.color}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col items-right">
                            <h1 className="text-[#4E5969]  text-[9px] 2xl:text-[10px]">
                              {metric.type}
                            </h1>
                            <h1 className="text-[#1D2129] text-[12px] 2xl:text-[14px] font-bold">
                              {metric.value}
                            </h1>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
                <div className="mr-4 text-[#86909C] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M9 18.5879L15 12.5879L9 6.58789"
                      stroke="#86909C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Card>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default AdminTeamMonitoring;
