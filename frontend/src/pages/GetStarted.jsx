import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaPlay,
  FaImage,
  FaCode,
  FaMicrochip,
  FaArrowLeft,
} from "react-icons/fa";

function GetStarted() {
  const software = [
    {
      name: "Arduino IDE",
      link: "https://www.arduino.cc/en/software",
      icon: <FaMicrochip />,
    },
    {
      name: "Inkscape",
      link: "https://inkscape.org",
      icon: <FaImage />,
    },
    {
      name: "JSCut",
      link: "https://jscut.org",
      icon: <FaCode />,
    },
    {
      name: "Universal G-Code Sender",
      link: "https://winder.github.io/ugs_website/",
      icon: <FaPlay />,
    },
  ];

  return (
    <div className="min-h-screen bg-black font-inter text-white">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <FaArrowLeft />
            <span>Back</span>
          </Link>

          <h1 className="flex-1 font-inter text-center text-2xl font-bold">
            3D Plotter Setup Guide
          </h1>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold font-inter ">Get Started</h1>

        <p className="mt-6 text-xl font-inter  text-gray-400">
          Follow these steps to setup your machine before using the dashboard.
        </p>
      </div>

      {/* Software */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold font-inter  mb-10">Required Software</h2>

        <div className="grid md:grid-cols-2 font-inter  lg:grid-cols-4 gap-6">
          {software.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              onClick={() => window.open(item.link, "_blank")}
              className="
        cursor-pointer
        font-inter
        p-6 rounded-2xl
        bg-white/10 backdrop-blur-md
        font-inter 
        border border-white/10
        hover:bg-white/15
        hover:shadow-[0_0_30px_rgba(108,93,209,0.3)]
        transition-all duration-300
      "
            >
              <motion.div
                whileHover={{
                  rotate: 15,
                  scale: 1.2,
                }}
                transition={{ duration: 0.3 }}
                className="text-5xl mb-4 text-[#6c5dd1]"
              >
                {item.icon}
              </motion.div>

              <h3 className="font-bold font-inter  text-white">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-inter  font-bold mb-10">Setup Process</h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <motion.div
            whileHover={{ x: 10, scale: 1.01 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(108,93,209,0.25)] transition-all duration-300"
          >
            <h3 className="text-2xl font-inter  font-semibold text-white">
              Step 1: Connect Arduino UNO
            </h3>

            <p className="text-gray-400 font-inter mt-3">
              Connect your Arduino UNO board to your laptop using a USB cable.
              Ensure the board is detected correctly before proceeding.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            whileHover={{ x: 10, scale: 1.01 }}
            className="bg-white/10 font-inter backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(108,93,209,0.25)] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-white">
              Step 2: Download GRBL Firmware
            </h3>

            <p className="text-gray-400 font-inter  mt-3">
              Download the GRBL firmware source code from the GitHub repository
              provided below.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            whileHover={{ x: 10, scale: 1.01 }}
            className="bg-white/10 font-inter backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(108,93,209,0.25)] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold font-inter  text-white">
              Step 3: Upload GRBL Firmware to Arduino
            </h3>

            <p className="text-gray-400 font-inter  mt-3">
              Open Arduino IDE, load the downloaded GRBL firmware and upload it
              to the Arduino UNO board.
            </p>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            whileHover={{ x: 10, scale: 1.01 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(108,93,209,0.25)] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold font-inter  text-white">
              Step 4: Prepare Your Image
            </h3>

            <p className="text-gray-400 font-inter  mt-3">
              Choose the image you want to draw using the 3D Plotter.
              High-contrast black and white images generally work best.
            </p>
          </motion.div>

          {/* Step 5 */}
          <motion.div
            whileHover={{ x: 10, scale: 1.01 }}
            className="bg-white/10 backdrop-blur-md border font-inter  border-white/10 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(108,93,209,0.25)] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold font-inter  text-white">
              Step 5: Convert Image to SVG
            </h3>

            <p className="text-gray-400 font-inter  mt-3">
              Open Inkscape and use Trace Bitmap to convert the selected image
              into SVG vector format.
            </p>
          </motion.div>

          {/* Step 6 */}
          <motion.div
            whileHover={{ x: 10, scale: 1.01 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(108,93,209,0.25)] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold font-inter  text-white">
              Step 6: Generate G-Code
            </h3>

            <p className="text-gray-400 font-inter  mt-3">
              Upload the SVG file to JSCut and generate the required G-Code
              instructions for plotting.
            </p>
          </motion.div>

          {/* Step 7 */}
          <motion.div
            whileHover={{ x: 10, scale: 1.01 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(108,93,209,0.25)] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold font-inter  text-white">
              Step 7: Connect Using Universal G-Code Sender
            </h3>

            <p className="text-gray-400 font-inter  mt-3">
              Open Universal G-Code Sender (UGS), select the correct COM port,
              and connect to the Arduino running GRBL.
            </p>
          </motion.div>

          {/* Step 8 */}
          <motion.div
            whileHover={{ x: 10, scale: 1.01 }}
            className="bg-white/10 backdrop-blur-md border font-inter  border-white/10 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(108,93,209,0.25)] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold font-inter  text-white">
              Step 8: Start Plotting
            </h3>

            <p className="text-gray-400 font-inter  mt-3">
              Load the generated G-Code file into UGS and start the plotting
              process. Your 3D Plotter will begin drawing automatically.
            </p>
          </motion.div>
        </div>
      </div>

      {/* GitHub */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="
    bg-white/10
    backdrop-blur-md
    border border-white/10
    rounded-3xl
    p-10
    text-center
    hover:shadow-[0_0_35px_rgba(108,93,209,0.25)]
    transition-all duration-300
    font-inter 
  "
      >
        <FaGithub className="text-6xl mx-auto mb-6 text-[#6c5dd1]" />

        <h2 className="text-3xl font-bold font-inter  text-white">
          GRBL Firmware Repository
        </h2>

        <p className="text-gray-400 font-inter  mt-4">
          Download the firmware before uploading it to Arduino.
        </p>

        <a
          href="https://github.com/TGit-Tech/GRBL-28byj-48"
          target="_blank"
          rel="noopener noreferrer"
          className="
      inline-block mt-6 px-8 py-4
      bg-[#6c5dd1]/20
      backdrop-blur-xl
      border border-[#6c5dd1]/30
      text-white
      rounded-xl
      font-semibold
      hover:bg-[#6c5dd1]/30
      transition-all duration-300
    "
        >
          Open GitHub Repository
        </a>
      </motion.div>

      {/* Dashboard CTA */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold font-inter  text-white">Setup Complete?</h2>

        <p className="text-gray-400 font-inter  mt-4">
          Start using your 3D Plotter Dashboard.
        </p>

        <Link
          to="/"
          className="
    inline-block mt-8 px-8 py-4
    bg-[#6c5dd1]/20
    backdrop-blur-xl
    border border-[#6c5dd1]/30
    text-white
    rounded-xl
    font-semibold
    hover:bg-[#6c5dd1]/30
    hover:scale-105
    transition-all duration-300
    font-inter 
  "
        >
          Open Dashboard
        </Link>
      </div>
    </div>
  );
}

export default GetStarted;
