"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section>
      <SectionTitle index="04.">About me</SectionTitle>
      <motion.div
        className="grid gap-8 md:grid-cols-[3fr,2fr]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
          I&apos;m Sheshakanth, a frontend developer who loves crafting
          high-quality web experiences with a mix of clean UI and subtle
          cinematic motion. I enjoy working with React, Next.js, TypeScript and
          Tailwind CSS to turn ideas into polished, responsive interfaces.
          <br />
          <br />
          I care about details: typography, spacing, micro-interactions and
          performance. Right now I&apos;m focused on building real-world
          projects like e-commerce experiences and modern portfolios while
          sharpening my skills every day.
        </p>
        <div className="flex items-center justify-center">
          <div className="relative h-40 w-40 overflow-hidden rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/20 to-slate-900 shadow-lg shadow-emerald-500/30">
            {/* Replace this with <Image /> and your actual photo later */}
            <span className="absolute inset-0 flex items-center justify-center text-xs text-slate-300/80">
              Your photo here
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
