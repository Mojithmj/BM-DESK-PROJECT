import { React, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";
import { LuRotateCcw } from "react-icons/lu";
import Avatariamge from "../../assets/Avatar Image.png";
import Ticketimageone from "../../assets/Avatarimageone.png";
import Ticketimagetwo from "../../assets/Avatarimagetwo.png";
import TeamManagementSheet from "./TeamManagementSheet";

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
      <div className="fixed top-24 left-64 w-[calc(100%_-_280px)]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="font-semibold 2xl:text-[32px] lg:text-[28px] md:text-[18px] text-[16px] normal font-Inter text-[#4E5969]">
              Team Management
            </div>

            <div className="flex  justify-between">
              {/* tabs */}
              <div className="flex items-center gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`font-inter text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] font-normal 2xl:py-2 lg:py-1  2xl:px-4 lg:px-3 rounded-[4px] transition-colors ${
                      activeTab === tab.value
                        ? "bg-[#1D2129] text-[#FFFFFF]"
                        : "bg-[#FFFFFF] text-[#1D2129]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* tab right */}
              <div className="flex gap-4">
                {/* search */}
                <div className="flex items-center gap-2 pl-3 2xl:pr-14 lg:pr-5 py-2 bg-[#F8F9FB] rounded-[3px] border-[1.5px] border-[#F2F3F5]">
                  <FiSearch className="text-[#111815]" />
                  <Input
                    placeholder="Search User"
                    className="border-none shadow-none  !outline-none !p-0 !h-full text-[#111815] text-[14px] font-normal"
                  />
                </div>
                {/* button */}
                <button
        onClick={() => handleButtonClick("createUser")}
        className={`border border-[#165DFF] rounded-[4px] items-center 2xl:px-4 lg:px-3 2xl:py-2 lg:py-1 ${
          selectedButton === "createUser" ? "bg-[#165DFF] text-[#FFFFFF]" : "hover:bg-[#165DFF] hover:text-[#FFFFFF] text-[#165DFF]"
        }`}
      >
                  <span className="font-Inter 2xl:text-[14px] lg:text-[12px] font-normal  ">
                    Create New User
                  </span>
                </button>
                <div>
                  {/* Button in the parent to trigger the sheet */}
                  <button
          onClick={() => {
            handleButtonClick("assignTicket");
            openSheet(); // Open the sheet when this button is clicked
          }}
          className={`border border-[#165DFF] rounded-[4px] items-center px-4 py-2 ${
            selectedButton === "assignTicket" ? "bg-[#165DFF] text-[#FFFFFF]" : "hover:bg-[#165DFF] hover:text-[#FFFFFF] text-[#165DFF]"
          }`}
        >
                    <span className="font-Inter 2xl:text-[14px] lg:text-[12px] font-normal  ">
                      Assign Ticket
                    </span>
                  </button>
                  {/* TeamManagementSheet triggered by state */}
                  <TeamManagementSheet
                    isOpen={isSheetOpen}
                    onClose={closeSheet}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="flex flex-col gap-4">
            <div className="font-semibold 2xl:text-[28px] lg:text-[20px] md:text-[14px] text-[12px] normal font-Inter text-[#4E5969]">
              Support Team
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                {profiles.map((profile, index) => (
                  <div
                    key={index}
                    className="border-[1px] 2xl:p-[36px] lg:p-[10px] md:p-[5px] rounded-2xl text-[#E5E6EB] bg-[#FFF] justify-center items-center"
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
                      <div className="flex flex-row 2xl:gap-[16px] lg:gap-[10px] md:gap-[2px] justify-center items-center">
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
    </div>
  );
}

export default Taskmanagement;
