import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Input } from "@/components/ui/input";
import Pheader from "./Pheader";
import { FiSearch } from "react-icons/fi";
import ReusableTable from "./ReusableTable";
import { IoMdArrowDown } from "react-icons/io";
import TabsSearchButton from "./TabsSearchButton";

function Closedtickets() {
  const [activeTab, setActiveTab] = useState("alltickets");
  const [loading, setLoading] = useState(false); // To track loading state
  const [visibleDataCount, setVisibleDataCount] = useState(6); // Number of tickets visible initially

  // State to manage table data
  const [data, setData] = useState([
    {
      id: 1,
      projectname: "Project 1",
      projectmanager: "Reneeja",
      category: "Cordova Cloud Solution",
      createddate: "20-10-2024",
      enddate: "20-10-2024",
    },
    {
      id: 2,
      projectname: "Project 1",
      projectmanager: "Aneesh Khalid",
      category: "Cordova Cloud Solution",
      createddate: "20-10-2024",
      enddate: "20-10-2024",
    },
    {
      id: 3,
      projectname: "Project 1",
      projectmanager: "Reneeja",
      category: "Cordova Cloud Solution",
      createddate: "20-10-2024",
      enddate: "20-10-2024",
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
    // { value: "major", label: "Major" },
    // { value: "critical", label: "Critical" },
    // { value: "minor", label: "Minor" },
  ];

  const newHeaders = [
    // "Sl No",
    // "Ticket Number",
    // "Project Name",
    // "Subject",
    // "Expected Date",
    // "Expected Delivery Date",
    // "Severity",
    // "Ticket Action",
    {
      id: 1,
      value: "slno",
      label: "Sl No",
    },
    {
      id: 2,
      value: "projectname",
      label: "Project Name",
    },
    {
      id: 3,
      value: "projectmanager",
      label: "Project Manager",
    },
    {
      id: 4,
      value: "category",
      label: "Category",
    },

    {
      id: 5,
      value: "createddate",
      label: "Created Date",
    },
    {
      id: 6,
      value: "enddate",
      label: "End Date",
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
            <Pheader title="View Projects" />
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
          <ReusableTable headers={newHeaders} data={filteredData} />
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

export default Closedtickets;
