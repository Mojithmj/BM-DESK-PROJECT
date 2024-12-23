import React from "react";
import { useForm } from "react-hook-form";
import {
  addDays,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  format,
} from "date-fns";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Pheader({ title, className, showCalendar = true }) {
  const form = useForm();

  const [date, setDate] = React.useState({
    from: new Date(),
    to: new Date(),
  });

  const [open, setOpen] = React.useState(false);

  const handleDateRangeChange = (value) => {
    const today = new Date();

    switch (value) {
      case "today":
        setDate({
          from: today,
          to: today,
        });
        setOpen(false);
        break;
      case "month":
        setDate({
          from: startOfMonth(today),
          to: endOfMonth(today),
        });
        setOpen(false);
        break;
      case "year":
        setDate({
          from: startOfYear(today),
          to: endOfYear(today),
        });
        setOpen(false);
        break;
      default:
        break;
    }
  };

  const handleCalendarSelect = (selectedDate) => {
    setDate(selectedDate);
    // Removed the automatic closing logic to allow users to modify their selection
  };

  return (
    <div className="flex justify-between items-center font-inter text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px] font-semibold leading-[46.76px] tracking-[-1px] text-left custom-underline-position custom-decoration-skip">
      <h1 className="text-[#4E5969] flex items-start">{title}</h1>

      {showCalendar && (
        <div className={cn("grid gap-2", className)}>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button
                id="date"
                className="w-full flex items-center gap-3 leading-none justify-start text-sm text-left font-normal bg-blue-50 hover:bg-blue-50 px-4 py-2"
              >
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "MMM dd, yyyy")} -{" "}
                      {format(date.to, "MMM dd, yyyy")}
                    </>
                  ) : (
                    format(date.from, "MMM dd, yyyy")
                  )
                ) : (
                  <span>Pick a date</span>
                )}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                >
                  <path
                    d="M1.62939 1.29395L6.82514 6.48969L12.0209 1.29395"
                    stroke="#C8CAD8"
                    strokeWidth="2.59787"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </PopoverTrigger>
            <PopoverContent className="flex w-auto flex-col space-y-2 p-2 bg-white">
              <Select onValueChange={handleDateRangeChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent position="popper" className="bg-white">
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <div className="rounded-md border">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={handleCalendarSelect}
                  numberOfMonths={2}
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      )}
    </div>
  );
}

export default Pheader;
