import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiPlus } from "react-icons/fi";
import { HiPaperClip } from "react-icons/hi";
import image from "../assets/AvatarImage12.png";
import image1 from "../assets/AvatarImage13.png";
import { Button } from "./ui/button";
import ActionTickets from "./Sheets/ActionTickets";

function TicketsSidebar({ ticket, children }) {
  const [activeTab, setActiveTab] = useState("basicinfo");
  const [isActionSheetOpen, setIsActionSheetOpen] = useState(false); //split
  const handleViewTicket = () => {
    setActiveTab("basicinfo");
  };

  const handleActionSubmit = (formData) => {
    console.log("Action form submitted:", formData);
    setIsActionSheetOpen(false);
  };

  // Modify the relations tab content to include the split ticket action
  const renderRelationsTab = () => (
    <div className="flex flex-col gap-5 2xl:gap-[32px]">
      {tickets.map((ticket) => (
        <div className="flex flex-col gap-2" key={ticket.ticketno}>
          <div className="flex items-center justify-between">
            <p className="text-[#09090B] text-[12px] font-inter md:text-[14px] 2xl:text-[16px] font-semibold">
              {ticket.name}
            </p>
            <button
              onClick={() => setIsActionSheetOpen(true)}
              className="p-2 rounded-full transition-colors"
            >
              <FiPlus className="text-[#1D2129] w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-[12px] md:text-[13px] 2xl:text-[13px] text-[#343A40] pl-1">
                {ticket.ticketNumber}
              </p>
              <p className="text-[10px] md:text-[12px] 2xl:text-[12px] text-[#878A99] pl-1">
                {ticket.description}
              </p>
            </div>

            <Button
              onClick={handleViewTicket}
              className="text-[#165DFF] border border-[#165DFF] rounded-[5px]  p-[12px] text-[10px] md:text-[12px]"
            >
              View Ticket
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  const tabs = [
    {
      value: "basicinfo",
      label: "Basic Info",
      underlineWidth: "15%",
      underlineLeft: "3%",
    },
    {
      value: "attachments",
      label: "Attachments",
      underlineWidth: "18%",
      underlineLeft: "20.5%",
    },
    {
      value: "tickethistory",
      label: "Ticket History",
      underlineWidth: "18%",
      underlineLeft: "42.5%",
    },
    {
      value: "comments",
      label: "Comments",
      underlineWidth: "15%",
      underlineLeft: "65%",
    },
    {
      value: "relations",
      label: "Relations",
      underlineWidth: "15%",
      underlineLeft: "83%",
    },
  ];

  const ticketHistory = [
    {
      ticketNumber: "3452",
      date: "Sep 06",
      message: "Ticket - TICKT-7424 has been resolved by Reneeja X",
    },
    {
      ticketNumber: "7890",
      date: "Sep 10",
      message: "Ticket - TICKT-1256 has been resolved by John D",
      resolver: "Abhinandh",
    },
    {
      ticketNumber: "7891",
      date: "Sep 20",
      message: "Ticket - TICKT-1256 has been resolved by John D",
    },
    {
      ticketNumber: "7892",
      date: "Sep 12",
      message: "Ticket - TICKT-1256 has been resolved by John D",
    },
    // Add more ticket history items as needed
  ];
  const comments = [
    {
      ticketNumber: "3452",
      date: "Sep 06",
      message:
        "National CLG: Please Update The Semester To S5 For The Mentioned Students Who Have Been Admitted In Semester 5.",
    },
    {
      ticketNumber: "7890",
      date: "Sep 10",
      message: "Ticket - TICKT-1256 has been resolved by John D",
      resolver: "Abhinandh",
    },
    {
      ticketNumber: "7891",
      date: "Sep 20",
      message: "Ticket - TICKT-1256 has been resolved by John D",
    },
    {
      ticketNumber: "7892",
      date: "Sep 12",
      message: "Ticket - TICKT-1256 has been resolved by John D",
    },
    // Add more ticket history items as needed
  ];

  const tickets = [
    {
      name: "Parent Ticket",
      id: 3452,
      ticketno: 3452,
      ticketNumber: "TICKT-7424",
      resolvedBy: "Reneeja X",
      description: "Ticket - TICKT-7424 has been resolved by Reneeja X",
    },
    {
      name: "Child Ticket",
      id: 3453,
      ticketno: 3452,
      ticketNumber: "TICKT-7424",
      resolvedBy: "Reneeja X",
      description: "Ticket - TICKT-7424 has been resolved by Reneeja X",
    },
  ];

  // Define styles for severity
  const getSeverityStyle = (severity) => {
    switch (severity) {
      case "Major":
        return { color: "#FF7D00", backgroundColor: "#FFF7E8" };
      case "Minor":
        return { color: "#165DFF", backgroundColor: "#E8F3FF" };
      default:
        return { color: "#CB2634", backgroundColor: "#FFECE8" };
    }
  };
  const attachstyle = (attach) => {
    switch (attach) {
      case "Yes":
        return { color: "#FF7D00", backgroundColor: "#FFF7E8" };
      case "No":
        return { color: "#165DFF", backgroundColor: "#E8F3FF" };
      default:
        return { color: "#CB2634", backgroundColor: "#FFECE8" };
    }
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDownload = (file) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Sheet className="!relative">
        <SheetTrigger className="text-[#0E42D2] underline cursor-pointer ">
          {children}
        </SheetTrigger>
        <SheetContent className="bg-white sm:!w-full">
          <div className="flex flex-col gap-[10px] 2xl:gap-[32px]">
            <div>
              <SheetHeader>
                <SheetTitle className="text-[#165DFF] sm:text-[18px] md:text-[24px] lg:text-[28px] 2xl:text-[32px] font-medium font-inter mt-2">
                  Ticket Details
                </SheetTitle>
              </SheetHeader>
            </div>

            <div className="flex flex-col gap-[10px] 2xl:gap-[32px]">
              <div className="flex items-center font-inter text-[12px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]font-semibold text-[#1D2129] justify-between gap-1 px-4 py-2 relative">
                {tabs.map((tab, index) => (
                  <div key={tab.value} className="relative">
                    <button
                      onClick={() => setActiveTab(tab.value)}
                      className={`text-[12px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px] font-normal p-[6px] rounded-[4px] bg-white ${
                        activeTab === tab.value
                          ? "text-[#0E42D2]"
                          : "text-[#1D2129]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  </div>
                ))}

                {/* Full Underline */}
                <div className="absolute bottom-0 left-0 w-[100%] h-[1px] bg-[#E5E6EB]" />

                {/* Active Tab Underline */}
                <div
                  className="absolute bottom-0 h-[2px] transition-all duration-300 ease-in-out bg-[#0E42D2]"
                  style={{
                    left: `${
                      tabs.find((tab) => tab.value === activeTab)
                        ?.underlineLeft || "0%"
                    }`,
                    width: `${
                      tabs.find((tab) => tab.value === activeTab)
                        ?.underlineWidth || "80%"
                    }`,
                  }}
                />
              </div>

              <div className="p-4 text-[12px] md:text-[12px] lg:text-[12px] 2xl:text-[16px]">
                {/* Basic Info Tab */}
                {activeTab === "basicinfo" && (
                  <div className="flex flex-row gap-8 ">
                    {/* Labels Column */}
                    <div className="flex flex-col gap-3 2xl:gap-[20px] text-[14px] 2xl:text-[16px] text-gray-500">
                      <div>Ticket Number</div>
                      <div>Project Name</div>
                      <div>Subject</div>
                      <div>Expected Date</div>
                      <div>Expected Delivery Date</div>
                      <div>Severity</div>
                      <div>Attachment</div>
                      <div>Description</div>
                    </div>

                    {/* Values Column */}
                    <div className="flex flex-col gap-3 2xl:gap-[20px] text-[14px] 2xl:text-[16px] text-[#1D2129]">
                      <div>{ticket.ticketnumber}</div>
                      <div>{ticket.projectname}</div>
                      <div>{ticket.subject}</div>
                      <div>{ticket.expecteddate}</div>
                      <div>{ticket.expecteddeliverydate}</div>
                      <div>
                        <span
                          style={getSeverityStyle(ticket.severity)}
                          className="px-2 py-1 rounded"
                        >
                          {ticket.severity}
                        </span>
                      </div>
                      <div>
                        <span
                          style={attachstyle(ticket.attach)}
                          className="px-2 py-1 rounded"
                        >
                          {ticket.attachment || "--"}
                        </span>
                      </div>
                      <div>{ticket.description || "NA"}</div>
                    </div>
                  </div>
                )}

                {/* You can add more content for other tabs like Attachments, History, etc. */}
                {activeTab === "attachments" && (
                  <div>
                    {/* Upload Button */}
                    <div>
                      <input
                        type="file"
                        id="file-upload"
                        style={{ display: "none" }}
                        onChange={(e) => handleFileUpload(e)}
                        multiple
                      />
                    </div>

                    {/* Uploaded Files List */}
                    <div className="flex flex-col gap-5">
                      <div>
                        {uploadedFiles.length > 0 ? (
                          <div className="flex flex-wrap gap-4">
                            {uploadedFiles.map((file, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 p-3 bg-white border rounded-[10px] shadow-sm text-sm text-[#4E5969] w-full max-w-[30%]" // Each file takes up 30% width for 3 per row
                              >
                                <div className="flex shrink-0">
                                  <HiPaperClip className="text-[#165DFF]" />
                                </div>
                                <div className="flex flex-col">
                                  <div
                                    className="font-medium w-20 truncate text-[12px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]"
                                    title={file.name} // Tooltip to show the full name on hover
                                  >
                                    {file.name}
                                  </div>
                                  <div className="flex items-center">
                                    <div className=" sm:text-[10px] md:text-[12px] lg:text-[10px] 2xl:text-[12px] text-[#4E5969] ">
                                      {file.size < 1024 * 1024
                                        ? `${(file.size / 1024).toFixed(2)} KB`
                                        : `${(
                                            file.size /
                                            (1024 * 1024)
                                          ).toFixed(2)} MB`}
                                    </div>
                                    <button
                                      onClick={() => handleDownload(file)}
                                      className="text-[#4E5969] hover:text-[#4E5969] transition sm:text-[10px] md:text-[12px] lg:text-[10px] 2xl:text-[12px] ml-2"
                                    >
                                      Download
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-[#86909C]">
                            No attachments uploaded yet.
                          </p>
                        )}
                      </div>

                      {/* Add New File Button */}
                      <div
                        className="w-8 h-8 flex items-center justify-center border border-[#86909C] rounded cursor-pointer"
                        onClick={() =>
                          document.getElementById("file-upload").click()
                        }
                      >
                        <FiPlus className="w-5 h-5  text-[#1D2129]" />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "tickethistory" && (
                  <div className="flex flex-col gap-5">
                    {ticketHistory.map((history, index) => (
                      <div className="flex mb-4" key={index}>
                        <div>
                          <img
                            className="w-[40px] h-[40px]"
                            src={image}
                            alt="User Avatar"
                          />
                        </div>
                        <div className="ml-3 flex-grow">
                          <div className="flex justify-between">
                            <p className="text-[10px] md:text-[12px] lg:text-[12px] 2xl:text-[16px] text-[#343A40]">
                              Ticket {history.ticketNumber}
                            </p>
                            <p className="text-[10px] md:text-[12px] lg:text-[12px] 2xl:text-[16px] text-[#878A99]">
                              {history.date}
                            </p>
                          </div>
                          <p className="text-[10px] md:text-[12px] lg:text-[12px] 2xl:text-[16px] text-[#878A99]">
                            {history.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "comments" && (
                  <div className="flex flex-col gap-5">
                    {comments.map((history, index) => (
                      <div className="flex mb-4" key={index}>
                        <div>
                          <img
                            className="w-[40px] h-[40px]"
                            src={image1}
                            alt="User Avatar"
                          />
                        </div>
                        <div className="ml-3 flex-grow">
                          <div className="flex justify-between">
                            <p className="text-[10px] md:text-[12px] lg:text-[12px] 2xl:text-[16px] text-[#343A40]">
                              Ticket {history.ticketNumber}
                            </p>
                            <p className="text-[10px] md:text-[12px] lg:text-[12px] 2xl:text-[16px] text-[#878A99]">
                              {history.date}
                            </p>
                          </div>
                          <p className="text-[10px] md:text-[12px] lg:text-[12px] 2xl:text-[16px] text-[#878A99] w-[300px]">
                            {history.message}
                          </p>
                          {/* <p
                      className="text-[10px] md:text-[12px] lg:text-[12px] 2xl:text-[16px] text-[#878A99] w-[300px] overflow-hidden text-ellipsis whitespace-nowrap  "  // hover:overflow-visible hover:whitespace-normal for white space
                      title={history.message} // Tooltip for full message
                    >
                      {history.message}
                    </p> */}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "relations" &&
                  renderRelationsTab(
                    <div className="flex flex-col gap-5">
                      {tickets.map((ticket) => (
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between">
                            <p className="text-[#09090B] text-[12px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px] font-semibold">
                              {ticket.name}
                            </p>
                            <div>
                              <FiPlus className="text-[#1D2129] text-bold h-[14px] w-[14px]" />
                            </div>
                          </div>

                          <div
                            key={ticket.id}
                            className="flex items-center justify-between"
                          >
                            <div className="flex flex-col">
                              <p className=" sm:text-[9px] md:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[#343A40] pl-1">
                                Ticket {ticket.id}
                              </p>
                              <p className=" sm:text-[8px] md:text-[9px] xl:text-[10px] 2xl:text-[12px] text-[#878A99] pl-1">
                                {ticket.description}
                              </p>
                            </div>

                            <Button
                              onClick={() => setActiveTab("basicinfo")} // Navigate to the "comments" tab
                              className="text-[#165DFF] border border-[#165DFF]  rounded-[5px] text-[10px] md:text-[12px] lg:text-[12px] 2xl:text-[16px]"
                            >
                              View Ticket
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </div>

          <div>
            <div className="absolute bottom-0 left-5 w-[94%] top-[520px] h-[1px] bg-[#E5E6EB]" />
            <div className="absolute bottom-10 right-9">
              <div className="flex gap-2 justify-end text-[10px] md:text-[12px] lg:text-[12px] 2xl:text-[16px]">
                <Button className="text-[#165DFF] border border-[#165DFF] rounded-[3px]">
                  Cancel
                </Button>
                <Button className="text-[#FFFFFF] bg-[#165DFF] border border-[#165DFF] rounded-[3px] hover:bg-[#165DFF] hover:text-[#FFFFFF]">
                  Send Reminder
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      {/* Action Ticket Sheet */}
      <ActionTickets
        isOpen={isActionSheetOpen}
        onClose={() => setIsActionSheetOpen(false)}
        onSubmit={handleActionSubmit}
        action="Split Ticket"
      />
    </div>
  );
}

export default TicketsSidebar;
