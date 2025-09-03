import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-700 bg-black/70 px-6 py-10 backdrop-blur-md md:px-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
        <div>
          <h3 className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-2xl font-extrabold text-transparent">
            Yudiatmoko
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            A passionate mobile developer focused on creating impactful and
            user-friendly applications.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 flex flex-col gap-2">
            {["home", "tech", "projects", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Connect</h4>
          <ul className="mt-4 flex justify-center gap-5 md:justify-start">
            <li>
              <a
                href="https://github.com/yudiatmoko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 transition-colors hover:text-lime-500"
              >
                <BsGithub />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/yudiatm0ko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 transition-colors hover:text-red-500"
              >
                <BsInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/ilhamyudiatmoko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 transition-colors hover:text-sky-500"
              >
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        <p>
          Powered by coffee & code — Ilham Yudiatmoko © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
