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
  CommandList,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Combobox } from "../ui/ComboBox";
import { Textarea } from "@/components/ui/textarea";
import DatePickerInput from "../reusecomponents/DatePickerInput";

function ActionTickets({ isOpen, onClose, onSubmit, action }) {
  const [formData, setFormData] = useState({
    action: action || "Assign Ticket",
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
  const [selectedFile, setSelectedFile] = useState(null);

  // Reset state when sheet closes
  useEffect(() => {
    const cleanup = () => {
      // Reset all state
      setFormData({
        action: action || "Assign Ticket",
        department: "",
        category: "",
        project: "",
        projectManager: "",
        issueType: "",
        requiredDate: "",
        attachment: "",
        description: "",
      });
      setDropdownValue(action || "Assign Ticket");
      setSelectedFile(null);
      setPopoverOpen(false);

      // Restore focus to the body
      document.body.focus();
      // Remove any lingering aria-hidden attributes
      document.body.removeAttribute("aria-hidden");
      // Ensure body is scrollable
      document.body.style.overflow = "";
      document.body.style.pointerEvents = "";
    };

    if (!isOpen) {
      cleanup();
    }

    // Cleanup on unmount
    return () => {
      if (!isOpen) {
        cleanup();
      }
    };
  }, [isOpen, action]);

  useEffect(() => {
    if (action) {
      setDropdownValue(action);
      setFormData((prev) => ({ ...prev, action }));
    }
  }, [action]);

  const actionsList = [
    { value: "assignticket", label: "Assign Ticket" },
    { value: "rejectticket", label: "Reject Ticket" },
    { value: "resolveticket", label: "Verify & Close" },
    { value: "splitticket", label: "Split Ticket" },
    { value: "managementapproval", label: "Management Approval" },
  ];

  const handleActionChange = (newAction) => {
    const selectedAction = actionsList.find(
      (item) => item.value === newAction
    )?.label;
    setDropdownValue(selectedAction || "Assign Ticket");
    setFormData((prev) => ({ ...prev, action: selectedAction }));
    setPopoverOpen(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFormData((prev) => ({ ...prev, attachment: file.name }));
    }
  };

  const handleAttachmentClick = () => {
    document.getElementById("file-input").click();
  };

  const handleDateChange = (selectedDate) => {
    setFormData((prev) => ({ ...prev, requiredDate: selectedDate }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  const handleSheetClose = () => {
    // Call onClose first
    onClose();

    // Then reset state
    setFormData({
      action: action || "Assign Ticket",
      department: "",
      category: "",
      project: "",
      projectManager: "",
      issueType: "",
      requiredDate: "",
      attachment: "",
      description: "",
    });
    setDropdownValue(action || "Assign Ticket");
    setSelectedFile(null);
    setPopoverOpen(false);

    // Ensure body is interactive
    document.body.style.pointerEvents = "";
    document.body.removeAttribute("aria-hidden");
  };
  // Your existing mock data arrays
  const department = [
    { value: "department A", label: "Department A" },
    { value: "Department B", label: "Department B" },
  ];

  const category = [
    { value: "category A", label: "Category A" },
    { value: "categoryB", label: "Category B" },
  ];

  const project = [
    { value: "projecta", label: "Project A" },
    { value: "projectb", label: "Project B" },
  ];

  const projectmanager = [
    { value: "abhinandh", label: "Abhinandh" },
    { value: "bharadwaj", label: "Bharadwaj B" },
  ];

  const issuetype = [
    { value: "issuea", label: "Issue A" },
    { value: "issueb", label: "Issue B" },
  ];

  const renderFieldsForAction = () => {
    switch (formData.action) {
      case "Assign Ticket":
        return (
          <>
            <div className="flex flex-col h-full relative">
              {/* Scrollable content area - added sm:max-h-[80vh] for mobile */}
              <div className="max-h-[80vh] sm:max-h-[80vh] md:max-h-[65vh] overflow-y-auto flex-1">
                <div className="flex flex-col gap-[16px] 2xl:gap-[24px]">
                  <div className="flex flex-col gap-1 2xl:gap-2">
                    <h1 className="text-[#1D2129] text-[12px] md:text-[14px] 2xl:text-[16px] font-medium">
                      Department
                    </h1>
                    <Combobox
                      items={department}
                      placeholder="Select Department"
                      searchPlaceholder="Search department..."
                      className="placeholder:text-[14px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1 2xl:gap-2">
                    <h1 className="text-[#1D2129] text-[12px] md:text-[14px] 2xl:text-[16px]  font-medium">
                      Category
                    </h1>
                    <Combobox
                      items={category}
                      placeholder="Select Category"
                      searchPlaceholder="Search Category..."
                      className="placeholder:text-[14px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1 2xl:gap-2">
                    <h1 className="text-[#1D2129] text-[12px] md:text-[14px] 2xl:text-[16px]  font-medium">
                      Project
                    </h1>
                    <Combobox
                      items={project}
                      placeholder="Select Project"
                      searchPlaceholder="Search Project..."
                      className="placeholder:text-[14px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1 2xl:gap-2">
                    <h1 className="text-[#1D2129] text-[12px] md:text-[14px] 2xl:text-[16px]  font-medium">
                      Project Manager
                    </h1>
                    <Combobox
                      items={projectmanager}
                      placeholder="Select Project Manager"
                      searchPlaceholder="Search Project Manager..."
                      className="!placeholder:text-[14px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1 2xl:gap-2">
                    <h1 className="text-[#1D2129] text-[12px] md:text-[14px] 2xl:text-[16px]  font-medium">
                      Issue Type
                    </h1>
                    <Combobox
                      items={issuetype}
                      placeholder="Select Issue Type"
                      searchPlaceholder="Search Issue Type..."
                    />
                  </div>
                  <div className="flex flex-col gap-1 2xl:gap-2">
                    <h1 className="text-[#1D2129] text-[12px] md:text-[14px] 2xl:text-[16px]  font-medium">
                      Required date
                    </h1>
                    <div className="w-full">
                      <DatePickerInput onChange={handleDateChange} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 2xl:gap-2">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-[#1D2129] text-[12px] md:text-[14px] 2xl:text-[16px]  font-medium">
                        Select Attachment
                      </h1>
                      <div className="relative flex flex-row items-center">
                        <Input
                          type="text"
                          placeholder="Select Attachment"
                          className="pr-10 pl-3 border border-[#E5E6EB] rounded-[5px] w-full placeholder:text-[12px] text-[#878A99] cursor-pointer"
                          value={selectedFile ? selectedFile.name : ""}
                          readOnly
                          onClick={() =>
                            document.getElementById("file-input").click()
                          }
                        />
                        <ImAttachment
                          className="absolute right-2 text-gray-500 cursor-pointer w-3.5 h-3 mr-1"
                          onClick={handleAttachmentClick}
                        />
                        <input
                          id="file-input"
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </div>
                      {selectedFile && (
                        <div className="text-[12px] text-[#1D2129] mt-0">
                          <strong>Attached:</strong> {selectedFile.name}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 2xl:gap-2">
                    <h1 className="text-[#1D2129] text-[12px] md:text-[14px] 2xl:text-[16px]  font-medium">
                      Description
                    </h1>
                    <Textarea className="border-[#E5E6EB] rounded-[5px] h-[100px]" />
                  </div>
                </div>
              </div>

              {/* Fixed button container */}
              <div className="sticky bottom-0 left-0 bg-white w-full py-4 mt-auto border-t">
                <div className="flex flex-row gap-2 justify-end px-4">
                  <Button className="bg-[#FFFFFF] text-[#165DFF] text-[12px] border border-[#165DFF] rounded-[4px] px-[8px] py-[16px] w-[100px] 2xl:w-[136px] 2xl:h-[39px] h-[37px]">
                    Clear
                  </Button>
                  <Button className="bg-[#165DFF] text-[#FFFFFF] text-[12px] rounded-[4px] px-[8px] py-[16px] w-[100px] 2xl:w-[136px] 2xl:h-[39px] h-[37px] hover:bg-[#165DFF] hover:text-[#FFFFFF]">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </>
        );

      // Other cases remain the same
      case "Reject Ticket":
        return (
          // Your existing Reject Ticket JSX
          <>
            <div className="flex flex-col gap-1">
              <h1 className="text-[#1D2129] text-[12px] md:text-[14px] 2xl:text-[16px]  font-medium">
                Reason For Rejection
              </h1>
              <Textarea className="border-[#E5E6EB] rounded-[5px] h-[100px]" />
            </div>
            <div className="absolute bottom-0 left-5 w-[94%] top-[520px]">
              <div className="absolute bottom-8 right-6">
                <div className="flex flex-row gap-2">
                  <Button className=" bg-[#FFFFFF] text-[#165DFF] text-[12px] border border-[#165DFF] rounded-[4px] px-[8px] py-[16px] w-[100px] 2xl:w-[136px] 2xl:h-[39px] h-[37px] ">
                    Clear
                  </Button>
                  <Button className="bg-[#165DFF] text-[#FFFFFF] text-[12px] rounded-[4px] px-[8px] py-[16px] w-[100px] 2xl:w-[136px] 2xl:h-[39px] h-[37px] hover:bg-[#165DFF] hover:text-[#FFFFFF]">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </>
        );

      case "Verify & Close":
        return (
          <>
            <div className="flex flex-col gap-1">
              <h1 className="text-[#1D2129] text-[12px] md:text-[14px] 2xl:text-[16px]  font-medium">
                Comments
              </h1>

              <Textarea className="border-[#E5E6EB] rounded-[5px] h-[100px]" />
            </div>
            <div className="absolute bottom-0 left-5 w-[94%] top-[520px]">
              <div className="absolute bottom-8 right-6">
                <div className="flex flex-row gap-2">
                  <Button className="bg-[#FFFFFF] text-[#165DFF] text-[12px] border border-[#165DFF] rounded-[4px] px-[8px] py-[16px] w-[100px] 2xl:w-[136px] 2xl:h-[39px] h-[37px] ">
                    Clear
                  </Button>
                  <Button className="bg-[#165DFF] text-[#FFFFFF] text-[12px] rounded-[4px] px-[8px] py-[16px] w-[100px] 2xl:w-[136px] 2xl:h-[39px] h-[37px] hover:bg-[#165DFF] hover:text-[#FFFFFF]">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </>
        );
      case "Split Ticket":
        return (
          <>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <Label
                  htmlFor="select-category"
                  className="mb-2 font-medium text-[12px] md:text-[14px] 2xl:text-[16px]  text-[#1D2129] "
                >
                  Split Count
                </Label>
                <Input
                  type="text"
                  placeholder="Enter Split Count"
                  className="border-[#E5E6EB] rounded-[5px] placeholder:text-[#878A99] placeholder:text-[12px] 2xl:placeholder:text-[14px]"
                />
              </div>
              <div className="absolute bottom-0 left-5 w-[94%] top-[520px]">
                <div className="absolute bottom-8 right-6">
                  <div className="flex flex-row gap-2">
                    <Button className="bg-[#FFFFFF] text-[#165DFF] text-[12px] border border-[#165DFF] rounded-[4px] px-[8px] py-[16px] w-[100px] 2xl:w-[136px] 2xl:h-[39px] h-[37px] ">
                      Reset
                    </Button>
                    <Button className="bg-[#165DFF] text-[#FFFFFF] text-[12px] rounded-[4px] px-[8px] py-[16px] w-[100px] 2xl:w-[136px] 2xl:h-[39px] h-[37px] hover:bg-[#165DFF] hover:text-[#FFFFFF]">
                      Split
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "Management Approval":
        return (
          <>
            <div>
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <Label
                    htmlFor="select-category"
                    className="mb-2 font-medium text-[12px] md:text-[14px] 2xl:text-[16px]  text-[#1D2129] "
                  >
                    Select category
                  </Label>
                  <Combobox
                    items={category}
                    placeholder="Select Category"
                    searchPlaceholder="Search framework..."
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <Label
                  htmlFor="comments"
                  className="mb-2 font-medium text-[12px] md:text-[14px] 2xl:text-[16px]  text-[#1D2129] "
                >
                  Comments
                </Label>
                <Textarea className="border-[#E5E6EB] rounded-[5px] h-[100px]" />
              </div>
            </div>
            <div className="absolute bottom-0 left-5 w-[94%] top-[520px]">
              <div className="absolute bottom-8 right-6">
                <div className="flex flex-row gap-2">
                  <Button className="bg-[#FFFFFF] text-[#165DFF] text-[12px] border border-[#165DFF] rounded-[4px] px-[8px] py-[16px] w-[100px] 2xl:w-[136px] 2xl:h-[39px] h-[37px] ">
                    Clear
                  </Button>
                  <Button className="bg-[#165DFF] text-[#FFFFFF] text-[12px] rounded-[4px] px-[8px] py-[16px] w-[100px] 2xl:w-[136px] 2xl:h-[39px] h-[37px] hover:bg-[#165DFF] hover:text-[#FFFFFF]">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Sheet
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          handleSheetClose();
        }
      }}
    >
      <SheetContent
        className="bg-white md:h-[100vh]"
        // onInteractOutside={(e) => {
        //   e.preventDefault();
        // }}
        onEscapeKeyDown={(e) => {
          e.preventDefault();
          handleSheetClose();
        }}
      >
        <SheetHeader>
          <SheetTitle className="text-[24px] font-bold font-inter text-[#165DFF]">
            Ticket Action
          </SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-1 gap-5 2xl:gap-[32px] py-4">
          <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={popoverOpen}
                className="w-full justify-between text-[#165DFF] bg-[#E8F3FF] text-[12px] 2xl:text-[14px] border-[#E8F3FF] hover:text-[#165DFF] hover:bg-[#E8F3FF] font-normal !rounded-[5px]"
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

          {renderFieldsForAction()}
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
export default ActionTickets;
