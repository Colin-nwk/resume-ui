import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        className="text-lg font-titleFont tracking-wide text-theme-300"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Collins Nwoko{" "}
        <span className="text-theme-300/60">I built things for the web</span>
      </motion.h1>
      <motion.p
        className="text-base md:max-w-[650px] text-white/70 font-medium"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        I am a result-driven Software Developer with a proven track record in
        web development. With proficiency JavaScript, PHP, React,React Native,
        Laravel, TailwindCSS and other ecosystems.{" "}
        <a href="">
          <span className="text-theme-300 inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            learn more
            <span className="absolute w-full h-[1px] bg-theme-300/70 bottom-1 left-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="px-4 py-2 duration-300 border rounded-md text-white border-theme-300 text-[14px] hover:bg-theme-700/90 inline-block w-fit"
      >
        Check out my Projects!
      </motion.button>
    </section>
  );
};

export default Banner;
