// import React, { useState } from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetFooter,
// } from "@/components/ui/sheet";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import {
//   Command,
//   CommandGroup,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";

// function ActionTickets({ isOpen, onClose, onSubmit, action }) {
//   const [formData, setFormData] = useState({
//     action: action || "Assign Ticket", // Default action
//     department: "",
//     category: "",
//     project: "",
//     projectManager: "",
//     issueType: "",
//     requiredDate: "",
//     attachment: "",
//     description: "",
//   });

//   const [dropdownValue, setDropdownValue] = useState(action || "Assign Ticket");
//   const [popoverOpen, setPopoverOpen] = useState(false);

//   const actionsList = [
//     { value: "assignticket", label: "Assign Ticket" },
//     { value: "rejectticket", label: "Reject Ticket" },
//     { value: "resolveticket", label: "Resolve Ticket" },
//     { value: "managementapproval", label: "Management Approval" },
//   ];

//   const handleActionChange = (newAction) => {
//     const selectedAction = actionsList.find(
//       (item) => item.value === newAction
//     )?.label;
//     setDropdownValue(selectedAction || "Assign Ticket");
//     setFormData({ ...formData, action: selectedAction });
//     setPopoverOpen(false); // Close the popover after selection
//   };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = () => {
//     onSubmit(formData); // Pass form data back to the parent
//     onClose(); // Close the sheet
//   };

//     // Conditionally render input fields based on selected action
//     const renderActionSpecificFields = () => {
//         switch (dropdownValue) {
//           case "Reject Ticket":
//             return (
//               <div className="flex flex-col">
//                 <Label htmlFor="reason" className="mb-2 font-normal text-[12px]">
//                   Reason for Rejection
//                 </Label>
//                 <Input
//                   id="reason"
//                   placeholder="Enter reason"
//                   value={formData.reason || ""}
//                   onChange={handleInputChange}
//                   className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
//                 />
//               </div>
//             );
//           case "Resolve Ticket":
//             return (
//               <div className="flex flex-col">
//                 <Label htmlFor="resolution" className="mb-2 font-normal text-[12px]">
//                   Resolution Notes
//                 </Label>
//                 <textarea
//                   id="resolution"
//                   value={formData.resolution || ""}
//                   onChange={handleInputChange}
//                   className="w-full h-[100px] p-2 border border-[#E5E6EB] placeholder:text-[13px] rounded-md resize-none"
//                   placeholder="Resolution details"
//                 />
//               </div>
//             );
//           case "Management Approval":
//             return (
//               <div className="flex flex-col">
//                 <Label htmlFor="approvalNotes" className="mb-2 font-normal text-[12px]">
//                   Approval Notes
//                 </Label>
//                 <Input
//                   id="approvalNotes"
//                   placeholder="Enter approval notes"
//                   value={formData.approvalNotes || ""}
//                   onChange={handleInputChange}
//                   className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
//                 />
//               </div>
//             );
//           default:
//             return null;
//         }
//       };

//       return (
//         <div>
//           <Sheet open={isOpen} onOpenChange={onClose}>
//             <SheetContent className="bg-white h-[100vh] overflow-y-auto">
//               <SheetHeader>
//                 <SheetTitle>Ticket Action</SheetTitle>
//               </SheetHeader>
//               <div className="grid grid-cols-1 gap-4 py-4">
//                 {/* Action dropdown using Popover */}
//                 <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       role="combobox"
//                       aria-expanded={popoverOpen}
//                       className="w-full justify-between text-[#165DFF] bg-[#E8F3FF] text-[12px] md:text-[12px] lg:text-[12px] 2xl:text-[14px] border-[#E8F3FF] hover:text-[#165DFF] hover:bg-[#E8F3FF] font-normal"
//                     >
//                       {dropdownValue}
//                       <RiArrowDropDownLine className="opacity-50 size-1" />
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-[510px] p-0 bg-white">
//                     <Command>
//                       <CommandList>
//                         <CommandGroup>
//                           {actionsList.map((actionItem) => (
//                             <CommandItem
//                               key={actionItem.value}
//                               value={actionItem.value}
//                               onSelect={() => handleActionChange(actionItem.value)}
//                             >
//                               {actionItem.label}
//                             </CommandItem>
//                           ))}
//                         </CommandGroup>
//                       </CommandList>
//                     </Command>
//                   </PopoverContent>
//                 </Popover>

