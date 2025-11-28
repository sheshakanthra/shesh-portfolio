"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "Modern storefront with product listing, filters, cart preview, and mobile-first layout built using Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio focused on smooth animations, clean typography, and a subtle hacker theme.",
    tech: ["React", "Framer Motion"],
    link: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section>
      <SectionTitle index="03.">Projects</SectionTitle>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-md shadow-emerald-500/10 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-50 group-hover:text-emerald-400">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-emerald-300/90">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-emerald-500/40 px-3 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-3 flex gap-3 text-xs md:mt-0">
                <a
                  href={project.link}
                  className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-emerald-500 hover:text-emerald-400"
                >
                  Live demo
                </a>
                <a
                  href={project.code}
                  className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-emerald-500 hover:text-emerald-400"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
