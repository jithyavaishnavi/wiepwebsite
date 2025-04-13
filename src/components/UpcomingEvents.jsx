"use client";  // This will make this file a Client Component

import React from "react";
import { motion } from "framer-motion";

const UpcomingEvents = () => {
  const events = [
    {
      title: "Introduction to Blockchain",
      description:
        "Learn best practices for writing secure smart contracts and identifying common vulnerabilities",
      date: "April 22, 2024",
    },
    {
      title: "Introduction to Blockchain",
      description:
        "Learn best practices for writing secure smart contracts and identifying common vulnerabilities",
      date: "April 22, 2024",
    },
    {
      title: "Introduction to Blockchain",
      description:
        "Learn best practices for writing secure smart contracts and identifying common vulnerabilities",
      date: "April 22, 2024",
    },
  ];

  return (
    <section className="bg-black text-[#C8A2C8] px-4 sm:px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#FFFFFF] mb-6">
          UPCOMING EVENTS
        </h2>
        <p className="text-gray-300 text-[14px] sm:text-[16px] max-w-3xl leading-relaxed mb-12">
          Join our vibrant community events where women and allies come together
          to learn and grow. From hands-on workshops to expert-led talks, there's
          something for everyone. Connect with like-minded individuals passionate
          about Ethereum and blockchain technology. Collaborate on exciting
          projects, share your ideas, and expand your network. Together, we’re
          building a more inclusive and diverse Ethereum ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="bg-[#C8A2C8] text-white p-6 rounded-xl shadow-md flex flex-col justify-between h-full transform transition-all hover:scale-105 hover:shadow-lg">
                <div className="flex flex-col mb-4 gap-1">
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <span className="text-sm text-white-600 font-semibold">
                    {event.date}
                  </span>
                </div>
                <p className="text-sm text-white-700 mb-6">
                  {event.description}
                </p>
                <button className="bg-white hover:bg-transparent hover:border hover:border-white hover:text-white transition duration-300 px-4 py-2 rounded text-[#C8A2C8] text-[12px] font-medium px-5 py-2 rounded-full flex items-center justify-center gap-2">
                  REGISTER NOW!
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
