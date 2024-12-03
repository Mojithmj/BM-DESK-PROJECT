import React, { useState } from 'react'


function AccountSettings() {

    const [activeTab, setActiveTab] = useState("alltickets");

    const tabs = [
        { value: "profile", label: "Profile" },
        { value: "passwordandsecurity", label: "Password & Security" },
      ];
  return (
    <div>
       <div className="fixed top-30 left-64 ">
        <div className="flex flex-col flex-start gap-9">
          <div>
            <h1 className="font-inter text-[32px] font-bold text-[#1D2129]">Account Settings</h1>
            <h2 className='font-inter text-[16px] font-normal text-[#4E5969]'>Settings and security for your application</h2>
          </div>
          {/* Tabs */}
          <div className="flex">
            <div>
              <div className="grid ">
                {tabs.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`font-inter text-[16px] font-normal p-[6px] rounded-[4px] px-4 transition-colors ${
                      activeTab === tab.value
                        ? "bg-[#165DFF] text-[#FFFFFF]"
                        : "bg-gray-50 text-[#1D2129]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          </div>
      </div>
    </div>
  )
}

export default AccountSettings
