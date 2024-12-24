import React from "react";
import { useDate } from "./DateContext";
import {
  addDays,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  format,
} from "date-fns";
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
  // Only try to use the date context if showCalendar is true
  const dateContext = showCalendar ? useDate() : null;
  const [open, setOpen] = React.useState(false);

  // Early return if date contexts are needed but not availables
  if (showCalendar && !dateContext) {
    console.warn("DateProvider is required when showCalendar is true");
    return (
      <div className="flex justify-between items-center">
        <h1 className="text-[#4E5969]">{title}</h1>
      </div>
    );
  }

  const handleDateRangeChange = (value) => {
    if (!dateContext?.updateDateRange) return;
    const today = new Date();

    switch (value) {
      case "today":
        dateContext.updateDateRange({ from: today, to: today });
        break;
      case "month":
        dateContext.updateDateRange({
          from: startOfMonth(today),
          to: endOfMonth(today),
        });
        break;
      case "year":
        dateContext.updateDateRange({
          from: startOfYear(today),
          to: endOfYear(today),
        });
        break;
      default:
        break;
    }
    setOpen(false);
  };

  const handleCalendarSelect = (selectedDate) => {
    if (!dateContext?.updateDateRange) return;
    if (selectedDate?.from && selectedDate?.to) {
      dateContext.updateDateRange(selectedDate);
    }
  };

  return (
    <div className="flex justify-between items-center font-inter text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px] font-semibold leading-[46.76px] tracking-[-1px] text-left custom-underline-position custom-decoration-skip">
      <h1 className="text-[#4E5969] flex items-start">{title}</h1>
      {showCalendar && dateContext?.dateRange && (
        <div className={className}>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button className="w-full flex items-center gap-3 leading-none justify-start text-sm text-left font-normal bg-blue-50 hover:bg-blue-50 px-4 py-2">
                {dateContext.dateRange?.from ? (
                  dateContext.dateRange.to ? (
                    <>
                      {format(dateContext.dateRange.from, "MMM dd")} - {format(dateContext.dateRange.to, "MMM dd")}
                    </>
                  ) : (
                    format(dateContext.dateRange.from, "MMM dd")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent className="bg-white shadow-none absolute -left-[14rem] md:-left-[28rem]  md:w-[33rem]">
              <Select onValueChange={handleDateRangeChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <div className="w-full bg-white"> 
                <Calendar
                  mode="range"
                  defaultMonth={dateContext.dateRange?.from}
                  selected={dateContext.dateRange}
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
