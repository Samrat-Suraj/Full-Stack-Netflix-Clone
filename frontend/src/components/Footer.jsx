import React from "react";

const Footer = () => {
  return (
    <div className="px-8 sm:p-11 bg-black">
      <div className="px-4 sm:px-0">
        <p className="text-gray-400 mt-6 sm:mt-11 text-sm sm:text-base">
          Questions? Call +91 979-460-3102
        </p>
        <div className="text-gray-400 underline flex flex-col sm:flex-row flex-wrap justify-between mt-4 gap-5">
          <div className="flex flex-col justify-start gap-2">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </div>
          <div className="link flex flex-col justify-start gap-2">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Notices</a>
          </div>
          <div className="link flex flex-col justify-start gap-2">
            <a href="#">Account</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Only on Netflix</a>
          </div>
          <div className="link flex flex-col justify-start gap-2">
            <a href="#">Media Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
            <a href="#">Mobile App</a>
          </div>
        </div>
        <p className="text-gray-300 mt-6 sm:mt-9 text-sm sm:text-base">
          Netflix India
        </p>
      </div>
    </div>
  );
};

export default Footer;
