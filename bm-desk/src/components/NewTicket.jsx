import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import attachment from "../assets/attachment.svg"; // Adjust path as needed

export const NewTicket = ({ triggerButton }) => {
  const [selectedFileName, setSelectedFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
    }
  };
  const handleInputClick = () => {
    // Trigger file input when the input field is clicked
    fileInputRef.current.click();
  };

  const handleClear = () => {
    // Reset form fields
    setSelectedFileName("");
    // You might want to add logic to reset other form fields
  };

  return (
    <Dialog>
      {/* Use the triggerButton prop to render the button that opens the dialog */}
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>

      <DialogContent className="bg-white max-h-[90vh] overflow-y-auto border !rounded-[5px] p-8 2xl:p-[64px]">
        <DialogHeader>
          <div className="flex flex-col gap-[8px] 2xl:gap-[16px]">
            <div>
              <div className="flex flex-col gap-4 2xl:gap-[24px]">
                <div className="grid">
                  <DialogTitle className="text-[#165DFF] text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] 2xl:text-[32px]">
                    New Ticket
                  </DialogTitle>
                  <p className="text-[12px] sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[#4E5969]">
                    Submit a New Ticket
                  </p>
                </div>
                <div className="flex flex-col gap-5 2xl:gap-[32px]">
                  <div className="grid grid-cols-1 gap-5 2xl:gap-[32px]">
                    <div className="flex flex-col 2xl:gap-2">
                      <Label
                        htmlFor="emailAddress"
                        className="mb-2 font-normal text-[12px] sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="emailAddress"
                        placeholder="Enter Your Email Address"
                        className="w-full text-[#86909C] placeholder:text-[8px] sm:placeholder:text-[12px] md:placeholder:text-[10px] lg:placeholder:text-[12px] 2xl:placeholder:text-[14px] border border-[#E5E6EB] rounded-[5px] py-[10px] px-[16px]"
                      />
                    </div>

                    <div className="flex flex-col 2xl:gap-2">
                      <Label
                        htmlFor="instituteName"
                        className="mb-2 font-normal text-[12px] sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]"
                      >
                        Institute Name
                      </Label>
                      <Input
                        id="instituteName"
                        placeholder="Enter Your Institute Name"
                        className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] sm:placeholder:text-[8px] md:placeholder:text-[10px] lg:placeholder:text-[12px] 2xl:placeholder:text-[14px] border border-[#E5E6EB] rounded-[5px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5 2xl:gap-[32px]">
                    <div className="flex flex-col 2xl:gap-2">
                      <Label
                        htmlFor="department"
                        className="mb-2 font-normal text-[12px] sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]"
                      >
                        Department
                      </Label>
                      <Input
                        id="department"
                        placeholder="Select Project Name from list"
                        className="w-full text-[#86909C] placeholder:text-[8px] sm:placeholder:text-[12px] md:placeholder:text-[10px] lg:placeholder:text-[12px] 2xl:placeholder:text-[14px] border border-[#E5E6EB] rounded-[5px]"
                      />
                    </div>

                    <div className="flex flex-col 2xl:gap-2">
                      <Label
                        htmlFor="severitylevel"
                        className="mb-2 font-normal text-[12px] sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]"
                      >
                        Severity Level
                      </Label>
                      <Input
                        id="severitylevel"
                        placeholder="Select Severity Level from list"
                        className="w-full text-[#86909C] placeholder:text-[8px] sm:placeholder:text-[12px] md:placeholder:text-[10px] lg:placeholder:text-[12px] 2xl:placeholder:text-[14px] border border-[#E5E6EB] rounded-[5px]"
                      />
                    </div>

                    <div className="flex flex-col 2xl:gap-2">
                      <Label
                        htmlFor="project"
                        className="mb-2 font-normal text-[12px] sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]"
                      >
                        Project
                      </Label>
                      <Input
                        id="project"
                        placeholder="Select Project from list"
                        className="w-full text-[#86909C] placeholder:text-[8px] sm:placeholder:text-[12px] md:placeholder:text-[10px] lg:placeholder:text-[12px] 2xl:placeholder:text-[14px] border border-[#E5E6EB] rounded-[5px]"
                      />
                    </div>

                    <div className="flex flex-col 2xl:gap-2">
                      <Label
                        htmlFor="screennumber"
                        className="mb-2 font-normal text-[12px] sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]"
                      >
                        Screen Number
                      </Label>
                      <Input
                        id="screennumber"
                        placeholder="Enter Screen Number"
                        className="w-full text-[#86909C] placeholder:text-[8px] sm:placeholder:text-[12px] md:placeholder:text-[10px] lg:placeholder:text-[12px] 2xl:placeholder:text-[14px] border border-[#E5E6EB] rounded-[5px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 2xl:gap-[32px] ">
                    <div className="flex flex-col">
                      <Label
                        htmlFor="ticketsubject"
                        className="mb-2 font-normal text-[12px] sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]"
                      >
                        Ticket Subject
                      </Label>
                      <Input
                        id="ticketsubject"
                        placeholder="Enter Ticket Subject"
                        className="w-full text-[#86909C] placeholder:text-[8px] sm:placeholder:text-[12px] md:placeholder:text-[10px] lg:placeholder:text-[12px] 2xl:placeholder:text-[14px] border border-[#E5E6EB] rounded-[5px]"
                      />
                    </div>

                    <div className="flex flex-col">
                      <Label
                        htmlFor="attachment"
                        className="mb-2 font-normal text-[12px] sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]"
                      >
                        Select Attachment
                      </Label>
                      <div className="relative flex items-center">
                        <input
                          type="file"
                          id="attachment"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <Input
                          placeholder="Select Attachment"
                          className="w-full text-[#86909C] placeholder:text-[8px] sm:placeholder:text-[10px] md:placeholder:text-[10px] lg:placeholder:text-[12px] 2xl:placeholder:text-[14px] border border-[#E5E6EB] rounded-[5px] pr-8 cursor-pointer"
                          readOnly
                          value={selectedFileName}
                          onClick={handleInputClick} // Add click handler to the input
                        />
                        <Label
                          htmlFor="attachment"
                          className="absolute right-3 cursor-pointer"
                        >
                          <img
                            src={attachment}
                            alt="Attachment icon"
                            className="h-3 w-3"
                          />
                        </Label>
                      </div>
                      {selectedFileName && (
                        <p className="text-[11px] text-[#302f2f] mt-2">
                          Selected File: {selectedFileName}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <Label
                    htmlFor="ticketDescription"
                    className="mb-2 font-normal text-[12px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]"
                  >
                    Ticket Description
                  </Label>
                  <textarea
                    id="ticketDescription"
                    className="w-full h-[100px] outline-none p-2 border border-[#E5E6EB] placeholder:text-[8px] sm:placeholder:text-[10px] md:placeholder:text-[10px] lg:placeholder:text-[12px] 2xl:placeholder:text-[14px] rounded-[5px] resize-none focus"
                    placeholder="Enter Ticket Description"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleClear}
                  className="bg-white text-[#165DFF] py-1 px-3 rounded border border-[#165DFF] text-[12px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]"
                >
                  Clear
                </button>
                <button
                  type="button"
                  className="bg-[#165DFF] text-white py-1 px-3 rounded text-[12px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default NewTicket;
