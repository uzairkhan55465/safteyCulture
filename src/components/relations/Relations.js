import React from "react";
import relations from "../../assets/home/relations.webp";

const Relations = () => {
  return (
    <div className="w-full py-12 px-6 md:px-12 lg:px-20 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="lg:w-1/2 text-left px-[40px]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Shift the relationship with your frontline{" "}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            With SafetyCulture in the hands of your teams, every person, at
            every level, can play an active role in improving quality, safety
            and compliance. Give them the{" "}
            <span className="text-blue-500">
              {" "}
              tools they need to be successful{" "}
            </span>
            in their role, however unique it may be, and empower every
            individual to have a voice.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
          <img
            src={relations}
            alt="Operations"
            className="w-full rounded-lg shadow-lg"
          />
          {/* Floating Cards */}
          {/* <div className="absolute top-10 left-5 bg-white p-3 shadow-md rounded-md">
            <p className="text-sm text-gray-700">
              Is the engine electric system in good working order?
            </p>
            <p className="text-red-600 font-semibold">No</p>
            <p className="text-gray-500 text-xs">Damaged electric cable</p>
          </div>
          <div className="absolute bottom-5 right-5 bg-white p-3 shadow-md rounded-md">
            <p className="text-xs text-gray-500">You assigned to</p>
            <p className="font-semibold text-gray-700">Adam Baker</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Relations;
