import React from "react";
import { FaTasks, FaRegCheckCircle } from "react-icons/fa";
import { BiMessageDetail, BiCheckShield } from "react-icons/bi";
import { MdOutlineAssignment,MdOutlineArrowRightAlt } from "react-icons/md";
import { FcInspection } from "react-icons/fc";
import { FiBox } from "react-icons/fi";
import { VscReport } from "react-icons/vsc";
import { HiSpeakerphone } from "react-icons/hi";
const cardData = [
  {
    icon: <FcInspection size={30} />,
    title: "Inspections, audits, and checklists",
    description:
      "Save time and paper by digitizing any process, procedure or policy. Capture data and share reports instantly.",
    linkText: "Learn more",
  },
  {
    icon: <MdOutlineAssignment size={30} />,
    title: "Training",
    description:
      "Onboard faster and upskill team members on the job. Create courses in minutes and keep a record of completion.",
    linkText: "Learn more",
  },
  {
    icon: <FiBox size={30} />,
    title: "Assets",
    description:
      "Gain total asset visibility with a digital register of your asset’s history and upcoming activity in one place.",
    linkText: "Learn more",
  },
  {
    icon: <VscReport size={30} />,
    title: "Issue reporting",
    description:
      "Reduce time to resolution by capturing observations, near misses, hazards, or incidents in real-time.",
    linkText: "Learn more",
  },
  {
    icon: <FaRegCheckCircle size={30} />,
    title: "Tasks",
    description:
      "Streamline workflows and get the job done with seamless task assignment with Actions.",
    linkText: "Learn more",
  },
  {
    icon: <HiSpeakerphone size={30} />,
    title: "Communications",
    description:
      "Keep teams in the know with engaging video messages and know who got the message with Heads Up.",
    linkText: "Learn more",
  },
];

const Cards = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="group border-2 border-[#d0d7e1] rounded-lg px-6 py-7 hover:border-[#6559ff] "
          >
            <div className="flex items-start">
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl text-start font-semibold mb-2 ms-4 group-hover:text-[#6559ff] ">
                {card.title}
              </h3>
            </div>

            <p className="text-gray-600 text-start my-4 mb-4">{card.description}</p>
            <a
              href="#"
              className="text-start font-medium group-hover:text-[#6559ff]  flex items-center"
            >
              {card.linkText} <span className="ml-1"><MdOutlineArrowRightAlt/></span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
