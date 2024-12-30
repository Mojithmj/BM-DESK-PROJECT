import React, { useState, useRef, useEffect } from "react";
import image1 from "../assets/Group 1.jpg";
import { FiSearch } from "react-icons/fi";
import { PiBellThin } from "react-icons/pi";
import Avatarimage from "../assets/Avatar.png";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Ticketimageone from "../assets/Avatarimageone.png";
import Ticketimagetwo from "../assets/Avatarimagetwo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [profileImage, setProfileImage] = useState(Avatarimage);
  const [circleDropdown, setCircleDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);

  const toggleDropdown = () => setCircleDropdown((prev) => !prev);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setCircleDropdown(false);
    }
  };

  useEffect(() => {
    // Load initial image
    const savedImage = localStorage.getItem('userProfileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
    const handleImageUpdate = (e) => {
      setProfileImage(e.detail.image);
    };

    window.addEventListener('profileImageUpdate', handleImageUpdate);

    return () => {
      window.removeEventListener('profileImageUpdate', handleImageUpdate);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is on the notification bell itself or anywhere inside the dropdown
      const isNotificationBell =
        notifydropdownRef.current &&
        notifydropdownRef.current.contains(event.target);
      // Check if click is inside the search area
      const isSearchArea = event.target.closest(".notification-search-area");

      if (!isNotificationBell && !isSearchArea) {
        setNotifyCircleDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (circleDropdown) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [circleDropdown]);

  // Notification dropdown
  const [notifycircleDropdown, setNotifyCircleDropdown] = useState(false);
  const notifydropdownRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Sample tickets (notifications)
  const tickets = [
    {
      image: Ticketimageone,
      title: "Ticket 3452",
      description: "Ticket - TICKT-7424 has been resolved",
      time: "36 min",
    },
    {
      image: Ticketimagetwo,
      title: "Ticket 3452",
      description: "Ticket - TICKT-7424 has been resolved",
      time: "1 Hr",
    },
    {
      image: Ticketimageone,
      title: "Ticket 3452",
      description: "Ticket - TICKT-7424 has been resolved",
      time: "Sept 06",
    },
    {
      image: Ticketimagetwo,
      title: "Ticket 3452",
      description: "Ticket - TICKT-7424 has been resolved",
      time: "1 Hr",
    },
    {
      image: Ticketimageone,
      title: "Ticket 3452",
      description: "Ticket - TICKT-7424 has been resolved",
      time: "Sept 06",
    },
    {
      image: Ticketimagetwo,
      title: "Ticket 3453",
      description: "Ticket - TICKT-7425 has been resolved",
      time: "3 hours",
    },
    {
      image: Ticketimageone,
      title: "Ticket 3454",
      description: "Ticket - TICKT-7426 has been resolved",
      time: "Yesterday",
    },
  ];

  const navigate = useNavigate();

  // Filter tickets based on search query
  const filteredTickets = tickets.filter((ticket) => {
    return (
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.time.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

    // Add this new function
    const handleLogout = () => {
      localStorage.clear();
      window.history.pushState(null, '', '/login');
      navigate('/login', { replace: true });
      window.location.reload();
    };

  return (
    <div className="w-full bg-white">
      <div className="flex flex-row items-center justify-between p-3 border-b w-full">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-2">
          <img
            src={image1}
            alt="BM Desk Logo"
            className="z-50 w-[24px] h-[24px] md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px] 2xl:w-[33px] 2xl:h-[33px] object-contain"
          />
          <div className="whitespace-nowrap text-[#141414] text-[17px] md:text-[19px] lg:text-[21px] 2xl:text-[27px] font-bold font-Poppins">
            BM Desk
            <span className="inline-block w-1 h-1 rounded-full bg-blue-500"></span>
          </div>
        </div>

        {/* Middle Section: Search Features - Hidden below md */}
        <div className="hidden md:block">
          <div className="flex items-center gap-2 bg-[#E8F3FF] p-2 rounded-md w-[200px] lg:w-[300px] 2xl:w-[463px] text-[#0E42D2]">
            <FiSearch className="w-[15px] h-[15px] lg:w-[22px] lg:h-[22px] 2xl:w-[24px] 2xl:h-[24px]" />
            <input
              type="text"
              placeholder="Search Features"
              className="bg-transparent placeholder-[#0E42D2] border-none outline-none text-[11px] lg:text-[12px] 2xl:text-sm w-full"
            />
          </div>
        </div>

        {/* Right Section: Icons and Profile */}
        <div className="flex items-center gap-4">
          {/* Notification Bell - Hidden below md */}
          <div ref={notifydropdownRef} className="hidden md:block relative">
            <PiBellThin
              onClick={() => setNotifyCircleDropdown((prev) => !prev)}
              className="text-[23px] lg:text-[27px] 2xl:text-[31px] cursor-pointer"
            />
          </div>

          {/* Notifications Dropdown */}
          {notifycircleDropdown && (
            <div className="absolute px-[16px] 2xl:py-[32px] lg:py-[28px] top-10 right-64 bg-white border border-gray-300 shadow-md rounded mt-1">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-5">
                  <div className="flex text-[#165DFF] font-Inter font-normal 2xl:text-[16px] lg:text-[16px] md:text-[12px] sm:text-[10px] px-[12px] py-[8px] border-b-2 border-[#165DFF] justify-center">
                    Notifications
                  </div>
                  {/* Add notification-search-area class here */}
                  <div className="flex gap-2 notification-search-area">
                    <div className="border-[2px] w-full">
                      <input
                        type="text"
                        placeholder="Search Notifications"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent placeholder-[#878A99] border-none outline-none text-sm font-normal px-[16px] py-[8px] rounded-[4px] border-[1px] border-[#BEDAFF]"
                      />
                    </div>
                    <div className="bg-[#BEDAFF] rounded-[3px] px-[13px] py-[10px] justify-center text-[#165DFF]">
                      <FiSearch className="w-[10px] h-[10px] md:w-[13px] md:h-[13px] lg:w-[18px] lg:h-[18px] 2xl:w-[20px] 2xl:h-[20px]" />
                    </div>
                  </div>
                </div>

                {/* Ticket component */}
                <div className="h-[270px] max-h-[280px] overflow-y-auto pr-2">
                  <div className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px]">
                    <div className="flex flex-col gap-[16px]">
                      {filteredTickets.length > 0 ? (
                        filteredTickets.map((ticket, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-[16px]"
                          >
                            <img
                              src={ticket.image}
                              className="rounded-[64px] w-[40px] h-[40px]"
                              alt={`Ticket ${index + 1}`}
                            />
                            <div className="flex flex-col flex-grow">
                              <p className="font-Inter text-[14px] normal font-semibold text-[#1D2129]">
                                {ticket.title}
                              </p>
                              <p className="font-Inter text-[12px] normal font-normal text-[#86909C]">
                                {ticket.description}
                              </p>
                            </div>
                            <p className="font-Inter text-[11px] whitespace-nowrap normal font-normal text-[#878A99]">
                              {ticket.time}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="text-center text-gray-500">
                          No notifications found
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Profile Section */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            ref={dropdownRef}
            onClick={toggleDropdown}
          >
            {/* Avatar Image */}
            <div>
            <img
    className="w-[40px] h-[40px] rounded-full object-cover"
    src={profileImage || Avatarimage}
    alt="Profile"
  />
            </div>
            {/* User Name and Email - Hidden below md */}
            <div className="hidden md:block text-[14px] font-medium">
              Eva Mandes
              <p className="text-[13px] text-[#71717A]">Eva@example.com</p>
            </div>
            {/* Dropdown Icon - Hidden below md */}
            <IoIosArrowDropdownCircle  className="hidden md:block text-[18px] lg:text-[21px] 2xl:text-[26px]" />

            {/* Dropdown Menu */}
            {circleDropdown && (
              <div className="absolute right-4 bg-white border border-gray-300 shadow-md rounded mt-[130px]">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCircleDropdown(false);
                      handleLogout(); // Use the new function here
                    }}
                  >
                    Logout
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCircleDropdown(false);
                      navigate("/accountsettings");
                    }}
                  >
                    Account Settings
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
