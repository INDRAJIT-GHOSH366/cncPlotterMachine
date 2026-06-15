import React from "react";
import FeatureCard from "./FeatureCard";

import { FaUpload, FaRobot, FaChartLine } from "react-icons/fa";
import { MdSettingsRemote } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";

function FeatureSection() {
  const features = [
    {
      title: "Real-Time Monitoring",
      description:
        "Monitor machine status and progress in real time.",
      icon: <FaRobot />,
    },
    {
      title: "Design Upload",
      description:
        "Upload design files directly from the dashboard.",
      icon: <FaUpload />,
    },
    {
      title: "Remote Control",
      description:
        "Start, stop and control plotting operations remotely.",
      icon: <MdSettingsRemote />,
    },
    {
      title: "Live Analytics",
      description:
        "Track performance and machine usage statistics.",
      icon: <FaChartLine />,
    },
    {
      title: "Smart Notifications",
      description:
        "Receive alerts when jobs complete or errors occur.",
      icon: <IoNotifications />,
    },
    {
      title: "Machine Settings",
      description:
        "Configure machine parameters and calibration.",
      icon: <FiSettings />,
    },
  ];

  return (
    <section className="font-inter py-24 px-6 bg-black">
      <h2 className="font-inter text-5xl font-extrabold text-center text-white">
        Features
      </h2>

      <p className="font-inter text-center text-gray-400 mt-4 font-medium mb-12">
        Everything you need to manage your 3D Plotter Machine.
      </p>

      <div className=" font-inter max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;