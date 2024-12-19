import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Pheader from "./Pheader";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";
// import { IoMdArrowDown } from "react-icons/io";

import NewTicket from "./NewTicket";
import TabsSearchButton from "./TabsSearchButton";
import ReusableTable from "./ReusableTable";

function ActionedTickets() {
  const [activeTab, setActiveTab] = useState("alltickets");

  const tabs = [
    { value: "alltickets", label: "All Tickets" },
    { value: "major", label: "Major" },
    { value: "critical", label: "Critical" },
    { value: "minor", label: "Minor" },
  ];

  // State to manage table data
  const [data, setData] = useState([
    {
      id: 1,
      ticketnumber: "TCKT5642",
      projectname: "Benchmark School Dairy",
      subject: "Benchmark Assets Inc...	",
      requireddate: "17-08-2024",
      expecteddate: "17-08-2024",
      status: "Closed",
      severity: "Critical",
    },

    {
      id: 2,
      ticketnumber: "TCKT5642",
      projectname: "Benchmark Learning (Educore)",
      subject: "To Change The Hierarch",
      requireddate: "27-07-2024",
      expecteddate: "20-08-2023",
      status: "Closed",
      severity: "Critical",
    },
    {
      id: 3,
      ticketnumber: "TCKT5642",
      projectname: "Benchmark Learning (Educore)",
      subject: "To Change The Hierarch",
      requireddate: "27-12-2024",
      expecteddate: "20-06-2023",
      status: "Closed",
      severity: "Minor",
    },
    {
      id: 4,
      ticketnumber: "TCKT5000",
      projectname: "Benchmark Learning (Educore)",
      subject: "To Change The Hierarch",
      requireddate: "27-01-2024",
      expecteddate: "20-09-2023",
      status: "Closed",
      severity: "Major",
    },
  ]);

  const [loading, setLoading] = useState(false); // To track loading state
  const [visibleDataCount, setVisibleDataCount] = useState(6); // Number of tickets visible initially

  const loadMoreData = () => {
    setLoading(true); // Start loading

    setTimeout(() => {
      setVisibleDataCount((prevCount) => prevCount + 6); // Show 6 more tickets
      setLoading(false); // Stop loading
    }, 1000); // Simulate a 1-second delay for loading data
  };

  const newHeaders = [
    {
      id: 1,
      value: "slno",
      label: "Sl No",
    },
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
    {
      id: 4,
      value: "subject",
      label: "Subject",
      sortable: true,
    },
    {
      id: 5,
      value: "requireddate",
      label: "Required Date",
      sortable: true,
    },
    {
      id: 6,
      value: "expecteddate",
      label: "Expected Date",
      sortable: true,
    },
    {
      id: 7,
      value: "status",
      label: "Status",
      sortable: true,
    },
    {
      id: 8,
      value: "severity",
      label: "Severity",
      sortable: true,
    },
  ];

  const filteredData =
    activeTab === "alltickets"
      ? data.slice(0, visibleDataCount) // Show limited data for "All Tickets"
      : data.filter((ticket) => ticket.severity.toLowerCase() === activeTab);

  // tabsearcbutton.jsx file detils needed
  const handleSearch = (event) => {
    console.log("Search value:", event.target.value);
  };

  const handleCreateTicket = () => {
    console.log("Create New Ticket clicked");
  };

  return (
    <div>
      <div className="transition-all ml-4 mt-4 duration-300 ease-in-out">
        <div className="flex flex-col gap-8">
          <div>
            <Pheader title="My Actioned Tickets" />
          </div>
          {/* Tabs */}
          <div>
            <TabsSearchButton
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onSearch={handleSearch}
              onCreateTicket={handleCreateTicket}
              createButtonText="Create New Ticket"
            />
          </div>
          {/* Table */}
          <ReusableTable
            headers={newHeaders}
            data={filteredData}
            defaultSortConfig={{ key: "requireddate", direction: "ascending" }}
          />
          {/* Show "Load More" button only for "All Tickets" tab */}
          {activeTab === "alltickets" && visibleDataCount < data.length && (
            <div className="flex justify-start">
              <button
                onClick={loadMoreData}
                className="text-[#165DFF] -mt-8 "
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

export default ActionedTickets;
