import { React, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";
import { LuRotateCcw } from "react-icons/lu";
import Avatariamge from "../../assets/Avatar Image.png";
import Ticketimageone from "../../assets/Avatarimageone.png";
import Ticketimagetwo from "../../assets/Avatarimagetwo.png";
import TeamManagementSheet from "./TeamManagementSheet";
import Pheader from "../Pheader";
import { Button } from "@/components/ui/button";

function Taskmanagement() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedButton, setSelectedButton] = useState(null);

  const tabs = [
    { value: "all", label: "All" },
    { value: "mostescalated", label: "Most Escalated" },
    { value: "mostresolved", label: "Most Resolved" },
    { value: "mostopened", label: "Most Opened" },
  ];

  const profiles = [
    {
      name: "Maria Joyce",
      role: "POC UAE",
      avatar: Avatariamge,
      stats: [
        { label: "Total", value: 562, color: "#00B42A" },
        { label: "Active", value: 340, color: "#165DFF" },
        { label: "Escalated", value: 120, color: "#F53F3F" },
      ],
    },
    {
      name: "John Doe",
      role: "POC UAE",
      avatar: Ticketimageone,
      stats: [
        { label: "Total", value: 450, color: "#00B42A" },
        { label: "Active", value: 320, color: "#165DFF" },
        { label: "Escalated", value: 130, color: "#F53F3F" },
      ],
    },
    {
      name: "John Doe",
      role: "POC UAE",
      avatar: Ticketimagetwo,
      stats: [
        { label: "Total", value: 450, color: "#00B42A" },
        { label: "Active", value: 320, color: "#165DFF" },
        { label: "Escalated", value: 130, color: "#F53F3F" },
      ],
    },
    {
      name: "John Doe",
      role: "POC UAE",
      avatar: Avatariamge,
      stats: [
        { label: "Total", value: 450, color: "#00B42A" },
        { label: "Active", value: 320, color: "#165DFF" },
        { label: "Escalated", value: 130, color: "#F53F3F" },
      ],
    },
  ];

  // sheet
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <div className="transition-all ml-4 mt-4 duration-300 ease-in-out ">
        <div className="flex flex-col gap-6">
          <div>
            <Pheader title="Task Management" showCalendar={false} />
          </div>

          {/* Container that changes from column to row at md breakpoint */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
            {/* Tabs Section */}
            <div className="w-full">
              <div className="grid grid-cols-2 sm:flex sm:flex-nowrap sm:overflow-x-auto items-center gap-1 sm:gap-0">
                {tabs.map((tab) => (
                  <Button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`whitespace-nowrap font-inter text-[12px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px] font-normal p-[6px] rounded-[4px] px-4 transition-colors border-0 shadow-none ${
                      activeTab === tab.value
                        ? "bg-black text-white hover:bg-black"
                        : "bg-gray-50 text-black"
                    }`}
                  >
                    {tab.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Search and Buttons Section - Stacks vertically on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr,auto] gap-2 items-center">
              {/* Search */}
              <div className="flex items-center gap-2 px-4 py-2 bg-[#F8F9FB] rounded-[3px] border-[1.5px] border-[#E5EBE9]">
                <FiSearch className="text-black shrink-0" />
                <Input
                  placeholder="Search Ticket"
                  className="border-none shadow-none !outline-none !p-0 !h-full placeholder:text-[14px] placeholder:xl:text-[12px] w-full"
                />
              </div>

              {/* Buttons - Always 2 in a row */}
              <div className="grid grid-cols-2 gap-2">
                <Button
                  onClick={() => handleButtonClick("createUser")}
                  className={`border border-[#165DFF] hover:bg-[#165DFF] rounded-[4px] items-center px-1 py-1 sm:px-2 sm:py-1 md:px-3 md:py-2 ${
                    selectedButton === "createUser"
                      ? "bg-[#165DFF] text-[#FFFFFF]"
                      : "hover:bg-[#FFFFFF] hover:text-[#165DFF] text-[#165DFF]"
                  }`}
                >
                  <span className="font-Inter text-[10px] sm:text-[12px] md:text-[14px] 2xl:text-[16px] font-normal whitespace-nowrap">
                    Create New User
                  </span>
                </Button>

                <Button
                  onClick={() => {
                    handleButtonClick("assignTicket");
                    openSheet();
                  }}
                  className={`border border-[#165DFF] hover:bg-[#165DFF] rounded-[4px] items-center px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 ${
                    selectedButton === "assignTicket"
                      ? "bg-[#165DFF] text-[#FFFFFF]"
                      : "hover:bg-[#165DFF] hover:text-[#FFFFFF] text-[#165DFF]"
                  }`}
                >
                  <span className="font-Inter text-[10px] sm:text-[12px] md:text-[14px] 2xl:text-[16px] font-normal">
                    Assign Ticket
                  </span>
                </Button>
              </div>
            </div>

            {/* TeamManagementSheet */}
            <TeamManagementSheet isOpen={isSheetOpen} onClose={closeSheet} />
          </div>
        </div>

        {/* Card */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="font-semibold 2xl:text-[28px] lg:text-[20px] md:text-[14px] text-[12px] normal font-Inter text-[#4E5969]">
            Support Team
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-[20px]">
              {profiles.map((profile, index) => (
                <div
                  key={index}
                  className="border-[1px] 2xl:p-[36px] lg:p-[20px] md:p-[15px] p-[10px] rounded-2xl text-[#E5E6EB] bg-[#FFF] justify-center items-center"
                >
                  <div className="flex flex-col gap-[36px]">
                    {/* Profile name */}
                    <div className="flex flex-row items-center justify-between">
                      <div className="text-[#4E5969] font-inter normal font-semibold 2xl:text-xl lg:text-[18px] md:text-[16px]">
                        Profile
                      </div>
                      <div className="2xl:w-[19px] 2xl:h-[19px] lg:w-[15px] lg:h-[15px] md:w-[10px] md:h-[10px] text-[#4E5969]">
                        <LuRotateCcw />
                      </div>
                    </div>

                    {/* Profile pic */}
                    <div className="flex flex-col items-center">
                      <div className="relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px] 2xl:w-[100px] 2xl:h-[100px]">
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
                      <div className="font-inter font-semibold 2xl:text-[20px] lg:text-[15px] md:text-[10px] normal text-[#1D2129]">
                        {profile.name}
                      </div>
                      <div className="text-[#86909C] font-inter 2xl:text-[16px] lg:text-[11px] md:text-[6px] normal font-normal">
                        {profile.role}
                      </div>
                    </div>

                    {/* Bottom card stats */}
                    <div className="flex flex-row 2xl:gap-[16px] lg:gap-[15px] md:gap-[14px] gap-[10px] justify-center items-center">
                      {profile.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="border-[0.44px] border-[#E5E6EB] rounded-[9px] flex flex-row items-center gap-[9px] px-2 py-[6px]"
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
                            <p className="text-[#4E5969] text-[10px] normal font-normal">
                              {stat.label}
                            </p>
                            <p className="text-[#1D2129] text-[14px] normal font-bold">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taskmanagement;
