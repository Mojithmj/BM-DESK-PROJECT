import React from "react";
import { FiSearch } from "react-icons/fi";
import { Button } from "./ui/button"; // Adjust the import path as necessary
import { Input } from "./ui/input"; // Adjust the import path as necessary
import NewTicket from "./NewTicket"; // Adjust the import path as necessary

const TabsSearchButton = ({ 
  tabs, 
  activeTab, 
  setActiveTab, 
  onSearch, 
  onCreateTicket 
}) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex items-center gap-2">
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

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#F8F9FB] rounded-[3px] border-[1.5px] border-[#F2F3F5]">
          <FiSearch className="text-black" />
          <Input
            placeholder="Search Ticket"
            className="border-none shadow-none !outline-none !p-0 !h-full placeholder:text-[14px]"
            onChange={onSearch}
          />
        </div>
        <NewTicket
          triggerButton={
            <Button
              type="button"
              className="text-white bg-[#165DFF] hover:bg-[#165DFF] font-medium rounded-[5px] text-[12px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px] px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={onCreateTicket}
            >
              Create New Ticket
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default TabsSearchButton;
