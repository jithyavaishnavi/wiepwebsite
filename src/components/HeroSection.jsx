import React from "react";
import { FaDiscord } from "react-icons/fa";
import Spline from '@splinetool/react-spline/next';

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white min-h-screen overflow-hidden">
    {/* 🔮 Fullscreen Responsive Spline Background */}
    <div className="absolute inset-0 z-0 w-full h-full">
      <Spline
        scene="https://prod.spline.design/A1tAo0vjb7phuODp/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  
   



      {/* 🧭 Navbar */}
      <nav className="relative z-10 w-full flex justify-center items-center py-6 px-6 sm:px-10 md:px-16 lg:px-24 text-xl">
        <ul className="hidden md:flex space-x-8 text-lg font-light text-white/80">
          <li><a href="#about" className="hover:text-white transition-colors duration-300">About</a></li>
          <li><a href="#events" className="hover:text-white transition-colors duration-300">Events</a></li>
          <li><a href="#study-groups" className="hover:text-white transition-colors duration-300">Study Groups</a></li>
          <li><a href="#membership" className="hover:text-white transition-colors duration-300">Membership</a></li>
          <li><a href="#collaborate" className="hover:text-white transition-colors duration-300">Collaborate</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
        </ul>
        <div className="md:hidden absolute top-6 right-6">
          <button className="text-white focus:outline-none">☰</button>
        </div>
      </nav>

      {/* 🚀 Hero Content */}
      <div className="relative z-10 w-full h-full max-w-8xl mx-auto mt-10 md:mt-24">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-16">
          <div className="max-w-6xl mx-auto">
            <p className="text-lg md:text-4xl font-medium">
              <span className="text-[32px] sm:text-[40px] font-extrabold text-[#C8A2C8] mb-6">Women</span> in Ethereum Protocol
            </p>

            <h1 className="mt-4 text-5xl md:text-8xl font-extrabold leading-tight tracking-tight">
              Empowering Diversity <br />
              in <span className="text-[#C8A2C8]">Ethereum's</span> Future
            </h1>

            <p className="mt-6 text-sm md:text-base text-white/90 max-w-2xl leading-relaxed">
              Women in Ethereum Protocol (WiEP) is a community advancing gender diversity in
              the Ethereum ecosystem, fostering <span className="text-[#C8A2C8] font-semibold">innovation, collaboration, and inclusivity</span>,
              building a decentralized future where every voice matters.
            </p>

            <a
              href="https://discord.com/invite/example"
              className="mt-8 inline-flex items-center space-x-3 bg-[#C8A2C8] text-white font-medium text-sm px-6 py-3 rounded-full shadow-md hover:bg-black hover:border-[#C8A2C8]hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#a9a1f2] focus:ring-offset-2"
            >
              <FaDiscord className="w-5 h-5" />
              <span>Join Discord Server</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
