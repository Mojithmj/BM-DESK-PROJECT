import React, { useState } from "react";
import Pheader from "../Pheader";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import ReusableTable from "../ReusableTable";
import NewTicket from "../NewTicket";

function EscalatedReport() {
  const [activeTab, setActiveTab] = useState("alltickets");
  const [loading, setLoading] = useState(false); // To track loading state
  const [visibleDataCount, setVisibleDataCount] = useState(6); // Number of tickets visible initially

  // State to manage table data
  const [data, setData] = useState([
    {
      id: 1,
      ticketnumber: "TCKT5642",
      projectname: "Project 1",
      subject: "Benchmark Assets Inc...	",
      escalatedfrom: "Mohammad Althaf",
      createddate: "20-10-2024",
      expecteddate: "20-10-2024",
      severity: "Critical",
    },
    {
      id: 2,
      ticketnumber: "TCKT5642",
      projectname: "Project 2",
      subject: "Benchmark Assets Inc...	",
      escalatedfrom: "Mohammad Althaf",
      createddate: "20-10-2024",
      expecteddate: "20-10-2024",
      severity: "Minor",
    },
    {
      id: 3,
      ticketnumber: "TCKT5642",
      projectname: "Project 3",
      subject: "Benchmark Assets Inc...	",
      escalatedfrom: "Mohammad Althaf",
      createddate: "20-10-2024",
      expecteddate: "20-10-2024",
      severity: "Major",
    },
    {
      id: 4,
      ticketnumber: "TCKT5642",
      projectname: "Project 4",
      subject: "Benchmark Assets Inc...	",
      escalatedfrom: "Mohammad Althaf",
      createddate: "20-10-2024",
      expecteddate: "20-10-2024",
      severity: "Minor",
    },
    {
      id: 5,
      ticketnumber: "TCKT5642",
      projectname: "Project 5",
      subject: "Benchmark Assets Inc...	",
      escalatedfrom: "Mohammad Althaf",
      createddate: "20-10-2024",
      expecteddate: "20-10-2024",
      severity: "Major",
    },
    {
      id: 6,
      ticketnumber: "TCKT5642",
      projectname: "Project 6",
      subject: "Benchmark Assets Inc...	",
      escalatedfrom: "Mohammad Althaf",
      createddate: "20-10-2024",
      expecteddate: "20-10-2024",
      severity: "Minor",
    },
    {
      id: 7,
      ticketnumber: "TCKT5642",
      projectname: "Project 7",
      subject: "Benchmark Assets Inc...	",
      escalatedfrom: "Mohammad Althaf",
      createddate: "20-10-2024",
      expecteddate: "20-10-2024",
      severity: "Minor",
    },
  ]);

  const loadMoreData = () => {
    setLoading(true); // Start loading

    setTimeout(() => {
      setVisibleDataCount((prevCount) => prevCount + 6); // Show 6 more tickets
      setLoading(false); // Stop loading
    }, 1000); // Simulate a 1-second delay for loading data
  };

  const tabs = [
    { value: "alltickets", label: "All Tickets" },
    { value: "major", label: "Major" },
    { value: "critical", label: "Critical" },
    { value: "minor", label: "Minor" },
  ];

  const newHeaders = [
    {
      id: 1,
      value: "slno",
      label: "Sl No",
      sortable: false,
    },
    {
      id: 2,
      value: "ticketnumber",
      label: "Ticket Number",
      sortable: false,
    },
    {
      id: 3,
      value: "projectname",
      label: "Project Name",
      sortable: false,
    },
    {
      id: 4,
      value: "subject",
      label: "Subject",
      sortable: false,
    },

    {
      id: 5,
      value: "escalatedfrom",
      label: "Escalated From",
      sortable: false,
    },
    {
      id: 6,
      value: "createddate",
      label: "Created Date",
      sortable: false,
    },

    {
      id: 7,
      value: "expecteddate",
      label: "Expected Date",
      sortable: false,
    },
    {
      id: 8,
      value: "severity",
      label: "Severity",
      sortable: false,
    },
  ];

  const filteredData =
    activeTab === "alltickets"
      ? data.slice(0, visibleDataCount) // Show limited data for "All Tickets"
      : data.filter((ticket) => ticket.severity.toLowerCase() === activeTab);
  return (
    <div className="transition-all ml-4 mt-4 duration-300 ease-in-out">
      {" "}
      <div className="flex flex-col gap-8">
        <div>
          <Pheader title={"Escalated Report"} />
        </div>
        {/* Tabs */}
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`font-inter text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] font-normal p-[6px] rounded-[4px] px-4 transition-colors ${
                    activeTab === tab.value
                      ? "bg-black text-white"
                      : "bg-gray-50 text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#F8F9FB] rounded-[3px] border-[1.5px] border-[#F2F3F5]">
              <FiSearch className="text-black" />
              <Input
                placeholder="Search Ticket"
                className="border-none shadow-none  !outline-none !p-0 !h-full"
              />
            </div>
            <NewTicket
              triggerButton={
                <button
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[5px] text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Create New Ticket
                </button>
              }
            />
          </div>
        </div>
        {/* Table */}
        <ReusableTable
          headers={newHeaders}
          data={filteredData}
          defaultSortConfig={{
            key: "expecteddeliverydate",
            direction: "ascending",
          }}
        />
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
  );
}

export default EscalatedReport;
