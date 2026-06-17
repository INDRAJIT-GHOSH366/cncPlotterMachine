import React from "react";
import { FaWhatsapp } from "react-icons/fa";


function WhatsAppButton() {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=Hello%20I%20want%20to%20know%20more%20about%20the%203D%20Plotter`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-20
        right-4
        md:bottom-6
        md:right-6
        z-[9999]
        w-16
        h-16
        md:w-18
        md:h-18
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
      <FaWhatsapp className="text-white text-4xl md:text-5xl" />
    </a>
  );
}

export default WhatsAppButton;