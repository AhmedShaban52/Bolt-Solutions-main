import Link from "next/link";

export const navbarLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Projects", href: "#projects" },
  { name: "Contacts", href: "#contact" },
];

export function NavbarLinks({ isMobile = false }) {
  return (
    <div
      className={`${
        isMobile
          ? "flex-col items-start space-y-4"
          : "flex-row items-center gap-x-2 ml-8"
      } flex`}
    >
      {navbarLinks.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className={`group relative ${isMobile ? "py-2" : "px-3 py-1"} rounded-md font-medium transition text-gray-400 hover:text-white duration-300 cursor-pointer`}
        >
          {item.name}
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#269ca1] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  );
}