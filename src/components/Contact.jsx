import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  BsCheck2Circle,
  BsExclamationTriangle,
  BsSend,
  BsTelephone,
} from "react-icons/bs";
import { LuMail, LuMapPin } from "react-icons/lu";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState("idle");

  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus("loading");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setFormStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setFormStatus("error");
        }
      );
  };

  useEffect(() => {
    if (formStatus === "success" || formStatus === "error") {
      const timer = setTimeout(() => {
        setFormStatus("idle");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const getButtonContent = () => {
    switch (formStatus) {
      case "loading":
        return "Sending...";
      case "success":
        return (
          <>
            Message Sent!
            <BsCheck2Circle className="mr-2" />
          </>
        );
      case "error":
        return (
          <>
            Send Failed
            <BsExclamationTriangle className="mr-2" />
          </>
        );
      default:
        return (
          <>
            Send Message <BsSend className="ml-2 text-xl" />
          </>
        );
    }
  };

  const getButtonClassName = () => {
    switch (formStatus) {
      case "success":
        return "bg-green-600 hover:bg-green-700";
      case "error":
        return "bg-red-600 hover:bg-red-700";
      default:
        return "bg-gradient-to-r from-blue-600 to-pink-600";
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-6 flex min-h-screen w-full overflow-hidden px-6 py-32 md:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          {...fadeInAnimation}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-extrabold text-white">Get In Touch</h1>
          <p className="mt-4 text-gray-400">
            I'm open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-y-28 md:grid-cols-2 md:gap-x-20">
          <motion.div
            {...fadeInAnimation}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Contact Information
            </h2>
            <p className="mb-8 text-gray-400">
              Feel free to reach out to me any time.
            </p>
            <div className="flex flex-col gap-6 text-white">
              <a
                href="mailto:ilhamyudiatmoko48@gmail.com"
                className="flex items-center gap-4 transition-colors hover:text-blue-400"
              >
                <LuMail size={20} />
                <span>ilhamyudiatmoko48@gmail.com</span>
              </a>
              <a
                href="https://wa.me/6283188923902"
                className="flex items-center gap-4 transition-colors hover:text-blue-400"
              >
                <BsTelephone size={20} />
                <span>+62 831-8892-3902</span>
              </a>
              <div className="flex items-center gap-4">
                <LuMapPin size={20} />
                <span>Bekasi Regency, Indonesia</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInAnimation}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Say Something
            </h2>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-6"
            >
              <Input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="border-gray-700 bg-gray-800 text-white focus:ring-blue-500"
              />
              <Input
                type="email"
                name="user_email"
                placeholder="Your Email Address"
                required
                className="border-gray-700 bg-gray-800 text-white focus:ring-blue-500"
              />
              <Input
                type="text"
                name="title"
                placeholder="Subject"
                className="border-gray-700 bg-gray-800 text-white focus:ring-blue-500"
              />
              <Textarea
                name="message"
                placeholder="Message"
                required
                className="min-h-[150px] border-gray-700 bg-gray-800 text-white focus:ring-blue-500"
              />

              <Button
                type="submit"
                disabled={formStatus !== "idle"}
                className={`flex items-center justify-center gap-2 w-full rounded-lg text-white shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-100 disabled:scale-100 disabled:cursor-not-allowed ${getButtonClassName()}`}
              >
                {getButtonContent()}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
