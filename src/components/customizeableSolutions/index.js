import React from "react";

const cardsData = [
  {
    badge: (
      <span className="border-t border-b border-r border-[3px] border-l-[.1875rem] border-[#6559ff] text-sm text-[#293745] bg-white px-3 py-1 rounded-full">
        EHS
      </span>
    ),
    title: "Health & Safety Management",
    description:
      "Keep teams safe on the job while promoting a safety culture across your organization.",
    linkText: "Find out more →",
  },
  {
    badge: (
      <span className="border-t border-b border-r border-[3px] border-l-[.1875rem] border-[#00d1ff] text-sm text-[#293745] bg-white px-3 py-1 rounded-full">
        GRC
      </span>
    ),
    title: "Risk Management & Compliance",
    description:
      "Identify, evaluate and mitigate risks to your teams and assets through greater visibility and a data-driven approach.",
    linkText: "Find out more →",
  },
  {
    badge: (
      <span className="border-t border-b border-r border-[3px] border-l-[.1875rem] border-[#ffd700] text-sm text-[#293745] bg-white px-3 py-1 rounded-full">
        Quality
      </span>
    ),
    title: "Operational Excellence",
    description:
      "Optimize processes and drive productivity, greater efficiencies and quality products or services at scale.",
    linkText: "Find out more →",
  },
  {
    badge: (
      <span className="border-t border-b border-r border-[3px] border-l-[.1875rem] border-[#293745] text-sm text-[#293745] bg-white px-3 py-1 rounded-full">
        ESG
      </span>
    ),
    title: "Environment & Sustainability",
    description:
      "Digitize SOP’s, reduce waste and adapt sustainability best practices the moment conditions change.",
    linkText: "Find out more →",
  },
];

const FeaturesSection = () => {
  return (
    <div className="container mx-auto py-14 px-4">
      <h2 className="text-[30px] sm:text-[33px] md:text-[43px] lg:text-[53px] text-[#293745] font-bold mb-2  md:leading-[66px]">
        Get up and running fast
      </h2>
      <p className="text-center text-[1.25rem] text-[#293745] py-4 mx-8 sm:mx-16 mb-8">
        Customizable solutions ready to meet your unique needs and business
        goals.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="group flex flex-col items-start border border-gray-300 rounded-lg p-5 hover:shadow-xl transition-shadow"
          >
            <span>{card.badge}</span>
            <h3 className="text-2xl font-[800] my-6 text-start transition-all  group-hover:text-[#4740d4] group-hover:underline">
              {card.title}
            </h3>
            <p className="text-gray-600 mb-4 text-start">{card.description}</p>
            <div className="flex justify-start">
              <a
                href="#"
                className="text-[#4740d4] font-semibold transition-all  group-hover:underline"
              >
                {card.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[#4740d4] font-semibold text-center pt-16">Explore how industries are benefiting</p>
    </div>
  );
};

export default FeaturesSection;
