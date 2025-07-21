import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

export const cards = [
  {
    href: "web-development",
    title: "Web Development",
    description: "Build modern, responsive, and interactive websites using the latest web technologies to deliver seamless user experiences.",
    icon: <FaLaptopCode />,
  },
  {
    href: "mobile-development",
    title: "Mobile Development",
    description: "Design and develop high-performance mobile applications tailored for both iOS and Android platforms, ensuring smooth and engaging user experiences.",
    icon: <MdPhoneIphone />,
  },
  {
    href: "ui-design",
    title: "UI/UX Design",
    description: "Create intuitive and beautiful user interfaces that enhance user engagement and provide exceptional digital experiences.",
    icon: <FaLaptopCode />,
  },
  {
    href: "backend-solutions",
    title: "Backend Solutions",
    description: "Develop robust and scalable server-side solutions that power your applications and handle complex business logic efficiently.",
    icon: <MdPhoneIphone />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 pt-16 pb-20 bg-[#09101e] relative overflow-hidden">
      <div className="absolute top-10 left-[-5%] w-60 h-60 rounded-full bg-[#269ca1]/10 filter blur-3xl opacity-50 animate-float1"></div>
      <div className="absolute bottom-10 right-[-5%] w-80 h-80 rounded-full bg-[#269ca1]/10 filter blur-3xl opacity-40 animate-float2"></div>
      
      <div className="w-11/12 mx-auto px-4 lg:px-8 pb-12 relative z-10">
        <div className="text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#269ca1]">Projects</span>
          </h1>
          <div className="mx-auto w-48 md:w-80 h-1 bg-gradient-to-r from-[#269ca1] to-transparent mb-4"></div>
          <p className="text-lg md:text-xl text-gray-400">
            Real results. Real impact. A glimpse into our development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 mt-16">
          {cards.map((card, index) => (
            <Link
              href={card.href}
              key={index}
              className="relative group px-6 py-8 border border-[#1a4d50] rounded-3xl space-y-5 overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(38,156,161,0.15)] hover:border-[#269ca1]"
            >
              <span className="pointer-events-none absolute w-40 h-40 right-0 bottom-0 rounded-full bg-[#269ca1]/15 blur-2xl transform transition-all duration-500 group-hover:opacity-40 group-hover:scale-105"></span>

              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0d2a2c] border border-[#1a4d50] text-[#269ca1] text-3xl group-hover:text-white group-hover:bg-[#269ca1] group-hover:border-[#269ca1] transition-all duration-300">
                {card.icon}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#269ca1] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm mt-4 group-hover:text-white transition-colors duration-300">
                  {card.description}
                </p>
              </div>

              <div className="flex gap-3 mt-6">
                <span className="text-xs px-3 py-1.5 rounded-full bg-[#0d2a2c] text-[#269ca1] border border-[#1a4d50] group-hover:bg-[#269ca1] group-hover:text-white transition-colors duration-300">
                  View Case Study
                </span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-[#0d2a2c] text-[#269ca1] border border-[#1a4d50] group-hover:bg-[#269ca1] group-hover:text-white transition-colors duration-300">
                  See Demo
                </span>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-500 group-hover:text-[#a0e0dd] transition-colors duration-300 mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "MongoDB", "Tailwind CSS"].map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs px-2.5 py-1 rounded-full bg-[#0d2a2c] text-[#269ca1] border border-[#1a4d50] group-hover:bg-[#269ca1]/20 group-hover:text-[#a0e0dd] transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 mx-auto w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#269ca1] to-transparent opacity-30"></div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Interested in our work?{" "}
            <Link href="#contact" className="text-[#269ca1] hover:text-[#d1f5f3] transition-colors duration-300 font-semibold">
              Contact us today
            </Link>{" "}
            to discuss how we can bring your project to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;