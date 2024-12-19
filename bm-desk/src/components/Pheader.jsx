import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addDays, format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

function Pheader({ title, className, showCalendar = true }) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  const [date, setDate] = React.useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className="flex justify-between items-center font-inter text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px] font-semibold leading-[46.76px] tracking-[-1px] text-left custom-underline-position custom-decoration-skip">
      <h1 className="text-[#4E5969] flex items-start">{title}</h1>
      
      {showCalendar && (
        <div className={cn("grid gap-2", className)}>
          <Popover>
            <PopoverTrigger asChild>
              <button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-full flex items-center gap-3 leading-none justify-start text-sm text-left font-normal bg-[#E8F3FF] hover:none hover:bg-[#E8F3FF] border-[#E8F3FF] px-4 py-2",
                  !date && "text-muted-foreground"
                )}
              >
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "MMM dd")} - {format(date.to, "MMM dd")}
                    </>
                  ) : (
                    format(date.from, "MMM dd")
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
            <PopoverContent className="w-auto p-0 bg-white" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      )}
    </div>
  );
}

export default Pheader;