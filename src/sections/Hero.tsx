"use client";

import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa6";
import { LiaRobotSolid } from "react-icons/lia";
import {
  blurVariant,
  letter,
  pullUpContainer,
  pullUpVariant,
  staggerLetter,
} from "@/animations/Variants";

const line1 = "FULL STACK";
const line2 = "DEVELOPER";

export default function Hero() {
  return (
    <div className="md:py-20 px-4  py-30 flex gap-15">
      <div className="md:text-9xl text-7xl font-bold flex flex-col   ">
        <motion.h1
          variants={staggerLetter}
          initial="hidden"
          animate="visible"
          className="text-[#00BCD4]"
        >
          {line1.split("").map((char, index) => {
            return (
              <motion.span
                key={char + "-" + index}
                variants={letter}
                className="text-[70px] sm:text-[120px] "
              >
                {char}
              </motion.span>
            );
          })}
          <br />
          {/* text-gray-400 */}
          {line2.split("").map((char, index) => {
            return (
              <motion.span
                key={char + "-" + index}
                variants={letter}
                className=" text-[70px] sm:text-[180px] text-slate-200 tracking-wide "
              >
                {char}
              </motion.span>
            );
          })}
        </motion.h1>
        <motion.div
          variants={pullUpContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col  gap-8 md:max-w-[50%] justify-center  items-center text-center sm:items-start "
        >
          <motion.p
            variants={pullUpVariant}
            className="sm:text-xl text-[17px]/7   font-extralight mt-4 opacity-70 tracking-wide sm:text-left
            "
          >
            Hi, I&apos;m Bibek Gadel (also known as Bibek BK / Bibek
            Bishwokarma). I&apos;m a Full Stack Developer specializing in React
            and React Native. I craft web/app applications that are
            SEO-friendly, lightning-fast, mobile-responsive, and visually
            modern. My work blends clean design with robust functionality, and I
            love integrating AI-powered features to take user experiences to the
            next level.
          </motion.p>
          <motion.a
            href="./MyResume.pdf"
            target="_blank"
            type="download"
            variants={blurVariant}
            className="md:text-3xl flex items-center justify-center text-xl font-[400] sm:w-50 sm:h-15 w-30 h-10 bg-[#00BCD4]  rounded hover:bg-black cursor-pointer hover:ring hover:scale-[1.01] transition-all duration-500 ease-in-out"
          >
            Resume
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex-col gap-4 font-[300] text-slate-100 hidden sm:flex"
      >
        <div className="flex gap-2 items-center text-xl">
          <FaLaptopCode color="#00BCD4" size={30} />
          <span>Scalable Web/Mobile Apps</span>
        </div>
        <div className="flex gap-2 items-center text-xl">
          <LiaRobotSolid color="#00BCD4" size={30} />
          <span>AI Integration</span>
        </div>

        <div className="text-xl w-80 text-right tracking-wide">
          <span className="text-[#00BCD4]">&lt;strong&gt;</span>
          <br />
          Proficient in the latest web/app technologies and frameworks,
          continuously expanding my skill to set to stay at the fore front of
          the industry.
          <br />
          <span className="text-[#00BCD4]">&lt;/strong&gt;</span>
        </div>
      </motion.div>
    </div>
  );
}
