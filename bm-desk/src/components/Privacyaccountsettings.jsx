import React, { useState } from "react";
import Changepassword from "./Changepassword";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

function Privacyaccountsettings() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div className="flex flex-col gap-11">
      {/* Password Section */}
      <div className="flex justify-between">
        <div>
          <p className="text-[#1D2129] text-[20px] font-medium">Password</p>
          <p className="text-[#1D2129] text-[16px] font-normal">
            Change Your Password
          </p>
        </div>
        <div>
          <button
            onClick={openDialog}
            className="gap-[10px] bg-[#1D2129] rounded-[4px] text-[#FFFFFF] items-center px-4 py-2"
          >
            <span>Change Password</span>
          </button>
        </div>
      </div>

      {/* Dialog Section */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#FFF] rounded-[32px] p-6 shadow-lg max-w-md w-full relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-10  text-[#181D27] text-[60px]"
              onClick={closeDialog}
              aria-label="Close Dialog"
            >
              &times;
            </button>
            {/* Change Password Form */}
            <Changepassword />
          </div>
        </div>
      )}

      {/* Additional Sections */}
      <div className="flex justify-between">
        <div>
          <p className="text-[#1D2129] text-[20px] font-medium">
            All Ticket Notification
          </p>
          <p className="text-[#1D2129] text-[16px] font-normal">
            Turn On All Ticket Notifications
          </p>
        </div>
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div className="relative w-11 h-6 bg-[#C9CDD4] peer-focus:outline-none peer-focus:ring-4
               rounded-full peer 
             peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
              after:content-[''] after:absolute after:top-[2px] 
              after:start-[2px] after:bg-white after:rounded-full 
              after:h-5 after:w-5 after:transition-all peer-checked:bg-[#009A29]"></div>

          </label>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="text-[#1D2129] text-[20px] font-medium">
            My Ticket Notification
          </p>
          <p className="text-[#1D2129] text-[16px] font-normal">
            Enable All Notifications For My Tickets
          </p>
        </div>
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div className="relative w-11 h-6 bg-[#C9CDD4] peer-focus:outline-none peer-focus:ring-4
               rounded-full peer 
             peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
              after:content-[''] after:absolute after:top-[2px] 
              after:start-[2px] after:bg-white after:rounded-full 
              after:h-5 after:w-5 after:transition-all peer-checked:bg-[#009A29]"></div>

          </label>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="text-[#1D2129] text-[20px] font-medium">
            Activity Notification
          </p>
          <p className="text-[#1D2129] text-[16px] font-normal">
            Enable All Activity Notification
          </p>
        </div>
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div className="relative w-11 h-6 bg-[#C9CDD4] peer-focus:outline-none peer-focus:ring-4
               rounded-full peer 
             peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
              after:content-[''] after:absolute after:top-[2px] 
              after:start-[2px] after:bg-white after:rounded-full 
              after:h-5 after:w-5 after:transition-all peer-checked:bg-[#009A29]"></div>

          </label>
        </div>
      </div>
    </div>
  );
}

export default Privacyaccountsettings;
