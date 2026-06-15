import React, { useState } from "react";
import { motion } from "framer-motion";

function FeatureCard({ title, description, icon }) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover="hover"
      onMouseMove={handleMouseMove}
      className="
        relative 
        font-inter p-6 rounded-2xl
        bg-white/10 backdrop-blur-md
        border border-white/10
        hover:bg-white/15
        hover:shadow-[0_0_30px_rgba(108,93,209,0.3)]
        transition-all duration-300
      "
    >
      {/* Cursor Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            200px circle at ${position.x}px ${position.y}px,
            rgba(108,93,209,0.25),
            transparent 70%
          )`,
        }}
      />

      {/* Icon */}
      <motion.div
        variants={{
          hover: {
            rotate: 15,
            scale: 1.2,
          },
        }}
        transition={{ duration: 0.3 }}
        className="relative z-10 text-4xl mb-4 text-[#6c5dd1]"
      >
        {icon}
      </motion.div>

      {/* Title */}
      <motion.h3
        variants={{
          hover: {
            y: -2,
          },
        }}
        className="relative z-10 font-bold text-xl text-white"
      >
        {title}
      </motion.h3>

      {/* Description */}
      <p className="relative z-10 mt-3 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;