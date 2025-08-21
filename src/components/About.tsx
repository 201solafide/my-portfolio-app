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
            I am a dedicated Informatics Engineering student nearing graduation from the Sumatra Institute of Technology, with a GPA of 3.34. My practical experience as an IT Support and Network Administrator at PLN UPP SUMBAGUT 3 has given me strong skills in network maintenance and troubleshooting LAN connections. As a former campus community leader and a practicum assistant, I have developed excellent communication and problem-solving abilities within a team environment. I am highly adaptable, with technical expertise spanning web development, IoT, and machine learning, and am committed to continuous skill improvement to contribute effectively in a dynamic workplace.
        </p>
      </motion.div>
    </Section>
  );
}
