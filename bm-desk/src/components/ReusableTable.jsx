import React from "react";
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
import { RiArrowDropDownLine } from "react-icons/ri";

function ReusableTable({ data, headers }) {
  return (
    <div className="max-h-[55vh] overflow-y-auto ">
      <Table className="border-[1px] !rounded overflow-hidden">
        {/* Table Headers */}
        <TableHeader>
          <TableRow className="bg-[#F2F3F5] pointer-events-none">
            {headers.map((header) => (
              <TableHead
                key={header.id}
                className="text-[#4E5969] px-2 py-[15px] text-[12px]"
              >
                <div className="flex items-center gap-1">
                  
                  <span>{header.label}</span>
                  {header.icon && <span className="mr-2">{header.icon}</span>}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={row.id}>
              {headers.map((header) => (
                <TableCell
                  key={header.id}
                  className="text-[#1D2129] px-2 py-[15px]"
                >
                  {header.value === "severity" ? (
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
                      {row[header.value] }
                    </Badge>
                  ) : header.value === "ticketaction" ? (
                    // Dropdown for actions column

                    <div className="w-[65%]">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <div className="flex shrink-0 items-center bg-[#F8F9FB] rounded-[4px] border-[1.5px] border-[#0E42D2] px-2 py-2 text-[#0E42D2] gap-2">
                            <Button
                              className="rounded-[4px] border-none shadow-none !outline-none !p-0 !h-full font-normalg n "
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
                            >
                              <path
                                d="M5 7.5L10 12.5L15 7.5"
                                stroke="#0E42D2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className=" bg-white">
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
                    (row[header.value ] || '--')
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ReusableTable;
