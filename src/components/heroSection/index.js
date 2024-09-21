import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image1 from "../../assets/home/Toyota.svg";
import Image2 from "../../assets/home/img2.svg";
import Image3 from "../../assets/home/img3.webp";
import Image4 from "../../assets/home/img4.svg";
import Image5 from "../../assets/home/img5.svg";
import Image6 from "../../assets/home/img6.webp";
import Image7 from "../../assets/home/img7.webp";
import Carousel1 from "../../assets/home/carousel1.webp"
import Carousel2 from "../../assets/home/carousel1.jpeg"
const HeroSection = () => {
  const slides = [
    {
      id: 1,
      img: Carousel1,
      badgeText: "Sensor alert",
      badgeColor: "bg-blue-600",
      title: "58°C / 136°F",
      description: "Linen press",
    },
    {
      id: 2,
      img: Carousel2,
      badgeText: "Pre-start audit report",
      badgeColor: "bg-purple-600",
      title: "New Audit Report",
      description: "Audit ID: 12345",
    },
  ];

  const imagesArray = [
    { img: Image1 },
    { img: Image2 },
    { img: Image3 },
    { img: Image4 },
    { img: Image5 },
    { img: Image6 },
    { img: Image7 },
  ];

  return (
    <div className="">
      {/* First Content: Main Hero Section */}
      <div className="lg:absolute md:relative top-[110px] flex justify-center w-full z-10">
        <div className="w-[90%] md:w-[85%] lg:w-[85%] xl:w-[78%] bg-white rounded-[200px] text-white text-center pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 lg:px-16">
          <span className="inline-block border-t border-b border-r border-[3px] border-l-[.1875rem] border-[#6559ff] text-sm text-[#293745] bg-white px-3 py-1 rounded-full mb-4">
            Workplace operations platform
          </span>
          <h1 className="text-[36px] md:text-[48px] lg:text-[45px] xl:text-[63px] text-[#293745] font-bold mb-2">
            A better way of working
          </h1>
          <p className="text-[1.1rem] md:text-[1.24rem] lg:text-[1.26rem] xl:text-[1.34rem] mb-8 text-[#293745] pt-2 px-4 md:px-10 lg:px-16 mx-4 md:mx-8 lg:mx-10">
            Give your teams the knowledge, tools, and confidence to work safely,
            meet higher standards, and improve every day.
          </p>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-[#6559ff] text-white px-5 py-3 rounded-lg text-[1rem]">
              Sign up for free
            </button>
            <button className="bg-white text-[1rem] text-[#6559ff] px-5 py-3 rounded-lg border border-[#d0d7e1] hover:bg-gray-100">
              Book a demo
            </button>
          </div>
        </div>
      </div>

      {/* Second Content: Swiper Section */}
      <div className="relative mt-10 md:mt-[12%] lg:mt-[18%] flex justify-center items-center mx-5">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[680px] w-full !rounded-xl"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full">
                <img
                  src={slide.img}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-cover"
                />
                {/* Slide Content */}
                {/* <div className="absolute top-4 md:top-10 left-4 md:left-10 bg-white p-2 md:p-4 rounded-lg">
                  <span
                    className={`text-xs ${slide.badgeColor} text-white px-2 py-1 rounded-full`}
                  >
                    {slide.badgeText}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold mt-2">
                    {slide.title}
                  </h2>
                  <p className="text-sm">{slide.description}</p>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Third Content: Brand Logos Section */}
      <div className="flex justify-center flex-wrap mx-5 md:mx-10 lg:mx-16 mt-8 md:mt-12 lg:mt-16 mb-8 md:mb-12 lg:mb-16">
        {imagesArray?.map((data, index) => (
          <img
            key={index}
            src={data?.img}
            alt=""
            className="mx-8 md:mx-10 lg:mx-12 pb-10 w-[80px] sm:w-[100px] md:w-[110px]"
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
