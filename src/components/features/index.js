import React from "react";
import { RiPuzzleFill, RiStarFill } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineSensors } from "react-icons/md";
const featuresData = [
  {
    icon: <MdOutlineSensors size={26} />,
    title: "Sensors & IoT",
  
  },
  {
    icon: <RiPuzzleFill size={22} />,
    title: "Integrations",
  
  },
  {
    icon: <RiStarFill size={22} />,
    title: (
      <>
        AI <span className="bg-[#d9dbff] text-[#293745] rounded-full py-2 px-3 ml-1 text-sm">NEW</span>
      </>
    ),
  
  },
  {
    title: "Marketplace",
  
  },
  {
    title: "Lone worker",
  
  },
  {
    title: "Insurance",
  
  },
];

const MoreFeatures = () => {
  return (
    <div className="container mx-auto py-3 px-4">
      <h2 className="text-center text-[#293745] text-3xl font-bold mb-14">More features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 rounded-lg p-4 flex justify-between items-center hover:border-[#6559ff] "
          >
            <div className="flex items-center space-x-3">
              <div className="text-[#293745]">{feature.icon}</div>
              <h3 className="text-lg font-bold text-[#293745]">{feature.title}</h3>
            </div>
            <span className=" font-semibold"> <FiArrowRight/></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreFeatures;
