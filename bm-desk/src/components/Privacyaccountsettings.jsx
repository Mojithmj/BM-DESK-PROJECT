import React from 'react'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

function Privacyaccountsettings() {
  return (
    <div>


<div className='flex flex-col gap-11'>
{/* 1 */}
        <div className='flex justify-between'>
         <div>
            <p className='text-[#1D2129] text-[20px] font-medium'>Password</p>
            <p className='text-[#1D2129] text-[16px] font-normal'>Change Your Passsword</p>
         </div>
         <div>
         <button className="gap-[10px] bg-[#1D2129] rounded-[4px] text-[#FFFFFF] items-center  px-4 py-2 ">
                        <span>Change Password</span>
                      </button>
         </div>
         </div>
         
         {/* 2 */}

         <div className='flex justify-between'>
         <div>
            <p className='text-[#1D2129] text-[20px] font-medium'>All Ticket Notification</p>
            <p className='text-[#1D2129] text-[16px] font-normal'>Turn On All Ticket Notifications</p>
         </div>
         <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      

      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
         </div>

{/* 3 */}

         <div className='flex justify-between'>
         <div>
            <p className='text-[#1D2129] text-[20px] font-medium'>My Ticket Notification</p>
            <p className='text-[#1D2129] text-[16px] font-normal'>Enable All Notifications For My Tickets</p>
         </div>
         <div>
         <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
         </div>
         </div>


         {/* 4 */}

         <div className='flex justify-between'>
         <div>
            <p className='text-[#1D2129] text-[20px] font-medium'>Activity Notification</p>
            <p className='text-[#1D2129] text-[16px] font-normal'>Enable All Activity Notification</p>
         </div>
         <div>
         <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
         </div>
         </div>
         </div>
         

    </div>
  )
}

export default Privacyaccountsettings