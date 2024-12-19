import React from "react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { RiArrowDropDownLine } from "react-icons/ri"
const DatePickerInput = () => {
  const [date, setDate] = React.useState()
  const [open, setOpen] = React.useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative flex items-center w-full cursor-pointer">
          <Input
            type="text"
            placeholder="Enter Required Date"
            className="border-[#E5E6EB] rounded-[5px] w-full placeholder:text-xs text-[#878A99] pr-8 cursor-pointer"
            value={date ? format(date, "PPP") : ""}
            readOnly
          />
          <RiArrowDropDownLine className="absolute right-4 text-[#878A99]  text-md pointer-events-none" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white" align="start cursor-pointer">
        <Calendar
          mode="single"
          selected={date}
          onSelect={newDate => {
            setDate(newDate)
            setOpen(false)
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
export default DatePickerInput