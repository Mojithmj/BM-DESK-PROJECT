import React, { useState } from "react";
import Pheader from "./Pheader";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import ReusableTable from "./ReusableTable";

function TicketApprovals() {
  const [activeTab, setActiveTab] = useState("alltickets");
  const [loading, setLoading] = useState(false); // To track loading state
  const [visibleDataCount, setVisibleDataCount] = useState(6); // Number of tickets visible initially

  const tabs = [
    { value: "alltickets", label: "All Tickets" },
    { value: "major", label: "Major" },
    { value: "critical", label: "Critical" },
    { value: "minor", label: "Minor" },
  ];

  const loadMoreData = () => {
    setLoading(true); // Start loading

    setTimeout(() => {
      setVisibleDataCount((prevCount) => prevCount + 6); // Show 6 more tickets
      setLoading(false); // Stop loading
    }, 1000); // Simulate a 1-second delay for loading data
  };

  const [data, setData] = useState([
    {
      id: 1,
      ticketnumber: "TCKT5642",
      projectname: "Benchmark Assets Inc...",
      createdby: "Muhammad Althaf",
      status: "Support Team Marked as Resolved",
      severity: "Major",
    },
    {
      id: 2,
      ticketnumber: "TCKT7564",
      projectname: "TC Numbering Issue",
      createdby: "Muhammad Althaf",
      status: "Support Team Marked as Resolved",
      severity: "Critical",
    },
    {
      id: 3,
      ticketnumber: "TCKT5642",
      projectname: "Benchmark Assets Inc...",
      createdby: "Muhammad Althaf",
      status: "Support Team Marked as Resolved",
      severity: "Critical",
    },
    {
      id: 4,
      ticketnumber: "TCKT1256",
      projectname: "Student Missing In Benchmark",
      createdby: "Muhammad Althaf",
      status: "Support Team Marked as Resolved",
      severity: "Major",
    },
    {
      id: 5,
      ticketnumber: "TCKT1257",
      projectname: "Student Missing In Benchmark",
      createdby: "Muhammad Althaf",
      status: "Support Team Marked as Resolved",
      severity: "Minor",
    },
    {
      id: 6,
      ticketnumber: "TCKT1257",
      projectname: "Student Missing In Benchmark",
      createdby: "Muhammad Althaf",
      status: "Support Team Marked as Resolved",
      severity: "Minor",
    },
    {
      id: 7,
      ticketnumber: "TCKT1257",
      projectname: "Student Missing In Benchmark",
      createdby: "Muhammad Althaf",
      status: "Support Team Marked as Resolved",
      severity: "Minor",
    },
  ]);
  const newHeaders = [
    { id: 1, value: "slno", label: "Sl No" },
    {
      id: 2,
      value: "ticketnumber",
      label: "Ticket Number",
      sortable: true,
    },
    {
      id: 3,
      value: "projectname",
      label: "Project Name",
      sortable: true,
    },
    { id: 4, value: "createdby", label: "Created By", sortable: true },
    { id: 5, value: "status", label: "Status", sortable: true },
    { id: 6, value: "severity", label: "Severity", sortable: true },
    { id: 7, value: "ticketaction", label: "Actions", sortable: false },
  ];

  const filteredData =
    activeTab === "alltickets"
      ? data.slice(0, visibleDataCount) // Show limited data for "All Tickets"
      : data.filter((ticket) => ticket.severity.toLowerCase() === activeTab);

  return (
    <div>
      <div className="fixed top-24 left-64 w-[calc(100%_-_280px)]">
        <div className="flex flex-col gap-8">
          <div>
            <Pheader title="Ticket Approvals" />
          </div>
          {/* Tabs */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`font-inter text-[16px] font-normal p-[6px] rounded-[4px] px-4 transition-colors ${
                    activeTab === tab.value
                      ? "bg-black text-white"
                      : "bg-gray-50 text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#F8F9FB] rounded-[3px] border-[1.5px] border-[#F2F3F5]">
                <FiSearch className="text-black" />
                <Input
                  placeholder="Search Ticket"
                  className="border-none shadow-none !outline-none !p-0 !h-full"
                />
              </div>
              <button
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[5px] text-sm px-4 py-2"
              >
                Create New Ticket
              </button>
            </div>
          </div>
          <ReusableTable headers={newHeaders} data={filteredData} defaultSortConfig={{ key: "ticketnumber", direction: "ascending" }}/>
          {/* Show "Load More" button only for "All Tickets" tab */}
          {activeTab === "alltickets" && visibleDataCount < data.length && (
            <div className="flex justify-start">
              <button
                onClick={loadMoreData}
                className="text-[#165DFF] -mt-8"
                disabled={loading}
              >
                {loading ? "Loading..." : "Load more Tickets..."}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TicketApprovals;
