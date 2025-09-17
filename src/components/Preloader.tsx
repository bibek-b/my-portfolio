"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PreLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640);
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black text-white z-[9999]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 2, delay: 1.5, ease: "easeIn" }}
          >
            <motion.h1
              className=" font-bold tracking-wide sm:text-[200px] text-7xl "
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 0.8 }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              Bibek Gd
            </motion.h1>

            <motion.h1
              className=" font-bold tracking-wide sm:text-7xl text-4xl"
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: isMobile ? -5 : -20, opacity: 1 }}
              transition={{ duration: 1.3, delay: 1 }}
            >
              Software & AI
            </motion.h1>
            {/* <motion.img
              src="./images/ironman.webp"
              alt="Flying Man"
              initial={{ y: "200%"}}
              animate={{ y: "-200%"}}
              transition={{duration:1.5, ease: "easeIn", delay: 1}}
              className="absolute w-[200px] h-[300px] object-cover z-0"
            /> */}
            <motion.img
              src="/images/superman.jpg"
              alt="Flying Man"
              initial={{ y: "200%" }}
              animate={{ y: "-200%" }}
              transition={{ duration: 1.3, ease: "easeIn", delay: 1.5 }}
              className="absolute w-[200px] h-[300px] object-cover z-0"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.main>
      )}
    </>
  );
}
