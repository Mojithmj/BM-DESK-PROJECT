import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Pheader from "./Pheader";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { HiChevronDown } from "react-icons/hi2";
import { HiOutlineArrowSmallDown } from "react-icons/hi2";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Closedtickets() {
  const [activeTab, setActiveTab] = useState("all-tickets");

  const [data, setData] = useState([
    // Initial data (can be populated from an API or mock data)
    {
      id: 1,
      ticketnumber: "TCKT5642",
      projectname: "Benchmark School Diary",
      subject: "Benchmark Assets Inc",
      createdby: "Muhammad Althaf",
      createddate: "06-09-2024",
      closeddate:"06-09-2024",
      severity: "Critical",
    },
    {
        id: 2,
        ticketnumber: "TCKT5642",
        projectname: "Benchmark School Diary",
        subject: "Benchmark Assets Inc",
        createdby: "Muhammad Althaf",
        createddate: "06-09-2024",
        closeddate:"06-09-2024",
        severity: "Critical",
    },
    // Repeat similar objects as needed
  ]);
  const [loading, setLoading] = useState(false); // To track loading state

  const tabs = [
    { value: "all-tickets", label: "All Tickets" },
    { value: "major", label: "Major" },
    { value: "critical", label: "Critical" },
    { value: "minor", label: "Minor" },
  ];

  const loadMoreData = () => {
    setLoading(true); // Start loading

    // Simulate fetching more data (e.g., from an API)
    setTimeout(() => {
      const moreData = [
        {
            id: 3,
            ticketnumber: "TCKT5642",
            projectname: "Benchmark School Diary",
            subject: "Benchmark Assets Inc",
            createdby: "Muhammad Althaf",
            createddate: "06-09-2024",
            closeddate:"06-09-2024",
            severity: "Critical",
        },
        {
            id: 4,
            ticketnumber: "TCKT5642",
            projectname: "Benchmark School Diary",
            subject: "Benchmark Assets Inc",
            createdby: "Muhammad Althaf",
            createddate: "06-09-2024",
            closeddate:"06-09-2024",
            severity: "Critical",
        },
      ];
      setData((prevData) => [...prevData, ...moreData]); // Add new data to existing data
      setLoading(false); // Stop loading
    }, 100); // Simulate a 2-second delay for loading data
  };

  return (
    <div>
      <div className="fixed top-24 left-64 w-[calc(100%_-_280px)]">
        <div className="flex flex-col gap-8">
          <div className="">
            <Pheader title="Closed Tickets" />
          </div>

          {/* Tabs */}
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center">
                {tabs.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`font-inter text-[16px] font-normal px-[16px] rounded-[4px] py-[8px] transition-colors ${
                      activeTab === tab.value
                        ? "bg-[#1D2129] text-[#FFFFFF]"
                        : "bg-gray-50 text-black "
                    }`}
                  >
                    <div className="text-[16px] font-normal">{tab.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#F8F9FB] rounded-[3px] border-[1.5px] border-[#F2F3F5] ">
                <FiSearch className=" w-[22px] h-[22px] text-[#111815]" />
                <Input
                  placeholder="Search here...."
                  className="text-[#111815] text-[16px] border-none shadow-none !outline-none font-normal !p-0 !h-full"
                />
              </div>
              <button
                type="button"
                className="text-[#FFF] bg-[#165DFF] text-[16px] font-normal focus:ring-4  rounded-[5px]  px-[16px] py-[8px]"
              >
                Create New Ticket
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="max-h-[60vh] overflow-y-auto pr-4">
            <Table className=" border-[1px]">
              <TableHeader>
                <TableRow className="bg-[#F2F3F5] hover:bg-[#4E5969] pointer-events-none">
                  <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                    Sl No
                  </TableHead>

                  <TableHead className="text-[#4E5969] h-full px-2 py-[15px] text-[12px] font-medium flex gap-2 items-center">
                    <div className="flex items-center gap-[4px]">
                    Ticket Number
                    <HiOutlineArrowSmallDown />
                    </div>
                  </TableHead>
                  

                  <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px] font-medium">
                  <div className="flex items-center gap-[4px]">
                    Project Name
                    <HiOutlineArrowSmallDown />
                    </div>
                  </TableHead>
                  
                  <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px] font-medium">
                  <div className="flex items-center gap-[4px]">
                    Subject
                    <HiOutlineArrowSmallDown />
                    </div>

                  </TableHead>

                  <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px] font-medium">
                  <div className="flex items-center gap-[4px]">
                    Created By
                    <HiOutlineArrowSmallDown />
                    </div>
                  </TableHead>

                  <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px] font-medium">
                  <div className="flex items-center gap-[4px]">
                    Created Date
                    <HiOutlineArrowSmallDown />
                    </div>
                  </TableHead>

                  <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px] font-medium">
                  <div className="flex items-center gap-[4px]">
                    Closed Date
                    <HiOutlineArrowSmallDown />
                    </div>
                  </TableHead>
                  
                  <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px] font-medium">
                  <div className="flex items-center gap-[4px]">
                    Severity
                    <HiOutlineArrowSmallDown />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={row.id}>
                    <TableCell className="text-[#1D2129] px-2 py-[15px] text-[14px] font-normal">
                      {(index + 1).toString().padStart(2, "0")}
                    </TableCell>
                    <TableCell className="text-[#165DFF] px-2 py-[15px] text-[12px] font-normal">
                      {row.ticketnumber}
                    </TableCell>
                    <TableCell className="text-[#1D2129] px-2 py-[15px] text-[14px] font-normal">
                      {row.projectname}
                    </TableCell>
                    <TableCell className="text-[#1D2129] px-2 py-[15px] text-[14px] font-normal">
                      {row.subject}
                    </TableCell>
                    <TableCell className="text-[#1D2129] px-2 py-[15px] text-[14px] font-normal">
                      {row.createdby}
                    </TableCell>
                    <TableCell className="text-[#1D2129] px-2 py-[15px] text-[14px] font-normal">
                      {row.createddate}
                    </TableCell>
                    <TableCell className="text-[#1D2129] px-2 py-[15px] text-[14px] font-normal">
                      {row.closeddate}
                    </TableCell>
                    <TableCell className="text-[#1D2129] px-2 py-[15px]">
                      <div className="text-[12px] rounded-[6px] font-medium text-[#CB2634] px-[2.5px] py-[2.5px] pl-[15px] bg-[#FFECE8]">
                        {row.severity}
                      </div>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <button
              onClick={loadMoreData}
              className="text-[#165DFF] mt-4 text-[16px] font-normal font-inter"
              disabled={loading} // Disable the button while loading
            >
              {loading ? "Loading..." : "Load more Tickets..."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Closedtickets;
