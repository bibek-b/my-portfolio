import InfoCard from "@/components/InfoCard";
import KeySkillsCard from "@/components/KeySkills";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineLocalPhone, MdWorkHistory } from "react-icons/md";
import { SiMinds } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/Variants";

const contactInfo = [
  { icon: <CiLocationOn />, text: "Kathmandu, Nepal" },
  { icon: <MdOutlineLocalPhone />, text: "+977-9741809923" },
  { icon: <CiMail />, text: "vieekgadel49@gmail.com" },
  { icon: <TbWorld />, text: "bibekbk.com.np" },
];



export default function About() {
  return (
    <motion.div className="mt- sm:mt-0">
      <div className="md:flex sm:pl-10 px-4 space-y-10">
        <div className="md:w-[60%] space-y-10">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="md:text-7xl text-5xl font-bold"
          >
            About
          </motion.h1>
          <div className="w-34 h-px bg-gradient-to-r from-[#00BCD4]/40 to-transparent md:mr-40 mr-20" />

          <div className="flex w-full gap-5 font-light sm:text-[20px] text-[17px]/8">
            <div className=" sm:pr-10 flex flex-col gap-5 text-white/75">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
              >
                <p className="text-white/78 sm:leading-10">
                  I'm a passionate{" "}
                  <strong className="text-white">full-stack developer</strong>{" "}
                  skilled in JavaScript with Node Js for backend and React
                  Js/Native with Tailwind for frontend. I build scalable, secure
                  and high-performing web applications with a strong focus on
                  real-time features using Socket.IO
                </p>

                <p>
                  Exploring the advanced features of{" "}
                  <strong className="text-white">Next.js</strong> to develop
                  scalable, performant, and SEO-friendly web applications. My
                  focus includes mastering server-side rendering, static site
                  generation, dynamic routing, and API integration to build
                  modern, full-stack applications with a seamless user
                  experience.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                className="sm:grid sm:grid-cols-2 flex flex-col gap-4 mt-5"
              >
                {contactInfo.map((contact, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span>{contact.icon}</span>
                    <span className="text-[16px] text-white/50">
                      {contact.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div className="md:w-[40%] space-y-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <InfoCard
              icon={FaGraduationCap}
              title="Education"
              date="2022 - 2026"
              subTitle="Bachelor in Computer Application"
              info1="Institute of Science & Technology (IOST)"
              info2="Tribuvan University"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <InfoCard
              icon={MdWorkHistory}
              title="Experience"
              date="Present"
              subTitle="React Developer (Internship)"
              info1="Aspiration Asia & Trekking Pvt. Ltd"
              info2="Bhaktapur, Nepal"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <KeySkillsCard icon={SiMinds} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
