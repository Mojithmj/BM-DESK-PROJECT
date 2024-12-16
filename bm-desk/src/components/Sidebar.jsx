import React, { useState } from "react";
import { RiHomeLine, RiArrowDropDownLine } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { TbMenuDeep } from "react-icons/tb";
import ticket from "../assets/ticket.svg";
import otickets from "../assets/otickets.svg";
import ctickets from "../assets/ctickets.svg";
import atickets from "../assets/atickets.svg";
import assigntickets from "../assets/assigntickets.svg";
import actiontickets from "../assets/actiontickets.svg";

function Sidebar() {
  const [activePath, setActivePath] = useState(window.location.pathname);
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const managername = localStorage.getItem("myusername") === "mojith";

  const handleItemClick = (item) => {
    if (item.dropdown) {
      // Only toggle dropdown if clicking on the same item that's already open
      if (openDropdown === item.label) {
        setOpenDropdown(null);
      }
      // If clicking on a different dropdown item, open it
      else if (!item.path) {
        setOpenDropdown(item.label);
      }
    }

    // If the item has a path, navigate to it
    if (item.path) {
      setActivePath(item.path);
      navigate(item.path);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  // Rest of your menuItems array stays the same
  const menuItems = [
    {
      label: "Dashboards",
      icon: <RiHomeLine />,
      path: "/",
    },
    ...(managername
      ? [
          {
            label: "Task Management",
            icon: <BsGraphUpArrow />,
            path: "/teammanagement",
          },
        ]
      : [
          {
            label: "My Productivity",
            icon: <BsGraphUpArrow />,
            path: "/productivity",
          },
        ]),
    {
      label: "Tickets",
      icon: <img src={ticket} alt="ticket" />,
      dropdown: [
        {
          label: "Open Tickets",
          path: "/opentickets",
          key: "open_tickets",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.04792 3.05501C4.04025 3.41507 3.39537 4.07625 3.13404 5.01723C2.93509 5.73416 2.96621 14.1206 3.17053 14.7993C3.38477 15.5112 3.81119 16.0491 4.46667 16.4345L5.00437 16.7505L9.72065 16.7838C15.1449 16.8221 15.223 16.8116 16.0815 15.9282C16.811 15.1777 16.9194 14.6865 16.9174 12.1406C16.9163 10.9763 16.8721 9.95494 16.819 9.87113C16.7657 9.78722 16.5998 9.73591 16.4501 9.75712L16.178 9.79554L16.121 12.1899C16.0611 14.7017 16.0058 14.9816 15.4729 15.4637C14.8948 15.9869 14.667 16.0094 9.96408 16.0094C6.21385 16.0094 5.44379 15.9817 5.09034 15.8341C4.52504 15.5978 4.27079 15.3547 4.02166 14.8123C3.82966 14.3943 3.81199 13.9771 3.8097 9.81948C3.80731 5.51206 3.81871 5.26031 4.0342 4.83788C4.15905 4.5932 4.44991 4.24887 4.68056 4.07283L5.09991 3.75267L7.49129 3.69567C9.55955 3.64641 9.89897 3.613 10.0023 3.44871C10.0889 3.31098 10.0806 3.20905 9.97206 3.07815C9.84459 2.92457 9.49615 2.89835 7.64134 2.90257C6.15856 2.90599 5.3284 2.95479 5.04792 3.05501ZM12.4645 3.07815C12.3559 3.20905 12.3476 3.31098 12.4342 3.44871C12.5343 3.60765 12.8023 3.6439 14.0766 3.6707L15.5993 3.70262L12.4852 6.81835C9.30324 10.0019 9.06574 10.3107 9.72624 10.4044C9.95176 10.4363 10.529 9.91343 13.0564 7.38729L16.1138 4.33154L16.1459 5.7971C16.1726 7.0181 16.2097 7.28273 16.3679 7.38238C16.5057 7.46904 16.6076 7.46071 16.7385 7.35217C16.8908 7.22573 16.9191 6.88664 16.9191 5.18677C16.9191 3.77115 16.8784 3.13049 16.7823 3.03437C16.6861 2.93826 16.0455 2.89755 14.6299 2.89755C12.93 2.89755 12.5909 2.92583 12.4645 3.07815Z"
                fill="#86909C"
                stroke="#86909C"
                stroke-width="0.5"
              />
            </svg>
          ),
        },
        {
          label: "Assigned Tickets",
          path: "/assignedtickets",
          key: "assigned_tickets",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M11.9 2.3746C13.3 2.3746 14 3.0816 14 4.4956V9.4306C14 10.8236 13.013 11.3626 11.802 10.6346L10.878 10.0746C10.668 9.9486 10.332 9.9486 10.122 10.0746L9.198 10.6346C7.987 11.3626 7 10.8236 7 9.4306V4.4956C7 3.0816 7.7 2.3746 9.1 2.3746H11.9Z"
                stroke="#86909C"
                stroke-width="1.26"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.615 4.1558C4.0575 4.5833 3 6.1583 3 9.3383V11.6108C3 15.3983 4.5 16.9133 8.25 16.9133H12.75C16.5 16.9133 18 15.3983 18 11.6108V9.3383C18 6.1058 16.905 4.5233 14.25 4.1333"
                stroke="#86909C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
        },
        {
          label: "Closed Tickets",
          path: "/closedtickets",
          key: "closed_tickets",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6.25 5H5.625C4.7962 5 4.00134 5.32924 3.41529 5.91529C2.82924 6.50134 2.5 7.2962 2.5 8.125V14.375C2.5 15.2038 2.82924 15.9987 3.41529 16.5847C4.00134 17.1708 4.7962 17.5 5.625 17.5H14.375C15.2038 17.5 15.9987 17.1708 16.5847 16.5847C17.1708 15.9987 17.5 15.2038 17.5 14.375V8.125C17.5 7.2962 17.1708 6.50134 16.5847 5.91529C15.9987 5.32924 15.2038 5 14.375 5H13.75V4.375C13.75 3.38044 13.3549 2.42661 12.6517 1.72335C11.9484 1.02009 10.9946 0.625 10 0.625C9.00544 0.625 8.05161 1.02009 7.34835 1.72335C6.64509 2.42661 6.25 3.38044 6.25 4.375V5ZM7.5 4.375C7.5 3.71196 7.76339 3.07607 8.23223 2.60723C8.70107 2.13839 9.33696 1.875 10 1.875C10.663 1.875 11.2989 2.13839 11.7678 2.60723C12.2366 3.07607 12.5 3.71196 12.5 4.375V5H7.5V4.375ZM14.375 6.25C14.8723 6.25 15.3492 6.44754 15.7008 6.79917C16.0525 7.15081 16.25 7.62772 16.25 8.125V14.375C16.25 14.8723 16.0525 15.3492 15.7008 15.7008C15.3492 16.0525 14.8723 16.25 14.375 16.25H5.625C5.12772 16.25 4.65081 16.0525 4.29917 15.7008C3.94754 15.3492 3.75 14.8723 3.75 14.375V8.125C3.75 7.62772 3.94754 7.15081 4.29917 6.79917C4.65081 6.44754 5.12772 6.25 5.625 6.25H14.375Z"
                fill="#86909C"
              />
            </svg>
          ),
        },
        {
          label: "Ticket Approvals",
          path: "/ticketapprovals",
          key: "ticket_approvals",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.5498 9.18335V13.325C3.5498 14.8417 3.5498 14.8417 4.98314 15.8083L8.9248 18.0833C9.51647 18.425 10.4831 18.425 11.0748 18.0833L15.0165 15.8083C16.4498 14.8417 16.4498 14.8417 16.4498 13.325V9.18335C16.4498 7.66668 16.4498 7.66668 15.0165 6.70001L11.0748 4.42501C10.4831 4.08335 9.51647 4.08335 8.9248 4.42501L4.98314 6.70001C3.5498 7.66668 3.5498 7.66668 3.5498 9.18335Z"
                stroke="#86909C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.5832 6.35832V4.16666C14.5832 2.49999 13.7498 1.66666 12.0832 1.66666H7.9165C6.24984 1.66666 5.4165 2.49999 5.4165 4.16666V6.29999"
                stroke="#86909C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.525 9.15833L11 9.9C11.075 10.0167 11.2416 10.1333 11.3666 10.1667L12.2166 10.3833C12.7416 10.5167 12.8833 10.9667 12.5416 11.3833L11.9833 12.0583C11.9 12.1667 11.8333 12.3583 11.8416 12.4917L11.8916 13.3667C11.925 13.9083 11.5416 14.1833 11.0416 13.9833L10.225 13.6583C10.1 13.6083 9.89165 13.6083 9.76665 13.6583L8.94998 13.9833C8.44998 14.1833 8.06665 13.9 8.09998 13.3667L8.14998 12.4917C8.15831 12.3583 8.09165 12.1583 8.00831 12.0583L7.44998 11.3833C7.10831 10.9667 7.24998 10.5167 7.77498 10.3833L8.62498 10.1667C8.75831 10.1333 8.92498 10.0083 8.99165 9.9L9.46665 9.15833C9.76665 8.70833 10.2333 8.70833 10.525 9.15833Z"
                stroke="#86909C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
        },
        {
          label: "My Actioned Tickets",
          path: "/actionedtickets",
          key: "actioned_tickets",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.1663 17.2917H5.83294C2.29128 17.2917 1.13294 16.2333 1.04961 12.9333C1.04961 12.7667 1.10794 12.6 1.22461 12.4833C1.34128 12.3667 1.49961 12.2917 1.67461 12.2917C2.93294 12.2917 3.95794 11.2583 3.95794 10C3.95794 8.74168 2.93294 7.70834 1.67461 7.70834C1.50794 7.70834 1.34961 7.64168 1.22461 7.51668C1.09961 7.39168 1.04128 7.23334 1.04961 7.06668C1.13294 3.76668 2.29128 2.70834 5.83294 2.70834H14.1663C17.8413 2.70834 18.9579 3.82501 18.9579 7.50001V12.5C18.9579 16.175 17.8413 17.2917 14.1663 17.2917ZM2.32461 13.4833C2.46628 15.6 3.18294 16.0417 5.83294 16.0417H14.1663C17.1496 16.0417 17.7079 15.475 17.7079 12.5V7.50001C17.7079 4.52501 17.1496 3.95834 14.1663 3.95834H5.83294C3.18294 3.95834 2.46628 4.40834 2.32461 6.51668C3.96628 6.83334 5.20794 8.27501 5.20794 10C5.20794 11.725 3.96628 13.1667 2.32461 13.4833Z"
                fill="#86909C"
              />
              <path
                d="M7.5 6.87501C7.15833 6.87501 6.875 6.59168 6.875 6.25001V3.33334C6.875 2.99168 7.15833 2.70834 7.5 2.70834C7.84167 2.70834 8.125 2.99168 8.125 3.33334V6.25001C8.125 6.59168 7.84167 6.87501 7.5 6.87501Z"
                fill="#86909C"
              />
              <path
                d="M7.5 17.2917C7.15833 17.2917 6.875 17.0083 6.875 16.6667V13.75C6.875 13.4083 7.15833 13.125 7.5 13.125C7.84167 13.125 8.125 13.4083 8.125 13.75V16.6667C8.125 17.0083 7.84167 17.2917 7.5 17.2917Z"
                fill="#86909C"
              />
              <path
                d="M10.8668 13.0413C10.6668 13.0413 10.4668 12.9747 10.3001 12.858C10.0001 12.6413 9.85012 12.2747 9.91679 11.908L10.0918 10.9163L9.36679 10.208C9.10012 9.94967 9.00845 9.56634 9.11679 9.21634C9.23345 8.86634 9.53345 8.60801 9.90012 8.55801L10.9001 8.40801L11.3501 7.49967C11.5168 7.16634 11.8501 6.95801 12.2168 6.95801C12.5918 6.95801 12.9251 7.16634 13.0835 7.49967L13.5335 8.40801L14.5335 8.55801C14.9001 8.60801 15.2001 8.86634 15.3168 9.21634C15.4335 9.56634 15.3335 9.94967 15.0668 10.208L14.3418 10.9163L14.5168 11.908C14.5835 12.2747 14.4335 12.6413 14.1335 12.858C13.8335 13.0747 13.4418 13.0997 13.1168 12.933L12.2251 12.4663L11.3251 12.933C11.1835 13.008 11.0251 13.0413 10.8668 13.0413ZM10.6418 9.70801L11.0668 10.1247C11.3001 10.3497 11.4001 10.6663 11.3501 10.983L11.2501 11.5663L11.7751 11.2913C12.0585 11.1413 12.3918 11.1413 12.6751 11.2913L13.2001 11.5663L13.1001 10.983C13.0501 10.658 13.1501 10.3413 13.3835 10.1247L13.8085 9.70801L13.2251 9.62467C12.9085 9.57467 12.6335 9.37467 12.4918 9.09134L12.2335 8.55801L11.9751 9.09134C11.8335 9.37467 11.5585 9.57467 11.2418 9.62467L10.6418 9.70801Z"
                fill="#86909C"
              />
            </svg>
          ),
        },
      ],
    },
    // ... rest of your menuItems ...
    {
      label: "View Projects",
      path: "/viewproject",
      icon: <BsGraphUpArrow />,
      key: "view_projects",
    },
  ];

  return (
    <div
      className={`flex flex-col h-screen border-r border-[#E5E6EB] ${
        isSidebarOpen
          ? "2xl:w-[250px] lg:w-[225px] md:w-[200px] w-[160px]"
          : "w-[60px]"
      } px-4 gap-5 transition-all duration-300`}
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
              ? "bg-[#E8F3FF] text-[#165DFF] rounded-[4px] border-[1px] border-[#BEDAFF] cursor-pointer"
              : "text-[#4E5969]"
          }`}
        >
          <div
            className="group flex flex-row gap-2 items-center p-3 border border-white hover:bg-[#E8F3FF] hover:text-[#165DFF] rounded-[4px] hover:border-[1px] hover:border-[#BEDAFF] cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <div
              className={`${
                isSidebarOpen ? "" : ""
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
                className={`text-4xl w-[19px] h-[19px] ${
                  openDropdown === item.label ? "rotate-180" : ""
                }`}
              />
            )}
          </div>
          {item.dropdown && openDropdown === item.label && isSidebarOpen && (
            <div>
              {item.dropdown.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className={`${
                    activePath === subItem.path
                      ? "bg-[#E8F3FF] text-[#165DFF] rounded-[4px] border-[1px] border-[#BEDAFF]"
                      : "text-[#4E5969]"
                  }`}
                >
                  <div
                    className="group px-10 border border-white py-2 gap-2 flex flex-row items-center text-sm text-nowrap hover:bg-[#E8F3FF] hover:text-[#165DFF] rounded-[4px] hover:border-[1px] hover:border-[#BEDAFF] cursor-pointer"
                    onClick={() => {
                      setActivePath(subItem.path);
                      navigate(subItem.path);
                    }}
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
