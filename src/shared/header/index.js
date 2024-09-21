import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown,IoIosLogOut  } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Logo from "../../assets/home/logo.svg";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const LanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b-2 w-full px-4 h-[99.5px]  lg:px-4.5 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="flex">
        <div className="flex items-center ">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Middle: Navigation */}
        <ul className="hidden lg:flex items-center space-x-5 text-black font-bold ms-12 pt-9">
          {["Product", "Solutions", "Support", "Customers", "Pricing"].map(
            (item, index) => (
              <li key={item} className="relative group">
                <button
                  className="flex items-center hover:text-[#5f5bd7] pb-8  border-b-[4px] border-transparent hover:border-b-[4px] hover:border-[#5f5bd7]"
                  onClick={toggleDropdown}
                >
                  {item}
                  {(index === 0 || index === 1 || index === 2) && (
                    <IoIosArrowDown className="ml-1 !font-[300]" />
                  )}
                </button>
                {/* Full-page dropdown */}
                {isDropdownOpen && index === 1 && (
                  <div className="absolute left-0 top-full bg-white w-screen h-screen flex justify-center items-center z-20">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-200 p-4 w-80 h-80">
                        Dummy Content Box 1
                      </div>
                      <div className="bg-gray-200 p-4 w-80 h-80">
                        Dummy Content Box 2
                      </div>
                      <div className="bg-gray-200 p-4 w-80 h-80">
                        Dummy Content Box 3
                      </div>
                    </div>
                  </div>
                )}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Right: Buttons */}
      <div className="hidden lg:flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={LanguageDropdown}
            className="flex items-center space-x-2 text-black font-medium focus:outline-none me-3"
          >
            <svg
              clip-rule="evenodd"
              fill="none"
              fill-rule="evenodd"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="8" fill="#0052B4"></circle>
              <path
                d="M14.357 3.143 9.5 8l4.857 4.857a8.043 8.043 0 0 1-1.5 1.5L8 9.5l-4.857 4.857a8.043 8.043 0 0 1-1.5-1.5L6.5 8 1.643 3.143a8.047 8.047 0 0 1 1.5-1.5L8 6.5l4.857-4.857a8.047 8.047 0 0 1 1.5 1.5Z"
                fill="#EEE"
              ></path>
              <path
                d="M9 .062c.34.042.674.106 1 .19V6h5.748c.083.326.147.66.19 1L15 8l.938 1c-.043.34-.107.674-.19 1H10v5.748c-.326.084-.66.148-1 .19L8 15l-1 .938a7.964 7.964 0 0 1-1-.19V10H.252a7.964 7.964 0 0 1-.19-1L1 8 .062 7c.042-.34.106-.674.19-1H6V.252c.325-.084.66-.148 1-.19L8 1l1-.938Z"
                fill="#EEE"
              ></path>
              <path
                d="M9 .062A8.077 8.077 0 0 0 8.016 0h-.032C7.651 0 7.322.022 7 .062V7H.062a8.079 8.079 0 0 0 0 2H7v6.938a8.07 8.07 0 0 0 2 0V9h6.938a8.07 8.07 0 0 0 0-2H9V.062Z"
                fill="#D80027"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.135 1.865c.18.152.355.311.522.478L10 6V5l3.135-3.135Zm-11.27 1a8.05 8.05 0 0 1 .478-.522L6 6H5L1.865 2.865Zm11.792 10.792c.167-.167.326-.341.478-.522L11 10h-1l3.657 3.657Zm-10.792.478L6 11v-1l-3.657 3.657c.167.167.341.326.522.478Z"
                fill="#D80027"
              ></path>
            </svg>
            <span className="me-2 font-[500] text-md">English</span>
            <IoIosArrowDown className="!m-0 " />
          </button>

          {languageDropdownOpen && (
            <ul className="absolute mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {[
                "Deutsch",
                "Español",
                "Français",
                "Nederlands",
                "Português",
              ].map((language) => (
                <li
                  key={language}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  {language}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 text-[#5f5bd7] border border-[#d0d7e1] px-4 py-2.5 rounded-xl text-[16px] font-[600]">
            <IoIosLogOut  className="text-base" />
            <span>Log in</span>
          </button>
          <button className="text-white text-[16px] font-[500] bg-[#6559ff] px-4 py-3 rounded-xl text-sm hover:bg-blue-700">
            Sign up for free
          </button>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <div className="flex justify-end pe-6 w-full">
          <RxCross2 size={25}  onClick={()=>setMenuOpen(false)}/>
          </div>
          <ul className="space-y-4 text-gray-800 text-lg">
            {["Product", "Solutions", "Support", "Customers", "Pricing"].map(
              (item, index) => (
                <li
                  key={item}
                  className="flex items-center hover:text-blue-500"
                >
                  {item}
                  {(index === 0 || index === 1 || index === 2) && (
                    <FaChevronDown className="ml-1" />
                  )}
                </li>
              )
            )}
          </ul>
          <div className="mt-4 flex">
          <button className="flex me-4 items-center space-x-1 text-[#5f5bd7] border border-[#d0d7e1] px-4 py-2.5 rounded-xl text-[16px] font-[600]">
            <IoIosLogOut  className="text-base" />
            <span>Log in</span>
          </button>
          <button className="text-white text-[16px] font-[500] bg-[#6559ff] px-4 py-3 rounded-xl text-sm hover:bg-blue-700">
            Sign up for free
          </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
