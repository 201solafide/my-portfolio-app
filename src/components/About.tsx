"use client";
import { motion } from "framer-motion";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground max-w-2xl">
            I&apos;m a final-year computer science student who loves exploring web development, IoT, and machine learning.
            I enjoy building projects that are not only functional but also polished with modern design principles.
        </p>
      </motion.div>
    </Section>
  );
}
