"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative border-t border-foreground/10 mt-20 py-10 text-center text-sm text-foreground/70"
    >
      {/* Background gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />

      <div className="flex flex-col items-center gap-4">
        {/* Social links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/201solafide"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/solafide-zamili"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:solafidezamili1945@email.com"
            className="hover:text-foreground transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-foreground/70">
          © {new Date().getFullYear()} Zamili, Solafide. Built with{" "}
          <span className="font-semibold">Next.js</span> +{" "}
          <span className="font-semibold">Tailwind</span>.
        </p>
      </div>
    </motion.footer>
  );
}
