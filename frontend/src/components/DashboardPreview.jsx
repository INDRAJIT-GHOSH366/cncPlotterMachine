import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChartLine,
  FaUpload,
  FaRobot,
} from "react-icons/fa";

import img1 from "../assets/dashboard1.jpeg";
import img2 from "../assets/dashboard2.jpeg";
import img3 from "../assets/dashboard3.jpeg";
import img4 from "../assets/dashboard4.jpeg";
import img5 from "../assets/dashboard5.jpeg";
import img6 from "../assets/dashboard6.jpeg";

function DashboardPreview() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    },2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-white">
          Advanced Control Dashboard
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16 max-w-3xl mx-auto">
          Monitor machine status, upload G-Code files,
          and control your plotting workflow in real time.
        </p>

        {/* Main Container */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                bg-black/40
                border border-white/10
                rounded-2xl
                p-6
                hover:shadow-[0_0_25px_rgba(108,93,209,0.3)]
                transition-all
              "
            >
              <motion.div
                whileHover={{
                  rotate: 15,
                  scale: 1.2,
                }}
                transition={{ duration: 0.3 }}
                className="text-[#6c5dd1] text-4xl mb-4"
              >
                <FaRobot />
              </motion.div>

              <h3 className="text-white text-xl font-semibold">
                Machine Status
              </h3>

              <p className="text-green-400 mt-2">
                Connected & Ready
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                bg-black/40
                border border-white/10
                rounded-2xl
                p-6
                hover:shadow-[0_0_25px_rgba(108,93,209,0.3)]
                transition-all
              "
            >
              <motion.div
                whileHover={{
                  rotate: 15,
                  scale: 1.2,
                }}
                transition={{ duration: 0.3 }}
                className="text-[#6c5dd1] text-4xl mb-4"
              >
                <FaUpload />
              </motion.div>

              <h3 className="text-white text-xl font-semibold">
                File Upload
              </h3>

              <p className="text-gray-400 mt-2">
                SVG & G-Code Support
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                bg-black/40
                border border-white/10
                rounded-2xl
                p-6
                hover:shadow-[0_0_25px_rgba(108,93,209,0.3)]
                transition-all
              "
            >
              <motion.div
                whileHover={{
                  rotate: 15,
                  scale: 1.2,
                }}
                transition={{ duration: 0.3 }}
                className="text-[#6c5dd1] text-4xl mb-4"
              >
                <FaChartLine />
              </motion.div>

              <h3 className="text-white text-xl font-semibold">
                Live Monitoring
              </h3>

              <p className="text-gray-400 mt-2">
                Real-Time Tracking
              </p>
            </motion.div>

          </div>

          {/* Dashboard Preview */}
          <div className="mt-12">

            <h3 className="text-white text-2xl font-semibold mb-6">
              Dashboard Preview
            </h3>

            <div
              className="
                overflow-hidden
                rounded-2xl
                border border-white/10
                bg-black/30
                shadow-[0_0_40px_rgba(108,93,209,0.15)]
              "
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt="Dashboard Preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="
                    w-full
                    h-[550px]
                    object-contain
                    hover:scale-[1.02]
                    transition-all
                    duration-500
                  "
                />
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrentImage(index)
                  }
                  className={`h-3 w-3 rounded-full transition-all ${
                    currentImage === index
                      ? "bg-[#6c5dd1] scale-125"
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-4 text-gray-500">
              {currentImage + 1} / {images.length}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;