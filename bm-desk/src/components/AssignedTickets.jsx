import React, { useState, useContext } from "react";
// import { SidebarContext } from "./Layout";

import { Input } from "@/components/ui/input";
import Pheader from "./Pheader";
import { FiSearch } from "react-icons/fi";
import ReusableTable from "./ReusableTable";
import NewTicket from "./NewTicket";
import { Button } from "./ui/button";
import TabsSearchButton from "./TabsSearchButton";
import { DateProvider, useDate } from "./DateContext";
import { parse } from "date-fns";

//data count
function Assignedticketscontent() {
  // const { isSidebarOpen } = useContext(SidebarContext);
  const [activeTab, setActiveTab] = useState("alltickets");
  const [loading, setLoading] = useState(false);
  const [visibleDataCount, setVisibleDataCount] = useState(6);
  const { dateRange } = useDate();

  // State to manage table data
  const [data, setData] = useState([
    {
      id: 1,
      ticketnumber: "TCKT5642",
      projectname: "Project 1",
      subject: "Benchmark Assets Inc...	",
      expecteddate: "20-09-2024",
      expecteddeliverydate: "---",
      severity: "Critical",
    },
    {
      id: 2,
      ticketnumber: "TCKT5643",
      projectname: "Project 3",
      subject: "TC Numbering Issue",
      expecteddate: "20-10-2024",
      expecteddeliverydate: "---",
      severity: "Minor",
    },
    {
      id: 3,
      ticketnumber: "TCKT5644",
      projectname: "Project 2",
      subject: "To Change The Hierarchy",
      expecteddate: "20-09-2024",
      expecteddeliverydate: "02-12-2023",
      severity: "Major",
    },
    {
      id: 4,
      ticketnumber: "TCKT3333",
      projectname: "Project 4",
      subject: "To Change The Hierarchy",
      expecteddate: "20-12-2023",
      expecteddeliverydate: "02-09-2023",
      severity: "Minor",
    },
  ]);

  // Function to get filtered data based on date range and active tab
  const getFilteredData = () => {
    // Log the dateRange to check if it is being set correctly
    console.log("Date Range:", dateRange);

    // Check if dateRange is set correctly
    if (!dateRange?.from || !dateRange?.to) {
      return data; // Return all data if no valid range is set
    }

    let filtered = data.filter((item) => {
      // Parsing only the expected date
      const expectedDate = item.expecteddate 
          ? parse(item.expecteddate, "dd-MM-yyyy", new Date())
          : null;
  
      // Compare only against expectedDate
      return expectedDate && expectedDate >= dateRange.from && expectedDate <= dateRange.to;
  });

    // Tab filter
    if (activeTab !== "alltickets") {
      filtered = filtered.filter(
        (ticket) => ticket.severity.toLowerCase() === activeTab
      );
    }

    return filtered;
};


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
      value: "expecteddate",
      label: "Expected Date",
      sortable: true,
    },
    {
      id: 6,
      value: "expecteddeliverydate",
      label: "Expected delivery Date",
      sortable: true,
    },

    {
      id: 7,
      value: "severity",
      label: "Severity",
      sortable: true,
    },
    {
      id: 8,
      value: "ticketaction",
      label: "Ticket Action",
      sortable: false,
    },
  ];

  const filteredData = getFilteredData();  // Call inside the component

  const visibleData = filteredData.slice(0, visibleDataCount);

  const handleSearch = (event) => {
    console.log("Search value:", event.target.value);
  };

  const handleCreateTicket = () => {
    console.log("Create New Ticket clicked");
  };

  return (
    <div className="transition-all ml-4 mt-4 duration-300 ease-in-out">
      <div className="flex flex-col gap-6">
        <div>
          <Pheader title="Assigned Tickets" />
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
            data={visibleData}
            defaultSortConfig={{ key: "closeddate", direction: "ascending" }}
          />
          

        {/* Load More Button */}
        {activeTab === "alltickets" && visibleDataCount < data.length && (
            <div className="flex justify-start">
            <button
              onClick={loadMoreData}
              className="text-[#165DFF] -mt-2"
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

function AssignedTickets() {
  return (
    <DateProvider>
      <Assignedticketscontent />
    </DateProvider>
  );
}

export default AssignedTickets;
