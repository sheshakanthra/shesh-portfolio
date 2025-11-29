"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

const projects = [
    {
        title: "AI Chatbot WebApp",
        description:
            "A simple AI-powered chatbot website using Flask and web integration.",
        tags: ["Python", "Flask", "AI"],
        code: "https://github.com/sheshakanthra/ai-chatbot-webapp",
    },
    {
        title: "E-commerce KBR Organics",
        description:
            "Full-featured JavaScript-based e-commerce website built for KBR Organics.",
        tags: ["JavaScript", "Frontend"],
        code: "https://github.com/sheshakanthra/E-commerce-KBR-organics-",
    },
    {
        title: "Post-Dost (AI Social Post Generator)",
        description:
            "AI-powered content idea generator with culturally-aware flows and JWT auth.",
        tags: ["TypeScript", "Next.js", "JWT"],
        code: "https://github.com/sheshakanthra/post-dost",
    },
    {
        title: "Shesh Portfolio",
        description:
            "My own portfolio built with modern design, animations, and polished UI.",
        tags: ["Next.js", "TypeScript", "Portfolio"],
        code: "https://github.com/sheshakanthra/shesh-portfolio",
    },
    {
        title: "FaceScanAI",
        description:
            "AI-powered face recognition system leveraging computer vision for real-time scanning.",
        tags: ["Python", "OpenCV", "AI"],
        code: "https://github.com/sheshakanthra/FaceScanAI",
    },
    {
        title: "Expense Tracker",
        description:
            "A robust tool for tracking personal finances and visualizing spending habits.",
        tags: ["Python", "Data Analysis"],
        code: "https://github.com/sheshakanthra/expense_tracker",
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
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
            className="group relative rounded-2xl border border-white/10 bg-slate-900/50 p-8 hover:border-emerald-500/30 transition-colors overflow-hidden"
        >
            {/* Spotlight Gradient */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative z-10">
                <h3 className="text-3xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="bg-emerald-500/10 border border-emerald-500/20
                         text-emerald-300 px-3 py-1 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-8">
                    <a
                        href={project.code}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 hover:bg-emerald-500/20 
                       border border-white/10 hover:border-emerald-500/50 text-white transition-all group-hover:translate-x-1"
                    >
                        <span>View Code</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="px-6 md:px-24 py-16 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-6xl font-bold text-white mb-10 tracking-tight"
            >
                Featured Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
