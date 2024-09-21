import React from "react";
import safetyCultureLogo from "../../assets/home/safetyculture.svg"; // Update the path based on where you place the images
import sheqsyLogo from "../../assets/home/sheqsy.svg"; // Update the path based on where you place the images
// import appStoreIcon from "../assets/appStoreIcon.png"; // Update the path based on where you place the images
// import googlePlayIcon from "../assets/googlePlayIcon.png"; // Update the path based on where you place the images
// import twitterIcon from "../assets/twitterIcon.png"; // Update the path based on where you place the images
// import linkedInIcon from "../assets/linkedInIcon.png"; // Update the path based on where you place the images
// import facebookIcon from "../assets/facebookIcon.png"; // Update the path based on where you place the images
// import instagramIcon from "../assets/instagramIcon.png"; // Update the path based on where you place the images

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-purple-600 mb-4">Product</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Book Demo
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Product updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  SafetyCulture (formerly iAuditor)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-purple-600 mb-4">Support</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Partner support
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  API developer documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Digitize your checklist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-purple-600 mb-4">
              Resources
            </h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Checklist library
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  App & software guides
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Checklist guides
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Topic guides
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-purple-600 mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  News room
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Brand Partnerships
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-purple-600">
                  Meet the leadership team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-x-8 mb-4 sm:mb-0">
            <img
              src={safetyCultureLogo}
              alt="SafetyCulture Logo"
              className="h-8"
            />
            <div className="flex space-x-4">
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
            {/* <img src={sheqsyLogo} alt="SHEQSY Logo" className="h-12" /> */}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center space-x-8 mb-4 sm:mb-0">
            <img
              src={sheqsyLogo}
              alt="SafetyCulture Logo"
              className="h-8"
            />
            <div className="flex space-x-4">
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
            {/* <img src={sheqsyLogo} alt="SHEQSY Logo" className="h-12" /> */}
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between border-t pt-8">
          <div>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-800 hover:text-purple-600">
                Status
              </a>
              <a href="#" className="text-gray-800 hover:text-purple-600">
                Legal
              </a>
              <a href="#" className="text-gray-800 hover:text-purple-600">
                Terms and Conditions
              </a>
              <a href="#" className="text-gray-800 hover:text-purple-600">
                Privacy Portal
              </a>
              <a href="#" className="text-gray-800 hover:text-purple-600">
                Security
              </a>
            </div>
          </div>
        </div>
        {/* <div className="mt-8 flex justify-center space-x-4">
          <a href="#">
            <img src={twitterIcon} alt="Twitter" className="h-6 w-6" />
          </a>
          <a href="#">
            <img src={linkedInIcon} alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a href="#">
            <img src={facebookIcon} alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="Instagram" className="h-6 w-6" />
          </a>
        </div> */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">© SafetyCulture 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
