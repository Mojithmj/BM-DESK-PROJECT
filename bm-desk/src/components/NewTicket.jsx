import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import attachment from "../assets/attachment.svg"; // Adjust path as needed

export const NewTicket = ({ triggerButton }) => {
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
    }
  };

  const handleClear = () => {
    // Reset form fields
    setSelectedFileName('');
    // You might want to add logic to reset other form fields
  };

  return (
    <Dialog>
      {/* Use the triggerButton prop to render the button that opens the dialog */}
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>

      <DialogContent className="bg-white max-h-[90vh] overflow-y-auto border rounded-[5px]">
        <DialogHeader>
          <div className="grid">
            <DialogTitle className="text-[#165DFF] text-[26px]">
              New Ticket
            </DialogTitle>
            <p className="text-[14px]">Submit a New Ticket</p>
          </div>

          <div className="grid grid-cols-1 gap-4 py-4">
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
                className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB] rounded-[5px]"
              />
            </div>

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
                className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB] rounded-[5px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <Label
                htmlFor="department"
                className="mb-2 font-normal text-[12px]"
              >
                Department
              </Label>
              <Input
                id="department"
                placeholder="Select Project Name from list"
                className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB] rounded-[5px]"
              />
            </div>

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
                className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB] rounded-[5px]"
              />
            </div>

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
                className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB] rounded-[5px]"
              />
            </div>

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
                className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB] rounded-[5px]"
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
                className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB] rounded-[5px]"
              />
            </div>

            <div className="flex flex-col">
              <Label
                htmlFor="attachment"
                className="mb-2 font-normal text-[12px]"
              >
                Select Attachment
              </Label>
              <div className="relative flex items-center">
                <Input
                  type="file"
                  id="attachment"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Input
                  placeholder="Select Attachment"
                  className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB] rounded-[5px] pr-8"
                  readOnly
                  value={selectedFileName}
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

            <div className="flex flex-col">
              <Label
                htmlFor="ticketDescription"
                className="mb-2 font-normal text-[12px]"
              >
                Ticket Description
              </Label>
              <textarea
                id="ticketDescription"
                className="w-full h-[100px] p-2 border border-[#E5E6EB] placeholder:text-[13px] rounded-[5px] resize-none focus"
                placeholder="Enter Ticket Description"
              />
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={handleClear}
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
  );
};

export default NewTicket;