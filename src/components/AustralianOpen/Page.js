import React from "react";
import AustilianOpenImg from "../../assets/home/girl.webp";
const HeroSection = () => {
  return (
    <div className="relative bg-gray-100 w-full h-auto ">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <img
          className="w-full h-full object-cover"
          src={AustilianOpenImg}
          alt="Australian Open"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start px-6 py-12 lg:py-20">
        <div className="text-white max-w-2xl lg:max-w-4xl xl:max-w-6xl text-left">
          <div className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl">
            <span className="inline-block">&ldquo;</span>
          </div>
          <blockquote className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">
            Whether it be the ballkids or court services, customer experiences,
            retail or sustainability teams, they're all using SafetyCulture to
            deliver the Australian Open that not only the fans love, but that
            our workforce feels great about.
          </blockquote>
          <p className="mt-6 text-sm md:text-base font-light">
            <strong>Craig Tiley</strong>
            <br />
            CEO and Director of Tennis Australia
          </p>
          <button className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg">
            Find out how Australian Open uses SafetyCulture
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
