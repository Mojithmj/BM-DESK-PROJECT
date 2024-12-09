import React, { useState } from "react";
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
import { Input } from "@/components/ui/input";

function AssignedTickets() {
  const [activeTab, setActiveTab] = useState("alltickets");
  const [loading, setLoading] = useState(false); // To track loading state
  const [visibleDataCount, setVisibleDataCount] = useState(6); // Number of tickets visible initially

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
      expecteddate: "20-09-2024",
      expecteddeliverydate: "20-09-2024",
      severity: "Major",
    },
    {
      id: 4,
      ticketnumber: "TCKT5644",
      projectname: "Project D",
      subject: "Z",
      expecteddate: "20-12-2023",
      expecteddeliverydate: "20-02-2024",
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
  const filteredData =
    activeTab === "alltickets"
      ? data.slice(0, visibleDataCount) // Show limited data for "All Tickets"
      : data.filter((ticket) => ticket.severity.toLowerCase() === activeTab);

  return (
    <div>
      <div className="fixed top-24 left-64 w-[calc(100%_-_280px)]">
        <div className="flex flex-col gap-8">
          <div>
            <Pheader title="Open Tickets" />
          </div>
          {/* Tabs */}
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`font-inter text-[16px]  font-normal p-[6px] rounded-[4px] px-4 transition-colors ${
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
              <div>
                <Dialog className="!border !rounded-md">
                  {/* This button will act as the trigger for opening the dialog */}
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[5px] text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Create New Ticket
                    </button>
                  </DialogTrigger>

                  <DialogContent className="bg-white max-h-[90vh] overflow-y-auto border rounded-md">
                    <DialogHeader>
                      <div className="grid">
                        <DialogTitle className="text-[#165DFF] text-[26px]">
                          New Ticket
                        </DialogTitle>
                        <p className="text-[14px]  ">Submit a New Ticket</p>
                      </div>

                      <div className="grid grid-cols-1 gap-4 py-4">
                        {/* Email Address */}
                        <div className="flex flex-col">
                          <Label
                            htmlFor="emailAddress"
                            className="mb-2 font-normal text-[12px]"
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
                            className="mb-2 font-normal text-[12px]"
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
                        <div className="flex flex-col ">
                          <Label
                            htmlFor="department"
                            className="mb-2 font-normal text-[12px]"
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
                            className="mb-2 font-normal text-[12px]"
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
                            className="mb-2 font-normal text-[12px]"
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
                            className="mb-2 font-normal text-[12px]"
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
                            className="mb-2 font-normal text-[12px]"
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
                            className="mb-2 font-normal text-[12px]"
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
                            className="mb-2 font-normal text-[12px]"
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
            defaultSortConfig={{ key: "expecteddate", direction: "descending" }}
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
