import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { LuMail } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "tween", duration: 0.3 } },
    exit: { x: "100%", transition: { type: "tween", duration: 0.3 } },
  };

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-6 md:px-10 py-6 text-white backdrop-blur-md">
      <div className="flex gap-2">
        <img
          src="/logo.svg"
          alt="Logo"
          className="w-12 opacity-85 transition-all duration-300 hover:opacity-100
                     hover:rotate-180"
        />
        <div className="flex flex-col items-start justify-start">
          <a
            href="#home"
            className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-2xl font-extrabold opacity-85 transition-all duration-300 hover:opacity-100"
          >
            Yudiatmoko
          </a>
          <span className="text-sm font-bold opacity-85 transition-all duration-300 hover:opacity-100">
            Mobile Developer
          </span>
        </div>
      </div>

      <ul className="hidden md:flex gap-10">
        {["Home", "Tech", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <ul className="hidden md:flex gap-5 items-center">
        <li>
          <a
            href="https://github.com/yudiatmoko"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-lime-500"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/yudiatm0ko"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-red-500"
          >
            <BsInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/ilhamyudiatmoko"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-sky-500"
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="mailto:ilhamyudiatmoko48@gmail.com"
            className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-yellow-500"
          >
            <LuMail />
          </a>
        </li>
      </ul>

      <button
        className="block md:hidden text-4xl z-50"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <BiX /> : <BiMenu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 flex h-screen w-2/3 max-w-xs flex-col items-start border-l border-gray-800 bg-black/90 px-8 pt-32 pb-8 md:hidden"
          >
            <ul className="flex flex-col gap-8 mb-10">
              {["Home", "Tech", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={toggleMenu}
                    className="cursor-pointer text-lg opacity-80 transition-all duration-300 hover:opacity-100"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-6">
              <li>
                <a
                  href="https://github.com/yudiatmoko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-lime-500"
                >
                  <BsGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/yudiatm0ko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-red-500"
                >
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/ilhamyudiatmoko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-sky-500"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="mailto:ilhamyudiatmoko48@gmail.com"
                  className="cursor-pointer text-3xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-yellow-500"
                >
                  <LuMail />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
