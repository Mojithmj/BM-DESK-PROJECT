// ReusableTable.js
import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { RiArrowDropDownLine } from "react-icons/ri";

function ReusableTable({ data, headers }) {
  return (
    <div className="max-h-[55vh] overflow-y-auto pr-4">
      <Table className="border-[1px] !rounded overflow-hidden">
        <TableHeader>
          <TableRow className="bg-[#F2F3F5] hover:bg-[#4E5969] pointer-events-none">
            {headers.map((header, index) => (
              <TableHead
                key={index}
                className="text-[#4E5969] px-2 py-[15px] text-[12px]"
              >
                {/* {header} */}
                <div style={{ display: "flex" }}>
                  {heading.icon && (
                    <img
                      src={heading.icon}
                      alt={heading.title || 'Icon'}
                      style={{ width: '16px', height: '16px', marginRight: '8px' }} // Adjust size as needed
                    />
                  )}
                  {heading.title && <span>{capitalizeFirstLetter(heading.title)}</span>}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell className="text-[#1D2129] px-2 py-[15px]">
                {index + 1}
              </TableCell>
              <TableCell className="text-[#1D2129] px-2 py-[15px]">
                {row.ticketNumber}
              </TableCell>
              <TableCell className="text-[#1D2129] px-2 py-[15px]">
                {row.projectName}
              </TableCell>
              <TableCell className="text-[#1D2129] px-2 py-[15px]">
                {row.subject}
              </TableCell>
              <TableCell className="text-[#1D2129] px-2 py-[15px]">
                {row.expectedDate}
              </TableCell>
              <TableCell className="text-[#1D2129] px-2 py-[15px]">
                {row.expectedDeliveryDate}
              </TableCell>
              <TableCell className="text-[#1D2129] px-2 py-[15px]">
                <Badge
                  className="text-[#CB2634] bg-[#FFECE8] text-[12px] font-medium rounded px-2 py-1 border-[#FFECE8] !border-0"
                  variant="outline"
                  style={{ color: row.severity === "Major" ? '#FF7D00': 
                  row.severity === "Minor" ? '#165DFF': '#CB2634',
                  backgroundColor: row.severity === "Major" ? '#FFF7E8':
                  row.severity === "Minor" ? '#E8F3FF': '#FFECE8',
                 }}
                >
                  {row.severity}
                </Badge>

              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  {/* <IoIosArrowRoundDown className="bg-[#FFECE8] text-[#F53F3F]" /> */}
                  <div className="px-2 py-[15px] text-[#0E42D2]">
                    {/* {row.ticketAction} */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="flex items-center bg-[#F8F9FB] rounded-[4px] border-[1.5px] border-[#0E42D2] px-2 py-2">
                          <Button
                            className="rounded-[4px] border-none shadow-none !outline-none !p-0 !h-full "
                            variant="outline"
                          >
                            Action
                          </Button>
                          <RiArrowDropDownLine />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 bg-white">
                        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>Assign Ticket, Reject Ticket, Resolve Ticket, Split ticket */}
                        <DropdownMenuGroup>
                          <DropdownMenuItem>Assign Ticket</DropdownMenuItem>
                          <DropdownMenuItem>Reject Ticket</DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuItem>Resolve Ticket</DropdownMenuItem>
                        <DropdownMenuItem>Split Ticket</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ReusableTable;
