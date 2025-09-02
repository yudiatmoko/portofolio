import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="fixed top-0 -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Navbar />
      <main className="flex flex-col items-center px-6 sm:px-12 md:px-20">
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
