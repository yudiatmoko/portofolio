import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { BsMailbox, BsPhone, BsSend, BsTelephone } from "react-icons/bs";
import { LuMail, LuMapPin } from "react-icons/lu";

const Contact = () => {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
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

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <motion.div
            {...fadeInAnimation}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Contact Information
            </h2>
            <p className="mb-8 text-gray-400">
              Feel free to reach out to me any time. I prefer to discuss by
              email, particularly for initial contact.
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
                <span>Bekasi, Indonesia</span>
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
            <form className="flex flex-col gap-6">
              <Input
                type="text"
                placeholder="Your Name"
                className="border-gray-700 bg-gray-800 text-white focus:ring-blue-500"
              />
              <Input
                type="email"
                placeholder="Your Mail"
                className="border-gray-700 bg-gray-800 text-white focus:ring-blue-500"
              />
              <Textarea
                placeholder="Message"
                className="min-h-[150px] border-gray-700 bg-gray-800 text-white focus:ring-blue-500"
              />
              <Button className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-lg transition-all duration-300 hover:scale-105">
                Send Message
                <BsSend className="text-2xl" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
