import React, { useState, useContext, useEffect } from "react";
// import { SidebarContext } from "./Layout";
import { RiHomeLine, RiArrowDropDownLine } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { TbMenuDeep } from "react-icons/tb";
import ticket from "../assets/ticket.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  // const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const [activePath, setActivePath] = useState(window.location.pathname);
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const managername = localStorage.getItem("myusername") === "mojith";
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [open, setOpen] = useState(false);

  // Add resize event listener to close sheet when screen width is >= 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && open) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]); // Only re-run if open state changes

  const handleItemClick = (item, isMobile = false) => {
    if (item.dropdown) {
      if (isMobile) {
        setMobileOpenDropdown(
          mobileOpenDropdown === item.label ? null : item.label
        );
      } else {
        setOpenDropdown(openDropdown === item.label ? null : item.label);
      }
    }

    if (item.path) {
      setActivePath(item.path);
      navigate(item.path);
      if (isMobile) {
        setOpen(false); // Close the sheet
      }
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      }
    }
  };

  const handleMobileSubItemClick = (path) => {
    setActivePath(path);
    navigate(path);
    setOpen(false); // Close the sheet
    setIsSidebarOpen(false);
  };

  const menuItems = [
    {
      label: "Dashboards",
      icon: <RiHomeLine />,
      path: "/",
    },
    // Conditional Task Management/Productivity section
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
    // Tickets section with dynamic dropdown
    {
      label: "Tickets",
      icon: <img src={ticket} alt="ticket" />,
      dropdown: [
        {
          label: "Open Tickets",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.04792 3.55589C4.04025 3.91596 3.39537 4.57714 3.13404 5.51812C2.93509 6.23505 2.96621 14.6215 3.17053 15.3001C3.38477 16.0121 3.81119 16.55 4.46667 16.9354L5.00437 17.2514L9.72065 17.2847C15.1449 17.323 15.223 17.3125 16.0815 16.4291C16.811 15.6786 16.9194 15.1874 16.9174 12.6415C16.9163 11.4772 16.8721 10.4558 16.819 10.372C16.7657 10.2881 16.5998 10.2368 16.4501 10.258L16.178 10.2964L16.121 12.6908C16.0611 15.2025 16.0058 15.4825 15.4729 15.9646C14.8948 16.4877 14.667 16.5103 9.96408 16.5103C6.21385 16.5103 5.44379 16.4826 5.09034 16.335C4.52504 16.0987 4.27079 15.8556 4.02166 15.3131C3.82966 14.8952 3.81199 14.478 3.8097 10.3204C3.80731 6.01295 3.81871 5.7612 4.0342 5.33877C4.15905 5.09409 4.44991 4.74976 4.68056 4.57372L5.09991 4.25356L7.49129 4.19655C9.55955 4.1473 9.89897 4.11389 10.0023 3.94959C10.0889 3.81186 10.0806 3.70993 9.97206 3.57904C9.84459 3.42546 9.49615 3.39924 7.64134 3.40345C6.15856 3.40687 5.3284 3.45567 5.04792 3.55589ZM12.4645 3.57904C12.3559 3.70993 12.3476 3.81186 12.4342 3.94959C12.5343 4.10853 12.8023 4.14479 14.0766 4.17158L15.5993 4.20351L12.4852 7.31923C9.30324 10.5028 9.06574 10.8116 9.72624 10.9053C9.95176 10.9372 10.529 10.4143 13.0564 7.88817L16.1138 4.83242L16.1459 6.29799C16.1726 7.51899 16.2097 7.78362 16.3679 7.88327C16.5057 7.96992 16.6076 7.9616 16.7385 7.85306C16.8908 7.72661 16.9191 7.38753 16.9191 5.68766C16.9191 4.27203 16.8784 3.63137 16.7823 3.53526C16.6861 3.43914 16.0455 3.39844 14.6299 3.39844C12.93 3.39844 12.5909 3.42671 12.4645 3.57904Z"
                fill="#86909C"
                stroke="#86909C"
                stroke-width="0.5"
              />
            </svg>
          ),
          path: "/opentickets",
          key: "open_tickets",
        },
        // Conditional Assigned Tickets
        ...(managername
          ? []
          : [
              {
                label: "Assigned Tickets",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M11.9 2.37451C13.3 2.37451 14 3.08151 14 4.49551V9.43051C14 10.8235 13.013 11.3625 11.802 10.6345L10.878 10.0745C10.668 9.94851 10.332 9.94851 10.122 10.0745L9.198 10.6345C7.987 11.3625 7 10.8235 7 9.43051V4.49551C7 3.08151 7.7 2.37451 9.1 2.37451H11.9Z"
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
                path: "/assignedtickets",
                key: "assigned_tickets",
              },
            ]),
        {
          label: "Closed Tickets",
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
          path: "/closedtickets",
          key: "closed_tickets",
        },
        // Conditional My Tickets for managers
        ...(managername
          ? [
              {
                label: "My Tickets",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M14.1664 17.7923H5.83311C2.29144 17.7923 1.13311 16.734 1.04978 13.434C1.04978 13.2673 1.10811 13.1007 1.22478 12.984C1.34144 12.8673 1.49978 12.7923 1.67478 12.7923C2.93311 12.7923 3.95811 11.759 3.95811 10.5007C3.95811 9.24232 2.93311 8.20898 1.67478 8.20898C1.50811 8.20898 1.34978 8.14232 1.22478 8.01732C1.09978 7.89232 1.04144 7.73398 1.04978 7.56732C1.13311 4.26732 2.29144 3.20898 5.83311 3.20898H14.1664C17.8414 3.20898 18.9581 4.32565 18.9581 8.00065V13.0007C18.9581 16.6757 17.8414 17.7923 14.1664 17.7923ZM2.32478 13.984C2.46644 16.1007 3.18311 16.5423 5.83311 16.5423H14.1664C17.1498 16.5423 17.7081 15.9757 17.7081 13.0007V8.00065C17.7081 5.02565 17.1498 4.45898 14.1664 4.45898H5.83311C3.18311 4.45898 2.46644 4.90898 2.32478 7.01732C3.96644 7.33398 5.20811 8.77565 5.20811 10.5007C5.20811 12.2257 3.96644 13.6673 2.32478 13.984Z"
                      fill="#86909C"
                    />
                    <path
                      d="M7.5 7.37565C7.15833 7.37565 6.875 7.09232 6.875 6.75065V3.83398C6.875 3.49232 7.15833 3.20898 7.5 3.20898C7.84167 3.20898 8.125 3.49232 8.125 3.83398V6.75065C8.125 7.09232 7.84167 7.37565 7.5 7.37565Z"
                      fill="#86909C"
                    />
                    <path
                      d="M7.5 17.7917C7.15833 17.7917 6.875 17.5083 6.875 17.1667V14.25C6.875 13.9083 7.15833 13.625 7.5 13.625C7.84167 13.625 8.125 13.9083 8.125 14.25V17.1667C8.125 17.5083 7.84167 17.7917 7.5 17.7917Z"
                      fill="#86909C"
                    />
                    <path
                      d="M10.8668 13.5404C10.6668 13.5404 10.4668 13.4737 10.3001 13.357C10.0001 13.1404 9.85012 12.7737 9.91679 12.407L10.0918 11.4154L9.36679 10.707C9.10012 10.4487 9.00845 10.0654 9.11679 9.71536C9.23345 9.36536 9.53345 9.10703 9.90012 9.05703L10.9001 8.90703L11.3501 7.9987C11.5168 7.66536 11.8501 7.45703 12.2168 7.45703C12.5918 7.45703 12.9251 7.66536 13.0835 7.9987L13.5335 8.90703L14.5335 9.05703C14.9001 9.10703 15.2001 9.36536 15.3168 9.71536C15.4335 10.0654 15.3335 10.4487 15.0668 10.707L14.3418 11.4154L14.5168 12.407C14.5835 12.7737 14.4335 13.1404 14.1335 13.357C13.8335 13.5737 13.4418 13.5987 13.1168 13.432L12.2251 12.9654L11.3251 13.432C11.1835 13.507 11.0251 13.5404 10.8668 13.5404ZM10.6418 10.207L11.0668 10.6237C11.3001 10.8487 11.4001 11.1654 11.3501 11.482L11.2501 12.0654L11.7751 11.7904C12.0585 11.6404 12.3918 11.6404 12.6751 11.7904L13.2001 12.0654L13.1001 11.482C13.0501 11.157 13.1501 10.8404 13.3835 10.6237L13.8085 10.207L13.2251 10.1237C12.9085 10.0737 12.6335 9.8737 12.4918 9.59036L12.2335 9.05703L11.9751 9.59036C11.8335 9.8737 11.5585 10.0737 11.2418 10.1237L10.6418 10.207Z"
                      fill="#86909C"
                    />
                  </svg>
                ),
                path: "/actionedtickets",
                key: "my_tickets",
              },
            ]
          : []),
        {
          label: "Ticket Approvals",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.55005 9.18353V13.3252C3.55005 14.8419 3.55005 14.8419 4.98338 15.8085L8.92505 18.0835C9.51672 18.4252 10.4834 18.4252 11.075 18.0835L15.0167 15.8085C16.45 14.8419 16.45 14.8419 16.45 13.3252V9.18353C16.45 7.66686 16.45 7.66686 15.0167 6.7002L11.075 4.4252C10.4834 4.08353 9.51672 4.08353 8.92505 4.4252L4.98338 6.7002C3.55005 7.66686 3.55005 7.66686 3.55005 9.18353Z"
                stroke="#86909C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.5834 6.35817V4.1665C14.5834 2.49984 13.7501 1.6665 12.0834 1.6665H7.91675C6.25008 1.6665 5.41675 2.49984 5.41675 4.1665V6.29984"
                stroke="#86909C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.525 9.1583L11 9.89997C11.075 10.0166 11.2416 10.1333 11.3666 10.1666L12.2166 10.3833C12.7416 10.5166 12.8833 10.9666 12.5416 11.3833L11.9833 12.0583C11.9 12.1666 11.8333 12.3583 11.8416 12.4916L11.8916 13.3666C11.925 13.9083 11.5416 14.1833 11.0416 13.9833L10.225 13.6583C10.1 13.6083 9.89165 13.6083 9.76665 13.6583L8.94998 13.9833C8.44998 14.1833 8.06665 13.9 8.09998 13.3666L8.14998 12.4916C8.15831 12.3583 8.09165 12.1583 8.00831 12.0583L7.44998 11.3833C7.10831 10.9666 7.24998 10.5166 7.77498 10.3833L8.62498 10.1666C8.75831 10.1333 8.92498 10.0083 8.99165 9.89997L9.46665 9.1583C9.76665 8.7083 10.2333 8.7083 10.525 9.1583Z"
                stroke="#86909C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
          path: "/ticketapprovals",
          key: "ticket_approvals",
        },
        // Conditional Actioned Tickets
        ...(managername
          ? []
          : [
              {
                label: "My Tickets",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M14.1665 17.2918H5.83319C2.29152 17.2918 1.13319 16.2335 1.04985 12.9335C1.04985 12.7668 1.10819 12.6002 1.22485 12.4835C1.34152 12.3668 1.49985 12.2918 1.67485 12.2918C2.93319 12.2918 3.95819 11.2585 3.95819 10.0002C3.95819 8.74183 2.93319 7.7085 1.67485 7.7085C1.50819 7.7085 1.34985 7.64183 1.22485 7.51683C1.09985 7.39183 1.04152 7.2335 1.04985 7.06683C1.13319 3.76683 2.29152 2.7085 5.83319 2.7085H14.1665C17.8415 2.7085 18.9582 3.82516 18.9582 7.50016V12.5002C18.9582 16.1752 17.8415 17.2918 14.1665 17.2918ZM2.32485 13.4835C2.46652 15.6002 3.18319 16.0418 5.83319 16.0418H14.1665C17.1499 16.0418 17.7082 15.4752 17.7082 12.5002V7.50016C17.7082 4.52516 17.1499 3.9585 14.1665 3.9585H5.83319C3.18319 3.9585 2.46652 4.4085 2.32485 6.51683C3.96652 6.8335 5.20819 8.27516 5.20819 10.0002C5.20819 11.7252 3.96652 13.1668 2.32485 13.4835Z"
                      fill="#86909C"
                    />
                    <path
                      d="M7.5 6.87516C7.15833 6.87516 6.875 6.59183 6.875 6.25016V3.3335C6.875 2.99183 7.15833 2.7085 7.5 2.7085C7.84167 2.7085 8.125 2.99183 8.125 3.3335V6.25016C8.125 6.59183 7.84167 6.87516 7.5 6.87516Z"
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
                path: "/actionedtickets",
                key: "actioned_tickets",
              },
            ]),
      ],
    },
    // Projects section with conditional structure
    ...(managername
      ? [
          {
            label: "Projects",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M18.3333 14.4501V4.39174C18.3333 3.39174 17.5167 2.65008 16.525 2.73341H16.475C14.725 2.88341 12.0667 3.77508 10.5833 4.70841L10.4417 4.80008C10.2 4.95008 9.80001 4.95008 9.55834 4.80008L9.35001 4.67508C7.86667 3.75008 5.21667 2.86674 3.46667 2.72508C2.475 2.64174 1.66667 3.39174 1.66667 4.38341V14.4501C1.66667 15.2501 2.31667 16.0001 3.11667 16.1001L3.35834 16.1334C5.16667 16.3751 7.95834 17.2917 9.55834 18.1667L9.59167 18.1834C9.81667 18.3084 10.175 18.3084 10.3917 18.1834C11.9917 17.3001 14.7917 16.3751 16.6083 16.1334L16.8833 16.1001C17.6833 16.0001 18.3333 15.2501 18.3333 14.4501Z"
                  stroke="#86909C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 5.07422V17.5742"
                  stroke="#86909C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.45833 7.57422H4.58333"
                  stroke="#86909C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.08333 10.0742H4.58333"
                  stroke="#86909C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            dropdown: [
              {
                label: "View Projects",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M17.5 12.1667V16.3333C17.5 16.7754 17.3244 17.1993 17.0118 17.5118C16.6993 17.8244 16.2754 18 15.8333 18H4.16667C3.72464 18 3.30072 17.8244 2.98816 17.5118C2.67559 17.1993 2.5 16.7754 2.5 16.3333V4.66667C2.5 4.22464 2.67559 3.80072 2.98816 3.48816C3.30072 3.17559 3.72464 3 4.16667 3H8.33333V4.66667H4.16667V16.3333H15.8333V12.1667H17.5Z"
                      fill="#86909C"
                    />
                    <path
                      d="M17.5 6.33333H14.1667V3H12.5V6.33333H9.16667V8H12.5V11.3333H14.1667V8H17.5V6.33333Z"
                      fill="#86909C"
                    />
                  </svg>
                ),
                path: "/viewproject",
                key: "view_projects",
              },
              {
                label: "Create Projects",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M18.3333 14.4501V4.39174C18.3333 3.39174 17.5167 2.65008 16.525 2.73341H16.475C14.725 2.88341 12.0667 3.77508 10.5833 4.70841L10.4417 4.80008C10.2 4.95008 9.80001 4.95008 9.55834 4.80008L9.35001 4.67508C7.86667 3.75008 5.21667 2.86674 3.46667 2.72508C2.475 2.64174 1.66667 3.39174 1.66667 4.38341V14.4501C1.66667 15.2501 2.31667 16.0001 3.11667 16.1001L3.35834 16.1334C5.16667 16.3751 7.95834 17.2917 9.55834 18.1667L9.59167 18.1834C9.81667 18.3084 10.175 18.3084 10.3917 18.1834C11.9917 17.3001 14.7917 16.3751 16.6083 16.1334L16.8833 16.1001C17.6833 16.0001 18.3333 15.2501 18.3333 14.4501Z"
                      stroke="#86909C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 5.07422V17.5742"
                      stroke="#86909C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.45833 7.57422H4.58333"
                      stroke="#86909C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.08333 10.0742H4.58333"
                      stroke="#86909C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ),
                path: "/teammanagement",
                key: "create_projects",
              },
            ],
          },
        ]
      : [
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
                  stroke="#86909C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 4.5752V17.0752"
                  stroke="#86909C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.4585 7.0752H4.5835"
                  stroke="#86909C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.0835 9.5752H4.5835"
                  stroke="#86909C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            path: "/viewproject",
            key: "view_projects",
          },
        ]),
    // Reports section (manager only)
    ...(managername
      ? [
          {
            label: "Reports",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M15.525 6.45747C15.5583 6.96581 15.5167 7.54081 15.4167 8.18247L14.8083 12.0908C14.2917 15.3491 12.7833 16.4491 9.525 15.9408L5.61666 15.3241C4.49166 15.1491 3.625 14.8491 2.99166 14.3991C1.78333 13.5575 1.43333 12.1741 1.76666 10.0408L2.38333 6.13247C2.9 2.87414 4.40833 1.77414 7.66666 2.28247L11.575 2.89914C14.1917 3.30747 15.4167 4.37414 15.525 6.45747Z"
                  stroke="#86909C"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.0832 11.7257L15.8332 15.484C14.7915 18.6173 13.1249 19.4507 9.99153 18.409L6.2332 17.159C4.34153 16.534 3.29153 15.6673 2.99153 14.4007C3.62486 14.8507 4.49153 15.1507 5.61653 15.3257L9.52487 15.9423C12.7832 16.4507 14.2915 15.3507 14.8082 12.0923L15.4165 8.18398C15.5165 7.54232 15.5582 6.96732 15.5249 6.45898C17.5165 7.51732 17.9499 9.11732 17.0832 11.7257Z"
                  stroke="#86909C"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.86667 7.98398C7.66748 7.98398 8.31667 7.3348 8.31667 6.53398C8.31667 5.73317 7.66748 5.08398 6.86667 5.08398C6.06586 5.08398 5.41667 5.73317 5.41667 6.53398C5.41667 7.3348 6.06586 7.98398 6.86667 7.98398Z"
                  stroke="#86909C"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ),
            dropdown: [
              {
                label: "Escalation Reports",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M6.24999 3.83398H13.75C14.2667 3.83398 14.725 3.85065 15.1333 3.90898C17.325 4.15065 17.9167 5.18398 17.9167 8.00065V13.0007C17.9167 15.8173 17.325 16.8507 15.1333 17.0923C14.725 17.1507 14.2667 17.1673 13.75 17.1673H6.24999C5.73333 17.1673 5.27499 17.1507 4.86666 17.0923C2.67499 16.8507 2.08333 15.8173 2.08333 13.0007V8.00065C2.08333 5.18398 2.67499 4.15065 4.86666 3.90898C5.27499 3.85065 5.73333 3.83398 6.24999 3.83398Z"
                      stroke="#86909C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.25 8.83398H14.1667"
                      stroke="#86909C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.83333 13.416H5.84999H14.1667"
                      stroke="#86909C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.41177 8.83268H8.41925"
                      stroke="#86909C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.91177 8.83268H5.91925"
                      stroke="#86909C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ),
                path: "/escalatedreports",
                key: "escalation_reports",
              },
              {
                label: "Closed Ticket Reports",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M13.1751 17.3181C12.9584 17.3181 12.7334 17.3097 12.4917 17.2847C12.0584 17.2514 11.5667 17.1681 11.0584 17.0431L9.65839 16.7097C5.81673 15.8014 4.55839 13.7681 5.45839 9.93473L6.27506 6.44306C6.45839 5.6514 6.67506 5.00973 6.94173 4.4764C8.37506 1.51806 11.1167 1.78473 13.0667 2.24306L14.4584 2.56806C16.4084 3.0264 17.6417 3.7514 18.3334 4.85973C19.0167 5.96806 19.1251 7.39306 18.6667 9.34306L17.8501 12.8264C17.1334 15.8764 15.6417 17.3181 13.1751 17.3181ZM10.9334 3.20973C9.54173 3.20973 8.65839 3.78473 8.06673 5.01806C7.85006 5.46806 7.65839 6.0264 7.49173 6.7264L6.67506 10.2181C5.93339 13.3681 6.79173 14.7431 9.94173 15.4931L11.3417 15.8264C11.7917 15.9347 12.2167 16.0014 12.6001 16.0347C14.8584 16.2597 15.9917 15.2681 16.6251 12.5431L17.4417 9.05973C17.8167 7.4514 17.7667 6.3264 17.2667 5.51806C16.7667 4.70973 15.7834 4.15973 14.1667 3.78473L12.7751 3.45973C12.0834 3.29306 11.4667 3.20973 10.9334 3.20973Z"
                      fill="#86909C"
                    />
                    <path
                      d="M6.94171 19.0424C4.80005 19.0424 3.43338 17.759 2.55838 15.0507L1.49171 11.759C0.308381 8.09238 1.36671 6.02571 5.01671 4.84238L6.33338 4.41738C6.76671 4.28405 7.09171 4.19238 7.38338 4.14238C7.61671 4.09238 7.85838 4.18405 8.00005 4.37571C8.14172 4.56738 8.16671 4.81738 8.06671 5.03405C7.85005 5.47571 7.65838 6.03405 7.50005 6.73405L6.68338 10.2257C5.94171 13.3757 6.80005 14.7507 9.95005 15.5007L11.35 15.834C11.8 15.9424 12.225 16.009 12.6084 16.0424C12.875 16.0674 13.0917 16.2507 13.1667 16.509C13.2334 16.7674 13.1334 17.034 12.9167 17.184C12.3667 17.559 11.675 17.8757 10.8 18.159L9.48338 18.5924C8.52505 18.8924 7.69171 19.0424 6.94171 19.0424ZM6.48338 5.68405L5.40838 6.03405C2.43338 6.99238 1.72505 8.39238 2.68338 11.3757L3.75005 14.6674C4.71671 17.6424 6.11671 18.359 9.09171 17.4007L10.4084 16.9674C10.4584 16.9507 10.5 16.934 10.55 16.9174L9.66671 16.709C5.82505 15.8007 4.56671 13.7674 5.46671 9.93405L6.28338 6.44238C6.34171 6.17571 6.40838 5.91738 6.48338 5.68405Z"
                      fill="#86909C"
                    />
                  </svg>
                ),
                path: "/closedticketreports",
                key: "closed_ticket_reports",
              },
              {
                label: "Customized Reports",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M13.1751 17.3181C12.9584 17.3181 12.7334 17.3097 12.4917 17.2847C12.0584 17.2514 11.5667 17.1681 11.0584 17.0431L9.65839 16.7097C5.81673 15.8014 4.55839 13.7681 5.45839 9.93473L6.27506 6.44306C6.45839 5.6514 6.67506 5.00973 6.94173 4.4764C8.37506 1.51806 11.1167 1.78473 13.0667 2.24306L14.4584 2.56806C16.4084 3.0264 17.6417 3.7514 18.3334 4.85973C19.0167 5.96806 19.1251 7.39306 18.6667 9.34306L17.8501 12.8264C17.1334 15.8764 15.6417 17.3181 13.1751 17.3181ZM10.9334 3.20973C9.54173 3.20973 8.65839 3.78473 8.06673 5.01806C7.85006 5.46806 7.65839 6.0264 7.49173 6.7264L6.67506 10.2181C5.93339 13.3681 6.79173 14.7431 9.94173 15.4931L11.3417 15.8264C11.7917 15.9347 12.2167 16.0014 12.6001 16.0347C14.8667 16.2597 15.9917 15.2681 16.6251 12.5431L17.4417 9.05973C17.8167 7.4514 17.7667 6.3264 17.2667 5.51806C16.7667 4.70973 15.7834 4.15973 14.1667 3.78473L12.7751 3.45973C12.0834 3.29306 11.4667 3.20973 10.9334 3.20973Z"
                      fill="#86909C"
                    />
                    <path
                      d="M6.94171 19.0424C4.80005 19.0424 3.43338 17.759 2.55838 15.0507L1.49171 11.759C0.308381 8.09238 1.36671 6.02571 5.01671 4.84238L6.33338 4.41738C6.76671 4.28405 7.09171 4.19238 7.38338 4.14238C7.62505 4.09238 7.85838 4.18405 8.00005 4.37571C8.14172 4.56738 8.16671 4.81738 8.06671 5.03405C7.85005 5.47571 7.65838 6.03405 7.50005 6.73405L6.68338 10.2257C5.94171 13.3757 6.80005 14.7507 9.95005 15.5007L11.35 15.834C11.8 15.9424 12.225 16.009 12.6084 16.0424C12.875 16.0674 13.0917 16.2507 13.1667 16.509C13.2334 16.7674 13.1334 17.034 12.9167 17.184C12.3667 17.559 11.675 17.8757 10.8 18.159L9.48338 18.5924C8.52505 18.8924 7.69171 19.0424 6.94171 19.0424ZM6.48338 5.68405L5.40838 6.03405C2.43338 6.99238 1.72505 8.39238 2.68338 11.3757L3.75005 14.6674C4.71671 17.6424 6.11671 18.359 9.09171 17.4007L10.4084 16.9674C10.4584 16.9507 10.5 16.934 10.55 16.9174L9.66671 16.709C5.82505 15.8007 4.56671 13.7674 5.46671 9.93405L6.28338 6.44238C6.34171 6.17571 6.40838 5.91738 6.48338 5.68405Z"
                      fill="#86909C"
                    />
                    <path
                      d="M14.5753 9.25717C14.5253 9.25717 14.4753 9.24884 14.417 9.2405L10.3753 8.2155C10.042 8.13217 9.84197 7.7905 9.92531 7.45717C10.0086 7.12384 10.3503 6.92384 10.6836 7.00717L14.7253 8.03217C15.0586 8.1155 15.2586 8.45717 15.1753 8.7905C15.1086 9.0655 14.8503 9.25717 14.5753 9.25717Z"
                      fill="#86909C"
                    />
                    <path
                      d="M12.1334 12.0754C12.0834 12.0754 12.0334 12.0671 11.9751 12.0587L9.55011 11.4421C9.21678 11.3587 9.01678 11.0171 9.10011 10.6837C9.18345 10.3504 9.52511 10.1504 9.85845 10.2337L12.2834 10.8504C12.6168 10.9337 12.8168 11.2754 12.7334 11.6087C12.6668 11.8921 12.4168 12.0754 12.1334 12.0754Z"
                      fill="#86909C"
                    />
                  </svg>
                ),
                path: "/customizedreports",
                key: "customized_reports",
              },
            ],
          },
        ]
      : []),
  ];

  const MobileMenuItems = () => (
    <div className="flex-1 overflow-y-auto px-4">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`mb-2 ${
            activePath === item.path
              ? "bg-[#E8F3FF] text-[#165DFF] rounded-[4px] border-[1px] border-[#BEDAFF]"
              : "text-[#4E5969]"
          }`}
        >
          <div
            className="group flex flex-row gap-2 items-center p-3 border border-white hover:bg-[#E8F3FF] hover:text-[#165DFF] rounded-[4px] hover:border-[1px] hover:border-[#BEDAFF] cursor-pointer"
            onClick={() => handleItemClick(item, true)}
          >
            <div className="text-[20px] group-hover:text-[#165DFF]">
              {item.icon}
            </div>
            <div className="text-[14px] font-medium font-Inter group-hover:text-[#165DFF] flex-1 whitespace-nowrap">
              {item.label}
            </div>
            {item.dropdown && (
              <RiArrowDropDownLine
                className={`text-4xl w-[19px] h-[19px] ${
                  mobileOpenDropdown === item.label ? "rotate-180" : ""
                }`}
              />
            )}
          </div>

          {/* Mobile Dropdown Items */}
          {item.dropdown && mobileOpenDropdown === item.label && (
            <div className="pl-4">
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
                    className="group px-6 border border-white py-2 gap-2 flex flex-row items-center text-sm hover:bg-[#E8F3FF] hover:text-[#165DFF] rounded-[4px] hover:border-[1px] hover:border-[#BEDAFF] cursor-pointer"
                    onClick={() => handleMobileSubItemClick(subItem.path)}
                  >
                    <div className="text-[16px]">{subItem.icon}</div>
                    <div className="flex-1 text-[14px] font-medium font-Inter group-hover:text-[#165DFF] whitespace-nowrap">
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

  const MenuItems = () => (
    <div className="flex-1 overflow-y-auto px-4">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`mb-2 ${
            activePath === item.path
              ? "bg-[#E8F3FF] text-[#165DFF] rounded-[4px] border-[1px] border-[#BEDAFF]"
              : "text-[#4E5969]"
          }`}
        >
          <div
            className="group flex flex-row gap-2 items-center p-3 border border-white hover:bg-[#E8F3FF] hover:text-[#165DFF] rounded-[4px] hover:border-[1px] hover:border-[#BEDAFF] cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <div className="text-[20px] group-hover:text-[#165DFF]">
              {item.icon}
            </div>
            <div className="text-[14px] font-medium font-Inter group-hover:text-[#165DFF] flex-1 whitespace-nowrap">
              {item.label}
            </div>
            {item.dropdown && (
              <RiArrowDropDownLine
                className={`text-4xl w-[19px] h-[19px] ${
                  openDropdown === item.label ? "rotate-180" : ""
                }`}
              />
            )}
          </div>

          {item.dropdown && openDropdown === item.label && (
            <div className="pl-4">
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
                    className="group px-6 border border-white py-2 gap-2 flex flex-row items-center text-sm hover:bg-[#E8F3FF] hover:text-[#165DFF] rounded-[4px] hover:border-[1px] hover:border-[#BEDAFF] cursor-pointer"
                    onClick={() => {
                      setActivePath(subItem.path);
                      navigate(subItem.path);
                      if (window.innerWidth < 1024) {
                        setIsSidebarOpen(false);
                      }
                    }}
                  >
                    <div className="text-[16px]">{subItem.icon}</div>
                    <div className="flex-1 2xl:text-[14px] lg:text-xs text-[11px] font-medium font-Inter group-hover:text-[#165DFF] whitespace-nowrap">
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

  return (
    <>
      {/* Mobile Sheet (< 1024px) */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="fixed top-2 left-4 z-50 p-2 rounded-lg bg-white shadow-lg text-[#4E5969] hover:text-[#165DFF] transition-colors">
              <TbMenuDeep size={16} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-4 bg-white">
            <div className="h-full flex flex-col">
              <div className="h-16 flex items-center">
                <span className="text-lg font-semibold text-[#4E5969]"></span>
              </div>
              <MobileMenuItems />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar (≥ 1024px) */}
      <aside
        className="
        hidden lg:block
        fixed lg:static top-0 left-0 h-full
        w-[250px]
        bg-white border-r border-[#E5E6EB]
        z-40
      "
      >
        {/* <div className="relative h-full flex flex-col bg-white">
          <div className="h-10 flex items-center px-4">
            <span className="text-lg font-semibold text-[#4E5969]"></span>
          </div>
          <MenuItems />
        </div>
      </aside> */}
        <div className="absolute top-0 right-0 w-[1px] bg-[#E5E6EB] h-screen"></div>
        <div className="relative h-full flex flex-col bg-white">
          <div className="h-10 flex items-center px-4">
            <span className="text-lg font-semibold text-[#4E5969]"></span>
          </div>
          <MenuItems />
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
