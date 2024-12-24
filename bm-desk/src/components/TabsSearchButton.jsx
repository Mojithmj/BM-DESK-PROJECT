import React from "react";
import { FiSearch } from "react-icons/fi";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import NewTicket from "./NewTicket";

const TabsSearchButton = ({
  tabs,
  activeTab,
  setActiveTab,
  onSearch,
  onCreateTicket,
  createButtonText = "Create New Ticket",
}) => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row gap-4 w-full">
      {/* Tabs Section */}
      <div className="w-full lg:w-auto">
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`font-inter text-[12px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px] font-normal p-[6px] rounded-[4px] px-4 transition-colors border-0 shadow-none ${
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

      {/* Search and Create Button Section */}
      <div className="flex flex-row justify-between sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto lg:ml-auto">
        <div className="flex-grow sm:flex-grow-0">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#F8F9FB] rounded-[3px] border-[1.5px] border-[#E5EBE9] w-full">
            <FiSearch className="text-black shrink-0" />
            <Input
              placeholder="Search Ticket"
              className="border-none shadow-none !outline-none !p-0 !h-full placeholder:text-[14px] w-full"
              onChange={onSearch}
            />
          </div>
        </div>

        <div className="shrink-0">
          <NewTicket
            triggerButton={
              <Button
                type="button"
                className="text-white bg-[#165DFF] hover:bg-[#165DFF] font-medium rounded-[5px] text-[12px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px] px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full sm:w-auto"
                onClick={onCreateTicket}
              >
                {createButtonText}
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TabsSearchButton;
