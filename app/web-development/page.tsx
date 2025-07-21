import React from "react";
import { webProjects } from "../../data/data";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const page = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#0a0f1a] to-[#0d1117] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Web <span className="text-[#269ca1]">Projects</span>
          </h1>
          <div className="mx-auto w-44 md:w-96 h-1 bg-gradient-to-r from-[#269ca1] to-transparent mb-3"></div>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-lg">
            A selection of recent work showcasing responsive dashboards,
            e-commerce platforms, and more — all built with modern tech stacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webProjects.map((project, index) => (
            <div 
              key={index}
              className="group border border-[#1a3a5f] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#269ca1] hover:shadow-[0_0_30px_rgba(38,156,161,0.2)] relative"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  width={500}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1117] opacity-90"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[#269ca1] hover:text-[#a0e0dd] transition-colors"
                    >
                      <FiExternalLink className="text-lg" />
                      <span className="hidden md:block">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-[#0d1117]">
                <p className="text-gray-400 text-sm md:text-base mb-4">
                  {project.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#0d2a2c] text-[#269ca1] border border-[#1a4d50] group-hover:bg-[#269ca1]/20 group-hover:text-[#a0e0dd] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0d2a2c] flex items-center justify-center text-[#269ca1] group-hover:bg-[#269ca1] group-hover:text-white transition-all">
                <span className="text-lg">↗</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-transparent border border-[#269ca1] rounded-lg hover:bg-[#269ca1] transition-colors duration-300 group"
          >
            <span>←</span>
            <span className="ml-2 group-hover:ml-3 transition-all">Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;