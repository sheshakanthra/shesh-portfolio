"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiGithub,
} from "react-icons/si";

const skills = [
    {
        name: "HTML5",
        level: 80,
        description: "Foundation of every webpage, semantic and clean structure.",
        icon: <SiHtml5 className="text-orange-500 text-4xl" />,
    },
    {
        name: "CSS3 / Tailwind CSS",
        level: 75,
        description: "Modern responsive UI, utility-first design, animations.",
        icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
    },
    {
        name: "JavaScript",
        level: 80,
        description: "Core logic, DOM manipulation, async workflows.",
        icon: <SiJavascript className="text-yellow-400 text-4xl" />,
    },
    {
        name: "TypeScript",
        level: 70,
        description: "Strong typing, maintainable and scalable FE architecture.",
        icon: <SiTypescript className="text-blue-500 text-4xl" />,
    },
    {
        name: "React",
        level: 70,
        description: "Reusable components, hooks, state management.",
        icon: <SiReact className="text-cyan-300 text-4xl" />,
    },
    {
        name: "Next.js",
        level: 70,
        description: "Fullstack React framework, SSR, routing, optimization.",
        icon: <SiNextdotjs className="text-white text-4xl" />,
    },
    {
        name: "Git & GitHub",
        level: 70,
        description: "Version control, branching, clean development workflow.",
        icon: <SiGithub className="text-gray-200 text-4xl" />,
    },
    {
        name: "Responsive Design",
        level: 75,
        description: "Ensuring flawless UI across all devices.",
        icon: <SiCss3 className="text-blue-400 text-4xl" />,
    },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                bounce: 0.4,
            }}
            onMouseMove={handleMouseMove}
            className="group relative rounded-xl border border-white/10 bg-slate-900/50 p-6 hover:border-emerald-500/30 transition-colors overflow-hidden"
        >
            {/* Spotlight Gradient */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Progress Ring */}
                <div className="relative mb-5 w-20 h-20">
                    <svg className="w-full h-full -rotate-90">
                        <circle
                            cx="40"
                            cy="40"
                            r="35"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="6"
                            fill="none"
                        />
                        <motion.circle
                            cx="40"
                            cy="40"
                            r="35"
                            stroke="#10b981"
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray={2 * Math.PI * 35}
                            initial={{ strokeDashoffset: 2 * Math.PI * 35 }}
                            whileInView={{
                                strokeDashoffset: 2 * Math.PI * 35 * (1 - skill.level / 100),
                            }}
                            transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center font-semibold text-white">
                        {skill.level}%
                    </span>
                </div>

                {/* Icon */}
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {skill.icon}
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                    {skill.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section
            id="skills"
            className="px-6 md:px-24 py-10 max-w-7xl mx-auto"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold text-white mb-6"
            >
                Technologies I Use
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-300 max-w-3xl text-lg mb-12"
            >
                A blend of creativity, clean coding practices, and modern tooling helps me
                build scalable, maintainable, and visually immersive user experiences.
            </motion.p>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
                ))}
            </div>
        </section>
    );
}
