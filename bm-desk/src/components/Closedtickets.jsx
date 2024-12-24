import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Pheader from "./Pheader";
import { FiSearch } from "react-icons/fi";
import ReusableTable from "./ReusableTable";
import TabsSearchButton from "./TabsSearchButton";
import { DateProvider, useDate } from "./DateContext";
import { parse } from "date-fns";

function Closedticketscontent() {
  const [activeTab, setActiveTab] = useState("alltickets");
  const [loading, setLoading] = useState(false); // To track loading state
  const [visibleDataCount, setVisibleDataCount] = useState(6); // Number of tickets visible initially
  const { dateRange } = useDate();

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
      value: "createdby",
      label: "Created By",
      sortable: true,
    },
    {
      id: 6,
      value: "createddate",
      label: "Created Date",
      sortable: true,
    },
    {
      id: 7,
      value: "closeddate",
      label: "Closed Date",
      sortable: true,
    },
    {
      id: 8,
      value: "severity",
      label: "Severity",
      sortable: true,
    },
  ];

  // 🗂️ **Filtered Data Based on Date and Tab Selection**
  const getFilteredData = () => {
    if (!dateRange?.from || !dateRange?.to) {
      return data; // Return all data if no valid range is set
    }

    let filtered = data.filter((item) => {
      const createdDate = item.createddate
        ? parse(item.createddate, "dd-MM-yyyy", new Date())
        : null;
      const closedDate = item.closeddate
        ? parse(item.closeddate, "dd-MM-yyyy", new Date())
        : null;

      return (
        (createdDate &&
          createdDate >= dateRange.from &&
          createdDate <= dateRange.to) ||
        (closedDate && closedDate >= dateRange.from && closedDate <= dateRange.to)
      );
    });

    // Tab filter
    if (activeTab !== "alltickets") {
      filtered = filtered.filter(
        (ticket) => ticket.severity.toLowerCase() === activeTab
      );
    }

    return filtered;
  };

  // Get the filtered data and then slice for visibility
  const filteredData = getFilteredData();
  const visibleData = filteredData.slice(0, visibleDataCount);

  const handleSearch = (event) => {
    console.log("Search value:", event.target.value);
  };

  const handleCreateTicket = () => {
    console.log("Create New Ticket clicked");
  };

  return (
    <div>
      <div className="transition-all ml-4 mt-4 duration-300 ease-in-out">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div>
            <Pheader title="Closed Tickets" showCalendar={true} />
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
    </div>
  );
}

function Closedtickets() {
  return (
    <DateProvider>
      <Closedticketscontent />
    </DateProvider>
  );
}

export default Closedtickets;
