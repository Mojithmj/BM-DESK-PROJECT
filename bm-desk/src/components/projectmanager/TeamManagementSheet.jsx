
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

function TeamManagementSheet({ isOpen, onClose }) {
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={onClose}>
        {/* Make the sheet content responsive */}
        <SheetContent
  className={cn(
    "bg-white w-full max-w-[100vw] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[600px]",
    "p-4 sm:p-6 overflow-y-auto"
  )}
>

          <div className="flex flex-col 2xl:gap-16 gap-12 top-3">
            <div>
              <SheetHeader>
                <SheetTitle className="text-[20px] sm:text-[18px] md:text-[24px] lg:text-[28px] 2xl:text-[32px] font-semibold text-[#4E5969] font-inter">
                  Assign Tickets
                </SheetTitle>
              </SheetHeader>
            </div>

            {/* Form content */}
            <div className="flex flex-col gap-5 2xl:gap-7">
              {/* Assign to */}
              <div className="flex flex-col gap-2">
                <Label className="text-[#212529] font-inter font-medium text-[16px]">
                  Assign to
                </Label>
                <Select>
                  <SelectTrigger className="w-[280px] sm:w-[260px] md:w-[280px] lg:w-[300px] xl:w-[320px] border-[#CED4DA] rounded-[5px] text-[#86909C] text-[12px]">
                    <SelectValue placeholder="Select Employee" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Category */}
              <div className="flex flex-col gap-2">
                <Label className="text-[#212529] font- inter font-medium text-[16px]">
                  Category
                </Label>
                <Select>
                  <SelectTrigger className="w-[280px] sm:w-[260px] md:w-[280px] lg:w-[300px] xl:w-[320px] border-[#CED4DA] rounded-[5px] text-[#86909C] text-[12px]">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Project Name */}
              <div className="flex flex-col gap-2">
                <Label className="text-[#212529] font-inter font-medium text-[16px]">
                  Project Name
                </Label>
                <Select>
                  <SelectTrigger className="w-[280px] sm:w-[260px] md:w-[280px] lg:w-[300px] xl:w-[320px] border-[#CED4DA] rounded-[5px] text-[#86909C] text-[12px]">
                    <SelectValue placeholder="Select Project Name from list" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Buttons */}
              <div className="absolute left-6 w-[94%] top-[390px]  2xl:top-[430px]">
                <div className="absolute ">
                  <div className="flex flex-row gap-2 rounded-sm">
                    <Button className="bg-[#FFFFFF] text-[#165DFF] font-inter font-normal 2xl:text-[16px] text-[14px] border border-[#165DFF] rounded-[3px]">
                      Discard
                    </Button>
                    <Button className="bg-[#165DFF] text-[#FFFFFF] font-inter font-normal 2xl:text-[16px] text-[14px] rounded-[3px] hover:bg-[#165DFF] hover:text-[#FFFFFF]">
                      Assign Tickets
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default TeamManagementSheet;
