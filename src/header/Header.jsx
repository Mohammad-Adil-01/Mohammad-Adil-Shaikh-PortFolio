import React from "react";
import { motion } from "motion/react";

const navItems = [
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Certifications",
    href: "#certificate",
  },
  {
    name: "Network",
    href: "#network",
  },
];

const Header = () => {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -30,
        filter: "blur(12px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">

        {/* Logo / Name */}
        <motion.a
          href="#"
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="shrink-0 rounded-full border border-black/[0.08] bg-white/80 px-4 py-2.5 text-sm font-bold tracking-tight text-black shadow-sm backdrop-blur-xl sm:px-5 sm:text-base"
        >
          <span className="hidden sm:inline">
            Mohammad Adil Shaikh
          </span>

          <span className="sm:hidden">
            MAS
          </span>
        </motion.a>

        {/* Navigation */}
        <nav className="hidden md:block">
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 0.2,
                },
              },
            }}
            className="flex items-center gap-1 rounded-full border border-black/[0.08] bg-white/75 p-1.5 shadow-sm backdrop-blur-xl"
          >
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                <a
                  href={item.href}
                  className="group relative block rounded-full px-3 py-2 text-xs font-medium text-gray-600 transition-all duration-300 hover:bg-black/[0.05] hover:text-black lg:px-4 lg:text-sm"
                >
                  {item.name}

                  {/* Hover Line */}
                  <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-black transition-all duration-300 group-hover:w-1/2" />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="hidden items-center gap-2 rounded-full bg-black px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-gray-800 sm:flex sm:px-5 sm:text-sm"
        >
          Contact
          <span className="text-sm">↗</span>
        </motion.a>

        {/* Mobile Contact */}
        <motion.a
          href="#contact"
          whileTap={{
            scale: 0.94,
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm text-white shadow-lg shadow-black/10 sm:hidden"
        >
          ↗
        </motion.a>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.4,
          duration: 0.5,
        }}
        className="mt-3 flex justify-center md:hidden"
      >
        <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-black/[0.08] bg-white/80 p-1.5 shadow-sm backdrop-blur-xl scrollbar-hide">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="shrink-0 rounded-full px-3 py-2 text-[11px] font-medium text-gray-600 transition-all duration-300 hover:bg-black/[0.05] hover:text-black"
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;