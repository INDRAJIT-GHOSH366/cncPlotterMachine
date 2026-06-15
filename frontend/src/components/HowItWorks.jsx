import React from "react";
import {
  FaUpload,
  FaCog,
  FaPlay,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";
function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload />,
      title: "Upload Code to Arduino UNO",
      description:
        "Upload your gbrl code to the Arduino UNO.",
    },
    {
      icon: <FaCog />,
      title: "Image to Vector conversion",
      description:
        "Transform your images into vector paths for plotting.",
    },
    {
      icon: <FaPlay />,
      title: "Vector to G Code",
      description:
        "transform your svg vector paths into gbrl code for plotting.",
    },
    {
      icon: <FaChartLine />,
      title: "G-code to Plotting",
      description:
        "Send the gbrl code to the 3D Plotter and watch your designs come to life.",
    },
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-white">
          How It Works
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Follow these simple steps to operate your 3D Plotter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover="hover"
    className="
      relative overflow-hidden
      font-inter p-6 rounded-2xl
      bg-white/10 backdrop-blur-md
      border border-white/10
      hover:bg-white/15
      hover:shadow-[0_0_30px_rgba(108,93,209,0.3)]
      text-center
      transition-all duration-300
    "
  >
    <motion.div
      variants={{
        hover: {
          rotate: 15,
          scale: 1.15,
        },
      }}
      transition={{ duration: 0.3 }}
      className="text-5xl text-[#6c5dd1] drop-shadow-[0_0_15px_rgba(108,93,209,0.8)] flex justify-center mb-4"
    >
      {step.icon}
    </motion.div>

    <h3 className="font-bold text-xl text-white">
      {step.title}
    </h3>

    <p className="mt-3 text-gray-400">
      {step.description}
    </p>
  </motion.div>
))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;