import React, { useState } from "react";
import { RiHomeLine, RiArrowDropDownLine } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { TbMenuDeep } from "react-icons/tb";

const menuItems = [
  {
    label: "Dashboards",
    icon: <RiHomeLine />,
    path: "/",
  },
  {
    label: "My Productivity",
    icon: <BsGraphUpArrow />,
    path: "/productivity",
  },
  {
    label: "Tickets",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M16.2498 10.4168C16.2498 9.26683 17.1832 8.3335 18.3332 8.3335V7.50016C18.3332 4.16683 17.4998 3.3335 14.1665 3.3335H5.83317C2.49984 3.3335 1.6665 4.16683 1.6665 7.50016V7.91683C2.8165 7.91683 3.74984 8.85016 3.74984 10.0002C3.74984 11.1502 2.8165 12.0835 1.6665 12.0835V12.5002C1.6665 15.8335 2.49984 16.6668 5.83317 16.6668H14.1665C17.4998 16.6668 18.3332 15.8335 18.3332 12.5002C17.1832 12.5002 16.2498 11.5668 16.2498 10.4168Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.3335 3.3335L8.3335 16.6668"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="5 5"
        />
      </svg>
    ),
    dropdown: [
      {
        label: "Open Tickets",
        icon: (
          <svg
            className="shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.04792 1.05492C2.04025 1.41498 1.39537 2.07616 1.13404 3.01714C0.935086 3.73407 0.966212 12.1205 1.17053 12.7992C1.38477 13.5111 1.81119 14.049 2.46667 14.4344L3.00437 14.7504L7.72065 14.7837C13.1449 14.822 13.223 14.8116 14.0815 13.9282C14.811 13.1776 14.9194 12.6864 14.9174 10.1405C14.9163 8.9762 14.8721 7.95484 14.819 7.87104C14.7657 7.78713 14.5998 7.73582 14.4501 7.75703L14.178 7.79545L14.121 10.1898C14.0611 12.7016 14.0058 12.9815 13.4729 13.4637C12.8948 13.9868 12.667 14.0093 7.96408 14.0093C4.21385 14.0093 3.44379 13.9816 3.09034 13.834C2.52504 13.5977 2.27079 13.3547 2.02166 12.8122C1.82966 12.3942 1.81199 11.977 1.8097 7.81939C1.80731 3.51197 1.81871 3.26022 2.0342 2.83779C2.15905 2.59311 2.44991 2.24878 2.68056 2.07274L3.09991 1.75258L5.49129 1.69558C7.55955 1.64632 7.89897 1.61291 8.00227 1.44862C8.08893 1.31088 8.0806 1.20895 7.97206 1.07806C7.84459 0.924483 7.49615 0.898259 5.64134 0.902478C4.15856 0.905898 3.3284 0.954697 3.04792 1.05492ZM10.4645 1.07806C10.3559 1.20895 10.3476 1.31088 10.4342 1.44862C10.5343 1.60755 10.8023 1.64381 12.0766 1.67061L13.5993 1.70253L10.4852 4.81825C7.30324 8.00182 7.06574 8.31057 7.72624 8.4043C7.95176 8.43622 8.52903 7.91334 11.0564 5.3872L14.1138 2.33144L14.1459 3.79701C14.1726 5.01801 14.2097 5.28264 14.3679 5.38229C14.5057 5.46895 14.6076 5.46062 14.7385 5.35208C14.8908 5.22563 14.9191 4.88655 14.9191 3.18668C14.9191 1.77105 14.8784 1.1304 14.7823 1.03428C14.6861 0.938165 14.0455 0.897461 12.6299 0.897461C10.93 0.897461 10.5909 0.925737 10.4645 1.07806Z"
              fill="#86909C"
              stroke="Currentcolor"
              stroke-width="0.5"
            />
          </svg>
        ),
        path: "/opentickets",
      },

      {
        label: "Assigned Tickets",
        icon: (
          <svg
            className="shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M11.9 2.37451C13.3 2.37451 14 3.08151 14 4.49551V9.43051C14 10.8235 13.013 11.3625 11.802 10.6345L10.878 10.0745C10.668 9.94851 10.332 9.94851 10.122 10.0745L9.198 10.6345C7.987 11.3625 7 10.8235 7 9.43051V4.49551C7 3.08151 7.7 2.37451 9.1 2.37451H11.9Z"
              stroke="currentColor"
              stroke-width="1.26"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.615 4.1558C4.0575 4.5833 3 6.1583 3 9.3383V11.6108C3 15.3983 4.5 16.9133 8.25 16.9133H12.75C16.5 16.9133 18 15.3983 18 11.6108V9.3383C18 6.1058 16.905 4.5233 14.25 4.1333"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
        path: "/assignedtickets",
      },

      {
        label: "Closed Tickets",
        icon: (
          <svg
            className="shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M6.25 5H5.625C4.7962 5 4.00134 5.32924 3.41529 5.91529C2.82924 6.50134 2.5 7.2962 2.5 8.125V14.375C2.5 15.2038 2.82924 15.9987 3.41529 16.5847C4.00134 17.1708 4.7962 17.5 5.625 17.5H14.375C15.2038 17.5 15.9987 17.1708 16.5847 16.5847C17.1708 15.9987 17.5 15.2038 17.5 14.375V8.125C17.5 7.2962 17.1708 6.50134 16.5847 5.91529C15.9987 5.32924 15.2038 5 14.375 5H13.75V4.375C13.75 3.38044 13.3549 2.42661 12.6517 1.72335C11.9484 1.02009 10.9946 0.625 10 0.625C9.00544 0.625 8.05161 1.02009 7.34835 1.72335C6.64509 2.42661 6.25 3.38044 6.25 4.375V5ZM7.5 4.375C7.5 3.71196 7.76339 3.07607 8.23223 2.60723C8.70107 2.13839 9.33696 1.875 10 1.875C10.663 1.875 11.2989 2.13839 11.7678 2.60723C12.2366 3.07607 12.5 3.71196 12.5 4.375V5H7.5V4.375ZM14.375 6.25C14.8723 6.25 15.3492 6.44754 15.7008 6.79917C16.0525 7.15081 16.25 7.62772 16.25 8.125V14.375C16.25 14.8723 16.0525 15.3492 15.7008 15.7008C15.3492 16.0525 14.8723 16.25 14.375 16.25H5.625C5.12772 16.25 4.65081 16.0525 4.29917 15.7008C3.94754 15.3492 3.75 14.8723 3.75 14.375V8.125C3.75 7.62772 3.94754 7.15081 4.29917 6.79917C4.65081 6.44754 5.12772 6.25 5.625 6.25H14.375Z"
              fill="#86909C"
              stroke="currentColor"
            />
          </svg>
        ),
        path: "/closedtickets",
      },

      {
        label: "Ticket Approvals",
        icon: (
          <svg
            className="shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M3.55005 9.18353V13.3252C3.55005 14.8419 3.55005 14.8419 4.98338 15.8085L8.92505 18.0835C9.51672 18.4252 10.4834 18.4252 11.075 18.0835L15.0167 15.8085C16.45 14.8419 16.45 14.8419 16.45 13.3252V9.18353C16.45 7.66686 16.45 7.66686 15.0167 6.7002L11.075 4.4252C10.4834 4.08353 9.51672 4.08353 8.92505 4.4252L4.98338 6.7002C3.55005 7.66686 3.55005 7.66686 3.55005 9.18353Z"
              stroke="CurrentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.5834 6.35817V4.1665C14.5834 2.49984 13.7501 1.6665 12.0834 1.6665H7.91675C6.25008 1.6665 5.41675 2.49984 5.41675 4.1665V6.29984"
              stroke="CurrentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.525 9.1583L11 9.89997C11.075 10.0166 11.2416 10.1333 11.3666 10.1666L12.2166 10.3833C12.7416 10.5166 12.8833 10.9666 12.5416 11.3833L11.9833 12.0583C11.9 12.1666 11.8333 12.3583 11.8416 12.4916L11.8916 13.3666C11.925 13.9083 11.5416 14.1833 11.0416 13.9833L10.225 13.6583C10.1 13.6083 9.89165 13.6083 9.76665 13.6583L8.94998 13.9833C8.44998 14.1833 8.06665 13.9 8.09998 13.3666L8.14998 12.4916C8.15831 12.3583 8.09165 12.1583 8.00831 12.0583L7.44998 11.3833C7.10831 10.9666 7.24998 10.5166 7.77498 10.3833L8.62498 10.1666C8.75831 10.1333 8.92498 10.0083 8.99165 9.89997L9.46665 9.1583C9.76665 8.7083 10.2333 8.7083 10.525 9.1583Z"
              stroke="CurrentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
        path: "/ticketapprovals",
      },

      {
        label: "My Tickets",
        icon: (
          <svg
            className="shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M14.1665 17.2918H5.83319C2.29152 17.2918 1.13319 16.2335 1.04985 12.9335C1.04985 12.7668 1.10819 12.6002 1.22485 12.4835C1.34152 12.3668 1.49985 12.2918 1.67485 12.2918C2.93319 12.2918 3.95819 11.2585 3.95819 10.0002C3.95819 8.74183 2.93319 7.7085 1.67485 7.7085C1.50819 7.7085 1.34985 7.64183 1.22485 7.51683C1.09985 7.39183 1.04152 7.2335 1.04985 7.06683C1.13319 3.76683 2.29152 2.7085 5.83319 2.7085H14.1665C17.8415 2.7085 18.9582 3.82516 18.9582 7.50016V12.5002C18.9582 16.1752 17.8415 17.2918 14.1665 17.2918ZM2.32485 13.4835C2.46652 15.6002 3.18319 16.0418 5.83319 16.0418H14.1665C17.1499 16.0418 17.7082 15.4752 17.7082 12.5002V7.50016C17.7082 4.52516 17.1499 3.9585 14.1665 3.9585H5.83319C3.18319 3.9585 2.46652 4.4085 2.32485 6.51683C3.96652 6.8335 5.20819 8.27516 5.20819 10.0002C5.20819 11.7252 3.96652 13.1668 2.32485 13.4835Z"
              fill="#86909C"
              stroke="CurrentColor"
            />
            <path
              d="M7.5 6.87516C7.15833 6.87516 6.875 6.59183 6.875 6.25016V3.3335C6.875 2.99183 7.15833 2.7085 7.5 2.7085C7.84167 2.7085 8.125 2.99183 8.125 3.3335V6.25016C8.125 6.59183 7.84167 6.87516 7.5 6.87516Z"
              fill="#86909C"
              stroke="CurrentColor"
            />
            <path
              d="M7.5 17.2917C7.15833 17.2917 6.875 17.0083 6.875 16.6667V13.75C6.875 13.4083 7.15833 13.125 7.5 13.125C7.84167 13.125 8.125 13.4083 8.125 13.75V16.6667C8.125 17.0083 7.84167 17.2917 7.5 17.2917Z"
              fill="#86909C"
              stroke="CurrentColor"
            />
            <path
              d="M10.8668 13.0413C10.6668 13.0413 10.4668 12.9747 10.3001 12.858C10.0001 12.6413 9.85012 12.2747 9.91679 11.908L10.0918 10.9163L9.36679 10.208C9.10012 9.94967 9.00845 9.56634 9.11679 9.21634C9.23345 8.86634 9.53345 8.60801 9.90012 8.55801L10.9001 8.40801L11.3501 7.49967C11.5168 7.16634 11.8501 6.95801 12.2168 6.95801C12.5918 6.95801 12.9251 7.16634 13.0835 7.49967L13.5335 8.40801L14.5335 8.55801C14.9001 8.60801 15.2001 8.86634 15.3168 9.21634C15.4335 9.56634 15.3335 9.94967 15.0668 10.208L14.3418 10.9163L14.5168 11.908C14.5835 12.2747 14.4335 12.6413 14.1335 12.858C13.8335 13.0747 13.4418 13.0997 13.1168 12.933L12.2251 12.4663L11.3251 12.933C11.1835 13.008 11.0251 13.0413 10.8668 13.0413ZM10.6418 9.70801L11.0668 10.1247C11.3001 10.3497 11.4001 10.6663 11.3501 10.983L11.2501 11.5663L11.7751 11.2913C12.0585 11.1413 12.3918 11.1413 12.6751 11.2913L13.2001 11.5663L13.1001 10.983C13.0501 10.658 13.1501 10.3413 13.3835 10.1247L13.8085 9.70801L13.2251 9.62467C12.9085 9.57467 12.6335 9.37467 12.4918 9.09134L12.2335 8.55801L11.9751 9.09134C11.8335 9.37467 11.5585 9.57467 11.2418 9.62467L10.6418 9.70801Z"
              fill="#86909C"
              stroke="CurrentColor"
            />
          </svg>
        ),
        path: "/actionedtickets",
      },
    ],
  },
  {
    label: "View Projects",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M18.3332 13.9501V3.89174C18.3332 2.89174 17.5165 2.15008 16.5248 2.23341H16.4748C14.7248 2.38341 12.0665 3.27508 10.5832 4.20841L10.4415 4.30008C10.1998 4.45008 9.79984 4.45008 9.55817 4.30008L9.34984 4.17508C7.8665 3.25008 5.2165 2.36674 3.4665 2.22508C2.47484 2.14174 1.6665 2.89174 1.6665 3.88341V13.9501C1.6665 14.7501 2.3165 15.5001 3.1165 15.6001L3.35817 15.6334C5.1665 15.8751 7.95817 16.7917 9.55817 17.6667L9.5915 17.6834C9.8165 17.8084 10.1748 17.8084 10.3915 17.6834C11.9915 16.8001 14.7915 15.8751 16.6082 15.6334L16.8832 15.6001C17.6832 15.5001 18.3332 14.7501 18.3332 13.9501Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 4.5752V17.0752"
          stroke="CurrentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.4585 7.0752H4.5835"
          stroke="CurrentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.0835 9.5752H4.5835"
          stroke="CurrentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    path: "/viewproject",
  },
];

function Sidebar() {
  const [activePath, setActivePath] = useState(window.location.pathname); // Set default based on current URL
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleItemClick = (item) => {
    if (item.dropdown) {
      handleDropdown(item.label);
    } else {
      setActivePath(item.path);
      navigate(item.path);
    }
  };
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  //

  return (
    <div
      className={`flex flex-col h-screen border-r border-[#E5E6EB] ${
        isSidebarOpen
          ? "2xl:w-[250px] lg:w-[210px] md:w-[180px] w-[160px]"
          : "w-[60px]"
      } px-4  gap-5 transition-all duration-300`}
    >
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleSidebar}
          className="text-[#4E5969] text-xl hover:text-[#165DFF] transition-colors lg:hidden 2xl:hidden"
        >
          <TbMenuDeep />
        </button>
      </div>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`${
            activePath === item.path
              ? " bg-[#E8F3FF] text-[#165DFF] rounded-[4px] border-[1px] border-[#BEDAFF] cursor-pointer"
              : " text-[#4E5969] "
          }`}
          onClick={() => handleItemClick(item)}
        >
          <div
            className="group flex flex-row gap-2 items-center  py-3 border border-white  hover:bg-[#E8F3FF] hover:text-[#165DFF] rounded-[4px] hover:border-[1px] hover:border-[#BEDAFF] cursor-pointer"
            onClick={
              item.dropdown
                ? () => handleDropdown(item.label)
                : () => navigate(item.path)
            }
          >
            <div
              className={`${
                isSidebarOpen
                  ? "px-4" // Background and border when open
                  : "" // No background or border when closed
              } text-[20px] group-hover:text-[#165DFF] rounded-[4px] transition-all`}
            >
              {item.icon}
            </div>

            {isSidebarOpen && (
              <div className="text-[14px] font-medium font-Inter group-hover:text-[#165DFF] flex-1">
                {item.label}
              </div>
            )}

            {item.dropdown && isSidebarOpen && (
              <RiArrowDropDownLine
                className={`text-4xl  w-[19px] h-[19px] ${
                  openDropdown === item.label ? "rotate-180" : ""
                }`}
              />
            )}
          </div>
          {item.dropdown && openDropdown === item.label && isSidebarOpen && (
            <div>
              {item.dropdown.map((subItem, subIndex) => (
                <div
                  className={`${
                    activePath === item.path
                      ? " bg-[#E8F3FF] text-[#165DFF] rounded-[4px] border-[1px] border-[#BEDAFF] cursor-pointer"
                      : " text-[#4E5969] "
                  }`}
                >
                  <div
                    key={subIndex}
                    className="group px-10 border border-white py-2 gap-2 flex flex-row items-center text-sm text-[#4E5969] text-nowrap  hover:bg-[#E8F3FF] hover:text-[#165DFF] rounded-[4px] hover:border-[1px] hover:border-[#BEDAFF] cursor-pointer"
                    onClick={() => navigate(subItem.path)}
                  >
                    <div className="text-[16px]">{subItem.icon}</div>
                    <div className="flex-1 2xl:text-[14px] lg:text-xs md:text-[11px] text-[10px] font-medium font-Inter group-hover:text-[#165DFF]">
                      {subItem.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
