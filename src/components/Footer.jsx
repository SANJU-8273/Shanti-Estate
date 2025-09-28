import React from "react";
import instagram_icon from "../assets/instagram_icon.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] text-[#1a1a1a] flex flex-col items-center justify-center gap-12 py-12 px-4 md:px-20 lg:px-32">
      {/* Logo */}
      <div className="flex items-center gap-4">
        {/* Logo SVG (optional) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#383838]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7m-9 2v6m4-6v6m-4 0h4"
          />
        </svg>
        <p className="text-4xl font-bold text-[#383838]">Shanti Estate</p>
      </div>

      {/* Links */}
      <ul className="flex flex-wrap justify-center gap-8 text-lg font-medium text-[#252525]">
        <li className="cursor-pointer hover:text-indigo-500 transition">Company</li>
        <li className="cursor-pointer hover:text-indigo-500 transition">Products</li>
        <li className="cursor-pointer hover:text-indigo-500 transition">Offices</li>
        <li className="cursor-pointer hover:text-indigo-500 transition">About</li>
        <li className="cursor-pointer hover:text-indigo-500 transition">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="flex gap-4">
        {[instagram_icon, pintester_icon, whatsapp_icon].map((icon, index) => (
          <div
            key={index}
            className="p-3 bg-white border border-gray-200 rounded shadow hover:scale-105 transition"
          >
            <img src={icon} alt="social-icon" className="w-5 h-5" />
          </div>
        ))}
      </div>

      {/* Divider & Copyright */}
      <div className="w-full flex flex-col items-center gap-4 mt-8">
        <hr className="w-4/5 h-[2px] bg-[#c7c7c7] rounded border-none" />
        <p className="text-sm text-[#1a1a1a]">© 2023 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
