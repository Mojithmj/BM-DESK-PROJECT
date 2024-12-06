import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Input } from "@/components/ui/input";
import Pheader from "./Pheader";
import { FiSearch } from "react-icons/fi";
import ReusableTable from "./ReusableTable";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

function AssignedTickets() {
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
      expecteddate: "20-09-2024",
      expecteddeliverydate: "20-10-2024",
      severity: "Critical",
    },
    {
      id: 2,
      ticketnumber: "TCKT5643",
      projectname: "Project 3",
      subject: "TC Numbering Issue",
      expecteddate: "20-10-2022",
      expecteddeliverydate: "25-01-2024",
      severity: "Minor",
    },
    {
      id: 3,
      ticketnumber: "TCKT5644",
      projectname: "Project 2",
      subject: "To Change The Hierarchy",
      expecteddate: "20-09-2023",
      expecteddeliverydate: "02-09-2023",
      severity: "Major",
    },
    {
      id: 4,
      ticketnumber: "TCKT3333",
      projectname: "Project 4",
      subject: "To Change The Hierarchy",
      expecteddate: "20-09-2023",
      expecteddeliverydate: "02-09-2023",
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

  const filteredData =
    activeTab === "alltickets"
      ? data.slice(0, visibleDataCount) // Show limited data for "All Tickets"
      : data.filter((ticket) => ticket.severity.toLowerCase() === activeTab);

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
      <div className="fixed top-24 left-64 pl-0 2xl:pl-5 w-[calc(100%_-_280px)]">
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

              <div >
                <Dialog className="!border !rounded-md lg:w-10 sm:w-full">
                  {/* This button will act as the trigger for opening the dialog */}
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[5px] text-sm lg:text-[12px] 2xl:text-[16px] px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Create New Ticket
                    </button>
                  </DialogTrigger>

                  <DialogContent className="bg-white max-h-[90vh] overflow-y-auto border">
                    <DialogHeader>
                      <div className="grid text-12px">
                        <DialogTitle className="text-[#165DFF] text-[26px]">
                          New Ticket
                        </DialogTitle>
                        <p className="text-[14px]  ">Submit a New Ticket</p>
                      </div>

                      <div className="grid grid-cols-1 gap-4 py-4 text-[12px]">
                        {/* Email Address */}
                        <div className="flex flex-col ">
                          <Label
                            htmlFor="emailAddress"
                            className="mb-2 font-normal text:[10px] lg:text-[12px] 2xl:text-[16px]"
                          >
                            Email Address
                          </Label>
                          <Input
                            id="emailAddress"
                            placeholder="Enter Your Email Address"
                            className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
                          />
                        </div>

                        {/* Institute Name */}
                        <div className="flex flex-col">
                          <Label
                            htmlFor="instituteName"
                            className="mb-2 font-normal text:[10px] lg:text-[12px] 2xl:text-[16px]"
                          >
                            Institute Name
                          </Label>
                          <Input
                            id="instituteName"
                            placeholder="Enter Your Institute Name"
                            className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {/* Department */}
                        <div className="flex flex-col">
                          <Label
                            htmlFor="department"
                            className="mb-2 font-normal text:[10px] lg:text-[12px] 2xl:text-[16px]"
                          >
                            Department
                          </Label>
                          <Input
                            id="department"
                            placeholder="Select Project Name from list"
                            className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
                          />
                        </div>

                        {/* Severity Level */}
                        <div className="flex flex-col">
                          <Label
                            htmlFor="severitylevel"
                            className="mb-2 font-normal text:[10px] lg:text-[12px] 2xl:text-[16px]"
                          >
                            Severity Level
                          </Label>
                          <Input
                            id="severitylevel"
                            placeholder="Select Severity Level from list"
                            className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
                          />
                        </div>

                        {/* Project */}
                        <div className="flex flex-col">
                          <Label
                            htmlFor="project"
                            className="mb-2 font-normal text:[10px] lg:text-[12px] 2xl:text-[16px]"
                          >
                            Project
                          </Label>
                          <Input
                            id="project"
                            placeholder="Select Project from list"
                            className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
                          />
                        </div>

                        {/* Screen Number */}
                        <div className="flex flex-col">
                          <Label
                            htmlFor="screennumber"
                            className="mb-2 font-normal text:[10px] lg:text-[12px] 2xl:text-[16px]"
                          >
                            Screen Number
                          </Label>
                          <Input
                            id="screennumber"
                            placeholder="Enter Screen Number"
                            className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 py-4">
                        <div className="flex flex-col">
                          <Label
                            htmlFor="ticketsubject"
                            className="mb-2 font-normal text:[10px] lg:text-[12px] 2xl:text-[16px]"
                          >
                            Ticket Subject
                          </Label>
                          <Input
                            id="ticketsubject"
                            placeholder="Enter Ticket Subject"
                            className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
                          />
                        </div>

                        {/* Select Attachment */}
                        <div className="flex flex-col">
                          <Label
                            htmlFor="attachment"
                            className="mb-2 font-normal text:[10px] lg:text-[12px] 2xl:text-[16px]"
                          >
                            Select Attachment
                          </Label>
                          <Input
                            id="attachment"
                            placeholder="Select Attachment"
                            className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
                          />
                        </div>

                        <div className="flex flex-col">
                          <Label
                            htmlFor="instituteName"
                            className="mb-2 font-normal text:[10px] lg:text-[12px] 2xl:text-[16px]"
                          >
                            Ticket description
                          </Label>
                          <textarea
                            id="instituteName"
                            className="w-full h-[100px] p-2 border border-[#E5E6EB] placeholder:text-[13px]  rounded-md resize-none focus"
                            placeholder="Enter Ticket Description"
                          />
                        </div>
                      </div>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="submit"
                        className="bg-white text-[#165DFF] py-1 px-3 rounded border border-[#165DFF] text-[14px]"
                      >
                        Clear
                      </button>
                      <button
                        type="button"
                        className="bg-[#165DFF] text-white py-1 px-3 rounded text-[14px]"
                      >
                        Submit
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
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
    </div>
  );
}

export default AssignedTickets;
