import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

function CTASection() {
  return (
    <section className="bg-black py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative
          max-w-5xl
          mx-auto
          text-center
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-12
          overflow-hidden
        "
      >
        {/* Background Glow */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,rgba(108,93,209,0.15),transparent_70%)]
            pointer-events-none
          "
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Badge */}
          <div
            className="
              inline-block
              mb-6
              px-4
              py-2
              rounded-full
              border
              border-[#6c5dd1]/30
              bg-[#6c5dd1]/10
              text-[#6c5dd1]
              text-sm
              font-medium
            "
          >
            Complete Setup & Start Plotting
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-bold text-white leading-tight">
            Ready to Build with Your
            <span
              className="
                block
                mt-2
                text-[#6c5dd1]
                drop-shadow-[0_0_20px_rgba(108,93,209,0.6)]
              "
            >
              3D Plotter?
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
            Access setup guides, required software, firmware resources,
            and start controlling your plotter machine from a modern
            web dashboard.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
           

            <a
              href="/docs/3D_Plotter_Setup_Guide.pdf"
              download
              className="
                flex items-center justify-center gap-2
                px-8 py-4
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                text-white
                rounded-xl
                font-semibold
                hover:bg-white/10
                hover:scale-105
                transition-all duration-300
              "
            >
              <FaDownload />
              Setup Resources
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CTASection;