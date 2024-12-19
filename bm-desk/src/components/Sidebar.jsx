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
                // icon: <AssignedTicketIcon />,
                path: "/assignedtickets",
                key: "assigned_tickets",
              },
            ]),
        {
          label: "Closed Tickets",
          // icon: <ClosedTicketIcon />,
          path: "/closedtickets",
          key: "closed_tickets",
        },
        // Conditional My Tickets for managers
        ...(managername
          ? [
              {
                label: "My Tickets",
                // icon: <MyTicketIcon />,
                path: "/mytickets",
                key: "my_tickets",
              },
            ]
          : []),
        {
          label: "Ticket Approvals",
          // icon: <ApprovalIcon />,
          path: "/ticketapprovals",
          key: "ticket_approvals",
        },
        // Conditional Actioned Tickets
        ...(managername
          ? []
          : [
              {
                label: "My Actioned Tickets",
                // icon: <ActionedTicketIcon />,
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
            // icon: <ProjectIcon />,
            dropdown: [
              {
                label: "View Projects",
                // icon: <ViewProjectIcon />,
                path: "/viewprojects",
                key: "view_projects",
              },
              {
                label: "Create Projects",
                // icon: <CreateProjectIcon />,
                path: "/teammanagement",
                key: "create_projects",
              },
            ],
          },
        ]
      : [
          {
            label: "View Projects",
            // icon: <BsGraphUpArrow />,
            path: "/viewproject",
            key: "view_projects",
          },
        ]),
    // Reports section (manager only)
    ...(managername
      ? [
          {
            label: "Reports",
            // icon: <ReportIcon />,
            dropdown: [
              {
                label: "Escalation Reports",
                // icon: <EscalationReportIcon />,
                path: "/escalationreports",
                key: "escalation_reports",
              },
              {
                label: "Closed Ticket Reports",
                // icon: <ClosedReportIcon />,
                path: "/closedticketreports",
                key: "closed_ticket_reports",
              },
              {
                label: "Customized Reports",
                // icon: <CustomReportIcon />,
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
