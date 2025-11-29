"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative pb-10 px-6 md:px-24 max-w-6xl mx-auto min-h-[75vh] flex flex-col justify-center text-center overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />

            {/* Floating Elements (Decorative) */}
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-[10%] text-emerald-500/10 text-7xl font-mono font-bold select-none pointer-events-none"
            >
                {"<"}
            </motion.div>
            <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-40 right-[10%] text-emerald-500/10 text-7xl font-mono font-bold select-none pointer-events-none"
            >
                {"/>"}
            </motion.div>
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 right-[20%] text-emerald-500/5 text-9xl font-mono font-bold select-none pointer-events-none"
            >
                {"{ }"}
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-emerald-400 font-mono mb-6 tracking-wide"
            >
                Hi, my name is
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-8xl font-extrabold text-white leading-tight tracking-tighter"
            >
                Sheshakanth<span className="text-emerald-500">.</span>
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-slate-400 mt-4 leading-tight"
            >
                I build things for the web.
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed"
            >
                I am a dedicated Frontend Developer with a passion for building high-performance,
                accessible, and visually stunning web applications. With a strong foundation in
                modern JavaScript frameworks and a keen eye for design, I transform complex
                requirements into seamless user experiences.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-6 mt-12"
            >
                <a
                    href="#projects"
                    className="group relative px-8 py-4 bg-emerald-500 text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                >
                    <span className="relative z-10">View projects</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>

                <a
                    href="#contact"
                    className="group px-8 py-4 text-emerald-400 font-medium border border-emerald-500/30 rounded-full hover:bg-emerald-500/10 transition-all hover:scale-105"
                >
                    Let’s build something together
                </a>
            </motion.div>
        </section>
    );
}
