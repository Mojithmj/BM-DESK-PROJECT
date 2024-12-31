import * as React from "react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"

export function SingleCalender() {
  const [date, setDate] = React.useState()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal border-[#E5E6EB] text-[#878A99] text-xs 2xl:text-[14px] rounded-[4px]",
            !date && "text-muted-foreground"
          )}
        >
          
          {date ? format(date, "PPP") : (<span className="text-[#878A99]">dd-mm-yyyy</span>)}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
