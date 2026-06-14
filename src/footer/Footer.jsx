import React from "react";
import github from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";
import x from "../assets/x.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-black text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Mohammad Adil<span className="text-cyan-400"> .DEV</span>
            </h2>

            <p className="mt-5 text-white/80 leading-relaxed">
              Junior Full Stack Developer specializing in the MERN Stack.
              Passionate about building scalable web applications,
              integrating AI solutions, and creating user-focused digital
              experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/Mohammad-Adil-01"
                target="_blank"
                rel="noreferrer"
                className="bg-white/90 p-3 rounded-lg hover:bg-zinc-500/100 transition"
              >
                <img src={github} alt="Github" className="w-6 h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammad-adil-shaikh-166822301/"
                target="_blank"
                rel="noreferrer"
                className="bg-white/90 p-3 rounded-lg hover:bg-zinc-500/100 transition"
              >
                <img src={linkedIn} alt="LinkedIn" className="w-6 h-6" />
              </a>

              <a
                href="https://x.com/Adil2486"
                target="_blank"
                rel="noreferrer"
                className="bg-white/90 p-3 rounded-lg hover:bg-zinc-500/100 transition"
              >
                <img src={x} alt="X" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Navigation</h3>

            <ul className="space-y-3 text-white/80">
              <li>
                <a
                  href="#skills"
                  className="text-white/80 hover:text-cyan-400 transition"
                >
                  Technical Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-white/80 hover:text-cyan-400 transition"
                >
                  Latest Projects
                </a>
              </li>

              <li>
                <a
                  href="#education"
                  className="text-white/80 hover:text-cyan-400 transition"
                >
                  Academic Profile
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-cyan-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Get In Touch</h3>

            <div className="space-y-3 text-white/80">
              <p>Mumbai, Maharashtra, India</p>

              <a
                href="mailto:mohammadadil2486@gmail.com"
                className="block hover:text-cyan-400 transition"
              >
                mohammadadil2486@gmail.com
              </a>

              <a
                href="tel:+919833261164"
                className="block hover:text-cyan-400 transition"
              >
                +91 9833261164
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for Opportunities
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 mt-12 pt-6">

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/80 text-sm">
            <p className="text-white/80">
              © {year} Mohammad Adil Shaikh. All Rights Reserved.
            </p>

            <p className="text-white/80">
              Built with React, Tailwind CSS & ❤️
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;