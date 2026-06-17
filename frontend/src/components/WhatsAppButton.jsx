import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8391853609?text=Hello%20I%20want%20to%20know%20more%20about%20the%203D%20Plotter"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-5
        right-5
        md:bottom-6
        md:right-6
        z-[9999]
        w-14
        h-14
        md:w-16
        md:h-16
        rounded-full
        bg-[#25D366]
        flex
        items-center
        justify-center
        shadow-[0_0_25px_rgba(37,211,102,0.5)]
        hover:scale-110
        hover:shadow-[0_0_35px_rgba(37,211,102,0.7)]
        transition-all
        duration-300
      "
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl md:text-4xl" />
    </a>
  );
}

export default WhatsAppButton;