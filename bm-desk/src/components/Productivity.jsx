import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Pheader from "./Pheader";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { IoIosArrowRoundDown } from "react-icons/io";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Productivity() {
  const [activeTab, setActiveTab] = useState("all-time");

  const [data, setData] = useState([
    // Initial data (can be populated from an API or mock data)
    {
      id: 1,
      date: "2024-11-25",
      assignedTickets: 10,
      selfAssignedTickets: 5,
      resolvedTickets: 8,
      returnedTickets: 2,
      escalated: 1,
      growthRate: "10%",
    },
    {
      id: 2,
      date: "2023-11-25",
      assignedTickets: 8,
      selfAssignedTickets: 5,
      resolvedTickets: 3,
      returnedTickets: 2,
      escalated: 1,
      growthRate: "30%",
    },
    {
      id: 3,
      date: "2024-12-02",
      assignedTickets: 8,
      selfAssignedTickets: 5,
      resolvedTickets: 3,
      returnedTickets: 2,
      escalated: 1,
      growthRate: "30%",
    },
    {
      id: 4,
      date: "2024-12-02",
      assignedTickets: 8,
      selfAssignedTickets: 5,
      resolvedTickets: 3,
      returnedTickets: 2,
      escalated: 1,
      growthRate: "30%",
    },
    {
      id: 5,
      date: "2024-12-02",
      assignedTickets: 8,
      selfAssignedTickets: 5,
      resolvedTickets: 3,
      returnedTickets: 2,
      escalated: 1,
      growthRate: "30%",
    },
    {
      id: 6,
      date: "2024-12-02",
      assignedTickets: 8,
      selfAssignedTickets: 5,
      resolvedTickets: 3,
      returnedTickets: 2,
      escalated: 1,
      growthRate: "30%",
    },
    {
      id: 7,
      date: "2024-12-02",
      assignedTickets: 8,
      selfAssignedTickets: 5,
      resolvedTickets: 3,
      returnedTickets: 2,
      escalated: 1,
      growthRate: "30%",
    },
    {
      id: 8,
      date: "2024-12-02",
      assignedTickets: 8,
      selfAssignedTickets: 5,
      resolvedTickets: 3,
      returnedTickets: 2,
      escalated: 1,
      growthRate: "30%",
    },

    // Repeat similar objects as needed
  ]);
  const [loading, setLoading] = useState(false); // To track loading state
  const [visibleCount, setVisibleCount] = useState(6); // Tickets visible count

  const tabs = [
    { value: "all-time", label: "All Time" },
    { value: "this-month", label: "This Month" },
    { value: "this-year", label: "This Year" },
  ];

  // Function to filter data based on activeTabbb
  const getFilteredData = () => {
    const currentDate = new Date();

    if (activeTab === "this-month") {
      return data.filter((item) => {
        const itemDate = new Date(item.date);
        return (
          itemDate.getFullYear() === currentDate.getFullYear() &&
          itemDate.getMonth() === currentDate.getMonth()
        );
      });
    }

    if (activeTab === "this-year") {
      return data.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate.getFullYear() === currentDate.getFullYear();
      });
    }

    // Default: All Time
    return data;
  };

  const filteredData = getFilteredData();
  const visibleData = filteredData.slice(0, visibleCount); // Limit visible data

  const loadMoreData = () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 6); // Show 6 more tickets
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Sidebar */}
      <div className="fixed w-full top-16 md:w-[250px] md:block hidden">
        <Sidebar />
      </div>

      <div className="fixed top-24 left-64 w-[calc(100%_-_280px)]">
        <div className="flex flex-col gap-8">
          <div className="">
            <Pheader title="My Productivity" />
          </div>

          {/* Tabs */}
          <div className="flex justify-between items-center">
            <div className="">
              <div className="flex items-center gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`font-inter text-[16px] font-normal p-[6px] rounded-[4px] px-4 transition-colors ${
                      activeTab === tab.value
                        ? "bg-black text-white"
                        : "bg-gray-50 text-black "
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#F8F9FB] rounded-[3px] border-[1.5px] border-[#F2F3F5] ">
                <FiSearch className="text-black" />
                <Input
                  placeholder="Search"
                  className="border-none shadow-none !outline-none !p-0 !h-full"
                />
              </div>
              <button
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[5px] text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Export
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="max-h-[60vh] overflow-y-auto pr-4">
            <Table className=" border-[1px] !rounded overflow-hidden">
              <TableHeader>
                <TableRow className="bg-[#F2F3F5] hover:bg-[#4E5969] pointer-events-none">
                  <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                    Sl No
                  </TableHead>
                  <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                    Recording Date
                  </TableHead>
                  <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                    Assigned Tickets
                  </TableHead>
                  <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                    Self-assigned Tickets
                  </TableHead>
                  <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                    Resolved Tickets
                  </TableHead>
                  <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                    Returned Tickets
                  </TableHead>
                  <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                    Escalated
                  </TableHead>
                  <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                    Growth rate
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {visibleData.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell className="text-[#1D2129] px-2 py-[15px]">
                      {index + 1}
                    </TableCell>
                    <TableCell className="text-[#1D2129] px-2 py-[15px]">
                      {row.date}
                    </TableCell>
                    <TableCell className="text-[#1D2129] px-2 py-[15px]">
                      {row.assignedTickets}
                    </TableCell>
                    <TableCell className="text-[#1D2129] px-2 py-[15px]">
                      {row.selfAssignedTickets}
                    </TableCell>
                    <TableCell className="text-[#1D2129] px-2 py-[15px]">
                      {row.resolvedTickets}
                    </TableCell>
                    <TableCell className="text-[#1D2129] px-2 py-[15px]">
                      {row.returnedTickets}
                    </TableCell>
                    <TableCell className="text-[#1D2129] px-2 py-[15px]">
                      {row.escalated}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <IoIosArrowRoundDown className="bg-[#FFECE8] text-[#F53F3F]" />
                        <div className=" px-2 py-[15px] text-[#F53F3F] font-bold ">
                          {row.growthRate}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {visibleData.length < filteredData.length && (
              <button
                onClick={loadMoreData}
                className="text-blue-600 mt-4"
                disabled={loading}
              >
                {loading ? "Loading..." : "Load More Data"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productivity;



