import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiKotlin,
  SiFigma,
  SiCanva,
  SiGit,
  SiLaravel,
  SiFlutter,
  SiExpress,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const technologies = [
  {
    name: "React",
    category: "Frontend",
    icon: <SiReact className="text-sky-400 text-3xl" />,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <SiJavascript className="text-yellow-300 text-3xl" />,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
  },

  {
    name: "Node.js",
    category: "Backend",
    icon: <SiNodedotjs className="text-green-500 text-3xl" />,
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: <SiExpress className="text-gray-200 text-3xl" />,
  },
  {
    name: "PHP Laravel",
    category: "Backend",
    icon: <SiLaravel className="text-red-400 text-3xl" />,
  },

  {
    name: "PostgreSQL",
    category: "Database",
    icon: <SiPostgresql className="text-sky-600 text-3xl" />,
  },
  {
    name: "MySQL",
    category: "Database",
    icon: <SiMysql className="text-orange-400 text-3xl" />,
  },
  {
    name: "Firebase",
    category: "Database",
    icon: <SiFirebase className="text-yellow-500 text-3xl" />,
  },

  {
    name: "Kotlin",
    category: "Mobile",
    icon: <SiKotlin className="text-purple-400 text-3xl" />,
  },
  {
    name: "Java",
    category: "Mobile",
    icon: <FaJava className="text-red-400 text-3xl" />,
  },
  {
    name: "Flutter",
    category: "Mobile",
    icon: <SiFlutter className="text-blue-400 text-3xl" />,
  },

  {
    name: "Figma",
    category: "Design",
    icon: <SiFigma className="text-pink-500 text-3xl" />,
  },
  {
    name: "Canva",
    category: "Design",
    icon: <SiCanva className="text-blue-400 text-3xl" />,
  },

  {
    name: "Git",
    category: "Tools",
    icon: <SiGit className="text-orange-500 text-3xl" />,
  },
];

const filters = [
  "All",
  "Mobile",
  "Frontend",
  "Backend",
  "Database",
  "Design",
  "Tools",
];

const Tech = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTechs =
    activeFilter === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === activeFilter);

  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <div
      id="tech"
      className="scroll-mt-10 flex min-h-screen w-full flex-col items-center gap-10 overflow-hidden px-6 py-28 md:px-20"
    >
      <motion.div
        {...fadeInAnimation}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-2xl text-center"
      >
        <h1 className="mb-4 text-4xl font-extrabold text-white">Tech Stack</h1>
        <p className="text-gray-300">
          Tools, frameworks, and technologies I've been working with recently
        </p>
      </motion.div>

      <motion.div
        {...fadeInAnimation}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {filters.map((filter) => (
          <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300
              ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-600 to-pink-600 text-white shadow-lg"
                  : "bg-gray-900 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {filter}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        layout
        {...fadeInAnimation}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4"
      >
        {filteredTechs.map((tech) => (
          <motion.div
            key={tech.name}
            layout
            {...fadeInAnimation}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card
              className="relative flex h-full cursor-pointer flex-col items-start gap-3 border border-gray-700 
  bg-gray-900/80 p-5 transition-all duration-300 hover:border-gray-600 hover:bg-gray-800"
            >
              <CardHeader className="relative z-10 p-0 pb-3">
                {tech.icon}
              </CardHeader>
              <CardContent className="relative z-10 p-0">
                <CardTitle className="mb-1 text-md font-semibold text-white">
                  {tech.name}
                </CardTitle>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
