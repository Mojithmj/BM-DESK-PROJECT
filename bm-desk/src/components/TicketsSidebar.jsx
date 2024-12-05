import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiPlus } from "react-icons/fi";
import { HiPaperClip } from "react-icons/hi";

function TicketsSidebar({ ticket, children }) {
  const [activeTab, setActiveTab] = useState("basicinfo");

  const tabs = [
    { value: "basicinfo", label: "Basic Info" },
    { value: "attachments", label: "Attachments" },
    { value: "tickethistory", label: "Ticket History" },
    { value: "comments", label: "Comments" },
    { value: "relations", label: "Relations" },
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
    <Sheet>
      <SheetTrigger className="text-[#0E42D2] underline cursor-pointer ">
        {children}
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle className="text-[#165DFF] text-[32px]">
            Ticket Details
          </SheetTitle>
        </SheetHeader>

        <div className="">
          <div className="flex items-center font-inter text-[16px]  font-semibold text-[#1D2129] gap-1 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`font-inter text-[16px] font-normal p-[6px] rounded-[4px] border-b-2 transition-colors  ${
                  activeTab === tab.value
                    ? "text-[#0E42D2] bg-white border-[#0E42D2]"
                    : "bg-white text-[#0E42D2] border-transparent hover:border-[#0E42D2]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="p-4 text-[16px]">
          {/* Basic Info Tab */}
          {activeTab === "basicinfo" && (
            <div className="flex flex-col gap-2 font-normal">
              <p className="text-[#1D2129]">
                <strong className=" text-[#86909C] font-normal">Ticket Number:</strong>{" "}
                {ticket.ticketnumber}
              </p>
              <p className="text-[#1D2129]">
                <strong className="text-[#86909C] font-normal">
                  Project Name:
                </strong>{" "}
                {ticket.projectname}
              </p>
              <p className="text-[#1D2129]">
                <strong className="text-[#86909C] font-normal">Subject:</strong>{" "}
                {ticket.subject}
              </p>
              <p className="text-[#1D2129]">
                <strong className="text-[#86909C] font-normal">
                  Expected Date:
                </strong>{" "}
                {ticket.expecteddate}
              </p>
              <p className="text-[#1D2129]">
                <strong className="text-[#86909C] font-normal">
                  Expected Delivery Date:
                </strong>{" "}
                {ticket.expecteddeliverydate}
              </p>
              <p className="text-[#1D2129]">
                <strong className="text-[#86909C] font-normal">
                  Severity:
                </strong>{" "}
                <span
                  style={getSeverityStyle(ticket.severity)}
                  className="px-2 py-1 rounded-[5px]"
                >
                  {ticket.severity}
                </span>
              </p>
              <p className="text-[#1D2129]">
                <strong className="text-[#86909C] font-normal">
                  Attachment:
                </strong>{" "}
                {ticket.attachment || "--"}
              </p>
              <p className="text-[#1D2129]">
                <strong className="text-[#86909C] font-normal">
                  Description:{" "}
                </strong>{" "}
                {ticket.description || "NA"}
              </p>
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

              {/*Uploaded Files List */}

              <div>
                <div>
                  {uploadedFiles.length > 0 ? (
                    <div className="flex items-center  gap-4 ">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between gap-2 p-3 bg-white border rounded-[10px] shadow-sm text-sm text-[#1D2129] w-full max-w-xs"
                        >
                          <div className="">
                          <HiPaperClip className="text-[#165DFF]" />
                            <div className=" font-medium truncate text-[13px]">
                              {file.name}
                            </div>
                            <div className="text-xs text-[#86909C] ">
                              {file.size < 1024 * 1024
                                ? `${(file.size / 1024).toFixed(2)} KB`
                                : `${(file.size / (1024 * 1024)).toFixed(
                                    2
                                  )} MB`}
                            </div>
                          </div>
                          <button
                            onClick={() => handleDownload(file)}
                            className="text-[#4E5969]  hover:text-[#4E5969] transition text-xs"
                          >
                            Download
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-[#86909C]">
                      No attachments uploaded yet.
                    </p>
                  )}
                </div>
                <div
                  className="w-8 h-8 flex items-center justify-center border border-[#86909C] rounded cursor-pointer mb-4"
                  onClick={() => document.getElementById("file-upload").click()}
                >
                  <FiPlus className="w-5 h-5 text-[#1D2129]" />
                </div>
              </div>
            </div>
          )}
          {activeTab === "tickethistory" && (
            <div>Ticket history goes here.</div>
          )}
          {activeTab === "comments" && <div>Comments go here.</div>}
          {activeTab === "relations" && <div>Relations info goes here.</div>}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default TicketsSidebar;
