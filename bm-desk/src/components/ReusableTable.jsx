import React, { useState,useEffect } from "react";
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
import SheetComponent from "../components/Sheets/ActionTickets";

function ReusableTable({ data, headers, currentTab, defaultSortConfig }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [sortConfig, setSortConfig] = useState(
    defaultSortConfig || { key: "projectname", direction: "ascending" }
  );

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

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(""); // New state for action

  const handleDropdownSelect = (action) => {
    setSelectedAction(action); // Set the selected action
    setIsSheetOpen(true); // Open the sheet
  };
  const handleSheetClose = () => {
    setIsSheetOpen(false);
    setSelectedAction("");
    // Ensure body is interactive
    document.body.style.pointerEvents = "";
    document.body.removeAttribute("aria-hidden");
    // Remove any lingering modal backdrops
    const backdrops = document.querySelectorAll("[data-backdrop]");
    backdrops.forEach((backdrop) => backdrop.remove());
  };

  const handleSheetData = (data) => {
    console.log("Data from Sheet:", data);
    handleSheetClose();
  };

  // Add cleanup effect
  useEffect(() => {
    return () => {
      // Cleanup on unmount
      document.body.style.pointerEvents = "";
      document.body.removeAttribute("aria-hidden");
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="md:max-h-[55vh] md:overflow-y-auto">
      <div className="border border-[#E5E6EB] rounded">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F2F3F5] hover:bg-[#F2F3F5] border-b border-[#E5E6EB]">
              {headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={`text-[#4E5969] px-2 py-[15px] text-[12px] lg:text-[12px] 2xl-[14px] ${
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
              <TableRow className="border-b border-[#E5E6EB]">
                <TableCell
                  colSpan={headers.length}
                  className="text-center text-[10px] 2xl:text-[14px] lg:text-[12px]"
                >
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              visibleData.map((row, rowIndex) => (
                <TableRow key={row.id} className="border-b border-[#E5E6EB]">
                  {headers.map((header) => (
                    <TableCell
                      key={header.id}
                      className="text-[#1D2129] px-2 py-[15px] text-[10px] 2xl:text-[14px] lg:text-[12px] md"
                    >
                      {header.value === "ticketnumber" ? (
                        <TicketsSidebar ticket={row}>
                          {row[header.value]}
                        </TicketsSidebar>
                      ) : header.value === "severity" ? (
                        <Badge
                          className="text-[12px] lg:text-[12px] 2xl:text-[12px] font-medium rounded px-2 py-1"
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
                            <div className="flex items-center cursor-pointer bg-[#F8F9FB] rounded-[4px] border-[1.5px] border-[#0E42D2] px-[12px] py-[4px] text-[#0E42D2] gap-[8px] w-fit">
                              <Button
                                className="flex-shrink-0 rounded-[3px] border-none shadow-none !outline-none !p-0 !h-auto font-normal text-[10px] md:text-[12px] lg:text-[12px] cursor-pointer"
                                variant="outline"
                              >
                                Action
                              </Button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                className="flex-shrink-0"
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
                              onClick={() =>
                                handleDropdownSelect("Assign Ticket")
                              }
                              className="cursor-pointer"
                            >
                              Assign Ticket
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleDropdownSelect("Reject Ticket")
                              }
                              className="cursor-pointer"
                            >
                              Reject Ticket
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleDropdownSelect("Verify & Close")
                              }
                              className="cursor-pointer"
                            >
                              Verify & Close
                            </DropdownMenuItem>

                            <DropdownMenuItem
                              onClick={() =>
                                handleDropdownSelect("Split Ticket")
                              }
                              className="cursor-pointer"
                            >
                              Split Ticket
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleDropdownSelect("Management Approval")
                              }
                              className="cursor-pointer"
                            >
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
      </div>
      
      <SheetComponent
        isOpen={isSheetOpen}
        onClose={handleSheetClose}
        onSubmit={handleSheetData}
        action={selectedAction}
      />

      {currentTab === "All Tickets" && data.length > visibleCount && (
        <div className="text-center mt-6">
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
