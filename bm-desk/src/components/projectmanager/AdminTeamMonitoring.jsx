import React from "react";
import { Label } from "../ui/label";
import { Card } from "../ui/card";
import icon from "../../assets/projectmanagercard.svg";
import image1 from "../../assets/AvatarImage12.png";
import image2 from "../../assets/AvatarImage13.png";
import blue from "../../assets/Blue.svg";
import green from "../../assets/Green.svg";
import red from "../../assets/Red.svg";
import { PiGreaterThan } from "react-icons/pi";

function AdminTeamMonitoring() {
  const cardData = [
    { text: "Created tickets", value: "7500" },
    { text: "Opened Tickets", value: "6578" },
    { text: "Closed  tickets", value: "12546" },
    { text: "Escalated tickets", value: "564" },
    { text: "For Approvals", value: "1546" },
  ];
  // card details of memebers
  const supportTeamData = [
    {
      name: "Maria Joyce",
      role: "Support Executive",
      metrics: [
        { type: "Total", value: 562, color: "green", icon: green },
        { type: "Active", value: 562, color: "blue", icon: blue },
        { type: "Escalated", value: 562, color: "red", icon: red },
      ],
      image: image1,
    },
    {
      name: "Abhi",
      role: "Support Executive",
      metrics: [
        { type: "Total", value: 562, color: "green", icon: green },
        { type: "Active", value: 562, color: "blue", icon: blue },
        { type: "Escalated", value: 562, color: "red", icon: red },
      ],
      image: image2,
    },
    {
      name: "Abhishek",
      role: "Support Executive",
      metrics: [
        { type: "Total", value: 562, color: "green", icon: green },
        { type: "Active", value: 562, color: "blue", icon: blue },
        { type: "Escalated", value: 562, color: "red", icon: red },
      ],
      image: image2,
    },

    // Add more team members as needed
  ];
  return (
    <div className="fixed top-24 left-64 pl-0 2xl:pl-5 w-[calc(100%_-_280px)]">
      <div>
        <Label className="text-[28px] 2xl:text-[32px] text-[#4E5969] font-inter font-semibold">
          Dashboard
        </Label>
        
      </div>
      <div className="grid grid-cols-5 gap-4">
        {cardData.map((data, index) => (
          <Card key={index} className="p-6 2xl:p-8 mt-4">
            <div className="flex flex-row gap-7  2xl:gap-8">
              <div className="flex flex-col">
                <h1 className="text-[12px] 2xl:text-[16px] font-normal text-[#1D2129]">
                  {data.text}
                </h1>
                <h1 className="text-[24px] md:text-[24px] 2xl:text-[32px] font-bold text-[#1D2129]">
                  {data.value}
                </h1>
              </div>
              <img
                src={icon}
                alt="icon"
                className="h-[20px] w-[20px] md:h-[32px] md:w-[32px] 2xl:h-[48px] 2xl:w-[48px] mt-2"
              />
            </div>
          </Card>
        ))}
      </div>
      <div>
        <Card className="relative mt-6 w-full h-[300px]">
          <div>
            <div className="absolute mt-6 ml-4 font-inter">
              <h1 className="text-[16px] 2xl:text-[20px] mt-1 font-inter font-semibold text-[#4E5969]">
                Top Performing In Support Team
              </h1>
              {supportTeamData.map((member, index) => (
                <Card key={index} className="w-[1050px] h-[70px] flex mt-2">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row items-center">
                      <div className="flex flex-row gap-4 items-center ml-3">
                        <div className="p-[3px] rounded-full border-[2px] border-[#C9CDD4] "><img src={member.image} alt="profile image" /></div>
                        <div className="flex flex-col gap-[4px]">
                          <h1 className="text-[12px] 2xl:text-[14px] font-semibold text-[#1D2129]">
                            {member.name}
                          </h1>
                          <h1 className="font-normal text-[#86909C] text-[10px] 2xl:text-[12px]">
                            {member.role}
                          </h1>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4 items-center ml-20">
                        {member.metrics.map((metric, metricIndex) => (
                          <Card
                            key={metricIndex}
                            className="h-[45px] w-auto p-4 flex flex-row gap-2 items-center"
                          >
                            <img src={metric.icon} alt={metric.color} />
                            <div className="flex flex-col items-center">
                              <h1 className="text-[#4E5969]  text-[9px] 2xl:text-[10px]">
                                {metric.type}
                              </h1>
                              <h1 className="text-[#1D2129] text-[12px] 2xl:text-[14px] font-bold">
                                {metric.value}
                              </h1>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <div className="mr-4 text-[#86909C] ">
                      <PiGreaterThan className="text-[8px]" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AdminTeamMonitoring;
