import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import TicketsSidebar from "./TicketsSidebar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RiArrowDropDownLine } from "react-icons/ri";

const frameworks = [
  {
    value: "Assignticket",
    label: "Assign Ticket",
  },
  {
    value: "rejectticket",
    label: "Reject Ticket",
  },
  {
    value: "resolveticket",
    label: "Resolve Ticket",
  },
  {
    value: "managementapproval",
    label: "Management Approval",
  },
];

function ReusableTable({ data, headers, currentTab, defaultSortConfig }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [sortConfig, setSortConfig] = useState(
    defaultSortConfig || { key: "projectname", direction: "ascending" }
  );

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [ticketAction, setTicketAction] = useState("");

  const handleAssignTicket = () => {
    setTicketAction("Assign Ticket"); // Set the action name
    setIsSheetOpen(true);
  };

  const sortedData = React.useMemo(() => {
    const sortableData = [...data];

    const severityOrder = { Critical: 1, Major: 2, Minor: 3 };
    const dateFields = [
      "requireddate",
      "expecteddate",
      "expecteddeliverydate",
      "closeddate",
      "createddate",
    ];

    sortableData.sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (sortConfig.key === "severity") {
        const aRank = severityOrder[aValue] || Infinity;
        const bRank = severityOrder[bValue] || Infinity;
        return sortConfig.direction === "ascending"
          ? aRank - bRank
          : bRank - aRank;
      }

      if (dateFields.includes(sortConfig.key)) {
        const dateA =
          aValue !== "--" && aValue
            ? new Date(aValue.split("-").reverse().join("-"))
            : null;
        const dateB =
          bValue !== "--" && bValue
            ? new Date(bValue.split("-").reverse().join("-"))
            : null;
        return sortConfig.direction === "ascending"
          ? dateA - dateB
          : dateB - dateA;
      }

      return sortConfig.direction === "ascending"
        ? aValue?.localeCompare(bValue)
        : bValue?.localeCompare(aValue);
    });

    return sortableData;
  }, [data, sortConfig]);

  const visibleData =
    currentTab === "All Tickets"
      ? sortedData.slice(0, visibleCount)
      : sortedData;

  const handleLoadMore = () => setVisibleCount((prevCount) => prevCount + 6);

  const handleSort = (column) => {
    const direction =
      sortConfig.key === column && sortConfig.direction === "ascending"
        ? "descending"
        : "ascending";
    setSortConfig({ key: column, direction });
  };

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="max-h-[55vh] overflow-y-auto">
      <Table className="border-[1px] !rounded overflow-hidden">
        <TableHeader>
          <TableRow className="bg-[#F2F3F5] hover:bg-[#F2F3F5]">
            {headers.map((header) => (
              <TableHead
                key={header.id}
                className={`text-[#4E5969] px-2 py-[15px] text-[12px] lg:text-[12px] 2xl-[14px]${
                  header.sortable ? "cursor-pointer" : ""
                }`}
                onClick={() => header.sortable && handleSort(header.value)}
              >
                <div className="flex items-center gap-2">
                  <span>{header.label}</span>
                  {header.sortable && (
                    <span>
                      {sortConfig.key === header.value ? (
                        sortConfig.direction === "ascending" ? (
                          <IoMdArrowUp />
                        ) : (
                          <IoMdArrowDown />
                        )
                      ) : (
                        <IoMdArrowUp className="text-gray-400" />
                      )}
                    </span>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {visibleData.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={headers.length}
                className="text-center text-[10px] 2xl:text-[14px] lg:text-[12px]"
              >
                No data available
              </TableCell>
            </TableRow>
          ) : (
            visibleData.map((row, rowIndex) => (
              <TableRow key={row.id}>
                {headers.map((header) => (
                  <TableCell
                    key={header.id}
                    className="text-[#1D2129] px-2 py-[15px] text-[10px] 2xl:text-[14 px] lg:text-[12px] md"
                  >
                    {header.value === "ticketnumber" ? (
                      <TicketsSidebar ticket={row}>
                        {row[header.value]}
                      </TicketsSidebar>
                    ) : header.value === "severity" ? (
                      <Badge
                        className="lg:text-[10px] 2xl:text-[12px] font-medium rounded px-2 py-1"
                        style={{
                          color:
                            row[header.value] === "Major"
                              ? "#FF7D00"
                              : row[header.value] === "Minor"
                              ? "#165DFF"
                              : "#CB2634",
                          backgroundColor:
                            row[header.value] === "Major"
                              ? "#FFF7E8"
                              : row[header.value] === "Minor"
                              ? "#E8F3FF"
                              : "#FFECE8",
                        }}
                      >
                        {row[header.value]}
                      </Badge>
                    ) : header.value === "ticketaction" ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <div className="flex shrink-0 items-center bg-[#F8F9FB] rounded-[4px] border-[1.5px] border-[#0E42D2] px-2 py-2 text-[#0E42D2] gap-2 w-[70%]">
                            <Button
                              className="rounded-[4px] border-none shadow-none !outline-none !p-0 !h-full font-normal text-[10px] md:text-[12px] 2xl:[14px] "
                              variant="outline"
                            >
                              Action
                            </Button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M5 7.5L10 12.5L15 7.5"
                                stroke="#0E42D2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white rounded-[10px] ">
                          <DropdownMenuItem
                            onSelect={handleAssignTicket}
                            className="cursor-pointer"
                          >
                            Assign Ticket
                          </DropdownMenuItem>
                          <DropdownMenuItem>Reject Ticket</DropdownMenuItem>
                          <DropdownMenuItem>Resolve Ticket</DropdownMenuItem>
                          <DropdownMenuItem>
                            Management Approval
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : header.value === "slno" ? (
                      rowIndex + 1
                    ) : (
                      row[header.value] || "--"
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="bg-white h-[100vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Ticket Action</SheetTitle>
          </SheetHeader>

          {/* <div className="grid grid-cols-1 gap-4 py-4">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : "Assign Ticket"}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[510px] p-0 bg-white">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          {framework.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              value === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div> */}

          <div className="grid grid-cols-1 gap-4 py-4">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between text-[#165DFF] bg-[#E8F3FF] text-[12px] md:text-[12px] lg:text-[12px] 2xl:text-[14px] border-[#E8F3FF] hover:text-[#165DFF] hover:bg-[#E8F3FF] font-normal"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : "Assign Ticket"}{" "}
                  {/* Default value "Assign Ticket" */}
                  {/* <ChevronsUpDown className="opacity-50" /> */}
                  <RiArrowDropDownLine className="opacity-50 size-1" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[510px] p-0 bg-white">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      {/* Exclude the "Assign Ticket" option from the dropdown */}
                      {frameworks
                        .filter(
                          (framework) => framework.value !== "assignticket"
                        ) // Remove "Assign Ticket" from options
                        .map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setValue(
                                currentValue === value ? "" : currentValue
                              );
                              setOpen(false);
                            }}
                          >
                            {framework.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                value === framework.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col relative">
            <Label
              htmlFor="instituteName"
              className="mb-2 font-normal text-[12px]"
            >
              Department
            </Label>
            <div className="relative w-full">
              <Input
                id="instituteName"
                placeholder="Select Department"
                className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB] pr-6"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none"
              >
                <path
                  d="M6.02145 8L0.0429688 1.99965L2.03673 0L6.02145 4.00071L10.0062 0L11.9999 1.99965L6.02145 8Z"
                  fill="#E5E6EB"
                />
              </svg>
            </div>
          </div>

          {/* Institute Name */}
          <div className="flex flex-col">
            <Label
              htmlFor="instituteName"
              className="mb-2 font-normal text-[12px]"
            >
              Category
            </Label>
            <Input
              id="instituteName"
              placeholder="Select category"
              className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
            />
          </div>

          {/* Institute Name */}
          <div className="flex flex-col">
            <Label
              htmlFor="instituteName"
              className="mb-2 font-normal text-[12px]"
            >
              Project
            </Label>
            <Input
              id="instituteName"
              placeholder="Select Project"
              className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
            />
          </div>

          {/* Project Manager */}
          <div className="flex flex-col">
            <Label
              htmlFor="instituteName"
              className="mb-2 font-normal text-[12px]"
            >
              Project Manager
            </Label>
            <Input
              id="instituteName"
              placeholder="Select Project Manager"
              className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
            />
          </div>

          {/* Issue Type */}
          <div className="flex flex-col">
            <Label
              htmlFor="instituteName"
              className="mb-2 font-normal text-[12px]"
            >
              Issue Type
            </Label>
            <Input
              id="instituteName"
              placeholder="Select Issue Type"
              className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
            />
          </div>

          {/* Required Date */}
          <div className="flex flex-col">
            <Label
              htmlFor="instituteName"
              className="mb-2 font-normal text-[12px]"
            >
              Required Date
            </Label>
            <Input
              id="instituteName"
              placeholder="Enter Required Date"
              className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
            />
          </div>

          {/* Select Attachment */}
          <div className="flex flex-col">
            <Label
              htmlFor="instituteName"
              className="mb-2 font-normal text-[12px]"
            >
              Select Attachment
            </Label>
            <Input
              id="instituteName"
              placeholder="Select Attachment"
              className="w-full text-black placeholder:text-[#86909C] placeholder:text-[12px] border border-[#E5E6EB]"
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

          <SheetFooter>
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
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {currentTab === "All Tickets" && data.length > visibleCount && (
        <div className="text-center mt-4">
          <Button
            onClick={handleLoadMore}
            className="bg-blue-500 text-white rounded px-4 py-2"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}

export default ReusableTable;
