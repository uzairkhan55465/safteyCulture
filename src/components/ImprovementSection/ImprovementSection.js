import React from "react";

const ImprovementSection = () => {
  return (
    <div className="w-full bg-[#6559ff] py-12">
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 text-center text-white">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
          Start your improvement movement
        </h2>

        {/* Icon Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10">
          <div className="flex items-center">
            <i className="fas fa-mobile-alt text-xl mr-2"></i>
            <span>Go paperless</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-chart-line text-xl mr-2"></i>
            <span>Boost productivity</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-bar-chart text-xl mr-2"></i>
            <span>Reduce incidents</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-rocket text-xl mr-2"></i>
            <span>Accelerate onboarding</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-shield-alt text-xl mr-2"></i>
            <span>Mitigate risks</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
            Get started for free
          </button>
          <button className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300">
            Book a demo
          </button>
        </div>

        {/* App Store Buttons */}
        <div className="flex justify-center items-center space-x-4">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="w-40"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="w-40"
          />
        </div>
      </div>
    </div>
  );
};

export default ImprovementSection;
