"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const projects = [
  {
    title: "Prototype of automatic coffee drying system using Mamdani Fuzzy Logic",
    description:
      "A prototype implementing an automated coffee drying system using Mamdani Fuzzy Logic.This system intelligently automates canopy closure and heater activation, ensuring optimal coffee bean drying regardless of environmental conditions.",      
    link: "https://github.com/201solafide/penjemur-kopi.git",
  },
  {
    title: "Digital Image Classification",
    description:
      "Classifying motorcycle types in the parking area of the Sumatra Institute of Technology (ITERA) using the Convolutional Neural Network (CNN) method with the MobileNetV2 architecture.",
    link: "https://github.com/201solafide/klasifikasi-citra-digital.git",
  },
  {
    title: "System Information Geographic Embung of Institute of Technology Sumatra (ITERA)",
    description:
      "A web-based Geographic Information System (GIS) for managing and visualizing data related to the Embung of the Sumatra Institute of Technology (ITERA). This system provides an interactive map interface for users to explore various aspects of the embung's data.",
    link: "https://github.com/201solafide/embung-itera.git",
  },
  {
    title: "",
    description:
      "A web app that visualizes CPU, Memory, and Disk usage using Flask + Firebase Realtime Database.",
    link: "https://github/com/201solafide/"
  }
];

export default function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="border border-foreground/10 rounded-2xl p-6 shadow-sm hover:shadow-lg bg-background/50 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-foreground/70 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-medium"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
