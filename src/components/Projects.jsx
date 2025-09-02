import React from "react";
import { motion } from "framer-motion";
import gostudyImage from "/public/project-1.png";
import taniCerdasImage from "/public/project-2.png";
import myCashImage from "/public/project-3.png";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/80 transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <CardFooter
          className="absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform
                     justify-center gap-3 p-0 opacity-0 transition-all duration-300 group-hover:opacity-100"
        >
          <Button
            asChild
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <BiLinkExternal className="text-2xl" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 rounded-lg border-0 bg-gray-900 text-gray-300 transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:text-white"
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
              <BiLogoGithub className="text-2xl" />
            </a>
          </Button>
        </CardFooter>
      </div>

      <div className="flex flex-grow flex-col p-6">
        <CardHeader className="p-0 pb-2">
          <CardTitle className="text-xl font-semibold text-white">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-400">
            {project.type || "Project"}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow p-0">
          <p className="text-sm leading-relaxed text-gray-300 text-pretty text-justify">
            {project.description}
          </p>

          <div className="mt-4 flex w-full flex-wrap gap-2">
            {project.techstack.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-lg border-none"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

const Projects = () => {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const projectsData = [
    {
      image: gostudyImage,
      type: "Android App",
      title: "GoStudy",
      description:
        "Designed and developed an Android-based learning application to facilitate digital education, featuring course catalogs and progress tracking.",
      techstack: ["Kotlin", "Firebase", "Git"],
      githubLink: "https://github.com/yudiatmoko/GoStudy-Group4",
      previewLink: "https://github.com/yudiatmoko/GoStudy",
    },
    {
      image: taniCerdasImage,
      type: "Web Platform",
      title: "TaniCerdas",
      description:
        "A web-based platform for farmers, serving as an information center, consultation service, and community space to share knowledge.",
      techstack: ["React", "Tailwind CSS", "MySQL", "Express.js", "Git"],
      githubLink: "https://github.com/yudiatmoko/tani-cerdas",
      previewLink: "https://github.com/yudiatmoko/TaniCerdas",
    },
    {
      image: myCashImage,
      type: "Android App",
      title: "MyCash",
      description:
        "A POS application created to help UMKM manage daily transactions, simplifying operations with sales recording and product management.",
      techstack: ["Kotlin", "PostgreSQL", "Express.js", "Git"],
      githubLink: "https://github.com/yudiatmoko/MyCash-Android",
      previewLink: "https://github.com/yudiatmoko/MyCash",
    },
  ];

  return (
    <div
      id="projects"
      className="scroll-mt-5 flex min-h-screen w-full flex-col items-center gap-10 overflow-hidden px-6 py-32 md:px-20"
    >
      <motion.div
        {...fadeInAnimation}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl text-center"
      >
        <h1 className="mb-4 text-4xl font-extrabold text-white">Projects</h1>
        <p className="text-gray-300">
          Practical applications of my learning and development journey.
        </p>
      </motion.div>

      <div className="grid w-full max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            {...fadeInAnimation}
            transition={{ duration: 0.5, delay: 0.2 * (index + 2) }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