//                 {/* Other input fields */}
//                 {Object.keys(formData)
//                   .filter((field) => field !== "action") // Exclude action field
//                   .map((field) => (
//                     <div key={field} className="flex flex-col">
//                       <Label
//                         htmlFor={field}
//                         className="mb-2 font-normal text-[12px] capitalize"
//                       >
//                         {field.replace(/([A-Z])/g, " $1")}
//                       </Label>
//                       {field === "description" ? (
//                         <textarea
//                           id={field}
//                           value={formData[field]}
//                           onChange={handleInputChange}
//                           className="w-full h-[100px] p-2 border border-[#E5E6EB] placeholder:text-[13px] rounded-md resize-none"
//                           placeholder={field}
//                         />
//                       ) : (
//                         <Input
//                           id={field}
//                           placeholder={field}
//                           value={formData[field]}
//                           onChange={handleInputChange}
//                           className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
//                         />
//                       )}
//                     </div>
//                   ))}
//                 {renderActionSpecificFields()}
//               </div>
//               <SheetFooter>
//                 <div className="grid grid-cols-2 gap-4">
//                   <button
//                     type="button"
//                     className="bg-white text-[#165DFF] py-1 px-3 rounded border border-[#165DFF] text-[14px]"
//                     onClick={() =>
//                       setFormData({
//                         action: "Assign Ticket",
//                         department: "",
//                         category: "",
//                         project: "",
//                         projectManager: "",
//                         issueType: "",
//                         requiredDate: "",
//                         attachment: "",
//                         description: "",
//                       })
//                     }
//                   >
//                     Clear
//                   </button>
//                   <button
//                     type="button"
//                     className="bg-[#165DFF] text-white py-1 px-3 rounded text-[14px]"
//                     onClick={handleSubmit}
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </SheetFooter>
//             </SheetContent>
//           </Sheet>
//         </div>
//       );
//     }
//     export default ActionTickets;

import React, { useState } from "react";
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

  const actionsList = [
    { value: "assignticket", label: "Assign Ticket" },
    { value: "rejectticket", label: "Reject Ticket" },
    { value: "resolveticket", label: "Resolve Ticket" },
    { value: "managementapproval", label: "Management Approval" },
  ];

 

  const handleActionChange = (newAction) => {
    const selectedAction = actionsList.find(
      (item) => item.value === newAction
    )?.label;
    setDropdownValue(selectedAction || "Assign Ticket");
    setFormData({ ...formData, action: selectedAction });
    setPopoverOpen(false); // Close the popover after selection
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData); // Pass form data back to the parent
    onClose(); // Close the sheet
  };

  //Assign
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
      id: "requiredDate",
      label: "Required Date",
      placeholder: "Enter required date",
    },
    { id: "attachment", label: "Attachment", placeholder: "Upload attachment" },
    {
      id: "description",
      label: "Description",
      placeholder: "Enter description",
    },
  ];

  const categories = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    { value: "category3", label: "Category 3" },
    { value: "category4", label: "Category 4" },
  ];

  const renderFieldsForAction = () => {
    switch (formData.action) {
      case "Assign Ticket":
        return (
          <>
            <div className="flex flex-col gap-2">
              {fields.map((field) => (
                <div key={field.id} className="flex flex-col">
                  <Label
                    htmlFor={field.id}
                    className="mb-2 font-normal text-[12px]"
                  >
                    {field.label}
                  </Label>
                  <Input
                    id={field.id}
                    value={formData[field.id]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
                  />
                </div>
              ))}
            </div>
          </>
        );
      case "Reject Ticket":
        return (
          <>
            <div className="flex flex-col">
              <Label
                htmlFor="category"
                className="mb-2 font-normal text-[12px]"
              >
                Category
              </Label>
              <Input
                id="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
              />
            </div>
            <div className="flex flex-col">
              <Label
                htmlFor="description"
                className="mb-2 font-normal text-[12px]"
              >
                Reason for Rejection
              </Label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full h-[100px] p-2 border border-[#E5E6EB] placeholder:text-[13px] rounded-md resize-none"
                placeholder="Provide a reason for rejection"
              />
            </div>
          </>
        );
      case "Resolve Ticket":
        return (
          <>
            <div className="flex flex-col">
              <Label
                htmlFor="issueType"
                className="mb-2 font-normal text-[12px]"
              >
                Issue Type
              </Label>
              <Input
                id="issueType"
                value={formData.issueType}
                onChange={handleInputChange}
                className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
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
                className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
              />
            </div>
          </>
        );
      case "Management Approval":
        return (
          <>
            <div className="flex flex-col">
              <Label
                htmlFor="selectcategory"
                className="mb-2 font-normal text-[12px]"
              >
                Select category
              </Label>

              <Input
                id="screennumber"
                placeholder="Select Category"
                className="w-full text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
              />
            </div>

            <div className="flex flex-col">
              <Label
                htmlFor="comments"
                className="mb-2 font-normal text-[12px]"
              >
                Comments
              </Label>
              <textarea
                id="instituteName"
                className="w-full h-[100px] p-2 border border-[#E5E6EB] placeholder:text-[13px]  rounded-md resize-none focus"
                placeholder=""
              />
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
                onClick={() =>
                  setFormData({
                    action: "Assign Ticket",
                    department: "",
                    category: "",
                    project: "",
                    projectManager: "",
                    issueType: "",
                    requiredDate: "",
                    attachment: "",
                    description: "",
                  })
                }
              >
                Reset
              </button>
              <Button
                onClick={handleSubmit}
                className="bg-[#165DFF] text-white py-2 px-3 rounded text-[14px]"
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
