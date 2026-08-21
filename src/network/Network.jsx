import React from "react";
import { motion } from "motion/react";

const Network = () => {
  const networks = [
    {
      name: "GitHub",
      description: "Explore my projects, experiments, and source code.",
      href: "https://github.com/",
      icon: "⌘",
      label: "View Profile",
    },
    {
      name: "LinkedIn",
      description: "Connect with me professionally and follow my journey.",
      href: "https://www.linkedin.com/",
      icon: "in",
      label: "Connect",
    },
    {
      name: "Email",
      description: "Have an opportunity or idea? Let's start a conversation.",
      href: "mailto:your-email@example.com",
      icon: "@",
      label: "Send Email",
    },
  ];

  return (
    <section
      id="network"
      className="relative w-full overflow-hidden bg-white px-4 py-20 text-black sm:px-8 md:px-12 lg:px-20"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl" />

      {/* Section Header */}
      <div className="relative z-10 mx-auto mb-12 max-w-3xl text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-sm font-medium text-gray-600 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Let's Connect
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          My Network
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 md:text-base"
        >
          Connect with me across different platforms and stay updated with my
          latest work, projects, and professional journey.
        </motion.p>
      </div>

      {/* Network Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-3"
      >
        {networks.map((network, index) => (
          <NetworkCard
            key={network.name}
            network={network}
            index={index}
          />
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        className="relative z-10 mx-auto mt-12 max-w-3xl text-center"
      >
        <div className="rounded-2xl border border-black/[0.07] bg-gray-50/70 px-6 py-8">
          <p className="text-lg font-semibold text-gray-900">
            Open to new opportunities
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Whether it's a project, collaboration, internship, or simply a
            conversation about technology.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
          >
            Get in Touch
            <span>↗</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Network;


/* =========================================================
   NETWORK CARD
========================================================= */

function NetworkCard({ network, index }) {
  return (
    <motion.a
      href={network.href}
      target={network.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={
        network.href.startsWith("mailto:")
          ? undefined
          : "noopener noreferrer"
      }
      variants={{
        hidden: {
          opacity: 0,
          y: 35,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
      whileHover={{
        y: -7,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-3xl border border-black/[0.08] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-black/15 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
    >
      {/* Number */}
      <div className="absolute right-5 top-5 text-xs font-semibold text-gray-300">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Icon */}
      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 3,
        }}
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white shadow-lg"
      >
        {network.icon}
      </motion.div>

      {/* Content */}
      <div className="mt-7">
        <h3 className="text-xl font-bold tracking-tight text-gray-900">
          {network.name}
        </h3>

        <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
          {network.description}
        </p>
      </div>

      {/* Link */}
      <div className="mt-7 flex items-center justify-between border-t border-black/[0.07] pt-4">
        <span className="text-xs font-semibold text-gray-700">
          {network.label}
        </span>

        <motion.span
          className="text-lg text-gray-400 transition-colors duration-300 group-hover:text-black"
          whileHover={{
            x: 4,
            y: -4,
          }}
        >
          ↗
        </motion.span>
      </div>
    </motion.a>
  );
}