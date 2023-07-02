import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-theme-700/30 px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-10 h-10 bg-white text-theme-900 p-3 rounded-md text-2xl font-extrabold backdrop-filter">
            CN
          </span>
        </motion.div>
        <nav className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[14px] gap-7">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-white/90 hover:text-theme-500/80 cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-white/90 hover:text-theme-500/80 cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-theme-300">01.</span>
                About
              </motion.li>
            </Link>
            <Link
              href="#experience"
              className="flex items-center gap-1 font-medium text-white/90 hover:text-theme-500/80 cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <span className="text-theme-300">02.</span>
                Experience
              </motion.li>
            </Link>
            <Link
              href="#projects"
              className="flex items-center gap-1 font-medium text-white/90 hover:text-theme-500/80 cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <span className="text-theme-300">03.</span>
                Projects
              </motion.li>
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-1 font-medium text-white/90 hover:text-theme-500/80 cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <span className="text-theme-300">04.</span>
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/public/assets/collinsnwokocv.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 duration-300 border rounded-md text-white border-theme-300 text-[14px] hover:bg-theme-700/90"
            >
              Resume
            </motion.button>
          </a>
        </nav>
        {/* Small icon */}
        <div className="w-6 h-6 flex mdl:hidden flex-col justify-between items-center text-4xl text-white cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-white inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span
            className="w-full h-[2px] bg-white inline-flex transform
          translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"
          ></span>
          <span
            className="w-full h-[2px] bg-white inline-flex transform
          translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"
          ></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
