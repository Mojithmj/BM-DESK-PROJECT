import React, { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RiArrowDropDownLine } from "react-icons/ri";

export function Combobox({
  items,
  placeholder = "Select an option...",
  searchPlaceholder = "Search...",
  className = "",
  onSelect,
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSelect = (currentValue) => {
    const newValue = currentValue === value ? "" : currentValue;
    setValue(newValue);
    onSelect?.(newValue);
    setOpen(false);
  };

  // Determine button styles based on selection state
  const buttonStyles = cn(
    "w-full justify-between rounded-[5px] font-normal text-[12px] 2xl:text-[14px]",
    value 
      ? "bg-[#E8F3FF] text-[#165DFF] border-[#E8F3FF] hover:bg-[#E8F3FF] hover:text-[#165DFF]" 
      : "border-[#E5E6EB] text-[#878A99]",
    className
  );
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={buttonStyles}
        >
          {value
            ? items.find((item) => item.value === value)?.label
            : placeholder}
          <RiArrowDropDownLine className={cn(
            "ml-2 h-4 w-4",
            value ? "text-[#165DFF]" : "opacity-50"
          )} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[500px] p-0 bg-white">
        <Command>
          <CommandInput 
            placeholder={searchPlaceholder} 
            className="h-9" 
          />
          <CommandList>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={() => handleSelect(item.value)}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
} 