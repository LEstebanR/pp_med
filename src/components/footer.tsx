import React from "react";
import { GoHeart } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="my-8 w-full">
      <div className="z-10 flex flex-wrap  items-center justify-center gap-x-1 gap-y-3 sm:gap-x-2 ">
        <a
          href="https://github.com/LEstebanR/lesteban"
          aria-label="Github project"
        >
          <FaGithub className="h-6 w-6 text-primary" />
        </a>
        <div className="mx-2 h-[30px] w-[0.5px] rotate-[20deg] bg-black"></div>
        <div className="flex items-center gap-x-1 text-xs sm:text-base">
          <span className="text-slate-500">Made with</span>
          <GoHeart className="h-4 w-4 text-red-500" />
          <span className="text-slate-500">by</span>
          <a
            className="font-medium text-primary underline decoration-dashed decoration-0 underline-offset-4"
            href="https://github.com/LEstebanR"
          >
            LEstebanR
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
