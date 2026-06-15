import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />

              <h2 className="text-2xl font-bold text-white">3D Plotter</h2>
            </div>

            <p className="mt-4 text-gray-400 max-w-sm">
              A modern web dashboard to monitor, control and manage your CNC /
              3D Plotter workflow from anywhere.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-gray-400 hover:text-[#6c5dd1] transition"
                onClick={() => window.location.href = "/"}
              >
                Home
              </Link>

              <Link
                to="/get-started"
                className="text-gray-400 hover:text-[#6c5dd1] transition"
              >
                Get Started
              </Link>

              <a
                href="/docs/3D_Plotter_Setup_Guide.pdf"
                download
                className="text-gray-400 hover:text-[#6c5dd1] transition"
              >
                Resources
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>

            <div className="flex gap-5">
              <a
                href="https://github.com/INDRAJIT-GHOSH366"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3 rounded-xl
                  bg-white/5
                  border border-white/10
                  hover:bg-[#6c5dd1]/20
                  hover:border-[#6c5dd1]/30
                  transition-all duration-300
                "
              >
                <FaGithub className="text-white text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/indrajit-ghosh-5a9938401"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3 rounded-xl
                  bg-white/5
                  border border-white/10
                  hover:bg-[#6c5dd1]/20
                  hover:border-[#6c5dd1]/30
                  transition-all duration-300
                "
              >
                <FaLinkedin className="text-white text-xl" />
              </a>

              <a
                href="https://www.instagram.com/indrajit.gh?igsh=eXU4NXhueDdnaXA1"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3 rounded-xl
                  bg-white/5
                  border border-white/10
                  hover:bg-[#6c5dd1]/20
                  hover:border-[#6c5dd1]/30
                  transition-all duration-300
                "
              >
                <FaInstagram className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>© 2026 3D Plotter Web App. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
