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
 
function AdminTeamMonitoring() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [alltimeOption, setAlltimeOption] = useState("All Time");
 
  const handleOptionClick = (option) => {
    setAlltimeOption(option); // Update the selected option
    setDropdownOpen(false); // Close the dropdown
  };
 
  const cardData = [
    { text: "Created tickets", value: "7500" },
    { text: "Opened Tickets", value: "6578" },
    { text: "Closed  tickets", value: "12546" },
    { text: "Escalated tickets", value: "564" },
    { text: "For Approvals", value: "1546" },
  ];
  // card details of memebers
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
      name: "Abhishek",
      role: "Support Executive",
      metrics: [
        { type: "Total", value: 562, color: "green", icon: green },
        { type: "Active", value: 562, color: "blue", icon: blue },
        { type: "Escalated", value: 562, color: "red", icon: red },
      ],
      image: image2,
    },
 
    // Add more team members as needed
  ];
  return (
    <div className="transition-all ml-4 mt-4 duration-300 ease-in-out">
    
      <div className="relative">
      <div className="flex flex-row items-center justify-between">
        <div>
          <label className="text-[28px] 2xl:text-[32px] text-[#4E5969] font-inter font-semibold">
            Dashboard
          </label>
        </div>
 
        <div
          className="flex flex-row justify-center items-center gap-5 2xl:w-[153px] 2xl:h-[50px] lg:w-[140px] lg:h-[30px] md:w-[110px] md:h-[20px] py-[10px] px-[21px] rounded-md bg-[#E8F3FF] cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown visibility
        >
          <div className="font-inter font-normal 2xl:text-lg lg:text-[12px] md:text-[8px] text-[#1D2129]">
            {alltimeOption}
          </div>
          <div className="2xl:w-[20px] 2xl:h-[18px] md:h-[16px] text-[24px] text-[#C8CAD8] mt-[-4px]">
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>
 
      {dropdownOpen && (
        <div className="absolute text-nowrap top-[40px] w-36 right-0 bg-white border border-gray-300 rounded-xl shadow-lg z-10">
          <ul className="py-2">
            {["Option 1", "Option 2", "Option 3"].map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 font-inter font-normal 2xl:text-lg lg:text-[14px] md:text-[8px] text-[#1D2129] hover:bg-[#E8F3FF] cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
 
 
    
      <div className="grid grid-cols-5 gap-4">
        {cardData.map((data, index) => (
          <Card key={index} className="p-6 2xl:p-8 mt-4">
            <div className="flex flex-row gap-7  2xl:gap-8">
              <div className="flex flex-col">
                <h1 className="text-[12px] 2xl:text-[16px] font-normal text-[#1D2129]">
                  {data.text}
                </h1>
                <h1 className="text-[24px] md:text-[24px] 2xl:text-[32px] font-bold text-[#1D2129]">
                  {data.value}
                </h1>
              </div>
              <img
                src={icon}
                alt="icon"
                className="h-[20px] w-[20px] md:h-[32px] md:w-[32px] 2xl:h-[48px] 2xl:w-[48px] mt-2"
              />
            </div>
          </Card>
        ))}
      </div>
      <div>
        <Card className="relative mt-6 w-full h-[300px]">
          <div>
            <div className="absolute mt-6 ml-4 font-inter">
              <h1 className="text-[16px] 2xl:text-[20px] mt-1 font-inter font-semibold text-[#4E5969]">
                Top Performing In Support Team
              </h1>
              {supportTeamData.map((member, index) => (
                <Card key={index} className="w-[1050px] h-[70px] flex mt-2">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row items-center">
                      <div className="flex flex-row gap-4 items-center ml-3">
                        <div className="p-[3px] rounded-full border-[2px] border-[#C9CDD4] ">
                          <img src={member.image} alt="profile image" />
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <h1 className="text-[12px] 2xl:text-[14px] font-semibold text-[#1D2129]">
                            {member.name}
                          </h1>
                          <h1 className="font-normal text-[#86909C] text-[10px] 2xl:text-[12px]">
                            {member.role}
                          </h1>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4 items-center ml-20">
                        {member.metrics.map((metric, metricIndex) => (
                          <Card
                            key={metricIndex}
                            className="h-[45px] w-auto p-4 flex flex-row gap-2 items-center"
                          >
                            <img src={metric.icon} alt={metric.color} />
                            <div className="flex flex-col items-center">
                              <h1 className="text-[#4E5969]  text-[9px] 2xl:text-[10px]">
                                {metric.type}
                              </h1>
                              <h1 className="text-[#1D2129] text-[12px] 2xl:text-[14px] font-bold">
                                {metric.value}
                              </h1>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <div className="mr-4 text-[#86909C] ">
                      <PiGreaterThan className="text-[8px]" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
 
export default AdminTeamMonitoring;