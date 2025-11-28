"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section>
      <SectionTitle index="05.">Contact</SectionTitle>
      <motion.div
        className="rounded-2xl border border-emerald-500/20 bg-slate-900/40 p-6 shadow-lg shadow-emerald-500/10 backdrop-blur"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="max-w-lg text-sm text-slate-300 sm:text-base">
          Got an idea, project or collaboration in mind? I&apos;m always
          interested in building cool things with good people. Reach out and
          let&apos;s see what we can create.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          <a
            href="mailto:sheshubdm@gmail.com"
            className="rounded-full bg-emerald-500 px-6 py-2 font-medium text-slate-950 hover:bg-emerald-400"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="text-slate-300/80 hover:text-emerald-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sheshakanthra"
            target="_blank"
            className="text-slate-300/80 hover:text-emerald-400"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
