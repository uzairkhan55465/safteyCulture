import React, { useState } from "react";
import {
  FaBuilding,
  FaTruck,
  FaTools,
  FaConciergeBell,
  FaRegBuilding,
  FaShoppingBag,
} from "react-icons/fa";
import Worker from "../../assets/home/nurse.webp";
import WorkImg from "../../assets/home/Level-10.webp";
import Bus from "../../assets/home/bus.webp";
import hospitality from "../../assets/home/Waldorf-Astoria.webp";
import services from "../../assets/home/Brentford-Football-Club.webp";
import lowes from "../../assets/home/Lowes.webp";

const tabs = [
  { id: 1, name: "Manufacturing", icon: <FaTools /> },
  { id: 2, name: "Construction", icon: <FaBuilding /> },
  { id: 3, name: "Transport & Logistics", icon: <FaTruck /> },
  { id: 4, name: "Hospitality", icon: <FaConciergeBell /> },
  { id: 5, name: "Facilities Management", icon: <FaRegBuilding /> },
  { id: 6, name: "Retail", icon: <FaShoppingBag /> },
];

const tabData = {
  1: {
    img: Worker,
    title: "MARLEY SPOON",
    efficiency: "3x",
    savings: "$20,000",
    quote:
      "Using SafetyCulture platform, we have become a paperless HACCP company. There is absolutely no way that we could have grown as fast as we have whilst maintaining quality without these processes and data in place.",
    person: "Sofia Dias, Food Safety & Quality Assurance Manager, Marley Spoon",
  },
  2: {
    img: WorkImg,
    title: "CONSTRUCTION COMPANY",
    efficiency: "2x",
    savings: "$10,000",
    quote:
      "Our construction process has become more efficient and safer thanks to the SafetyCulture platform.",
    person: "John Doe, Site Manager",
  },
  3: {
    img: Bus,
    title: "LOGISTICS FIRM",
    efficiency: "5x",
    savings: "$50,000",
    quote:
      "Our logistics operations have improved drastically with SafetyCulture, ensuring timely deliveries and satisfied clients.",
    person: "Jane Smith, Operations Manager",
  },
  4: {
    img: hospitality,
    title: "HOTEL CHAIN",
    efficiency: "4x",
    savings: "$30,000",
    quote:
      "SafetyCulture has revolutionized our hospitality service, allowing us to exceed guest expectations consistently.",
    person: "Alice Johnson, General Manager",
  },
  5: {
    img: services,
    title: "FACILITIES COMPANY",
    efficiency: "3x",
    savings: "$15,000",
    quote:
      "Our facility management has become more streamlined, thanks to the robust features offered by SafetyCulture.",
    person: "Robert Brown, Facilities Manager",
  },
  6: {
    img: lowes,
    title: "RETAIL OUTLET",
    efficiency: "6x",
    savings: "$25,000",
    quote:
      "The SafetyCulture platform has enabled us to enhance our retail operations, providing a better shopping experience for our customers.",
    person: "Emily Davis, Store Manager",
  },
};

const TabContent = ({ title, efficiency, savings, quote, person, img }) => (
  <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white py-14 px-8 rounded-lg shadow-xl mx-7">
    <div className="lg:w-[50%] text-center lg:text-left ">
      <h2 className="text-lg font-semibold text-gray-600 italic">{title}</h2>
      <div className="flex items-center justify-center lg:justify-start my-4">
        <span className="text-4xl font-bold text-[#293745] border-b-2 border-purple-600">
          {efficiency}
        </span>
        <span className="text-4xl font-bold text-[#293745] ms-9 border-b-2 border-purple-600">
          {savings}
        </span>
      </div>
      <p className="text-[#293745] italic mb-4">{quote}</p>
      <p className="text-[#293745] font-semibold">{person}</p>
      <button className="mt-6 text-[#4740d4] border border-[#d0d7e1] py-2 px-4 rounded-lg">
        Explore our Manufacturing solution &rarr;
      </button>
    </div>
    <div className="lg:w-[50%] mt-6 lg:mt-0 flex justify-center lg:justify-end hidden sm:block">
      <div className="rounded-l-full overflow-hidden">
        <img src={img} alt={title} className="object-cover w-full h-[450px]" />
      </div>
    </div>
  </div>
);

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState(1);

  const renderContent = () => {
    const { title, efficiency, savings, quote, person, img } = tabData[activeTab];
    return (
      <TabContent
        title={title}
        efficiency={efficiency}
        savings={savings}
        quote={quote}
        person={person}
        img={img} // Pass the img property here
      />
    );
  };

  return (
    <div className="bg-[#f3f6fb] py-16">
      <h1 className="text-center text-[#293745] text-[30px] md:text-[40px] lg:text-[50px] font-bold mx-10 mb-10">
        Teams of all sizes, all industries have changed the way they work
      </h1>

      <div className="flex flex-wrap justify-center mb-6 hidden sm:flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex flex-col items-center text-[17px] justify-center w-[15%] lg:justify-start py-6 mx-2 text-sm font-semibold rounded-lg ${
              activeTab === tab.id
                ? "bg-white border-2 border-[#6559ff] text-gray-600"
                : "bg-white border-gray-300 text-gray-600"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon} <span className="pt-3">{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Dropdown for xs and sm screens */}
      <div className="sm:hidden px-6 mb-6">
        <select
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={activeTab}
          onChange={(e) => setActiveTab(Number(e.target.value))}
        >
          {tabs.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>

      {renderContent()}
    </div>
  );
};

export default TabbedInterface;
