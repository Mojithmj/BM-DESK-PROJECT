import React, { useState } from "react";
import Avatarimage from "../assets/Avatar Image.png";
import { FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Editaccountsettings from "./Editaccountsettings";
import Privacyaccountsettings from "./Privacyaccountsettings";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function AccountSettings() {
  // Set the default active tab to "profile"
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [profilePic, setProfilePic] = useState(Avatarimage); // Default profile image

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result); // Update profile picture with the new image
      };
      reader.readAsDataURL(file); // Read file as a data URL
    }
  };

  const tabs = [
    { value: "profile", label: "Profile" },
    { value: "privacyandsecurity", label: "Privacy & Security" },
  ];

  const [inputValues, setInputValues] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    emailaddress: "",
    designation: "",
  });

  const inputchange = (field, value) => {
    setInputValues((prev) => ({ ...prev, [field]: value }));
  };
  const inputs = [
    {
      label: "First Name",
      placeholder: "Enter Your First Name",
      value: inputValues.firstname,
      field: "firstname",
    },
    {
      label: "Last Name",
      placeholder: "Enter Your Last Name",
      value: inputValues.lastname,
      field: "lastname",
    },
    {
      label: "Phone Number",
      placeholder: "Type Your Phone Number",
      value: inputValues.phonenumber,
      field: "phonenumber",
    },
    {
      label: "Email Address",
      placeholder: "Enter Your Email Address",
      value: inputValues.emailaddress,
      field: "emailaddress",
    },
    {
      label: "Designation",
      placeholder: "Role Description",
      value: inputValues.designation,
      field: "designation",
    },
  ];

  return (
    <div>
      {/* <div className="fixed top-30 left-64 w-[calc(100%_-_300px)]"> */}
      <div className="transition-all ml-4 mt-4 duration-300 ease-in-out">
        <div className="flex flex-col flex-start gap-9">
          <div>
            <h1 className="font-inter text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px]   font-bold text-[#09090B]">
              Account Settings
            </h1>
            <h2 className="font-inter text-[12px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px] font-normal text-[#656565]">
              Settings and security for your application
            </h2>
          </div>
          {/* Tabs */}
          <div className="flex gap-8">
            <div>
              <div className="grid text-nowrap">
                {tabs.map((tab) => (
                  <Button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`font-inter sm:px-[10px] sm:py-[4px] lg:px-[12px] 2xl:px-[40px] text-[10px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px] flex gap-[8px] font-normal rounded-[4px] transition-colors border-0 shadow-none ${
                      activeTab === tab.value
                        ? "bg-[#165DFF] text-[#FFFFFF] hover:bg-[#165DFF] hover:text-[#FFFFFF]"
                        : "bg-[#FFFFFF] text-[#1D2129] hover:bg-[#FFFFFF] hover:text-[#1D2129]"
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
                    {tab.value === "privacyandsecurity" && (
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
                  </Button>
                ))}
              </div>
            </div>
            {/* Profile Settings */}
            <div className="h-[calc(85vh_-_130px)] overflow-y-auto overflow-auto pr-3 w-full">
              {activeTab === "profile" && (
                <div className=" flex flex-col gap-10 ">
                  {/* content to be displayed */}
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="text-[#4E5969]  text-[10px] 2xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[12px]  font-medium">
                        Profile Settings
                      </p>
                      <p className="whitespace-nowrap text-[#4E5969] text-[10px] sm:text-[8px] md:text-[10px] xl:text-[14px] 2xl:text-[16px] font-">
                        Personal & Profile Information Settings
                      </p>
                    </div>
                    <div
                      onClick={() => {
                        navigate("/editaccountsettings");
                      }}
                    >
                      <Button className="gap-[8px] bg-[#1D2129] rounded-[4px] text-[#FFFFFF] flex items-center hover:bg-[#1D2129] hover:text-[#FFFFFF]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          className="mr-2"
                        >
                          <path
                            d="M11.7167 8L12.5 8.78333L4.93333 16.3333H4.16667V15.5667L11.7167 8ZM14.7167 3C14.5083 3 14.2917 3.08333 14.1333 3.24167L12.6083 4.76667L15.7333 7.89167L17.2583 6.36667C17.5833 6.04167 17.5833 5.5 17.2583 5.19167L15.3083 3.24167C15.1417 3.075 14.9333 3 14.7167 3ZM11.7167 5.65833L2.5 14.875V18H5.625L14.8417 8.78333L11.7167 5.65833Z"
                            fill="white"
                          />
                        </svg>
                        <span className="text-[10px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px] hover:bg-[#1D2129] hover:text-[#FFFFFF] hover-none">
                          Edit Profile
                        </span>
                      </Button>
                    </div>
                  </div>

                  {/* imag and icon */}
                  <div className="relative">
                  <img
        src={profilePic}
        alt="Avatar"
        className="w-[120px] h-[120px] md:w-[80px] md:h-[80px] rounded-full object-cover"
      />
                    <div className="absolute bottom-0 left-[80px] md:left-[55px] lg:left-[55px] 2xl:left-[80px] text-[#656565] bg-white p-[7px] rounded-full border border-[#CED4DA] text-sm">
                    <label htmlFor="file-upload" className="cursor-pointer">
          <FaCamera />
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
                    </div>
                  </div>
                  {/* Personal Information */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-[#4E5969] text-[12px] 2xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[12px] font-medium">
                        Personal Information
                      </p>
                      <p className="text-[10px] sm:text-[8px] md:text-[10px] xl:text-[14px] 2xl:text-[16px] text-[#4E5969] font-normal">
                        Update Your Persnal Information
                      </p>
                    </div>
                    {/* input */}
                    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8">
                      {inputs.length > 0 ? (
                        inputs.map((input) => (
                          <div key={input.field} className="mb-4">
                            <p className="text-[#1D2129] text-[12px] sm:text-[10px] md:text-[12px] xl:text-[14px] 2xl:text-[16px] font-medium">
                              {input.label}
                            </p>
                            <Input
                              type="text"
                              value={input.value}
                              placeholder={input.placeholder}
                              disabled
                              className="text-[#86909C] px-[10px] py-[8px] 2xl:px-[16px] 2xl:py-[10px] border-[1px] rounded-[4px] border-[#CED4DA] max-w-[350px] w-full lg:w-[500px]  placeholder:text-[12px]"
                            />
                          </div>
                        ))
                      ) : (
                        <Editaccountsettings
                          inputs={inputs}
                          onInputChange={inputchange}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div>
                {activeTab === "privacyandsecurity" && (
                  <div>
                    <Privacyaccountsettings />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
