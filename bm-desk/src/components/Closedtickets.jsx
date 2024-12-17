import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Pheader from "./Pheader";
import { FiSearch } from "react-icons/fi";
import ReusableTable from "./ReusableTable";
import NewTicket from "./NewTicket";
import TabsSearchButton from "./TabsSearchButton";

function Closedtickets() {
  const [activeTab, setActiveTab] = useState("alltickets");
  const [loading, setLoading] = useState(false); // To track loading state
  const [visibleDataCount, setVisibleDataCount] = useState(6); // Number of tickets visible initially

  // State to manage table data
  const [data, setData] = useState([
    {
      id: 1,
      ticketnumber: "TCKT5642",
      projectname: "Project A",
      subject: "B",
      createdby: "Mohammad Althaf",
      createddate: "25-05-2024",
      closeddate: "20-06-2024",
      severity: "Critical",
    },
    {
      id: 2,
      ticketnumber: "TCKT5643",
      projectname: "Project B",
      subject: "A",
      createdby: "Mohammad Althaf",
      // createddate: "27-02-2023",
      closeddate: "20-07-2024",
      severity: "Minor",
    },
    {
      id: 3,
      ticketnumber: "TCKT5644",
      projectname: "Project C",
      subject: "C",
      createdby: "Mohammad Althaf",
      createddate: "20-10-2024",
      // closeddate: "20-10-2024",
      severity: "Major",
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
      value: "ticketnumber",
      label: "Ticket Number",
      // icon: <IoMdArrowDown />,
      sortable: true,
    },
    {
      id: 3,
      value: "projectname",
      label: "Project Name",
      // icon: <IoMdArrowDown />,
      sortable: true,
    },
    {
      id: 4,
      value: "subject",
      label: "Subject",
      // icon: <IoMdArrowDown />,
      sortable: true,
    },

    {
      id: 5,
      value: "createdby",
      label: "Created By",
      // icon: <IoMdArrowDown />,
      sortable: true,
    },
    {
      id: 6,
      value: "createddate",
      label: "Created Date",
      // icon: <IoMdArrowDown />,
      sortable: true,
    },
    {
      id: 6,
      value: "closeddate",
      label: "Closed Date",
      // icon: <IoMdArrowDown />,
      sortable: true,
    },

    {
      id: 7,
      value: "severity",
      label: "Severity",
      // icon: <IoMdArrowDown />,
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
        {" "}
        <div className="flex flex-col gap-8">
          <div>
            <Pheader title="Closed Tickets" />
          </div>
          {/* Tabs */}
          <div>
            <TabsSearchButton
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onSearch={handleSearch}
              onCreateTicket={handleCreateTicket}
            />
          </div>
          {/* Table */}
          <ReusableTable
            headers={newHeaders}
            data={filteredData}
            defaultSortConfig={{ key: "closeddate", direction: "ascending" }}
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
    </div>
  );
}

export default Closedtickets;
