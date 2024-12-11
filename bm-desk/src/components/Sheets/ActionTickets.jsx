import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ImAttachment } from "react-icons/im";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { Combobox } from "../ui/ComboBox";
import { Textarea } from "@/components/ui/textarea";

function ActionTickets({ isOpen, onClose, onSubmit, action }) {
  const [formData, setFormData] = useState({
    action: action || "Assign Ticket", // Default action
    department: "",
    category: "",
    project: "",
    projectManager: "",
    issueType: "",
    requiredDate: "",
    attachment: "",
    description: "",
  });

  const [dropdownValue, setDropdownValue] = useState(action || "Assign Ticket");
  const [popoverOpen, setPopoverOpen] = useState(false);

  useEffect(() => {
    if (action) {
      setDropdownValue(action);
      setFormData((prev) => ({ ...prev, action }));
    }
  }, [action]);

  const actionsList = [
    { value: "assignticket", label: "Assign Ticket" },
    { value: "rejectticket", label: "Reject Ticket" },
    { value: "resolveticket", label: "Resolve Ticket" },
    { value: "managementapproval", label: "Management Approval" },
  ];

  const handleActionChange = (newAction) => {
    console.log("Selected action:", newAction);
    const selectedAction = actionsList.find(
      (item) => item.value === newAction
    )?.label;
    setDropdownValue(selectedAction || "Assign Ticket");
    // setFormData({ ...formData, action: selectedAction });
    setFormData((prev) => ({ ...prev, action: selectedAction }));
    setPopoverOpen(false); // Close the popover after selection
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // setFormData({ ...formData, [id]: value });
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData); // Pass form data back to the parent
    onClose(); // Close the sheet
  };

  // Dynamically typed fields configuration
  const fields = [
    { id: "department", label: "Department", placeholder: "Enter department" },
    { id: "category", label: "Category", placeholder: "Enter category" },
    { id: "project", label: "Project", placeholder: "Enter project" },
    {
      id: "projectManager",
      label: "Project Manager",
      placeholder: "Enter project manager",
    },
    { id: "issueType", label: "Issue Type", placeholder: "Enter issue type" },
    {
      id: "requireddate",
      label: "Required Date",
      placeholder: "Enter Required Date",
    },
    {
      id: "attachement",
      label: " Select Attachment",
      placeholder: "Select Attachment",
    },
    { id: "description", label: "Description", placeholder: "" },
  ];

  // combobox
  // const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState("");

  const items = [
    {
      value: "categorya",
      label: "Category A",
    },
    {
      value: "categoryb",
      label: "Category B",
    },
  ];
  const department = [
    {
      value: "department A",
      label: "Department A",
    },
    {
      value: "Department B",
      label: "Department B",
    },
  ];
  const category = [
    {
      value: "category A",
      label: "Category A",
    },
    {
      value: "categoryB",
      label: "Category B",
    },
  ];

  const project = [
    {
      value: "projecta",
      label: "Project A",
    },
    {
      value: "projectb",
      label: "Project B",
    },
  ];

  const projectmanager = [
    {
      value: "abhinandh",
      label: "Abhinandh",
    },
    {
      value: "bharadwaj",
      label: "Bharadwaj B",
    },
  ];

  const issuetype = [
    {
      value: "issuea",
      label: "Issue A",
    },
    {
      value: "issueb",
      label: "Issue B",
    },
  ];

  // attachment in the action -> assign ticket
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAttachmentClick = () => {
    // Trigger the file input when the attachment icon is clicked
    document.getElementById("file-input").click();
  };

  const renderFieldsForAction = () => {
    switch (formData.action) {
      case "Assign Ticket":
        return (
          <>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h1 className="text-[#1D2129] text-[12px] font-medium">
                  Department
                </h1>
                <Combobox
                  items={department}
                  placeholder="Select Department"
                  searchPlaceholder="Search department..."
                  
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-[#1D2129] text-[12px] font-medium">
                  Category
                </h1>
                <Combobox
                  items={category}
                  placeholder="Select Category"
                  searchPlaceholder="Search Category..."
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-[#1D2129] text-[12px] font-medium">
                  Project
                </h1>
                <Combobox
                  items={project}
                  placeholder="Select Project"
                  searchPlaceholder="Search Project..."
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-[#1D2129] text-[12px] font-medium">
                  Project Manager
                </h1>
                <Combobox
                  items={projectmanager}
                  placeholder="Select Project Manager"
                  searchPlaceholder="Search Project Manager..."
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-[#1D2129] text-[12px] font-medium">
                  Issue Type
                </h1>
                <Combobox
                  items={issuetype}
                  placeholder="Select Issue Type"
                  searchPlaceholder="Search Issue Type..."
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-[#1D2129] text-[12px] font-medium">
                  Issue Type
                </h1>
                <Combobox
                  items={issuetype}
                  placeholder="Select Issue Type"
                  searchPlaceholder="Search Issue Type..."
                />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-[#1D2129] text-[12px] font-medium">
                  Required date
                </h1>
                <Input
                  type=""
                  placeholder="Enter Required Date"
                  className="border-[#E5E6EB] rounded-[5px] w-full placeholder:text-[12px] text-[#878A99]"
                />
              </div>
              <div className="flex flex-col gap-1">
                {/* <div className="relative flex flex-row items-center">
                  <Input
                    type="text"
                    placeholder="Select Attachment"
                    className="pr-10 pl-3 border border-[#E5E6EB] rounded-[5px] w-full placeholder:text-[12px]"
                  />
                  <ImAttachment className="absolute right-2 text-gray-500" />
                </div> */}
                <div className="flex flex-col gap-2">
                  <h1 className="text-[#1D2129] text-[12px] font-medium">
                    Select Attachment
                  </h1>

                  <div className="relative flex flex-row items-center">
                    <Input
                      type="text"
                      placeholder="Select Attachment"
                      className="pr-10 pl-3 border border-[#E5E6EB] rounded-[5px] w-full placeholder:text-[12px] text-[#878A99]"
                      value={selectedFile ? selectedFile.name : ""}
                      readOnly
                    />
                    <ImAttachment
                      className="absolute right-2 text-gray-500 cursor-pointer w-3.5 h-3 mr-1"
                      onClick={handleAttachmentClick}
                    />
                    {/* Hidden file input */}
                    <input
                      id="file-input"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>

                  {/* Display the file below the input */}
                  {selectedFile && (
                    <div className="text-[12px] text-[#1D2129] mt-0">
                      <strong>Attached:</strong> {selectedFile.name}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-[#1D2129] text-[12px] font-medium">
                  Description
                </h1>
                <Textarea className="border-[#E5E6EB] rounded-[5px] h-[100px]" />
              </div>
            </div>
          </>
        );
      case "Reject Ticket":
        return (
          <>
            <div className="flex flex-col gap-1">
              <h1 className="text-[#1D2129] text-[12px] font-medium">
                Reason For Rejection
              </h1>
              <Textarea className="border-[#E5E6EB] rounded-[5px] h-[100px]" />
            </div>
          </>
        );
      case "Resolve Ticket":
        return (
          <>
            <div className="flex flex-col gap-1">
              <h1 className="text-[#1D2129] text-[12px] font-medium">
                Resolved
              </h1>
              <Input
                type="text"
                placeholder="Description"
                className="pr-10 pl-3 border border-[#E5E6EB] rounded-[5px] w-full placeholder:text-[12px] text-[#878A99]"
              />
            </div>
            <div className="flex flex-col">
              <Label
                htmlFor="requiredDate"
                className="mb-2 font-normal text-[12px]"
              >
                Date Resolved
              </Label>
              <Input
                id="requiredDate"
                value={formData.requiredDate}
                onChange={handleInputChange}
                type="date"
                className="w-full  placeholder:text-[#86909C] placeholder:text-[12px] text-[#878A99] border border-[#E5E6EB] rounded-5px"
              />
            </div>
          </>
        );
      case "Management Approval":
        return (
          <>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <Label
                  htmlFor="select-category"
                  className="mb-2 font-medium text-[12px] text-[#1D2129] "
                >
                  Select category
                </Label>
                <Combobox
                  items={items}
                  placeholder="Select Category"
                  searchPlaceholder="Search framework..."
                />
              </div>
            </div>

            <div className="flex flex-col">
              <Label
                htmlFor="comments"
                className="mb-2 font-normal text-[12px]"
              >
                Comments
              </Label>
              <Textarea className="border-[#E5E6EB] rounded-[5px] h-[100px]" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="bg-white h-[100vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Ticket Action</SheetTitle>
          </SheetHeader>
          <div className="grid grid-cols-1 gap-4 py-4">
            {/* Action dropdown using Popover */}
            <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={popoverOpen}
                  className="w-full justify-between text-[#165DFF] bg-[#E8F3FF] text-[12px] md:text-[12px] lg:text-[12px] 2xl:text-[14px] border-[#E8F3FF] hover:text-[#165DFF] hover:bg-[#E8F3FF] font-normal"
                >
                  {dropdownValue}
                  <RiArrowDropDownLine className="opacity-50 size-1" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[510px] p-0 bg-white">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      {actionsList.map((actionItem) => (
                        <CommandItem
                          key={actionItem.value}
                          value={actionItem.value}
                          onSelect={() => handleActionChange(actionItem.value)}
                        >
                          {actionItem.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            {/* Render dynamic form fields based on selected action */}
            {renderFieldsForAction()}
          </div>
          <SheetFooter>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="bg-white text-[#165DFF] py-1 px-3 rounded border border-[#165DFF] text-[14px]"
                // onClick={() =>
                //   setFormData({
                //     action: "Assign Ticket",
                //     department: "",
                //     category: "",
                //     project: "",
                //     projectManager: "",
                //     issueType: "",
                //     requiredDate: "",
                //     attachment: "",
                //     description: "",
                //   })
                // }
              >
                Clear
              </button>
              <Button
                onClick={handleSubmit}
                className="bg-[#165DFF] text-white py-2 px-3 rounded text-[14px] hover:bg-[#165DFF] hover:text-white"
              >
                Submit
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default ActionTickets;
