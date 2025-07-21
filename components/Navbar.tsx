"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { NavbarLinks } from "./NavbarLinks";
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo4.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`sticky top-0 z-50 px-5 md:px-8 xl:px-14 pt-1 pb-3 transition-all duration-500 ${
        scrolled 
          ? "bg-[#0D1117] shadow-lg border-b border-[#1a3a5f]" 
          : "bg-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between py-1">
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src={logo} 
            alt="Dodix Tech Logo" 
            className="size-10 sm:size-12"
          />
          <span className="ml-2 text-white text-xl font-bold hidden sm:block">
            Dodix<span className="text-[#269ca1]">Tech</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex justify-center">
          <NavbarLinks />
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-3">
          {[
            { icon: <FaFacebook size={18} />, color: "hover:text-[#4267B2]", href: "https://www.facebook.com/Bolt.Solutions2" },
            { icon: <FaInstagram size={18} />, color: "hover:text-[#E1306C]", href: "https://www.instagram.com/your_instagram" },
            { icon: <FaLinkedin size={18} />, color: "hover:text-[#0A66C2]", href: "https://www.linkedin.com/company/bolt-solutions2/" },
            { icon: <FaTiktok size={18} />, color: "hover:text-[#000000]", href: "https://www.tiktok.com/@your_tiktok" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[#1a2a3a] w-8 h-8 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl bg-[#1a2a3a] w-10 h-10 rounded-full flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute left-0 top-full w-full bg-[#0D1117] border-t border-[#1a3a5f] pt-4 pb-6 px-5 z-40 animate-slideDown">
          <div className="text-white text-base">
            <NavbarLinks isMobile={true} />
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center justify-start gap-x-4 text-xl mt-6">
            {[
              { icon: <FaFacebook size={20} />, color: "hover:text-[#4267B2]", href: "https://www.facebook.com/Bolt.Solutions2" },
              { icon: <FaInstagram size={20} />, color: "hover:text-[#E1306C]", href: "https://www.instagram.com/your_instagram" },
              { icon: <FaLinkedin size={20} />, color: "hover:text-[#0A66C2]", href: "https://www.linkedin.com/company/bolt-solutions2/" },
              { icon: <FaTiktok size={20} />, color: "hover:text-[#000000]", href: "https://www.tiktok.com/@your_tiktok" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-[#1a2a3a] w-10 h-10 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;