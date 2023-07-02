import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";

function LeftSide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-theme-300">
      <div className="flex flex-col gap-4">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 text-xl bg-theme-700 rounded-full inline-flex items-center justify-center hover:text-theme-300/70 cursor-pointer hover:translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <span className="w-10 h-10 text-xl bg-theme-700 rounded-full inline-flex items-center justify-center hover:text-theme-300/70 cursor-pointer hover:translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
      </div>
      <div className="bg-theme-300/70 h-32 w-[2px]"></div>
    </div>
  );
}

export default LeftSide;
