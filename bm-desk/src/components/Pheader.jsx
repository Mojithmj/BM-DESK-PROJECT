import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RiArrowDropDownLine } from "react-icons/ri";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
// import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

function Pheader({ title, className }) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  const [date, setDate] = React.useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex justify-between items-center font-inter text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px] font-semibold leading-[46.76px] tracking-[-1px] text-left custom-underline-position custom-decoration-skip">
      <h1 className="text-[#4E5969] flex items-start">{title}</h1>
      {/* <div className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal rounded-[5.196px] bg-[#E8F3FF] border-[#E8F3FF]",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <RiArrowDropDownLine className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div> */}
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
                  stroke-width="2.59787"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white  " align="start">
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
    </div>
  );
}

export default Pheader;
