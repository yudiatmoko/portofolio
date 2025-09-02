import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-6 flex min-h-screen w-full items-center justify-center py-32 md:px-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="floating">
            <img
              src="/profile-img.png"
              alt="Ilham Yudiatmoko"
              className="profile-img w-[250px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 min-w-[250px] md:w-[350px]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex max-w-[700px] flex-col items-center justify-center gap-3 text-center md:items-start md:text-left">
            <h1 className="text-white text-2xl font-semibold md:text-4xl">
              Hello, World!
            </h1>
            <h3 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl font-bold md:text-6xl min-h-[5rem] md:min-h-0">
              <Typewriter
                words={["I'm Ilham Yudiatmoko", "I'm a Mobile Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1500}
              />
            </h3>
            <p className="lg:mr-[100px] md:text-base text-pretty text-sm md:text-justify text-center text-gray-300">
              Specializing in Android Native, React, and Express.js. I build
              clean, scalable, and high-performance applications designed to
              deliver exceptional user experiences. Let's build something great
              together!
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <motion.div
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <a href="#contact" className="inline-block" scroll={false}>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-800 hover:to-pink-800 text-white shadow-lg shadow-blue-500/25 border-0 rounded-lg"
                    onClick={() => {
                      setTimeout(() => {
                        document.getElementById("about")?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }, 100);
                    }}
                  >
                    Contact Me
                    <BsArrowRight className="ml-2" />
                  </Button>
                </a>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href="/cv_ilham_yudiatmoko.pdf"
                  download="cv_ilham_yudiatmoko.pdf"
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    className="border-2 border-gray-800 bg-gray-900 text-white hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    Download CV
                    <BsDownload className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
