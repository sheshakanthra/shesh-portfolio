"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3 / Tailwind CSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Git & GitHub",
  "Responsive Design",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-32"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-emerald-400 font-mono mb-3"
      >
        02. Skills
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-5xl font-bold text-gray-100 mb-10"
      >
        Technologies I use~
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-300">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-lg hover:border-emerald-400/50 transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
