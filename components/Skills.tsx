"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

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
    <section>
      <SectionTitle index="02.">Skills</SectionTitle>
      <motion.div
        className="grid gap-3 sm:grid-cols-2 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.05 },
          },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="rounded-xl border border-emerald-500/20 bg-slate-900/40 px-4 py-3 text-sm text-slate-200 shadow-sm shadow-emerald-500/10 backdrop-blur-sm"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            • {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
