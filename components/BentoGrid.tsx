"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiGithub, FiMusic, FiCpu, FiGlobe, FiCode, FiLayout } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiFigma } from "react-icons/si";

export default function BentoGrid() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            };
            setTime(now.toLocaleTimeString("en-US", options));
        };
        updateTime();
        const interval = setInterval(updateTime, 60000); // Update every minute is enough for HH:MM
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="px-6 py-20 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    A Glimpse Into My World
                </h2>
                <p className="text-slate-400 max-w-2xl">
                    More than just code. Here's what I'm up to, what I'm listening to, and the tech that powers my work.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

                {/* Card 1: Location (Large) */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="md:col-span-2 rounded-3xl border border-white/10 bg-slate-900/50 p-8 relative overflow-hidden group"
                >
                    {/* Abstract Map Background */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="0.5" />
                            <path d="M0 100 C 30 20 70 20 100 100 Z" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="0.5" />
                            <path d="M0 100 C 40 40 60 40 100 100 Z" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="0.5" />
                            {/* New Scan Line Animation */}
                            <motion.line
                                x1="0" y1="0" x2="100" y2="100"
                                stroke="rgba(16, 185, 129, 0.5)"
                                strokeWidth="0.5"
                                animate={{ x1: [0, 100], y1: [0, 0], x2: [0, 100], y2: [100, 100] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />
                        </svg>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-900/80 to-slate-900" />
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            {/* Live Time Display */}
                            <div className="flex flex-col">
                                <span className="text-xs font-mono text-emerald-400/80 uppercase tracking-wider">Local Time</span>
                                <span className="text-3xl font-bold text-white font-mono tracking-widest">{time}</span>
                            </div>
                            <FiGlobe className="text-6xl text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors" />
                        </div>
                        <div>
                            <div className="bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 w-fit px-4 py-2 rounded-full flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                <span className="text-emerald-300 text-sm font-medium">Bengaluru, India</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Based in the Silicon Valley of India</h3>
                        </div>
                    </div>
                </motion.div>

                {/* Card 2: Tech Stack (Tall) */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="md:row-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 flex flex-col justify-between overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16" />

                    <div>
                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                            <FiCpu className="text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">My Stack</h3>
                        <p className="text-slate-400 text-sm">The tools I use to build the future.</p>
                    </div>

                    {/* Decorative Code Snippet */}
                    <div className="my-8 space-y-2 opacity-30 font-mono text-xs text-emerald-300 overflow-hidden">
                        <div>const stack = {"{"}</div>
                        <div className="pl-4">frontend: "Next.js",</div>
                        <div className="pl-4">styling: "Tailwind",</div>
                        <div className="pl-4">backend: "Node.js",</div>
                        <div className="pl-4">database: "PostgreSQL"</div>
                        <div>{"}"};</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiPython, SiFigma].map((Icon, i) => (
                            <div key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group/icon">
                                <Icon className="text-2xl text-slate-300 group-hover/icon:text-emerald-400 transition-colors" />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Card 3: Problem Solving (Small) */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 flex flex-col justify-between group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent" />

                    <div className="flex justify-between items-start relative z-10">
                        <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                            <FiCode className="text-2xl" />
                        </div>
                        <div className="px-2 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
                            Intermediate
                        </div>
                    </div>

                    {/* Topics List */}
                    <div className="space-y-3 mt-4 relative z-10">
                        <div className="space-y-1">
                            <div className="flex justify-between text-xs text-slate-400">
                                <span>Data Structures & Algorithms</span>
                                <span>60%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 w-[60%]" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="flex justify-between text-xs text-slate-400">
                                <span>Competitive Programming</span>
                                <span>75%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 w-[75%]" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1 relative z-10 mt-2">
                        <h3 className="text-lg font-bold text-white">Problem Solving</h3>
                        <p className="text-xs text-slate-400">DSA & Logic Building.</p>
                    </div>
                </motion.div>

                {/* Card 4: Music / Vibe (Small) */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 flex flex-col justify-between group overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex justify-between items-start relative z-10">
                        <div className="p-3 rounded-xl bg-pink-500/20 text-pink-400">
                            <FiMusic className="text-2xl" />
                        </div>
                        <div className="flex gap-1 items-end h-6">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-1 bg-pink-400/50 rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }} />
                            ))}
                        </div>
                    </div>

                    {/* Waveform Filler */}
                    <div className="flex items-center justify-center gap-1 h-12 my-2">
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ height: [10, 30, 10] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                                className="w-1.5 bg-pink-500/30 rounded-full"
                            />
                        ))}
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-lg font-bold text-white">Coding Vibe</h3>
                        <p className="text-xs text-slate-400 truncate">Lo-Fi Beats to Relax/Study to</p>
                    </div>
                </motion.div>

                {/* Card 5: Frontend Engineering (Wide) */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="md:col-span-2 rounded-3xl border border-white/10 bg-slate-900/50 p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
                >
                    <div className="relative z-10 max-w-md">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                                <FiLayout className="text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Frontend Engineering</h3>
                        </div>
                        <p className="text-slate-400 mb-6">
                            I specialize in building pixel-perfect, responsive, and accessible web applications that look great on any device.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Responsive Design", "Performance", "Accessibility", "Micro-interactions"].map((tag, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Visual Abstract UI */}
                    <div className="relative z-10 w-full md:w-1/2 h-32 md:h-full flex items-center justify-center">
                        <div className="relative w-full max-w-[200px] aspect-video bg-slate-800 rounded-lg border border-slate-700 p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="flex gap-1 mb-2">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-3/4 bg-slate-700 rounded" />
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="h-16 bg-slate-700/50 rounded" />
                                    <div className="h-16 bg-slate-700/50 rounded" />
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-4 -bottom-4 bg-emerald-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                            >
                                100% Lighthouse
                            </motion.div>
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-l from-emerald-500/5 to-transparent" />
                </motion.div>

            </div>
        </section>
    );
}
