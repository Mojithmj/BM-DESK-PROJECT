import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
        <SheetContent className="bg-white">
          <div className="flex flex-col gap-6">
            <div>
              <SheetHeader>
                <SheetTitle>Assign Tickets</SheetTitle>
              </SheetHeader>
            </div>

            <SheetDescription>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <Label className="text-[#212529] font-medium text-[12px]">
                    Assign to
                  </Label>
                  <Select>
                    <SelectTrigger className="w-[520px] border-[#CED4DA] rounded-[5px] text-[#86909C] text-[12px]">
                      <SelectValue placeholder="Select Employee" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-[#212529] font-medium text-[12px]">
                    Category
                  </Label>
                  <Select>
                    <SelectTrigger className="w-[520px] border-[#CED4DA] rounded-[5px] text-[#86909C] text-[12px]">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-[#212529] font-medium text-[12px]">
                    Project Name
                  </Label>
                  <Select>
                    <SelectTrigger className="w-[520px] border-[#CED4DA] rounded-[5px] text-[#86909C] text-[12px]">
                      <SelectValue placeholder="Select Project Name from list" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="absolute bottom-0 left-5 w-[94%] top-[520px]">
                  <div className="absolute bottom-8 right-6">
                    <div className="flex flex-row gap-2">
                      <Button className="bg-[#FFFFFF] text-[#165DFF] text-[12px] border border-[#165DFF] rounded-[3px]">
                        Discard
                      </Button>
                      <Button className="bg-[#165DFF] text-[#FFFFFF] text-[12px] rounded-[3px] hover:bg-[#165DFF] hover:text-[#FFFFFF]">
                        Assign Tickets
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SheetDescription>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default TeamManagementSheet;
