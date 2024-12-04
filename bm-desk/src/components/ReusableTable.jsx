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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function ReusableTable({ data, headers, currentTab, defaultSortConfig }) {
  // State to manage visible tickets
  const [visibleCount, setVisibleCount] = useState(6);

  const [sortConfig, setSortConfig] = useState(
    defaultSortConfig || { key: "projectname", direction: "ascending" }
  );

  const [selectedTicket, setSelectedTicket] = useState(null); // State to manage selected ticket for Sheet

  const sortedData = React.useMemo(() => {
    const sortableData = [...data];

    const severityOrder = {
      Critical: 1,
      Major: 2,
      Minor: 3,
    };

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
        const aRank = severityOrder[aValue] || Infinity; // Default rank if not found
        const bRank = severityOrder[bValue] || Infinity;

        return sortConfig.direction === "ascending"
          ? aRank - bRank
          : bRank - aRank;
      }

      if (dateFields.includes(sortConfig.key)) {
        const isAMissing = aValue === "--" || aValue === undefined;
        const isBMissing = bValue === "--" || bValue === undefined;

        if (isAMissing && isBMissing) return 0;
        if (isAMissing) return sortConfig.direction === "ascending" ? 1 : -1;
        if (isBMissing) return sortConfig.direction === "ascending" ? -1 : 1;

        const dateA =
          aValue && aValue !== "--"
            ? new Date(aValue.split("-").reverse().join("-"))
            : null;
        const dateB =
          bValue && bValue !== "--"
            ? new Date(bValue.split("-").reverse().join("-"))
            : null;

        if (dateA && !dateB)
          return sortConfig.direction === "ascending" ? -1 : 1;
        if (!dateA && dateB)
          return sortConfig.direction === "ascending" ? 1 : -1;

        return sortConfig.direction === "ascending"
          ? dateA - dateB
          : dateB - dateA;
      }

      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    return sortableData;
  }, [data, sortConfig]);

  // Filter tickets based on visible count
  const visibleData =
    currentTab === "All Tickets"
      ? sortedData.slice(0, visibleCount)
      : sortedData;

  // Handle Load More button click
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Increase visible tickets by 6
  };

  // Function to handle sorting
  const handleSort = (column) => {
    let direction = "ascending";
    if (sortConfig.key === column && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key: column, direction });
  };

  return (
    <div className="max-h-[55vh] overflow-y-auto">
      <Table className="border-[1px] !rounded overflow-hidden">
        {/* Table Headers */}
        <TableHeader>
          <TableRow className="bg-[#F2F3F5] hover:bg-[#F2F3F5]">
            {headers.map((header) => (
              <TableHead
                key={header.id}
                className={`text-[#4E5969] px-2 py-[15px] text-[12px] ${
                  header.sortable ? "cursor-pointer" : ""
                }`}
                onClick={() => header.sortable && handleSort(header.value)}
              >
                <div className="flex items-center gap-2">
                  <span>{header.label}</span>
                  {header.icon && <span className="mr-2">{header.icon}</span>}
                  {header.sortable && (
                    <span>
                      {sortConfig.key === header.value ? (
                        sortConfig.direction === "ascending" ? (
                          <IoMdArrowUp /> // Up arrow for ascending
                        ) : (
                          <IoMdArrowDown /> // Down arrow for descending
                        )
                      ) : (
                        // Default icon for unsorted sortable columns
                        <IoMdArrowUp className="text-gray-400" />
                      )}
                    </span>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {visibleData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={headers.length} className="text-center">
                No data available
              </TableCell>
            </TableRow>
          ) : (
            visibleData.map((row, rowIndex) => (
              <TableRow key={row.id}>
                {headers.map((header) => (
                  <TableCell
                    key={header.id}
                    className="text-[#1D2129] px-2 py-[15px]"
                  >
                    {header.value === "ticketnumber" ? (
                      // Add SheetTrigger to ticket number
                      <Sheet>
                        <SheetTrigger
                          onClick={() => setSelectedTicket(row)} // Pass ticket data to Sheet
                          className="text-blue-600 underline cursor-pointer"
                        >
                          {row[header.value]}
                        </SheetTrigger>
                        <SheetContent className="bg-white">
                          <SheetHeader>
                            <SheetTitle>Ticket Details</SheetTitle>
                            <SheetDescription>
                              {/* Dynamically display ticket details */}
                              <div>
                                <p>
                                  <strong>Ticket Number:</strong>{" "}
                                  {selectedTicket?.ticketnumber}
                                </p>
                                <p>
                                  <strong>Severity:</strong>{" "}
                                  {selectedTicket?.severity}
                                </p>
                                <p>
                                  <strong>Project Name:</strong>{" "}
                                  {selectedTicket?.projectname}
                                </p>
                                <p>
                                  <strong>Description:</strong>{" "}
                                  {selectedTicket?.description || "N/A"}
                                </p>
                              </div>
                            </SheetDescription>
                          </SheetHeader>
                        </SheetContent>
                      </Sheet>
                    ) : header.value === "severity" ? (
                      // Custom logic for severity column
                      <Badge
                        className="text-[12px] font-medium rounded px-2 py-1"
                        style={{
                          color:
                            row[header.value] === "Major"
                              ? "#FF7D00"
                              : row[header.value] === "Minor"
                              ? "#165DFF"
                              : row[header.value] === "Critical"
                              ? "#CB2634"
                              : "#000",
                          backgroundColor:
                            row[header.value] === "Major"
                              ? "#FFF7E8"
                              : row[header.value] === "Minor"
                              ? "#E8F3FF"
                              : row[header.value] === "Critical"
                              ? "#FFECE8"
                              : "#FFF",
                        }}
                      >
                        {row[header.value]}
                      </Badge>
                    ) : header.value === "ticketaction" ? (
                      // Dropdown for actions column
                      <div className="w-[65%]">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <div className="flex shrink-0 items-center bg-[#F8F9FB] rounded-[4px] border-[1.5px] border-[#0E42D2] px-2 py-2 text-[#0E42D2] gap-2">
                              <Button
                                className="rounded-[4px] border-none shadow-none !outline-none !p-0 !h-full font-normal"
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
                          <DropdownMenuContent className="bg-white">
                            <DropdownMenuItem>Assign Ticket</DropdownMenuItem>
                            <DropdownMenuItem>Reject Ticket</DropdownMenuItem>
                            <DropdownMenuItem>Resolve Ticket</DropdownMenuItem>
                            <DropdownMenuItem>
                              Management Approval
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    ) : header.value === "slno" ? (
                      // Custom logic for "Sl No" column
                      rowIndex + 1
                    ) : (
                      // Default content
                      row[header.value] || "--"
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Load More Button */}
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
