import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import logo from "../assets/logo4.png"; // تأكد من وجود ملف اللوجو في المسار الصحيح
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-16 bg-gradient-to-b from-[#0D1117] to-[#0a1c2e] border-t border-[#1a3a5f]">
      {/* عناصر زخرفية في الخلفية */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#269ca1]/10 filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#269ca1]/10 filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full border-4 border-[#269ca1]/10"></div>
      <div className="absolute -top-40 -right-20 w-60 h-60 rounded-full border-4 border-[#269ca1]/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* عمود الشعار والمقدمة */}
          <div className="space-y-6">
            <div className="flex items-center">
              {/* استبدال الحرف B باللوجو */}
              <div className="w-16 h-16 mr-3">
                <Image
                  src={logo}
                  alt="Dodix Tech Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We craft stunning digital experiences that blend beautiful design
              with robust functionality—tailored to elevate your brand and
              engage your audience.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="bg-[#1a2a3a] hover:bg-[#269ca1] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <AiFillGithub className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="bg-[#1a2a3a] hover:bg-[#269ca1] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="bg-[#1a2a3a] hover:bg-[#269ca1] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="bg-[#1a2a3a] hover:bg-[#269ca1] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <AiOutlineTwitter className="text-white text-lg" />
              </a>
            </div>
          </div>

          {/* عمود روابط سريعة */}
          <div className="lg:pl-10">
            <h3 className="text-white text-lg font-bold mb-6 pb-2 border-b border-[#1a3a5f] inline-block">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Projects", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center text-gray-400 hover:text-[#269ca1] transition-all duration-300 group"
                    >
                      <BsArrowRight className="mr-3 text-[#269ca1] group-hover:translate-x-1 transition-transform" />
                      <span>{item}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* عمود الخدمات */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 pb-2 border-b border-[#1a3a5f] inline-block">
              Our Services
            </h3>
            <ul className="space-y-4">
              {[
                "Web Development",
                "UI/UX Design",
                "Mobile Apps",
                "Cloud Solutions",
                "SEO Optimization",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center text-gray-400 hover:text-[#269ca1] transition-all duration-300 group"
                  >
                    <BsArrowRight className="mr-3 text-[#269ca1] group-hover:translate-x-1 transition-transform" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* عمود الاتصال */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 pb-2 border-b border-[#1a3a5f] inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0d2a2c] border border-[#1a4d50] text-[#269ca1] text-xl transition-all duration-300 group-hover:bg-[#269ca1] group-hover:border-[#269ca1] group-hover:text-white">
                  <IoMdMail className="z-10" />
                  <span className="pointer-events-none absolute w-full h-full rounded-full bg-[#269ca1]/15 blur-md transform transition-all duration-500 group-hover:opacity-40 group-hover:scale-110"></span>
                </div>
                <div className="ml-4">
                  <p className="text-gray-400 text-sm group-hover:text-[#a0e0dd] transition-colors duration-300">
                    Email
                  </p>
                  <p className="text-white group-hover:text-[#269ca1] transition-colors duration-300">
                    contact@dodixtech.com
                  </p>
                </div>
              </li>

              <li className="flex items-start group">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0d2a2c] border border-[#1a4d50] text-[#269ca1] text-xl transition-all duration-300 group-hover:bg-[#269ca1] group-hover:border-[#269ca1] group-hover:text-white">
                  <span className="z-10">📍</span>
                  <span className="pointer-events-none absolute w-full h-full rounded-full bg-[#269ca1]/15 blur-md transform transition-all duration-500 group-hover:opacity-40 group-hover:scale-110"></span>
                </div>
                <div className="ml-4">
                  <p className="text-gray-400 text-sm group-hover:text-[#a0e0dd] transition-colors duration-300">
                    Location
                  </p>
                  <p className="text-white group-hover:text-[#269ca1] transition-colors duration-300">
                    Cairo, Egypt
                  </p>
                </div>
              </li>

              <li className="flex items-start group">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0d2a2c] border border-[#1a4d50] text-[#269ca1] text-xl transition-all duration-300 group-hover:bg-[#269ca1] group-hover:border-[#269ca1] group-hover:text-white">
                  <span className="z-10">📱</span>
                  <span className="pointer-events-none absolute w-full h-full rounded-full bg-[#269ca1]/15 blur-md transform transition-all duration-500 group-hover:opacity-40 group-hover:scale-110"></span>
                </div>
                <div className="ml-4">
                  <p className="text-gray-400 text-sm group-hover:text-[#a0e0dd] transition-colors duration-300">
                    Phone
                  </p>
                  <p className="text-white group-hover:text-[#269ca1] transition-colors duration-300">
                    +20 123 456 7890
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* خط فاصل */}
        <div className="border-t border-[#1a3a5f] my-10"></div>

        {/* حقوق النشر والروابط الإضافية */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Dodix Tech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-[#269ca1] text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#269ca1] text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-[#269ca1] text-sm transition-colors duration-300"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* عنصر زخرفي سفلي */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0a1c2e] via-[#269ca1] to-[#0a1c2e]"></div>
    </footer>
  );
};

export default Footer;
