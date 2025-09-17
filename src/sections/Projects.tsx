"use client";

import projects from "@/constants/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdInfinite } from "react-icons/io";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { fadeInUp, staggerChildren } from "@/animations/Variants";





export default function Projects() {
  return (
    <div className="flex items-center justify-center flex-col gap-6 px-4">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="md:text-[80px] text-4xl font-bold"
      >
        Projects
      </motion.h2>
      <div className="flex items-center justify-center gap-2">
        <div className="w-34 h-[1.5px] bg-gradient-to-l from-[#00BCD4]/40 to-transparent" />
        <IoMdInfinite size={30} color="#00BCD4" />
        <div className="w-34 h-[1.5px] bg-gradient-to-r from-[#00BCD4]/40 to-transparent" />
      </div>

      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className=" gap-6 space-y-6 md:justify-between sm:grid sm:grid-cols-2 justify-center w-full flex-wrap flex-col "
      >
        {projects.map((project, idx) => (
          // <div key={idx}>
          <motion.div
          variants={fadeInUp}
            key={idx}
            className="border p-10 gap-5 border-white/15 rounded-2xl sm:h-78 flex flex-col cursor-pointer hover:bg-white/5 transition-all duration-500 "
          >
            <h3 className="text-2xl">{project.title}</h3>

            <span className="text-white/50 font-light tracking-wide">
              {project.description}
            </span>

            <div className="gap-2 flex flex-wrap">
              {project.technologies.map((techs, index) => (
                <span
                  key={index}
                  className="text-[15px] font-[400] text-white/50 border rounded-full px-3 "
                >
                  {techs}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 bg-white/10 w-25 p-2 rounded cursor-pointer hover:bg-white/20 transition:all duration-300">
              {project.liveLink ? (
                <FaArrowUpRightFromSquare size={15} />
              ) : (
                <VscGithub size={15} />
              )}
              <Link
                target="_blank"
                href={project.liveLink || project.repoLink || ""}
              >
                {project.liveLink ? "Live Demo" : "Code"}
              </Link>
            </div>
          </motion.div>
          // </div>
        ))}
      </motion.div>
    </div>
  );
}
