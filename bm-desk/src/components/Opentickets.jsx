import React, { useState } from "react";
import Pheader from "./Pheader";
import { FiSearch } from "react-icons/fi";

import { Input } from "@/components/ui/input";
import NewTicket from "./NewTicket";
import TabsSearchButton from "./TabsSearchButton";
import ReusableTable from "./ReusableTable";
import { DateProvider, useDate } from "./DateContext";
import { parse } from "date-fns";

function Openticketscontent() {
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
      subject: "A",
      // expecteddate: "20-05-2023",
      expecteddeliverydate: "20-10-2023",
      severity: "Critical",
    },
    {
      id: 2,
      ticketnumber: "TCKT5643",
      projectname: "Project B",
      subject: "Hello",
      // expecteddate: "20-06-2023",
      // expecteddeliverydate: "20-10-2024",
      severity: "Minor",
    },
    {
      id: 3,
      ticketnumber: "TCKT5644",
      projectname: "Project C",
      subject: "B",
      expecteddate: "24-12-2024",
      expecteddeliverydate: "24-12-2024",
      severity: "Major",
    },
    {
      id: 4,
      ticketnumber: "TCKT5644",
      projectname: "Project D",
      subject: "Z",
      expecteddate: "20-12-2023",
      expecteddeliverydate: "20-12-2024",
      severity: "Major",
    },
    {
      id: 5,
      ticketnumber: "TCKT5644",
      projectname: "Project E",
      subject: "N",
      expecteddate: "20-02-2023",
      expecteddeliverydate: "19-10-2024",
      severity: "Major",
    },
    {
      id: 6,
      ticketnumber: "TCKT5644",
      projectname: "Project F",
      subject: "V",
      expecteddate: "20-11-2023",
      expecteddeliverydate: "20-10-2022",
      severity: "Major",
    },
    {
      id: 7,
      ticketnumber: "TCKT5644",
      projectname: "Project 1",
      subject: "Y",
      expecteddate: "20-09-2023",
      expecteddeliverydate: "20-10-2021",
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
      value: "expecteddate",
      label: "Expected Date",
      // icon: <IoMdArrowDown />,
      sortable: true,
    },
    {
      id: 6,
      value: "expecteddeliverydate",
      label: "Expected delivery Date",
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
    {
      id: 8,
      value: "ticketaction",
      label: "Ticket Action",
      sortable: false,
    },
  ];
  // Get filtered data based on date and tab selection

  const getFilteredData = () => {
    if (!dateRange?.from || !dateRange?.to) {
      return data;
    }

    let filtered = data.filter((item) => {
      // Parse both dates from the item
      const expectedDate = item.expecteddate
        ? parse(item.expecteddate, "dd-MM-yyyy", new Date())
        : null;
      const deliveryDate = item.expecteddeliverydate
        ? parse(item.expecteddeliverydate, "dd-MM-yyyy", new Date())
        : null;

      // Set time to start of day for comparison
      const fromDate = new Date(dateRange.from.setHours(0, 0, 0, 0));
      const toDate = new Date(dateRange.to.setHours(23, 59, 59, 999));

      // Check if either date falls within the range
      const isExpectedDateInRange =
        expectedDate && expectedDate >= fromDate && expectedDate <= toDate;

      const isDeliveryDateInRange =
        deliveryDate && deliveryDate >= fromDate && deliveryDate <= toDate;

      return isExpectedDateInRange || isDeliveryDateInRange;
    });

    // Apply severity filter if not on "alltickets" tab
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
            <Pheader title="Open Tickets" showCalendar={true} />
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

function Opentickets() {
  return (
    <DateProvider>
      <Openticketscontent />
    </DateProvider>
  );
}

export default Opentickets;
