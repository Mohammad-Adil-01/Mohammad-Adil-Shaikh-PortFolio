import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useActionState } from "react";
import axios from "axios";

async function handleClick(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    const res = await axios.post("http://localhost:5000/contact", {
      name,
      email,
      message,
    });

    return {
      success: true,
      message: res.data?.message || "Message sent successfully!",
    };
  } catch (err) {
    return {
      success: false,
      message: "Unable to send your message. Please try again.",
    };
  }
}

const Contact = () => {
  const [result, formAction, isPending] = useActionState(
    handleClick,
    null
  );

  const formRef = useRef(null);

  useEffect(() => {
    if (result?.success) {
      formRef.current?.reset();
    }
  }, [result]);

  return (
    <motion.section
      id="contact"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative w-full overflow-hidden bg-white px-4 py-20 text-black sm:px-8 md:px-12 lg:px-20"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl" />

      {/* Header */}
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
          Let's Work Together
        </motion.div>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Get In Touch
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
          Have a project, opportunity, or simply want to connect? Send me a
          message and I'll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Container */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-[0_20px_70px_rgba(0,0,0,0.07)] lg:grid-cols-[0.8fr_1.2fr]">

        {/* Left Side */}
        <div className="relative overflow-hidden bg-black p-7 text-white sm:p-10 lg:p-12">

          {/* Decorative Circle */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />

          <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Contact
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Let's build something
              <span className="block text-white/40">
                meaningful.
              </span>
            </h3>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/50">
              I'm always open to discussing new projects, creative ideas,
              freelance opportunities, or potential collaborations.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm">
                  @
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/30">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-white/80">
                    Let's connect via the form
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm">
                  ↗
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/30">
                    Response
                  </p>

                  <p className="mt-1 text-sm text-white/80">
                    Usually within 24–48 hours
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Text */}
            <div className="mt-16 border-t border-white/10 pt-5">
              <p className="text-xs text-white/30">
                Available for internships, freelance work & collaborations.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-6 sm:p-8 lg:p-12">

          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Send a Message
            </p>

            <h3 className="mt-2 text-2xl font-bold tracking-tight">
              Tell me about your idea.
            </h3>
          </div>

          <form
            ref={formRef}
            action={formAction}
            className="space-y-5"
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-semibold text-gray-600"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="w-full rounded-xl border border-black/[0.08] bg-gray-50 px-4 py-3.5 text-sm text-black outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-black/30 focus:bg-white focus:ring-4 focus:ring-black/[0.04]"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold text-gray-600"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="w-full rounded-xl border border-black/[0.08] bg-gray-50 px-4 py-3.5 text-sm text-black outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-black/30 focus:bg-white focus:ring-4 focus:ring-black/[0.04]"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold text-gray-600"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell me a little about your project..."
                required
                rows={6}
                className="w-full resize-none rounded-xl border border-black/[0.08] bg-gray-50 px-4 py-3.5 text-sm text-black outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-black/30 focus:bg-white focus:ring-4 focus:ring-black/[0.04]"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isPending}
              whileHover={{
                scale: isPending ? 1 : 1.02,
              }}
              whileTap={{
                scale: isPending ? 1 : 0.98,
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:bg-gray-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPending ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span className="text-base">↗</span>
                </>
              )}
            </motion.button>

            {/* Success */}
            {result?.success && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-700"
              >
                ✓ {result.message}
              </motion.div>
            )}

            {/* Error */}
            {result && !result.success && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-700"
              >
                {result.message}
              </motion.div>
            )}

          </form>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.5,
        }}
        className="relative z-10 mt-10 text-center"
      >
        <p className="text-xs text-gray-400">
          Have an idea? Let's turn it into something real.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Contact;