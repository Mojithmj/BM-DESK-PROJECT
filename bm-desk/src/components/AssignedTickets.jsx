import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Input } from "@/components/ui/input";
import Pheader from "./Pheader";
import { FiSearch } from "react-icons/fi";
import ReusableTable from "./ReusableTable";
import { IoMdArrowDown } from "react-icons/io";

function AssignedTickets() {
  const [activeTab, setActiveTab] = useState("alltickets");
  const [loading, setLoading] = useState(false); // To track loading state

  
  // State to manage table data
  const [data, setData] = useState([
    {
      id: 1,
      ticketnumber: "TCKT5642",
      projectname: "Project 1",
      subject: 15,
      expecteddate: "20-09-2023",
      expecteddeliverydate: "20-10-2024",
      severity: "Critical",
    },
    {
      id: 2,
      ticketnumber: "TCKT5643",
      projectname: "Project 1",
      subject: 15,
      // expecteddate: "",
      expecteddeliverydate: "20-10-2024",
      severity: "Minor",
    },
    {
      id: 3,
      ticketnumber: "TCKT5644",
      projectname: "Project 1",
      subject: 15,
      expecteddate: "20-09-2023",
      expecteddeliverydate: "20-10-2024",
      severity: "Major",
    },
  ]);

  const loadMoreData = () => {
    setLoading(true); // Start loading

    // Simulate fetching more data (e.g., from an API)
    setTimeout(() => {
      const moreData = [
        {
          id: 4,
          ticketnumber: "TCKT5642",
          projectname: "Project 1",
          subject: 15,
          expecteddate: "20-09-2023",
          expecteddeliverydate: "20-10-2024",
          severity: "Critical",
        },
        {
          id: 5,
          ticketnumber: "TCKT5646",
          projectname: "Project 1",
          subject: 15,
          expecteddate: "20-09-2023",
          expecteddeliverydate: "20-10-2024",
          severity: "Major",
        },
      ];
      setData((prevData) => [...prevData, ...moreData]); // Add new data to existing data
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
    },
    {
      id: 3,
      value: "projectname",
      label: "Project Name",
      // icon: <IoMdArrowDown />,
        
    //   icon: iconab,
    },
    {
      id: 4,
      value: "subject",
      label: "Subject",
    },

    {
      id: 5,
      value: "expecteddate",
      label: "Expected Date",
    },
    {
      id: 6,
      value: "expecteddeliverydate",
      label: "Expected delivery Date",
    },

    {
      id: 7,
      value: "severity",
      label: "Severity",
    },
    {
      id: 8,
      value: "ticketaction",
      label: "Ticket Action",
    },


  ];

  return (
    <div>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Sidebar */}
      <div className="fixed w-full top-16 md:w-[250px] md:block hidden">
        <Sidebar />
      </div>
      <div className="fixed top-24 left-64 w-[calc(100%_-_280px)]">
        <div className="flex flex-col gap-8">
          <div>
            <Pheader title="Assigned Tickets" />
          </div>
          {/* Tabs */}
          <div className="flex justify-between items-center">
            <div>
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
                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[5px] text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Create New Ticket
              </button>
            </div>
          </div>
          {/* Table */}
          <div>
            {activeTab==="alltickets" && <ReusableTable  headers={newHeaders} data={data}  />}
            {activeTab==="major" && <ReusableTable  headers={newHeaders} data={data.filter(data1 => data1.severity=== "Major")}  />}
            {activeTab==="minor" && <ReusableTable  headers={newHeaders} data={data.filter(data1 => data1.severity=== "Minor")}  />}
            {activeTab==="critical" && <ReusableTable  headers={newHeaders} data={data.filter(data1 => data1.severity=== "Critical")}  />}

          </div>
          <div className="flex justify-start">
            <button
              onClick={loadMoreData}
              className="text-[#165DFF] -mt-8"
              disabled={loading} // Disable the button while loading
            >
              {loading ? "Loading..." : "Load more Tickets...."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignedTickets;
