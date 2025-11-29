"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";

function HoloCard() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 200);
        y.set(yPct * 200);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-sm aspect-[4/5] rounded-xl bg-slate-900/80 border border-emerald-500/30 backdrop-blur-sm cursor-pointer group"
        >
            {/* Scanning Line */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400/50 shadow-[0_0_20px_rgba(52,211,153,0.8)] animate-scan" />
            </div>

            {/* Card Content */}
            <div
                style={{ transform: "translateZ(50px)" }}
                className="absolute inset-0 flex flex-col justify-between p-8"
            >
                <div className="flex justify-between items-start">
                    <div className="text-emerald-400 font-mono text-xs tracking-widest">
                        ID: SHESH-DEV-01
                    </div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                </div>

                <div className="space-y-4">
                    <div className="space-y-1">
                        <div className="text-xs text-slate-400 uppercase tracking-wider">Role</div>
                        <div className="text-xl font-bold text-white">Frontend Architect</div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-xs text-slate-400 uppercase tracking-wider">Specialty</div>
                        <div className="text-xl font-bold text-white">Web & App Development</div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-xs text-slate-400 uppercase tracking-wider">Level</div>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-8 h-2 bg-emerald-500/80 rounded-sm" />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-emerald-500/30 pt-4">
                    <div className="flex justify-between text-xs font-mono text-emerald-300/80">
                        <span>STATUS: ONLINE</span>
                        <span>PING: 14ms</span>
                    </div>
                </div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:20px_20px] rounded-xl pointer-events-none" />
        </motion.div>
    );
}

export default function About() {
    return (
        <section id="about" className="max-w-7xl mx-auto px-6 md:px-24 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Text */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >

                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Who I Am Behind <br />
                            <span className="text-slate-500">the Code.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-lg text-slate-300 leading-relaxed"
                    >
                        <p>
                            I am a creative <strong className="text-emerald-400">Web & App Developer</strong> with a specialized focus on
                            Frontend Engineering. My journey is defined by a relentless pursuit of pixel-perfection
                            and user-centric design. I don't just write code; I architect digital experiences that
                            are robust, scalable, and intuitive.
                        </p>
                        <p>
                            With a deep command of <strong className="text-white">React</strong>, <strong className="text-white">Next.js</strong>,
                            and <strong className="text-white">Tailwind CSS</strong>, I build applications that perform seamlessly across all devices.
                            Whether it's a complex dashboard or a high-conversion landing page, I bring a blend of
                            technical expertise and artistic vision to every project.
                        </p>
                        <p>
                            Beyond the screen, I am a problem solver and a lifelong learner, constantly exploring
                            new technologies to stay at the forefront of the ever-evolving web landscape.
                        </p>
                    </motion.div>
                </div>

                {/* Right Column: Creative Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center lg:justify-end perspective-1000"
                >
                    <HoloCard />
                </motion.div>
            </div>
        </section>
    );
}
