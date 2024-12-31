import React from "react";
import { useDate } from "./DateContext";
import { cn } from "@/lib/utils";
import {
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

function Pheader({ title, className, showCalendar = true }) {
  const dateContext = showCalendar ? useDate() : null;
  const [open, setOpen] = React.useState(false); // Controls the Popover
  const [showCustomCalendar, setShowCustomCalendar] = React.useState(false); // Toggles Custom Calendar
  const [tempSelectedDates, setTempSelectedDates] = React.useState({}); // Temporarily store selected dates

  if (showCalendar && !dateContext) {
    console.warn("DateProvider is required when showCalendar is true");
    return (
      <div className="flex justify-between items-center">
        <h1 className="text-[#4E5969]">{title}</h1>
      </div>
    );
  }

  const handleDateRangeChange = (value) => {
    const today = new Date();
    setShowCustomCalendar(false);

    switch (value) {
      case "today":
        dateContext?.updateDateRange({ from: today, to: today });
        setOpen(false); // Close dialog
        break;
      case "month":
        dateContext?.updateDateRange({
          from: startOfMonth(today),
          to: endOfMonth(today),
        });
        setOpen(false); // Close dialog
        break;
      case "year":
        dateContext?.updateDateRange({
          from: startOfYear(today),
          to: endOfYear(today),
        });
        setOpen(false); // Close dialog
        break;
      case "custom":
        setShowCustomCalendar(true);
        break;
      default:
        break;
    }
  };

  const handleCalendarSelect = (selectedDate) => {
    if (selectedDate?.from && !selectedDate?.to) {
      // If only 'from' is selected, store it temporarily
      setTempSelectedDates(selectedDate);
    }

    if (selectedDate?.from && selectedDate?.to) {
      // If both 'from' and 'to' are selected, update context and close
      dateContext?.updateDateRange(selectedDate);
      setTempSelectedDates({});
      setShowCustomCalendar(false);
      setOpen(false); // Close dialog
    }
  };

  return (
    <div className="flex justify-between items-center font-inter text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px] font-semibold leading-[46.76px]">
      <h1 className="text-[#4E5969]">{title}</h1>
      {showCalendar && dateContext?.dateRange && (
        <div className={className}>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button className="w-full flex items-center gap-3 text-sm font-normal bg-blue-50 hover:bg-blue-50 px-4 py-2">
                {dateContext.dateRange?.from ? (
                  dateContext.dateRange.to ? (
                    <>
                      {format(dateContext.dateRange.from, "MMM dd")} -{" "}
                      {format(dateContext.dateRange.to, "MMM dd")}
                    </>
                  ) : (
                    format(dateContext.dateRange.from, "MMM dd")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent className={cn(
    "bg-white shadow-md p-2 -translate-x-4",
    !showCustomCalendar && "w-36"
  )}>
              {!showCustomCalendar ? (
                <div className="flex flex-col gap-2 font-inter font-normal">
                  <button
                    className="hover:bg-[#E8F3FF]"
                    onClick={() => handleDateRangeChange("today")}
                  >
                    Today
                  </button>
                  <button
                    className="hover:bg-[#E8F3FF]"
                    onClick={() => handleDateRangeChange("month")}
                  >
                    This Month
                  </button>
                  <button
                    className="hover:bg-[#E8F3FF]"
                    onClick={() => handleDateRangeChange("year")}
                  >
                    This Year
                  </button>
                  <button
                    className="hover:bg-[#E8F3FF]"
                    onClick={() => handleDateRangeChange("custom")}
                  >
                    Custom
                  </button>
                </div>
              ) : (
                
                <Calendar
                  mode="range"
                  defaultMonth={dateContext.dateRange?.from || new Date()}
                  selected={tempSelectedDates || dateContext.dateRange}
                  onSelect={handleCalendarSelect}
                  numberOfMonths={2}
                />
                
              )}
            </PopoverContent>
          </Popover>
        </div>
      )}
    </div>
  );
}

export default Pheader;
