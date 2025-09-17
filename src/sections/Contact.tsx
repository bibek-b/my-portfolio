import Link from "next/link";
import { BiGlobe, BiLocationPlus, BiPhone } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/animations/Variants";

const personalData = [
  { icon: <MdEmail />, title: "Email", value: "vieekgadel49@gmail.com" },
  { icon: <BiPhone />, title: "Phone", value: "+977-9741809923" },
  { icon: <BiLocationPlus />, title: "Location", value: "Kathmandu, Nepal" },
  { icon: <BiGlobe />, title: "Website", value: "bibekbk.com.np" },
];

const onlineLinks = [
  {
    icon: <LiaLinkedin />,
    title: "LinkedIn Profile",
    url: "https://www.linkedin.com/in/bibek-bishwokarma-8b0577353/?originalSubdomain=np",
  },
  {
    icon: <BsGithub />,
    title: "GitHub Repository",
    url: "http://github.com/bibek-b",
  },
  { icon: <MdEmail />, title: "Send Email" },
  {
    icon: <BiGlobe />,
    title: "Personal Website",
    url: "https://bibekbk.com.np",
  },
];



export default function Contact() {
  return (
    <div className="flex flex-col items-center w-full gap-20">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} className="flex flex-col items-center gap-4" id="contact">
        <h2 className="sm:text-6xl text-4xl">Let's Connect</h2>
        <div className="w-34 h-px bg-gradient-to-r from-[#00BCD4]/40 to-transparent ml-5" />

        <span className="text-white/50 font-light sm:w-140 sm:text-xl text-center">
          Open to work opportunities, collaborations, and discussions related to
          software development and AI integration.
        </span>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-10 tracking-wider items-center">
        <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} className="border border-white/15 sm:p-10 p-5 sm:w-130 w-83 rounded sm:h-145 ">
          <h3 className="sm:text-3xl text-xl font-light">Get In Touch</h3>
          {personalData.map((data) => (
            <div
              key={data.title}
              className="flex sm:gap-3 gap-4 items-center mt-5 font-light  "
            >
              <span className="bg-white/10 sm:p-4 p-3 rounded sm:text-xl">
                {data.icon}
              </span>
              <div>
                <p className="text-white/50 text-[15px]">{data.title}</p>
                <p className="text-sm">{data.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} className="border border-white/15 sm:p-10 p-5 sm:w-130 w-83 rounded">
          <h3 className="sm:text-3xl text-xl font-light">Find Me Online</h3>
          {onlineLinks.map((data) => (
            <Link
              href={data?.url || ""}
              target="_blank"
              key={data.title}
              className="flex items-center gap-3 mt-5 border border-white/15 p-2 rounded hover:bg-white/10 cursor-pointer sm:text-[15px] text-sm transition-all duration-200 text-white/85"
            >
              <span className="text-xl">{data.icon}</span>
              <p>{data.title}</p>
            </Link>
          ))}

          <div className="border border-white/15 bg-white/5 mt-10  px-6 py-4 rounded-xl space-y-4">
            <h3>What I Do</h3>
            <ul className="list-disc ml-5 sm:text-[15px] text-sm space-y-2 font-light text-white/60">
              <li>Build and optimize full-stack web/mobile applications</li>
              <li>Implement real-time communication using WebSockets</li>
              <li>Optimize databases for scalability and performance</li>
              <li> Explore and integrate AI/ML capabilities</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
