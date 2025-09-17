"use client";

import { useActiveSectionStore } from "@/stores/activeSectionsStore";
import Link from "next/link";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaRegMessage } from "react-icons/fa6";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { navbarVariant } from "@/animations/Variants";

const NAV_LINKS = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeLink = useActiveSectionStore((state) => state.activeSection);
  const setActiveLink = useActiveSectionStore(
    (state) => state.setActiveSection
  );

  const handleLinkClick = (link?: string) => {
    setIsOpen(false);
    link && setActiveLink(link);
  };
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariant}
      className="sticky top-0 z-50 p-1 text-xl bg-black/95"
    >
      <div className="flex justify-between sm:px-4 pt-4 pb-2 md:px-20">
        {/* Logo */}
        <Link
          href="#/"
          className="font-bold text-3xl drop-shadow-cyan-500/50 [text-shadow:_0_4px_8px_#00BCD4] text-[#00BCD4]"
        >
          Bibek | Gd
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-20 font-medium">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => handleLinkClick(link.id)}
            >
              <span
                className={`inline-block   transition-all duration-500 ease-in-out ${
                  activeLink == link.id
                    ? "border-b-[#00BCD4] border-b-2 text-[#00BCD4] "
                    : "border-b-transparent hover:border-b-[#00BCD4] hover:border-b-2 "
                } `}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex ">
          <Link
            href="#contact"
            className={` rounded-full px-6 py-2 flex items-center justify-center gap-3 text-black hover:bg-black hover:text-white hover:ring transition-all duration-500 ease-in-out ${
              activeLink == "contact" ? "bg-black text-white ring" : "bg-white"
            }`}
            onClick={() => handleLinkClick("contact")}
          >
            <FaRegMessage size={18} /> Contact
          </Link>
        </div>
        <button
          className=" text-gray-200 text-4xl z-999 transition-all duration-500 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`inline-block transform transition-transform  duration-500 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isOpen ? <RxCross1 /> : <CgMenuRightAlt />}
          </span>
        </button>
      </div>
      {/* Mobile Menu Button*/}
      <div
        className={` w-full h-80 absolute  -top-100 transition-all duration-800 md:hidden bg-black/95 ${
          isOpen && "top-0"
        }`}
      >
        {/* Mobile Dropdown */}
        <div
          className={`flex items-center pl-5 w-full  md:hidden h-full shadow-md  absolute   transition-opacity duration-300 z-50 `}
        >
          <div className={`flex flex-col gap-8 font-light`}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => handleLinkClick(link.id)}
                className={`w-fit transition-all duration-800 ease-in-out ${
                  activeLink == link.id
                    ? "border-b-[#00BCD4]  border-b text-[#00BCD4]"
                    : "border-b-transparent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
