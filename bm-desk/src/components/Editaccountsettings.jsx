import React, { useState } from "react";
import Avatariamge from "../assets/Avatar Image.png";
import { FaCamera } from "react-icons/fa";



function Editaccountsettings({  onInputChange }) {
  // Set the default active tab to "profile"
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { value: "profile", label: "Profile" },
    { value: "passwordandsecurity", label: "Password & Security" },
  ];
  const inputs = [
    {
      label: "First Name",
      placeholder: "Enter Your First Name",
    },
    {
      label: "Last Name",
      placeholder: "Enter Your Last Name",
    },
    {
      label: "Phone Number",
      placeholder: "Type Your Phone Number",
    },
    {
      label: "Email Address",
      placeholder: "Enter Your Email Address",
    },
    {
      label: "Designation",
      placeholder: "Role Description",
    },
  ];


  return (
    <div>
      <div className="fixed top-30 left-64 w-[calc(100%_-_300px)]">
        <div className="flex flex-col flex-start gap-9">
          <div>
            <h1 className="font-inter text-[32px] font-bold text-[#09090B]">
              Account Settings
            </h1>
            <h2 className="font-inter text-[16px] font-normal text-[#656565]">
              Settings and security for your application
            </h2>
          </div>
          {/* Tabs */}
          <div className="flex gap-8">
            <div>
              <div className="grid text-nowrap">
                {tabs.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`font-inter text-[16px] flex gap-[8px] font-normal px-[40px] rounded-[4px] py-[8px] transition-colors ${
                      activeTab === tab.value
                        ? "bg-[#165DFF] text-[#FFFFFF]"
                        : "bg-gray-50 text-[#1D2129]"
                    }`}
                  >
                    {/* Conditionally render the SVG if tab.value matches */}
                    {tab.value === "profile" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M2 17V20H10V18.11H3.9V17C3.9 16.36 7.03 14.9 10 14.9C10.96 14.91 11.91 15.04 12.83 15.28L14.35 13.76C12.95 13.29 11.5 13.03 10 13C7.33 13 2 14.33 2 17ZM10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12C12.21 12 14 10.21 14 8C14 5.79 12.21 4 10 4ZM10 10C8.9 10 8 9.11 8 8C8 6.89 8.9 6 10 6C11.1 6 12 6.9 12 8C12 9.1 11.11 10 10 10ZM21.7 13.35L20.7 14.35L18.65 12.35L19.65 11.35C19.7528 11.2492 19.891 11.1928 20.035 11.1928C20.179 11.1928 20.3172 11.2492 20.42 11.35L21.7 12.63C21.91 12.84 21.91 13.19 21.7 13.4M12 18.94L18.06 12.88L20.11 14.88L14.11 20.95H12V18.94Z"
                          fill={activeTab === tab.value ? "white" : "#86909C"}
                        />
                      </svg>
                    )}
                    {tab.value === "passwordandsecurity" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11.998 2C8.98997 2 7.03997 4.019 4.73397 4.755C3.79597 5.055 3.32697 5.204 3.13697 5.415C2.94697 5.625 2.89197 5.934 2.78097 6.55C1.59097 13.146 4.19097 19.244 10.391 21.618C11.056 21.873 11.389 22 12.001 22C12.613 22 12.947 21.872 13.613 21.617C19.812 19.244 22.409 13.146 21.219 6.55C21.108 5.934 21.052 5.625 20.862 5.414C20.672 5.203 20.204 5.054 19.266 4.755C16.959 4.019 15.006 2 11.998 2Z"
                          stroke={activeTab === tab.value ? "white" : "#86909C"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.2501 9.95897C10.2501 9.89897 10.2581 9.55297 10.2601 9.11897C10.2601 8.72097 10.2261 8.33897 10.4161 7.98897C11.1261 6.57497 13.1661 6.71897 13.6701 8.15897C13.7571 8.39597 13.7631 8.77097 13.7601 9.11897C13.7571 9.56197 13.7661 9.95897 13.7661 9.95897M10.3371 10.38C9.25714 10.38 8.71714 11.16 8.59714 11.64C8.47714 12.12 8.47714 13.86 8.54914 14.58C8.78914 15.48 9.38914 15.852 9.97714 15.972C10.5171 16.02 12.7971 16.002 13.4571 16.002C14.4171 16.02 15.1371 15.66 15.4371 14.58C15.4971 14.22 15.5571 12.24 15.4071 11.64C15.0891 10.68 14.2971 10.38 13.6971 10.38H10.3371Z"
                          stroke={activeTab === tab.value ? "white" : "#86909C"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Profile Settings */}
            <div className="h-[calc(85vh_-_130px)] overflow-y-auto overflow-auto pr-3 w-full">
              {activeTab === "profile" && (
                <div className=" flex flex-col gap-10">
                  {/* content to be displayed */}
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="text-[#4E5969]  text-[20px]  font-medium">
                        Profile Settings
                      </p>
                      <p className="text-[#4E5969] text-[16px] font-">
                        Personal & Profile Information Settings
                      </p>
                    </div>
                    <div className="flex gap-[14px]">
                    <div>
                        <button className="text-[#1D2129] text-[16px] font-normal px-[16px] py-[8px] rounded-[4px] border-[1px] border-[#1D2129]">Discard</button>
                    </div>
                    <div>
                      <button className="gap-[10px] bg-[#1D2129] rounded-[4px] text-[#FFFFFF] flex items-center px-4 py-2 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M14.1665 17.7916H5.83317C5.22538 17.7916 4.64249 17.5501 4.21272 17.1204C3.78295 16.6906 3.5415 16.1077 3.5415 15.4999V5.49992C3.5415 4.89213 3.78295 4.30924 4.21272 3.87947C4.64249 3.44969 5.22538 3.20825 5.83317 3.20825H12.0832C12.2489 3.2084 12.4077 3.27434 12.5248 3.39159L16.2748 7.16659C16.3921 7.28368 16.458 7.44255 16.4582 7.60825V15.4999C16.4582 16.1077 16.2167 16.6906 15.787 17.1204C15.3572 17.5501 14.7743 17.7916 14.1665 17.7916ZM5.83317 4.45825C5.5569 4.45825 5.29195 4.568 5.0966 4.76335C4.90125 4.9587 4.7915 5.22365 4.7915 5.49992V15.4999C4.7915 15.7762 4.90125 16.0411 5.0966 16.2365C5.29195 16.4318 5.5569 16.5416 5.83317 16.5416H14.1665C14.4428 16.5416 14.7077 16.4318 14.9031 16.2365C15.0984 16.0411 15.2082 15.7762 15.2082 15.4999V7.84159L11.8248 4.45825H5.83317Z"
                            fill="white"
                          />
                          <path
                            d="M13.9582 17.1666H12.7082V11.9583H7.29154V17.1666H6.04154V11.7499C6.04154 11.4737 6.15128 11.2087 6.34663 11.0133C6.54198 10.818 6.80694 10.7083 7.0832 10.7083H12.9165C13.1928 10.7083 13.4578 10.818 13.6531 11.0133C13.8485 11.2087 13.9582 11.4737 13.9582 11.7499V17.1666ZM10.3915 7.79159H7.1082C6.96703 7.7905 6.82746 7.76161 6.69745 7.70658C6.56744 7.65154 6.44954 7.57144 6.35049 7.47084C6.25144 7.37024 6.17318 7.25112 6.12017 7.12028C6.06716 6.98943 6.04044 6.84942 6.04154 6.70825V3.83325H7.29154V6.54159H10.2082V3.83325H11.4582V6.70825C11.4593 6.84942 11.4326 6.98943 11.3796 7.12028C11.3266 7.25112 11.2483 7.37024 11.1492 7.47084C11.0502 7.57144 10.9323 7.65154 10.8023 7.70658C10.6723 7.76161 10.5327 7.7905 10.3915 7.79159Z"
                            fill="white"
                          />
                        </svg>
                        <span>Save Changes</span>
                      </button>
                    </div>
                    </div>
                  </div>

                  {/* imag and icon */}
                  <div className="relative">
                    <img
                      src={Avatariamge}
                      alt="Avatar"
                      className="w-[120px] h-[120px]"
                    />
                    <div className="absolute bottom-0 left-20 text-[#656565] bg-white p-[9px] rounded-full text-sm">
                      <FaCamera />
                    </div>
                  </div>
                  {/* Personal Information */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-[#4E5969] text-[20px] font-medium">
                        Personal Information
                      </p>
                      <p className="text-[16px] text-[#4E5969] font-normal">
                        Update Your Persnal Information
                      </p>
                    </div>
                   <div className="grid grid-cols-2 gap-8">
                   {inputs.map((input) => (
          <div key={input.field} className="mb-4">
            <p className="text-[#1D2129] text-[16px] font-medium">{input.label}</p>
            <input
              type="text"
              value={input.value}
              placeholder={input.placeholder}
              onChange={(e) => onInputChange(input.field, e.target.value)}
              className="text-[#86909C] px-[16px] py-[10px] border-[1px] rounded-[4px] border-[#CED4DA] w-full"
            />
          </div>
        ))}
    </div>
                    
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editaccountsettings;
