"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-32 text-gray-300"
    >
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-emerald-400 font-mono mb-3"
      >
        04. About Me
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-bold text-gray-100 mb-10"
      >
        Who I Am Behind the Code
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6 leading-relaxed text-lg text-gray-400"
      >
        <p>
          Hey, I'm Sheshakanth — a passionate frontend developer who loves
          building visually immersive, responsive, and clean web experiences.
          I focus on blending beautiful UI with solid engineering.
        </p>

        <p>
          I’m currently diving deep into modern web technologies like{" "}
          <span className="text-emerald-400 font-semibold">React</span>,{" "}
          <span className="text-emerald-400 font-semibold">Next.js</span>, and{" "}
          <span className="text-emerald-400 font-semibold">Tailwind CSS</span>.
          I love crafting UIs that feel alive and interactive.
        </p>

        <p>
          Outside of coding, I enjoy gaming, exploring new tech, hitting the gym,
          and constantly improving my skills to become a world-class developer.
        </p>
      </motion.div>
    </section>
  );
}
