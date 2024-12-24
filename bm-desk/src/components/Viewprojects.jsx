import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Input } from "@/components/ui/input";
import Pheader from "./Pheader";
import { FiSearch } from "react-icons/fi";
import ReusableTable from "./ReusableTable";
import { IoMdArrowDown } from "react-icons/io";
import TabsSearchButton from "./TabsSearchButton";
import { DateProvider, useDate } from "./DateContext";
import { parse } from "date-fns";

function Viewprojectcontent() {
  const [activeTab, setActiveTab] = useState("alltickets");
  const [loading, setLoading] = useState(false); // To track loading state
  const [visibleDataCount, setVisibleDataCount] = useState(6); // Number of tickets visible initially
  const { dateRange } = useDate();

  // State to manage table data
  const [data, setData] = useState([
    {
      id: 1,
      projectname: "Project 1",
      projectmanager: "Reneeja",
      category: "Cordova Cloud Solution",
      createddate: "24-12-2024",
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
  const tabs = [{ value: "alltickets", label: "All Tickets" }];

  const newHeaders = [
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

  const getFilteredData = () => {
    if (!dateRange?.from || !dateRange?.to) {
      return data; // Return all data if no valid range is set
    }

    let filtered = data.filter((item) => {
      const createdDate = item.createddate
        ? parse(item.createddate, "dd-MM-yyyy", new Date())
        : null;
      const endDate = item.enddate
        ? parse(item.enddate, "dd-MM-yyyy", new Date())
        : null;

      const fromDate = new Date(dateRange.from.setHours(0, 0, 0, 0));
      const toDate = new Date(dateRange.to.setHours(23, 59, 59, 999));

      return (
        (createdDate && createdDate >= fromDate && createdDate <= toDate) ||
        (endDate && endDate >= fromDate && endDate <= toDate)
      );
    });

    return filtered;
  };
  // Get the filtered data and then slice for visibility
  const filteredData = getFilteredData();
  const visibleData = filteredData.slice(0, visibleDataCount);

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
        <div className="flex flex-col gap-6">
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
          <ReusableTable
            headers={newHeaders}
            data={visibleData} // Show only visible tickets
            defaultSortConfig={{ key: "expecteddate", direction: "descending" }}
          />
          {/* Show "Load More" button only for "All Tickets" tab */}
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

function Viewproject() {
  return (
    <DateProvider>
      <Viewprojectcontent />
    </DateProvider>
  );
}

export default Viewproject;
