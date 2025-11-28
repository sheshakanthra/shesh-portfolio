"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col gap-8 md:flex-row md:items-center">
      <div className="flex-1 space-y-6">
        <motion.p
          className="font-mono text-xs text-emerald-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="block text-slate-50">Sheshakanth.</span>
          <span className="mt-2 block text-slate-400">
            I build things for the web.
          </span>
        </motion.h1>

        <motion.p
          className="max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I&apos;m a frontend developer focused on crafting modern, responsive
          and visually clean web experiences using React, Next.js and Tailwind
          CSS. I love turning ideas into polished interfaces with subtle motion
          and a hackerish neon vibe.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#projects"
            className="rounded-full bg-emerald-500 px-6 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="text-sm text-slate-300/80 underline-offset-4 hover:text-emerald-400 hover:underline"
          >
            Let&apos;s build something together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
