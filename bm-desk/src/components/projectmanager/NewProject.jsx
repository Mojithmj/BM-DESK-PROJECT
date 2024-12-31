import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SingleCalender } from "../reusecomponents/SingleCalender";

function NewProject() {
  const handleClear = () => {
    // Reset form fields
    setSelectedFileName("");
    // You might want to add logic to reset other form fields
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="bg-white max-h-[90vh] overflow-y-auto border !rounded-[5px] p-8 2xl:p-[64px]">
        <DialogHeader>
          <div className="flex flex-col gap-5 2xl:gap-8">
            <div className="grid">
              <DialogTitle className="text-[#09090B] text-[20px] sm:text-[24px] md:text-[24px] lg:text-[28px] 2xl:text-[32px]">
                New Project
              </DialogTitle>
              <p className="text-[12px] sm:text-[12px] md:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[#495057]">
                Submit a New Project
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 2xl:gap-8">
              <div className="flex flex-col 2xl:gap-2">
                <Label
                  htmlFor="projectname"
                  className="mb-1 font-normal text-[12px] md:text-[14px] 2xl:text-[16px] text-[#1D2129]"
                >
                  Project Name
                </Label>
                <Input
                  id="projectname"
                  placeholder="Enter Project Name here"
                  className="w-full py-[10px] px-[16px] text-[#878A99] placeholder:text-[10px] md:placeholder:text-[12px] 2xl:placeholder:text-[14px]  border border-[#E5E6EB] rounded-[5px]"
                />
              </div>

              <div className="flex flex-col 2xl:gap-2">
                <Label
                  htmlFor="projectcode"
                  className="mb-1 font-normal text-[12px] md:text-[14px] 2xl:text-[16px] text-[#1D2129]"
                >
                  Project Code
                </Label>
                <Input
                  id="projectcode"
                  placeholder="Project Code (Limit to 6 characters)"
                  className="w-full py-[10px] px-[16px] placeholder:text-[#878A99] placeholder:text-[10px] md:placeholder:text-[12px] 2xl:placeholder:text-[14px]  border border-[#E5E6EB] rounded-[5px]"
                />
              </div>

              <div className="flex flex-col 2xl:gap-2">
                <Label
                  htmlFor="selectcategory"
                  className="mb-1 font-normal text-[12px] md:text-[14px] 2xl:text-[16px] text-[#1D2129]"
                >
                  Select Category
                </Label>
                <Select>
                  <SelectTrigger className="w-full py-[10px] px-[16px] border-[#E5E6EB] text-[#878A99] text-[10px] md:text-[12px] 2xl:text-[14px]">
                    <SelectValue placeholder="Select category" className="" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col 2xl:gap-2">
                <Label
                  htmlFor="project"
                  className="mb-1 font-normal text-[12px] md:text-[14px] 2xl:text-[16px]"
                >
                  Select Department
                </Label>
                <Select>
                  <SelectTrigger className="w-full py-[10px] px-[16px] border-[#E5E6EB] text-[#878A99] text-[10px] md:text-[12px] 2xl:text-[14px]">
                    <SelectValue
                      placeholder="Select Category"
                      className="!placeholder:text-[#878A99]"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col 2xl:gap-2">
                <Label
                  htmlFor="project"
                  className="mb-1 font-normal text-[12px] md:text-[14px] 2xl:text-[16px]"
                >
                  Select Project Manager
                </Label>
                <Select>
                  <SelectTrigger className="w-full py-[10px] px-[16px] border-[#E5E6EB] text-[#878A99] text-[10px] md:text-[12px] 2xl:text-[14px] ">
                    <SelectValue
                      placeholder="Select Category"
                      className="!placeholder:text-[#878A99]"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] 2xl:gap-[24px]">
              <div className="grid grid-cols-2 gap-4 2xl:gap-8">
                <div className="flex flex-col 2xl:gap-2">
                  <Label
                    htmlFor="project"
                    className="mb-1 font-normal text-[12px] md:text-[14px] 2xl:text-[16px]"
                  >
                    Start Date
                  </Label>
                  <SingleCalender/>
                </div>
                <div className="flex flex-col 2xl:gap-2">
                  <Label
                    htmlFor="project"
                    className="mb-1 font-normal text-[12px] md:text-[14px] 2xl:text-[16px]"
                  >
                    End Date
                  </Label>
                  <SingleCalender/>
                </div>
              </div>
              <div className="flex flex-col 2xl:gap-2">
                <Label
                  htmlFor="ticketDescription"
                  className="mb-1 font-normal text-[12px] md:text-[14px] 2xl:text-[16px]"
                >
                  Project Description
                </Label>
                <Textarea
                  id="ticketDescription"
                  className="w-full py-[10px] px-[16px] h-[100px] 2xl:h-[200px] outline-none p-2 border border-[#E5E6EB] placeholder:text-[10px]  md:placeholder:text-[10px] 2xl:placeholder:text-[14px] rounded-[5px]"
                />
              </div>
              <div>
                <div className="flex flex-col 2xl:gap-2">
                  <Label
                    htmlFor="emailAddress"
                    className="mb-1 font-normal text-[12px] md:text-[14px] 2xl:text-[16px]"
                  >
                    Phase Name
                  </Label>
                  <Input
                    id="emailAddress"
                    placeholder="Enter Project Name here"
                    className="w-full py-[10px] px-[16px] text-[#86909C] placeholder:text-[10px] md:placeholder:text-[12px]  2xl:placeholder:text-[14px] border border-[#E5E6EB] rounded-[5px]"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 2xl:gap-3">
              <Button
                type="button"
                onClick={handleClear}
                className="bg-white text-[#165DFF] py-2 px-4 rounded border border-[#165DFF] text-[12px] md:text-[14px] 2xl:text-[16px] font-normal"
              >
                Add project Phases
              </Button>
              <Button
                type="button"
                className="bg-[#165DFF] hover:bg-[#165DFF] hover:text-white text-white py-2 px-4 rounded text-[12px] md:text-[14px] 2xl:text-[16px] font-normal"
              >
                Create Project
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
export default NewProject;
