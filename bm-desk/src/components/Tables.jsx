import React,{ useState} from "react";
import { IoIosArrowRoundDown } from "react-icons/io";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Tables() {
  const [data, setData] = useState([
    // Initial data (can be populated from an API or mock data)
    {
      id: 1,
      date: "2024-11-25",
      assignedTickets: 10,
      selfAssignedTickets: 5,
      resolvedTickets: 8,
      returnedTickets: 2,
      escalated: 1,
      growthRate: "10%",
    },
    {
      id: 2,
      date: "2023-11-25",
      assignedTickets: 8,
      selfAssignedTickets: 5,
      resolvedTickets: 3,
      returnedTickets: 2,
      escalated: 1,
      growthRate: "30%",
    },
    // Repeat similar objects as needed
  ]);
  const [loading, setLoading] = useState(false); // To track loading state

  const loadMoreData = () => {
    setLoading(true); // Start loading

    // Simulate fetching more data (e.g., from an API)
    setTimeout(() => {
      const moreData = [
        {
          id: 2,
          date: "2024-11-26",
          assignedTickets: 12,
          selfAssignedTickets: 7,
          resolvedTickets: 9,
          returnedTickets: 3,
          escalated: 0,
          growthRate: "15%",
        },
        {
          id: 3,
          date: "2024-11-27",
          assignedTickets: 14,
          selfAssignedTickets: 8,
          resolvedTickets: 10,
          returnedTickets: 1,
          escalated: 2,
          growthRate: "20%",
        },
      ];
      setData((prevData) => [...prevData, ...moreData]); // Add new data to existing data
      setLoading(false); // Stop loading
    }, 100); // Simulate a 2-second delay for loading data
  };
  return (
    <div>
      <div className="max-h-[60vh] overflow-y-auto pr-4">
        <Table className=" border-[1px] !rounded overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F2F3F5] hover:bg-[#4E5969] pointer-events-none">
              <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                Sl No
              </TableHead>
              <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                Ticket
              </TableHead>
              <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                Project Name
              </TableHead>
              <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                Subject
              </TableHead>
              <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                Expected date
              </TableHead>
              <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                Expected Delivery Date
              </TableHead>
              <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                Severity
              </TableHead>
              <TableHead className="text-[#4E5969] px-2 py-[15px] text-[12px]">
                Ticket Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell className="text-[#1D2129] px-2 py-[15px]">
                  {index + 1}
                </TableCell>
                <TableCell className="text-[#1D2129] px-2 py-[15px]">
                  {row.date}
                </TableCell>
                <TableCell className="text-[#1D2129] px-2 py-[15px]">
                  {row.assignedTickets}
                </TableCell>
                <TableCell className="text-[#1D2129] px-2 py-[15px]">
                  {row.selfAssignedTickets}
                </TableCell>
                <TableCell className="text-[#1D2129] px-2 py-[15px]">
                  {row.resolvedTickets}
                </TableCell>
                <TableCell className="text-[#1D2129] px-2 py-[15px]">
                  {row.returnedTickets}
                </TableCell>
                <TableCell className="text-[#1D2129] px-2 py-[15px]">
                  {row.escalated}
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <IoIosArrowRoundDown className="bg-[#FFECE8] text-[#F53F3F]" />
                    <div className=" px-2 py-[15px] text-[#F53F3F] font-bold ">
                      {row.growthRate}
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <button
          onClick={loadMoreData}
          className="text-[#165DFF] mt-4"
          disabled={loading} // Disable the button while loading
        >
          {loading ? "Loading..." : "Load for more data...."}
        </button>
      </div>
    </div>
  );
}

export default Tables;
