"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiUser, FiMessageSquare } from "react-icons/fi";

export default function Contact() {
    return (
        <section className="relative py-12 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left Side: Socials & Info */}
                        <div className="bg-emerald-900/20 p-10 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-50" />

                            <div className="relative z-10 space-y-6">
                                <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
                                <p className="text-emerald-100/80 leading-relaxed">
                                    I'm currently open to new opportunities and collaborations.
                                    Whether you have a question or just want to say hi, feel free to drop a message!
                                </p>
                            </div>

                            <div className="relative z-10 mt-12 space-y-4">
                                <SocialRow
                                    href="https://github.com/sheshakanthra"
                                    icon={<FiGithub />}
                                    label="Github"
                                    sub="Explore my code"
                                />
                                <SocialRow
                                    href="https://www.linkedin.com"
                                    icon={<FiLinkedin />}
                                    label="LinkedIn"
                                    sub="Connect professionally"
                                />
                                <SocialRow
                                    href="mailto:sheshubdm@gmail.com"
                                    icon={<FiMail />}
                                    label="Email"
                                    sub="sheshubdm@gmail.com"
                                />
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="p-10 bg-slate-950/50">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400 ml-1">Your Name</label>
                                    <div className="relative">
                                        <FiUser className="absolute left-4 top-3.5 text-slate-500" />
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-slate-200 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400 ml-1">Your Email</label>
                                    <div className="relative">
                                        <FiMail className="absolute left-4 top-3.5 text-slate-500" />
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-slate-200 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                                    <div className="relative">
                                        <FiMessageSquare className="absolute left-4 top-3.5 text-slate-500" />
                                        <textarea
                                            rows={4}
                                            placeholder="Tell me about your project..."
                                            className="w-full bg-slate-900/50 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-slate-200 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-slate-600 resize-none"
                                        />
                                    </div>
                                </div>

                                <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-4 rounded-xl transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 group">
                                    <span>Send Message</span>
                                    <FiSend className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialRow({ href, icon, label, sub }: { href: string; icon: React.ReactNode; label: string; sub: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all group"
        >
            <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <div className="font-bold text-slate-200">{label}</div>
                <div className="text-xs text-emerald-100/60">{sub}</div>
            </div>
        </a>
    );
}
