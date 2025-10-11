"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-6"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 -z-10" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          <p>{"Hi I'm Solafide Zamili 👋"}</p>

        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-lg text-muted-foreground mb-6"
        >
          Informatics Engineering Student | IT Support | Network & Software Enthusiast.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <a href="/files/SolafideZamili_TOEFL.pdf">
            <button className="px-6 py-3 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/10 transition">
              Download TOEFL Certificate
            </button>
          </a>
          <a
            href="/files/CV - Solafide Zamili.pdf"
          >
            <button className="px-6 py-3 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/10 transition">
              Curriculum vitae
            </button>
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
          >
            View Projects
          </a>

        </motion.div>
      </motion.div>
    </section>
  );
}

