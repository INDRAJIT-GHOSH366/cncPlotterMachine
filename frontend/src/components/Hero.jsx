import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-inter text-6xl md:text-7xl font-extrabold text-white leading-tight"
      >
        Control Your 3D Plotter
      
      </motion.h1>

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <TypeAnimation
          sequence={[
            "Monitor your CNC machine in real time....",
            2000,
            "Manage your 3D Plotter effortlessly....",
            2000,
            "Control your workflow from anywhere....",
            2000,
            "Generate G-Code and start plotting....",
            2000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          className="mt-8 text-xl font-inter md:text-2xl font-medium font-inter text-gray-400 max-w-3xl"
        />
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row gap-4 mt-10"
      >
        <Link
          to="/get-started"
          className="
            px-8 py-4
            bg-[#6c5dd1]/20
            backdrop-blur-xl
            border border-[#6c5dd1]/30
            text-white
            rounded-xl
            font-semibold
            hover:bg-[#6c5dd1]/30
            hover:scale-105
            transition-all duration-300
            shadow-[0_0_25px_rgba(108,93,209,0.25)]
          "
        >
          Get Started
        </Link>

        
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        <div>
          <h3 className="text-3xl font-bold text-white">GRBL</h3>
          <p className="text-gray-400 mt-2">
            Firmware Support
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">
            Real-Time
          </h3>
          <p className="text-gray-400 mt-2">
            Machine Monitoring
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">
            Web Based
          </h3>
          <p className="text-gray-400 mt-2">
            Remote Control
          </p>
        </div>
      </motion.div>



    </div>
  );
}

export default Hero;