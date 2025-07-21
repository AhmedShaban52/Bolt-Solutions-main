"use client";
import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { teamMembers } from "../data/data";

const Team = () => {
  return (
    <section
      id="team"
      className="scroll-mt-28 pt-10 pb-14 bg-[#09101e] relative overflow-hidden"
    >
      <div className="absolute top-10 left-[-5%] w-60 h-60 rounded-full bg-[#269ca1]/10 filter blur-3xl opacity-50 animate-float1"></div>
      <div className="absolute bottom-10 right-[-5%] w-80 h-80 rounded-full bg-[#269ca1]/10 filter blur-3xl opacity-40 animate-float2"></div>

      <div className="w-11/12 mx-auto px-2.5 lg:px-14 md:pt-20 pb-12 relative z-10">
        <div className="text-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold mb-2.5">
            Team <span className="text-[#38b2ac]">Members</span>
          </h1>
          <div className="mx-auto w-48 md:w-80 h-1 bg-gradient-to-r from-[#38b2ac] to-transparent mb-2"></div>
          <p className="text-lg md:text-xl text-gray-400">
            Group of Engineers, Developers, And Designers Dedicated to
            Delivering Excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {teamMembers.map((item, index) => (
            <div
              key={index}
              className="relative group px-6 py-8 border border-[#1a4d50] rounded-3xl space-y-5 overflow-hidden transition-all duration-500 hover:shadow-[0_0_15px_rgba(56,178,172,0.15)] hover:border-[#38b2ac]"
            >
              <span className="pointer-events-none absolute w-40 h-40 right-0 bottom-0 rounded-full bg-[#269ca1]/15 blur-2xl transform transition-all duration-500 group-hover:opacity-40 group-hover:scale-105"></span>

              <div className="flex items-start gap-4 z-10 relative">
                <span className="text-[#38b2ac] text-3xl p-2 rounded-full bg-[#0d2a2c] border border-[#1a4d50] group-hover:text-[#0d2a2c] group-hover:bg-[#38b2ac] group-hover:border-[#38b2ac] transition-all duration-300">
                  <BsPersonWorkspace />
                </span>

                <div>
                  <h1 className="text-xl font-bold text-white group-hover:text-[#38b2ac] transition-colors duration-300">
                    {item.name}
                  </h1>
                  <h2 className="text-lg font-medium text-gray-400 group-hover:text-[#a0e0dd] transition-colors duration-300">
                    {item.title}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#0d2a2c] text-[#38b2ac] border border-[#1a4d50] group-hover:bg-[#38b2ac]/20 group-hover:text-[#a0e0dd] transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm mt-4 z-10 relative group-hover:text-[#c2f0ed] transition-colors duration-300">
                {item.description}
              </p>

              <div className="flex gap-3 mt-5 z-10 relative">
                {item.socialLinks.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#38b2ac] transition-colors duration-300 text-xl"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 mx-auto w-full h-px bg-gradient-to-r from-transparent via-[#38b2ac] to-transparent opacity-30"></div>
      </div>
    </section>
  );
};

export default Team;
